/*criação de variávels para selecionar elementos*/

function horario(){

var mens = window.document.querySelector('msg')
var turn = window.document.querySelector('turnos')
var data = new Date()
var hora = 9

msg.innerHTML = `${hora} horas. Horário oficial de Brasília e dos óleos`

/*obs: o innerHtml pega o atribudo do query, seletor, ou seja, o 'msg' e não os horários*/ 

if (hora >= 0 && hora < 12){

turnos.src = 'img_horas/manha.png' 
document.body.style.background = '#FBDE91'

} else if (hora >= 12 && hora < 18) {

turnos.src = 'img_horas/tarde.png'
document.body.style.background = '#E4660A'

} else {

turnos.src = 'img_horas/noite.png'
document.body.style.background = '#558EBA'
/*Os comandos acima, mudam as imagens e a cor de fundo das páginas
conforme os horários da variáveis*/ 

}

/*Certifique-se de adicionar o elemento do query selector, ao atributo que será mudado, nesse caso, id 
"turnos"*/

}