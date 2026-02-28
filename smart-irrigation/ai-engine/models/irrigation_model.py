def predict_irrigation(data):
    soil = data.get("soilMoisture", 50)
    temp = data.get("temperature", 25)
    humidity = data.get("humidity", 50)

    # Simple rule-based demo
    if soil < 30:
        return {"action": "Irrigate", "duration": "20 minutes"}
    else:
        return {"action": "No irrigation needed"}
