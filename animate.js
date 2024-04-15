let step = 0;
const red = document.querySelector('#red'),
    green = document.querySelector('#green'),
    screenWidth = window.screen.width;

function animate()
{
    step += 5;
    red.style.left = step + 'px';
    green.style.top = step + 'px';

    if (step < (screenWidth - 80)) {
        requestAnimationFrame(animate);
    }
}

red.addEventListener('click', (e) => {
    requestAnimationFrame(animate);
});

let actions = requestAnimationFrame(animate);
cancelAnimationFrame(actions);