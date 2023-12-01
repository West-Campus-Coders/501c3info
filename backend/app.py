from flask import Flask, jsonify, after_this_request
from datetime import datetime

app = Flask(__name__)

@app.route("/test")
def test_response():
    @after_this_request
    def add_headers(response):
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    current_time = datetime.now().strftime("%H:%M:%S")
    json = {"result": "successful", "time": current_time}        

    return jsonify(json)
    

if __name__ == "__main__":
    app.run(port=5000, debug=True)
