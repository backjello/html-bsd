async function main() {
    const id = getId()
    const product = await getSingleProdotto(id)
    const form = document.querySelector('form')
    form.innerHTML = `
        <input type="text" placeholder="nome del prodotto" value="${product.title}" id="title">
        <input type="text" placeholder="descrizione del prodotto" value="${product.description}"
            id="description">
        <input type="number" placeholder="prezzo" value="${product.price}" id="price">
        <input type="number" placeholder="stock" value="${product.stock}" id="stock">
    `
}

main()