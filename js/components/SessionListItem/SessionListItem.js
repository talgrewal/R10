import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import PropTypes from 'prop-types';

const SessionListItem = ({item, navigation, faveIds}) => (
  <TouchableOpacity
    opacity={0.4}
    onPress={() => navigation.navigate('Session', {id: item.id})}>
    <View style={styles.heading}>
      <Text style={styles.headingText}>{item.title}</Text>
      <View style={styles.flexContainer}>
        <Text style={styles.location}>{item.location}</Text>

        {faveIds.includes(item.id) ? (
          <Ionicons name={'ios-heart'} size={25} color={'red'} />
        ) : null}
      </View>
    </View>
  </TouchableOpacity>
);

SessionListItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default withNavigation(SessionListItem);
