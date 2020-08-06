import React from "react";

class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: []
        }
    }

    onSearch = (event) => {

    }

    render() {
        return (
            <input type="search" className={this.props.className} aria-controls="dataTable"
                   placeholder={this.props.placeHolder} onChange={this.onSearch}/>
        )
    }
}

export default SearchInput;