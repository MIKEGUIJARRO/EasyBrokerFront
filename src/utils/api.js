
const getProperties = async (pagination) => {
    let url = new URL('http://localhost:5000/api/v1/properties?search%5Bstatuses%5D%5B%5D=published')
    let searchParams = url.searchParams;

    for (const key in pagination) {
        searchParams.set(key, pagination[key]);
    }
    const res = await fetch(url)
    console.log(url.toString())
    return res.json()
}

export { getProperties }