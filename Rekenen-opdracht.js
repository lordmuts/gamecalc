$(document).ready(() => {
    var first;
    var second;
    var outputAnswer;    
    var inputAnswer;
    var amounts = 0;
    var timer = 10000;
    var counter = 10;
    var balloon = $("#balloon");

    var speed=5;
    // generates two random numbers and add them to the dom (Todo: pick operator)
    function makeSum() {
        first = 1 + Math.floor(Math.random() * 9);
        second = 1 + Math.floor(Math.random() * 9);

        var operatorArray= ["/","+", "-", "*"];
        var numberOperator = operatorArray [Math.floor(Math.random() * operatorArray.length)];

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

    var timer = setInterval(() => {
        counter--;
        $("#time").html(counter);
        if(counter < 0 ){
          //  alert("Game over")
            console.log("Game over")
            clearInterval(timer)
        }
        myMove();
       
    }, 1000);
    
    // setInterval(function(){ 
    //    alert("Game-Over"); }, timer)

    //     clearInterval(speed);

    function checkSum() {
        inputAnswer = eval($("#answer").val())
        operator = $("#operator").text()

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
        if(inputAnswer === outputAnswer) {
            return true
        } 
        else {
            return false
        }  
    }
    function myMove() {
        var elem = $("#balloon");
        var pos = 0;
        var idPosition = setInterval(frame, 10);
        function frame() {
            if (pos == 350) {
                clearInterval(idPosition);
            } else {
                pos++
                elem.style.top = pos + "px";
            }
        }
        


        elem.css('top', parseInt(elem.css(window.height/10)))
        // var elem1 = elem.css('top', parseInt(elem.css('top')) + 10 +'%'); 
            
        // debugger
        //  var pos = elem.position().top;
        
        // var id = setInterval(frame,timer);
        // function frame() {
        //   if (pos == 1000) {
        //     clearInterval(id);
        //   } else {
        //     elem.css({"top": pos- speed })
            

        //   }
        }
      
     



    makeSum();
    // myMove();
  // timer with setInterval. Decrement seconds every 1000ms 
    document.addEventListener('keyup', function(e){
        if(e.which == 13) {
            //event.preventDefault()
           // console.log(setInterval);
            if(  checkSum()){
                amounts++
                console.log("correct answer")
                counter +=100;
                // myMove();
                // timer += 1000;
            } 
            else {
                counter -= 2;
            }
            
            inputAnswer = eval($("#answer").val(""))
            $("#counter").text(amounts);
            makeSum();
    
        }
        
    
    })

})
