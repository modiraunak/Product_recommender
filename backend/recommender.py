import pandas as pd

PRODUCTS_CSV = 'data/products.csv'   # Update the path if necessary
USERS_CSV = 'data/user_data.csv'

# Load product and user data from CSV files
def load_data():
    products = pd.read_csv(PRODUCTS_CSV)
    users = pd.read_csv(USERS_CSV)
    return products, users

# Function to generate recommendations for a given user_id
def recommend_for_user(user_id):
    products, users = load_data()
    
    # Dummy logic: Fetch 3 random products for testing
    recommended_products = products.sample(3)
    
    # Map the products to the format expected by the frontend
    recommendations = []
    for _, row in recommended_products.iterrows():
        recommendations.append({
            "product_name": row['product_name'],
            "price": row['price'],
            "image_url": f"/assets/images/{row['image_name']}"
        })
    
    return recommendations
