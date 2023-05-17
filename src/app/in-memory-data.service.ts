import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

/*
  {
    id: 11,
    name: 'Avatar',
    URL: 'https://www.youtube.com/embed/6ziBFh3V1aM',
    img: '../assets/img/avatar.jpg',
  },
  {
    id: 12,
    name: 'Divergent',
    URL: 'https://www.youtube.com/embed/sutgWjz10sM',
    img: '../assets/img/divergent.jpg',
  },
  {
    id: 13,
    name: 'Inception',
    URL: 'https://www.youtube.com/embed/YoHD9XEInc0',
    img: '../assets/img/inception.jpg',
  },
  {
    id: 14,
    name: 'Star Wars',
    URL: '"https://www.youtube.com/embed/FDXmcZ1_D-o',
    img: '../assets/img/starwars.jpg',
  },
  {
    id: 15,
    name: 'Ready Player One',
    URL: 'https://www.youtube.com/embed/cSp1dM2Vj48',
    img: '../assets/img/readyplayerone.jpg',
  },
  {
    id: 16,
    name: 'Matrix',
    URL: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    img: '../assets/img/matrix.jpg',
  },
  {
    id: 17,
    name: 'The Revenant',
    URL: 'https://www.youtube.com/embed/LoebZZ8K5N0',
    img: '../assets/img/TheRevenant.jpg',
  },
  {
    id: 18,
    name: 'American Hustle',
    URL: 'https://www.youtube.com/embed/ST7a1aK_lG0',
    img: '../assets/img/AmericanHustle.jpg',
  },
  {
    id: 19,
    name: 'The Hunger Games',
    URL: 'https://www.youtube.com/embed/mfmrPu43DF8',
    img: '../assets/img/TheHungerGames.jpg',
  },
  {
    id: 20,
    name: 'The Accountant',
    URL: 'https://www.youtube.com/embed/DBfsgcswlYQ',
    img: '../assets/img/TheAccountant.jpg',
  },
*/
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const movies: Movie[] = [
      {
        id: 11,
        name: 'Avatar',
        URL: 'https://www.youtube.com/embed/6ziBFh3V1aM',
        img: '../assets/img/avatar.jpg',
      },
      {
        id: 12,
        name: 'Divergent',
        URL: 'https://www.youtube.com/embed/sutgWjz10sM',
        img: '../assets/img/Divergent.jpg',
      },
      {
        id: 13,
        name: 'Inception',
        URL: 'https://www.youtube.com/embed/YoHD9XEInc0',
        img: '../assets/img/Inception.jpg',
      },
      {
        id: 14,
        name: 'Star Wars',
        URL: 'https://www.youtube.com/embed/FDXmcZ1_D-o',
        img: '../assets/img/StarWars.jpg',
      },
      {
        id: 15,
        name: 'Ready Player One',
        URL: 'https://www.youtube.com/embed/cSp1dM2Vj48',
        img: '../assets/img/ReadyPlayerOne.jpg',
      },
      {
        id: 16,
        name: 'Matrix',
        URL: 'https://www.youtube.com/embed/vKQi3bBA1y8',
        img: '../assets/img/Matrix.jpg',
      },
      {
        id: 17,
        name: 'The Revenant',
        URL: 'https://www.youtube.com/embed/LoebZZ8K5N0',
        img: '../assets/img/TheRevenant.jpg',
      },
      {
        id: 18,
        name: 'American Hustle',
        URL: 'https://www.youtube.com/embed/ST7a1aK_lG0',
        img: '../assets/img/AmericanHustle.jpg',
      },
      {
        id: 19,
        name: 'The Hunger Games',
        URL: 'https://www.youtube.com/embed/mfmrPu43DF8',
        img: '../assets/img/TheHungerGames.jpg',
      },
      {
        id: 20,
        name: 'The Accountant',
        URL: 'https://www.youtube.com/embed/DBfsgcswlYQ',
        img: '../assets/img/TheAccountant.jpg',
      },
      {
        id: 21,
        name: 'Avatar 2',
        URL: 'https://www.youtube.com/embed/6ziBFh3V1aM',
        img: '../assets/img/avatar.jpg',
      },
      {
        id: 22,
        name: 'Divergent',
        URL: 'https://www.youtube.com/embed/sutgWjz10sM',
        img: '../assets/img/Divergent.jpg',
      },
      {
        id: 23,
        name: 'Inception',
        URL: 'https://www.youtube.com/embed/YoHD9XEInc0',
        img: '../assets/img/Inception.jpg',
      },
      {
        id: 24,
        name: 'Star Wars',
        URL: 'https://www.youtube.com/embed/FDXmcZ1_D-o',
        img: '../assets/img/StarWars.jpg',
      },
      {
        id: 25,
        name: 'Ready Player One',
        URL: 'https://www.youtube.com/embed/cSp1dM2Vj48',
        img: '../assets/img/ReadyPlayerOne.jpg',
      },
      {
        id: 26,
        name: 'Matrix',
        URL: 'https://www.youtube.com/embed/vKQi3bBA1y8',
        img: '../assets/img/Matrix.jpg',
      },
      {
        id: 27,
        name: 'The Revenant',
        URL: 'https://www.youtube.com/embed/LoebZZ8K5N0',
        img: '../assets/img/TheRevenant.jpg',
      },
      {
        id: 28,
        name: 'American Hustle',
        URL: 'https://www.youtube.com/embed/ST7a1aK_lG0', 
        img: '../assets/img/AmericanHustle.jpg',
      },
      {
        id: 29,
        name: 'The Hunger Games',
        URL: 'https://www.youtube.com/embed/mfmrPu43DF8',
        img: '../assets/img/TheHungerGames.jpg',
      },
      {
        id: 30,
        name: 'The Accountant',
        URL: 'https://www.youtube.com/embed/DBfsgcswlYQ',
        img: '../assets/img/TheAccountant.jpg',
      }
    ];
    return { movies };
  }
  // Overrides the genId method to ensure that a movie always has an id.
  // If the movie array is empty,
  // the method below returns the initial number (11).
  // if the movie array is not empty, the method below returns the highest
  // movie id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0
      ? Math.max(...movies.map((movie) => movie.id)) + 1
      : 11;
  }
}
