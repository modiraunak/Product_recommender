function fetchRecommendations() {
    const userId = document.getElementById("user_id").value;
    fetch(`http://localhost:5000/recommend?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("recommendations");
            list.innerHTML = "";
            data.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.product_name} - ${item.category}`;
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error:", error));
}
