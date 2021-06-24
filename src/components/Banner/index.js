import React from "react";
import Img from "../../assets/imagem.svg";
import "./styles.css";

const Banner = () => {
  return (
    <div className="main">
      <div>
        <h1>Meu Projeto React</h1>
        <p>
          Site feito em React, durante a aula da Reprograma, para treinar React
          Router Dom e Axios.
        </p>
      </div>

      <img src={Img} alt="Ilustração com logo do React" />
    </div>
  );
};

export default Banner;
