import React, { useState } from "react";

import { Input } from '../../components/Form/Input' 
import { Button } from '../../components/Form/Button' 
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType
 } from "./styles"

export function Register() {

    const [transactionType, setTransactionType] = useState("");

    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    // Handle e disparodo por alguma interação do usuário

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                        placeholder="Nome"
                    />
                    <Input 
                        placeholder="Preço"
                    />
                    <TransactionsType>

                        <TransactionTypeButton 
                            type='up'
                            isActive={transactionType === 'up'}
                            title='Entrada'
                            onPress={() => handleTransactionsTypeSelect('up')}
                        />
                        <TransactionTypeButton 
                            type='down'
                            isActive={transactionType === 'down'}
                            title='Saida'
                            onPress={() => handleTransactionsTypeSelect('down')}
                        />
                    </TransactionsType>
                </Fields>
                <Button
                    title="Enviar"
                />
            </Form>
        
        </Container>
    );
}