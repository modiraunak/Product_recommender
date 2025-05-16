function fetchRecommendations() {
    const userId = document.getElementById("user_id").value;

    if (!userId) {
        alert("Please enter a User ID!");
        return;
    }

    fetch(`http://127.0.0.1:5000/recommend?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("recommendations");
            container.innerHTML = "";

            if (data.length === 0) {
                container.innerHTML = "<h3>No recommendations found.</h3>";
            } else {
                data.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "product-card";
                    card.innerHTML = `
                        <img src="${item.image_url}" alt="${item.product_name}">
                        <h4>${item.product_name}</h4>
                        <p class="price-tag">$${item.price}</p>
                        <button onclick='confirmPurchase("${item.product_name}", "${item.price}")' class="buy-button">Buy Now</button>
                    `;
                    container.appendChild(card);
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function confirmPurchase(productName, price) {
    const userId = document.getElementById("user_id").value;

    fetch('http://127.0.0.1:5000/confirm-purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userId,
            product_name: productName,
            price: price
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
