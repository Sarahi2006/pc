// Optional: You can add JavaScript code to make the message interactive, such as changing the color on click.

const message = document.getElementById('message');

message.addEventListener('click', function() {
    message.style.color = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
