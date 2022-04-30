import React from 'react';

import { 
        Container,
        Headers,
        Title,
        Icon,
        Footer,
        Amount,
        LastTrasaction
    } from './styles';

interface Props {
    title: string;
    amount: string;
    lastTrasaction: string;
    type: 'up' | 'down' | 'total';
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
}

export function HighlightCard({
    type,
    title,
    amount,
    lastTrasaction
} : Props) {
    return(
        <Container type={type}>
            <Headers>
                <Title type={type}>{title}</Title>
                <Icon
                 name={icon[type]} 
                 type={type} 
                 />
            </Headers>
            <Footer>
                <Amount  type={type}> {amount}</Amount>
                <LastTrasaction  type={type}> {lastTrasaction}</LastTrasaction>
            </Footer>
        </Container>
    )
}