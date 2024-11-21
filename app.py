from flask import Flask, render_template,jsonify,request
from flask_mail import Mail, Message


app = Flask(__name__)


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'ashwini.10521@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'gndw bkoh gmou klxo'        # Replace with your email password

mail = Mail(app)

@app.route('/')
def home():
    
    return render_template('home.html')


@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['message']


        msg = Message(
            subject=subject,
            sender=email,
            recipients=['ashwini.10521@gmail.com'],  # Replace with the desired email
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        )
        mail.send(msg)
        return jsonify({"status": "success", "message": "Your message has been sent successfully!"})
    except Exception as e:
        print(e)
        return jsonify({"status": "error", "message": "An error occurred while sending your message."})
    
# Run the app
if __name__ == '__main__':
    app.run(debug=True)
