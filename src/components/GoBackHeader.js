//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { moderateScale, textScale } from "../styles/responsiveSize";
import { useNavigation } from "@react-navigation/native";
import fontFamily from "../styles/fontFamily";

import colors from "../styles/colors";
import lightThemeColors from "../styles/lightThemeColors";
import { useSelector } from "react-redux";
import commonStyles from "../styles/commonStyles";
import lightCommonStyles from "../styles/lightCommonStyles";

// create a component
const GoBackHeader = ({
  containerStyle = {},
  headerText,
  arrowStyle = {},
  headerTextStyle = {},
  rightIcon = false,
  rightIconPress = () => {},
  rightIconStyle = {},
  backviewStyle = "",
  navigationScreen = false,
  backIcon = false,
  iconInPlaceOfBackIcon = false,
  settingsIcon = {},
  settingsIconview = {},
  settingNavigationScreen = () => {},
  showRightIconBg = true,
  rightIconBg = {},
}) => {
  const navigation = useNavigation();
  const _goBack = () => {
    navigation.goBack();
  };
  const { theme } = useSelector((state) => state?.auth);

  return (
    <>
      <View style={{ ...styles.containerStyle, ...containerStyle }}>
        {backIcon ? (
          <TouchableOpacity
            onPress={navigationScreen ? navigationScreen : _goBack}
            style={{
              backgroundColor:
                theme === "dark"
                  ? colors.fannyArtcolor
                  : lightThemeColors.fannyArtcolor,
              ...styles.backviewStyle,
              ...backviewStyle,
            }}
          >
            <Image
              source={backIcon}
              style={{
                tintColor:
                  theme === "dark"
                    ? colors.placeholderColor
                    : lightThemeColors.placeholderColor,
                ...arrowStyle,
              }}
            />
          </TouchableOpacity>
        ) : iconInPlaceOfBackIcon ? (
          <TouchableOpacity
            onPress={
              settingNavigationScreen ? settingNavigationScreen : _goBack
            }
            style={{ ...styles.settingsIconview, ...settingsIconview }}
          >
            <Image
              source={iconInPlaceOfBackIcon}
              style={{ ...styles.settingsIcon, ...settingsIcon }}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ ...styles.backviewStyle, backgroundColor: null }} />
        )}
        <View>
          <Text
            style={{
              ...(theme === "bold"
                ? commonStyles.monsterratBold16white
                : lightCommonStyles.monsterratBold16white),
              ...headerTextStyle,
              color:
                theme === "dark" ? colors.whiteTxt : lightThemeColors.whiteTxt,
            }}
          >
            {headerText}
          </Text>
        </View>
        {rightIcon ? (
          <TouchableOpacity
            style={{
              ...styles.righticonviewstyle,
              backgroundColor: showRightIconBg
                ? theme === "dark"
                  ? colors.fannyArtcolor
                  : lightThemeColors.fannyArtcolor
                : null,
              ...rightIconBg,
            }}
            onPress={rightIconPress}
          >
            <Image
              source={rightIcon}
              style={{ ...styles.rightIconStyle, ...rightIconStyle }}
            />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              ...styles.righticonviewstyle,
            }}
          />
        )}
        {}
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightIconStyle: {
    height: moderateScale(17),
    width: moderateScale(25),
    alignItems: "center",
  },
  arrow: {
    tintColor: colors.placeholderColor,
  },

  box: {
    alignItems: "center",
    marginLeft: moderateScale(10),
    justifyContent: "space-between",
  },
  box1Img: { height: moderateScale(25), width: moderateScale(25) },
  box2Img: { height: moderateScale(22), width: moderateScale(22) },
  boxText: {
    textTransform: "uppercase",
    marginTop: moderateScale(8),
    fontSize: textScale(10.5),
    letterSpacing: 0.3,
    fontFamily: fontFamily.AvenirMedium,
  },
  backviewStyle: {
    padding: moderateScale(8),
    borderRadius: moderateScale(16),
  },
  righticonviewstyle: {
    padding: moderateScale(8),
    borderRadius: moderateScale(16),
  },
});

//make this component available to the app
export default React.memo(GoBackHeader);
