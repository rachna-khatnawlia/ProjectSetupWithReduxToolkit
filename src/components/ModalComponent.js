//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import imagePath from "../constants/imagePath";
import strings from "../constants/lang";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import lightCommonStyles from "../styles/lightCommonStyles";
import lightThemeColors from "../styles/lightThemeColors";
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from "../styles/responsiveSize";
import ButtonComponent from "./ButtonComponent";
import HorizontalBar from "./HorizontalBar";

// create a component
const ModalComponent = ({
  title = "",
  inputView = () => {},
  cancelPress = () => {},
  buttonPress = () => {},
}) => {
  const { theme } = useSelector((state) => state?.auth);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:
          theme === "dark"
            ? colors.fannyArtcolor
            : lightThemeColors.themeColorNft,
      }}
    >
      <View
        style={{
          ...commonStyles.rowSpaceBetweenCenter,
          ...commonStyles.padding20x15,
        }}
      >
        <Text
          style={
            theme === "dark"
              ? commonStyles.monsterratsemiBold14white
              : lightCommonStyles.monsterratsemiBold14white
          }
        >
          {title}
        </Text>
        <TouchableOpacity onPress={cancelPress}>
          <Image
            source={imagePath.close}
            style={{
              ...styles.cancelIcon,
              tintColor:
                theme === "dark" ? colors.whiteTxt : lightThemeColors.whiteTxt,
            }}
          />
        </TouchableOpacity>
      </View>
      <HorizontalBar />
      <View
        style={{
          paddingBottom: moderateScale(20),
        }}
      >
        {inputView()}
        <ButtonComponent
          buttonText="Save"
          btnStyle={styles.buttonStyle}
          buttonTxt={{ ...commonStyles.monsterratMedium13white }}
          onPress={buttonPress}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // padding: moderateScale(20),
    backgroundColor: colors.fannyArtcolor,
    borderRadius: moderateScale(7),
  },
  cancelIcon: {
    height: moderateScale(12),
    width: moderateScale(12),
    tintColor: colors.white,
  },
  buttonStyle: {
    width: width / 4.3,
    alignSelf: "flex-end",
    borderColor: colors.skyBlueBtn,
    backgroundColor: colors.fannyArtcolor,
    borderWidth: 1,
    paddingVertical: moderateScaleVertical(10),
    marginRight: moderateScale(20),
  },
});

//make this component available to the app
export default ModalComponent;
