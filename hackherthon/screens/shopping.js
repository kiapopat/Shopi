// import Voice from '@react-native-community/voice'

// export default function App() {
// }

import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

const Separator = () => (
  <View style={styles.separator} />
);

export default function App () {
    return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Use this to generate a random recipe to use up things in your pantry that will be expiring within the next three days. 
        </Text>
            <Button
        title="Give me a recipe!"
        color="blue"
        onPress={() => Alert.alert('If you dont like your recipe, simply generate a new one. Else, keep listening for your recipe!')}
      />
    </View>

    <Separator />
    <View>
      <Text style={styles.title}>
        If you are missing any of the ingredients, or want to set up a meal plan complete with recipes for the next 5 days, use the below to generate a shopping list! Any leftovers can be dealtcd with simply by navigating to the sustainability page. 
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="New List"
          color="blue"
          onPress={() => Alert.alert('Your shopping list has been imported to the shopping page!')}
        />
        <Button
          title="Meal Plan"
          color="blue"
          onPress={() => Alert.alert('Your shopping list has been imported to the shopping page, and your recipes can be generated using the button above!')}
        />
      </View>
    </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
