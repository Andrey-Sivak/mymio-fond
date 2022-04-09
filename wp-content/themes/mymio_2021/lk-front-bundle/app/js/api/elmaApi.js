const TOKEN = '8657d620-f5eb-4552-997d-d3ec43688c29';

export const getUserDataFromElma = async (url, method) => {

    try {
        return await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'X-Token': TOKEN,
            }
        })
    } catch (e) {
        return false;
    }
}