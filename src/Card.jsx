import React from 'react';
function Card(props){
    console.log(props);
      return(
    
    
    <div className="cards">
    <div className="card">
      <img src={props.imgsrc} alt="thumbnail" className="card__img" />
      <div className="card__info">
        <span className="card__cateogry">{props.title}</span>
      <h3 className ="card__Title"> {props.sname}</h3>
        <a href={props.link} target="blank">
          <br></br>
          <button>Watch Now </button>
          </a>
          </div>
          </div>
          </div>
    
    );
    }
    export default Card;