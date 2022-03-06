// import React from 'react';
// import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';


// const Separator = () => (
//   <View style={styles.separator} />
// );
//     <SafeAreaView style={styles.container}>
// <View>
//       <Text style={styles.title}>
//         Items going off in the next few days? Don't think you'll have a chance to cook before they expire? 
//         {"\n"}
//         {"\n"}
//         The UK throws away around 9.5 million tonnes of food waste in a single year – even though 8.4 million people in the UK are in food poverty. 
//         {"\n"}
//         {"\n"}
//         Filter the items in your pantry by expiry date, and donate the items you won't be using via (food waste management app, possibly OLIO). 
//       </Text>


//       <View style={styles.fixToText}>
//         class Example extends Component {
//           render()
//           {
//             let data = [{
//               value: 'Banana',
//             }, {
//               value: 'Mango',
//             }, {
//               value: 'Pear',
//             }];

//          return (
//            <Dropdown
//             label='Favorite Fruit'
//                data={data}
//             />
//            );
//            }
//           }
//         <Button
//           title="Meal Plan"
//           color="blue"
//           onPress={() => Alert.alert('Your shopping list has been imported to the shopping page, and your recipes can be generated using the button above!')}
//         />
//       </View>
//     </View>
//     </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });


/* import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
} */

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
