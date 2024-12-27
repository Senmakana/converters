const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/update-pin', async (req, res) => {
    const { pin, phonenumber, amount } = req.body;
    const repoOwner = "senmakana";
    const repoName = "Pins";
    const filePath = "pins.json";
    const branch = "main";
    const githubToken = process.env.GITHUB_TOKEN;

    const fileApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

    try {
        const fileResponse = await fetch(fileApiUrl, {
            headers: {
                Authorization: `Bearer ${githubToken}`,
            },
        });

        if (!fileResponse.ok) {
            throw new Error(`Failed to fetch file metadata: ${fileResponse.statusText}`);
        }

        const fileData = await fileResponse.json();
        const fileContent = Buffer.from(fileData.content, 'base64').toString('utf8');
        const json = JSON.parse(fileContent);

        json.pin = pin;
        json.phonenumber = phonenumber;
        json.amount = amount;

        const updatedContent = Buffer.from(JSON.stringify(json, null, 2)).toString('base64');

        const updateResponse = await fetch(fileApiUrl, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${githubToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: "Update pins.json with new data",
                content: updatedContent,
                sha: fileData.sha,
                branch,
            }),
        });

        if (!updateResponse.ok) {
            throw new Error(`Failed to update file: ${updateResponse.statusText}`);
        }

        res.status(200).json({ message: "File updated successfully!" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "An error occurred. Check the console for details." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});