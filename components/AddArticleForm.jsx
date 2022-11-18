import {createImmutableStateInvariantMiddleware} from '@reduxjs/toolkit';
import React from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addArticle} from './articlesSlice';

export default function AddArticleForm() {
  const [state, setState] = React.useState({
    title: '',
    description: '',
  });

  const setTitle = title => {
    setState({
      ...state,
      title,
    });
  };

  const setDescription = description => {
    setState({
      ...state,
      description,
    });
  };

  const dispatch = useDispatch();
  const onPress = () => {
    if (state.title.length !== 0 && state.description.length !== 0) {
      dispatch(addArticle(state));
      setState({title: '', description: ''});
    }
  };

  return (
    <View style={styles.addForm}>
      <Text style={styles.addArticleLabel}>Add your desired article</Text>
      <View style={styles.inputContainer}>
        <TextInput
          name="title"
          value={state.title}
          onChangeText={setTitle}
          style={styles.articleTitleInput}
          placeholder="Article Title..."
        />
        <TextInput
          name="description"
          value={state.description}
          onChangeText={setDescription}
          style={styles.articleDescInput}
          placeholder="Article Description..."
          multiline={true}
          numberOfLines={5}
        />
        <Pressable onPress={onPress} style={styles.articleAddButton}>
          <Text style={styles.articleAddButtonLabel}>ADD ARTICLE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addForm: {
    margin: 10,
  },
  addArticleLabel: {
    fontSize: 30,
    fontFamily: 'Georgia',
    margin: 5,
    color: 'black',
  },
  articleTitleInput: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    height: 40,
    borderRadius: 8,
    fontSize: 15,
  },
  articleDescInput: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    fontSize: 15,
  },
  inputContainer: {
    backgroundColor: 'whitesmoke',
    margin: 5,
    borderRadius: 10,
  },
  articleAddButton: {
    margin: 5,
    height: 40,
    width: 200,
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  articleAddButtonLabel: {
    color: 'white',
    fontWeight: '500',
  },
});
