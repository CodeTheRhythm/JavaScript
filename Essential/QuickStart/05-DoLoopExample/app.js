function doSomething() {
  let data = document.getElementById("data").value;
  let count = 0;

  do {
    count++;
    if (count > 10) break; /* Note: 'count' has to be checked before further processing */
	console.log(`do something ${count}`);
  } while (data == "e")
}
