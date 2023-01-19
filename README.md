<p align="center">🟥🟩🟦 ⚽</p>

# Football World Cup Score Board - Challenge

<p align="center">
  <a href="#the-challenge">The challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#the-solution">The Solution</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#improvements">Improvements</a>
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

### The Solution

I really enjoyed the development process of this challenge as it was challenging especially as I focused on quality and best practices with which I was able to arrive at a stable and scalable solution.

For some time now I have applied good practices in my projects and within these the SOLID principles that I already applied without knowing them before. For example, in this project, I have used good practices as follows

* **Keep it simple,** this principle is applied while trying to solve the challenge since TDD suggests that we solve each case in the simplest possible way, to later refactor and optimize in later steps.
* **Clean Code,** I have tried to name variables, functions, and components in the best way, I have used functional programming, I have created modules in each refactor, object destructuring, pure functions, and error handling.
* **About SOLID Principles:** 
  a. **Single responsibility:** In a refactor I separated the components into their modules, and I split the match-saving logic into custom hooks to hold the in-memory listing for all components and perform operations.
  b. **Open-Closed:** I created the component `<BaseTitle />` which is open to extension but not modification with which I can create other components like BaseTitleWithIcon that print a title but with an icon next to it.
  c. **Liskov substitution:** What you raised with the BaseButton and YellowButton components, these components are useful for different cases but if you use the Yellow component instead of BaseButton the functionality is not broken because they use the same props object with each other.
  d. **Interface segregation:** I take this principle into account since no component of this application receives fields that it will not use. Example: The `<MatchList />` component receives only two parameters called 'matches' and 'onSaveMatch'.
  e. **Dependency inversion:**  In this case, the 'onEndGame' callback method no longer depends on the `<ScoreBoardForm />` component but is passed as a parameter and its logic has been abstracted so that its parent component `<ScoreBoard />` controls it and modifies the global state from 'matches'.

* **Edges cases:** I've added new cases that weren't in the original requirements, like validating input data if fields are numeric or empty, as well as displaying messages when the match list and summary list have no fields, added a match list that It allows me to update each match.

To overcome this challenge, I analyzed the coding exercise, and later, I was up to structure a solution that fits the problem posed. I have divided this problem into three parts:

1. I went through the coding exercise that the main test cases came out of. [See the Challenge section](#the-challenge).

2. I configured the development environment, and as I had the freedom to choose my development tools, I decided to use the most recent but above all what allows me to speed up my work.

    * **Vite@latest:** I chose this bundler because it is very fast to install and run; it comes with a template for react and typescript which I thought was a good start for this project.
    * **React.js library:** This library is the [most used on the market](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/) and allows you to create a project from scratch.
    * **Vitest:** it is the Test Runner that I chose for its speed in executing the tests and because it integrates very well with vite.
    * **Testing-library/react:** To complement vitest I added this tool that allows me to consult and interact with the dom within my test cases.
    * **Typescript:** I used typescript because at compile time, I was capable to prevent potential errors, and showing them easily, it also constantly tells me what each function or variable expects to receive due to its static typing.
    * **ESLint + Standard:** I use these two tools together because they allow me to find errors and format my code, to follow the same style. I was able to use prettier, which I use in other projects, but I like things simple and standard gives me a double-sided option. [See recommended extensions](https://github.com/victorvzn/tdd-score-board-react/blob/main/.vscode/extensions.json)
    * **Cypress:** This tool helped me emulate a specific user flow on the Score Board, allowing me to integrate the tests and see if the application in general meets the requirements.
    * **Visual Studio Code:** This is the editor I use by default and with its extensions, it speeds up my work and makes it more productive. Other editors that I use in my day-to-day are VIM or Sublime text.
    * **Commit messages:** I allowed myself to use the following [specification](https://www.conventionalcommits.org/en/v1.0.0/#summary) because I believe that writing clear and understandable commits, is important for other people involved in this project can understand them. This guide describes a series of rules on how to write good commits and the types I mainly use are: test:, chore: and refactor:.

3. I wrote the first tests using TDD:

    a. **Test case:** Each test was written solving one case at a time, for example, the first test was; `it should render ScoreBoard component`, to test that the component should render correctly.
    
    b. **Failure:** Once the test was defined, it was left in a failure state so that it can be resolved and passed.
    
    c. **Refactor:** After solving each case, if the moment required it, it improved the code with the purpose of making it readable, easy to follow, well organized, and above all, clean. All this while the tests continued to passing.
    d. Subsequently, this cycle was restarted by creating another test case.

Thanks to this way of working,  I got a good project architecture, code design, as well as a UI with a minimum amount of CSS. The structure of the project, and the components, were improved in each refactoring; managing to separate the components that were beginning to get bigger. I decided not to use a CSS framework, as it added unnecessary weight and complexity. Each part of this project is designed to provide the best experience to new members of the project who will maintain it in the future.

This app has been tested on the Chrome browser.

### Technologies

* Frontend tools: Vitejs, React.js
* Testing: testing-library/react, vitest, jsdom, testing-library/user-event, cypress
* Languages: Javascipt, Typescript
* Linter: ESLint + Standard

### Improvements

Improvements in a project are important and this project is no exception since it is made as a MVP and can continue to grow by adding the following:

  * I would add Continuous Integration using GitHub actions or another integration tool, so that way we could publish the library automatically, and run the tests, linters, and formatters automatically.
  * I would add multi-language handling with i18n libraries.
  * It would improve support for multiple browsers and adaptability to mobile devices.

### Resources

* [State Of JS 2022 - Front-end Frameworks and libraries](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)
* Simplify Testing with React Testing Library, Scottie Crump, Packt Publishing 2021
* Clean Code in Javascript, James Padolsey, Packt Publishing 2020
* [I Code It - Juntao Qiu (Youtube channel)](https://www.youtube.com/@icodeit.juntao)
* [Midudev - Miguel Duran (Youtube Channel)](https://www.youtube.com/@midudev)

### Maintainers

* Victor Villazón - [victorvillazon.com](https://victorvillazon.com)
