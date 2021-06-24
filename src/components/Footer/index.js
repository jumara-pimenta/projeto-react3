import React from "react";
import { Link } from "react-router-dom";
import ImgGit from "../../assets/github.svg";
import ImgInsta from "../../assets/instagram.svg";
import ImgIN from "../../assets/linkedin.svg";

import "./styles.css";

const Footer = () => {
  return (
    <>
      <div className="rodape">
        <div>
          <ul className="menuFooter">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/simpsons">
                Simpsons
              </Link>
            </li>
            <li>
              <Link className="link" to="/minhaPagina">
                Minha página
              </Link>
            </li>
          </ul>
        </div>
        <div className="autora">
            <p>
            Jumara Pimenta
            </p>
            Formada em administração, aprendendo programação e aluna da turma 10 de front-end da Reprograma.

        </div>
        <div className="imgFooter">
          <img src={ImgGit} alt="Imagem da logo do GitHub" />
          {/* <Link className="link" to="https://github.com/jumara-pimenta"></Link> */}
          <img src={ImgInsta} alt="Imagem da logo do Instagram" />
          <img src={ImgIN} alt="Imagem da logo do LinkedIN" />
        </div>
      </div>

      <div className="rodape__cc">
        <p> 2021 | Site feito por Jumara Pimenta</p>
      </div>
    </>
  );
};

export default Footer;
