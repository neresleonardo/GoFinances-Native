import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionsCard, TransactionsCardProps } from "../../components/TransactionCard";

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
    Title,
    TransactionList
       } from './styles'

export interface DateListProps extends TransactionsCardProps {
    id: string;
}

export function Dashboard() {

    const data = [
       {   
            id: '1',
            type: 'positive',
            title:"Desenvolvimentro de site",
            amount:"R$ 20.0000",
            category:{
            name:"Vendas",
            icon:"dollar-sign"
        },
        date:"12/12/1998"
        },
        {
        id: '2',
        type: 'negative',    
        title:"Desenvolvimentro de site",
        amount:"R$ 20.0000",
        category:{
        name:"Alimentação",
        icon:"coffee"
    },
    date:"12/12/1998"
    },
    {
        id: '3',
        type: 'negative',    
        title:"Desenvolvimentro de site",
        amount:"R$ 20.0000",
        category:{
        name:"Vendas",
        icon:"shopping-bag"
    },
    date:"12/12/1998"
    },
    ];

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

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionsCard data={item} 
                />}
              />
               
            </Transactions>
        </Container>
    )
}

  