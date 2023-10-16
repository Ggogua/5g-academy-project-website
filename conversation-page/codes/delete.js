const whiteIconFive = document.getElementById('whitephotofive');
const whiteImageFive = whiteIconFive.querySelector('img');

whiteIconFive.addEventListener("mouseover", () => {
    whiteIconFive.style.backgroundColor = 'black';
    whiteIconFive.style.padding = '8px';
    whiteIconFive.style.borderRadius = '8px';
    whiteIconFive.style.color = 'white';
    whiteImageFive.src = 'white-logo-4.svg';
});

whiteIconFive.addEventListener("mouseout", () => {
    whiteIconFive.style.backgroundColor = ''; 
    whiteIconFive.style.padding = '';
    whiteIconFive.style.borderRadius = '';
    whiteIconFive.style.color = '';
    whiteImageFive.src = '/conversation-page/photos/Vector-4.svg';
});


