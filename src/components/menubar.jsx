import { Link } from 'react-router-dom'
import '../styles/utils.css'

export default function MenuBar(){
    return(
        <>
        <div className="header_container">
            <div className='left_empty'></div>
            <div className='title_container'>
                <img className='header_logo' src='./public/hanger.png'/>
            </div>
            <div className='spacer'>
            <Link>
            <button className='dark_btn'>LOGIN</button>
            </Link>
            </div>
            
        </div>
        </>
    )
}