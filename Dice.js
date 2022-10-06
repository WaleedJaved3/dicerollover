var random1 = Math.floor(Math.random() * 6)+ 1;
var slectimage = "dice"  + random1 + ".png";
var folder = "images/" + slectimage;
document.querySelectorAll("img")[0].setAttribute("src", folder);

var random2 = Math.floor(Math.random() * 6)+ 1;
var slect1 = "dice"  + random2 + ".png";
var folder1 = "Images/" + slect1;
document.querySelectorAll ("img")[1].setAttribute("src", folder1);


if(random1 > random2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
// var random1 = Math.floor(Math.random() *6)+ 1;   //1-6

// var randomdiceimg = "dice" + random1 + ".png";  //dice1.png - dice6.png

// var randomImageSource = "images/" + randomdiceimg ; //images/dice1.png - images/dice6.png

// var Image1 = document.querySelectorAll("img")[0];

// Image1.setAttribute("src", randomImageSource);



// var random2 = Math.floor(Math.random() * 6) + 1;

// var randomimage = "images/dice" + random2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomimage);


// //If player 1 wins
// if (random1 > random2) {
//     document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
//   }
//   else if (random2 > random1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   }
//   else {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }

