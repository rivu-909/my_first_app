import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeArticle} from './articlesSlice';

function getArticleItem(article) {
  const dispatch = useDispatch();
  const deleteArticle = () => {
    console.log(article.id, 'pressed');
    dispatch(removeArticle({id: article.id}));
  };
  return (
    <View key={article.id}>
      <Text>{article.title}</Text>
      <Text>{article.description}</Text>
      <Button title="delete" onPress={deleteArticle} color="red" />
    </View>
  );
}

export default function Articles() {
  const articles = useSelector(state => state.articles.articles);
  return (
    <View>
      <Text>Articles</Text>
      {articles.map(article => getArticleItem(article))}
    </View>
  );
}
