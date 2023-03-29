import React from 'react'
import { PageWrapper } from './PageHeader.styled'

export default function PageHeader({ head }) {
    return (
        <PageWrapper>
            <h1>{head}</h1>
            <p>Any question or remarks? Just write us a message!</p>
        </PageWrapper>

    )
}
