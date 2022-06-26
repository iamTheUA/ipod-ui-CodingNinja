import React from "react";
let PUBLIC_URL = process.env.PUBLIC_URL;

export default class Music extends React.Component{
    
    render(){
        return(
        <div className='music' style={{textAlign:'center',height:'100%', width:'100%',fontFamily:'cursive', backgroundImage:'url('+PUBLIC_URL +'/nowPlaying.png)',backgroundSize: '100% 100%'}}>
            
        </div>)
    }
}