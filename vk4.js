let balance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;
 document.getElementById('balance').innerHTML = `Balance: &#8372;${balance.toFixed(2)}`;

 document.getElementById('incrementButton').addEventListener('click', function() {
   // Set the target balance to stop at
   const targetBalance = 3000; // Change this to your desired target balance
   // Set the increment amount
   const incrementAmount = 1; // Change this to your desired increment amount
   // Set the interval duration in milliseconds
   const intervalDuration = 50; // Change this to your desired interval duration
   
   // Create an interval to gradually increment the balance
   const interval = setInterval(function() {
     // Increment the balance by the increment amount
     balance += incrementAmount;
     // Update the balance display
     document.getElementById('balance').innerHTML= `Balance: &#8372; ${balance.toFixed(2)}`;
     // Store balance in localStorage
     localStorage.setItem('balance', balance);
     
     // Check if the target balance is reached
     if (balance >= targetBalance) {
       // Stop the interval
       clearInterval(interval);
       // Update the button text to indicate completion
       document.getElementById('incrementButton').innerText = 'Balance Reached!';
     }
   }, intervalDuration);
 });