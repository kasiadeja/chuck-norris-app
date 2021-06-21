let btnOne = document.getElementById("buttonOne");
let btnTwo = document.getElementById("buttonTwo");
let btnThree= document.getElementById("buttonThree");
let btnFour= document.getElementById("buttonFour"); 
let mainContent = document.getElementById("invisible");
let goBackBtn = document.getElementById("back");
let text = document.getElementById("card-text");
let anotherBtn= document.getElementById("anotherBtn");


//getting categories//
let staticUrl = 'https://api.chucknorris.io/jokes/categories'
$.getJSON(staticUrl, function(data){
 
    function myFunction(){
     btnOne.innerHTML = data[0];
     btnTwo.innerHTML = data[1];
     btnThree.innerHTML = data[2];
     btnFour.innerHTML = data[3];
    }
     myFunction();
});

//1st btn//
    let staticUrlButtonOne = 'https://api.chucknorris.io/jokes/random?category=animal';

    $.getJSON(staticUrlButtonOne, function(data) {     
        btnOne.addEventListener('click', () => {
                mainContent.style.display = "flex";
                text.innerHTML = data.value;  
        });
    });  

//2nd btn//    
    let staticUrlButtonTwo = 'https://api.chucknorris.io/jokes/random?category=career';
    $.getJSON(staticUrlButtonTwo, function(data) {     
        btnTwo.addEventListener('click', () => {
            mainContent.style.display = "flex";
            text.innerHTML = data.value;       
        });
    });

//3rd btn//
    let staticUrlButtonThree = 'https://api.chucknorris.io/jokes/random?category=celebrity';
    $.getJSON(staticUrlButtonThree, function(data) {     
        btnThree.addEventListener('click', () => {
            mainContent.style.display = "flex";
            text.innerHTML = data.value;           
        });
    });

//4th btn//    
    let staticUrlButtonFour = 'https://api.chucknorris.io/jokes/random?category=dev';
    $.getJSON(staticUrlButtonFour, function(data) {     
        btnFour.addEventListener('click', () => {
            mainContent.style.display = "flex";
            text.innerHTML = data.value;           
        });
    });

//another joke btn//

anotherBtn.addEventListener('click', () => {

    let staticUrlOne = 'https://api.chucknorris.io/jokes/random?category=animal,career,celebrity,dev';
    $.getJSON(staticUrlOne, function(data) {
        text.innerHTML = data.value;
    });
});

//go back btn

goBackBtn.addEventListener('click', () => {
    mainContent.style.display = "none";
});
