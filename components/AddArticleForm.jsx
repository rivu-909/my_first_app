import React from 'react';
import {TextInput, View, Text, Button} from 'react-native';
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
    <View>
      <Text>Text</Text>
      <TextInput name="title" value={state.title} onChangeText={setTitle} />
      <TextInput
        name="description"
        value={state.description}
        onChangeText={setDescription}
      />
      <Button title="Add Article" onPress={onPress} />
    </View>
  );
}
