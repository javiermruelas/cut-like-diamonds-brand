const logo = document.getElementById('logo');
const iText = document.getElementById('interactive-text');
const business = 'CUT LIKE DIAMONDS';
const iterable = 16;

function centerInteractiveText() {
    let bodyRect = document.body.getBoundingClientRect();
    let logoRect = logo.getBoundingClientRect();
    let offset = logoRect.top - bodyRect.top;
    // console.log('Element is ' + offset + ' vertical pixels from <body>');
    let logoHeight = logo.offsetHeight;
    // console.log('Element height is ' + logoHeight + ', divided by 2: ' + logoHeight / 2);
    let middleOfLogo = offset + (logoHeight / 2);
    // console.log('top: ', middleOfLogo);
    iText.style.top = `${middleOfLogo}px`;
}

function renderInteractiveText() {
    for (let i = 1; i < iterable; i++) {
        let p = document.createElement('p');
        p.className = "type-writer";
        p.innerHTML = business;
        p.style = `margin-left: ${i * 6}%`;
        iText.appendChild(p);
    }
}

window.addEventListener('resize', function(e) {
    centerInteractiveText();
}, true);

centerInteractiveText();
setTimeout(() => {
    renderInteractiveText();
});
