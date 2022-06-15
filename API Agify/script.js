var output = document.getElementById('output')
document.getElementById('btn').addEventListener('click',predictName);

let name = document.getElementById('nameInput');
document.getElementById('nameInput').addEventListener('change',checkName)

// I WANT a function that fetches the data from the API and displays and store it in the output div
function predictName(){
    let name = document.getElementById('nameInput').value;
    fetch('https://api.agify.io?name=' + name)
        .then(response => response.json())
        .then(data => {
            let result = document.createElement('p');
            result.textContent = name + ' i guess your age is ' + data.message;
            output.appendChild(result);
            output.style.display = 'block';
            }
            )
        .catch(error => console.log(error));
}

function checkName(){
    let name = document.getElementById('nameInput').value;
    if(name.length < 3){
        document.getElementById('nameInput').style.borderColor = 'red';
    }
    else{
        document.getElementById('nameInput').style.borderColor = 'green';
    }
}