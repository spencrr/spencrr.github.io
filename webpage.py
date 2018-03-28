from flask import Flask, render_template
import average

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/my-link/')
def my_link():
    average.main()
    return 'Running...'

if __name__ == '__main__':
  app.run()
