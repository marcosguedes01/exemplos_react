import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Guedes">
        <Member name="Marcos"/>
        <Member name="Priscila"/>
        <Member name="Cecília"/>
    </Family>,
    document.getElementById('app')
)