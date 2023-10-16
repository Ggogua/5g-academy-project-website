const whiteIconThree = document.getElementById('whitephotothree');
const whiteImageThree = whiteIconThree.querySelector('img');

whiteIconThree.addEventListener("mouseover", () => {
    whiteIconThree.style.backgroundColor = 'black';
    whiteIconThree.style.padding = '8px';
    whiteIconThree.style.borderRadius = '8px';
    whiteIconThree.style.color = 'white';
    whiteImageThree.src = 'calendar.svg';
});

whiteIconThree.addEventListener("mouseout", () => {
    whiteIconThree.style.backgroundColor = ''; 
    whiteIconThree.style.padding = '';
    whiteIconThree.style.borderRadius = '';
    whiteIconThree.style.color = '';
    whiteImageThree.src = '/conversation-page/photos/Vector.svg';
});


