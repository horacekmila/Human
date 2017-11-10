import React, { Component } from 'react'
import Profile from './profilePicture'
export default class HumanAtributs extends Component {
    render() {
        return (
            <div className="Osoba-box col-xs-12">
               <div className="col-xs-4"> <Profile/></div>
               <div className="col-xs-8"> Jméno: {this.props.name} <br/> Přímení: {this.props.lastname} <br/> Věk: {this.props.age} <br/> Rasa: {this.props.type}</div>
            </div>
        )
    }
}
HumanAtributs.defaultProps = {
    name: 'Adam',
    type:"Černý",
    lastname:"Černý",
    age:"17"
  } 