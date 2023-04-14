import React from 'react'
// import coracao from "../../assets/img/heart.svg"
import "./style.css"

const Card = ({data,titulo,link}) => {

  const retornarData = (data) => {
    let date, month, year;

    date = data.getDate();
    month = data.getMonth() + 1;
    year = data.getFullYear();

      date = date
          .toString()
          .padStart(2, '0');

      month = month
          .toString()
          .padStart(2, '0');

    return `${date}/${month}/${year}`;
  }

  return (
    <div className='card'>
        <div className='topo-card'>
            <p>{retornarData(new Date(data))}</p>
            {/* <img src={coracao} alt="coração" loading='lazy' /> */}
        </div>
        <div className='texto-card'>
            <h2><a href={link} target="_blank" rel="noreferrer">{titulo}</a></h2>
            <a href={link} target="_blank" rel="noreferrer">
              <button className='btn-link'>Acessar</button>
            </a>
        </div>
    </div>
  )
}

export default Card