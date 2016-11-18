import React, { Component } from 'react'
import ArticleComment from './ArticleComment'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            isComment: false
        }
    }

    render() {
        const { article } = this.props

        // Если свойства нет оно равно FALSE если есть (TRUE) до делаем мап объектов и передаем компоненту по 1 объекту формируя уникальный ID
        const comment = !!article.comments ? article.comments.map(comment =>  
            <div key = {article.id+'_'+comment.id}>
                <ArticleComment comment = {comment} /></div>) : null

        //Если комментов нет (FALSE) не показываем ссылку.
        const linkComment = comment ? <a href="#" onClick = {this.handleClickComment}>Комментарии ({comment.length})</a>  : null
  

        //Обработчики состояний
        const bodyComment = this.state.isComment ? <div>{comment}</div> : null
        const body = this.state.isOpen ? <div>{article.text} <div><br/>{linkComment}{bodyComment}</div></div> : null
       
        return (
            <div>
                <h3><a href="#" onClick = {this.handleClick}>{article.title}</a></h3>
                {body} 
            </div>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleClickComment = ev => {
         this.setState({
            isComment: !this.state.isComment
        })
    }



}

export default Article