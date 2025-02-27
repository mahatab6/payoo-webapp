document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    
    const account = document.getElementById("Account-number").value;
    
    const addedMoney = document.getElementById("added-Money").value;
    const convertAddedMoney = parseFloat(addedMoney);

    const pin = document.getElementById("pin-number").value;
    const convertPin = parseInt(pin);

    const mainMoney = document.getElementById("main-money").innerText;
    const convertMainMoney = parseFloat(mainMoney);
    

    if( account.length === 11){
        if( convertPin === 1234 ){
            const sum = convertMainMoney + convertAddedMoney ;
            document.getElementById('main-money').innerText = sum;

        }
        else{
            console.log("pin vul");
        }
    }

    else{
        console.log("vul");
    }

    
})