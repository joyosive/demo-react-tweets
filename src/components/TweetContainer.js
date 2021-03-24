import React, { Component } from "react"
import Comment from './Comment';
import PropTypes from 'prop-types';

class TweetContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commentsArray: [],
            inputValue:""
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    render() {
        return <div >
            <h1>{this.props.status}</h1>
            <form style={formContainer} onSubmit={this.handleFormSubmit}>
                <input type='text'
                       value={this.state.inputValue}
                       onChange={this.handleTextChange}
                />
                <input type="submit" value="Post"/>
            </form>

            <div>{this.getCommentsSection()}</div>
        </div>;
    }

    handleFormSubmit(event){
        event.preventDefault()
        if (this.state.inputValue !== ""){
            this.setState({ commentsArray: [...this.state.commentsArray, this.state.inputValue] });
            this.setState({inputValue:""})
        }else {
            alert("Please enter post value!")
        }
    }

    handleTextChange(event){
        this.setState({inputValue:event.target.value})
    }

    getCommentsSection(){

        return this.state.commentsArray.map(item => (
            <Comment commentText={item}/>
        ))
    }

}

const formContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

TweetContainer.propTypes = {
    status: PropTypes.string
}

export default TweetContainer;
