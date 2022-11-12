import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import AddArticleForm from './components/AddArticleForm';
import Articles from './components/Articles';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>Hello there!!</Text>
        <AddArticleForm />
        <Articles />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
