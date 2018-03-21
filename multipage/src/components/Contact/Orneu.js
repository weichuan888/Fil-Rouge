import React, {Component} from 'react';

class Orneu extends Component {

      handleSubmit(event){
        event.preventDefault();
        console.log(this.refs.name.value + " "+ this.refs.prenom.value+""+this.refs.sujet.value);
      }

  render(){
    return(
      <div>
      <body>
        <div className='box'>
          <h1> NOUS CONTACTER </h1>

          <form action="" method="post">
            <label></label>
            <input className='inputname'ref="name" type="text" name="name" placeholder="Nom"/><br/>
            <label></label><br/>
            <input className='inputprenom'ref="prenom" type="text" name="prenom" placeholder="Prenom" /><br/><br/>
            <input className='inputsuject'ref="sujet" type="text" name="sujet" placeholder="Sujet"/><br/><br/>
            <textarea className="textarea"ref="message" name="textarea" rows="25" cols="50">
              votre message ici ...
            </textarea> <br/><br/>
            <input className='bouton' onClick={(e) => this.handleSubmit(e)} type="submit" value="Enregistrer"/>
          </form>
        </div>
      </body>
    </div>
    );
  }
}
export default Orneu;
