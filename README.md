# 🏠 House Price Prediction

\<p align="center">



\</p>

\<h2 align="center">
&#x20; \<img src="[https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&duration=2800&pause=1000&color=7C3AED&center=true&vCenter=true&width=1000&lines=Machine+Learning+House+Price+Prediction;Gradient+Boosting+Regression;Flask+REST+API;Modern+Web+Interface;Deployed+on+Render](https://readme-typing-svg.demolab.com?font=Fira+Code\&size=25\&duration=2800\&pause=1000\&color=7C3AED\&center=true\&vCenter=true\&width=1000\&lines=Machine+Learning+House+Price+Prediction;Gradient+Boosting+Regression;Flask+REST+API;Modern+Web+Interface;Deployed+on+Render)" />
\</h2>

\<p align="center">
&#x20; \<b>Predict Indian urban house prices using Machine Learning\</b>
\</p>

\<p align="center">

\<a href="[https://house-price-prediction-48bx.onrender.com/index.html](https://house-price-prediction-48bx.onrender.com/index.html)">
\<img src="[https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Website-7C3AED?style=for-the-badge](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Website-7C3AED?style=for-the-badge)" />
\</a>

\<a href="[https://portfolio-profile-rouge.vercel.app/](https://portfolio-profile-rouge.vercel.app/)">
\<img src="[https://img.shields.io/badge/🌐%20Portfolio-Sagar%20Vishwakarma-635BFF?style=for-the-badge](https://img.shields.io/badge/🌐%20Portfolio-Sagar%20Vishwakarma-635BFF?style=for-the-badge)" />
\</a>

\</p>

---

## 📌 About The Project

**House Price Prediction** is a Machine Learning web application that predicts the estimated price of a residential property in Indian cities.

The project takes property details such as:

- City
- Locality Type
- Property Type
- Furnishing Status
- BHK
- Bathrooms
- Super Area
- Carpet Area
- Floor Number
- Total Floors
- Property Age
- Parking
- Lift Availability
- Gated Community
- Metro Distance
- City Center Distance

and returns the **estimated house price in Indian Lakhs (₹ Lakhs).**

The trained Machine Learning model is integrated with a **Flask API** and connected to a modern frontend interface.

---

## 🚀 Live Project

### 🏠 House Price Prediction

