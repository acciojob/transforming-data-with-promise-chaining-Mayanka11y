//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
  const inputElement = document.getElementById("ip");
  const outputElement = document.getElementById("output");
  let num = Number(inputElement.value);

  if (isNaN(num)) {
    outputElement.innerHTML = "Please enter a valid number";
    return;
  }

  outputElement.innerHTML = ""; // Clear previous output

  new Promise((resolve) => {
    setTimeout(() => {
      outputElement.innerHTML = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result *= 2;
          outputElement.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result -= 3;
          outputElement.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result /= 2;
          outputElement.innerHTML = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          result += 10;
          outputElement.innerHTML = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .catch((error) => {
      outputElement.innerHTML = `Error: ${error.message}`;
    });
});
