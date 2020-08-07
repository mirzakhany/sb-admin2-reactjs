import React, {useEffect, useState} from "react";
import Fuse from 'fuse.js'


const SearchInput = props => {

    const {className, placeHolder, searchOptions, searchThreshold, items, onSearch } = props;
    const [value, setValue] = useState("");

    useEffect(() => {
        onSearch(items)
    }, [items])

    const search = (value) => {
        const fuse = new Fuse(items, searchOptions)
        const result = fuse.search(value).map(item =>(item.item))
        onSearch(result)
    }

    const onSearchHandler = (event) => {
        setValue(event.target.value)
        if (event.target.value.length >= searchThreshold ) {
            search(event.target.value)
        }else{
            onSearch(items)
        }
    }

    return (
        <input type="search" className={className} aria-controls="dataTable"
               placeholder={placeHolder} value={value} onChange={onSearchHandler}/>
    )
}

export default SearchInput;