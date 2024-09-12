const your_sc_text = document.querySelector(".your_sc")
const pc_sc_text = document.querySelector(".pc_sc")
const round_text = document.querySelector(".round")
const final_text = document.querySelector(".last")
const final_result = document.querySelector(".yeah")
const resetBtn = document.querySelector(".resetBtn")
const buttons = document.querySelectorAll("button")
const txt = document.querySelector(".winner")
const options = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
}
let your_score
let pc_score
let rounds
const reset = () => {
  your_score = 0
  pc_score = 0
  rounds = 0
  your_sc_text.textContent = 0
  pc_sc_text.textContent = 0
  round_text.textContent = 0
  txt.textContent = ""
  final_text.classList.add("hidden")
}
reset()
//
const increase = () => {
  your_sc_text.textContent = your_score
  pc_sc_text.textContent = pc_score
  round_text.textContent = rounds
}

//
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (rounds < 4) {
      let curr = ""
      rounds++
      const id = e.target.dataset.id
      const pcChoice = Object.keys(options)[Math.floor(Math.random() * 3)]
      switch (pcChoice) {
        case id:
          {
            curr = `it's a tie`
            increase()
          }
          break
        case options[id]:
          {
            curr = `Pc won your ${id} with ${pcChoice}`
            pc_score++
            increase()
          }
          break
        default:
          {
            curr = `You won the computer's ${pcChoice} by ${id}`
            your_score++
            increase()
          }
          break
      }
      txt.textContent = curr
    } else {
      final_text.classList.remove("hidden")
      final_result.textContent =
        your_score > pc_score
          ? "You Won the computer"
          : pc_score > your_score
          ? "Computer Won"
          : "It was a tie!"
    }
  })
})
//
resetBtn.addEventListener("click", reset)
