function doSomething() {
  let data = document.getElementById("data").value;

  for (let i = 0; i < parseInt(data); i++) {
    console.log(i);
  }

  console.log("(end)");
}
