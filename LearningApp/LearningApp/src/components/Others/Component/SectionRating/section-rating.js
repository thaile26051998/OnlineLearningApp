import React from "react";
import { View, Text, PointPropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Styles from "../../../../global/style";
import Colors from "../../../../global/color";
import StarRating from 'react-native-star-rating';

const SectionRating = (props) => {
  let point = 0;
  if (props.item.averagePoint != null) {
    point = props.item.averagePoint;
  } else if (props.item.formalityPoint != null) {
    point = props.item.formalityPoint
  } else {
    point = props.item.courseAveragePoint
  }

  return (
    <View style={Styles.sectionRating}>
      <StarRating
        disabled={false}
        starSize={17}
        maxStars={5}
        rating={point}
        fullStarColor={'yellow'}
      />
    </View>
  );
};

export default SectionRating;
