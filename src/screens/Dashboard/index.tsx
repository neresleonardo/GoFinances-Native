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
    HighlightCards
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
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container>
    )
}

  