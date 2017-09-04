function exercicio05(){
    var vetorGeral = [6542,1235,3215,6251,5,3215,3225,4583,2151,2356,1325,9965,1230,4458,6352];
    var numMaior, numMenor;

    numMenor = Math.min.apply(null, vetorGeral);
    numMaior = Math.max.apply(null, vetorGeral);

    console.log("Numeros do vetor:");
    for (var key in vetorGeral) {
        console.log(" | " + vetorGeral + " | ");
    }
    console.log("Menor numero do Vetor: " + numMenor);
    console.log("Maior numero do Vetor: " + numMaior);

}

function exercicio04(numDivisivel, numIntervalo){
    for(var index = 1; index <= numIntervalo; index++){
        if (index % numDivisivel == 0) {
            console.log(index);
        }
    }
}

function exercicio03(numero){
    console.log("Percorrendo por While: \n");
    var contador = 1;
    while(contador <= numero){
        console.log(contador);
        contador++;
    }

    console.log("Percorrendo por do...While: \n");
    contador = 1;
    do{
        console.log(contador);
        contador++
    }while(contador <= numero);

    console.log("Percorrendo por For: \n");
    for(var index = 1; index <= numero; index++){
        console.log(index);
    }
}

function exercicio02(notaAv1, notaAv2){
    var notaAv1 = parseFloat(notaAv1);
    var notaAv2 = parseFloat(notaAv2);
    var media = (notaAv1 + notaAv2) / 2;
    var fazAv3 = false;

    if(notaAv1 >= 4.0 && notaAv2 >= 4.0){
        fazAv3 = (media <= 6.0) ? true : false;
    }
    
    console.log(fazAv3);
}

function exercicio01(numero1, numero2){
    var numero1 = parseFloat(numero1);
    var numero2 = parseFloat(numero2);

    var media = (numero1 + numero2) / 2;

    console.log("Media dos numeros informados: " + media);
}

function exercicio00(nome){
    alert("Olá, " + nome + "!");
}


console.log("Exercicio - 01");
exercicio01(2,5);
//
console.log("\nExercicio - 02");
exercicio02(4.75,4.49);
//
console.log("\nExercicio - 03");
exercicio03(10);
//
console.log("\nExercicio - 04");
exercicio04(7,50);
//
console.log("\nExercicio - 05");
exercicio05();
