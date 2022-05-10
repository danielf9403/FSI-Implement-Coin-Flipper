// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')
    
    //heads
    let coin = 2
    
    let pennyImage = document.getElementById("img-src")
    pennyImage.src ="./assets/images/penny-heads.jpg"
    
    // TODO: Add event listener and handler for flip and clear buttons
    
    // Flip Button Click Handler
    let flipButton = document.getElementById("flip")
    console.log(flipButton)
    flipButton.addEventListener("click", function(){
        console.log("flip was clicked")

         // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        //heads
        if (coin === 1){
            pennyImage.src ="./assets/images/penny-heads.jpg"
        }
        //..tails
        else {
            pennyImage.src ="./assets/images/penny-tails.jpg"
        }
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
    })
       


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    let clearButton = document.getElementById("clear")
    console.log(clearButton)
    clearButton.addEventListener("click", function(){
        console.log("clear was clicked")
    })
})