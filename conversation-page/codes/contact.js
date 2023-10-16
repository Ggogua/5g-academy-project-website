const whiteIconFour = document.getElementById('whitephotofour');
const whiteImageFour = whiteIconFour.querySelector('img');

whiteIconFour.addEventListener("mouseover", () => {
    whiteIconFour.style.backgroundColor = 'black';
    whiteIconFour.style.padding = '8px';
    whiteIconFour.style.borderRadius = '8px';
    whiteIconFour.style.color = 'white';
    whiteImageFour.src = 'white-logo-2.svg';
});

whiteIconFour.addEventListener("mouseout", () => {
    whiteIconFour.style.backgroundColor = ''; 
    whiteIconFour.style.padding = '';
    whiteIconFour.style.borderRadius = '';
    whiteIconFour.style.color = '';
    whiteImageFour.src = '/conversation-page/photos/Vector-3.svg';
});


