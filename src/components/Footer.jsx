import React from 'react'

import '../styles/components/Footer.scss'
import logo from '../assets/images/logo.png'

export function Footer() {
    return (
        <footer>
            <img src={logo} alt="imagem represetando a logo da Smart Business" />
            <p>© 2021 Smart Business, Inc.</p>
        </footer>
    )
}