// Hide the wins and losses until the game is over.
// Hide the quiz questions until the Start button is clicked
    document.getElementById("repeat").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("questions").style.display = "none";

//  Timer Code - Contains definitions for the following functions:
    // run()
    // decrement()
    // stop()

    //  Set our timer to 60, and wins and losses to 0.
    var number = 61;
    var wins = 0;
    var losses = 0;

    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;

    // When the Start button gets clicked, run the run() function.
    $("#start").on("click", run);   
    
    //  The run() function sets an interval that runs the decrement function once a second.
    function run() {
        document.getElementById("right").style.display = "none";
        document.getElementById("wrong").style.display = "none";
        document.getElementById("questions").style.display = "none";
        document.getElementsByClassName("view")[0].style.opacity = "1";
        intervalId = setInterval(decrement, 1000);
    }

    //  The decrement() function.
    function decrement() {

        //  Decrease number by one.
        number--;

        //  Show the number in the #timer field.
        $("#timer").html("<h3><strong>Time Remaining: " + number + " seconds</strong></h3>");

        //  Display the quiz questions. 
        document.getElementById("questions").style.display = "";        
     
        //  Stop the clock once the alloted time expires.
        //  Display the number of correct and incorrect answers once the timer expires.
        if (number == 0) { 
            stop();           

            //Determine the number of correct and incorrect answers selected.

            // Question 1.
                if ($("#dropdown").val() == "type3") {
                    wins++;
                } else {
                    losses++;
                }            
            
            // Question 2
                if ($("#CDN").val() == "right") {
                    wins++;
                } else {
                    losses++;
                }         

            // Question 3
                if ($("#popular input[type='radio']:checked").val() == "no") {
                    wins++;
                } else {
                    losses++;
                }         

            // Question 4
                if ($("#html input[type='radio']:checked").val() == "yes") {
                    wins++;
                } else {
                    losses++;
                }   

            // Question 5
                if ($("#javascript input[type='radio']:checked").val() == "yes") {
                    wins++;
                } else {
                    losses++;
                }      

            // Question 6
                if ($("#css input[type='radio']:checked").val() == "yes") {
                    wins++;
                } else {
                    losses++;
                }       

            // Question 7
                var cascstyles = document.getElementById("cssdef").value.toLowerCase();
                if (cascstyles == "cascading style sheets") {
                    wins++;
                } else {
                    losses++;
                }   

            // Question 8
                var htmel = document.getElementById("htmldef").value.toLowerCase();
                if (htmel == "hypertext markup language") {
                    wins++;
                } else {
                    losses++;
                } 

            // Display the number of correct and incorrect answers, and check to play again.
            //  Reset wins, losses, and timer if Play Again? button clicked.
            document.getElementById("right").style.display = "";
            document.getElementById("wrong").style.display = "";
            document.getElementById("start").style.display = "none";
            document.getElementById("repeat").style.display = "";
            document.getElementById("questions").style.display = "none";
            $("#right").html("<h3><strong># Right: " + wins + "</strong></h3>");                       
            $("#wrong").html("<h3><strong># Wrong: " + losses + "</strong></h3>");
            wins = 0;
            losses = 0;
            number = 61;
            document.getElementById("questions").reset();
        } 

        //  The stop() function
        function stop() {
            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
        }
    }
// End of Timer Code


// Playing Again
    $("#repeat").on("click", run);
    

