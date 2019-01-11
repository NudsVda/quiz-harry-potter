//Autor: Cristian Penteado
function ListaDuplamenteEncadeada() {


    function Celula(elemento) {
        this.elemento = elemento;
        this.anterior = null;
        this.proximo = null;
    }

    let primeira = Object.create(Celula);
    let ultima = Object.create(Celula);
    let totalElementos = 0;


    function posicaoOcupada(posicao) {
        return posicao >= 0 && posicao < totalElementos;
    }

    function pegaCelula(posicao) {

        if (posicao > totalElementos) {

            console.log("A posição não pode ser inserida ");


        } else {
            atual = primeira;
            for (i = 0; i < posicao; i++) {
                atual = atual.proximo;
            }
        }
        return atual;
    }


    this.adiciona = function (posicao, elemento) {

        celula = new Celula(elemento);

        if (posicao == 0) {

            celula.proximo = primeira;
            primeira = celula;

            if (totalElementos == 0) {
                ultima = primeira;
            }

        } else if (posicao == totalElementos) {

            atual = ultima;
            atual.proximo = celula;
            celula.anterior = atual;
            ultima = celula;

        } else {
            let atual = primeira,
                prev,
                aux = 0;

            while (aux++ < posicao) {

                prev = atual;
                atual = atual.proximo;
            }

            celula.proximo = atual;
            prev.proximo = celula;
            atual.anterior = celula;
            celula.anterior = prev;

        }

        totalElementos++;
    }
    //Função retorna o elemento da posição da lista
    this.procura = function (posicao) {
        if (!posicaoOcupada(posicao)) {
            alert("Posição não existe!")
        } else {
            let atual = primeira;
            string = new Array();
            let retorno = "";
            for (i = 0; i < totalElementos; i++) {
                string[i] = atual.elemento;
                atual = atual.proximo;
                if (posicao == i) {
                    retorno = string[i];
                }
            }
            return retorno;

        }
    }

    this.remove = function (posicao) {

        if (!posicaoOcupada(posicao)) {
            console.log('Posição não existe');
        }

        if (posicao == 0) {

            if (!posicaoOcupada(0)) {
                console.log('Não é possível remover')
            }

            primeira = primeira.proximo;
            primeira.anterior = null;
        } else if (posicao == (totalElementos - 1)) {

            penultima = ultima.anterior;
            penultima.proximo = null;
            ultima = penultima;
        } else {
            anterior = pegaCelula(posicao - 1);
            atual = anterior.proximo;
            proxima = atual.proximo;
            anterior.proximo = proxima;
            proxima.anterior = anterior;

        }

        totalElementos--;
    }

}