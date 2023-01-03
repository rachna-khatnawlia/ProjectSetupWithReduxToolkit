//import liraries
import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import colors from "../styles/colors";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../styles/responsiveSize";

// create a component
const CommonTextInput = ({
  placeholder = "",
  password = false,
  value = "",
  onChangeText,
  textInput = {},
  placeholderTextColor,
  showLeftIcon,
  showRightIcon,
  keyboardType = "default",
  showRighticonStyle,
  hide,
  setHide,
  onfocus,
  autoFocus = false,
  multiline = false,
  containerStyle = {},
}) => {
  const [passwordHide, setPasswordHide] = useState();

  return (
    <View style={{...styles.container, ...containerStyle}}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={{
          ...styles.textInput,
          paddingLeft: showLeftIcon ? moderateScale(50) : moderateScale(25),
          paddingRight: moderateScale(45),
          ...textInput,
        }}
        keyboardType={keyboardType}
        secureTextEntry={hide}
        value={value}
        onChangeText={onChangeText}
        hide={hide}
        onFocus={onfocus}
        autoFocus={autoFocus}
        autoCorrect={false}
        autoCapitalize={"words"}
        multiline={multiline}
      />
      {showLeftIcon ? (
        <Image
          source={showLeftIcon} //Change your icon image here
          style={styles.ImageStyle}
        />
      ) : null}
      {showRightIcon ? (
        <Image
          source={showRightIcon} //Change your icon image here
          style={{ ...styles.showRighticonStyle, ...showRighticonStyle }}
        />
      ) : null}
      {/* {password ? (
        <TouchableOpacity
          style={styles.showRighticonStyle}
          onPress={() => setHide(!hide)}
        > */}
      {/* <Image
            source={hide ? imagePath?.homeIcon : imagePath?.showEyeGrey} //Change your icon image here
            style={{
              ...styles.showRighticonStyle,
              ...showRighticonStyle,
            }}
            resizeMode="contain"
          /> */}
      {/* </TouchableOpacity> */}
      {/* ) : null} */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  ImageStyle: {
    position: "absolute",
    left: moderateScale(17),
  },
  showRightIcon: {
    position: "absolute",
    right: moderateScale(17),
  },
  showRighticonStyle: {
    position: "absolute",
    right: moderateScale(16),
    height: moderateScale(30),
    width: moderateScale(28),
    marginTop: 15,
    tintColor: colors.placeholderColor,
  },
  textInput: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScaleVertical(5),
    marginVertical: moderateScaleVertical(10),
    fontSize: textScale(17),
    position: "relative",
    color: "black",
  },
});

//make this component available to the app
export default React.memo(CommonTextInput);
