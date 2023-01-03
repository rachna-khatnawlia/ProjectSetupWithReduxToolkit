//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { useSelector } from "react-redux";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import lightThemeColors from "../styles/lightThemeColors";
import { moderateScale, width } from "../styles/responsiveSize";

// create a component
export const ListShimmerComponent = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // marginHorizontal: 20,
          paddingTop: 15,
          paddingBottom: 2,
        }}
      >
        <View style={{ width: 50, height: 50, borderRadius: 50 }} />
        <View style={{ marginLeft: 15, justifyContent: "space-between" }}>
          <View
            style={{
              width: width - 140,
              height: 11,
              borderRadius: 4,
              marginVertical: 6,
            }}
          />
          <View
            style={{
              marginTop: 6,
              width: width - 200,
              height: 11,
              borderRadius: 4,
              marginVertical: 6,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const RectangularShimmerComponent = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          height: 120,
          width: width - 50,
          alignSelf: "center",
          borderRadius: 4,
        }}
      />
    </SkeletonPlaceholder>
  );
};

export const RowBoxShimmerComponent = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 10,
            paddingRight: 20,
            paddingVertical: 7,
            borderRadius: 5,
            marginRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 50, width: 50, borderRadius: width / 2 }} />
            <View style={{ marginLeft: 7, justifyContent: "space-evenly" }}>
              <View
                style={{
                  width: width / 6.5,
                  height: 9,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: width / 8,
                  height: 9,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: width / 4,
              height: 15,
              borderRadius: 4,
              marginTop: 20,
            }}
          />
          <View
            style={{
              width: width / 4,
              height: 15,
              borderRadius: 4,
              marginTop: 10,
              marginBottom: 38,
            }}
          />
          <View
            style={{
              height: 12,
              borderRadius: 4,
              marginBottom: 12,
            }}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            paddingLeft: 10,
            paddingRight: 20,
            paddingVertical: 7,
            borderRadius: 5,
            marginRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 50, width: 50, borderRadius: width / 2 }} />
            <View style={{ marginLeft: 7, justifyContent: "space-evenly" }}>
              <View
                style={{
                  width: width / 6.5,
                  height: 9,
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 6,
                  width: width / 8,
                  height: 9,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: width / 4,
              height: 15,
              borderRadius: 4,
              marginTop: 20,
            }}
          />
          <View
            style={{
              width: width / 4,
              height: 15,
              borderRadius: 4,
              marginTop: 10,
              marginBottom: 38,
            }}
          />
          <View
            style={{
              height: 12,
              borderRadius: 4,
              marginBottom: 12,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export const SignleLineShimmerComponent = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{ width: 50, height: 50, borderRadius: 50, marginRight: 15 }}
          />
          <View>
            <View
              style={{
                width: 100,
                height: 11,
                borderRadius: 4,
                marginVertical: 6,
              }}
            />
            <View
              style={{
                marginTop: 6,
                width: 100,
                height: 11,
                borderRadius: 4,
                marginVertical: 6,
              }}
            />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const ActivityPageShimmerComponent = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: moderateScale(10),
          borderWidth: 2,
          margin: 15,
        }}
      >
        <View style={{ width: "40%" }}>
          <View style={{ height: 10, width: width / 4, marginBottom: 5 }} />
          <View
            style={{
              height: moderateScale(60),
              width: moderateScale(70),
              marginVertical: moderateScale(5),
            }}
          />
          <View style={{ height: 10, width: width / 4 }} />

          <View style={{ marginVertical: moderateScale(18) }}>
            <View style={{ height: 10, width: width / 5, marginBottom: 7 }} />
            <View style={{ height: 10, width: width / 6 }} />
          </View>
          <View style={{ marginVertical: moderateScale(7) }}>
            <View style={{ height: 10, width: width / 5, marginBottom: 7 }} />
            <View style={{ height: 10, width: width / 3 }} />
          </View>
          <View style={{ marginTop: moderateScale(15) }}>
            <View style={{ height: 10, width: width / 5, marginBottom: 7 }} />
            <View style={{ height: 10, width: width / 3 }} />
          </View>
        </View>
        <View style={{ width: "40%" }}>
          <View style={{ height: 10, width: width / 4 }} />
          <View
            style={{
              height: moderateScale(60),
              width: moderateScale(70),
              marginVertical: moderateScale(5),
            }}
          />

          <View style={{ marginVertical: moderateScale(18) }}>
            <View style={{ height: 10, width: width / 7, marginBottom: 7 }} />
            <View style={{ height: 10, width: width / 4 }} />
          </View>
          <View style={{ marginVertical: moderateScale(7) }}>
            <View style={{ height: 10, width: width / 10, marginBottom: 7 }} />
            <View style={{ height: 10, width: width / 3 }} />
          </View>
          <View style={{ marginTop: moderateScale(15) }}>
            <View style={{ height: 10, width: width / 4, marginBottom: 7 }} />
            <View style={{ height: 10, width: width / 3 }} />
          </View>
        </View>
      </View> */}
      {/* <View style={{ height: 1 }} /> */}

      <View
        style={{
          padding: 10,
          marginHorizontal: moderateScale(20),
          borderWidth: moderateScale(1),
          marginBottom: moderateScale(15),
          borderRadius: moderateScale(8),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: moderateScale(55),
              width: moderateScale(55),
              borderRadius: moderateScale(8),
              marginRight: moderateScale(5),
            }}
          />
          <View
            style={{
              justifyContent: "space-between",
              paddingVertical: moderateScale(8),
            }}
          >
            <View
              style={{ ...commonStyles.rowSpaceBetween, width: width - 130 }}
            >
              <View
                style={{
                  height: moderateScale(10),
                  width: width / 4,
                  borderRadius: moderateScale(5),
                }}
              />
              <View
                style={{
                  height: moderateScale(10),
                  width: width / 6,
                  borderRadius: moderateScale(5),
                }}
              />
            </View>
            <View style={commonStyles.rowSpaceBetween}>
              <View
                style={{
                  height: moderateScale(12),
                  width: width / 3.5,
                  borderRadius: moderateScale(5),
                }}
              />
              <View
                style={{
                  height: moderateScale(12),
                  width: width / 6,
                  borderRadius: moderateScale(5),
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            height: moderateScale(2),
            marginVertical: moderateScale(10),
          }}
        />
        <View style={commonStyles.rowSpaceBetween}>
          <View>
            <View
              style={{
                height: moderateScale(12),
                width: width / 7,
                borderRadius: moderateScale(5),
                marginBottom: moderateScale(10),
              }}
            />
            <View
              style={{
                height: moderateScale(15),
                width: width / 7,
                borderRadius: moderateScale(5),
              }}
            />
          </View>
          <View>
            <View
              style={{
                height: moderateScale(12),
                width: width / 7,
                borderRadius: moderateScale(5),
                marginBottom: moderateScale(10),
              }}
            />
            <View
              style={{
                height: moderateScale(15),
                width: width / 7,
                borderRadius: moderateScale(5),
              }}
            />
          </View>
          <View>
            <View
              style={{
                height: moderateScale(12),
                width: width / 7,
                borderRadius: moderateScale(5),
                marginBottom: moderateScale(10),
              }}
            />
            <View
              style={{
                height: moderateScale(15),
                width: width / 7,
                borderRadius: moderateScale(5),
              }}
            />
          </View>
          <View>
            <View
              style={{
                height: moderateScale(12),
                width: width / 7,
                borderRadius: moderateScale(5),
                marginBottom: moderateScale(10),
              }}
            />
            <View
              style={{
                height: moderateScale(15),
                width: width / 7,
                borderRadius: moderateScale(5),
              }}
            />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const HorizontalListShimmerComponent = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      <View
        style={{
          width: width / 3.2,
          height: moderateScale(33),
          marginRight: moderateScale(10),
          borderRadius: moderateScale(100),
        }}
      ></View>
    </SkeletonPlaceholder>
  );
};

