import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeArticle} from './articlesSlice';

function getArticleItem(article) {
  const dispatch = useDispatch();
  const deleteArticle = () => {
    console.log(article.id, 'pressed');
    dispatch(removeArticle({id: article.id}));
  };
  return (
    <View key={article.id} style={styles.article}>
      <Text style={styles.articleTitle}>{article.title}</Text>
      <Text style={styles.articleDescription}>{article.description}</Text>
      <Pressable onPress={deleteArticle} style={styles.articleRemoveButton}>
        <Text style={styles.articleRemoveButtonLabel}> REMOVE ARTICLE</Text>
      </Pressable>
    </View>
  );
}

export default function Articles() {
  const articles = useSelector(state => state.articles.articles);
  return (
    <View style={styles.articles}>
      <Text style={styles.myArticleLabel}>My Articles</Text>
      {articles.map(article => getArticleItem(article))}
    </View>
  );
}

const styles = StyleSheet.create({
  articles: {
    margin: 10,
  },
  article: {
    backgroundColor: 'whitesmoke',
    borderRadius: 12,
    margin: 5,
  },
  articleRemoveButton: {
    margin: 5,
    height: 40,
    width: 200,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  articleRemoveButtonLabel: {
    color: 'white',
    fontWeight: '500',
  },
  articleTitle: {
    fontSize: 20,
    margin: 5,
    color: 'black',
  },
  articleDescription: {
    fontSize: 15,
    margin: 5,
  },
  myArticleLabel: {
    fontSize: 30,
    margin: 5,
    color: 'black',
  },
});
