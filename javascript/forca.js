/* 

FORCA JAVASCRIPT - RODAR NO BROWSER

Algoritmo simples em JavaScript ES6
que simula o jogo de forca. O objetivo
é descobrir as letras que compõe a palavra
escolhida aleatóriamente pelo código em uma
array. 

Objetivo: Testar o GIT quanto a implementações
de versões, compatilhamento de código e estudos.

by Cristiano Godoy
Nick: ChrisGodoy78
souzaegodoy@gmail.com

Data: 03/06/2020
*/

//Declaração de variáveis

let lacunas = ""        //representa a estrutura da palavra atraves de underscore
let op=0                //controla a duração do loop while
let guardaLetras = []   //recebe os acertos e lacunas vazias
let erros = 0           // controla a possibilidade de existencia de uma letra na palavra
let totalErros = 0      //controla o total de erros ao final de todas as tentativas

//armazenar um conjunto de palavras  em um array
const palavras = ['gato','toalha', 'armario', 'cama', 'bicicleta', 'banheiro', 'carro', 'escola', 'borrifador', 'cabelo']

//sortear uma palavra do array
let sorteio = palavras[Math.ceil(Math.random()* 11)]

//armazenar a quantidade de letras da palavra escolhida
let totalLetras = sorteio.length



            //Apresentar uma dica com a quantidade de letras em forma numérica
            document.write("\nDICA: Total de letras -> " + totalLetras)

                    //preenche a  string lacunas tantas vezes quanto o numero de 
                    //letras da palavra sorteada
                    for(i=0; i<totalLetras; i++){

                      lacunas = lacunas + " ____ "

                    }//final do for

                           //exib a string lacunas preenchida
                           document.write("\n<br>" + lacunas)
                           
                           
            





//Loop que realizara a entrada de dados do teclado com a letra digitada pelo usuário
for (a=1; a<=totalLetras; a++){

            //Atribui à variável local a letra digitada
            let letraUser = window.prompt("Palavra com "+ totalLetras +" letras! Digite uma letra: ")

              //exibe a letra escolhida              
              document.write("\n<br>Letra escolhida: " + letraUser)

                    //reseta as variáveis em cada passo do laço externo
                    lacunas = ""
                    erros = 0

                            //percorre todas as letras da palavra sorteada verificando sua existência
                            //e adicionando no array guardaLetras em sua devida posição
                            for (i=0; i<totalLetras; i++){
                                                
                                
                                
                                if(sorteio[i] === letraUser){
                                    
                                    //se encontra a ocorrência da letra guarda na respectiva posição
                                    //e exibe uma janela de dialogo do tipo alert parabenizando
                                    guardaLetras[i] = "_" + letraUser + "_"
                                     alert("Parabens! Voce acertou: " + guardaLetras)

                                }else{

                                    //se não encontrar a ocorrencia da letra, armazena no array
                                    //guardaLetras o underscore da lacuna na referida posição
                                    if(guardaLetras[i]){
                                            
                                            
                                            guardaLetras[i] = guardaLetras[i]
                                    }else{


                                            guardaLetras[i] = "___"

                                    }       
                                   
                                        //controla a inexistencia de ocorrência das letras
                                        erros++

                                                //verifica se há inexistência da ocorrencia da letra escolhida
                                                //na quantidade de letras da palavra sorteada, caso sejam iguais
                                                //contabiliza 1 erro
                                                if(erros == totalLetras){
                                                
                                                    totalErros++
                                                
                                                }
                        

                                }

                            }//final do for

          
        
    
    }//final do for externo
    



     //verifica se houveram erros
     if(totalErros == 0){

        //caso o usuario tenha acertado todas as letras exibe uma mensagem de parabens
        //com a palavra encontrada
       // alert("Parabéns!!! Você venceu!!! Palavra: " + guardaLetras)
        document.getElementById('ganhou').style.display='block'

     }else{   
        
       // alert("Infelizmente você não acertou!!! Tente novamente!")
        
        document.getElementById('perdeu').style.display='block'
        //exibe a palavra construida pelo usuário
        document.write("\n<br>Acertos: " + guardaLetras)
        //exibe o total de erros
        document.write("\n<br>Total de erros " + totalErros  )
        //exibe a imagem do boneco enforcado
        document.getElementById('imagem').style.display='block'
       
     }
     

     function mudaOpacidade(){

       

     }
     /*
     objetivos a alcançar:

     [ ] criar uma validacao para nao digitar a mesma letra
     [ ] implementar css e hml com a imagem da forca e o boneco conforme os erros
     [ ] implementar o javascript com elementos DOM para o uso de botões e input text no lugar de prompt
     [ ] implementar sons de erros e acertos

     */
       