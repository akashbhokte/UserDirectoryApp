import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Details = ({navigation, route}: any) => {
  let singleUser = route?.params?.item;

  const {name, username, email, phone, website, address, company} = singleUser;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{username}</Text>
        <Text style={styles.info}>Email:&nbsp;&nbsp;{email}</Text>
        <Text style={styles.info}>Phone:&nbsp;&nbsp;{phone}</Text>
        <Text style={styles.info}>Website:&nbsp;&nbsp;{website}</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.info}>Street:&nbsp;&nbsp;{address?.street}</Text>
        <Text style={styles.info}>Suite:&nbsp;&nbsp;{address?.suite}</Text>
        <Text style={styles.info}>City:&nbsp;&nbsp;{address?.city}</Text>
        <Text style={styles.info}>Zipcode:&nbsp;&nbsp;{address?.zipcode}</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Company</Text>
        <Text style={styles.info}>Name:&nbsp;&nbsp;{company?.name}</Text>
        <Text style={styles.info}>BS:&nbsp;&nbsp;{company?.bs}</Text>
        <Text style={styles.info}>
          Catch Phrase:&nbsp;&nbsp;{company?.catchPhrase}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default Details;
