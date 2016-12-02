import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../AC/filters'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        this.props.changeSelection(selected.map(option => option.value))
    }

    render() {
        const { articles} = this.props
        const { selected} = this.props.filters

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))



        return <Select options={options} value={selected} multi={true} onChange={this.handleChange} />
    }
}



export default connect((state, props) => {

    const { articles, filters } = state
    const articlesArray = articles.valueSeq().toArray();
    const filtersArray = filters;


    return {
        articles: articlesArray,
        filters: filtersArray,

    }

},{changeSelection})(SelectFilter)


//selected: state.filters.get('selected'),
//articles: articles.valueSeq().toArray()