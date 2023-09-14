export async function get(url: string, anotherUrl?: Boolean,) {
    const urlCompleted = url;
    const urlConnected = 'http://localhost:3000/api/' + url;

    const resp = await fetch(anotherUrl ? urlCompleted : urlConnected,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    const data = await resp.json();

    return {
        body: data
    }
}

export async function post(url: string, body: any) {
    const resp = await fetch('http://localhost:4000/' + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await resp.json();

    return {
        body: data
    }
}