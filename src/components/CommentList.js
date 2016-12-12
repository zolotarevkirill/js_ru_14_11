import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {addComment, callApiForComments} from '../AC/comment'


class CommentList extends Component {
    static propTypes = {
        commentIds: PropTypes.array,
        //from connect
        comments: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {}

    componentDidMount() {

    }


    componentWillReceiveProps(nextProps) {
        const {isOpen, comments, callApiForComments} = this.props
        console.log(this.props.articleId);
        if (nextProps.isOpen && !isOpen && !comments.length) {
            callApiForComments()
        }
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
        const {comments, isOpen, toggleOpen} = this.props
        // if (!comments.length) return <span>No comments yet</span>
        return <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const {article, comments, isOpen, addComment} = this.props
        const commentForm = <NewCommentForm articleId={article.id} addComment={addComment}/>
        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        return <div>
            <ul>{commentItems}</ul>
            {commentForm}</div>
    }
}

export default connect((state, props) => {
    const {comments} = state
    const filteredComments = comments.entities.size > 0 ? (props.article.comments || []).map(id => comments.entities.get(id)) : []

    return {
        comments: filteredComments,
        loading: comments.loading
    }
}, {
    addComment,
    callApiForComments
})(toggleOpen(CommentList))