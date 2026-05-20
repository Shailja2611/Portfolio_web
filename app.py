from flask import Flask, render_template, request, redirect, url_for, flash
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
app.secret_key = "your_secret_key_here"  # Needed for flash messages

# Email sending function
def send_email(subject, body, to_email):
    from_email = "jerrytiwari1126@gmail.com"
    from_password = "pnkr yinf rgex fwtc"  # Not your Gmail password!

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(from_email, from_password)
    server.send_message(msg)
    server.quit()


@app.route('/')
def index():
    return render_template('struct.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Get form data
    fname = request.form.get('fname')
    lname = request.form.get('lname')
    email = request.form.get('email')
    phone = request.form.get('phone')

    # Prepare email content
    subject = f"New Contact Form Submission from {fname} {lname}"
    body = f"""
    You have received a new message from your portfolio contact form:

    First Name: {fname}
    Last Name: {lname}
    Email: {email}
    Phone: {phone}
    """

    try:
        # Send the email to your receiver address
        send_email(subject, body, "shailjakhandal555@gmail.com")
        flash("Message sent successfully!")
    except Exception as e:
        print("Error sending email:", e)
        flash("Failed to send message.")

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
