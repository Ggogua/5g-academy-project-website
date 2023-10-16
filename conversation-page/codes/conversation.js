const whiteIcon = document.getElementById('whitephoto');
const whiteImage = whiteIcon.querySelector('img');

whiteIcon.addEventListener("mouseover", () => {
    whiteIcon.style.backgroundColor = 'black';
    whiteIcon.style.padding = '8px';
    whiteIcon.style.borderRadius = '8px';
    whiteIcon.style.color = 'white';
    whiteImage.src = 'white-logo.svg';
});

whiteIcon.addEventListener("mouseout", () => {
    whiteIcon.style.backgroundColor = ''; 
    whiteIcon.style.padding = '';
    whiteIcon.style.borderRadius = '';
    whiteIcon.style.color = '';
    whiteImage.src = '/conversation-page/photos/Vector-1.svg';
});


