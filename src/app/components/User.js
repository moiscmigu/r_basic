import React from 'react';

let win = 0,
    lose = 0,
    draw = 0;

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            usersWeapon:undefined,
            wins:0,
            draws:0,
            loses:0
        };//end if state
    }//end of constructor

    computerChoice() {
        let bot = Math.floor(Math.random() * 4);
        return bot;
    }

    usersChoice(event) {
        this.setState({
            usersWeapon:event.target.value
        });//end of setState

    }

    handleBattle() {

        let user = Number(this.state.usersWeapon);
        let bot = this.computerChoice();
        console.log(bot, user);

        //logic
        if (bot === user) {
            alert('Its a draw');
            draw++;
            console.log(draw);
            this.setState({
                draws: draw
            });
        } else if (bot > user) {
            alert('You lost!');
            lose++;
            console.log(lose);
            this.setState({
                loses: lose
            });
        } else if(bot < user){
            alert('You Win');
            win++;
            console.log(win);
            this.setState({
                wins: win
            });
        }

    }

    render() {
        return (
            <div className='container'>
                <p>{this.props.name}</p>
                <label >Choose</label>
                <select name='options' onChange={(event) => this.usersChoice(event)}>
                    <option value='1'>Rock</option>
                    <option value='2'>Paper</option>
                    <option value='3'>Sciscors</option>

                </select>
                <button className='btn btn-primary' onClick={this.handleBattle.bind(this)}>Battle!</button>

                <h2>Wins: {this.state.wins} Loses: {this.state.loses} Draws:{this.state.draws}</h2>
            </div>


        );
    };//end of render
}//end of user component
