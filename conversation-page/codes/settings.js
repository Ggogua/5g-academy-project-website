const whiteIconTwo = document.getElementById('whitephototwo');
const whiteImageTwo = whiteIconTwo.querySelector('img');

whiteIconTwo.addEventListener("mouseover", () => {
    whiteIconTwo.style.backgroundColor = 'black';
    whiteIconTwo.style.padding = '8px';
    whiteIconTwo.style.borderRadius = '8px';
    whiteIconTwo.style.color = 'white';
    whiteImageTwo.src = 'white-logo-1.svg';
});

whiteIconTwo.addEventListener("mouseout", () => {
    whiteIconTwo.style.backgroundColor = ''; 
    whiteIconTwo.style.padding = '';
    whiteIconTwo.style.borderRadius = '';
    whiteIconTwo.style.color = '';
    whiteImageTwo.src = '/conversation-page/photos/Vector-2.svg';
});


