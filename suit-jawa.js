
function suitJawa(playerDecided){
    var bentukTangan = ['batu', 'gunting', 'kertas'];

    var computerRandom = Math.round(Math.random()*2);
    var computerDecide = '';
    //this.playerDecided = playerDecided;

    switch(computerRandom){
        case 0:
            computerDecide = bentukTangan[0];
            break; 
        case 1:
            computerDecide = bentukTangan[1];
            break; 
        case 2:
            computerDecide = bentukTangan[2];
            break; 
    }

    var hasil = '';

        //jika pilihan player == pilihan computer, maka 'SERI'
    if(playerDecided === computerDecide){
        hasil = 'SERI'

        //jika pilihan player batu
    } else if(playerDecided === bentukTangan[0]){
        //hasil = jika komputer 'kertas' maka player kalah, jika tidak menang
        hasil = (computerDecide === bentukTangan[2]) ? 'KALAH' : 'MENANG';

        //jika pilihan player gunting
    } else if(playerDecided === bentukTangan[1]){
        //hasil = jika komputer 'batu' maka player kalah, jika tidak menang
        hasil = (computerDecide === bentukTangan[0]) ? 'KALAH' : 'MENANG';

        //jika pilihan player kertas
    } else if(playerDecided === bentukTangan[2]){
        // hasil - jika komputer 'gunting' maka player kalah, jika tidak menang
        hasil = (computerDecide === bentukTangan[1]) ? 'KALAH' : 'MENANG';
    }

    return {
        player: playerDecided,
        computer: computerDecide,
        result: hasil
    };
}

var suit = new suitJawa(prompt('Pilih : [Batu, Gunting, Kertas]' != ''));

alert(`
    Computer : [${suit.computer}]
    Player : [${suit.player}]
    -------------------------
              HASIL
    -------------------------
       PLAYER : ${suit.result}
`);