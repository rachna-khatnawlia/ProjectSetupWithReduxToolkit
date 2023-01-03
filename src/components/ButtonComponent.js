import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../styles/responsiveSize";

function ButtonComponent({
  buttonText = "",
  btnStyle = {},
  buttonTxt = {},
  btnLeftIcon,
  onPress = () => { },
  imgIconStyle = {},
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...styles.btnStyle,
        ...btnStyle,
      }}
      onPress={onPress}
    >
      {!!btnLeftIcon ? (
        <Image
          source={btnLeftIcon}
          style={{ ...styles.imgIconStyle, ...imgIconStyle }}
        />
      ) : (
        <View />
      )}

      <Text
        style={{
          ...styles.buttonTxt,
          ...buttonTxt,
        }}
      >
        {buttonText}
      </Text>

      <View />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    paddingVertical: moderateScaleVertical(7),
    paddingHorizontal:moderateScale(24),
    backgroundColor: colors.skyBlueBtn,
    borderRadius: moderateScale(7),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: 'stretch'
  },
  buttonTxt: {
    fontSize: textScale(15),
    textAlign: "center",
    color: colors.white,
  },
  imgIconStyle: {
    marginLeft: moderateScale(19),
  },
});

export default React.memo(ButtonComponent);
