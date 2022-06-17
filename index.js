const buttonElements = document.querySelectorAll('.button');
console.log(buttonElements);

const btns ={
    uno: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/',
    due: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/',
    tre: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/',
    quattro: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/',
    cinque: 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/',
}

function changeviewer(button) {
    const myIframe = document.getElementById('viewer');
    myIframe.src= 'btns';
}


buttonElements.forEach(function(buttonElement) {
    buttonElement.addEventListener('click', function() {
        const button = buttonElement.id;
        changeviewer(button);
    });
});

