const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativa")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas=[
{
    enunciado:"quem foi o campeão da euro copa de 2024?",
    alternativas: [
   {
    texto:"Espanha",
    afirmação:"resposta correta",
    pontos:1
    },
    {
        texto:"França",
        afirmação:"resposta incoreta",
        pontos:0
      }
    ]
}, 
{
    enunciado:"Quem foi o campeão da nations league?",
    alternativas: [
   {
    texto:"Portugal",
    afirmação:"resposta correta",
    pontos:1
    },
    {
        texto:"Croçia",
        afirmação:"resposta incoreta",
        pontos:0
      }
    ]
}, 
{
    enunciado:"quem foi o campeão da copa do mundo de 2014?",
    alternativas: [
   {
    texto:"Alemanha",
    afirmação:"resposta correta",
    pontos:1
    },
    {
        texto:"Argentina",
        afirmação:"resposta incoreta",
        pontos:0
      }
    ]
}, 
{
    enunciado:"quem foi o campeão da chanpions league de 2025?",
    alternativas: [
   {
    texto:"Psg",
    afirmação:"resposta correta",
    pontos:1
    },
    {
        texto:"Inter de Milão",
        afirmação:"resposta incoreta",
        pontos:0
      }
    ]
}, 
{
    enunciado:"quem foi o campeão da Libertdores 2024?",
    alternativas: [
   {
    texto:"Botafogo",
    afirmação:"resposta correta",
    pontos:1
    },
    {
        texto:"Atletico Mineiro",
        afirmação:"resposta incoreta",
        pontos:0
         }
       ]
     }, 
 ]

 let atual=0;
 let perguntaAtual;
 let historiaFinal;
 let pontos=0;

 function mostraPergunta(){
  perguntaAtual=perguntas[atual];
  caixaPerguntas.textContent=perguntaAtual.enunciado;
  caixaAlternativas.textContent="";
  mostraAlternativas();
 }

 function mostraAlternativas(){ 
  for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativas);
  }
 }