function Stack() {

    let items = []

    //adiciona ao final da pilha
    this.push = element => items.push(element)

    // remove o último elemento
    this.pop = () => items.pop()
    
    //devolve o topo
    this.peek = () => items[items.length - 1]

    //retorna o tamanho
    this.size = () =>items.length

}