/* Calculo de aposentadoria */
const nome = 'Jaqueline'
const sexo = 'F' //M OU F
const idade = 25 //sua idade
const contribuição = 6 //digite o tempo que você tem de contribuição para previdência

const soma = (idade + contribuição)

if (sexo == 'M' && contribuição >= 35 && (idade + contribuição) >= 95) {
    console.log(`Parabéns ${nome}! você já soma ${soma} e por isso já pode se aposentar`)
}
else {
    if (sexo == 'M') {
        console.log(`você ainda não pode se aposentar, ${nome} mas não desanime, só faltam ${(95-soma)/2} anos de contribuição para você se aposentar`)
    }
    else {
        if (sexo == 'F' && contribuição >= 30 && contribuição >= 85) {
            console.log(`Parabéns ${nome}! você já soma ${soma} e por isso já pode se aposentar`)
        }
        else {
            console.log(`Você ainda não pode se aposentar, ${nome}, mas não desanime, só faltam ${(85 - soma)/2} anos de contribuição para você se aposentar`)
        }
    }

}







