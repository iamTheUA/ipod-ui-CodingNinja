let PUBLIC_URL = process.env.PUBLIC_URL;
export default function Game(){

    return(
        <div className='game' style={{textAlign:'center',height:'100%', width:'100%',fontFamily:'cursive', backgroundImage:'url('+PUBLIC_URL +'/game.png)',backgroundSize: '100% 100%'}}>
            
        </div>
    )
}