let nameNode = $("#nameContact");
let emailNode = $("#emailContact");
let feedbackNode = $("#feedbackContact");
let errName = $(".errName");
let errEmail = $(".errEmail");
let errFeedback = $(".errFeedback");

function validate1() {
  let name = nameNode.val();
  let regex = new RegExp("^[A-Za-z]*$");
  errName.html("");
  if (name === "") {
    errName.html("<small>Name is required</small>");
    nameNode.css("border", "2px solid red");
    return false;
  } else if (regex.test(name) == false) {
    errName.html("<small>Name must have only letters.</small>");
    nameNode.css("border", "2px solid red");
    return false;
  } else {
    nameNode.css("border", "2px solid blue");
    return true;
  }
}

function validate2() {
  let email = emailNode.val();
  errEmail.html("");
  if (email === "") {
    errEmail.html("<small>Email is required</small>");
    emailNode.css("border", "2px solid red");
    return false;
  } else if (!email.includes("@") || email.endsWith("@")) {
    errEmail.html("<small>Enter a valid email</small>");
    emailNode.css("border", "2px solid red");
    return false;
  } else {
    emailNode.css("border", "2px solid blue");
    return true;
  }
}
function validate3() {
  let feedback = feedbackNode.val();
  errFeedback.html("");
  if (feedback === "") {
    errFeedback.html("<small>Feedback is required</small>");
    feedbackNode.css("border", "2px solid red");
    return false;
  }
  feedbackNode.css("border", "2px solid blue");
  return true;
}
function validateContact() {
  let v1 = validate1();
  let v2 = validate2();
  let v3 = validate3();
  if (v1 && v2 && v3) {
    alert("Thank You For Your Feedback!!");
    return true;
  }
  return false;
}
