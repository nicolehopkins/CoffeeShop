import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

export default function Home () {




  return (
    <List.AccordionGroup>
    <List.Accordion title="Order Your Drink Here" id="1">
      <List.Item
        title="Cafe Au Lait"
        left={props => <List.Icon {...props} icon="coffee" />}
      />
      <List.Item
        title="Cappucino"
        left={props => <List.Icon {...props} icon="coffee" />}
      />
      <List.Item
        title="Espresso"
        left={props => <List.Icon {...props} icon="coffee" />}
      />
      
    </List.Accordion>
    <List.Accordion title="Tracking System" id="2">
      <List.Item
        title="Espresso"
        left={props => <List.Icon {...props} icon="coffee" />}
      />
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