import { StyleSheet, View, Dimensions, ScrollView, Image } from "react-native";
import { useEffect, useState } from "react";
import Swiper from "react-native-swiper";

var { width } = Dimensions.get("window");

export default function Banner() {
  const [BannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://img.freepik.com/free-photo/closeup-shot-growing-fly-agaric-mushrooms-forest_181624-51722.jpg?t=st=1654618119~exp=1654618719~hmac=7514f6d8a5e0aec8ea445f9b696e22f0a3e437d88130f6c563c8b12465d22764&w=1380",
      "https://img.freepik.com/free-photo/selective-focus-shot-two-wild-mushrooms-growing-forest-ground-cape-town-south-africa_181624-49748.jpg?w=2000",
      "https://img.freepik.com/free-photo/selective-focus-shot-small-fly-agaric-growing-its-natural-environment_181624-48975.jpg?t=st=1654618457~exp=1654619057~hmac=0b5822961f6a85207ab014f3e8b93f6d2c6c3e9abc7b8a848ffede2eb4d86cef&w=2000",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={4}
            style={{
              height: width / 2,
            }}
          >
            {BannerData.map((item) => {
              return (
                <Image
                  key={item}
                  resizeMode="contain"
                  source={{ uri: item }}
                  style={styles.banner}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  swiper: {
    width: width,
    marginTop: "5%",
    alignItems: "center",
  },
  banner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
