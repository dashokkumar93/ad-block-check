isBlocked=false;
console.log("Its Executin");
var tries = 0;
var int_id = window.setInterval(function(){
     for(var i=0; i < 10000; i++){
           var cid = "ghostery-alert-" + i;
           var purple_box  = document.getElementById(cid);
 
            //Ghostery installed
            if (purple_box != null){
                //Do dodgy things
              console.log("123")
                window.clearInterval(int_id);
            }
            else if(tries >= 1000){
                window.clearInterval(int_id);
            }
     }
     tries += 1;
 },10);
