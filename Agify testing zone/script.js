const body = document.querySelector('body');
const main = document.querySelector('main');

let button = document.createElement('button');
main.appendChild(button);

body.style.height = '100vh';

button.style.border = '1px solid black';
button.style.padding = '10px';
button.style.margin = '10px';
button.style.backgroundColor = 'black';
button.style.color = 'white';
button.style.fontSize = '20px';
button.style.fontWeight = 'bold';
button.textContent = 'Click Me';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.transition = 'ease-in 0.3s';

button.onmouseover = function() {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
}

button.onmouseout = function() {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
}

main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';
main.style.flexDirection = 'column';

button.addEventListener('click', function() {
    const prenom = prompt('What is your name?');
    fetch('https://api.agify.io?name=' + prenom)
        .then(response => response.json())
        .then(data => {
            let result = document.createElement('p');
            result.textContent = data.message;
            main.appendChild(result);
            result.style.display = 'block';
            }
            )
        .catch(error => console.log(error));
        }
        )
        