export const HomeCardShimmerComponent = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      <View
        style={{
          marginHorizontal: moderateScale(20),
          marginTop: moderateScale(88),
          height: moderateScale(310),
          borderRadius: moderateScale(16),
          borderWidth: 2,
          position: "relative",
          paddingHorizontal: moderateScale(12),
          paddingnBottom: -30,
        }}
      >
        <View style={{ bottom: 70 }}>
          <View
            style={{
              width: width - 70,
              height: width - 160,
              borderRadius: moderateScale(20),
            }}
          ></View>
          <View style={{ paddingVertical: 20 }}>
            <View style={{ height: 25, width: width / 2.5, borderRadius: 5 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 13,
              }}
            >
              <View style={{ alignSelf: "center" }}>
                <View
                  style={{ height: 15, width: width / 3.5, marginBottom: 12 }}
                />
                <View style={{ height: 15, width: width / 3.5 }} />
              </View>
              <View style={{ width: width / 2.8, height: 50 }}></View>
            </View>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export const ReactangularHorizontalListShimmerComponent = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      <View
        style={{
          width: width / 2,
          height: moderateScale(70),
          marginRight: moderateScale(12),
          borderRadius: moderateScale(8),
        }}
      ></View>
    </SkeletonPlaceholder>
  );
};

