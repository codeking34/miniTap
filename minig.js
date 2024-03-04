function startMining() {
    let isMining = false;
    if (!isMining) {
      isMining = true;
      document.getElementById("miningStatus").innerText = "Mining in progress...";
      // Simulate mining process
      setTimeout(() => {
        isMining = false;
        balance += 0.001; // Increment balance after successful mining
        // Update balance display
        document.getElementById("balance").innerText = `Balance: $${balance.toFixed(2)}`;
        document.getElementById("miningStatus").innerText = "Mining....!";
        // Store balance in localStorage
        localStorage.setItem('balance', balance);
      }, 50); // Simulated mining time: 4 seconds
    }
  }

  function withdraw() {
  const walletAddress = document.getElementById("walletAddress").value;
  if (balance >0 && walletAddress) {
  alert("withdrawal initiated for this  (" + walletAddress + ") amount");
  balance = balance-walletAddress; // Reset balance after withdrawal
  // Update balance display
  document.getElementById("balance").innerText = `Balance: $${balance.toFixed(2)}`;
  // Store updated balance in localStorage
  localStorage.setItem('balance', balance);
  } 
  else if (balance === 0) {
  alert("Insufficient balance to withdraw.");
  } 
  else if (balance < walletAddress) {
  alert("Insufficient balance to withdraw.");
  } 
  
 else{
 alert("Enter pay out detail");
   balance = balance-walletAddress;
 }
     
     
    }
    
    
  // Function to update the chart with user input data
   function updateChart() {
     var input = document.getElementById('dataInput').value;
     var newData = input.split(',').map(Number);
     
     // Update the chart with new data
     myChart.data.datasets[0].data = newData;
     myChart.update();
   }
  
   // Configuration options
   var options = {
     scales: {
       yAxes: [{
         ticks: {
           beginAtZero: true
         }
       }]
     }
   };
  
   // Get the context of the canvas element we want to select
   var ctx = document.getElementById('myChart').getContext('2d');
  
   // Create the chart with initial data
   var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['vk2', 'vk4.2', 'vk6.0', 'vk8.0', 'vk10.0'],
       datasets: [{
         label: 'engine payment detail',
         backgroundColor: 'rgba(24, 162, 235, 0.2)',
         borderColor: 'rgba(54, 162, 235, 1)',
         borderWidth: 1,
         data: [70, 80, 85, 95, 100] // Initial data
       }]
     },
     options: options
   });
   //payout form
   payOut=()=>{
   window.location="Cashout.html";
   }
   var payOut;