import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsUpload}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
        <button className='upload-button'>
      <BsUpload className='upload-icon' />
      <span className='upload-text'>Upload Now</span>
    </button>
    <button className='sicon-button'>
          <BsFillBellFill className='Sicon' />
        </button>
        <button className='sicon-button'>
          <BsFillEnvelopeFill className='Sicon' />
        </button>
        <button className='sicon-button'>
          <BsPersonCircle className='Sicon' />
        </button>
        <button className='text-and-image-button'>
          <span>Ankur</span>
          <img src='src/assets/web_photo.png' alt='Small Image' className='image' />
        </button>
    </div>
    </header>
  )
}

export default Header