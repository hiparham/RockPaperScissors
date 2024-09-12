const options = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
}
//
const buttons = document.querySelectorAll("button")
const txt = document.querySelector(".winner")
//
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    const pcChoice = Object.keys(options)[Math.floor(Math.random() * 3)]
    txt.textContent =
      id === pcChoice
        ? `it's a tie!`
        : pcChoice === options[id]
        ? `Pc won your ${id} with ${pcChoice}`
        : `You won the computer's ${pcChoice} by ${id}`
  })
})
