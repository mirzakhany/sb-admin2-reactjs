import React from "react";

class Paginator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            perPage: props.perPage,
            currentPage: 1
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.items !== this.props.items) {
            this.props.onPageChange({
                    currentPage: this.state.currentPage,
                    fromItem: 1,
                    toItem: this.state.perPage,
                    totalItems: this.props.items.length,
                    items: this.props.items.slice(0, this.state.perPage)
                }
            )
        }
    }

    goToPage(pageNumber) {
        if (pageNumber !== this.state.currentPage){
            const startPage = (pageNumber -1 ) * this.state.perPage;
            const toPage = startPage + this.state.perPage;
            this.setState({
                startPage: startPage,
                toPage: toPage,
                currentPage: pageNumber
            })

            this.props.onPageChange({
                currentPage: pageNumber,
                fromItem: startPage + 1,
                toItem: toPage > this.props.items.length ? this.props.items.length: toPage,
                totalItems: this.props.items.length,
                items: this.props.items.slice(startPage, toPage)
            })
        }
    }

    renderItems() {
        let items = [];
        const lastPage = Math.ceil(this.props.items.length / this.state.perPage);
        items.push(
            <li className={`page-item ${this.state.currentPage > 1 ? '': 'disabled' }` }>
                <a className="page-link" href="#" onClick={() => this.goToPage(this.state.currentPage-1)} aria-label="Previous">
                    <span aria-hidden="true">«</span>
                </a>
            </li>
        )
        for (let i=1; i <= lastPage;i++){
            items.push(
                <li key={i} className={`page-item ${i===this.state.currentPage? 'active': '' }`}>
                    <a className="page-link" href="#" onClick={() => this.goToPage(i)}>{i}</a>
                </li>
            )
        }
        items.push(
            <li className={`page-item ${this.state.currentPage < lastPage ? '': 'disabled' }` }>
                <a className="page-link" href="#" onClick={() => this.goToPage(this.state.currentPage+1)} aria-label="Next">
                    <span aria-hidden="true">»</span>
                </a>
            </li>
        )
        return items
    }

    render() {
        return (
            <nav
                className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                    {this.renderItems()}
                </ul>
            </nav>
        )
    }
}

export default Paginator;