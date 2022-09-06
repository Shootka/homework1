import styled from 'styled-components';

export const StatisticCard = styled.div`
  margin-top: 20px;
  background: aliceblue;
`;

export const Title = styled.h2`
  color: #a4a3a3;
  font-size: 20px;
  text-align: center;
  margin: 35px 0;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Label = styled.span`
  text-align: center;
  font-size: 24px;
  display: block;
  color: aliceblue;
`;
export const Percentage = styled.span`
  text-align: center;
  font-size: 30px;
  display: block;
  color: aliceblue;
`;
export const Elem = styled.li`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;
  background-color: ${props => props.color}}
`;
