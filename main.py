from flask import Flask, render_template

app = Flask(__name__, template_folder='D:/DigitalNAO/reto-4/mouse-painter/templates',static_folder='D:/DigitalNAO/reto-4/mouse-painter/static', static_url_path='/static')

@app.route("/")
def home():
    return render_template('paint.html')

if __name__ == "__main__":
    app.run(debug=True)