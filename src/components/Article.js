import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from './CommentList'
import Loader from './Loader'
import {deleteArticle, loadArticle} from '../AC/articles'
import {connect} from 'react-redux'

class Article extends Component {

    /*
     shouldComponentUpdate(nextProps) {
     return nextProps.isOpen != this.props.isOpen
     }
     */

    componentWillUpdate() {
        console.log('---', 'updating Article')
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen && !this.props.isOpen && !nextProps.article.text) this.props.loadArticle(this.props.article.id)
    }

    componentDidUpdate() {
    }

    render() {
        const {article, toggleOpen} = this.props
        return (
            <section>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                <a href="#" onClick={this.handleDeleteArticle}>delete me</a>
                {this.getBody()}
            </section>
        )
    }


    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        if (article.loading) return <Loader />
        return (
            <div>
                <p>{article.text}</p>
                <CommentList article={article} articleId={this.props.article.id} ref="comments"/>
            </div>
        )
    }

    handleDeleteArticle = ev => {
        ev.preventDefault()
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        comments: PropTypes.array,
        text: PropTypes.string
    }).isRequired,
    //from connect
    deleteArticle: PropTypes.func
}


export default connect(null, {
    deleteArticle, loadArticle
})(Article)