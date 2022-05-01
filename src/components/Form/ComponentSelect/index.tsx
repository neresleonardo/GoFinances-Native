import React from 'react';

import { Container, Category, Icon } from './styles';

type Props = {
  title: string;
}

export function ComponentSelect({title} : Props){
  return(
    <Container>
        <Category>{title}</Category>
        <Icon name="chevron-down"></Icon>
    </Container>
  );
}