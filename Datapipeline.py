import requests
import pandas as pd
import time
from sqlalchemy import create_engine

# Extract
def extract_data(city):
    api_key = "YOUR_API_KEY"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    response = requests.get(url)
    return response.json() if response.status_code == 200 else None

# Transform
def transform_data(data):
    if data:
        temp = data["main"]["temp"] - 273.15
        humidity = data["main"]["humidity"]
        city = data["name"]
        df = pd.DataFrame({"City": [city], "Temperature (°C)": [temp], "Humidity (%)": [humidity]})
        return df
    return None

# Load to CSV
def load_data_to_csv(df, file_name="weather_data.csv"):
    if df is not None:
        df.to_csv(file_name, mode='a', index=False, header=not pd.io.common.file_exists(file_name))
        print(f"Data loaded to {file_name}")

# Run the pipeline
def run_pipeline(city):
    data = extract_data(city)
    transformed_data = transform_data(data)
    load_data_to_csv(transformed_data)

# Schedule
while True:
    run_pipeline("London")
    time.sleep(3600)  # Run every hour
