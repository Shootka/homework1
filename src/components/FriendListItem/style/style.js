import styled from 'styled-components';

export const Elem = styled.li`
  margin: 10px 0;
  display: flex;
  gap: 20px;
  align-items: center;
  align-content: center;
  width: 300px;
  height: 100px;
  border: 1px solid grey;
  box-shadow: 6px 7px 12px -2px rgba(0, 0, 0, 0.75);
`;

export const Point = styled.span`
  margin: 10px;
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
