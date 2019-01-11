//Autor: Cristian Penteado

let filaPerguntas = new Queue();
let arrayRespostas = []

function Pergunta(pergunta, resposta) {
    this.pergunta = pergunta
    this.opcoes = new ListaDuplamenteEncadeada()
    this.resposta = resposta
}

let adicionaOpcoes = pergunta => {
    for (let i = 0; i < 5; i++) {
        pergunta.opcoes.adiciona(i, arrayRespostas[i])
    }

    filaPerguntas.enqueue(pergunta)
    limparArray()
}

const limparArray = () => {
    for (i in arrayRespostas) {
        arrayRespostas.shift(i);
    }
}

function Questionario() {

    let pergunta_1 = new Pergunta(
        "1) Quem foi o autor(a) do livro 'Guia de Transfiguração para Iniciantes'?",
        "4"
    )
    arrayRespostas = ["Thaddeus Thurkell", "Mirabella Plunkett", "Falco Aesalon", "Emerico Switch", "Minerva McGonagall"]

    adicionaOpcoes(pergunta_1)

    let pergunta_2 = new Pergunta(
        "2) Qual é a única forma de Transfiguração que excede Conjuração?",
        "4"
    )

    arrayRespostas = ["Transformação", "Destransfiguração", "Desaparecimento", "Transfiguração humana", "Nenhuma Excede"]

    adicionaOpcoes(pergunta_2)

    let pergunta_3 = new Pergunta(
        "3) Qual dos seguintes ingredientes não é utilizado no preparo da Poção Capilar Alisante?",
        "5"
    )
    arrayRespostas = ["Suco de flores de cerejeira", "Casca de carvalho", "Begônia", "Pus de bubotúberas", "Acônito licoctono"]
    adicionaOpcoes(pergunta_3)

    let pergunta_4 = new Pergunta(
        "4) Segundo a Lei de Gamp, qual das seguintes afirmações é verdadeira?",
        "1"
    )
    arrayRespostas = ["O ouro e os objetos preciosos não podem ser criados, somente convocados",
                     "Os animais mágicos podem ser duplicados desde que seu nome venha após a pronúncia do feitiço Geminio",
                     "Os objetos animados podem ser conjurados e criados, mas não podem ser transformados",
                     "As Chaves de Portal não podem ser convocadas",
                     "O dinheiro trouxa não pode ser produzido, conjurado ou multiplicado"]
    adicionaOpcoes(pergunta_4)

    let pergunta_5 = new Pergunta(
        "5) 'Vulnera Sanentur' é um contra-feitiço de:",
        "2"
    )
    arrayRespostas = ["Flipendo", "Sectumsempra", "Abaffiato", "Petrificus Totalus", "Levicorpus"]
    adicionaOpcoes(pergunta_5)

    let pergunta_6 = new Pergunta(
        "6) Qual o nome do demônio aquático japonês que se alimenta de sangue humano?",
        "3"
    )
    arrayRespostas = ["Barrete Vermelho", "Hinkypunks", "Kappa", "Grindylow", "Erumpente"]
    adicionaOpcoes(pergunta_6)

    let pergunta_7 = new Pergunta(
        "7) Foi o primeiro criador do Basilisco que nasceu após inúmeras experiências feitas por ele. Quem é ele?",
        "2"
    )
    arrayRespostas = ["Salazar Sonserina", "Herpo", "Grindewald", "Aquiles", "Adônis"]
    adicionaOpcoes(pergunta_7)

    let pergunta_8 = new Pergunta(
        "8) O que é um Bezoar?",
        "4"
    )
    arrayRespostas = ["Espécie de pimenta, utilizada em poções estimulantes",
                      "Planta herbácea, de cheiro penetrante, mas agradável. Seu sabor é aromático, mas muito amargo",
                      "Serpente da região da Amazônia. Sua pele, seca, é utilizada em diversas poções",
                      "Calcificação encontrada no estômago e intestino dos quadrúpedes, especialmente da cabra. Serve como antídoto de vários venenos",
                      "Formação encontrada entre as raízes da planta guelricho, que cresce nas margens dos lagos"]
    adicionaOpcoes(pergunta_8)

    let pergunta_9 = new Pergunta(
        "9) Tem como função prender a planta em um estado pré-determinado, a fim de aproveitar-se ao máximo de seus frutos. ",
        "3"
    )
    arrayRespostas = ["Pus de Papoula", "Elixir do Crescimento", "Baba de Cérbero", "Muco de Verme-Cego", "Excremento de Dragão"]
    adicionaOpcoes(pergunta_9)

    let pergunta_10 = new Pergunta(
        "10) A única parte utilizável dessa planta é seu interior onde se encontra uma espécie de semente muito dura. Ao abri-la sairá um tipo de musgo laranja.",
        "2"
    )
    arrayRespostas = ["Visgo do Diabo", "Burbolínea", "Hubre", "Mandrágora", "Arrueira"]
    adicionaOpcoes(pergunta_10)

}