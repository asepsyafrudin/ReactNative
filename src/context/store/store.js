import React, {Component, createContext} from 'react';
import {ADD_TO_CART_PRODUCT, SUB_TO_CART_PRODUCT} from '../const';
import {data} from './data';

const Context = createContext();
const Provider = Context.Provider;

export const GlobalProvider = (Children) => {
  return class ParentComp extends Component {
    state = data;

    dispatch = (action) => {
      if (action.type === ADD_TO_CART_PRODUCT) {
        this.setState({
          cartProduct: [{...state}, action.payload],
        });
      }

      if (action.type === SUB_TO_CART_PRODUCT) {
        this.setState({
          cartProduct: [action.payload],
        });
      }
    };
    render() {
      return (
        <Provider value={{state: this.state, dispatch: this.dispatch}}>
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

const Consumer = Context.Consumer;
export const GlobalConsumer = (Children) => {
  return class ParentComp extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
