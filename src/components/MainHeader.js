import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader({title, type='h1'}) {
    return (
        <Header title='Budget' as={type}>{title}</Header>
    )
}

export default MainHeader
