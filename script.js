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
    $("#new-quote").click(function() {
        changeBackgroundColor();

        // needs to run on a server, otherwise json file will not load
        // see README.md
        // for data structure, see quotes.json
        $.getJSON("./quotes.json", function(data) { 
            $("#quote-text").html('"' + data.quotes[0].quote + '"');
            $("#author").html("- " + data.quotes[0].author);
            
            newQuote = data.quoteText;
        });

    });
    // call the changeBackground function when the document is ready
    changeBackgroundColor(); 
});





                            
    

