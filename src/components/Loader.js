import React from "react";
import { Modal, Text, View } from "react-native";
import {
  BarIndicator,
  DotIndicator,
  SkypeIndicator,
} from "react-native-indicators";
import { useSelector } from "react-redux";
import colors from "../styles/colors";
import lightThemeColors from "../styles/lightThemeColors";
import { height, width } from "../styles/responsiveSize";

const LoadingComponent = () => {
  return (
    <View
      style={{
        // // ...commonStyles.loader,
        backgroundColor: colors.white,
        elevation: 5,
        height: height,
        width: width,
        opacity: 0.7,
      }}
    >
      <DotIndicator size={13} count={3} color={"#257AF6"} />
    </View>
  );
};
const FormLoadingComponent = ({theme=""}) => {
  console.log(theme)
  return (
    <View
      style={{
        // // ...commonStyles.loader,
        backgroundColor:
          theme === "dark"
            ? colors.themeColorNft
            : lightThemeColors.themeColorNft,
        // elevation: 5,
        height: height + 30,
        width: width,
        opacity: 0.85,
      }}
    >
      <SkypeIndicator size={45} count={6} color={colors.skyBlueBtn} />
    </View>
  );
};
const Loader = ({ isLoading = true, withModal, formLoader = true }) => {
  const theme = useSelector((state) => state?.auth?.theme);
  if (isLoading) {
    return <LoadingComponent theme={theme} />;
  }
  if (formLoader) {
    return <FormLoadingComponent theme={theme} />;
  }
  return null;
};

export default Loader;
