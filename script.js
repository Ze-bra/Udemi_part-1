"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm_1 = prompt('Один из просмотренных фильмов?', '');
const filmRating_1 = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilm_1] = filmRating_1;

const lastFilm_2 = prompt("Один из просмотренных фильмов?", "");
const filmRating_2 = +prompt("На сколько оцените его?", "");
personalMovieDB.movies[lastFilm_2] = filmRating_2;

console.log(personalMovieDB);

