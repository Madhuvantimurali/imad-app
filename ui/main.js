//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            console.log("ready");
            if(request.status === 200){
                console.log("init span and count")
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                console.log("finished");
            }
        }
    };
    request.open('GET','http://madhuvantimuralik.imad.hasura-app.io/counter',true);
    request.send(null);
};
