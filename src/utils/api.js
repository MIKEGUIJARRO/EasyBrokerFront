
const getProperties = async (pagination) => {
    let url = new URL('http://localhost:5000/api/v1/properties?search%5Bstatuses%5D%5B%5D=published')
    let searchParams = url.searchParams;

    for (const key in pagination) {
        searchParams.set(key, pagination[key]);
    }
    const res = await fetch(url)
    return res.json()
}

const getProperty = async (id) => {
    let url = new URL(`http://localhost:5000/api/v1/properties/${id}`);
    const res = await fetch(url)
    return res.json()
}

const postContactForm = async (body) => {
    let url = new URL(`http://localhost:5000/api/v1/contact_requests`);
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return res.json()
}

export { getProperties, getProperty, postContactForm }