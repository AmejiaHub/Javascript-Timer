function updateTime() {
    var now = new Date();
    document.getElementById('time').innerHTML = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);