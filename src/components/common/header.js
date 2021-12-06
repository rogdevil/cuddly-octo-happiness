// import { Divider } from 'antd';
import React from 'react';

import { Menu } from 'antd';

function AppHeader(){
    return(
        <div className="container-fluid">
            <div className='header'>
                <div className='logo'>
                    <i className='fab fa-vimeo-v'></i>
                    <a href='#'>iolence Detection</a>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;