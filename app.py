from flask import Flask, request, jsonify
from flask_cors import CORS
from recommender import get_recommendations

app = Flask(__name__)
CORS(app)  

@app.route('/recommend', methods=['GET'])
def recommend():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({"error": "User ID is required"}), 400
    
    # Get recommendations from the recommender
    recommendations = get_recommendations(int(user_id))
    return jsonify(recommendations), 200

if __name__ == '__main__':
    app.run(debug=True)
