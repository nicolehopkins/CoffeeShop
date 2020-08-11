import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Nav = () => {

  return (
    <Appbar.Header>
      <Appbar.Content style={styles.navBar} title="Steady's Coffee Shop" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  navBar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nav;
