String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for( var i=0; i < str.length; i++ ){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            console.log(a + b)
            str = a + b;

            
        }
    }
    return str;
}

function command(input){
    console.log(input)
    switch(input.substr(0, 2)){
        case "-d":
            input = input.substr(3);
            window.location = "https://duckduckgo.com/?q=" +
            input.replaceChars(" ", "+");
            break;

        case "-y":
            input = input.substr(3);
            window.location =
            "https://www.youtube.com/results?search_query=" +
            input.replaceChars(" ", "+");
            break;

        case "-w":
            input = input.substr(3);
            window.location =
            "https://en.wikipedia.org/wiki/Special:Search/" +
            input.replaceChars(" ", "%20");
            break;

        default:
            temp = input.replaceChars("+", "%2B");
            temp2 = temp.replaceChars("", "%20");
            temp3 = temp2.replaceChars("#", "%23");
            input = temp3.replaceChars("&", "%26");
            window.location="https://www.google.ca/search?q=" + input;
    }
}



window.onload = function(){
    // search if presed enter key
    commandInput = document.getElementById("searchbar");
    if(!!commandInput){
        commandInput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var input = this.value;
                command(input);
            }
        });
    }
}

