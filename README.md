# 🏠 HousePredict — AI-Powered House Price Prediction

<p align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:635BFF,100:7C3AED&height=230&section=header&text=HousePredict&fontSize=58&fontAlignY=40&animation=fadeIn&fontColor=ffffff"/>

</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&duration=2800&pause=1000&color=7C3AED&center=true&vCenter=true&width=900&lines=AI-Powered+House+Price+Prediction;Machine+Learning+%7C+Flask+%7C+Python;Gradient+Boosting+Regression;Real-Time+Property+Price+Estimation;Deployed+on+Render" />
</p>

<p align="center">

<a href="https://house-price-prediction-48bx.onrender.com/index.html">
<img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-635BFF?style=for-the-badge&logoColor=white"/>
</a>

<a href="https://github.com/Aj1900sagar/House_Price_Prediction">
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="https://portfolio-profile-rouge.vercel.app/">
<img src="https://img.shields.io/badge/PORTFOLIO-7C3AED?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>

</p>

---

## ✨ Overview

**HousePredict** is a full-stack Machine Learning web application that predicts the estimated price of an Indian urban property based on its location, size, building characteristics, furnishing status, parking, connectivity and other property attributes.

The project covers the complete ML lifecycle:

> **Data → EDA → Preprocessing → Model Training → Hyperparameter Tuning → Evaluation → Model Persistence → Flask API → Web UI → Cloud Deployment**

The application is trained on an **Indian Urban House Price Prediction** dataset containing **80,000 property records**.

---

## 🌐 Live Application

### 🚀 Try HousePredict

