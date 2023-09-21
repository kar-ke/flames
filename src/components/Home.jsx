import { useState } from "react"
import HomeDialog from "../dialogs/homeDialog"


const defaultParams = {
  name1 : "",
  name2 : ""
}

const Home = () => {

  const [formdata, setFormdata] = useState(defaultParams)
  const [ relation, setRelation ] = useState()
  const [open, setOpen] = useState(false)


  const flameCount = (array_1, array_2) => {

    const totalCount = array_1.length + array_2.length
    let count = 0

    for (let i = 0; i < array_1.length; i++) {

      const char = array_1[i]
      
      if (array_2.indexOf(char) !== -1) {
        count += 1
      }

    }
    const flameCount = totalCount - count*2

    return flameCount
  } 

  const getRelationshipValue = (arr , n ) => {
    let indexToRemove = 0;
  
    while (arr.length > 1) {
      // Calculate the index to remove
      indexToRemove = (indexToRemove + n - 1) % arr.length;
  
      // Remove the element at the calculated index
      arr.splice(indexToRemove, 1);
    }
  
    return arr[0];
  }

  const getFlamesResult = () => {

    let name1 = formdata.name1.toLowerCase().replace(/\s/g, '');
    let name2 = formdata.name2.toLowerCase().replace(/\s/g, '');

    const array_1 = name1.split('')
    const array_2 =  name2.split('')

    let count = 0
    if (array_1.length > array_2.length){
      count = flameCount(array_1, array_2)
    } else if (array_2.length > array_1.length){
      count = flameCount(array_2, array_1)
    } 


    const characters = [
    "nanbanukku koila kattu",
     "Idhu lovvu dhan", 
     "just affection dhan bro", 
     "mandapatha book pannunga ji", 
     "set eh agathu", 
     "adhu un Thangachi leh"];
    const result = getRelationshipValue(characters, count);
    setRelation(result)
  }
  

  const handleChange = (e ) => {
    const {name, value} = e.target
    setFormdata({...formdata, [name]: value})
    }


  const handleSubmit = (e ) => {
    e.preventDefault()
    getFlamesResult()
    setOpen(true)
    setFormdata(defaultParams)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div  className='flex flex-col justify-cente items-center  bg-purple-400 h-screen'>
        <div className='flex justify-center mt-28 ' >
            <div className='flex flex-col bg-white outline outline-1 shadow-2xl outline-gray-400 rounded-3xl p-6 mobile:p-4 mx-4 mobile:w-[20rem] tablet:w-[30rem] tablet:p-6 laptop:w-[27rem] desktop:p-6'>
             { !open ? <form action="https://getform.io/f/f3cbfa12-8098-4b2f-87bd-55e316156cf7" method="POST" className='flex flex-col justify-center items-center gap-6 mobile:gap-4 tablet:gap-6 desktop:gap-6' >
                  <input type='text' value={formdata.name1}  name='name1' placeholder='un peru' onChange={handleChange} className='hover: outline outline-1 outline-gray-400 rounded-3xl w-full mx-4 px-4 py-2' required />
                  <input type='text' value={formdata.name2} name='name2' placeholder='un aal peru' onChange={handleChange} className=' outline outline-1 outline-gray-400 rounded-3xl w-full mx-4 px-4 py-2' required />                
                  <div className="flex flex-row justify-end items-end w-full ">
                    <button onClick={handleSubmit} className='text-l outline outline-gray-400 outline-1 rounded-full font-medium text-[#545454] py-2 w-24 '>uruttu</button>
                  </div>

              </form> : <HomeDialog relation = {relation}  handleClose = {handleClose} /> }
            </div>
        </div> 
        
    </div>
  )
}

export default Home