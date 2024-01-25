const btnE1 = document.getElementById("btn")
const jokeE1 = document.getElementById("joke");

const apiKey = "d77d5+9Q/89sUmBY2+MDIQ==ln18zU9C9Z9ZbO7q";

const options = {
    method: "GET",
    headers: {
        "X-api-key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getjoke() {

    try {
        jokeE1.innerText = "updating...";
        btnE1.disabled = true;
        btnE1.innerText = "loading...";
        const response = await fetch(apiURL, options)
        const data = await response.json()

        btnE1.disabled = false;
        btnE1.innerText = "Tell me a joke";

        jokeE1.innerText = data[0].joke;
    } catch (error) {
        jokeE1.innerText = "An error happend , try again later";
        btnE1.disabled = false;
        btnE1.innerText = "Tell me a joke";
        console.log(error);
    }
}

btnE1.addEventListener("click", getjoke);
