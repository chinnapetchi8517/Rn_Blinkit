
import React from 'react';
import Route from './Source/navigation/Route';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './Source/redux/Store';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar

      />
      <Provider store={store}>
        <Route />

      </Provider>
    </SafeAreaView>
  );
}

export default App;


// import React, { useState } from 'react';
// import { View, FlatList, Text, TouchableOpacity, Button } from 'react-native';

// const MyFlatListWithCart = () => {
//   const [cart, setCart] = useState([]);
//   const [itemCounts, setItemCounts] = useState({});

//   // Sample data for the FlatList
//   const data = [
//     { id: 1, name: 'Item 1', price: 10 },
//     { id: 2, name: 'Item 2', price: 15 },
//     { id: 3, name: 'Item 3', price: 20 },
//   ];

//   const addItemToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const incrementItemCount = (itemId) => {
//     setItemCounts({
//       ...itemCounts,
//       [itemId]: (itemCounts[itemId] || 0) + 1,
//     });
//   };

//   const decrementItemCount = (itemId) => {
//     if (itemCounts[itemId] > 0) {
//       setItemCounts({
//         ...itemCounts,
//         [itemId]: itemCounts[itemId] - 1,
//       });
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 }}>
//       <Text>{item.name}</Text>
//       <Text>${item.price}</Text>
//       <TouchableOpacity onPress={() => addItemToCart(item)}>
//         <Text>Add to Cart</Text>
//       </TouchableOpacity>
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={() => incrementItemCount(item.id)}>
//           <Text>+</Text>
//         </TouchableOpacity>
//         <Text>{itemCounts[item.id] || 0}</Text>
//         <TouchableOpacity onPress={() => decrementItemCount(item.id)}>
//           <Text>-</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//       <Text>Cart Contents:</Text>
//       {cart.map((cartItem) => (
//         <View key={cartItem.id} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
//           <Text>{cartItem.name}</Text>
//           <Text>${cartItem.price}</Text>
//         </View>
//       ))}
//       <Button
//         title="Checkout"
//         onPress={() => {
//           // You can implement the logic for checkout here
//           // This is just a basic example to add items to the cart
//         }}
//       />
//     </View>
//   );
// };

// export default MyFlatListWithCart;

