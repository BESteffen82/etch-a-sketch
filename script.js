const container = document.querySelector('.container');

let num = 50;

for (let x=0; x< (num * num); x++){
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  
  square.addEventListener('mouseenter', e => {
    e.target.style.backgroundColor = 'skyblue';
  });

}

container.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');
container.style.setProperty('grid-template-rows', 'repeat(' + num + ', 1fr)'); 