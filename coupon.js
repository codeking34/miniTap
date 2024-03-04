function validateCoupon() {
  var couponCode = document.getElementById("couponInput").value;
  var validCodes = ["SAVE10", "DISCOUNT20", "DEAL30"]; // List of valid coupon codes
  var hideButton = document.getElementById("hideButton");
  
  if (validCodes.includes(couponCode)) {
  document.getElementById("message").textContent = "access code is valid!";
  
  hideButton.style.display = "inline"; // Display the Hide button
  } else {
  document.getElementById("message").textContent = "Invalid access code. Please try again.";
 
  hideButton.style.display = "none"; // Hide the button if the code is invalid
  }
  }