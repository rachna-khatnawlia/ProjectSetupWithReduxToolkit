//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import { moderateScale } from "../styles/responsiveSize";

// create a component
const HorizontalBar = ({ horizontalBarStyle = {} }) => {
  return (
    <View style={{ ...styles.horizontalBar, ...horizontalBarStyle }}></View>
  );
};

// define your styles
const styles = StyleSheet.create({
  horizontalBar: {
    // borderTopWidth: 2,
    borderTopColor: "rgba(255, 255, 255, 0.15)",
    opacity: 1,
  },
});
export default React.memo(HorizontalBar);
