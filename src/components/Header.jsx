import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import '../styles/components/Header.scss'

export function Header() {
    return(
        <header className="header">
            <Link to="/"><img src={logo} alt="imagem de logo na cabeçalho" /></Link>
            <ul className="write-field">
                <li className="headers-components">O que é o Smart Businees</li>
                <li className="headers-components">Recursos</li>
                <li className="headers-components">Cursos disponíveis</li>
                <Link to="/planos" style={{textDecoration:'none',color:'#000'}}><li className="headers-components">Planos</li></Link>
            </ul>
        </header>
    )
}