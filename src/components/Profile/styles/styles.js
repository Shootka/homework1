import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 400px;
  width: 300px;
  background-color: #fff828;
  position: relative;
`;

export const Icon = styled.div`
  height: 120px;
  width: 120px;
  margin-top: 20px;
`;

export const Title = styled.h5`
  font-size: 27px;
  font-weight: bold;
  margin: 5px 0;
`;

export const P = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: 50px;
`

export const Brick = styled.div`
  background: #52b0f8;
  text-align: center;
  font-size: 20px;
  padding: 13px;
  color: aliceblue;
  border-right: 1px solid;
  &:last-child {
    border: none;
  }
`



