import React from "react";

import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserContainer,
    UserGreeting,
    UserName
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
                </UserContainer>
            </Header>
        </Container>
    )
}

  