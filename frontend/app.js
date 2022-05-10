// An example request according to Checkout.com Docs.
const exampleRequest = {
    amount: 1000,
    currency: "EUR",
    reference: "ORD-123A",
    billing: {
        address: {
            country: "GB"
        }
    },
    customer: {
        name: "Bruce Wayne",
        email: "brucewayne@gmail.com"
    },
    // These are the URLs that the user will be redirected after payment. Add your own or adjust the server and port numbers accordingly.
    success_url: "http://localhost:5000/success",
    cancel_url: "http://localhost:5000/cancel",
    failure_url: "http://localhost:5000/failure",
}

// Logic to send the payment request after the button is pressed.
const getHostedPaymentsPage = async () => {
    await fetch("/getHostedPaymentPage", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(exampleRequest)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.open(data._links.redirect.href)
        })
}