from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__, static_folder="frontend", static_url_path="")
CORS(app)

# Load trained model
model = joblib.load("model/house_price_model.pkl")


# Home page
@app.route("/")
def home():
    return send_from_directory("frontend", "index.html")


# About page
@app.route("/about")
def about():
    return send_from_directory("frontend", "about.html")


# Prediction API
@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    input_data = pd.DataFrame([data])

    prediction = model.predict(input_data)[0]

    return jsonify({
        "predicted_price_lakhs": round(float(prediction), 2)
    })


# Serve frontend files
@app.route("/<path:path>")
def serve_frontend(path):
    return send_from_directory("frontend", path)


if __name__ == "__main__":
    app.run(debug=True)