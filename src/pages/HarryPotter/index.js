import React, { useState, useEffect } from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const HarryPotter = () => {
    const [personagens, setPersonagem] = useState([])
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters')
            .then(resposta => resposta.json())
            .then(dados => setPersonagem(dados))
    }, [])

    useEffect(() => {
        setFiltroPersonagem(
            personagens.filter(personagem => {
                return personagem.name.includes(busca)
            })
        )
    }, [busca, personagens])

    return (
        <>
        <Menu/>

            <input placeholder="Procure um personagem" onChange={e => { setBusca(e.target.value) }} />
            {filtroPersonagem.map(personagem => (
                <div key={personagem.id}>
                    <p>{personagem.name}</p>
                    <p>{personagem.house}</p>
                    <img src={personagem.image} alt={personagem.name} />
                </div>

            ))}
            <Footer />
        </>
    )
}

export default HarryPotter