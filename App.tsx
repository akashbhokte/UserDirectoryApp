import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import Home from './src/screens/Home/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {fetchUsers} from './src/redux/reducers/userSlice';
import StackNavigator from './src/navigation/StackNavigation';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchUsers());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
      {/* <Home /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
