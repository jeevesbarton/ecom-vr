import * as React from 'react';
import {StyleSheet, Text, View, VrButton} from 'react-360';
import {connect, addToCart} from './Store';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */
const CurrentProductDetails = props => {
  if (!props.products) {
    return <View style={styles.wrapper} />;
  }
  if (props.current < 0) {
    return (
      <View style={styles.wrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>Select a Product</Text>
        </View>
      </View>
    );
  }
  const product = props.products[props.current];
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <VrButton onClick={() => addToCart(product)} style={styles.addToCart}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </VrButton>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
  },
  addToCart: {
    backgroundColor: 'rgba(200, 16, 46, .99)',
    marginTop: 50,
    padding: 10,
    width: 150,
  },
  addToCartText: {
    textAlign: 'center',
  }
});

const ConnectedProductDetails = connect(CurrentProductDetails);

export default ConnectedProductDetails;
