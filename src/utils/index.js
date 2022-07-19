const movieArr = [];

class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    add() {
        movieArr.push(this);
        console.table(movieArr);
    }
}

module.exports = Movie;

