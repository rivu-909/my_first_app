import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';
import AddArticleForm from './components/AddArticleForm';
import Articles from './components/Articles';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>
        <AddArticleForm />
        <Articles />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default App;
