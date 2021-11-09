var player, winner = null;
var selectedPlayer = document.getElementById('jogador-selecionado');
var selectedWinner = document.getElementById('vencedor-selecionado');
var squares = document.getElementsByClassName('quadrado');

changePlayer('X');

function chooseSquare(id){
    var square = document.getElementById(id);
    if(square.innerHTML !== '-'){
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    player === 'X' ? player = 'O' : player = 'X';
    
    changePlayer(player);
    checkTheWinner();
}

function changePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkTheWinner(){
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    if(checkSequence(square1, square2, square3)){
        fillSquareColors(square1, square2, square3);
        changeWinner(square1);
        return;
    }

    if(checkSequence(square4, square5, square6)){
        fillSquareColors(square4, square5, square6);
        changeWinner(square4);
        return;
    }

    if(checkSequence(square7, square8, square9)){
        fillSquareColors(square7, square8, square9);
        changeWinner(square7);
        return;
    }

    if(checkSequence(square1, square4, square7)){
        fillSquareColors(square1, square4, square7);
        changeWinner(square1);
        return;
    }

    if(checkSequence(square2, square5, square8)){
        fillSquareColors(square2, square5, square8);
        changeWinner(square2);
        return;
    }

    if(checkSequence(square3, square6, square9)){
        fillSquareColors(square3, square6, square9);
        changeWinner(square3);
        return;
    }

    if(checkSequence(square1, square5, square9)){
        fillSquareColors(square1, square5, square9);
        changeWinner(square1);
        return;
    }

    if(checkSequence(square3, square5, square7)){
        fillSquareColors(square1, square5, square9);
        changeWinner(square1);
    }
}

function changeWinner(square){
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function fillSquareColors(sqr1, sqr2, sqr3){
    sqr1.style.background = '#0F0';
    sqr2.style.background = '#0F0';
    sqr3.style.background = '#0F0';
}

function checkSequence(square1, square2, square3){
    var isEquals = false;

    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        isEquals = true;
    }

    return isEquals;
}