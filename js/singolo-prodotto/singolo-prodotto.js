async function main() {
    const id = getId() // prendo l'id dai query params
    const product = await getSingleProdotto(id) // prendo i dati del singolo prodotto
    console.log(product)
    const mainDiv = document.querySelector('#main')
    mainDiv.innerHTML = `
    
    <h2>${product.title}</h2>
    <img src="${product.images[0]}" style="width:200px">
    <p>${product.description}</p>
    <span>prezzo: ${product.price}$</span>
    <br>
    <span>quantità magazzino: ${product.stock}</span>
    <br>
    <button onclick="modificaProdotto(${product.id})">
        Modifica
    </button>
    <button onclick="eliminaProdotto(${product.id},'${product.title}')">
        Elimina
    </button>
    <br>
    <a href="/js/prodotti">Torna alla lista prodotti</a>
    `
}

main()