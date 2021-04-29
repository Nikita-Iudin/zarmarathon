const player1 = {
    name: 'Kitana',
    hp: '100',
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    attack: function () {
        console.log(player1.name + ' ' + 'Fight...');
    }

};
player1.attack();

player1.weapon = ['kick'];

const player2 = {
    name: 'Subzero',
    hp: '95',
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    attack: function () {
        console.log(player2.name + ' ' + 'Fight...');
    }

}; 
player2.attack();

player2.weapon = ['kick'];



function createPlayer(player1, person) {
    const $player1 = document.createElement('div');
    const $body = document.querySelector('body');
    $body.appendChild($player1);
    $player1.classList.add('player2');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $player1.appendChild($progressbar);
    $progressbar.classList.add('progressbar');
    //еще два div
    const $life = document.createElement('div');
    $progressbar.appendChild($life);
    $life.classList.add('life');
    $life.style.width = person.hp;
    //name div
    const $name = document.createElement('div');
    $progressbar.appendChild($name);
    $name.classList.add('name');
    $name.innerText = person.name;
    //character
    const $character = document.createElement('div');
    $player1.appendChild($character);
    $character.classList.add('character');
    //img 
    const $img = document.createElement('img');
    $img.src = person.img;
    $character.appendChild($img);

    const arenas = document.querySelector('.arenas');
    arenas.appendChild($player1);

}



createPlayer('player1', player1);
createPlayer('player2', player2);












