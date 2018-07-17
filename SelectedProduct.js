import * as React from 'react';
import {Animated, View, Image} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect} from './Store';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class SelectedProduct extends React.Component {
  rotation = new Animated.Value(0);

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.props.current) {
      this.rotation.setValue(0);
      Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
    }
  }

  render() {
    if (!this.props.products || this.props.current < 0) {
      return null;
    }
    const product = this.props.products[this.props.current];
    const source = product.source;
    return (
      <View>
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
        <Image style={{width: 5, height: 5, transform: [{translate: [-2.5, 4, -1]}]}} source={{uri: source}} />
      </View>
    );
  }
}

const ConnectedSelectedProduct = connect(SelectedProduct);

export default ConnectedSelectedProduct;
