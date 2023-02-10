function doSomething() {
  let data = document.getElementById("data").value;

  switch (data) {
    case "a": 
      console.log("Option A is selected");
      break;
    case "b": 
      console.log("Option B is selected");
      break;
    case "c": 
      console.log("Option C is selected");
      break;
    case "d": 
      console.log("Option D is selected");
      break;
    default:
      console.log("Input is invalid");
      break;
  }
}
