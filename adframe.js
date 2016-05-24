isBlocked=false;
console.log("Its Executin");
 var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200 ) {
      console.log('No blocker');
    }
    else if(request.readyState === 4 && request.status === 0){
      console.log('Blocker exists');
    }
  };
  request.open("GET","pathTo/ads.html");
  request.send();
