
function generate_table(mul_number){
    let resultDiv = document.getElementById('result');
    if(isNaN(mul_number)){
        resultDiv.innerHTML = "⚠️ Please enter a valid number";
        resultDiv.style.color = "red";
    }
    else{
        
        resultDiv.innerHTML = "";
        for(let i=1;i<10;i++){
        resultDiv.innerHTML += `<div>${mul_number} * ${i} = ${i*mul_number}</div>`;
        resultDiv.style.color="black";
}

    }
    
}
