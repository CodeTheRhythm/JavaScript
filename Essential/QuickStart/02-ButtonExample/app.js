function AddNums() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const result = parseInt(num1) + parseInt(num2);

  if (result >= 30) 
    console.log(`Yes, reault is greater than or equal to 30`);
  else
    console.log(`No, reault is smaller than 30`);
}
