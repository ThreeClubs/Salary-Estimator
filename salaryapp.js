const incomes = [
  "$45,760 - $52,000 🤓 Consider upskilling at Mission Ready HQ",
  "$52,001 - $62,400 🙂 You could be just starting out",
  "$62,401 - $83,200 😎 Comfortably in the middle",
  "$83,201 - $124,800 🤩 You're doing very well!",
  "$124,800+ Wow! 🤯 Are you a senior developer?", // ES6 enumerate
];

  // consider learning typescript because as we scale up things can get messy ---> change file name to .ts (make a clone)

//typescript react template ---> redo this project with REACT

const button = document.getElementById("button");

function salaryEstimator() {
  // break up this function into helper functions

  let resultDisplay = document.getElementById("resultDisplay");
  let fancyBar = document.getElementById("fancyBar");
  let fancyWait = document.getElementById("fancyWait");
  let complete = document.getElementById("complete");
  const fetchDemand = document.getElementsByName("demand");
  const fetchSupply = document.getElementsByName("supply");

  function salaryModel() {
    let demand = 0;
    let supply = 0;

    for (i = 0; i < fetchDemand.length; i++) {
      if (fetchDemand[i].checked) {
        demand = fetchDemand[i].value;
      }
    }
    for (i = 0; i < fetchSupply.length; i++) {
      if (fetchSupply[i].checked) {
        supply = fetchSupply[i].value;
      }
    }
    if (demand === "High" && supply === "Low") {
      // constructor function similar to switch
      resultDisplay.textContent = incomes[4];
    } else if (
      (demand === "High" && supply === "Medium") ||
      (demand === "Medium" && supply === "Low")
    ) {
      resultDisplay.textContent = incomes[3];
    } else if (
      (demand === "Medium" && supply === "Medium") || // this isn't readable - DRY
      (demand === "High" && supply === "High") ||
      (demand === "Low" && supply === "Low")
    ) {
      resultDisplay.textContent = incomes[2];
    } else if (
      (demand === "Medium" && supply === "High") ||
      (demand === "Low" && supply === "Medium")
    ) {
      resultDisplay.textContent = incomes[1]; // when you're deep in code this is hard to read - again think big scale
    } else {
      resultDisplay.textContent = incomes[0];
    }
  }
  const waitMessage = () =>
    (resultDisplay.textContent = "Calculating results...");

  function progressBar() {
    let a = 0;
    let run = setInterval(frames, 50);
    function frames() {
      a++;
      if (a == 101) {
        clearInterval(run);
        fancyWait.style.display = "none";
        complete.style.display = "block"; // apply a style refactor using className
      } else {
        fancyWait.style.display = "block";
        fancyBar.style.width = a + "%";
        complete.style.display = "none";
        fancyBar.textContent = a + "%";
      }
    }
    const waitMessage = () =>
      (resultDisplay.textContent = "Calculating results...");

    const wait = (delay = 0) =>
      new Promise((resolve) => setTimeout(resolve, delay));
      
    waitMessage();
    wait(3000).then(salaryModel);
}

button.addEventListener("click", salaryEstimator);


