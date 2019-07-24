
const suit = ['batu', 'gunting', 'kertas']

const computerSuit = function(){
    switch(Math.round(Math.random()*2)){
        case 0:
            return suit[0];
        case 1:
            return suit[1];
        case 2:
            return suit[2];
    }
}

const logicSuit = function(playerSuit, computerSuit){
    console.log(`${playerSuit} : ${computerSuit}`);
    //jika pilihan player == pilihan computer, maka 'SERI'
     if(playerSuit === computerSuit){
        return 'SERI';

        //jika pilihan player batu
    } else if(playerSuit === suit[0]){
        //result = jika komputer 'kertas' maka player kalah, jika tidak menang
        return (computerSuit === suit[2]) ?  false : true;

        //jika pilihan player gunting
    } else if(playerSuit === suit[1]){
        //result = jika komputer 'batu' maka player kalah, jika tidak menang
        return (computerSuit === suit[0]) ?  false : true;

        //jika pilihan player kertas
    } else if(playerSuit === suit[2]){
        // result - jika komputer 'gunting' maka player kalah, jika tidak menang
        return (computerSuit === suit[1]) ? false : true;
    }
}



function randomImage(image = ''){
    const computerImage = document.querySelector('.computer');
    const imageSuit = ['batu', 'gunting', 'kertas'];
    const startTime = new Date().getTime();
    let i = 0;

    let intervalRandom = setInterval(function(){
        if(new Date().getTime() - startTime > 1000){
            clearInterval(intervalRandom);
            computerImage.setAttribute('src', 'assets/' + image + '.png');
            return null; 
        } else {
            computerImage.setAttribute('src', 'assets/' + imageSuit[i++] + '.png');
            if(i == imageSuit.length) i = 0;
        }
    }, 100)
    return image;
}

var playerChoice = document.querySelectorAll('.player');

playerChoice.forEach(function(element,number,nodeElement){
    element.addEventListener('click', function(){
       var computerChoice = randomImage(computerSuit());
       console.log(computerChoice);
       console.log(element.getAttribute('alt'));

        for(let i = 0; i < nodeElement.length; i++){
            if(nodeElement[i] == element){
                continue;
            } else {
                nodeElement[i].style.display = 'none';
            }
        }

        element.style.cssText = 'width: 150px; height: 150px';

        setTimeout(function(){
           console.log(
               winCondition(
                logicSuit(element.getAttribute('alt'), computerChoice)
               )
           );
        }, 1000)
    });
});

function winCondition(winner){
    const winnerImage = document.querySelector('.winner');
    const popUpWinner = document.querySelector('.modal-container');
    if(winner.toString() === 'true'){
        winnerImage.setAttribute('src', 'assets/menang.png');
    } else if(winner.toString() === 'false') {
        winnerImage.setAttribute('src', 'assets/kalah.png');
    } else {
        winnerImage.setAttribute('src', 'assets/seri.png');
    }
    popUpWinner.style.display = 'block';
    modalConfirmOrClose();
    return winner;
}

function modalConfirmOrClose(){
    const btnConfirm = document.querySelector('.modal-close');
    const btnClose = document.querySelector('.modal-btn');

    btnConfirm.addEventListener('click', function(){
        modalBox();
        return 0;
    });
    btnClose.addEventListener('click', function(){
        modalBox();
        return 0;
    });
}

function modalBox(){
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'none';

    setTimeout(function(){
        window.location.reload();
    }, 250);
}

