import React from 'react';


export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age:props.initialAge,
            status:0,
            homeLink:props.initialLinkName
        };//end of this.state
        setTimeout(() => {
            this.setState({
                status:1
            });
        },3000);//end of setTimeout
    }//end of constructor function


    onMakeOlder() {
        //allows to change state and the DOM Rerenders if state is changed
        this.setState({
            age:this.state.age + 3
        });//end of setState
    }//end of make older


    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }//end of onChangeName



    render() {
        return (
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>{this.state.status}</p>
                <hr/>
                <button className='btn btn-primary' onClick={() => this.onMakeOlder()}>Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className='btn btn-primary'>Greet</button>
                <hr/>
                <input type='text' value={this.props.changeLink}/>
            </div>

        );
    };//end of render
}

//HELPS JAVASCRIPT
Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    greet: React.PropTypes.func,
};//props
