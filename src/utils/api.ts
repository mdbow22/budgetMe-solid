
const API = {
    post: async function(path, body) {
        const response = await fetch(`api/${path}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if(response.ok) {
             return data;
        }

        throw data;
    },
}

export default API;