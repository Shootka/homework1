import styled from 'styled-components';

export const Head = styled.tr`
  background-color: beige;
  color: darkcyan;
`;

export const HeadItem = styled.th`
  padding: 10px 18px;
  font-size: 30px;
  border-bottom: 1px solid;
  border-top: 1px solid;
`;

export const Body = styled.tr`
  background-color: ${props => props.color};
  color: darkcyan;
`;

export const BodyItem = styled.td`
  color: black;
  font-size: 20px;
  padding: 10px 30px;
  width: 180px;
  text-align: center;
`
