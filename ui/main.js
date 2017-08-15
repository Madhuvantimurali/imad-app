//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            alert("ready");
            if(request.status === 200){
                alert("init span and count")
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                alert("finished");
            }
        }
    };
    request.open('GET','http://madhuvantimuralik.imad.hasura-app.io/counter',true);
    request.send(null);
};
