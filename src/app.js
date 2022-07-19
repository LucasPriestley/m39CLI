// const yargs = require("yargs");

// console.log(yargs.argv);

// if (yargs.argv.actor) {
//   console.log(`It's ${yargs.argv.actor}`);
// }

// const Movie = require("./utils");
// const yargs = require("yargs");

// const app = (argvArr) => {
//   if (argvArr[2] === "add") {
//     const movieObj = new Movie(argvArr[3], argvArr[4]);
//     movieObj.add();
//   } else if (argvArr[2] === "addMulti") {
//     const movie1 = new Movie(argvArr[3], argvArr[4]);
//     const movie2 = new Movie(argvArr[5], argvArr[6]);
//     movie1.add();
//     movie2.add();
//   }
// };

// app(process.argv);

const yargs = require("yargs");
const Movie = require("./utils");

const app = (yargsObj) => {
  if (yargsObj.add) {
    const newMovie = new Movie(yargsObj.title, yargsObj.actor);
    newMovie.add();
  } else if (yargsObj.addMulti) {
    const movie1 = new Movie(yargsObj.title1, yargsObj.actor1);
    const movie2 = new Movie(yargsObj.title2, yargsObj.actor2);
    movie1.add();
    movie2.add();
  }
};

app(yargs.argv);