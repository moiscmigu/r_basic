import React from 'react';
import ReactDOM from 'react-dom';
import {User} from './components/User';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            gameStatus:true
        };//end if state
    }//end of constructor

    startGame(event) {
        console.log('the game is starting');
        this.setState({
            gameStatus:true
        })
    }

    endGame(event) {
        this.setState({
            gameStatus:false
        })
        console.log('The game is over');
    }

    render() {
        let defaultGame = <div className='container'>
        <h3>Not starting yet</h3>
            <button onClick={(event) => this.startGame(event)}>Start</button>
            <button onClick={(event) => this.endGame(event)}>Quit</button>
        </div>

            if (this.state.gameStatus === true) {
                console.log('returning this');
                    return  (<User name={prompt('What is your name')}/>)
            } else if (this.state.gameStatus === false) {
                return <h3>You quit the game</h3>
            } else {
                console.log('returning this not stating')
                    return (defaultGame)

            }





    }
}//end of App component



ReactDOM.render(<Game/>, document.getElementById('app'))
