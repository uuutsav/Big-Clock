const express = require('express');

const app = express();
const port = 5000;

app.put("/", (req, resp) => {
    resp.status(200).json({
        msg: "Nothing really"
    })
})

app.listen(port, () => {
    console.log("Server listening to port: ", port);
})