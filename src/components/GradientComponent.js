//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "../styles/responsiveSize";

// create a component
const GradientComponent = ({
  color1 = "#1D4783",
  color2 = "#081527",
  children,
  gradientStyle,
}) => {
  return (
    <LinearGradient
      // start={{ x: 0, y: 0 }}
      // end={{ x: 1, y: 0 }}
      colors={[color1, color2]}
      style={{ ...styles.linearGradient, ...gradientStyle }}
    >
      {children}
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius:moderateScale(16),
    // flex: 1,
    // opacity: 1,
  },
});

//make this component available to the app
export default React.memo(GradientComponent);
