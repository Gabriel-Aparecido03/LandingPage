import React from 'react';

import '../styles/pages/Plans.scss'

import { MdOutlineDone} from 'react-icons/md'
import { AiOutlineClose} from 'react-icons/ai'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function Plans() {
    return(
        <main>
            < Header/>
            <h1>A maior plataforma global para empresas</h1>
            <div className="plans-container">
                
                <div className="individual-container">
                    <div className="first-infos">
                        <h1>Empreendimentos</h1>
                        <p>21 pessoas ou mais</p>
                        <h2>$500</h2>
                    </div>
                    <button>Começar agora</button>
                    <div className="second-infos">
                        <p className="done"><MdOutlineDone/>Acesso a + 5000 cursos</p>
                        <p className="done"><MdOutlineDone/>URL e Logo personalizada</p>
                        <p className="done"><MdOutlineDone/>Criar e hospedar os proprios cursos</p>
                        <p className="done"><MdOutlineDone/>Topicos personalizados</p>
                        <p className="done"><MdOutlineDone/> Criar grupos de usuarios</p>
                        <p className="done"><MdOutlineDone/>Coleção internacional</p>
                        <p className="done"><MdOutlineDone/>Acesso ao aplicativos para celular</p>
                    </div>
                </div>
                
                <div className="individual-container">
                    <div className="first-infos">
                        <h1>Empresas média/grande</h1>
                        <p>21 pessoas ou mais</p>
                        <h2>$500</h2>
                    </div>
                    <button>Começar agora</button>
                    <div className="second-infos">
                        <p className="done"><MdOutlineDone/>Acesso a + 5000 cursos</p>
                        <p className="done"><MdOutlineDone/>URL e Logo personalizada</p>
                        <p className="done"><MdOutlineDone/>Acesso ao aplicativos para celular</p>
                        <p className="close"><AiOutlineClose/>Create and host proprietary courses</p>
                        <p className="close"><AiOutlineClose/>Custom topics</p>
                        <p className="close"><AiOutlineClose/> Create user groups</p>
                        <p className="close"><AiOutlineClose/>International collection</p>
                        <p className="close"><AiOutlineClose/>Add-on Udemy Business Pro</p>
                    </div>
                </div>
            </div>
            < Footer/>
        </main>
        
    )
}