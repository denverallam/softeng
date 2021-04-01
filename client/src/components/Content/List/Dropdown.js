
import React, { useState, useEffect } from 'react'

import {
    Button, ButtonGroup, ListGroup, ListGroupItem,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
}
    from 'reactstrap';

const Order = ({setOrder}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="my-2">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <DropdownToggle caret>
                    Sort
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={(e) => setOrder('OLDEST')} value='OLDEST'>By Date</DropdownItem>
                    <DropdownItem onClick={(e) => setOrder('ALPHABET')}>Alphabetically</DropdownItem>
                    <DropdownItem onClick={(e) => setOrder('VIEWS')}>By View Count</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default Order
