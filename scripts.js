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
        <button id="payNowButton">Pay Now - $5</button>
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
    profilePanel.innerHTML = '';
}

// Search functionality
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

// Profile management
document.getElementById('profileButton').addEventListener('click', function() {
    var profilePanel = document.getElementById('profilePanel');
    profilePanel.style.display = 'block';
    profilePanel.innerHTML = `
        <h2>Profile Settings</h2>
        <form>
            <label for="profileEmail">Email:</label>
            <input type="email" id="profileEmail" placeholder="Enter your email"><br>
            <label for="profilePassword">Password:</label>
            <input type="password" id="profilePassword" placeholder="Enter your password"><br>
            <label for="profilePicture">Profile Picture:</label>
            <input type="file" id="profilePicture"><br>
            <button type="button" id="saveProfileButton">Save</button>
        </form>
        <button class="close-button" onclick="closeProfilePanel()">Close</button>
    `;

    document.getElementById('saveProfileButton').addEventListener('click', function() {
        var email = document.getElementById('profileEmail').value;
        var password = document.getElementById('profilePassword').value;
        var profilePicture = document.getElementById('profilePicture').files[0];
        if (email && password) {
            // Simulate saving profile information
            alert('Profile saved!');
            closeProfilePanel();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
