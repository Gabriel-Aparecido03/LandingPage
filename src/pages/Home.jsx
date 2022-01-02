import React from 'react'

import '../styles/pages/Home.scss'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { MdDone } from 'react-icons/md'

import PrincipalWoman from '../assets/images/principal-woman.jpg'

import SpaceX from '../assets/images/SpaceX.png'
import Puma from '../assets/images/Puma.png'
import Apple from '../assets/images/Apple.png'
import Audi from '../assets/images/Audi.png'
import Nestle from '../assets/images/Nestle.png'
import Nvidia from '../assets/images/Nvidia.png'

import PersonExample from '../assets/images/person-example.jpg'

import TechSkills from '../assets/images/tech-skils.jpg'
import BusinessSkills from '../assets/images/businees-skilss.jpg'
import Leadership from '../assets/images/leadership.jpg'

import Organization from '../assets/images/organization.jpg'
import Improve from '../assets/images/improve-yrslf.png'
import WorkTeam from '../assets/images/work-with-team.png'

export function Home() {
    return(
        <main>
            < Header/>
            <div className="content">
                
                <div className="intro-concepts">
                    <div className="informations-box">
                        <h1 className="intro">Com as habilidades certas<br/><span>tudo é possível</span></h1>
                        <p>Dê ao seu time as ferramentas necessárias para eles passarem de nível</p>
                        <button>Bora Começar</button>
                    </div>
                    <div className="image-box">
                        <img src={PrincipalWoman} alt="imagem da mulher trabalhando"/>
                    </div>
                </div>

                <div className="ad-write">
                    <p>Smart Business é responsável pelo crescimento de mais de 5.000+ empresas envolta do Mundo</p>
                </div>

                <div className="businesses-boxes">
                        <img src={Audi} alt="imagem representando a Audi" />
                        <img src={Apple} alt="imagem representando a Apple" />
                        <img src={Nestle} alt="imagem representando a Nestle" />
                        <img src={Nvidia} alt="imagem representando a Nvidia" />
                        <img src={SpaceX} alt="imagem representando a SpaceX" />
                        <img src={Puma} alt="imagem representando a Puma" />
                </div>
                

                <div className="motivation-container">
                    <h1>Cresça as pessoas de suas empresas e também sua empresa</h1>
                    <p>Smart Business ajuda você a frente das outras empresas </p>
                </div>

                <div className="promotion-container">
                    <div className="ad-course-container-left">
                        <div className="images-field">
                            <img src={Improve} alt="imagem representando o homem feliz" />
                        </div>
                        <div className="write-field">
                            <h1> Melhore seus desempenhos</h1>
                            <p>< MdDone/> Treine para ser mais rápido e organizado</p>
                            <p>< MdDone/> Aprenda usar cada vex mais a tecnologia aseu favor</p>
                            <p>< MdDone/> Aprenda a ter criticas comercias</p>
                        </div>
                    </div>

                    <div className="ad-course-container-right">
                        <div className="write-field">
                            <h1>Melhore a comunição da sua equipe</h1>
                            <p>< MdDone/>Equipe mais unida</p>
                            <p>< MdDone/>Melhora na tomada de decisões</p>
                            <p>< MdDone/>Delegação de tarefas mais eficaz</p>
                        </div>
                        <div className="images-field">
                            <img src={Organization} alt="imagem representando o homems conversando" />
                        </div>
                    </div>

                    <div className="ad-course-container-left">
                        <div className="write-field">
                            <div className="images-field">
                            <img src={WorkTeam} alt="imagem representando o homems se ajudando" />
                        </div>
                        <h1>Aprenda a melhorar a sintonia com o seu time</h1>
                        <p>< MdDone/>Um problema, diversas soluções</p>
                        <p>< MdDone/>Um grupo unido jamais será vencido</p>
                        <p>< MdDone/>Um melhor ambiente de trabalho</p>
                        </div>
                    </div>
                </div>

                <div className="example-container">
                    <div className="image-field">
                        <img src={PersonExample} alt="pessoa indinca a empresa" />
                    </div>
                    <div className="write-container">
                        <p>"O desenvolvimento dos funcionários e o investimento em nossa força de trabalho são as principais prioridades da Inventada LTDA. Precisávamos de uma solução de aprendizado que permitisse que nossos mais de 4.000 funcionários acessassem habilidades do mundo real e escolhemos o Smart Business em vez de outras soluções de aprendizado por causa de seus instrutores globais especializados, seleção de cursos relevantes e qualidade do conteúdo do curso."</p>
                    </div>
                </div>
                <div className="write-container">
                    <h1>Adquira agora mais de 15,000 horas em cursos</h1>
                </div>

                <div className="final-ad-container">
                    
                    <div className="courses-images">
                            <img src={TechSkills} alt="pessoa representando habilidades digitais" />
                            <img src={Leadership}alt="pessoas representando liderança" />
                            <img src={BusinessSkills} alt="pessoas representando união" />
                    </div>
                </div>
                <div className="button-container">
                    <button>Explore nossos cursos</button>
                </div>
            </div>
            < Footer/>
        </main>
    )
}