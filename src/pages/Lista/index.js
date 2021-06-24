import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import './styles.css'

const Lista = () => {
  const [repositorios, setRepositorios] = useState([]);
  const [listaRepositorios, setListaRepositorios] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/jumara-pimenta/repos")
      .then((resposta) => resposta.json())
      .then((dados) => setRepositorios(dados));
  }, []);

  useEffect(() => {
    setListaRepositorios(
      repositorios.filter((repo) => {
        return repo.name.includes(busca);
      })
    );
  }, [busca, repositorios]);

  console.log(repositorios);

  return (
    <>
      <Menu />

      <input
      type="text"
        placeholder="Busque um repositório"
        onChange={(e) => {
          setBusca(e.target.value);
        }}
      />
      <ul className="repos" >
      {listaRepositorios.map((repo) => (
          <li className="repositorio" key={repo.id}>{repo.name}</li>
      ))}
      </ul>
      <Footer />
    </>
  );
};

export default Lista;
