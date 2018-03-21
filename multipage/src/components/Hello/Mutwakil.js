import React, {Component} from 'react';



export default class Mutwakil extends React.Component {
  render(){
    return(

    <div>
        <section id="home" class="home">
            <div class="container">
                <img class="toothy" src='img/toothy.png' alt="toothy" />
                    <h1 class="quote">Bonjour ! Je suis Toothy</h1>
                <p>"Bonjour à toi ! Je suis Toothy, une dent qui aimerai beaucoup te montrer et texpliquer pourquoi tu te retrouve chez le dentiste et ce qui va ce passer"</p>
            <p>Suite</p>


            </div>
        </section>

        {/* <!--Section 2 : OVer mij--> */}
        <section class="about">
            <div class="container">
                <h1 class="about-text">UN SITE  ANIMÉ AVEC DES SITUATIONS DE SOINS DENTAIRES  </h1>
                <input class="button" type="button" value="MON DENTISTE!"/>
            </div>
        </section>




        {/* <!--Section 3: services--> */}


        {/* <!--Section 3: services--> */}
        <section  class="contact section-padding">
        <div class="container-fluid">
            <h1 class="qoute">L’equipe de toothy</h1>

            {/* <!--images gallery--> */}


                    <div class="row">
                        <div class="col-md-12">
                            <div class="container servicetext">
                                <div class="arago" >
                                <img src="https://lh3.googleusercontent.com/HD8xx8ebscmDcKr-5WlKJ3QYT3BGWFp2TY4fYVQGfQ9eJTRfqmJL1bzGR-yZwD7nt9s" alt=""/>
                                <img src="https://lh3.googleusercontent.com/HD8xx8ebscmDcKr-5WlKJ3QYT3BGWFp2TY4fYVQGfQ9eJTRfqmJL1bzGR-yZwD7nt9s" alt=""/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section class="pricing section-padding">
        <div class="container col-md-4">
            <div class="row prijzen">
                <h1 class="pricingtext"> A PROPOS DE TOOTHY</h1>
                <p>  Ce mignon personnage a été creer à l'ocasion d'une présentation OnePage pour un site internet à caractère éducatif</p>
            </div>

        </div>
        </section>
    </div>

    );
  }
}
