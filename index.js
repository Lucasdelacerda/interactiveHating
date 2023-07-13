const btnRatingNums = document.querySelectorAll(".rating-points")
const btnSend = document.querySelectorAll(".send")
const errorMessager = document.getElementById('message-error')
let optionSelected = null //é colocado nulo para que seja alterado posteriormente po js

function showChosenOption() {

    if (!optionSelected) {
       errorMessager.textContent = "You need to select an option above"
     }
     else{
        errorMessager.textContent =""
        window.location.href = 'thanks.html?optionSelected=' + encodeURI(optionSelected)
     }
}

btnRatingNums.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault()// aqui não deixa o botão atualizar ou direcionar para algum local

        btnRatingNums.forEach((i) => {
            if (i != this) {
                i.classList.remove("select")// aqui faz com que o outro btn volte a cor original ao selecionar outro botão, no caso ele faz com que desctroque a classe no css
            }
        })
        this.classList.toggle("select") //altera a cor de acordo com a classe definida no css
        optionSelected = this.value //pega o valor selecionado e armazena no optionSelected
    })
})
