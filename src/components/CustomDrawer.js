//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import SwitchSelector from "react-native-switch-selector";

import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "../styles/responsiveSize";
import { useSelector } from "react-redux";
import { PROFILE_BASE_URL } from "../config/url";
import commonStyles from "../styles/commonStyles";
import lightCommonStyles from "../styles/lightCommonStyles";
import colors from "../styles/colors";
import lightThemeColors from "../styles/lightThemeColors";
import navigationStrings from "../navigation/navigationStrings";
import strings from "../constants/lang";
import { useNavigation } from "@react-navigation/native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import actions from "../redux/actions";
import imagePath from "../constants/imagePath";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const CustomDrawer = (props) => {
  const connector = useWalletConnect();

  const navigation = useNavigation();
  const { userLoginStatus, theme } = useSelector((state) => state?.auth);
  const [toggle, setToggle] = useState("dark");

  const DropdownDataBeforeWalletConnect = [
    {
      key: 1,
      title: strings.ABOUT,
      icon: imagePath.about,
      onPress: () => {
        Linking.openURL("https://blocktechbrew.com/about-us/").catch((err) => {
          console.log("about us external_link error", err);
        });
      },
    },
    // onPress: () => {
    //   navigation.navigate(navigationStrings.WEBVIEW_SCREEN, {
    //     link: "https://blocktechbrew.com/about-us/",
    //   });
    // },
    // },
    {
      key: 2,
      title: strings.BLOG,
      icon: imagePath.drawerBlog,
      //   onPress: () => {
      //     navigation.navigate(navigationStrings.WEBVIEW_SCREEN, {
      //       link: "https://blocktechbrew.com/blog/",
      //     });
      //   },
      // },
      onPress: () => {
        Linking.openURL("https://blocktechbrew.com/blog/").catch((err) => {
          console.log("blog external_link error", err);
        });
      },
    },
    {
      key: 3,
      title: strings.DOCS,
      icon: imagePath.drawerDocs,
      //   onPress: () => {
      //     navigation.navigate(navigationStrings.WEBVIEW_SCREEN, {
      //       link: "https://nftwebclub.com/learnfindwallet/",
      //     });
      //   },
      // },
      onPress: () => {
        Linking.openURL("https://nftwebclub.com/learnfindwallet/").catch(
          (err) => {
            console.log("docs external_link error", err);
          }
        );
      },
    },
    {
      key: 4,
      title: strings.PRIVACY_POLICY,
      icon: imagePath.drawerPrivacyPolicy,
      // onPress: () => {
      //   navigation.navigate(navigationStrings.WEBVIEW_SCREEN, {
      //     link: "https://blocktechbrew.com/privacy-policy/",
      //   });
      // },
      onPress: () => {
        Linking.openURL("https://blocktechbrew.com/privacy-policy/").catch(
          (err) => {
            console.log("privacy policy external_link error", err);
          }
        );
      },
    },
    {
      key: 5,
      title: userLoginStatus && strings.LOGOUT,
      icon: userLoginStatus && imagePath.drawerLogout,
      onPress: () => {
        userLoginStatus && connector.killSession();
        actions.logoutAction();
        props.navigation.closeDrawer();
      },
    },
  ];

  const DrawerAfterLogin = () => {
    return (
      <>
        {userLoginStatus?.token && (
          <View
            style={{
              backgroundColor:
                theme === "dark"
                  ? colors.themeColorNft
                  : lightThemeColors.themeColorNft,
              paddingVertical: moderateScaleVertical(15),
              paddingTop: getStatusBarHeight(true) + moderateScale(30),
            }}
          >
            {userLoginStatus?.profile_image ? (
              <Image
                source={{
                  uri: PROFILE_BASE_URL + userLoginStatus?.profile_image,
                }}
                style={styles.profile}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={imagePath.profileImg}
                style={styles.profile}
                resizeMode="cover"
              />
            )}
            {userLoginStatus?.first_name || userLoginStatus?.last_name ? (
              <Text
                style={{
                  ...(theme === "dark"
                    ? commonStyles.monsterratBold15white
                    : lightCommonStyles.monsterratBold15white),
                  textAlign: "center",
                }}
              >
                {userLoginStatus?.first_name} {userLoginStatus?.last_name}
              </Text>
            ) : null}

            <TouchableOpacity
              style={{
                position: "absolute",
                top: getStatusBarHeight(true) + moderateScale(10),
                left: moderateScale(10),
              }}
              onPress={() => props.navigation.closeDrawer()}
            >
              <Image
                source={imagePath.backArrowIcon}
                style={{
                  tintColor:
                    theme === "dark"
                      ? colors.whiteTxt
                      : lightThemeColors.whiteTxt,
                }}
              />
            </TouchableOpacity>
          </View>
        )}

        <DrawerContentScrollView {...props}>
          {userLoginStatus?.token && <DrawerItemList {...props} />}
          <View
            style={{
              ...commonStyles.rowSpaceBetweenCenter,
              paddingHorizontal: moderateScale(15),
              paddingVertical: moderateScale(10),
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={imagePath.drawerTheme}
                style={{
                  ...styles.drawerIcon,
                  tintColor:
                    theme === "dark"
                      ? colors.whiteTxt
                      : lightThemeColors.whiteTxt,
                }}
              />
              <Text
                style={{
                  ...styles.drawerTxt,
                  ...(theme === "dark"
                    ? commonStyles.monsterratMedium12white
                    : lightCommonStyles.monsterratMedium12white),
                }}
              >
                App Theme
              </Text>
            </View>
            <SwitchSelector
              initial={toggle == "dark" ? 0 : 1}
              onPress={() => {
                if (theme === "dark") {
                  setToggle("light");
                  actions.themeAction("light");
                } else {
                  setToggle("dark");
                  actions.themeAction("dark");
                }
              }}
              // textColor={
              //   theme === "dark" ? colors.whiteTxt : lightThemeColors.whiteTxt
              // }
              textColor={colors.whiteTxt}
              selectedColor={theme === "dark" ? colors.themeColorNft : null}
              // selectedColor={colors.themeColorNft }
              buttonColor={colors.whiteTxt}
              borderColor={null}
              // background color of complete tab
              // backgroundColor={
              //   theme === "dark"
              //     ? colors.themeColorNft
              //     : lightThemeColors.themeColorNft
              // }
              backgroundColor={colors.themeColorNft}
              hasPadding
              options={[
                {
                  // label: theme === "light" && "Light",
                  value: "dark",
                  imageIcon: theme === "dark" ? imagePath.moon : imagePath.moon,
                },
                {
                  // label: theme === "dark" && "Dark",
                  value: "light",
                  imageIcon: theme === "light" ? imagePath.sun : imagePath.sun,
                },
              ]}
              style={{ width: width / 4.4 }}
              height={30}
            />
          </View>

          {DropdownDataBeforeWalletConnect.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.drawerNav}
                onPress={item.onPress}
                key={index}
              >
                <Image
                  source={item?.icon}
                  style={{
                    ...styles.drawerIcon,
                    tintColor:
                      theme === "dark"
                        ? colors.whiteTxt
                        : lightThemeColors.whiteTxt,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    ...styles.drawerTxt,
                    ...(theme === "dark"
                      ? commonStyles.monsterratMedium12white
                      : lightCommonStyles.monsterratMedium12white),
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </DrawerContentScrollView>
        <TouchableOpacity
          style={{ paddingVertical: moderateScale(8) }}
          onPress={
            () => {
              Linking.openURL(
                "https://blocktechbrew.com/privacy-policy/"
              ).catch((err) => {
                console.log("privacy policy external_link error", err);
              });
            }
            //   {
            //   navigation.navigate(navigationStrings.WEBVIEW_SCREEN, {
            //     link: "https://blocktechbrew.com/terms-and-conditions/",
            //   });
            // }
          }
        >
          <Text style={styles.termsText}>{strings.TERMS_AND_CONDITIONS}</Text>
        </TouchableOpacity>
      </>
    );
  };

  const DrawerBeforeLogin = () => {
    return (
      <>
        <View
          style={{
            backgroundColor:
              theme === "dark"
                ? colors.themeColorNft
                : lightThemeColors.themeColorNft,
            paddingVertical: moderateScaleVertical(15),
            paddingTop: getStatusBarHeight(true) + moderateScale(30),
          }}
        >
          <Image
            source={imagePath.profileImg}
            style={styles.profile}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              top: getStatusBarHeight(true) + moderateScale(10),
              left: moderateScale(10),
            }}
            onPress={() => props.navigation.closeDrawer()}
          >
            <Image
              source={imagePath.backArrowIcon}
              style={{
                tintColor:
                  theme === "dark"
                    ? colors.whiteTxt
                    : lightThemeColors.whiteTxt,
              }}
            />
          </TouchableOpacity>
        </View>

        <DrawerContentScrollView {...props} style={{ marginTop: 0 }}>
          {DropdownDataBeforeWalletConnect.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.drawerNav}
                onPress={item.onPress}
                key={index}
              >
                <Image
                  source={item?.icon}
                  style={{
                    ...styles.drawerIcon,
                    tintColor:
                      theme === "dark"
                        ? colors.whiteTxt
                        : lightThemeColors.whiteTxt,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    ...styles.drawerTxt,
                    ...(theme === "dark"
                      ? commonStyles.monsterratMedium12white
                      : lightCommonStyles.monsterratMedium12white),
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
          <View
            style={{
              ...commonStyles.rowSpaceBetweenCenter,
              paddingHorizontal: moderateScale(15),
              marginTop: moderateScale(-40),
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={imagePath.drawerTheme}
                style={{
                  ...styles.drawerIcon,
                  tintColor:
                    theme === "dark"
                      ? colors.whiteTxt
                      : lightThemeColors.whiteTxt,
                }}
              />
              <Text
                style={{
                  ...styles.drawerTxt,
                  ...(theme === "dark"
                    ? commonStyles.monsterratMedium12white
                    : lightCommonStyles.monsterratMedium12white),
                }}
              >
                App Theme
              </Text>
            </View>
            <SwitchSelector
              initial={toggle == "dark" ? 0 : 1}
              onPress={() => {
                if (theme === "dark") {
                  setToggle("light");
                  actions.themeAction("light");
                } else {
                  setToggle("dark");
                  actions.themeAction("dark");
                }
              }}
              textColor={colors.whiteTxt}
              selectedColor={theme === "dark" ? colors.themeColorNft : null}
              buttonColor={colors.whiteTxt}
              borderColor={null}
              // background color of complete tab
              backgroundColor={colors.themeColorNft}
              hasPadding
              options={[
                {
                  // label: theme === "light" && "Light",
                  value: "dark",
                  imageIcon: theme === "dark" ? imagePath.moon : imagePath.moon,
                },
                {
                  // label: theme === "dark" && "Dark",
                  value: "light",
                  imageIcon: theme === "light" ? imagePath.sun : imagePath.sun,
                },
              ]}
              style={{ width: width / 4.4 }}
              height={30}
            />
          </View>
        </DrawerContentScrollView>
        <TouchableOpacity
          style={{ paddingVertical: moderateScale(8) }}
          onPress={
            () => {
              Linking.openURL(
                "https://blocktechbrew.com/privacy-policy/"
              ).catch((err) => {
                console.log("privacy policy external_link error", err);
              });
            }
            //   {
            //   navigation.navigate(navigationStrings.WEBVIEW_SCREEN, {
            //     link: "https://blocktechbrew.com/terms-and-conditions/",
            //   });
            // }
          }
        >
          <Text style={styles.termsText}>{strings.TERMS_AND_CONDITIONS}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        backgroundColor:
          theme === "dark"
            ? colors.fannyArtcolor
            : lightThemeColors.fannyArtcolor,
      }}
    >
      {userLoginStatus?.token ? <DrawerAfterLogin /> : <DrawerBeforeLogin />}
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    borderRadius: width / 2,
    // borderWidth: 2,
    width: width / 4.5,
    height: width / 4.5,
    borderColor: "grey",
    alignSelf: "center",
    marginBottom: moderateScale(10),
  },
  drawerNav: {
    flexDirection: "row",
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(14),
  },
  drawerIcon: {
    height: moderateScale(22),
    width: moderateScale(21),
    marginRight: moderateScale(5),
  },
  drawerTxt: {
    alignSelf: "center",
    fontSize: textScale(14),
    paddingHorizontal: moderateScale(10),
  },
  termsText: {
    ...commonStyles.monsterratMedium11white,
    color: colors.skyBlueBtn,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});
