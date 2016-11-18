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

        //Проверяем есть ли свойство comments
        const comments  =  typeof article.comments != "undefined" ? article.comments : null;

        // Если свойства нет оно равно NULL если есть до делаем мап объектов и передаем компоненту по 1 объекту формируя уникальный ID
        const comment = comments != null ? comments.map(comment =>  <div key = {article.id+'_'+comment.id}><ArticleComment comment = {comment} /></div>) : null

        //Если комментов нет (NULL) не показываем ссылку.
        const linkComment = comment ? <a href="#" onClick = {this.handleClickComment}>Комментарии</a>  : null
  

        //Обработчики состояний
        const bodyComment = this.state.isComment ? <section>{comment}</section> : null
        const body = this.state.isOpen ? <p>{article.text} <div><br/>{linkComment}{bodyComment}</div></p> : null
       

       


        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                    
            </section>
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