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
import ScoreBoard from 'tdd-score-board-react'

const App = () => {
    return (
        <ScoreBoard  />
    )
}
```

### Contributing - Installing and running

```
npm install

npm run dev

open http://localhost:5173/
```

### Contributing - How to pass unit tests?

```
npm test
```

### Contributing - How to pass integration tests?

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

### Technologies

* Frontend tools: Vitejs, React.js
* Testing: testing-library/react, vitest, jsdom, testing-library/user-event, cypress
* Languages: Javascipt, Typescript
* Linter: ESLint + Standard

### Resources

* [State Of JS 2022 - Front-end Frameworks and libraries](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)
* Simplify Testing with React Testing Library, Scottie Crump, Packt Publishing 2021
* Clean Code in Javascript, James Padolsey, Packt Publishing 2020
* [I Code It - Juntao Qiu (Youtube channel)](https://www.youtube.com/@icodeit.juntao)
* [Midudev - Miguel Duran (Youtube Channel)](https://www.youtube.com/@midudev)

### Maintainers

* Victor Villazón <victorvillazon.com>
