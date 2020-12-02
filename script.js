// document.getElementById("new-quote").addEventListener("click", function (e) {
//     console.log("BANG!!");
// });

$(document).ready(function() { 
    console.log("Something's working");
    var newColor = function getNewColor() {
        var letters = '012345';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 6)];
        }
        return color;
    }

    $("body").css("color",newColor); 
});
                            
    

