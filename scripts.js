document.getElementById('infoButton').addEventListener('click', function() {
    var panels = document.querySelectorAll('.panel');
    panels.forEach(function(panel) {
        if (panel.style.display === 'none' || panel.style.display === '') {
            panel.style.display = 'block';
        } else {
            panel.style.display = 'none';
        }
    });
});

function openPack(imageSrc, packName) {
    var paymentPanel = document.getElementById('paymentPanel');
    paymentPanel.style.display = 'block';
    paymentPanel.innerHTML = `
        <img src="${imageSrc}" alt="${packName}">
        <p>${packName}</p>
        <input type="email" id="emailInput" placeholder="Enter your email"><br>
        <button id="payNowButton" style="background-color: #555; color: #FFF;">Pay Now - $5</button>
        <div id="paymentForm" style="display: none;">
            <button id="paypalButton">Pay with PayPal</button>
        </div>
        <button class="close-button" onclick="closePanel()">Close</button>
    `;

    document.getElementById('payNowButton').addEventListener('click', function() {
        document.getElementById('paymentForm').style.display = 'block';
    });

    document.getElementById('paypalButton').addEventListener('click', function() {
        var email = document.getElementById('emailInput').value;
        if (email) {
            alert('Redirecting to PayPal...');
            // Simulate payment verification and download initiation
            setTimeout(() => {
                alert('Payment Verified! Downloading file...');
                var link = document.createElement('a');
                link.href = 'data:text/plain;charset=utf-8,TEST';
                link.download = 'TEST.txt';
                link.click();
            }, 5000); // Simulate delay for payment processing
        } else {
            alert('Please enter your email address.');
        }
    });
}

function closePanel() {
    var paymentPanel = document.getElementById('paymentPanel');
    paymentPanel.style.display = 'none';
    paymentPanel.innerHTML = '';
}

function closeProfilePanel() {
    var profilePanel = document.getElementById('profilePanel');
    profilePanel.style.display = 'none';
}

document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var packs = document.querySelectorAll('.pack');
    packs.forEach(function(pack) {
        var packName = pack.querySelector('p').textContent.toLowerCase();
        if (packName.includes(searchValue)) {
            var imgSrc = pack.querySelector('img').src;
            openPack(imgSrc, packName);
        }
    });
});

document.getElementById('profileButton').addEventListener('click', function() {
    var profilePanel = document.getElementById('profilePanel');
    profilePanel.style.display = 'block';
    
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    var storedProfilePicture = localStorage.getItem('profilePicture');

    profilePanel.innerHTML = `
        <h2>Profile Settings</h2>
        <form>
            <label for="profileEmail">Email:</label>
            <input type="email" id="profileEmail" placeholder="Enter your email" value="${storedEmail || ''}"><br>
            <label for="profilePassword">Password:</label>
            <input type="password" id="profilePassword" placeholder="Enter your password" value="${storedPassword || ''}"><br>
            <label for="profilePicture">Profile Picture:</label>
            <input type="file" id="profilePicture" accept="image/*"><br>
            <button type="button" id="saveProfileButton">Save</button>
        </form>
        <button class="close-button" onclick="closeProfilePanel()">Close</button>
    `;

    document.getElementById('saveProfileButton').addEventListener('click', function() {
        var email = document.getElementById('profileEmail').value;
        var password = document.getElementById('profilePassword').value;
        var profilePictureFile = document.getElementById('profilePicture').files[0];

        if (email && password) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            
            if (profilePictureFile) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    localStorage.setItem('profilePicture', e.target.result);
                    document.getElementById('profileButton').src = e.target.result;
                };
                reader.readAsDataURL(profilePictureFile);
            }

            alert('Profile saved!');
            closeProfilePanel();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

window.addEventListener('load', function() {
    var storedProfilePicture = localStorage.getItem('profilePicture');
    if (storedProfilePicture) {
        document.getElementById('profileButton').src = storedProfilePicture;
    }
});
