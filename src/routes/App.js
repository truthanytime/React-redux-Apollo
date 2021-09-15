import React from 'react';
import gql from 'graphql-tag';
import { compose } from 'redux';
import { graphql } from 'react-apollo-redux';
import { connect } from 'react-redux';


const BuySomethingMutation = gql`
  mutation BuySomething($amount: Int) {
    buySomething(amount: $amount) @client { 
      amount,
    },
  },
`;


const BuyAnotherThingMutation = gql`
  mutation BuyAnotherThing($amount: Int) {
    buyAnotherThing(amount: $amount) @client {
      amount,
    },
  },
`;


class App extends React.Component {
  render() {
    const { buySomething, buyAnotherThing, credits } = this.props;
    return (
      <div>
        <h1>Buy stuff</h1>
        <h2>Total credits: {credits}</h2>
        <p>
          <button onClick={() => buySomething({ variables: { amount: 25 }})}>
            Buy something - 25credits
          </button>
        </p>
        <p>
          <button onClick={() => buyAnotherThing({ variables: { amount: 40 }})}>
            Buy another thing - 40credits
          </button>
        </p>
      </div>
    );
  }
}


export default compose(
  graphql(BuySomethingMutation, {
    name: 'buySomething',
  }),
  graphql(BuyAnotherThingMutation, {
    name: 'buyAnotherThing',
  }),
  connect((state) => ({ credits: state.credits })),
)(App);