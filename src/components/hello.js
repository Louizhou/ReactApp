import React from 'react'


const Hello = function (props){
    console.log(props)
    const name = props.name
    const lang = props.lang
    const prefer = props.prefer
    let hello = ''
    let greeting =''

    if(lang=== 'en'){
        hello = 'Hello' 
    }else if (lang==='zh'){
        hello = '你好'
    }

    if(prefer==='steam'){
        greeting = 'enjoy the summer sale?'
    }else if(prefer==='uplay'){
greeting = 'how`s the potato servers?'
    }

    return (
        <div>{hello},{name},{greeting}</div>

    )
}

export default Hello