import React from 'react';
import './App.css';

 export default class Jeux extends React.Component{
  render(){
    return(
      <main className="gameScreen">
          <section className="gameWrapper">
              <h4 className="gameTitle">AU PAYS DES DENTS SAINES</h4>
              <img className="dents" src={'img/lesdents.png'} />
            { /* <div className="hoverit">
                  <img className="play" src={'img/Polygon.png'}/>
                  <p className="playText">trailer</p>
              </div>*/}
              <div className="stores">
                <img className="google" src={'img/google.png'}/>
                <img  className="apple" src={'img/apple.png'}/>
              </div>
          </section>
      </main>
    )
  }
}
