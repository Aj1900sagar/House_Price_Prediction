import requests

url = "http://127.0.0.1:5000/predict"

data = {
    "City": "Bangalore",
    "Locality_Type": "Mid-Range",
    "Property_Type": "Independent House",
    "BHK": 2,
    "Bathrooms": 3,
    "Super_Area_SqFt": 1660.04,
    "Carpet_Area_SqFt": 1360.59,
    "Floor_Number": 13,
    "Total_Floors": 26,
    "Age_of_Property": 2,
    "Furnishing_Status": "Furnished",
    "Parking": 1,
    "Lift_Available": 1,
    "Gated_Community": 0,
    "Distance_to_Metro_km": 2.69,
    "Distance_to_City_Center_km": 9.54
}

response = requests.post(url, json=data)

print(response.json())