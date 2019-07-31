import React from 'react'

const Drinks = function(props){
    console.log(props)

    var age = props.age 

    if (age>=18) {
         return<div>Drink Booze</div>
    } else {
         return <div>Drink Soda</div>
    }

}


export default Drinks