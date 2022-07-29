let nameNode = document.getElementById("nameReserve");
let dateNode = document.getElementById("dateReserve");
let timeNode = document.getElementById("timeReserve");

let errName = document.getElementById("errName");
let errDate = document.getElementById("errDate");
let errTime = document.getElementById("errTime");
const date = new Date();

function validate1() {
  let name = nameNode.value;
  let regex = new RegExp("^[A-Za-z]*$");
  errName.innerHTML = "";
  if (name === "") {
    errName.innerHTML = "<small>Name is required</small>";
    nameNode.style.border = "2px solid crimson";
    return false;
  } else if (regex.test(name) == false) {
    errName.innerHTML = "<small>Name must have only letters</small>";
    nameNode.style.border = "2px solid crimson";
    return false;
  } else {
    nameNode.style.border = "2px solid blue";
    return true;
  }
}

function validate2() {
  //   console.log(dateNode.value);
  let year = parseInt(dateNode.value.slice(0, 4));
  let month = parseInt(dateNode.value.slice(5, 7));
  let day = parseInt(dateNode.value.slice(8, 10));
  let currYear = date.getFullYear();
  let currMonth = date.getMonth();
  let currDate = date.getDate();
  errDate.innerHTML = "";
  //   console.log(year);
  //   console.log(date.getFullYear());
  //   console.log(date.getMonth());
  //   console.log(date.getDate());
  //   console.log(typeof year);
  //   console.log(typeof currYear);
  if (year >= currYear && month >= currMonth && day >= currDate) {
    // console.log("true");
    dateNode.style.border = "2px solid blue";
    return true;
  } else if (dateNode.value === "") {
    dateNode.style.border = "2px solid red";
    errDate.innerHTML = "<small>Please select a date.</small>";
    return false;
  } else {
    dateNode.style.border = "2px solid red";
    errDate.innerHTML = "<small>Date must be a current or future date.</small>";

    return false;
  }
}

function validate3() {
  let hour = parseInt(timeNode.value.slice(0, 2));
  let mins = parseInt(timeNode.value.slice(3, 5));
  let currHour = date.getHours();
  let currMins = date.getMinutes();
  console.log(hour);
  console.log(currHour);
  if (hour >= currHour && mins >= currMins) {
    console.log("true");
    timeNode.style.border = "2px solid blue";
    return true;
  } else if (timeNode.value === "") {
    timeNode.style.border = "2px solid red";
    errTime.innerHTML = "<small>Please select time.</small>";
    return false;
  } else {
    timeNode.style.border = "2px solid red";
    errTime.innerHTML = "<small>Time selected must not be past time.</small>";
    return false;
  }
}

function validateForm() {
  let v1 = validate1();
  let v2 = validate2();
  let v3 = validate3();
  if (v1 && v2 && v3) {
    alert("Your table has been booked.");
    return true;
  }
  return false;
}
