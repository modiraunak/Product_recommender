import pandas as pd

# Load Data
products = pd.read_csv('data/products.csv')
user_data = pd.read_csv('data/user_data.csv')

def get_recommendations(user_id):
    # Get all products that the user has interacted with
    user_products = user_data[user_data['user_id'] == user_id]['product_id'].tolist()

    # For simplicity, just recommend the next 5 products after what the user has bought
    recommended_products = products[~products['product_id'].isin(user_products)].head(5)
    
    # Return as a list of dictionaries
    return recommended_products[['product_name', 'category']].to_dict(orient='records')
