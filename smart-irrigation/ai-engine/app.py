from flask import Flask, request, jsonify
from models.irrigation_model import predict_irrigation
from drone_analysis import analyze_drone_image

app = Flask(__name__)

@app.route('/ai/irrigation', methods=['POST'])
def irrigation():
    data = request.json
    result = predict_irrigation(data)
    return jsonify(result)

@app.route('/ai/drone', methods=['POST'])
def drone():
    image_path = request.json['image']
    result = analyze_drone_image(image_path)
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=6000, debug=True)
