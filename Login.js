document.addEventListener('DOMContentLoaded', function () {
    const numSnowflakes = 100; // Adjust the number of snowflakes as needed
    const container = document.querySelector('.background');
  
    for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
    }
  
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.top = `${Math.random() * 100}%`;
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`; // Adjust duration as needed
        container.appendChild(snowflake);
    }
  });

function gotopage(){
    let displayerror = document.getElementById('Error');
    let usernameinfo = document.getElementById('username').value;
    let passwordinfo = document.getElementById('password').value;
    if(usernameinfo === "shashank" && passwordinfo === 'dreamer@@'){
        console.log('Clicked')
        window.location.href = "index.html";
        displayerror.style.display = 'none';
    }
    else if(usernameinfo.trim() === '' || passwordinfo.trim() === '' || passwordinfo === "Enter the Password"){
        console.log('Clicked')
        displayerror.style.display = 'none';
    }
    else{
        console.log('Clicked')
        displayerror.style.display = 'block';
    }
}
function showpassword(){
    let passwordinfo = document.getElementById('password');
    if(passwordinfo.type === 'password'){
        passwordinfo.type = 'text';
    }
    else{
        passwordinfo.type = 'password';
    }
}