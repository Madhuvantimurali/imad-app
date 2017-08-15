//counter code
console.log("im here");
var button = document.getElementById('counter');
button.onclick = function(){
    console.log("at onclick event")
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        console.log("State change")
        if(request.readyState === XMLHttpRequest.DONE){
            console.log("Checking if done");
            if(request.status === 200){
                console.log("generating counter");
                var counter = request.responseText;
                counter = counter + 1;
                console.log(counter);
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                console.log(span);
            }
        }
    };
    request.open('GET','http://madhuvantimuralik.imad.hasura-app.io/counter',true);
    request.send(null);
};
