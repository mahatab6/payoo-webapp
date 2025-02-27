document.getElementById("latest-pay").style.display = "none";


document.getElementById("transactions").addEventListener("click",function(){
    handleToggle("latest-pay","block");
    handleToggle("section-cash","none");
    handleToggle("add-money","none");
})

document.getElementById("add-money-box").addEventListener("click",function(){
    handleToggle("add-money","block");
    handleToggle("section-cash","none");
    handleToggle("latest-pay","none");
})

document.getElementById("cash-out-box").addEventListener("click",function(){
    handleToggle("section-cash","block");
    handleToggle("add-money","none");
    handleToggle("latest-pay","none");
})

function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}