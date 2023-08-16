
const markRead =document.querySelector(".mark-as-read");

let count =document.getElementById("notification-count");
const buttons =document.querySelectorAll("button.circle");

document.querySelector(".main-container").addEventListener("click",function(e){
    console.log(e.target);
    
    if(e.target.classList.contains("mark-as-read")){
        animateOutput();
        applyFadeToAllButton();
      
    }
    else if(e.target.classList.contains("circle")){
         fade(e.target);
    }
})

function applyFadeToAllButton(){
        for(let  button of buttons){
           fade(button);
        }
    }
  
    
        function fade(button){
            const computedStyle = getComputedStyle(button);
            if (computedStyle.display === "inline-block") {
                button.style.transition = "opacity 0.3s"; // Apply a transition to opacity property
                button.style.opacity = "0"; // Set opacity to 0 to trigger the fade-out effect
              }
              let currentNumber =Number(count.textContent);
            if(currentNumber>0){
                count.textContent =currentNumber-1;
            }
        }

        function animateOutput(){
            let currentNumber =Number(count.textContent);
            const interval =  setInterval(function(){
                        if(currentNumber>0){
                 
                        currentNumber--;
                        count.textContent =currentNumber;
                    }
            
                        if(currentNumber==0){
                            count.textContent =0;
                            clearInterval(interval);
                          
                        }
                    },100)
        }
   
