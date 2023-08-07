import { Header } from 'antd/es/layout/layout'
import React,{useState} from 'react'
import'./header.css'
import { FullscreenOutlined,BellFilled,UserOutlined, BellOutlined,SettingFilled, FullscreenExitOutlined } from '@ant-design/icons'
import { Badge ,Avatar} from 'antd'
 function HRHeader() {
    const [isFullScreen, setIsFullScreen] = useState(false);

  // Function to toggle full-screen mode
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Request full-screen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // For Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // For Internet Explorer
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full-screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // For Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // For Chrome, Safari, and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // For Internet Explorer
        document.msExitFullscreen();
      }
    }

    // Update the full-screen state
    setIsFullScreen(!isFullScreen);
  };
  return (
    <>
   <header className='header' style={{position:"-webkit-sticky"}}>
  {!isFullScreen? <FullscreenOutlined color='white' style={{color:'white',cursor:'pointer'}} onClick={toggleFullScreen} />:<FullscreenExitOutlined onClick={toggleFullScreen}  style={{color:'white'}} />}
  <Badge dot size='small'><BellOutlined color='white' style={{color:'white',cursor:'pointer'}}  /></Badge> 
  <Avatar size="small" style={{cursor:'pointer'}}icon={<UserOutlined />}  src='https://xsgames.co/randomusers/avatar.php?g=female'/>
  <SettingFilled  style={{color:'white',marginRight:"3%",cursor:'pointer'}} />

    
   </header>
      
    </>
  )
}

export default HRHeader