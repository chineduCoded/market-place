import React from 'react'
import { MdOutlineArrowDropDown }  from 'react-icons/md'
import styled from 'styled-components'

const Icon = styled(MdOutlineArrowDropDown)`
width: 30px;
height: 30px;
border: 1px solid teal;
border-radius: 3px;
color: teal;
position: fixed;
bottom: 2rem;
left: 2rem;
cursor: pointer;
`

export const ArrowDown = () => {
    return (
        <div>
            <Icon />
        </div>
    )
}