**[→ Open HousePredict Live](https://house-price-prediction-48bx.onrender.com/index.html)**

Enter property details and get an estimated house price within seconds.

### 👨‍💻 My Portfolio

**[→ Visit Sagar Vishwakarma's Portfolio](https://portfolio-profile-rouge.vercel.app/)**

Explore my AI/ML projects, technical skills, coding journey and development work.

---

## 🎯 What Does It Predict?

HousePredict uses the following property information:

| Category | Features |
|---|---|
| 📍 Location | City, Locality Type |
| 🏠 Property | Property Type, Furnishing Status |
| 📐 Size | BHK, Bathrooms, Super Area, Carpet Area |
| 🏢 Building | Floor, Total Floors, Property Age |
| 🚗 Facilities | Parking, Lift, Gated Community |
| 🚇 Connectivity | Metro Distance, City Center Distance |

---

## 🧠 Machine Learning Pipeline

```text
                    ┌──────────────────────┐
                    │     Raw Dataset     │
                    │      80,000 Rows    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Data Cleaning     │
                    │ Nulls • Duplicates   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    EDA & Analysis    │
                    │ Correlation • Outlier│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Feature Preprocessing│
                    │ One-Hot Encoding     │
                    └──────────┬───────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │        Model Training            │
              │ Linear Regression                │
              │ Random Forest                    │
              │ Gradient Boosting                │
              └────────────────┬────────────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Hyperparameter Tune  │
                    │     GridSearchCV     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Best Model           │
                    │ Gradient Boosting    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ house_price_model.pkl│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Flask API       │
                    │      /predict        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Premium Web UI     │
                    │ HTML • CSS • JS      │
                    └──────────────────────┘
```

---

## 📊 Model Performance

Three regression approaches were evaluated before selecting the final model.

| Model | MAE ↓ | RMSE ↓ | R² ↑ |
|---|---:|---:|---:|
| Linear Regression | 47.94 | 86.03 | 0.666 |
| Random Forest | 34.00 | 70.38 | 0.776 |
| Gradient Boosting | 33.55 | 69.19 | 0.784 |
| **Tuned Gradient Boosting** | **32.86** | **68.51** | **0.788** |

### 🏆 Current Best Model

**GradientBoostingRegressor**

Best parameters found using GridSearchCV:

```text
n_estimators = 200
learning_rate = 0.05
max_depth = 4
```

### Performance

```text
MAE  → 32.86 Lakhs
RMSE → 68.51 Lakhs
R²   → 0.788
```

> The model is currently being further optimized to reduce MAE and improve generalization.

---

## 🔍 Feature Importance

The trained model identified the following features as highly influential:

```text
Super_Area_SqFt              34.54%
City_Mumbai                  22.87%
Locality_Type_Premium        20.85%
City_Delhi                    9.19%
Age_of_Property               2.50%
City_Jaipur                   2.48%
City_Ahmedabad                1.77%
Distance_to_City_Center      1.71%
Carpet_Area_SqFt              1.28%
```

These values represent **relative importance within the trained model**, not direct percentage contributions to house prices.

---

## 🧪 Unseen Data Testing

After deployment, the API was tested using property combinations that were not part of the training workflow.

| Test | Property Profile | Prediction |
|---|---|---:|
| 🏠 01 | Affordable Delhi · 2 BHK | ₹94.55 Lakhs |
| 🏢 02 | Mid-Range Pune · 3 BHK | ₹135.64 Lakhs |
| 🏡 03 | Premium Hyderabad · 4 BHK Villa | ₹377.79 Lakhs |

This confirms that the deployed Flask API successfully accepts new property inputs and returns predictions.

> These predictions demonstrate deployment functionality; they should not be interpreted as measured accuracy because the actual target prices for these manually created inputs are unknown.

---

## 🛠️ Tech Stack

### Machine Learning

<p align="center">

<img src="https://skillicons.dev/icons?i=python&theme=dark"/>

</p>

```text
Python
Pandas
NumPy
Scikit-Learn
Joblib
Jupyter Notebook
```

### Backend

```text
Flask
Flask-CORS
Gunicorn
REST API
```

### Frontend

```text
HTML5
CSS3
JavaScript
Responsive UI
Glassmorphism / Gradient UI
```

### Deployment

```text
GitHub
Render
Gunicorn
```

---

## 🔌 API

### Prediction Endpoint

```http
POST /predict
Content-Type: application/json
```

### Example Request

```json
{
  "City": "Mumbai",
  "Locality_Type": "Premium",
  "Property_Type": "Apartment",
  "Furnishing_Status": "Fully Furnished",
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

### Example Response

```json
{
  "predicted_price_lakhs": 617.90
}
```

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
├── test_api.py
└── README.md
```

---

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Aj1900sagar/House_Price_Prediction.git
cd House_Price_Prediction
```

### 2. Create virtual environment

```bash
python -m venv venv
```

### 3. Activate environment

**Windows:**

```bash
venv\Scripts\activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Start Flask

```bash
python app.py
```

### 6. Open

```text
http://127.0.0.1:5000
```

---

## 🚀 Deployment

The application is deployed using:

```text
GitHub
   ↓
Render
   ↓
Gunicorn
   ↓
Flask Application
   ↓
HousePredict Web App
```

### Production Start Command

```bash
gunicorn app:app
```

---

## 💡 Key Learnings

Through this project, I worked on:

- Data preprocessing
- Exploratory Data Analysis
- Correlation analysis
- Outlier analysis
- Categorical feature encoding
- Regression algorithms
- Ensemble learning
- Hyperparameter tuning
- Model evaluation
- Model persistence using Joblib
- Flask REST API development
- Frontend/API integration
- Production deployment
- Cloud debugging
- ML model version compatibility

---

## 🔮 Future Improvements

- [ ] Further reduce MAE
- [ ] Experiment with XGBoost / CatBoost / Extra Trees
- [ ] Advanced feature engineering
- [ ] Cross-validation based model comparison
- [ ] Confidence / prediction intervals
- [ ] Property price visualization
- [ ] Location-based analytics
- [ ] More detailed model explainability
- [ ] Automated model retraining pipeline
- [ ] Docker deployment
- [ ] CI/CD pipeline

---

## 👨‍💻 About Me

<img align="right" width="220" src="https://capsule-render.vercel.app/api?type=rounded&color=gradient&height=180&section=header&text=AI%20%2F%20ML&fontSize=30&fontColor=ffffff"/>

### Sagar Vishwakarma

**B.Tech CSE (AI/ML) — KIET Deemed to be University, Ghaziabad**

I'm an AI/ML student and aspiring software engineer interested in:

```text
Machine Learning
Data Science
Python
C++
DSA
Frontend Development
Software Engineering
```

Currently focused on building practical projects, strengthening DSA and developing real-world Machine Learning applications.

<br clear="right"/>

---

## 🌐 Connect With Me

<p align="center">

<a href="https://portfolio-profile-rouge.vercel.app/">
<img src="https://img.shields.io/badge/🌐%20Portfolio-7C3AED?style=for-the-badge"/>
</a>

<a href="https://github.com/Aj1900sagar">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="https://linkedin.com/in/sagar-vishwakarma1900/">
<img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://leetcode.com/u/vishwarkarmasagar/">
<img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black"/>
</a>

</p>

---

## ⭐ Support

If you found this project interesting, consider giving it a ⭐ on GitHub.

<p align="center">

### Built with 🧠 Machine Learning + 💻 Code + ☕ Consistency

**© 2026 Sagar Vishwakarma**

</p>

<p align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:635BFF,100:7C3AED&height=120&section=footer"/>

</p>
