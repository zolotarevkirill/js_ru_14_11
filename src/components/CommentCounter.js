import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {store} from '../store'
import {Map} from 'immutable';

class CommentCounter extends Component {
    static propTypes = {};

    render() {
        const {len} = this.props;

        return (
            <span>
                 {len}
            </span>
        )
    }
}

export default connect((state, props) => {
    const {commentIds} = props;
    console.log('CL-------', commentIds.length)
    return {len: commentIds.length}
})(CommentCounter)