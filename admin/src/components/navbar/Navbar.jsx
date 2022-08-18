import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { darkModeToggle } from '../../darkMode/darkModeSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(darkModeToggle())
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item"><LanguageIcon className='icon' /><span>English</span></div>
                    <div className="item"><DarkModeOutlinedIcon className='icon' onClick={handleToggle} /></div>
                    <div className="item"><FullscreenExitOutlinedIcon className='icon' /></div>
                    <div className="item"><NotificationsNoneIcon className='icon' /><span className="counter">1</span></div>
                    <div className="item"><ChatBubbleOutlineIcon className='icon' /><span className="counter">2</span></div>
                    <div className="item"><ListIcon className='icon' /></div>
                    <div className="item">
                        <img className="avatar" src="https://i.postimg.cc/sX0VCCKj/898f9bdfaaad17e37c47859af94ef306-modified-1.png" alt="cat-modified" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar