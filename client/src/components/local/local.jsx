import React from 'react';
import style from './Local.module.css'; 
import mapaa from "../../assets/mapinha.jpg"; // 

const Local = () => {
  return (
    <div className={style.mapa}> 
      <h2>LOCALIZAÇÃO</h2>
      <img src={mapaa} alt='Mapa'/> 
    </div>
  );
}

export default Local;
