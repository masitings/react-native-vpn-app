/*
* @Author: Volynets Serhii
* @Date: 2018-10-11 14:23:40
 * @Last Modified by: Volynets Serhii
 * @Last Modified time: 2018-10-11 19:01:26
* @flow
*/
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from 'src/assets/styles/colors';
import { HEIGHT } from 'src/assets/styles/dimensions';
import { TEXTS } from 'src/config/text.constants';
import IMAGES from 'src/config/image.constants';
import KeyboardWrapper from 'src/components/common/keyboardWrapper';
import Image from 'src/components/common/image';
import Carusel from 'src/components/common/carusel';
import Button from 'src/components/common/button';
import CaruselItem from './caruselItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  contentContainer: {
    paddingTop: 110,
    paddingBottom: 60,
    minHeight: HEIGHT,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    alignSelf: "center",
    height: 379,
  },
  caruselContainer: {
    width: 255,
    height: 122,
  },
  buttonContainer: {
  },
  buttonTytle: {
  }
});

const Onboarding = () => (
  <KeyboardWrapper style={styles.container}>
    <ScrollView
      keyboardShouldPersistTaps="never"
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.box}>
        <Image
          style={styles.logo}
          source={IMAGES.LOGO}
          resizeMode="contain"
        />
        <Carusel
          style={styles.caruselContainer}
          items={TEXTS.ONBOARDING.SCREEN.CARUSEL_ITEMS
            .map(el => <CaruselItem key={el.id} title={el.title} text={el.text} />)
          }
        />
        <Button
          style={styles.buttonContainer}
          onPress={() => {}}
          title={TEXTS.ONBOARDING.SCREEN.STARTED_BUTTON.toUpperCase()}
          titleStyle={styles.buttonTytle}
        />
      </View>
    </ScrollView>
  </KeyboardWrapper>
);

export default Onboarding;
