import React from "react";
import { StyleSheet, StatusBar, View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import colors from "../styles/colors";
import lightcolor from "../styles/lightThemeColors";

import Loader from "./Loader";

const WrapperContainer = ({
  children,
  // statusBarColor = "black",
  statusBarColor = colors.themeColorNft,
  barStyle = "light-content",
  wrapperView = {},
  isLoading = "",
  withModal = "",
  formLoader = "",
}) => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar
          backgroundColor={
            theme === "dark" ? statusBarColor : lightcolor.themeColorNft
          }
          barStyle={theme === "dark" ? barStyle : "dark-content"}
        />
        <Loader
          isLoading={isLoading}
          withModal={withModal}
          formLoader={formLoader}
        />
        <View
          style={{
            ...styles.wrapperView,
            ...wrapperView,
            backgroundColor:
              theme === "dark" ? statusBarColor : lightcolor.themeColorNft,
          }}
        >
          {children}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
  },
});
export default React.memo(WrapperContainer);
