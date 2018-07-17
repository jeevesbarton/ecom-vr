import * as React from 'react';
import {StyleSheet, Text, View, VrButton} from 'react-360';
import {connect, setCollection} from './Store';

/**
 * Render a description of the currently-selected model.
 * Connected to the global store to receive inputs.
 */

const CollectionList = props => {

  return (
      <View style={styles.collection}>
          <VrButton onClick={() => setCollection('hats')} style={styles.collectionPanel}>
            <Text>Hats</Text>
          </VrButton>
          <VrButton onClick={() => setCollection('kayaks')} style={styles.collectionPanel}>
            <Text>Kayaks</Text>
          </VrButton>
          <VrButton onClick={() => setCollection('chairs')} style={styles.collectionPanel}>
            <Text>Chairs</Text>
          </VrButton>
          <VrButton onClick={() => setCollection('backpacks')} style={styles.collectionPanel}>
            <Text>Backpacks</Text>
          </VrButton>
      </View>
  );
};

const styles = StyleSheet.create({
  collection: {
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    padding: 10,
  },
  collectionPanel: {
    flex: 2,
    marginLeft: 25,
    marginRight: 25,
  },
});

const ConnectedCollectionList = connect(CollectionList);
export default ConnectedCollectionList;
