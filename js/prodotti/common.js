function modificaProdotto(id) {
    window.location.href = "/js/modifica-prodotto/?id=" + id
}

async function getProdotti() {
    const token = localStorage.getItem('TOKEN')
    const result = await axios.get('https://dummyjson.com/products', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    return result.data
}

async function getSingleProdotto(id) {
    const result = await axios.get('https://dummyjson.com/products/' + id)
    return result.data
}

function getId() {
    // window.location.search = "?id=X"
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    return id
}

async function eliminaProdotto(id, name) {
    const toDelete = confirm("sei sicuro di voler eliminare il prodotto " + name + "?")
    console.log(toDelete) // true se devo eliminare, false se non devo
    if (toDelete) {
        await axios.delete("https://dummyjson.com/products/" + id)
        window.location.href = "/js/prodotti"
    }
    // chiamata per eliminare il prodotto
}