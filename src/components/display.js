import React from 'react';

export default class Display extends React.Component{
    constructor(){
        super();

        this.toShow= [
              {
              name:'Coverflow',
              highlighted: false,
              show:false,
              id:0
            },
            {
              name:'Music',
              highlighted: false,
              show:false,
              id:1
            },
            {
              name:'Game',
              highlighted: false,
              show:false,
              id:2
            },
            {
              name:'Setting',
              highlighted: false,
              show:false,
              id:3
            },
        ]
    }
    
    render(){
        return(
            this.toShow.map((object, i)=>{
                return <div style={{fontSize:'12px', paddingLeft:'6px',marginTop:'2px',textAlign:'left' , fontWeight:'500', backgroundColor: `${i===this.props.select?'#0695ff':'white'}` }} key={i}>{object.name}</div>;
               })
        )
    }
}