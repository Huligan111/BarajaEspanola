
        /*
        Anunciado:
        Crea un tipo de objeto que sirva para representar una Carta. Tendrá dos propiedades:
        palo: un número de 1 a 4 (1 - oros; 2 - espadas; 3 - bastos; 4 - copas).
        valor: un número del 1 al 10 (8 - sota; 9 - caballo; 10 - rey).
        Los objetos de este tipo se construirán indicando el palo y el valor. Si hay fallos en los datos,
        se devuelve un objeto nulo en la creación.
        Las cartas tendrán estos métodos:
        darValor(): recibe un número de palo y un valor y los asigna a la carta. Si recibe datos incorrectos, no hace nada.
        toString(): devuelve (no imprime) un texto que describe la carta (por ejemplo: As de Oros).
        Crea otro tipo de objeto que sirva para representar una Baraja de cartas. Contendrá las siguientes propiedades:
        cartas: array con las 40 cartas de una baraja.
        Al construir la Baraja, se rellenan las cartas en el siguiente orden: por palos y, cada palo, con las cartas del 1 al 10.
        No se podrá acceder directamente al array fuera de la función constructora.
        Una baraja tendrá estos métodos:
        barajar(): baraja las cartas, desordenándolas de forma aleatoria.
        toString(): devuelve un texto con el orden en el que están las cartas dentro de la baraja.
        */
       

        //Función constructora que se encarga a crear cartas
        function Carta() {  
            //Método que recibe los parámetros de palo y valor los comprueba y los asigna 
            this.darValor = function (palo,valor) { 
                if (palo > 0 && palo < 5 && valor > 0 && valor < 11) {
                    this.palo = palo;
                    this.valor = valor;
                    return this.toString();
                }
                return null;
            }

            //Método que devuelve strings con los nombres de las cartas 
            this.toString = function () {
                const palo = ['', 'oros', 'espadas', 'bastos', 'copas'];
                const valor = ['', '1 As', 2, 3, 4, 5, 6, 7, '8 Sota', '9 Caballo', '10 Rey'];
                return valor[this.valor] + " de " + palo[this.palo];
            }

        }


        //Función constructora generar una baraja española de cartas
        function Baraja() {
            const baraja = Array();

            //Método que se encarga a ordenar (desordenar) aleatoriamente el array de baraja
            this.barajar = () => baraja.sort(() => Math.random() - 0.5);

            //Método que recorre el array de baraja y muestra por consola el contenido de la baraja
            this.toString = () => baraja.forEach((valor)=>console.log(valor));

            //Método que crea la baraja con palos entre 1 y 4 y valores entre 1 y 10
            this.generarBaraja = function () {
                for (let i = 1; i <= 4; i++) {
                    for (let j = 1; j <= 10; j++) {
                        //Creamos y insertamos las cartas en la baraja
                        baraja.push(new Carta().darValor(i, j));
                    }
                }
            }

            //Método que dibuja las cartas sobre el body
            this.mostrar = function(){
                //Obtenemos el id del contenedor sobre cual se van a posicionar las cartas
               const cartas = document.getElementById('spa');
                for(const carta of baraja){
                    //En cada vuelta se pinta una carta 
                    cartas.innerHTML += `<div class="col-2 m-1 mt-5">   
                                            <h6 class="bg-light text-center m-1">${carta}</h6>
                                            <img class="border border-2 rounded-3" src="imagenes/${carta}.png"></img>
                                        </div>`;                        
                }
                cartas.innerHTML +='<h1 class="text-center mb-5 mt-5">Fin</h1>';
            }
        }

        //Creamos un objeto y invocamos sus métodos
        const baraja = new Baraja();

        console.warn('Ordenados');
        baraja.generarBaraja();
        baraja.toString();

        baraja.mostrar();//Mostramos las cartas por pantalla ordenadas

        console.warn('Barajados');
        baraja.barajar();
        baraja.toString();

        baraja.mostrar();//Mostramos las cartas por pantalla desordenadas
        

    