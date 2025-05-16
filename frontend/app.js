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
                        <h3>${item.product_name}</h3>
                        <p>Price: $${item.price}</p>
                    `;
                    container.appendChild(card);
                });
            }
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
}
