from flask import Flask, request, render_template

app = Flask(__name__)


@app.route("/")
@app.route("/<name>")
def hello(name=None):
    return render_template("index.html", name=name)


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        return render_template("handle_login.html", username=request.form["username"])
    return render_template("login_page.html")


@app.route("/products/")
def products_display():
    return "products page"


if __name__ == "__main__":
    app.debug = True
    app.run(host="127.0.0.1", port="5000")
