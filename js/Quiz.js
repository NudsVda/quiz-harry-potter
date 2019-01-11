//Autor: Cristian Penteado

const questionario = new Questionario()
let pilhaRecompensas = new Stack()

const galeao = "background: url('img/galeao.png') no-repeat; "
const sicle = "background: url('img/sicle.png') no-repeat; "
const nuque = "background: url('img/nuque.png') no-repeat; "
let recompensas = document.getElementById('lateral')
let aux = 10




//Função que executa ao clicar no botão iniciar
const comecarQuiz = () => {

    let iframeInicial = document.getElementById("comecar")
    let botaoInicial = document.getElementById("btn")
    let informacoes = document.getElementById('informacoes')
    let questionario = document.getElementById('questionario')
    let botaoProximaPergunta = document.getElementById('botao')

    iframeInicial.style.display = 'none'
    botaoInicial.style.display = 'none'
    informacoes.style.display = 'none'
    botaoProximaPergunta.style.display = 'block'
    questionario.style.display = 'block'

};

//Função para carregar a pergunta e as respostas respectivas
const carregarPergunta = () => {
    let boxPerguntas = document.getElementById('box')

    //Verificação se a fila de perguntas está vazia
    if (filaPerguntas.size() === 0) {

        let botaoVerificaRespostas = document.createElement('button')
        boxPerguntas.innerHTML = ""

        botaoVerificaRespostas.innerText = "Clique aqui para verificar suas respostas"
        botaoVerificaRespostas.setAttribute('style', `width:550px; height:400px;
                                            border-radius:10px; margin:auto;
                                            font-size:20pt;display:block; margin-top:100px;`)
        boxPerguntas.setAttribute('style', 'background:#cecece; margin-top:120px; ')

        boxPerguntas.appendChild(botaoVerificaRespostas);

        //Alteração da função onclick do botão
        botaoVerificaRespostas.onclick = function () {

            //Limpa a box e seta seu background
            boxPerguntas.innerHTML = ''
            boxPerguntas.style.backgroundColor = '#ffffff'

            //Cria a imagem, carrega o gif e seta seus atributos e indexa como tag filha de boxPerguntas
            let loader = document.createElement('img')
            loader.setAttribute('src', 'img/gif.gif')
            loader.setAttribute('id', 'loader')
            loader.setAttribute('style', 'margin-top:110px; margin-left:160px;')
            boxPerguntas.appendChild(loader)

            //Executa a imagem por 1000 milisegundos
            setTimeout(function () {

                loader.style.display = 'none'

                //Cria-se uma div e a indexa com o resultado da função calculaResultado()
                var resultado = document.createElement('div')
                resultado.innerHTML = calculaResultado()

                //Seta o background da box
                boxPerguntas.setAttribute('style', 'background:#cecece; padding-bottom:5px; margin-top:140px')

                //Criamos um botão para reiniciar 
                var reiniciar = document.createElement('button')

                //É setado o style do botão e seu texto que será exibido
                reiniciar.setAttribute('style', `margin-top:0px; background: #4a72ca; 
                                        padding:10px; border:1px solid #000;color: #fff; 
                                        width:98%; font-weight:bolder;border-radius:10px;
                                        text-shadow:1px 1px 1px #000;margin-left:1%;`)
                reiniciar.innerHTML = 'Refazer'

                //Na sequência criamos um link que nos redireciona a página inicial
                var linkRestart = document.createElement('a')
                linkRestart.setAttribute('href', 'index.html')
                linkRestart.setAttribute('id', 'restart')

                //Indexamos o botão como tag filha do link
                linkRestart.appendChild(reiniciar)
                boxPerguntas.appendChild(resultado)
                boxPerguntas.appendChild(linkRestart)
                recompensas.style.display = 'none'
            }, 1000)

        }

        //Se não estiver vazia a fila
    } else {
        let opt1 = document.getElementById('opt1')
        let opt2 = document.getElementById('opt2')
        let opt3 = document.getElementById('opt3')
        let opt4 = document.getElementById('opt4')
        let opt5 = document.getElementById('opt5')
        let pergunta = document.getElementById('question')

        //Cria-se uma variável que pega o primeiro elemento da fila
        var primeiroDaFila = filaPerguntas.front();

        //Seta o conteúdo dos elementos 
        //As perguntas e cada uma das opções

        pergunta.textContent = primeiroDaFila.pergunta;
        opt1.textContent = primeiroDaFila.opcoes.procura(0)
        opt2.textContent = primeiroDaFila.opcoes.procura(1)
        opt3.textContent = primeiroDaFila.opcoes.procura(2)
        opt4.textContent = primeiroDaFila.opcoes.procura(3)
        opt5.textContent = primeiroDaFila.opcoes.procura(4)
    }
}

