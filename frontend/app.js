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

            if (!data.length) {
                container.innerHTML = "<h3>No recommendations found.</h3>";
            } else {
                data.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "product-card";
                    card.innerHTML = `
                        <img src="${item.image_url}" alt="${item.product_name}" />
                        <h4>${item.product_name}</h4>
                        <p>Price: ₹${item.price}</p>
                        <button onclick="handleBuyNow('${item.product_name}', '${item.price}')" class="buy-button">Buy Now</button>
                    `;
                    container.appendChild(card);
                });
            }
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
}

function handleBuyNow(productName, price) {
    const userId = document.getElementById("user_id").value;

    if (!userId) {
        alert("Please enter your User ID before purchasing!");
        return;
    }

    const purchaseData = {
        user_id: userId,
        product_name: productName,
        price: price
    };

    fetch('http://127.0.0.1:5000/confirm-purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchaseData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Order Confirmed!") {
            alert(`✅ Order for ${productName} confirmed!`);
        } else {
            alert(`❌ Failed to confirm order.`);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("❌ An error occurred. Try again.");
    });
}
