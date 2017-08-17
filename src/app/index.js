import React from 'react';
import {render} from 'react-dom';

import {Header} from './Components/Header';
import {Home} from './Components/Home';


class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Header/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Home/>
                    </div>
                </div>
            </div>
        );//end of return
    }
}


render(<App/>, document.getElementById('app'));
