import React from 'react'
import { MdArrowDropDown }  from 'react-icons/md'
import styled from 'styled-components'

const Icon = styled(MdArrowDropDown)`
width: 30px;
height: 30px;
border-radius: 3px;
border: 2px solid teal;
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
