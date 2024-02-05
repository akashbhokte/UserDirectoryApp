import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';

const List = ({navigation}: any) => {
  const users = useSelector(state => state.user.users);
  const status = useSelector(state => state.user.status);
  const error = useSelector(state => state.user.error);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  const RenderItem = ({item}: any) => {
    return <UserCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={users} renderItem={item => <RenderItem item={item} />} />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
