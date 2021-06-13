const nodemailer = require("nodemailer");
var env = require('../configs/env');

const user = env.USER;
const pass = env.PASS;

const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: user,
        pass: pass,
    },
});

module.exports.sendConfirmationEmail = (name, email) => {
    console.log("Check");
    transport.sendMail({
        from: user,
        to: email,
        subject: "JS BootCamp 21 - volunteer registration",
        html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for registration. We are looking forward to seeing you at our event!</p>
        </div>`,
    }).catch(err => console.log(err));
    consle.log(`--------- EMAIL to ${name} has been sent succe`)
};

/*<a href=http://localhost:8081/confirm/${confirmationCode}> Click here</a>*/
