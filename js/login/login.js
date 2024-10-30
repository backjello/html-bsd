const form = document.querySelector("form")

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = document.querySelector("input[name='username']").value
    const password = document.querySelector("input[name='password']").value

    try {
        const result = await axios.post('https://dummyjson.com/auth/login', {
            username: username,
            password: password
        })
        console.log(result);
        const token = result.data.accessToken
        localStorage.setItem("TOKEN", token)
        window.location.href = "/js/prodotti"
    } catch (error) {
        const errorHtml = document.querySelector("#errore")
        errorHtml.innerHTML = "Le tue credenziali sono errate"
    }

})