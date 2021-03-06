import React from 'react';
import {Text, ScrollView, TouchableOpacity, View, Image} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {colors, typography} from '../../config/styles';
import PropTypes from 'prop-types';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSessionId,
  removeFaveSessionId,
}) => {
  return (
    <ScrollView style={styles.sessionPage}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{session.location}</Text>

        {faveIds.includes(session.id) ? (
          <Icon name={'ios-heart'} size={25} color="red" />
        ) : null}
      </View>
      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.time}>
        {moment(session.startTime).format('h:mm A')}
      </Text>
      <Text style={styles.description}>{session.description}</Text>
      {session.speaker ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Speaker', [session.speaker]);
            }}>
            <Text style={styles.speakerText}>Presented by:</Text>
            <View style={styles.speakerContainer}>
              <Image
                style={styles.speakerImage}
                source={{uri: session.speaker.image}}
              />
              <Text style={styles.speakerName}>{session.speaker.name}</Text>
            </View>
          </TouchableOpacity>

          {faveIds.includes(session.id) ? (
            <View style={styles.button}>
              <LinearGradient
                colors={[colors.purple, colors.blue]}
                start={{x: 0.0, y: 0.2}}
                end={{x: 0.5, y: 1.9}}
                style={styles.buttonStyle}>
                <TouchableOpacity
                  onPress={() => removeFaveSessionId(session.id)}>
                  <Text style={styles.buttonText}>Remove from Faves</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          ) : (
            <View style={styles.button}>
              <LinearGradient
                colors={[colors.purple, colors.blue]}
                start={{x: 0.0, y: 0.2}}
                end={{x: 0.5, y: 1.9}}
                style={styles.buttonStyle}>
                <TouchableOpacity onPress={() => addFaveSessionId(session.id)}>
                  <Text style={styles.buttonText}>Add to Faves</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        </View>
      ) : null}
    </ScrollView>
  );
};

Session.propTypes = {
  session: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired,
};

export default Session;
