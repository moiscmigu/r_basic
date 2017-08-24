import React from 'react';
import {render} from 'react-dom';
import {Header} from './components/Header';
import {Home} from './components/Home';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink:"Hello"
        };//end of state
    }


    onGreet() {
        alert('hello');
    }//end of onGreet function

    onChangeLinkName(newName) {
        console.log('this is the new name', newName)
        this.setState({
            homeLink:newName
        });//end os setState
    }//end of changeLinkName

    render() {

        return (
            <div className='container'>

                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <Home
                            name={"max"}
                            initialAge={27}
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                        />

                    </div>
                </div>

            </div>


        )//end of return
    }//end of render
}//end of App Class

render(<App/>, document.getElementById('app'));
