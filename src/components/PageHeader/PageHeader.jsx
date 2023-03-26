import React from 'react'
import { Page_Wrapper } from './PageHeader.styled'

export default function PageHeader({ head }) {
    return (
        <Page_Wrapper>
            <h1>{head}</h1>
            <p>Any question or remarks? Just write us a message!</p>
        </Page_Wrapper>

    )
}
