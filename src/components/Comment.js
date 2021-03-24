import React from 'react';
import LikeButton from "./LikeButton";
import Timer from "./Timer";
import PropTypes from 'prop-types';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div style={commentContainer}>
            <Timer/>
            <strong style={textStyle}>{this.props.commentText}</strong>
            <LikeButton/>
        </div>;
    }
}

const commentContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const textStyle = {
  marginRight: '5px',
  marginLeft: '5px'
};

Comment.propTypes = {
    commentText: PropTypes.string
}
export default Comment;
