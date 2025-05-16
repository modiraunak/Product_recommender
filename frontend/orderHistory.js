window.onload = function() {
    const userId = prompt("Enter your User ID to see your order history:");
    fetch(`http://127.0.0.1:5000/order-history/${userId}`)
        .then(response => response.json())
        .then(data => {
            const historyDiv = document.getElementById("order-history");
            if (data.length === 0) {
                historyDiv.innerHTML = "<h3>No orders found.</h3>";
            } else {
                const table = document.createElement('table');
                table.className = 'history-table';
                const headerRow = `<tr><th>Product Name</th><th>Price</th><th>Date & Time</th></tr>`;
                table.innerHTML = headerRow;

                data.forEach(order => {
                    const row = `<tr>
                        <td>${order.product_name}</td>
                        <td>${order.price}</td>
                        <td>${order.timestamp}</td>
                    </tr>`;
                    table.innerHTML += row;
                });

                historyDiv.appendChild(table);
            }
        })
        .catch(error => console.error('Error:', error));
};