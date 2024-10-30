async function getData() {
    const result = await axios.get('https://dummyjson.com/posts')
    console.log(result);
}

getData()

const form = document.querySelector('form')

// arrow function o funzioni anonime
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // <input value="Titolo" type="text" required placeholder="Titolo" name="title">
    const titolo = document.querySelector("input[name='title']")
    const descrizione = document.querySelector("input[name='description']")
    console.log(titolo, descrizione)
    const titoloValue = titolo.value
    const descrizioneValue = descrizione.value
    // const post = await axios.post("https://dummyjson.com/posts/add", {
    //     title: titoloValue,
    //     body: descrizioneValue,
    //     userId: 3 // numero a caso di un utente
    // })
    const post = await axios.put("https://dummyjson.com/posts/10", {
        title: titoloValue,
        body: descrizioneValue
    })
    console.log(post);
})


async function getSinglePost(id) {
    // prendo il post con id 10
    const post = await axios.get('https://dummyjson.com/posts/' + id)
    console.log(post);
    const titolo = document.querySelector("input[name='title']")
    const descrizione = document.querySelector("input[name='description']")
    titolo.setAttribute('value', post.data.title)
    descrizione.setAttribute('value', post.data.body)
}

getSinglePost(10)

async function deletePost(id) {
    const result = await axios.delete('https://dummyjson.com/posts/' + id)
    console.log(result);
}