export const ProductListShimmerComponent = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      <View
        style={{
          width: width / 2.35,
          borderWidth: 0.7,
          borderRadius: moderateScale(10),
          padding: 8,
          marginBottom: moderateScale(20),
        }}
      >
        <View
          style={{
            alignSelf: "center",
            width: width / 2.45 - 15,
            height: moderateScale(150),
            borderRadius: moderateScale(10),
            marginBottom: moderateScale(10),
          }}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ width: width / 3.5, height: 13 }} />
          <View
            style={{
              width: width / 4.5,
              height: 15,
              marginTop: 15,
              marginBottom: 7,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const DetailCardShimmerComponent = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      <View
        style={{
          width: width - 40,
          borderWidth: 1,
          borderRadius: moderateScale(20),
          position: "relative",
          marginBottom: moderateScale(20),
          marginHorizontal: moderateScale(20),
        }}
      >
        <View
          style={{
            alignSelf: "center",
            width: width - 38,
            height: width - 100,
            borderRadius: moderateScale(15),
            marginBottom: moderateScale(10),
            marginTop: -3,
          }}
        />
        <View
          style={{
            padding: 22,
            paddingBottom: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={{ flex: 0.62 }}>
            <View style={{ width: 40, height: 12 }} />
            <View
              style={{
                width: width / 3.2,
                height: 12,
                marginTop: 10,
                marginBottom: 7,
              }}
            />
            <View
              style={{
                width: width / 2.8,
                height: 12,
              }}
            />
          </View>
          <View
            style={{
              flex: 0.38,
              borderWidth: 3,
              height: 47,
              alignSelf: "flex-start",
              paddingHorizontal: moderateScale(10),
              borderRadius: moderateScale(12),
            }}
          >
            <View style={{ borderRadius: 12 }} />
          </View>
        </View>
      </View>

      <View
        style={{
          position: "relative",
          bottom: 50,
          overflow: "hidden",
          left: width / 3.3,
          padding: 5,
          borderRadius: moderateScale(40),
          width: width / 2.6,
          marginBottom: -40,
        }}
      >
        <View
          style={{
            paddingVertical: 23,
            borderRadius: moderateScale(40),
            width: width / 2.8,
          }}
        ></View>
      </View>
      <View
        style={{
          width: width - 40,
          height: moderateScale(40),
          borderRadius: moderateScale(6),
          marginBottom: moderateScale(8),
          marginHorizontal: moderateScale(20),
        }}
      />
      <View
        style={{
          width: width - 40,
          height: moderateScale(40),
          borderRadius: moderateScale(6),
          marginBottom: moderateScale(8),
          marginHorizontal: moderateScale(20),
        }}
      />
      <View
        style={{
          width: width - 40,
          height: moderateScale(40),
          borderRadius: moderateScale(6),
          marginBottom: moderateScale(20),
          marginHorizontal: moderateScale(20),
        }}
      />
      <View
        style={{
          width: width / 1.8,
          height: moderateScale(20),
          borderRadius: moderateScale(6),
          marginBottom: moderateScale(20),
          marginHorizontal: moderateScale(20),
        }}
      />
    </SkeletonPlaceholder>
  );
};
export const OfferActivityShimmerComponent = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      <View
        style={{
          marginHorizontal: moderateScale(20),
          paddingHorizontal: moderateScale(10),
        }}
      >
        <View style={{ height: 10, width: width / 3, marginBottom: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: moderateScale(55),
              width: moderateScale(55),
              borderRadius: moderateScale(6),
              marginRight: moderateScale(15),
            }}
          ></View>
          <View>
            <View style={{ height: 10, width: width / 2, marginBottom: 12 }} />
            <View style={{ height: 10, width: width / 2, marginBottom: 12 }} />
            <View style={{ height: 10, width: width / 2 }} />
          </View>
        </View>
      </View>
      <View style={{ height: 1, marginVertical: moderateScale(15) }} />
    </SkeletonPlaceholder>
  );
};

