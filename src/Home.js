import React, { Component } from 'react';
import { List } from 'react-native-paper';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      queuedDrink: '',
      pickup: []
    }
  }

  _handleOrders = e => {
    // not sure how to do this in native -> console.log(e.target)
    let newDrink = 'coffee'
    const { orders } = this.state;
    orders.push(newDrink)
    this.setState({orders})
    alert('drink added')
  }

  _handleTracking = (drink) => {
    setTimeout(function() {
      
    }, )
  }

  _handleBarista = (drink) => {

  }

  render() {
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
            this.state.orders.map(drink => {
              return (
                <List.Item
                  title={drink}
                  left={props => <List.Icon {...props} icon="coffee" />}
                />
              )
            })
          }
        </List.Accordion>
        <List.Accordion title="Barista Currently Working On..." id="3">
          <List.Item
            title="Espresso"
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