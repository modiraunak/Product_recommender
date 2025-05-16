from flask import Flask, request, jsonify
from database import init_db, db
from models import Order

app = Flask(__name__)
init_db(app)

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

if __name__ == '__main__':
    app.run(debug=True)