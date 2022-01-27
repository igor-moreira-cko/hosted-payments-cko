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
    success_url: "/success",
    cancel_url: "/cancel",
    failure_url: "/failure",
}

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
            window.location.href = data._links.redirect.href
        })
}