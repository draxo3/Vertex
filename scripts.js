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
    var newWindow = window.open("", "_blank", "width=400,height=400");
    newWindow.document.write(`
        <html>
        <head>
            <title>${packName}</title>
            <style>
                body {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: #000;
                    color: #FFF;
                    font-family: Arial, sans-serif;
                }
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 10px;
                }
                button {
                    padding: 0.5em 1em;
                    border: none;
                    border-radius: 5px;
                    background-color: #1E90FF;
                    color: #FFF;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #0056b3;
                }
                input[type="email"] {
                    padding: 0.5em;
                    width: 200px;
                    border: none;
                    border-radius: 5px;
                    background-color: #333;
                    color: #FFF;
                    margin-bottom: 1em;
                }
            </style>
        </head>
        <body>
            <img src="${imageSrc}" alt="${packName}">
            <p>${packName}</p>
            <button id="payNowButton">Pay Now - $5</button>
            <div id="paymentForm" style="display: none;">
                <input type="email" id="emailInput" placeholder="Enter your email">
                <button id="paypalButton">Pay with PayPal</button>
            </div>
            <script>
                document.getElementById('payNowButton').addEventListener('click', function() {
                    document.getElementById('paymentForm').style.display = 'block';
                });

                document.getElementById('paypalButton').addEventListener('click', function() {
                    var email = document.getElementById('emailInput').value;
                    if (email) {
                        alert('Redirecting to PayPal...');
                        // Assuming payment verification and download initiation
                        window.location.href = 'https://www.paypal.com/signin?useraction=commit&token=SZMM5D8UPDNKG&amount=5';
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
            </script>
        </body>
        </html>
    `);
}
