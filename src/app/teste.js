const movies = [
  { name: "O Tigre e o Dragão" },
  { name: "Matrix" },
  { name: "O Senhor dos Anéis" },
  { name: "O Poderoso Chefão" },
  { name: "O Terminal" },
  { name: "Tubarão" },
];

const searchTerm = "O";
const sortedMovies = movies.sort((a, b) => {
  if (a.name.startsWith(searchTerm) && !b.name.startsWith(searchTerm)) {
    return -1;
  } else if (!a.name.startsWith(searchTerm) && b.name.startsWith(searchTerm)) {
    return 1;
  } else {
    return a.name.localeCompare(b.name);
  }
});

console.log(sortedMovies);
