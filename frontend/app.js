function fetchRecommendations() {
    const userId = document.getElementById("user_id").value;

    fetch(`http://127.0.0.1:5000/recommend?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("recommendations");
            list.innerHTML = "";  // Clear previous results
            
            if (data.length === 0) {
                list.innerHTML = "<li>No recommendations found.</li>";
            } else {
                data.forEach(item => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${item.product_name} - ${item.category}`;
                    list.appendChild(listItem);
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
