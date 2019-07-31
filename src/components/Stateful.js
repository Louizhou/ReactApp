import React from 'react'
import Hello from './hello';
import axios from './axios'

class Stateful extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            people:[]
        }
    }

    addPerson(o){
        var list = this.state.people
        list.push(o)

        this.setState({
            people:list
        })
    }
}

render(){
    var peole = this.state.people
    console.log(this)
    console.log(this.state.people.length)
    return(
        <div>
            {people.map(function(item){
                 return<Hello name={item.name} language = {item.language}/>
            })}
        </div>
    )
}

componentDidMount(){
 
const axios = require('axios');

axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

    this.addPerson({name:'Jimmy',language:'en'})
    this.addPerson({name:'Amy',language:'zh'})
    this.addPerson({name:'Michael',language:'zh'})
    this.addPerson({name:'Louis',language:'zh'})
    this.addPerson({name:'Steven',language:'zh'})
    this.addPerson({name:'Bill',language:'zh'})
    const o = this
}