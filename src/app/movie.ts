export class Movie {
  id: number;
  name: string;
  URL: string;
  img: string;

  constructor(id: number, name: string, URL: string, img: string) {
    this.id = id;
    this.name = name;
    this.URL = URL;
    this.img = img;
  }
}