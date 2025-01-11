document.addEventListener('DOMContentLoaded', () => {
  const movieRows = document.querySelectorAll('.movie-row');

  movieRows.forEach((row) => {
    const leftButton = document.createElement('button');
    leftButton.innerText = '←';
    leftButton.classList.add('scroll-button');
    row.appendChild(leftButton);

    const rightButton = document.createElement('button');
    rightButton.innerText = '→';
    rightButton.classList.add('scroll-button');
    row.appendChild(rightButton);

    const posterRow = row.querySelector('.movie-posters');
    
    leftButton.addEventListener('click', () => {
      posterRow.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
      posterRow.scrollBy({ left: 200, behavior: 'smooth' });
    });
  });
});