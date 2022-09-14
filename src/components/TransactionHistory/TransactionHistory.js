import React from 'react';
import PropTypes from 'prop-types';
import { Body, BodyItem, Head, HeadItem } from './style/style';

const tableHeaders = ['Type', 'Amount', 'Currency'];

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
      <Head>
        {tableHeaders.map(head => {
          return <HeadItem key={Math.random()}>{head}</HeadItem>;
        })}
      </Head>
      </thead>
      <tbody>
      {items.map(({ id, type, amount, currency }, index) => {
        return <Body key={id} color={index % 2 === 0 ? '#c6d9fa' : '#709df5' }>
          <BodyItem>{type}</BodyItem>
          <BodyItem>{amount}</BodyItem>
          <BodyItem>{currency}</BodyItem>
        </Body>;
      })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
  }),
};

export default TransactionHistory;
