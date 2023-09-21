import close from '../assets/close.png';
import friend from '../assets/friend.jpeg'
import love from '../assets/love.avif'
import affection from '../assets/affection.jpg'
import marriage from '../assets/marriage.jpg'
import enemy from '../assets/enemy.png'
import sister from '../assets/sister.png'


export default function HomeDialog({ relation,  handleClose}) {

  let srcImg 
  if (relation === "nanbanukku koila kattu"){
    srcImg = friend
  } else if (relation === "Idhu lovvu dhan"){
    srcImg = love
  } else if (relation === "just affection dhan bro"){
    srcImg = affection
  } else if (relation === "mandapatha book pannunga ji"){
    srcImg = marriage
  } else if (relation === "set eh agathu"){
    srcImg = enemy
  } else if (relation === "adhu un Thangachi leh"){
    srcImg = sister
  }

 


  return (
    <div>
     
      <div className='flex justify-end'>
        <img onClick={handleClose} className='h-4' src={close} alt='close icon'></img>
      </div>
      <div className=" flex flex-col justify-center items-center gap-5 bg-white h-full w-full ">
          <img  className='h-48 rounded-3xl' src={srcImg} alt='meme'></img>
          <p>{relation}</p>
      </div>  
    </div>
  )
}
