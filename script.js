// document.getElementById("new-quote").addEventListener("click", function (e) {
//     console.log("BANG!!");
// });


function getNewColor() {
    // console.log("Something's working here as well");
    var letters = '012345';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
}

function changeBackgroundColor() {
    var newColor = getNewColor();
    $("body").css("background-color", newColor);
}

$(document).ready(function() { 
    // console.log("Something's working");
    // once the document is ready, select the button and attach the click handler
    // pass the changeBackgrounColor function to the click handler
    $("#new-quote").click(changeBackgroundColor);
    // call the changeBackground function when the document is ready
    changeBackgroundColor(); 
});







// $("#newQuote").click(function() {      
//     $.getJSON("text/quotes.json", function(responseText) { 
      
//       $("#quoteText").html('"' + responseText.quoteText + '"');
//       $("#author").html("- " + responseText.quoteAuthor);
      
//       newQuote = responseText.quoteText;
//   });                    
// });
                            
    

