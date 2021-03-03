const messages = [
    "LDU",
    "Flamengo",
    "Boca Juniors",
    "Liverpool",
    "Real Madrid",
    "Racing Club",
    "Napoli",
    "Ferrocarril Oeste"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomMsg}