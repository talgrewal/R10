import React from 'react';
import {SectionList, Text} from 'react-native';
import moment from 'moment';
import SessionListItem from '../SessionListItem';
import styles from './styles';
import {formatSessionData} from '../../lib/helpers';
import PropTypes from 'prop-types';

const SessionsList = ({sessions, faveIds}) => {
  return (
    sessions && (
      <SectionList
        sections={formatSessionData(sessions)}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <SessionListItem item={item} faveIds={faveIds} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.session}>{moment(title).format('h:mm A')}</Text>
        )}
      />
    )
  );
};

SessionsList.propTypes = {
  sessions: PropTypes.array,
  faveIds: PropTypes.array.isRequired,
};

export default SessionsList;
