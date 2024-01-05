import React from 'react'
import 
{BsPersonCheck, BsHouseDoor, BsPlayCircle, BsCalendar4, BsBook, 
  BsPuzzle, BsMessenger, BsGraphUpArrow, BsWallet, BsPersonAdd,}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsPersonCheck color='pink'  className='icon_header'/> Skilify Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsHouseDoor className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPlayCircle className='icon'/> My course
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCalendar4 className='icon'/> Calender
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBook className='icon'/> Resource
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPuzzle className='icon'/> Quiz
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMessenger className='icon'/> Message
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGraphUpArrow className='icon'/> My Status
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsWallet className='icon'/> Wallet
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonAdd className='icon'/> My Account
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <img src="src/assets/8.jpeg" alt="image" className='sidebarimg' />
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar