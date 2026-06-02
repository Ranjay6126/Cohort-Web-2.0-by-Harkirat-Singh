async function fetchWithRetry(url, retries = 3) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        return await response.json();

    } catch (error) {

        if (retries === 0) {
            throw error;
        }

        console.log("Retrying...");

        return fetchWithRetry(url, retries - 1);
    }
}