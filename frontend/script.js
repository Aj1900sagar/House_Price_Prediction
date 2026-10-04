const form = document.getElementById("predictionForm");
const resultBox = document.getElementById("result");
const priceElement = document.getElementById("price");
const errorBox = document.getElementById("error");
const predictBtn = document.getElementById("predictBtn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    resultBox.classList.add("hidden");
    errorBox.classList.add("hidden");

    predictBtn.disabled = true;
    predictBtn.textContent = "Predicting...";

    const data = {
        City: document.getElementById("City").value,
        Locality_Type: document.getElementById("Locality_Type").value,
        Property_Type: document.getElementById("Property_Type").value,

        BHK: Number(document.getElementById("BHK").value),
        Bathrooms: Number(document.getElementById("Bathrooms").value),

        Super_Area_SqFt: Number(
            document.getElementById("Super_Area_SqFt").value
        ),

        Carpet_Area_SqFt: Number(
            document.getElementById("Carpet_Area_SqFt").value
        ),

        Floor_Number: Number(
            document.getElementById("Floor_Number").value
        ),

        Total_Floors: Number(
            document.getElementById("Total_Floors").value
        ),

        Age_of_Property: Number(
            document.getElementById("Age_of_Property").value
        ),

        Furnishing_Status:
            document.getElementById("Furnishing_Status").value,

        Parking: Number(
            document.getElementById("Parking").value
        ),

        Lift_Available: Number(
            document.getElementById("Lift_Available").value
        ),

        Gated_Community: Number(
            document.getElementById("Gated_Community").value
        ),

        Distance_to_Metro_km: Number(
            document.getElementById("Distance_to_Metro_km").value
        ),

        Distance_to_City_Center_km: Number(
            document.getElementById("Distance_to_City_Center_km").value
        )
    };

    try {

        const response = await fetch(
             "/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.error || "Prediction failed"
            );
        }

        priceElement.textContent =
            `₹${result.predicted_price_lakhs.toFixed(2)} Lakhs`;

        resultBox.classList.remove("hidden");

    } catch (error) {

        console.error(error);

        errorBox.textContent =
            "Unable to connect to prediction API. Make sure Flask is running.";

        errorBox.classList.remove("hidden");

    } finally {

        predictBtn.disabled = false;
        predictBtn.textContent = "Predict House Price";
    }
});