import React, {Component} from 'react';
import './index.css';



export default class Mutwakil extends React.Component {
  render(){
    return(

    <div>
        <section id="home" className="home">
            <div className="container">
                <img className="toothy" src='img/toothy.png' alt="toothy" />
                    <h1 className="quote">Bonjour ! Je suis Toothy</h1>
                <p>"Bonjour à toi ! Je suis Toothy, une dent qui aimerai beaucoup te montrer et texpliquer pourquoi tu te retrouve chez le dentiste et ce qui va ce passer"</p>
            <p>Suite</p>


            </div>
        </section>

        {/* <!--Section 2 : OVer mij--> */}
        <section className="about">
            <div className="container">
                <h1 className="about-text">UN SITE  ANIMÉ AVEC DES SITUATIONS DE SOINS DENTAIRES  </h1>
                <input className="button" type="button" value="MON DENTISTE!"/>
            </div>
        </section>




        {/* <!--Section 3: services--> */}


        {/* <!--Section 3: services--> */}
        <section  className="contact section-padding">
        <div className="container-fluid">
            <h1 className="qoute">L’equipe de toothy</h1>

            {/* <!--images gallery--> */}


                    <div className="row">
                        <div className="col-md-12">
                            <div className="container servicetext">
                                <div className="arago" >
                                <img src="https://lh3.googleusercontent.com/HD8xx8ebscmDcKr-5WlKJ3QYT3BGWFp2TY4fYVQGfQ9eJTRfqmJL1bzGR-yZwD7nt9s" alt=""/>
                                <img src="https://lh3.googleusercontent.com/HD8xx8ebscmDcKr-5WlKJ3QYT3BGWFp2TY4fYVQGfQ9eJTRfqmJL1bzGR-yZwD7nt9s" alt=""/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section className="pricing section-padding">
        <div className="container col-md-4">
            <div className="row prijzen">
                <h1 className="pricingtext"> A PROPOS DE TOOTHY</h1>
                <p>  Ce mignon personnage a été creer à l'ocasion d'une présentation OnePage pour un site internet à caractère éducatif</p>
            </div>

        </div>
        </section>
    </div>

    );
  }
}
