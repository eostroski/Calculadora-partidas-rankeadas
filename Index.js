let vitorias 
let derrotas 
let resultado = menos(25, 3)

function menos(vitorias, derrotas){
    return vitorias - derrotas
}
    
if (resultado >0 && resultado<11){
    console.log("O Herói tem de saldo de **"+ resultado +"** está no nível de **Ferro**")
}

else if (resultado>=11 && resultado<=20){
    console.log("O Herói tem de saldo de **"+ resultado +"** está no nível de **Bronze**")
}

else if (resultado>=21 && resultado<=50){
    console.log("O Herói tem de saldo de **"+ resultado +"** está no nível de **Prata**")
}

else if (resultado>=51 && resultado<=80){
    console.log("O Herói tem de saldo de **"+ resultado +"** está no nível de **Ouro**")
}

else if (resultado>=81 && resultado<=90){
    console.log("O Herói tem de saldo de **"+ resultado +"** está no nível de **Diamante**")
}

else if (resultado>=91 && resultado<=100){
    console.log("O Herói tem de saldo de **"+ resultado +"** está no nível de **Lendário**")
}

else if (resultado>100){
    console.log("O Herói tem de saldo de **"+ resultado +"** está no nível de **Imortal**")
}

else if (resultado<=0){
    console.log("O Herói tem de saldo de **"+ resultado +"** e não pode ser rankeado")
}