import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 25px 0;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  > div {
    line-height: 29px;
    font-size: 16px;
  }
`;

const Title = styled.h4`
  font-size: 22px;
  color: #333333;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
`;

const People = ({ data, title }) => {
  const Content = data.map((person, index) => {
    return (
      <div key={`member_${person.title}`}>{`${person.title}｜${person.name}`}</div>
    )
  });
  return (
    <Container>
      <Title>{title}</Title>
      <div>{Content}</div>
    </Container>
  )
};

export default memo(People);
