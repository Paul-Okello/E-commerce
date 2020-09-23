const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HUTBrDWCKowcRJwArqQkMF9oZHmvsFuLqCL6BVffEQzI10MmbCjeNOA3UxO25H0qBrQ884dNpSmbecDCaO2isIF00fNZ0QgjX"
);
//API setup
// App config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "Ksh",
  });
  //OK- Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/mahinlo-cfdf5/us-central1/api
