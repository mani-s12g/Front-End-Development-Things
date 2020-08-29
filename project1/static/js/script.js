// Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born ?');
    var ageInDays = (2020-birthYear) * 365;
    // Manipulating DOM
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays +' days old !!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    console.log(ageInDays);
}

function reset() {
    document.getElementById('ageInDays').remove();
}


// Challenge 2:Gif Generator

function generateGif() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-gif-gen');
    // https://i.pinimg.com/originals/a6/52/0f/a6520f2597414e2449d43d45e81f336c.gif
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}

// Challenge 3: Rock - paper - scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice:',botChoice);
    
    results = decideWinner(humanChoice, botChoice);  /*[1,0] --> human won, bot lost */
    console.log(results);

    message = finalMessage(results);  /* {'message':'You won !','colour':'green'} */
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},  /*if we pick rock then if bot respondes with scissors then we win so 1 */
        'paper':{'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor':{'paper': 1, 'scissor': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    }else {
        return {'message': 'You Win!', 'color': 'green'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    
    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>"
   
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"  
    // <h1 style='color: green; font-size: 60px; padding: 30px;' > You Won! </h1>
    

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}


//Challenge 4:Change the Color of All Buttons
var all_Buttons = document.getElementsByTagName('button');
// console.log(all_Buttons); 

var copyAllButtons = [];
for (let i = 0; i < all_Buttons.length; i++) {
    copyAllButtons.push(all_Buttons[i].classList[1]);
}
// console.log(copyAllButtons);

function buttonColorChange(buttonThings) {
    // console.log(buttonThings.value);  //buttonThings is nothing but 'this' in function in html
    if (buttonThings.value === 'red') {
        buttonsRed();
    }else if (buttonThings.value === 'green') {
        buttonsGreen();
    }else if (buttonThings.value === 'reset') {
        buttonsColorReset();
    }else if (buttonThings.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_Buttons.length; i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add('btn-danger');
        
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_Buttons.length; i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add('btn-success');
        
    }
}

function buttonsColorReset() {
    for (let i = 0; i < all_Buttons.length; i++) {
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add(copyAllButtons[i]);
        
    }
}

function randomColors() {
    let choices = ['btn-primary','btn-success','btn-danger','btn-warning'];
    
    for (let i = 0; i < all_Buttons.length; i++) {
        let randNumber = Math.floor(Math.random() *4);
        all_Buttons[i].classList.remove(all_Buttons[i].classList[1]);
        all_Buttons[i].classList.add(choices[randNumber]);
    }
    // console.log(randChoice);
}

// randomColors();