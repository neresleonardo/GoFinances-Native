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

export function HighlightCard() {
    return(
        <Container>
            <Headers>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle"/>
            </Headers>
            <Footer>
                <Amount>R$ 17.400,00</Amount>
                <LastTrasaction>Ultima entrada dia 14 de abril</LastTrasaction>
            </Footer>
        </Container>
    )
}