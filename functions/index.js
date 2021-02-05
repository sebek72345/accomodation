const functions = require("firebase-functions");
const firebase = require("dotenv").config({ path: "../.env" });
require("dotenv").config({ path: "../.env" });
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({ origin: true });

exports.sendEmail = functions.https.onRequest((request, response) => {
  sgMail.setApiKey(functions.config().sendgrid.key);

  const msg = {
    to: "Sebastian723@interia.eu",
    from: request.body.email,
    subject: `Nowa wiadomość od  ${request.body.name}`,
    html: `Zapytanie noclegowe: <br>Email:${request.body.email}<br>Numer telefonu ${request.body.numer}<br>Pytanie :${request.body.message}`,
  };
  cors(request, response, () => {
    sgMail.send(msg, (err, res) => {
      if (err) {
        response.send(500);
      } else {
        response.send(res);
      }
    });
  });
});
