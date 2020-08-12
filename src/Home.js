import React, { Component } from 'react';
import { List, TouchableOpacity } from 'react-native-paper';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      queuedDrink: {},
      pickup: []
    }
  }

  _handleOrders = (e) => {
    // figure out how to do this in native -> console.log(e.target)
    e.preventDefault();
    console.log(e.currentTarget)
    const { orders, queuedDrink } = this.state;
    let newOrderObj = {};
    newOrderObj.drink = 'drink';
    newOrderObj.prepTime = 15;

    orders.push(newOrderObj)

    this.setState({
      orders: orders,
      queuedDrink: orders[0]
    })

    alert(`${newOrderObj.drink} has been ordered`)
  }

  _handleTracking = () => {
    const { orders, queuedDrink } = this.state;
    intervalTime = queuedDrink.prepTime * 1000

    if (queuedDrink) {
      setInterval(function() {
        orders.shift();
      }, intervalTime)
    }
  }

  _handleBarista = (drink) => {

  }

  render() {
    const { orders, queuedDrink } = this.state;

    return (
      <List.AccordionGroup>
        <List.Accordion title="Order Your Drink Here" id="1">
          <List.Item
            title="Cafe Au Lait"
            value="Cafe Au Lait"
            left={props => <List.Icon {...props} icon="coffee" />}
            onPress={ this._handleOrders }
          />
          <List.Item
            title="Cappucino"
            left={props => <List.Icon {...props} icon="coffee" />}
            onPress={ this._handleOrders }
          />
          <List.Item
            title="Espresso"
            left={props => <List.Icon {...props} icon="coffee" />}
            onPress={ this._handleOrders }
          />
        </List.Accordion>
        <List.Accordion title="Tracking System" id="2">
          {
            orders.map((order, index) => {
                return (
                <List.Item
                  title={order.drink}
                  key={index}
                  left={props => <List.Icon {...props} icon="coffee" />}
                />
              )
            })
          }
        </List.Accordion>
        <List.Accordion title="Barista Currently Working On..." id="3">
          <List.Item
            title={(queuedDrink ? queuedDrink.drink : null)}
            left={props => <List.Icon {...props} icon="coffee" />}
          />
        </List.Accordion>
        <List.Accordion title="Ready for Pickup" id="4">
          <List.Item
            title="Espresso"
            left={props => <List.Icon {...props} icon="coffee" />}
          />
        </List.Accordion>
      </List.AccordionGroup>
    )
  }
}