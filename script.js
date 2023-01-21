const form = document.querySelector("#form-habits")
const button = document.querySelector("header button")
const nlwSetup = new NLWSetup(form)

button.addEventListener("click", add)
form.addEventListener("change", save)

//Add Day
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso!")
    return
  }

  nlwSetup.addDay(today)
}

//Save information
function save() {
  localStorage.setItem(
    "NLWSetup@Habits-SamuelLima",
    JSON.stringify(nlwSetup.data)
  )
}

// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }

const data =
  JSON.parse(localStorage.getItem("NLWSetup@Habits-SamuelLima")) || {}
nlwSetup.setData(data)
nlwSetup.load()
