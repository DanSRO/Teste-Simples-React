import React from "react";
import estilos from './estilos.module.scss';
import logoImg from "../../assets/images/saturno.png";
export const Navbar:React.FC = ()=>{
    
        return (
            <header>
                <nav id={estilos.navbar}>
                <div className={estilos.navBrand}>
                    <img src={logoImg} alt=""/>
                    <h1>Space Flight News</h1>
                </div>
                
                <ul className={estilos.navList}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Trending</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">About us</a></li>
                </ul>
                </nav>           
            </header>
        );        
}