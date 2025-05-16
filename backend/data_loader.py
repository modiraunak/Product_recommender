import pandas as pd

def load_data():
    products = pd.read_csv('data/products.csv')
    user_data = pd.read_csv('data/user_data.csv')
    return products, user_data

