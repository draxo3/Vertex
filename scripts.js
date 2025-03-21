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
        <button id="payNowButton">Pay Now - $5</button>
        <div id="paymentForm" style="display: none;">
            <input type="email" id="emailInput" placeholder="Enter your email">
            <button id="paypalButton">Pay with PayPal</button>
        </div>
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
