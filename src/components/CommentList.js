import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'

class CommentList extends Component {
    static propTypes = {
        commentIds: PropTypes.array.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps() {
        //console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, articleId, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <h3 onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</h3>
    }

    getBody() {
        const { comments, articleId, isOpen } = this.props

        console.log(articleId);


        const commentForm = <NewCommentForm articleId = {articleId}/>
        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => ({

    comments: props.commentIds.map(id => state.comments.get(id))
   
    
}))(toggleOpen(CommentList))