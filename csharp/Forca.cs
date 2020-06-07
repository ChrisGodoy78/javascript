using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Forca : MonoBehaviour
{
   //array que receberá o conjunto de palavras
   public string [] palavra;

   //indice do array palavra 
   public int indice = 0;
   //palavra que foi sorteada aleatoriamente dentro do array palavra
   public string sorteada;
   //Objeto UI Text apontado na IDE para estas variáveis
   public Text Txt_Palavra;
   public Text Txt_Letra;
   //array que faz testes entre as opções do usuário e a palavra sorteada
   public string [] palavraTeste;
   //controle de tentaivas do usuário
   private int tentativas;

    void Start()
    {
       
        escolhePalavra();
        exibePalavra();

    }


    void escolhePalavra(){

        //atribui os valores à variável
        palavra  = new string[10]{"abelha", "calça", "cabrito", "calça", "ramo", "novilho", "caximbo", "prudente", "lanterna" , "gato"};
        
        //sorteio de um numero aleatório para o índice
        indice = Random.Range(0,10);
        //string que recebe a palavra sorteada
        sorteada = palavra[indice].ToString();

        //array redimensionado para o tamanho da palavra sorteada
        palavraTeste =  new string[sorteada.Length];
        //inicialização da variável
        tentativas = 0;


        for(int i=0; i<sorteada.Length; i++){

            //preenche o arrray com lacunas
            palavraTeste[i] = " __ ";

        }


    }


   public void verificaPalavra(){

        //controle do numero de tentativas conforme o quantitativo de letras  
        if(tentativas < sorteada.Length){  
          
                            //controle de ocorrências da letra inserida pelo usuário
                            int totalOcorrencias = 0;
                            //inicializa a string   
                            string aux = "";
                           
                            //Percorre o array para verificar a existência da letra inserida pelo usuário
                            for(int i=0; i<sorteada.Length; i++){

                                       //se existente a letra na palavra sorteada, armazena a letra e incrementa a tentativa
                                        if(sorteada.Substring(i,1).CompareTo(Txt_Letra.text) == 0 ){

                                            totalOcorrencias++;
                                            palavraTeste[i] = sorteada.Substring(i,1);
                                            aux = aux + " " + palavraTeste[i].ToString() +  " ";
                                        

                                        }

                                

                            }
                                       
                        
                            //Exibe a string montada pelo usuário no componente UI Text com lacunas
                            Txt_Palavra.text =  aux;
                            
                            //retira espaços e lacunas da variável para comparação
                            aux = aux.Replace(" ","");
                            aux = aux.Trim('_');         


                       
                      //compara a palavra montada pelo usuário com a sorteada
                       if(aux.CompareTo(sorteada)==0){

                            Txt_Palavra.text = "Você venceu:  " + aux;
                            
                       }
                       
                      
        }else{


            
               Txt_Palavra.text = "ERROU!! TENTE NOVAMENTE!";
              
            

        }
        
        


    }

    void exibePalavra(){

        int numLetras = sorteada.Length;
        string lacunas = "";
       

            for(int i=0; i<numLetras; i++){

                lacunas = lacunas + " ___ ";    
            
            }

        Txt_Palavra.text = lacunas;
           


    }


}