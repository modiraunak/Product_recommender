from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from database import init_db, db
from models import Order

app = Flask(__name__, static_folder='../frontend', static_url_path='/')
CORS(app)  # Enable CORS for frontend-backend communication
init_db(app)

# Serve HTML files directly from Flask
@app.route('/')
def serve_index():
    return send_from_directory('../frontend', 'index.html')

@app.route('/order-history')
def serve_order_history():
    return send_from_directory('../frontend', 'orderHistory.html')

# API to confirm purchase
@app.route('/confirm-purchase', methods=['POST'])
def confirm_purchase():
    data = request.json
    new_order = Order(
        user_id=data['user_id'],
        product_name=data['product_name'],
        price=data['price']
    )
    db.session.add(new_order)
    db.session.commit()
    return jsonify({"message": "Order Confirmed!"}), 200

# API to fetch order history
@app.route('/order-history/<user_id>', methods=['GET'])
def order_history(user_id):
    orders = Order.query.filter_by(user_id=user_id).all()
    order_list = [{
        "product_name": order.product_name,
        "price": order.price,
        "timestamp": order.timestamp.strftime("%Y-%m-%d %H:%M:%S")
    } for order in orders]
    return jsonify(order_list), 200

if __name__ == '__main__':
    app.run(debug=True)
