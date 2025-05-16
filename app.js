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
            container.innerHTML = "";  // Clear previous results
            
            if (data.length === 0) {
                container.innerHTML = "<h3>No recommendations found.</h3>";
            } else {
                data.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "product-card";
                    card.innerHTML = `
                        <h4>${item.product_name}</h4>
                        <p><b>Category:</b> ${item.category}</p>
                    `;
                    container.appendChild(card);
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
