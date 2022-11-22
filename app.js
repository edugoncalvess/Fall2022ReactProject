const cardsContent = [
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    cardAlt: "Rick Sanchez",
    cardTitle: "Rick Sanchez",
    origin: "Origin: Earth (C-137)",
    id: 1
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    cardAlt: "Morty Smith",
    cardTitle: "Morty Smith",
    origin: "Origin: unknown",
    id: 2
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    cardAlt: "Summer Smith",
    cardTitle: "Summer Smith",
    origin: "Origin: Earth (Replacement Dimension)",
    id: 3
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    cardAlt: "Beth Smith",
    cardTitle: "Beth Smith",
    origin: "Origin: Earth (Replacement Dimension)",
    id: 4
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    cardAlt: "Jerry Smith",
    cardTitle: "Jerry Smith",
    origin: "Origin: Earth (Replacement Dimension)",
    id: 5
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    cardAlt: "Abadango Cluster Princess",
    cardTitle: "Abadango Cluster Princess",
    origin: "Origin: Abadango",
    id: 6
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    cardAlt: "Abradolf Lincler",
    cardTitle: "Abradolf Lincler",
    origin: "Origin: Earth (Replacement Dimension)",
    id: 7
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    cardAlt: "Adjudicator Rick",
    cardTitle: "Adjudicator Rick",
    origin: "Origin: unknown",
    id: 8
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    cardAlt: "Agency Director",
    cardTitle: "Agency Director",
    origin: "Origin: Earth (Replacement Dimension)",
    id: 9
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    cardAlt: "Alan Rails",
    cardTitle: "Alan Rails",
    origin: "Origin: unknown",
    id: 10
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    cardAlt: "Albert Einstein",
    cardTitle: "Albert Einstein",
    origin: "Origin: Earth (C-137)",
    id: 11
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    cardAlt: "Alexander",
    cardTitle: "Alexander",
    origin: "Origin: Earth (C-137)",
    id: 2
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
    cardAlt: "Alien Googah",
    cardTitle: "Alien Googah",
    origin: "Origin: unknown",
    id: 13
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    cardAlt: "Alien Morty",
    cardTitle: "Alien Morty",
    origin: "Origin: unknown",
    id: 14
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    cardAlt: "Alien Rick",
    cardTitle: "Alien Rick",
    origin: "Origin: unknown",
    id: 15
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    cardAlt: "Amish Cyborg",
    cardTitle: "Amish Cyborg",
    origin: "Origin: unknown",
    id: 16
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
    cardAlt: "Annie",
    cardTitle: "Annie",
    origin: "Origin: Earth (C-137)",
    id: 17
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    cardAlt: "Antenna Morty",
    cardTitle: "Antenna Morty",
    origin: "Origin: unknown",
    id: 18
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    cardAlt: "Antenna Rick",
    cardTitle: "Antenna Rick",
    origin: "Origin: unknown",
    id: 19
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    cardAlt: "Ants in my Eyes Johnson",
    cardTitle: "Ants in my Eyes Johnson",
    origin: "Origin: unknown",
    id: 20
    }
]

const Header = (props) => {
  return (
    <div>
    <nav class="navbar sticky-top navbar-light bg-dark">
    <h1 class="navbar-brand text-light">Rick and Morty</h1>
      </nav>
    <div>
    <h2>Characters</h2>
    </div>
    </div>
  );
}

const Card = (props) => {
  return (
    <div class="col-3">
    <div class="card">
      <img
        src={props.imgSrc}
        alt={props.cardAlt}
        class="card-img-top"
      />
      <div class="card-body">
        <h3 class="card-title">{props.cardTitle}</h3>
        <p>{props.origin}</p>
      </div>
    </div>
  </div>
  )

};

const App = (props) => {
  return (
    <section id="app">
      <div class="container">
        <Header />

        <div class="row">
        {props.initialCards.map( cardsContent =>
            <Card 
              imgSrc={cardsContent.imgSrc}
              cardAlt={cardsContent.cardAlt}
              cardTitle={cardsContent.cardTitle}
              origin={cardsContent.origin}
          
            />
          )}
        </div>
      </div>
    </section>
  );
}




ReactDOM.render(
    <App  initialCards={cardsContent} />,
    document.getElementById('root')
);