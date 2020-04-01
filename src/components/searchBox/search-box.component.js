import React from 'react';

import { SearchContainer } from './serch-box.styles'

export const SearchBox = ({ placeholder, handleChange }) => (
    <SearchContainer
        className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange} />
)