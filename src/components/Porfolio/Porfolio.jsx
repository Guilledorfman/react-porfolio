import React, {useState} from 'react';
import PorfolioCard from '../PorfolioCard/PorfolioCard';
import './Porfolio.scss'

const Porfolio = () => {

  const proyects = [
    {
      name: 'Movie2Movie',
      img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1645121194/porfolio/movietomoviemockup_hdnkaw.png',
      subtitle: 'Movie conection game',
      text: 'The idea is to conect one movie to another by linking the people that worked on it and try and find the shortest path between the two movies. There are a bunch of premade challenges like "E.T. (1982) to ALIEN (1979)" or "Dune (1984) to Dune (2021)" but you can also pick two random movies for a harder challenge.',
      tech: ['React', 'React Router', 'REST API', 'SCSS'],
      live: 'https://movie2movie.netlify.app/',
      code: 'https://github.com/Guilledorfman/movieApp-react'
    },
    {
      name: 'TiendaDorfman',
      img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1645052776/porfolio/tiendadorfmanmockup_c3vqxf.png',
      subtitle: 'ReactJS Ecommerce',
      text: "A fully working E-commerce that automatically updates products stock. I used Google Firebase for the backend. It was my First time using React-Bootstrap. It is a 100% SPA (single page aplication) for wich I used React-Router.",
      tech: ['React', 'React Router', 'Firebase', 'React Bootstrap', 'CSS'],
      live: 'https://tienda-dorfman.netlify.app/',
      code: 'https://github.com/Guilledorfman/tienda-dorfman'
    },
    // {
    //   name: 'This website!',
    //   img: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    //   subtitle: 'The site you are on',
    //   text: "My personal porfolio",
    //   tech: ['React', 'Sass'],
    //   live: '',
    //   code: 'https://github.com/Guilledorfman/react-porfolio'
    // },
    {
      name: 'La Bobeda de recetas judías',
      img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1645052759/porfolio/bobedamockup_fmydvn.png',
      subtitle: 'Jewish food recipes',
      text: "I learned a lot from this project. It was my first time using local storage and working with AJAX and JQuery. This Jewish food recipe database was a little nod to my jewish heritage, you can search a recipe by name or by one or more ingredients, so you can type whatever you have available and see what can you make with that.",
      tech: ['HTML', 'CSS', 'Javascript', 'JQuery'],
      live: 'https://guilledorfman.github.io/comidajudia/',
      code: 'https://github.com/Guilledorfman/comidajudia'
    },
    {
      name: 'Dnd Dice Roll',
      img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1645052768/porfolio/rollmockup_s69r0h.png',
      subtitle: 'Dice roller',
      text: "When the pandemic started and physical reunions where no longer possible, my D&D (Dungeons & Dragons) sessions had to be done virtually so I needed a quick way to roll the dices. These were my first steps in Javascript so I'm very happy with the result, it has errors and messy code but I leave it as it is so I can look back and learn from my mistakes. ",
      tech: ['HTML', 'CSS', 'Javascript'],
      live: 'https://guilledorfman.github.io/diceroll/',
      code: 'https://github.com/Guilledorfman/diceroll'
    },
    {
      name: 'Analog/Digital Clock',
      img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1645052759/porfolio/clockmockup_v9dsut.png',
      subtitle: '',
      text: 'A little quick project to practice CSS. Warning: everything is a <div>',
      tech: ['HTML', 'CSS', 'Javascript'],
      live: 'https://guilledorfman.github.io/Analog-digital-clock/',
      code: 'https://github.com/Guilledorfman/Analog-digital-clock'
    }
  ]

const [cajaClass, setCajaClass] = useState('caja')
const [activeClass, setActiveClass] = useState('caja active')
const [ activeNumber, setActiveNumber ] = useState(0)

  const showProyects = proyects.map((e, index)=>{
    return(<PorfolioCard index={index} setActiveNumber={setActiveNumber} cajaClass={index === activeNumber ? activeClass : cajaClass} key={index} name={e.name} img={e.img} subtitle={e.subtitle} text={e.text} tech={e.tech} live={e.live} code={e.code}/>)
  })

  return (
        <div id="" className="porfolio">
          <div id="porfolio"></div>
          <h2>Portfolio</h2>
          <div id="container">
          {showProyects}
          </div>
        </div>
        )
};

export default Porfolio;
