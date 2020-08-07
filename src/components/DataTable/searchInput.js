import React from "react";
import Fuse from 'fuse.js'


class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items !== this.props.items) {
            this.search(this.state.value);
        }
    }

    search = (value) => {
        const fuse = new Fuse(this.props.items, this.props.searchOptions)
        if (value.length < this.props.searchThreshold ) {
            this.props.onSearch(this.props.items)
            return
        }
        const result = fuse.search(value).map(item =>(
            item.item
        ))
        this.props.onSearch(result)
    }

    onSearch = (event) => {
        this.setState({value: event.target.value})
        this.search(event.target.value)
    }

    render() {
        return (
            <input type="search" className={this.props.className} aria-controls="dataTable"
                   placeholder={this.props.placeHolder} value={this.state.value} onChange={this.onSearch}/>
        )
    }
}

export default SearchInput;