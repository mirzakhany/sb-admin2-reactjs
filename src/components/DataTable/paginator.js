import React, {useState, useEffect} from "react";

const Paginator = props => {

    const {items, perPage, onPageChange} = props;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() =>{
        onPageChange({
            currentPage: currentPage,
            fromItem: 1,
            toItem: perPage,
            totalItems: items.length,
            items: items.slice(0, perPage)
        })
    }, [items])

    const goToPage = (pageNumber) =>{
        if (pageNumber !== currentPage){
            const _startPage = (pageNumber -1 ) * perPage;
            const _toPage = _startPage + perPage;
            setCurrentPage(pageNumber);

            onPageChange({
                currentPage: pageNumber,
                fromItem: _startPage + 1,
                toItem: _toPage > items.length ? items.length: _toPage,
                totalItems: items.length,
                items: items.slice(_startPage, _toPage)
            })
        }
    }

    const renderItems = () => {
        let pagerItems = [];
        const lastPage = Math.ceil(items.length / perPage);
        pagerItems.push(
            <li key={"pre-page"} className={`page-item ${currentPage > 1 ? '': 'disabled' }` }>
                <button className="page-link" onClick={() => goToPage(currentPage-1)} aria-label="Previous">
                    <span aria-hidden="true">«</span>
                </button>
            </li>
        )
        for (let i=1; i <= lastPage;i++){
            pagerItems.push(
                <li key={"page-"+i.toString()} className={`page-item ${i===currentPage? 'active': '' }`}>
                    <button className="page-link" onClick={() => goToPage(i)}>{i}</button>
                </li>
            )
        }
        pagerItems.push(
            <li key={"next-page"} className={`page-item ${currentPage < lastPage ? '': 'disabled' }` }>
                <button className="page-link" onClick={() => goToPage(currentPage+1)} aria-label="Next">
                    <span aria-hidden="true">»</span>
                </button>
            </li>
        )
        return pagerItems
    }

    return (
        <nav
            className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
            <ul className="pagination">
                {renderItems()}
            </ul>
        </nav>
    )
}

export default Paginator;