from database import db

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(50), nullable=False)
    product_name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.String(20), nullable=False)
    timestamp = db.Column(db.DateTime, default=db.func.current_timestamp())