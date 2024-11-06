
async function main() {
    const data = await getProdotti()
    const table = document.querySelector('table')
    for (const prod of data.products) {
        table.innerHTML += `
            <tr>
                <td>
                    <img src="${prod.images[0]}" style="width:200px">
                </td>
                <td>
                    <a href="/js/singolo-prodotto/?id=${prod.id}">
                    ${prod.title}
                    </a>
                    </td>
                <td>
                    ${prod.description}
                </td>
                <td>
                    ${prod.price}$
                </td>
                <td>
                    ${prod.stock}
                </td>
                <td>
                    <button onclick="modificaProdotto(${prod.id})">
                        Modifica
                    </button>
                    <button onclick="eliminaProdotto(${prod.id},'${prod.title}')">
                        Elimina
                    </button>
                </td>
            </tr>
        `
    }
}


main()