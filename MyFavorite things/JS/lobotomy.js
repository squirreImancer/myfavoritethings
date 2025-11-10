let bouncingWindow;
let x = 0;
let y = 0;
let dx = 20; // Horizontal speed
let dy = 20; // Vertical speed
let intervalId;

function openBouncingWindow() {
    // Open a new window with specific dimensions and no browser features
    bouncingWindow = window.open("https://www.geocities.ws/jacobvilleneuve/MyFavorite%20things/download.jpg", "BouncingWindow", "width=150,height=150,menubar=no,toolbar=no,location=no,status=no,resizable=no");
    if (bouncingWindow) {
        // Start the bouncing animation
        startBouncing();
    } else {
        alert("Pop-up blocked! Please allow pop-ups for this site.");
    }
}

function startBouncing() {
    // Get screen dimensions
    const screenWidth = screen.availWidth;
    const screenHeight = screen.availHeight;

    // Get window dimensions (might need to adjust for window decorations)
    const windowWidth = bouncingWindow.outerWidth;
    const windowHeight = bouncingWindow.outerHeight;

    intervalId = setInterval(() => {
        // Update position
        x += dx;
        y += dy;

        // Check for horizontal boundaries and reverse direction if hit
        if (x + windowWidth > screenWidth || x < 0) {
            dx = -dx;
        }

        // Check for vertical boundaries and reverse direction if hit
        if (y + windowHeight > screenHeight || y < 0) {
            dy = -dy;
        }

        // Move the window to the new position
        bouncingWindow.moveTo(x, y);

    }, 50); // Update every 50 milliseconds for smoother animation
}

function stopBouncing() {
    clearInterval(intervalId);
    if (bouncingWindow) {
        bouncingWindow.close();
    }
}



function lobotomy() {
    alert("BREAK IT DOWN!!");
    var audio = new Audio('sounds/breakcore.wav');
    audio.loop = true;
audio.play();
lobotomyy();
//let popupWindow = window.open("https://www.geocities.ws/jacobvilleneuve/MyFavorite%20things/download.jpg", "_blank", "width=100,height=100,left=100,top=100,resizable=yes,scrollbars=yes");
//setInterval(() => {
    //const randomX = Math.floor(Math.random() * (window.screen.width - 300));
        //const randomY = Math.floor(Math.random() * (window.screen.height - 200));
        //popupWindow.Moveto(randomX, randomY);
//}, 100);
}



 function lobotomyy(){
    openBouncingWindow();
    while (true){
  window.onclick = function() {
     console.log("Window clicked using addEventListener!");
  }
 }
}

