

function createGame(num=10){
for (let x=0; x < (num * num); x++){
  const container = document.querySelector('.container');
  const square = document.createElement('div');
  square.classList.add('square');
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num} , 1fr)`;
  container.appendChild(square);
  
  const black = document.querySelector('.black');
  black.addEventListener('click', function() {
    square.addEventListener('mouseenter', e => {
      e.target.style.backgroundColor = 'black'
    })
  });
    
  const rainbow = document.querySelector('.rainbow');
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  rainbow.addEventListener('click', function() {
    square.addEventListener('mouseenter', e => {
    e.target.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')' 
    })
  }); 
    
  const clear = document.querySelector('.clear');
  clear.addEventListener('click', function() {
    square.style.backgroundColor = 'white'
  });

};
}

function clearGame() {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

}


let gridSlider = document.getElementById('gridRange');
let output = document.getElementById('size');
gridSlider.oninput = function () {
  output.innerHTML = `${this.value} X ${this.value}`;
  clearGame();
  createGame(num = this.value);
}










