import React, {useState} from 'react';
import PorfolioCard from '../PorfolioCard/PorfolioCard';
import './Porfolio.scss'

const Porfolio = () => {

  const proyects = [
    {
      name: 'Movie2Movie',
      img: 'https://images.unsplash.com/photo-1587845305438-af995d62a37e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      subtitle: 'Movie conection game',
      text: 'Shortly after I found out about TMDB (a free movie info API) an idea for a game came to me, inspired by the six degrees of Kevin Bacon game wich is a play on the "six degrees of separation" idea. The idea is to conect one movie to another by linking the people that worked on it and try and find the shortest path between the two movies. There are a bunch of premade challenges like "E.T. (1982) to ALIEN (1979)" or "Dune (1984) to Dune (2021)" but you can also pick two random movies for a harder challenge. I think that with enough steps, you can link any movie to any movie.'
    },
    {
      name: 'TiendaDorfman',
      img: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      subtitle: 'ReactJS Ecommerce',
      text: "A fully working E-commerce that automatically updates products stock. I used Google Firebase for the backend. It was my First time using React-Bootstrap, since I'm pretty comfortable with CSS vanilla and SASS I never had the need to learn Bootstrap so it was a good oportunity for that. It is a 100% SPA (single page aplication) for wich I used React-Router."
    },
    {
      name: 'La Bobeda de recetas judías',
      img: 'https://images.unsplash.com/photo-1528732719667-0058acb84755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
      subtitle: 'Jewish food recipes',
      text: "I learned a lot from this project. It was my first time using local storage and working with AJAX and JQuery. This Jewish food recipe database was a little nod to my jewish heritage, you can search a recipe by name or by one or more ingredients, so you can type whatever you have available and see what can you make with that."
    },
    {
      name: 'Dnd Dice Roll',
      img: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      subtitle: 'Dice roller',
      text: "When the pandemic started and physical reunions where no longer possible, my D&D (Dungeons & Dragons) sessions had to be done virtually so I needed a quick way to roll the dices. These were my first steps in Javascript so I'm very happy with the result, it has errors and messy code but I leave it as it is so I can look back and learn from my mistakes. "
    },
    {
      name: 'Analog/Digital Clock',
      img: 'https://images.unsplash.com/photo-1556967789-e6512208cf68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      subtitle: '',
      text: 'A little quick project to practice CSS. Warning: everything is a <div>'
    }
  ]

const [cajaClass, setCajaClass] = useState('caja')
const [activeClass, setActiveClass] = useState('caja active')
const [ activeNumber, setActiveNumber ] = useState(0)

  const showProyects = proyects.map((e, index)=>{
    return(<PorfolioCard index={index} setActiveNumber={setActiveNumber} cajaClass={index === activeNumber ? activeClass : cajaClass} key={index} name={e.name} img={e.img} subtitle={e.subtitle} text={e.text}/>)
  })

  return (
        <div id="" className="porfolio">
          <div id="porfolio"></div>
          <h2>Portfolio</h2>
          <div id="container">
          {showProyects}
            {/* <div className="caja ">
              <h2 className="nombre">Movie2Movie</h2>
            </div>

            <div className="caja ">
              <h2 className="nombre">ReactJs ECommerce</h2>
            </div>

            <div className="caja ">
              <h2 className="nombre">La Bobeda de recetas judías</h2>
            </div>

            <div className="caja active">
              <h2 className="nombre">Dnd Dice Roll</h2>
            </div>

            <div className="caja">
              <h2 className="nombre">Analog/Digital Clock</h2>
            </div> */}

          </div>
        </div>
        )
};

export default Porfolio;
