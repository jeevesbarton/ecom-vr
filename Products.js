import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton} from 'react-360';
import {connect, setCurrent} from './Store';

class ProductButton extends React.Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <VrButton
        style={styles.productButton}
        onEnter={() => this.setState({hover: true})}
        onExit={() => this.setState({hover: false})}
        onClick={() => setCurrent(this.props.index)}>
        <Image style={styles.productButtonPreview} source={{uri: this.props.preview}} />
        <View style={[styles.productButtonInfo, this.state.hover ? styles.productButtonInfoHover : null]}>
          <View style={styles.productButtonLabel}>
            <Text style={styles.productButtonName}>{this.props.name}</Text>
          </View>
          <View style={styles.productButtonLabel}>
            <Text style={styles.productButtonPrice}>${this.props.price}</Text>
          </View>
        </View>
      </VrButton>
    );
  }

}

const Products = props => {
  if (!props.products) {
    return (
      <View style={styles.wrapper}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.wrapper, {display: props.hide}]}>
      {props.products.map((product, i) => (
        product.collection === props.collection ?
        <ProductButton
          key={product.id}
          index={i}
          name={product.name}
          price={product.price}
          preview={product.preview}
          collection={product.collection}
        /> : null
      )
      )}
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
  },
  productButton: {
    height: 120,
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  productButtonInfo: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'column',
  },
  productButtonPreview: {
    width: '100%',
    height: 225,
  },
  productButtonInfoHover: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  productButtonLabel: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  productButtonName: {
    fontSize: 24,
  },
  productButtonPrice: {
    fontSize: 16,
  }
});

const ConnectedProducts = connect(Products);
export default ConnectedProducts;
