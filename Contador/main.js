document.addEventListener("DOMContentLoaded", function() {
    // seta a contagem inicial
    let count = 0;

    //seleciona o valor e os botões
    const value = document.querySelector("#value");
    const btns = document.querySelectorAll(".btn");

    btns.forEach(function (btn) {
        btn.addEventListener("click", function(e){
            const styles = e.currentTarget.classList;
            if(styles.contains("reduzir")){
                count--;
            }
            else if(styles.contains("aumentar")){
                count++;
            }
            else{
                count = 0
            }
            value.textContent = count;
        })
    });
});
