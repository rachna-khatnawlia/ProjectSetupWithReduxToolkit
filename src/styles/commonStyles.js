import {StyleSheet} from 'react-native';
import colors from './colors';
import {textScale} from './responsiveSize';

const commonStyles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowAlignCen: {flexDirection: 'row', alignItems: 'center'},
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSpaceBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenterCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // regular monstearrat
  montserratRegular12white: {
    // fontFamily: fontFamily.montserratRegular,
    fontSize: textScale(12),
    color: colors.whiteTxt,
  },
});

export default commonStyles;
