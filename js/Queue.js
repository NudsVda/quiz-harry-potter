function Queue() {

    let items = []
    
    //Empilha
    this.enqueue = element => items.push(element)

    //Desempilha
    this.dequeue = () => items.shift()

    //Retorna o primeiro elemento
    this.front = () => items[0]

    //Retorna o tamanho
    this.size = () => items.length

}