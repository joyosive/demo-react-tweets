import React from 'react';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likeCount: 0
        }

        this.handleLikeClick = this.handleLikeClick.bind(this)
    }

    handleLikeClick(){
        let updatedLikeCount = this.state.likeCount + 1;
        this.setState({ likeCount: updatedLikeCount });
    }

    render() {
        return <div style={container}>
            <button onClick={this.handleLikeClick}>Like</button>
            <p style={textStyle}>{this.state.likeCount} Likes</p>
        </div>;
    }
}

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const textStyle = {
    marginRight: '5px',
    marginLeft: '5px'
};
export default LikeButton;
