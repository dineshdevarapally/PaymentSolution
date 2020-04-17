import React from 'react'

export default function label(props) {
    return (
        <label className={props.className}>
            {props.children}
        </label>
    )
}
