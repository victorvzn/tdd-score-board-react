# Football World Cup Score Board - Challenge

<p align="center">
  <a href="#the-challenge">The challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#la-resolución">La resolución</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mejoras">Mejoras</a>
</p>

New Live Football World Cup Score Board that shows matches and scores.

### Features

* Instalable from npm
* Start a game
* Finish game
* Update score
* Get a summary

### Installing

```
npm install tdd-score-board-react
```

### Usage

```
npm create vite@latest
```

```
// app.js

import { ScoreBoard } from 'tdd-score-board-react'

function App() {
  return (
    <ScoreBoard matches={[]} />
  )
}

export default App
```
### Contributing

**Installing and running**

```
npm install

npm run dev

open http://localhost:5173/
```

**How to pass unit tests?**

```
npm test
```

**How to pass integration tests?**

```
npm run dev

npm run test:e2e
```

### The challenge

Provide the implementation of the Football World Cup Score Board as a **simple library**.

**Guidelines**

* Keep it simple
* Focus on quality (use TDD, OO Design, Clean Code and SOLID principles)
* Use an in-memory store solution
* A rest api is not necesary
* Share with a link to a repository
* Add a README.md with notes, assumptions or things you would like to mention.
* The implementation in a frontend language must use a UI framework or a plain javascript.

**Challenge**

1. **Start a game.** When a game starts, it should capture (being initial score 0 – 0): 
    a. Home team
    b. Away team
2. **Finish game.** It will remove a match from the scoreboard.
3. **Update score.** Receiving the pair score; home team score and away team score updates a game score.
4. **Get a summary** of games by total score. Those games with the same total score will be returned ordered by the most recently added to our system.


### La Solución

Disfruté mucho el proceso de desarrollo de este reto ya que fue desafiante, sobretodo al enfocarme en la calidad y mejores prácticas con lo que pude llegar a una solución estable y lista para escalar.

Desde hace algún tiempo aplico buenas prácticas en mis proyectos y dentro de estos los principios SOLID que sin conocerlas antes ya las aplicaba. Por ejemplo en este proyecto he usado buenas prácticas de la siguiente manera:

* **Keep it simple,** este principio lo aplique mientras intentaba resolver el reto ya que TDD nos sugiere que resuelvan cada caso de la forma más simple posible, para posteriormente refactorizar y optimizar en pasos posteriores.
* **Clean Code,** he tratado de nombrar de la mejor forma variables, funciones, componentes, he usado programación funcional, he creado módulos en cada refactor, destructuring de objetos, funciones puras, manejo de errores.
* **Sobre los SOLID Principles:** 
  a. **Single responsibility:** en un refactor separé los componentes en sus propios módulos, separé la lógica del guardado de matches en un custom hooks para mantener el listado en memoria para todos los componentes y realizar operaciones. 
  b. **Open-Closed:** Creé el componente BaseTitle que está abierto a extensión pero no a modificación con el que puedo crear otro componentes como BaseTitleWithIcon que impriman un titulo pero con un icono a su lado.
  c. **Liskov substitution:** Lo he planteado con el componente BaseButton y YellowButton estos componentes son útiles para distintos casos pero si utilizo el componente Yellow en lugar de BaseButton la funcionalidad no se rompe por que usan entre sí el mismo objeto de props.
  d. **Interface segregation:** Este principio lo tomo en cuenta muy a menudo ya que ningún componente en esta applición recibe campos que no van a usar. Ejemplo: el componente `<MatchList />` recibe solo dos parámetros nombrados 'matches' y 'onSaveMatch'.
  e. **Dependency inversion:**  En este caso el callback method 'onEndGame' ya no depende del componente `<ScoreBoardForm />` sino que se pasa como parámetro y su lógica ha sido abstraida para que su componente padre `<ScoreBoard />` lo controle y modifique el estado global de 'matches'.

* **Edges cases:** he añadido nuevos casos que no estaban en los requerimientos original como, validar la data de entrada si los campos son numericos o estan vacíos, además de mostrar mensajes cuando la lista de matches y la lista de resumen no tiene campos, agregué una lista de matches que me permita actualizar cada match.


Para resolver este reto analicé el coding exercise, posteriormente pude estructurar una solución que se ajuste al problema planteado. Este problema lo he dividido en tres partes:

