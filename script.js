const container = document.querySelector('.container');

let rows = 16;
let columns = 16;

for (let x=0; x< (rows * columns); x++){
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);  

  square.addEventListener('mouseenter', e => {
      e.target.style.backgroundColor = 'skyblue';
  });

}