export const CollectionDetailHeadDesignShimmer = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      <View style={{ height: width / 1.8, width: width, borderBottomWidth: 2 }}>
        <View
          style={{
            width: width / 3,
            height: width / 3,
            // alignSelf: "center",
            borderRadius: width / 3 / 2,
            bottom: moderateScale(-150),
            marginLeft: moderateScale(20),
            overflow: "hidden",
          }}
        ></View>
      </View>
      <View style={{ marginHorizontal: moderateScale(20) }}>
        <View
          style={{
            height: moderateScale(20),
            width: width / 2.5,
            marginTop: moderateScale(75),
            borderRadius: 4,
          }}
        />
        <View
          style={{
            height: moderateScale(15),
            width: width / 1.5,
            marginTop: moderateScale(15),
            borderRadius: 4,
          }}
        />
        <View
          style={{
            height: moderateScale(12),
            width: width / 3,
            marginTop: moderateScale(15),
            borderRadius: 4,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: moderateScale(15),
          }}
        >
          <View>
            <View style={{ height: moderateScale(10), width: width / 5 }} />
            <View
              style={{
                height: moderateScale(10),
                width: width / 8,
                marginTop: moderateScale(7),
              }}
            />
          </View>
          <View>
            <View style={{ height: moderateScale(10), width: width / 5 }} />
            <View
              style={{
                height: moderateScale(10),
                width: width / 10,
                marginTop: moderateScale(7),
                alignSelf: "center",
              }}
            />
          </View>
          <View>
            <View style={{ height: moderateScale(10), width: width / 5 }} />
            <View
              style={{
                height: moderateScale(10),
                width: width / 8,
                marginTop: moderateScale(7),
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export const MyCollectionShimmerComp = () => {
  const { theme } = useSelector((state) => state?.auth);

  return (
    <SkeletonPlaceholder
      backgroundColor={
        theme === "dark"
          ? colors.shimmerBgColor
          : lightThemeColors.shimmerBgColor
      }
      highlightColor={
        theme === "dark"
          ? colors.shimmerHighlightColor
          : lightThemeColors.shimmerHighlightColor
      }
      speed={800}
    >
      <View
        style={{
          marginTop: moderateScale(15),
          borderRadius: moderateScale(10),
          overflow: "hidden",
          width: width / 2.35,
          borderWidth: moderateScale(3),
        }}
      >
        <View
          style={{ height: width / 3, borderBottomWidth: moderateScale(2) }}
        >
          <View />
        </View>
        <View
          style={{
            bottom: moderateScale(45),
            marginBottom: moderateScale(-35),
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: moderateScale(75),
              height: moderateScale(75),
              borderRadius: moderateScale(75 / 2),
            }}
          />
          <View
            style={{
              height: moderateScale(13),
              width: width / 4,
              marginVertical: moderateScale(10),
              borderRadius: 4,
            }}
          />
          <View
            style={{
              height: moderateScale(9),
              width: width / 5,
              borderRadius: 4,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

// define your styles
const styles = StyleSheet.create({});
