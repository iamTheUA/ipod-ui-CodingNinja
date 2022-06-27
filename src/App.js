import './App.css';
import React from 'react';
import ZingTouch from 'zingtouch'; 
import Coverflow from './components/Coverflow';
import Screen from './components/display';
import Game from './components/Game';
import Setting from './components/Setting';
import Music from "./components/Music";

let PUBLIC_URL = process.env.PUBLIC_URL;



/*
use Ipod Image's buttom to control the display.
*/

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        page : -1,
        step: 0
    }
    console.log("use Ipod Image's buttom to control the display.")
  }
 
  rotateWheel = () => {

    var containerElement = document.getElementById('controller');
    var parent = document.getElementById('controller');
    var myRegion  = new ZingTouch.Region(containerElement);

    let step = this.state.step;
    myRegion.bind(parent, 'rotate', (event)=>{

      let change = event.detail.distanceFromLast;
      if(change>3){
        step +=1 ;
      }
      else if(change<-3){
        step-=1;
      }
      if( step===4) step=0;
      if(step<0) step=3;
      
      this.setState({ step: step})
    },false)
  }

  select = (event) =>{
    event.stopPropagation();
    this.setState({page:this.state.step})
   
  }

  menuButton = () =>{
    this.setState({page:-1, step:0})
  }
  
  render(){
    
    return (
      <div className="App">
        <img className='background' style={style.background} src={PUBLIC_URL+"ipod.jpg"} alt='ipod' />
        <div className='display' style={style.display}>
            {this.state.page===-1?<div className='menu' style={style.menu}>
              <div className='option' style={{fontSize:'14px', fontWeight:'bold', paddingTop:'7px', paddingBottom:'5px'}}>
                Ipod.js
              </div>
              {this.state.page===-1?<Screen select={this.state.step} ></Screen>:<></>}
            </div>:<></>}
            {this.state.page===0?<Coverflow></Coverflow>:<></>}
            {this.state.page===1?<Music></Music>:<></>}
            {this.state.page===2?<Game></Game>:<></>}
            {this.state.page===3?<Setting></Setting>:<></>}
                
        </div>

        <div id='controller' className='controller' style={style.contoller} onMouseDown={()=>this.rotateWheel()} >
          <div style={ {marginLeft:'40px', height:'40px', width:'40px'}} onClick={this.menuButton}>
          </div>
        </div>
        <div className='select' style={style.select} onMouseDown={this.select}>
        </div>
      </div>
    );
  }
}

const style={
  contoller:{
    height: '125px',
    width: '125px',
    left:'724px',
    top:'289px',
    position: 'absolute',
    borderRadius:'70px',
    backgroundColor:'#ffffff0d'
  },
  select:{
    height: '42px',
    width: '42px',
    position: 'relative',
    left:'765px',
    top:'-383px',
    borderRadius:'70px'
  },
  display:{
    position: 'relative',
    height: '125px',
    width: '168px',
    left: '706px',
    top: '-459px',
    backgroundColor: '#61dafb',
    backgroundImage: 'url('+PUBLIC_URL+'/bg.webp)',
    backgroundSize: '100% 100%'
  },
  menu:{
    width:'50%',
    backgroundColor:"white",
    height: '100%',
    boxShadow: '10px 0 5px -2px rgb(0 0 0 / 14%)'
  },
  background:{
    marginTop: '100px',
    height: '65vh',
    width: 'auto',
    transform: 'rotate(-32deg)',
    position: 'relative'
  }
}

export default App;
