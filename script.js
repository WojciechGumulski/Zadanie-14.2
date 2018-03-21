var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'lion.jpg'
  },
  {
  	id: 3,
  	title: 'Piąty element',
  	desc: 'film science-fiction Luca Bessona',
  	img: '5th-element.jpg'
  },
  {
  	id: 4,
  	title: 'Rok diabła',
  	desc: '"Rok diabła" został wybrany Najlepszym Czeskim Filmem 2002 roku',
  	img: 'rok.jpg'
  },
  {
  	id: 5,
  	title: 'Poranek kojota',
  	desc: 'Młody niespełniony rysownik komiksów, zakochuje się w młodej i ślicznej piosenkarce Noemi',
  	img: 'kojot.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));