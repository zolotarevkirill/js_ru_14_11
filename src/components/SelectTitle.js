import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { select } from '../AC/select'
import 'react-select/dist/react-select.css'

class SelectTitle extends Component {
    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const selected = articles.filter(article => article.selected === true)
        const value = selected.length
            ? selected[0].id
            : null

        // <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
        return (
            <Select
                options={options}
                onChange={this.handleChange}
                value={value}
            />
        )
    }

    handleChange = selected => {
        const { select } = this.props
        select(selected && selected.value)
    }
}

export default connect(state => ({
    articles: state.articles
}), {
    select
})(SelectTitle)
