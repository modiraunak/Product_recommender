from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from recommender import recommend_for_user

app = Flask(__name__, static_folder='../frontend', static_url_path='/')
CORS(app)

# Serve Frontend (index.html)
@app.route('/')
def serve_index():
    return send_from_directory('../frontend', 'index.html')

# Serve Static Files (like CSS, JS, images)
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('../frontend', path)

# API Endpoint for Recommendations
@app.route('/recommend', methods=['GET'])
def recommend():
    user_id = request.args.get('user_id')
    print(f"Recommendation request for user: {user_id}")

    # Call your recommender logic
    recommendations = recommend_for_user(user_id)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
