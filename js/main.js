function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar() {
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

// function soma(n1, n2){
//     return n1 + n2;
// }

// var validar = 0;

// function validaIdade(idade){
//     if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }    
//     return validar;
// }

// var idade = prompt("Qual sua idade");
// validaIdade(idade)
// console.log(validaIdade(idade));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }    

// alert(setReplace("Vai Japão", "Japão", "Brasil"));   substitui um nome pelo outro

//alert(soma(5, 10));



//var d = new Date();  imprime a data atual
//alert(d.getMonth()+1);  imprime o número do mês mas tem que colocar +1 pq conta do 0
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());

/*
var count = 0;
for(count=0, count <= 5; count++){  
    alert(count);
}                     imprime do 0 ao 5
*/

/*
var count = 0;
while(count <= 5){      imprime do 0 ao 5
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade =prompt("Qual sua idade");
if (idade >= 18){
alert("maior de idade")
}else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//console.log(lista[1]);     imprime só a pêra
//lista.push("uva");         inserir uva na lista 
//lista.pop();               tira um elemento
//console.log(lista.length);    ver o tamanho da lista
//console.log(lista.reverse());   imprime ao contrário
//console.log(lista[0]);         imprime o primeiro elemento
//console.log(lista.toString());  imprime como uma string
//console.log(lista.toString()[0]);  imprime a primeira letra do elemento
//console.log(lista.join(" | "));  coloca uma separação para os elementos


//var nome = "Tais Itoo";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"))