import React,{useState} from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollServices';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOption, setShowHeaderOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView)
            return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if (screenIndex < 0)
            return;
    }
    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

    const getHeaderOptions = () => {
        return TOTAL_SCREENS.map((screen, i) => (
            <div key={screen.screen_name}
                className={getHeaderOptionsClass(i)}
                onClick={() => switchScreen(i, screen)}>
                <span>
                    {screen.screen_name}
                </span>
          </div>
        ));
    }
const getHeaderOptionsClass = (index) => {
    let classes = 'header-option';
    if (index < TOTAL_SCREENS.length-1) 
        classes += "header-option-separator";

    if (selectedScreen === index)
        classes += "selected-header-option";
    return
}
    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent)
            return
        screenComponent.scrollIntoView({ behavior: 'smooth' });
        setSelectedScreen(index);
        setShowHeaderOptions(true);

    }


    return (
        <div>
            <div
                className='header-option'
                onClick={()=>setShowHeaderOptions(!showHeaderOption)}
            >
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={()=>!showHeaderOption}>
                        <FontAwesomeIcon className='header-hamburger-bar' icon={faBars}/>
                    </div>
                    <div className='header-logo'>
                        <span>Schadrack</span>
                    </div>
                    <div className={(showHeaderOption) ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}