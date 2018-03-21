import React from 'react';
export default class PlayButton extends React.Component{
  render(){
    return(
      <div className="hover">
          <img className="play" src={'img/Polygon.png'}/>
          <p className="playText">trailer</p>
      </div>
    );
  }
}
