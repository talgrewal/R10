import React from 'react';
import styles from './styles';
import {View, Image, Text, ScrollView} from 'react-native';
import ConductList from '../../components/ConductList';
import PropTypes from 'prop-types';

const About = ({allConducts}) => {
  return (
    <ScrollView style={styles.about}>
      <View style={styles.aboutImageView}>
        <Image
          style={styles.aboutImage}
          source={require('../../assets/r10_logo.png')}></Image>
      </View>
      <View>
        <Text style={styles.paragraph}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>

      <View>
        <Text style={styles.heading}>Date & Venue</Text>
        <Text style={styles.paragraph}>
          The R10 Conference will take place on Tuesday, June 27, 2020 in
          Vancouver,BC.
        </Text>
      </View>

      <View>
        <Text style={styles.heading}>Code of Conduct</Text>
      </View>

      <View style={styles.allConduct}>
        {allConducts.map(conduct => (
          <ConductList
            key={conduct.id}
            title={conduct.title}
            description={conduct.description}
          />
        ))}
      </View>

      <View style={styles.copyrightContainer}>
        <Text style={styles.copyright}>Tal Grewal - 2019 </Text>
      </View>
    </ScrollView>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;