1. Analicé el coding exercise de los que salieron los test cases principales.  [Ver sección Challenge](#the-challenge).

2. Configuré el ambiente de desarrollo, como tuve libertad para elegir mis herramientas de desarrollo, opté por usar lo más reciente pero sobretodo lo que permita agilizar mi trabajo.

    * **vite@latest:** Elegí este bundler por que es muy rápido de instalar, correr y trae un template para react y typescript el cual me pareció un buen comienzo para este proyecto.
    * **React.js library:** Esta librería es la [más usada en el mercado](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/) y permite crear un proyecto desde cero.
    * **Vitest:** es el Test Runner que elegí por su rapidez en ejecutar los tests y por que se integra muy bien con vite.
    * **testing-library/react:** Para complementar a vitest añadí esta herramienta que me permite consultar e interactuar con el dom dentro de mis tests cases.
    * **Typescript:** Usé typescript por que en tiempo de compilación pude prevenir potenciales errores y mostrarlos fácilmente, además me indica en todo momento lo que espera recibir cada función o variable por su tipado estático.
    * **ESLint + Standard:** Estas dos herramientas las uso en conjunto por que me permiten encontrar errores y formatear mi código para seguir un mismo estilo. Pude usar prettier, el cual uso en otros proyectos, pero me gustan las cosas simples y standard me da dos por uno. [Ver extensiones recomendadas](https://github.com/victorvzn/tdd-score-board-react/blob/main/.vscode/extensions.json)
    * **Cypress:** Esta herramiento me ayudó a emular un flujo de usuario especifico sobre el Score Board, permitiendome integrar los tests y saber si la aplicación en general cumple los requerimientos.
    * **Visual Studio Code:** Este es el editor que uso por defecto y con sus extensiones agilizan mi trabajo y lo hacen más productivo. Otros editores que uso en mi día a día son VIM o Sublime text.
    * **Commit messages:** me permití usar la siguiente [especificación](https://www.conventionalcommits.org/en/v1.0.0/#summary) debido a que considero que escribir commit claros y entendibles es importante para que otras personas que participen en este proyecto lo entiendan. En esta guía se describen una serie de reglas sobre como redactar buenos commits y los tipos que use principalmente son: test:, chore: y refactor:.
    


3. Escribí los primeros tests usando TDD

    a. **Test case:** Cada test fue escrito resolviendo un caso a la vez, por ejemplo el primer test fue `it should render ScoreBoard component` para probar que debería renderizarse el componente correctamente.
    b. **Fallo:** Una vez definido el test este quedaba en estado de fallo para que pueda ser resuelto y pase.
    c. **Refactor:** Posterior a resolver cada caso, si el momento lo requería, mejoraba el código teniendo como objetivo que sea legible, fácil de seguir, bien organizado, y sobretodo limpio. Todo esto mientras los test seguian pasando.
    d. Posteriormente reiniciaba este ciclo creando otro test case.


Gracias a esta forma de trabajo conseguí una buena arquitectura del proyecto, diseño de código, así como una UI con una cantidad mínima de CSS. La estructura del proyecto y los componentes se fueron mejorando en cada refactoring, consiguiendo separar los componentes que empezaban a hacerse más grandes. Decidí no usar un framework CSS, ya que aportaban peso y complejidad innecesaria. Cada parte de este proyecto está pensada para brindar la mejor experiencia a nuevos integrantes del proyecto quienes van a mantenerlo en un futuro. 

Esta aplicación ha sido probada en el navegador Chrome.

### Technologies

* Frontend tools: Vitejs, React.js
* Testing: testing-library/react, vitest, jsdom, testing-library/user-event, cypress
* Languages: Javascipt, Typescript
* Linter: ESLint + Standard

### Mejoras

Las mejoras en un proyecto son importantes y este proyecto no es la excepción ya que está hecho como un producto minimo viable y puede seguir creciendo añadiendole lo siguiente: 

* Añadiría Continuous Integration usando *github actions* u otra herramienta de integración, para que publiquemos la librería automáticamente, se ejecuten los tests, linters and formatters automáticamente.
* Añadiría el manejo de multi-idiomas con librerías i18n
* Mejoraría el soporte para multiples navegadores y adapatabilidad a dispositivos móviles.

### Resources

* [State Of JS 2022 - Front-end Frameworks and libraries](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)
* Simplify Testing with React Testing Library, Scottie Crump, Packt Publishing 2021
* Clean Code in Javascript, James Padolsey, Packt Publishing 2020
* [I Code It - Juntao Qiu (Youtube channel)](https://www.youtube.com/@icodeit.juntao)
* [Midudev - Miguel Duran (Youtube Channel)](https://www.youtube.com/@midudev)
* [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)

### Maintainers

* Victor Villazón <victorvillazon.com>