//Função que verifica a resposta correta e dá uma recompensa de acordo com a resposta dada
const verificarResposta = () => {

    //Setamos o  display do aside lateral e o exibimos na tela
    recompensas.style.display = 'block'

    //Cria-se uma variável que pega o 'input/radio' que está selecionado

    var opcaoSelecionada = document.querySelector('input[type=radio]:checked')

    //Pegamos o value do input (que está atribuído em 'index.html')

    var valorSelecionado = opcaoSelecionada.value

    let moeda = document.getElementById('p' + aux--)

    //Se o input selecionado for igual a resposta da pergunta correspondente
    if (valorSelecionado == filaPerguntas.front().resposta) {

        moeda.setAttribute('style', galeao)

        //Adicionando o elemento na pilha
        pilhaRecompensas.push(galeao)

        //Se a resposta não for a correta o jogador irá ganhar aleatóriamente um dos premios inferiores
    } else {
        let moedaAleatoria = Math.random() * 10

        if (moedaAleatoria >= 0 && moedaAleatoria < 5) {
            moeda.setAttribute('style', sicle)

            //Sendo empilhado na pilha
            pilhaRecompensas.push(sicle)
        } else {
            moeda.setAttribute('style', nuque)

            //Empilhando na pilha
            pilhaRecompensas.push(nuque)
        }
    }
    //Ao final de tudo será retirado o primeiro elemento da fila
    filaPerguntas.dequeue()

    //e Carregado a próxima
    carregarPergunta()
}

//Função que conta a quantidade de moedas da pilha e exibe uma tela com o resultado
const calculaResultado = () => {

    let contGaleao = 0
    let contSicle = 0
    let contNuque = 0
    let resultadoFinal = ''

    while (pilhaRecompensas.size() != 0) {

        if (pilhaRecompensas.peek() === galeao) {
            contGaleao++

        } else if (pilhaRecompensas.peek() === sicle) {
            contSicle++

        } else if (pilhaRecompensas.peek() === nuque) {
            contNuque++
        }

        //Ao final de cada verificação retiramos o último elemento
        pilhaRecompensas.pop()
    }

    

    if (contGaleao >= 7) {
        resultadoFinal = '<h2 class="notas">ÓTIMO! </h2><hr/> <p class="seus-premios" >Você conseguiu a maior nota possível! Parabéns você ganhou ' + contGaleao + ' galeão(s), ' + contSicle + ' sicle(s) e ' + contNuque + ' nuque(s).</p> <br/> <img class="imagem-resultado" src="img/otimo.jpg" ><hr/>';
    } else if (contGaleao == 6) {
        resultadoFinal = '<h2 class="notas">EXCEDE EXPECTATIVAS! </h2><hr/> <p class="seus-premios">Você conseguiu uma boa nota! Mas ainda precisa melhorar. Recompensas ' + contGaleao + ' galeão(s), ' + contSicle + ' sicle(s) e ' + contNuque + ' nuque(s).</p> <br/> <img class="imagem-resultado" src="img/excede expectativa.jpg" ><hr/>';
    } else if (contGaleao == 5) {
        resultadoFinal = '<h2 class="notas">ACEITÁVEL!</h2><hr/>  <p class="seus-premios">Você conseguiu a nota mínima de aprovação!  Recompensas ' + contGaleao + ' galeão(s), ' + contSicle + ' sicle(s) e ' + contNuque + ' nuque(s).</p> <br/> <img class="imagem-resultado" src="img/aceitavel.jpg" ><hr/>';
    } else if (contGaleao == 4) {
        resultadoFinal = '<h2 class="notas">PÉSSIMO!</h2><hr/>  <p class="seus-premios">Você não passaria em um N.O.M. com essa nota. Se esforce mais. Recompensas ' + contGaleao + ' galeão(s), ' + contSicle + ' sicle(s) e ' + contNuque + ' nuque(s).</p> <br/> <img class="imagem-resultado" src="img/pessimo.jpg"><hr/>';
    } else if (contGaleao == 3) {
        resultadoFinal = '<h2 class="notas">DEPLORÁVEL!</h2><hr/>  <p class="seus-premios">Você tirou uma nota muito baixa! Precisa estudar muito mais sobre o mundo mágico! Recompensas ' + contGaleao + ' galeão(s), ' + contSicle + ' sicle(s) e ' + contNuque + ' nuque(s).</p> <br/> <img class="imagem-resultado" src="img/deploravel.jpg"><hr/>';
    } else {
        resultadoFinal = '<h2 class="notas">TRASGO!</h2><hr/>  <p class="seus-premios">Você tirou a pior nota possível! Seu conhecimento se assemelha a de um trasgo. Recompensas ' + contGaleao + ' galeão(s), ' + contSicle + ' sicle(s) e ' + contNuque + ' nuque(s).</p> <br/> <img class="imagem-resultado" src="img/trasgo.jpg"><hr/>';
    }

    //Será retornado o resultado final
    return resultadoFinal;

}