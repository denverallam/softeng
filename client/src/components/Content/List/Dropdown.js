
import React, { useState } from 'react'

import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
}
    from 'reactstrap';

const Order = ({setValue}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="my-2 container">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} light>
            <DropdownToggle caret color="white">
                    Sort
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem value='OLDEST' onClick={handleChange}>By Date (Oldest)</DropdownItem>
                    <DropdownItem value='LATEST' onClick={handleChange}>By Date (Latest)</DropdownItem>
                    <DropdownItem value='ALPHABET' onClick={handleChange}>By Title</DropdownItem>
                    <DropdownItem value='VIEWS' onClick={handleChange}>By Views</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default Order