**Live Website:**
[https://house-price-prediction-48bx.onrender.com/index.html](https://house-price-prediction-48bx.onrender.com/index.html)

### 🌐 My Portfolio

**Portfolio:**
[https://portfolio-profile-rouge.vercel.app/](https://portfolio-profile-rouge.vercel.app/)

---

## ✨ Features

- 🏠 House price prediction
- 🤖 Machine Learning based prediction
- 📊 Gradient Boosting Regression
- 🔄 One-Hot Encoding for categorical features
- 🌐 Flask REST API
- 💻 Modern responsive frontend
- 🎨 Glassmorphism / modern UI
- 📱 Responsive design
- ⚡ Real-time prediction
- ☁️ Deployed on Render
- 🔗 Integrated frontend + backend
- 🧠 Handles unseen categorical values

---

## 🧠 Machine Learning Workflow

```text
Dataset
   ↓
Data Cleaning
   ↓
Exploratory Data Analysis
   ↓
Feature Selection
   ↓
Train / Validation Split
   ↓
One-Hot Encoding
   ↓
Model Training
   ↓
Model Comparison
   ↓
Hyperparameter Tuning
   ↓
Final Model
   ↓
Flask API
   ↓
Web Interface
   ↓
Render Deployment
```

---

## 📂 Dataset

The project uses an **Indian Urban House Price Prediction** dataset.

### Dataset Information

- Training samples: **80,000**
- Test samples: **20,000**
- Target variable: `Price_INR_Lakhs`
- Number of input features: **16**

### Target

```text
Price_INR_Lakhs
```

The model predicts house prices in **Indian Lakhs**.

---

## 🔍 Features Used

| Feature                      | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| `City`                       | Property city                                         |
| `Locality_Type`              | Affordable / Mid-Range / Premium                      |
| `Property_Type`              | Apartment / Villa / Builder Floor / Independent House |
| `Furnishing_Status`          | Unfurnished / Semi-Furnished / Furnished              |
| `BHK`                        | Number of bedrooms                                    |
| `Bathrooms`                  | Number of bathrooms                                   |
| `Super_Area_SqFt`            | Super built-up area                                   |
| `Carpet_Area_SqFt`           | Carpet area                                           |
| `Floor_Number`               | Property floor                                        |
| `Total_Floors`               | Total building floors                                 |
| `Age_of_Property`            | Property age                                          |
| `Parking`                    | Parking availability                                  |
| `Lift_Available`             | Lift availability                                     |
| `Gated_Community`            | Gated community availability                          |
| `Distance_to_Metro_km`       | Distance from metro                                   |
| `Distance_to_City_Center_km` | Distance from city center                             |

---

## 🤖 Models Tested

Several regression models were evaluated during development.

| Model                       |       MAE |      RMSE |        R² |
| --------------------------- | --------: | --------: | --------: |
| Linear Regression           |     47.94 |     86.03 |     0.666 |
| Random Forest               |     34.00 |     70.38 |     0.776 |
| Gradient Boosting           |     33.55 |     69.19 |     0.784 |
| **Tuned Gradient Boosting** | **32.86** | **68.51** | **0.788** |

### 🏆 Final Model

The current final model is a **tuned Gradient Boosting Regressor**.

Best parameters:

```text
n_estimators = 200
learning_rate = 0.05
max_depth = 4
```

### Performance

```text
MAE  : 32.86 Lakhs
RMSE : 68.51 Lakhs
R²   : 0.788
```

> The metrics above are validation results from the model-development phase. They represent performance on the held-out validation set and not guaranteed real-world prediction accuracy.

---

## 📊 Important Features

According to the trained model, some of the most influential features include:

```text
Super_Area_SqFt
City_Mumbai
Locality_Type_Premium
City_Delhi
Age_of_Property
City_Jaipur
City_Ahmedabad
Distance_to_City_Center_km
Carpet_Area_SqFt
```

These are **model feature-importance values**, not direct percentages of house price.

---

## 🛠️ Tech Stack

### Machine Learning

\<p>
\<img src="[https://skillicons.dev/icons?i=python](https://skillicons.dev/icons?i=python)" />
\</p>

- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib
- Gradient Boosting
- One-Hot Encoding

### Backend

\<p>
\<img src="[https://skillicons.dev/icons?i=flask](https://skillicons.dev/icons?i=flask)" />
\</p>

- Flask
- Flask-CORS
- REST API
- Gunicorn

### Frontend

\<p>
\<img src="[https://skillicons.dev/icons?i=html,css,js](https://skillicons.dev/icons?i=html,css,js)" />
\</p>

- HTML5
- CSS3
- JavaScript
- Responsive UI
- Glassmorphism design

### Deployment

\<p align="center">
\<img src="[https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge\&logo=render\&logoColor=black)" />
\</p>

- Render
- GitHub

---

## 📁 Project Structure

```text
House_Price_Prediction/
│
├── model/
│   └── house_price_model.pkl
│
├── frontend/
│   ├── index.html
│   ├── about.html
│   ├── style.css
│   ├── script.js
│   └── favicon.svg
│
├── app.py
├── requirements.txt
└── test_api.py
```

---

## 🔌 API

The Flask backend exposes a prediction endpoint:

```text
POST /predict
```

Example request:

```json
{
  "City": "Mumbai",
  "Locality_Type": "Premium",
  "Property_Type": "Apartment",
  "Furnishing_Status": "Furnished",
  "BHK": 3,
  "Bathrooms": 3,
  "Super_Area_SqFt": 1850,
  "Carpet_Area_SqFt": 1500,
  "Floor_Number": 12,
  "Total_Floors": 25,
  "Age_of_Property": 5,
  "Parking": 2,
  "Lift_Available": 1,
  "Gated_Community": 1,
  "Distance_to_Metro_km": 1.2,
  "Distance_to_City_Center_km": 4.5
}
```

Example response:

```json
{
  "predicted_price_lakhs": 617.90
}
```

---

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Aj1900sagar/House_Price_Prediction.git
cd House_Price_Prediction
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Start Flask server

```bash
python app.py
```

### 4. Open in browser

```text
http://127.0.0.1:5000
```

---

## 🌐 Deployment

The application is deployed using **Render**.

The deployment architecture is:

```text
GitHub Repository
       ↓
     Render
       ↓
   Gunicorn
       ↓
    Flask API
       ↓
Machine Learning Model
       ↓
   Prediction
       ↓
    Frontend
```

The frontend and backend are served from the same Flask application.

---

## 🧪 Unseen Data Testing

The deployed application was tested with previously unseen property configurations.

### Test 1

```text
Delhi
Affordable
Independent House
2 BHK
900 sq ft
```

Prediction:

```text
₹94.55 Lakhs
```

### Test 2

```text
Pune
Mid-Range
Apartment
3 BHK
1400 sq ft
```

Prediction:

```text
₹135.64 Lakhs
```

### Test 3

```text
Hyderabad
Premium
Villa
4 BHK
2800 sq ft
```

Prediction:

```text
₹377.79 Lakhs
```

These tests confirm that the deployed application successfully accepts different property configurations and returns predictions.

---

## 🎯 Future Improvements

- [ ] Further reduce MAE through advanced hyperparameter tuning
- [ ] Compare XGBoost / CatBoost / Extra Trees
- [ ] Add feature engineering
- [ ] Improve handling of extreme price outliers
- [ ] Add prediction confidence/range
- [ ] Add model explainability
- [ ] Add interactive analytics
- [ ] Improve mobile UI
- [ ] Add automated CI/CD deployment

---

## 👨‍💻 About Me

### Sagar Vishwakarma

🎓 **B.Tech CSE (AI & ML)**
🏫 **KIET Deemed to be University, Ghaziabad**

I'm a Computer Science student interested in:

- 🤖 Machine Learning
- 🐍 Python
- 💻 C++
- 🧠 Data Structures & Algorithms
- 📊 Data Science
- 🌐 Web Development
- 🚀 Software Development

I'm currently learning, building projects, and looking for opportunities to grow as a software/AI-ML developer.

---

## 🌐 Connect With Me

\<p align="center">

\<a href="[https://portfolio-profile-rouge.vercel.app/](https://portfolio-profile-rouge.vercel.app/)">
\<img src="[https://img.shields.io/badge/Portfolio-7C3AED?style=for-the-badge&logo=vercel&logoColor=white](https://img.shields.io/badge/Portfolio-7C3AED?style=for-the-badge\&logo=vercel\&logoColor=white)" />
\</a>

\<a href="[https://www.linkedin.com/in/sagar-vishwakarma1900/](https://www.linkedin.com/in/sagar-vishwakarma1900/)">
\<img src="[https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge\&logo=linkedin\&logoColor=white)" />
\</a>

\<a href="[https://github.com/Aj1900sagar](https://github.com/Aj1900sagar)">
\<img src="[https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)" />
\</a>

\</p>

---

## ⭐ Support

If you found this project interesting, consider giving it a ⭐ on GitHub.

\<p align="center">

### 🏠 Predict. Learn. Build. Deploy.

**Built by Sagar Vishwakarma**

\</p>

