async function getProdotti() {
    const token = localStorage.getItem('TOKEN')
    const result = await axios.get('https://dummyjson.com/products', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

getProdotti()