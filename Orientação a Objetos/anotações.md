<h1>Orientação a Objetos</h1>

*Programas são "objetos" que possuem uma série de propriedades*
<br></br>
<h2>Pilares:</h2>

Tipo           | Definição
-------------- | ---------
Abstração      | Simplificar problemas complexos, isolar determinado aspecto (ex.: carro -> veículo com rodas -> veículo); generalizar.
Herança        | Objeto filho que herda propriedades e métodos do objeto pai.
Encapsulamento | Cada classe tem propriedades e métodos independentes do restante do código. Se determinada propriedade mudar de valor, ela influencia apenas aquela classe.
Polimorfismo   | Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos.

<br></br>
<h2>Protótipos</h2>

*todos os objetos JS herdam propriedades e métodos de um prototype. O objeto Object.prototype está no topo desta cadeia.*
<br></br>

<h2>Classes</h2>

*são syntatic sugar: uma sintaxe feita para facilitar a escrita*

Exemplo:
~~~
class Meal {
    constructor (food) {
        this.food = food
    }

    eat() {
        return 'bla'
    }
}
~~~

*obs.: o que está sempre acontecendo por baixo são objetos*

<p>o JS não possui classes nativamente. Todas são objetos e a herança se dá por protótipos. Anatomia da classe: construtor, getter e setter, métodos</p>
