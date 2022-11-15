const modal = document.querySelector('.modal');
const button = document.querySelectorAll('.button');
const closeIcon = document.querySelector('.modal-icon-close');

for ( i = 0; i < button.length; i++ ) {    
    button[i].addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visibility');
    });
};

closeIcon.addEventListener('click', () => {
    console.log('hice click');
    modal.classList.add('hidden');
    modal.classList.remove('visibility');
});