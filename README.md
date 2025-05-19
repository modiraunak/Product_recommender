# Smart Product Recommender System with Buy Option

## Project Overview

The **Smart Product Recommender System** is a full-stack web application designed to recommend products to users based on their unique ID. It is built with a **modern glassmorphism UI** and includes a seamless **Buy Now** option for each product. The application features a **Flask-based backend** that handles product recommendations and order storage, while the frontend showcases products in a beautiful, responsive design. The system also stores orders, enabling the development of an **Order History page** for user tracking.

---

## Key Features

1.  **Personalized Product Recommendations**

   * Users enter their unique ID to fetch product suggestions.
   * A recommender algorithm fetches products based on user preferences.

2.  **Buy Now with Real-time Confirmation**

   * Each product card includes a "Buy Now" button.
   * Purchases are instantly recorded in the backend database.

3.  **Order History (Planned Feature)**

   * Users can view past purchases with price and date details.

4.  **Modern Glassmorphism UI**

   * Clean, modern user interface with smooth animations and gradient backgrounds.

5. ⚙ **Backend API with Flask**

   * Efficient REST API endpoints to manage recommendations and purchases.
   * CORS enabled for smooth communication between frontend and backend.

---

## Technology Stack

| Layer             | Technology                            |
| ----------------- | ------------------------------------- |
| **Frontend**      | HTML, CSS (Glassmorphism), JavaScript |
| **Backend**       | Flask, Flask-CORS, SQLAlchemy         |
| **Database**      | SQLite (with Flask SQLAlchemy ORM)    |
| **Data Handling** | Pandas (CSV data reading)             |
| **Deployment**    | Localhost (Flask server)              |

---

## Folder Structure

```
project/
├── backend/
│   ├── app.py                 # Main Flask Application
│   ├── recommender.py         # Logic for product recommendations
│   ├── database.py            # Database initialization
│   ├── models.py              # SQLAlchemy models for database tables
│   ├── data/
│   │   ├── products.csv       # Product details
│   │   └── user_data.csv      # User data
│   └── assets/
│       └── images/            # Product images
│
└── frontend/
    ├── index.html             # Main page UI
    ├── app.js                 # JavaScript for API calls and rendering
    ├── style.css              # CSS for glassmorphism and animations
    └── orderHistory.html      # (Planned) Page for viewing order history
```

---

## API Endpoints

| Endpoint                   | Method | Description                              |
| -------------------------- | ------ | ---------------------------------------- |
| `/`                        | GET    | Serves the main index page               |
| `/recommend?user_id=<id>`  | GET    | Fetches product recommendations for user |
| `/confirm-purchase`        | POST   | Confirms the user's purchase             |
| `/order-history/<user_id>` | GET    | Retrieves the order history of the user  |

---

## Workflow

1. **User enters their User ID** on the main page.
2. The system sends a request to `/recommend?user_id=<id>` to fetch recommended products.
3. Products are displayed with a **Buy Now** button on each card.
4. When "Buy Now" is clicked, it triggers a `POST` request to `/confirm-purchase`.
5. The purchase is saved to the database, and the user is notified of a successful purchase.
6. (Planned) The user can view all purchases in an **Order History** page.

---

## Future Enhancements

1.  **Order History Page**: Allow users to view all past purchases.
2.  **Payment Integration**: Integrate with Razorpay, Stripe, or PayPal.
3.  **Search and Filter**: Allow users to search and filter products by category.
4.  **Mobile Optimization**: Fully optimize the UI for mobile devices.
5.  **Collaborative Filtering**: Use machine learning to recommend products based on user behavior.

---

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/smart-product-recommender.git
   cd smart-product-recommender/backend
   ```

2. **Create a virtual environment and activate it:**

   ```bash
   python -m venv venv
   venv\Scripts\activate    # On Windows
   source venv/bin/activate  # On Linux/Mac
   ```

3. **Install dependencies:**

   ```bash
   pip install flask flask-cors pandas flask-sqlalchemy
   ```

4. **Run the database migration:**

   ```bash
   python
   >>> from app import app, db
   >>> with app.app_context():
   >>>     db.create_all()
   >>> exit()
   ```

5. **Start the Flask server:**

   ```bash
   python app.py
   ```

6. **Visit the application:**

   ```
   http://127.0.0.1:5000
   ```

---

## Screenshots

![image](https://github.com/user-attachments/assets/1521f549-1441-4487-9f90-c1f93b97d200)
![image](https://github.com/user-attachments/assets/38459d0e-6c97-459e-a314-35f32525536e)

---

## Contributing

Contributions are welcome! Feel free to submit a Pull Request for improvements, bug fixes, or new features.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

* Flask for the backend framework
* SQLAlchemy for ORM
* Pandas for data manipulation
* Google Fonts for beautiful typography
* Inspiration from modern e-commerce platforms
