/** @format */

import { StyleSheet } from 'react-native';
import { CONTENT_SPACING } from '../constants';
import {
  COLOR_BG_DARK,
  COLOR_BLUE,
  COLOR_GRAY_100,
  COLOR_ORANGE,
  COLOR_PRIMARY,
  COLOR_TEXT_BLACK,
  COLOR_TEXT_SUB,
  COLOR_TURQUOISE_100,
  COLOR_TURQUOISE_BG,
  COLOR_WHITE,
} from './colors';

export const gs = StyleSheet.create({
  padding: {
    padding: CONTENT_SPACING,
  },
  paddingL: {
    paddingLeft: CONTENT_SPACING,
  },
  paddingR: {
    paddingRight: CONTENT_SPACING,
  },
  paddingT: {
    paddingTop: CONTENT_SPACING,
  },
  paddingB: {
    paddingBottom: CONTENT_SPACING,
  },
  paddingH: {
    paddingHorizontal: CONTENT_SPACING,
  },
  paddingV: {
    paddingVertical: CONTENT_SPACING,
  },
  margin: {
    margin: CONTENT_SPACING,
  },
  marginL: {
    marginLeft: CONTENT_SPACING,
  },
  marginR: {
    marginRight: CONTENT_SPACING,
  },
  marginT: {
    marginTop: CONTENT_SPACING,
  },
  marginB: {
    marginBottom: CONTENT_SPACING,
  },
  marginH: {
    marginHorizontal: CONTENT_SPACING,
  },
  marginV: {
    marginVertical: CONTENT_SPACING,
  },

  bgDark: {
    backgroundColor: COLOR_BG_DARK,
  },
  bgWhite: {
    backgroundColor: COLOR_WHITE,
  },
  bgGray: {
    backgroundColor: COLOR_GRAY_100,
  },
  bgPrimary: {
    backgroundColor: COLOR_PRIMARY,
  },
  bgPLight: {
    backgroundColor: COLOR_TURQUOISE_100,
  },

  bgOrange: {
    backgroundColor: COLOR_ORANGE,
  },
  bgBlue: {
    backgroundColor: COLOR_BLUE,
  },
  bgTorquoise: {
    backgroundColor: COLOR_TURQUOISE_BG,
  },
  bgTransparent: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },

  flex: {
    flex: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexRowSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flexRowCentered: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexColumnCentered: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  smallText: {
    fontFamily: global.FontName,
    fontSize: 12,
    fontWeight: '200',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  smallSemiBoldText: {
    fontFamily: global.FontName,
    fontSize: 12,
    fontWeight: '500',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  smallBoldText: {
    fontFamily: global.FontName,
    fontSize: 12,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  defaultText: {
    fontFamily: global.FontName,
    fontSize: 14,
    fontWeight: '200',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  defaultSemiBoldText: {
    fontFamily: global.FontName,
    fontSize: 14,
    fontWeight: '500',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  defaultBoldText: {
    fontFamily: global.FontName,
    fontSize: 14,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  mediumText: {
    fontFamily: global.FontName,
    fontSize: 15,
    fontWeight: '200',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  mediumSemiBoldText: {
    fontFamily: global.FontName,
    fontSize: 15,
    fontWeight: '500',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  mediumBoldText: {
    fontFamily: global.FontName,
    fontSize: 15,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  largeText: {
    fontFamily: global.FontName,
    fontSize: 18,
    fontWeight: '200',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  largeSemiBoldText: {
    fontFamily: global.FontName,
    fontSize: 18,
    fontWeight: '500',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  largeBoldText: {
    fontFamily: global.FontName,
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  textHeading: {
    fontFamily: global.FontName,
    fontSize: 24,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: COLOR_TEXT_BLACK,
  },
  centeredText: {
    textAlign: 'center',
  },
  subText: {
    fontFamily: global.FontName,
    color: COLOR_TEXT_SUB,
  },
});
