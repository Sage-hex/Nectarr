import React, { useState } from 'react'
import './profile.css'
import Logo from '../../assets/Images/signup-logo.png'
import Button from '../../Components/Button/Button'
import { IoCameraOutline } from "react-icons/io5"
import toast from 'react-hot-toast/headless'


const Profile = ({}) => {
    const [Images, setImages] = useState()
    function submit() {
      toast.success('image have been uploaded successfully🤗')
    }

   

    const image = (e) => {
        const file =  e.target.files[0];
        const Photo = URL.createObjectURL(file)
       setImages(Photo)
    }
  return (
    <div className='Profile'>
        
            <img src={Logo} alt="" className='logo'/>
        

        <div className="profileBox">
          <label htmlFor="e" >
            <div className="circular">
               <img src={Images} alt="" />
                 <input type="file"  hidden  id='e' onChange={image} className='profile-pic'/>    
             </div>
          </label>
            <Button onClick={submit}>UPLOAD</Button>
        </div>
    </div>
  )
}

export default Profile