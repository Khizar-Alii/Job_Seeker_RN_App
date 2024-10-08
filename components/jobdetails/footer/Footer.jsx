import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          style={styles.likeBtnImage}
          source={icons.heartOutline}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply For a Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
