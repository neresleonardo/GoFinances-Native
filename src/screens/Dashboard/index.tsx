import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserContainer,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title
       } from './styles'

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Photo source={{uri:'https://github.com/neresleonardo.png'}} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Leonardo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserContainer>
            </Header>
            <HighlightCards>
                <HighlightCard type="up" title="Entrada" amount="R$ 70.0000" lastTrasaction="Última transação dia 12 de maio" />
                <HighlightCard type="down" title="Saida" amount="R$ 4.0000" lastTrasaction="Última transação dia 5 de maio" />
                <HighlightCard type="total" title="Total" amount="R$ 20.0000" lastTrasaction="Última transação dia 12 de maio" />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
            </Transactions>
        </Container>
    )
}

  