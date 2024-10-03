const authenticator = async () => {
    try {
        const response = await fetch('https://blog-api-production-3703.up.railway.app/imageKit');
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};


module.exports = authenticator