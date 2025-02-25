document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();

    const mobile = document.getElementById('Mobile-Number').value;

    const pin = document.getElementById('pin-number').value;

    const convertPin = parseInt(pin);

    

    if(mobile.length === 11){

        if(convertPin === 1234){
            window.location.href='balance.html';
        }

        else{
            console.log("pin vul")
        }
        
    }

    else{
        console.log("Number thik na")
    }
})