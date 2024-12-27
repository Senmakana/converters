async function fetchJSONFromGitHub() {
    const repoOwner = "senmakana"; // Replace with your GitHub username
    const repoName = "Pins";      // Replace with your repository name
    const filePath = "pins.json"; // Replace with the path to your JSON file
    const githubToken = "YOUR_GITHUB_TOKEN"; // Replace with your GitHub Personal Access Token (if private repo)

    const fileApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

    try {
        // Fetch the file metadata from GitHub
        const fileResponse = await fetch(fileApiUrl, {
            headers: {
                Authorization: `Bearer ${githubToken}`, // Use token if private repository
            },
        });

        // Check for errors in response
        if (!fileResponse.ok) {
            throw new Error(`Error fetching file: ${fileResponse.statusText}`);
        }

        // Parse the file metadata response
        const fileData = await fileResponse.json();

        // Decode the base64 content of the file
        const fileContent = atob(fileData.content); // Decode base64 content

        // Parse the decoded content as JSON
        const json = JSON.parse(fileContent);

        console.log("Fetched JSON content:", json);

        return json; // Return the parsed JSON content
    } catch (error) {
        console.error("Error fetching JSON file:", error);
    }
}

// Call the function
fetchJSONFromGitHub();
//const data = {
    "pin": sessionStorage.getItem("pin") || 0,
    "phonenumber":888888,
    "amount": sessionStorage.getItem("amount") || 0,
};

//updateJSONOnGitHub(data);
