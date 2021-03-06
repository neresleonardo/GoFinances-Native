import React from 'react';

import { Amount, Container, Title, Footer, Category, Icon, Date, CategoryName } from './styles'

interface Category {
     name: string;
     icon: string;
}

export interface TransactionsCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface Props {
    data: TransactionsCardProps;
}

export function TransactionsCard({data}: Props ){
    return (
        <Container>
            <Title>{data.title}</Title>
            <Amount
             type={data.type}
            >
                 {data.type === 'negative' && '- '}
                 {data.amount}
            </Amount>
            <Footer>
                <Category> 
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}