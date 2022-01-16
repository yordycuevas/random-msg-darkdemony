const messages = [
    "Oscar",
    "Yordy",
    "Jesica",
    "Natalia",
    "Stalin",
    "Carolina",
    "Paulina",
    "Sandra",
    "Jorge"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message);
};

module.exports = {randomMsg};