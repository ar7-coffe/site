from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api")
def api():
    return jsonify({"mensagem": "Python respondeu!"})

app.run(debug=True)