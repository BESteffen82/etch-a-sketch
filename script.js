const container = document.querySelector('.container');

for (x=0; x< 256; x++){
  const square = document.createElement('div');
  square.classList.add('square');
  square.textContent = 'Test';
  container.appendChild(square);  
}

