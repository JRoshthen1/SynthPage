function search(input) {

    var searchTag = input.substr(0, 2)
    var searchTerm = input.substr(3)
    
  switch (searchTag) {
      case "-d":
       window.location =
         `https://duckduckgo.com/?q=${searchTerm.replace(/\s+/g, '+')}`
      break;

    case "-y":
       window.location =
         `https://yewtu.be/search?q=${searchTerm.replace(/\s+/g, '+')}`
      break;

    case "-w":
      window.location =
        `https://en.wikipedia.org/wiki/Special:Search/${encodeURL(searchTerm)}` 
      break;

    case "-l":
      window.location =
        `https://search-lemmy.com/results?query=${searchTerm.replace(/\s+/g, '+')}&page=1&mode=posts`
      break;

    default:
      window.location = `https://www.google.ca/search?q=${encodeURL(input)}` //passing only input couse no option used 
  }
}

// clean the google url
function encodeURL(unclean) {
    const urlEncodeRegex = /[^a-zA-Z0-9\-._~]/g;
    return unclean.replace(urlEncodeRegex, (match) => {
      return '%' + match.charCodeAt(0).toString(16).toUpperCase();
    });
}

window.onload = function () {
  // search when pressed enter key
  commandInput = document.getElementById("searchbar");
  if (!!commandInput) {
    commandInput.addEventListener("keypress", function (a) {
      var key = a.keyCode;
      if (key == 13) {
        var input = this.value;
        search(input);
      }
    });
  }
};
