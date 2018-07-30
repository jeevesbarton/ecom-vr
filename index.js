import {AppRegistry} from 'react-360';
import Products from './Products';
import CurrentProductDetails from './CurrentProductDetails';
import CollectionsList from './CollectionsList';
import SelectedProduct from './SelectedProduct';
import Cart from './Cart';
import Checkout from './Checkout';
import * as Store from './Store';
Store.initialize('AIzaSyCNOtT55V5vQ1hziUl41Y75_a2ypDoTFQs');

AppRegistry.registerComponent('Checkout', () => Checkout);
AppRegistry.registerComponent('Products', () => Products);
AppRegistry.registerComponent('CurrentProductDetails', () => CurrentProductDetails);
AppRegistry.registerComponent('CollectionsList', () => CollectionsList);
AppRegistry.registerComponent('SelectedProduct', () => SelectedProduct);
AppRegistry.registerComponent('Cart', () => Cart);
