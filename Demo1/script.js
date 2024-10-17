let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function clearAll() {
  currentInput = "";
  document.getElementById("result").value = "";
}

function clearEntry() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("result").value = currentInput;
}

function calculateResult() {
  try {
    // Menangani operator pangkat (^) dengan mengganti menjadi **
    currentInput = currentInput.replace("^", "**");
    let result = eval(currentInput); // Menggunakan eval untuk evaluasi ekspresi
    document.getElementById("result").value = result;
    currentInput = result.toString();
  } catch (e) {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}
