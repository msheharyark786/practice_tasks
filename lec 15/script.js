/*
https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

/*var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("mouseenter",function () {
    console.log("mouse entered !")
})*/


var button = document.getElementById ("enter");
var ul = document.getElementsByTagName("ul")[0];


button.addEventListener("click",function () {
    if (input.value.length > 0)
        console.log("clicked");
    var input = document.getElementById("User-input").value;
    var li = document.createElement("li");
    li.append(document.createTextNode("input"));
    ul.append(li);
})


input.addEventListener("keypress", function (e) {
        console.log(e);
        if(input.value.length > 0 && e.which ===13){
            var li = document.createElement("li");
            li.append(document.createTextNode("input"));
            ul.append(li);
            input.value='';
        }
    })

});

button.addEventListener("click",)

button.addEventListener("click",)