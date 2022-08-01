import React, { useState } from 'react';
import { tooltip } from 'reactstrap';

const tip = (args) => {
    
    const [tipIsOpen, setTipIsOpen] = useState(false);
    const toggle = () => setTipIsOpen(!tipIsOpen);

    return(
        <Tooltip {...args} isOpen={tipIsOpen} target=''
    )
}