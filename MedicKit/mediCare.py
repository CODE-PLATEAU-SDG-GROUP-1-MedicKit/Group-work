from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('medicKit.html')


@app.route("/about")
def about():
    return render_template('about.html')


@app.route("/doctors")
def doctors():
    return render_template('doctors.html')


@app.route("/blog")
def blog():
    return render_template('blog.html')


@app.route("/contact")
def contact():
    return render_template('contact.html')

if __name__=='__main__':
    app.run(DEBUG=True)