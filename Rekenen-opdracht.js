var first;
var second;
var outputAnswer;    
var inputAnswer;
var amounts = 0;
var timer = 10000;
var counter = 10;
var newHeight = (window.innerHeight - 85);
var balloonDown = -200
var operatorArray= ["/","+", "-", "*"];
var balloon1 = $("#balloon");
var topBalloon = 0
var balloonSpeed = 100


// balloon
var inputAnswer = false;
// function balloonStart () {
//     $(".balloon").animate({
//         top: "+=50px"
//     }, "slow" )

// }



function makeSum() {
    first = 1 + Math.floor(Math.random() * 9);
    second = 1 + Math.floor(Math.random() * 9);
    console.log({first, second})

    // var operatorArray= ["/","+", "-", "*"];
    var numberOperator = operatorArray [Math.floor(Math.random() * operatorArray.length)];
    console.log(numberOperator)

    while(numberOperator === "-" && first < second){
        first++;
    }
    while(numberOperator === "/" && first % second != 0) {
        first++;
    }
    $("#firstsum").text(first) 
    $("#secondsum").text(second)
    $("#operator").text(numberOperator);
};



function checkSum() {
    inputAnswer = eval($("#answer").val())
    operator = $("#operator").text();
    if(operator === "*"){
        outputAnswer = (first * second);
    } else if( operator === "/") {
        outputAnswer = (first / second);
        
    } else if( operator === "-") {
        outputAnswer = (first - second);
        
    }
    else {
        outputAnswer = (first + second);
    }
}

function giveAnswer() {
    document.getElementById("answer").addEventListener('keyup', function(e) {
        if(e.which == 13) {
            checkSum()
            if(inputAnswer == outputAnswer) { 
                console.log("correct")
                $("#youranswer").text("that is correct")
                topBalloon -= balloonSpeed
                counter +=2;
            } else if (inputAnswer !== outputAnswer) {
                console.log("not correct 2")
                $("#youranswer").text("not correct")

                topBalloon += balloonSpeed
                counter -=4;
            }
            makeSum()
        }
    })
}

$(document).ready(() => {
    $("#start").click(function(){
        var timer = setInterval(() => {
            counter--;
            balloon1.css({top: (topBalloon+= balloonSpeed/5) + "px"})
            $("#time").html(counter)
            if(counter <= 0 ){
                  console.log("Game over")
                  $("#youranswer").text("game over")
                  clearInterval(timer)
            }
        }, 1000)
        makeSum()
    })
    giveAnswer()
})