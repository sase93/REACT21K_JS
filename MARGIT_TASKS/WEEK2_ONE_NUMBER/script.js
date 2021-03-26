function check() {
    let numero = Number(document.querySelector("#numero").value);
    
    numero%2===0 ? even.textContent="That number is even." : odd.textContent="That number is odd.";
}