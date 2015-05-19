/* document.addEventListener("DOMContentLoaded", function () {
    var tagline = document.querySelector("p.tagline");
    tagline.innerText = "From Cloud9 IDE!";
   var clickButton = $("button").click(function() {
    alert(this.id)
    } */
function switchPanel(x)
    {
        var string = "";
        switch(x)
        {
            case 1: 
                document.getElementById("text").innerHTML="You wake up in a dark room, and all you can hear is the sound of the howling wind and snapping of twigs.";
                document.getElementById("image").src="http://i.imgur.com/vd5mPei.gif";
                document.getElementById("b2").style.visibility = 'hidden';
                //document.getElementById("b1").onclick = "switchPanel(2)";
                //document.getElementById("b1").onclick = "switchPanel(2)";
                break;
            default:
                console.log("asdf");
                break;
        }
    }