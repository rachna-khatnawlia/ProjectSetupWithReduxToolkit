import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import fontFamily from "../styles/fontFamily";
import lightCommonStyles from "../styles/lightCommonStyles";
import lightThemeColors from "../styles/lightThemeColors";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../styles/responsiveSize";
// import AntDesign from "react-native-vector-icons/AntDesign";

const DropdownComponent = ({
  data,
  value,
  setValue,
  isFocus,
  setIsFocus,
  dropdownLabel,
  placeholderStyle = {},
  selectedTextStyle = {},
  container = {},
}) => {
  const { theme } = useSelector((state) => state?.auth);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: colors.greyBorder }]}>
          {/* {!value ? dropdownLabel : ""} */}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={{ ...styles.container, ...container }}>
      {renderLabel()}
      <Dropdown
        style={[
          styles.dropdown,
          { borderWidth: theme === "light" ? 1 : 0 },
          {
            borderColor:
              theme === "light" ? lightThemeColors.placeholderColor : null,
          },
          {
            backgroundColor:
              theme === "dark" ? colors.listcolor : lightThemeColors.listcolor,
          },
          isFocus && {
            borderColor:
              theme === "dark" ? "blue" : lightThemeColors.placeholderColor,
            borderRadius: moderateScale(10),
          },
        ]}
        placeholderStyle={{
          ...styles.placeholderStyle,
          ...placeholderStyle,
          //   opacity: value ? 0.8 : 0.65,
          color: value
            ? theme === "dark"
              ? colors?.whiteTxt
              : lightThemeColors.whiteTxt
            : theme === "dark"
            ? colors?.placeholderColor
            : lightThemeColors.placeholderColor,
        }}
        selectedTextStyle={{
          ...styles.selectedTextStyle,
          ...selectedTextStyle,
          color: theme === "dark" ? colors.whiteTxt : lightThemeColors.whiteTxt,
        }}
        inputSearchStyle={{
          ...styles.inputSearchStyle,
          ...(theme === "dark"
            ? commonStyles.monsterratMedium11white
            : lightCommonStyles.monsterratMedium11white),
        }}
        iconStyle={styles.iconStyle}
        containerStyle={{
          backgroundColor:
            theme === "dark"
              ? colors.themeColorNft
              : lightThemeColors.themeColorNft,
          borderRadius: moderateScale(6),
        }}
        itemContainerStyle={{ marginVertical: moderateScale(-8) }}
        itemTextStyle={{ color: theme === "dark" && colors.placeholderColor }}
        activeColor={{
          backgroundColor:
            theme === "dark" ? colors.listcolor : lightThemeColors.listcolor,
        }}
        showsVerticalScrollIndicator={false}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? (value ? value : dropdownLabel) : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          console.log(item?.label, item?.value);
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScaleVertical(10),
  },
  dropdown: {
    height: 48,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(16),
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: -10,
    zIndex: 999,
    paddingHorizontal: 5,
    color: colors.greyBorder,
  },
  placeholderStyle: {
    ...commonStyles.monsterratMedium12white,
  },
  selectedTextStyle: {
    fontSize: moderateScale(15),
  },
  iconStyle: {
    width: 25,
    height: 20,
  },
  inputSearchStyle: {
    height: moderateScale(40),
    marginHorizontal: moderateScale(5),
    borderRadius: moderateScale(5),
    letterSpacing: 0.3,
  },
});
