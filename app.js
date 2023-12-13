



//let SecretNum = 7;

let SecretNum = parseInt(Math.random() * 100 + 1)
let tentativas = 1;
let chute;


while (chute != SecretNum){    
    chute = prompt('Escolha um numero de 1 a 100:');
    if (chute == SecretNum){        
        break
    } else{
        if (chute < SecretNum){
            alert(`O número secreto é maior que ${chute}`)
        } else {
            alert(`O número secreto é menor que ${chute}`)
        }  
        tentativas ++;      
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas':'tentativa';


alert(`Você descobriu o número secreto ${SecretNum} com ${tentativas} ${palavraTentativas}` )

