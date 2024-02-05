import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../Button/Button';

const UserCard = ({item}: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.item}
      // onPress={() => {
      //   navigation.navigate('Details', {item: item.item});
      // }}
    >
      <Text style={styles.title}>{item.item.name}</Text>
      <Text style={styles.subtitle}>{item.item.username}</Text>
      <View style={styles.row}>
        <Text style={styles.info}>Email: {item.item.email}</Text>
        <Button
          title="Details →"
          onPress={() => {
            navigation.navigate('Details', {item: item.item});
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderBottomWidth: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    borderBottomColor: 'green',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },

  info: {
    fontSize: 14,
  },
});

export default UserCard;
