var express = require("express");
var app = express();

if (process.env.NODE_ENV) {
    var mail = process.env.MAIL;
    var pass = process.env.PASS;
}
var info = require("./secrets.json");
var mail = info.mail;
var pass = info.pass;
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/favicon"));

var transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: mail,
        pass: pass
    }
});
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

app.post("/contact", function(req, res) {
    console.log(req.body);
    var mailOptions = {
        to: "danielariel70@gmail.com", // list of receivers
        subject: `${req.body.subject}`, // Subject line
        text: `${req.body.message} sent from ${req.body.name}
        ${req.body.email} at ${new Date()}` // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log("successfully sent");
    });
    // res.json({
    //     success: true
    // });
    res.redirect("/");
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080, () =>
    console.log(`port 8080 is listening`)
);
