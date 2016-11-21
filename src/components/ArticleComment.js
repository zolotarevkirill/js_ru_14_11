import React, { Component } from 'react'
import Article from './Article'


//Лучше использовать Functional Component для таких компонентов
class ArticleComment extends Component {

	render() {
		const { comment } = this.props


		 return (
		 	<div>
                <p>Comment for user: <strong>{comment.user}</strong></p>
                <p>Text comment: {comment.text}</p>
                <hr/> 
            </div>

        )
	}
}




export default ArticleComment
