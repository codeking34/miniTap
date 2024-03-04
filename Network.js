window.addEventListener('load', () => {
  if (!navigator.onLine){
    // Network connection is disabled
    window.location.href = 'offline.html';
  }
});



window.addEventListener('offline', () => {
  // Network connection is disabled
  window.location.href = 'offline.html';
});