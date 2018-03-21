import React from 'react';
import './App.css';
import Rebase from 're-base';
import Base from '../../controllers/Base.js';
 var base= Rebase.createClass(Base.database());

 export default class Contact extends React.Component{
   state={messages:[],error:""}

   componentDidMount(){
     base.syncState(`/Contact`, {
       context: this,
       state: 'messages',
       asArray: true
     });
   }

       handleSubmit(event){
          event.preventDefault();
          let newMessage={nom:this.refs.nom.value,prenom:this.refs.prenom.value,sujet:this.refs.sujet.value,message:this.refs.message.value};
          let messageList=this.state.messages;
          if(newMessage.nom=="" || newMessage.prenom=="" || newMessage.sujet==""|| newMessage.message==""){
            this.etState({error: "Le formulaire n'est pas entièrement complété"});
          }else{
          messageList.push(newMessage);
          this.setState({messages:messageList})
        }
          newMessage={nom:"",prenom:"",sujet:"",message:""}
       }

   render(){
     return(

         <div className='box'>
           <h1> NOUS CONTACTER </h1>
           <form onSubmit={this.handleSubmit.bind(this)}action="" method="post">
             <input className='inputname' ref="nom" type="text" name="name" placeholder="Nom"/><br/>
             <label></label><br/>
             <input className='inputprenom' ref="prenom" type="text" name="prenom" placeholder="Prenom" /><br/><br/>
             <input className='inputsuject' ref="sujet" type="text" name="sujet" placeholder="Sujet"/><br/><br/>
             <textarea className="textarea" ref="message" name="textarea" rows="25" cols="50" placeholder="que désirez vous nous dire" /> <br/><br/>
             <input className='bouton' type="submit" value="Enregistrer"/>
           </form>
         </div>

     );
   }
 }
