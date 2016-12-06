import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comment'
import { connect } from 'react-redux'

class NewCommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        if (ev.target.value.length > 5) return
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        const { addComment, articleId } = this.props


        ev.preventDefault()

        addComment({
            user: this.state.user,
            text: this.state.text
        }, articleId)

        this.setState({
            user: '',
            text: ''
        })


        
    }



    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type="hidden"  value={this.props.articleId} />
                <input type = "submit"/>
            </form>
        )
    }
}


export default connect(null,{
    addComment
})(NewCommentForm)