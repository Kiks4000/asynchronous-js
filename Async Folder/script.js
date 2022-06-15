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

let ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.gap = '15px';
ul.style.display = 'flex';
ul.style.flexDirection = 'column';
ul.style.justifyContent = 'center';
ul.style.alignItems = 'flex-start';
ul.style.padding = '0 50px';
ul.style.fontFamily = 'helvetica';
ul.style.fontSize = '20px';

button.addEventListener('click', function() {
    fetch('./becode.json')
        .then(response => response.json())
        .then(data => {
            main.appendChild(ul);
            data.forEach(rule => {
                let li = document.createElement('li');
                li.textContent = rule;
                ul.appendChild(li);
            }
            )
        }
        )
        .catch(error => console.log(error));
}
)