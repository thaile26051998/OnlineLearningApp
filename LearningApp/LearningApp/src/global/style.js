import { StyleSheet } from "react-native";
import Colors from "./color";

const Styles = StyleSheet.create({
  //general
  name: {
    color: Colors.colorWhite,
    fontWeight: "bold",
  },
  sectionContainer: {
    marginBottom: 30,
  },
  scrollViewContainer: {
    marginStart: 10,
    marginTop: 10
  },
  textLarge: {
    color: Colors.colorWhite,
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10
  },
  textSmall: {
    fontSize: 16,
    color: Colors.colorWhite,
  },
  textSuperSmall: {
    fontSize: 12,
    color: Colors.colorLightGray,
    fontWeight: "normal"
  },
  textMedium: {
    fontSize: 16,
    color: Colors.colorWhite,
  },
  marginTopCtn: {
    marginTop: 20
  },
  marginBottomCtn: {
    marginBottom: 20
  },
  marginEndSmall: {
    marginEnd: 5
  },
  marginEndMedium: {
    marginEnd: 10
  },
  detailInfoContainer: {
    marginVertical: 10,
  },

  //authentication
  loginContainer: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
    alignItems: "center",
    justifyContent: "center",
  },

  textSignin: {
    fontSize: 40,
    color: Colors.colorWhite,
    marginVertical: 15,
  },
  textInput: {
    fontSize: 15,
    width: 350,
    height: 50,
    color: "#E5E9EA",
    marginBottom: 10,
    paddingStart: 20,
    backgroundColor: Colors.colorInputBackground,
    borderRadius: 10,
    opacity: 0.9,
  },

  //profile
  sectionAvatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30
  },

  //courses
  sectionCoursesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginEnd: 10,
  },
  sectionCoursesName: {
    color: Colors.colorWhite,
    fontWeight: "bold",
    marginStart: 10,
  },
  sectionCoursesInfo: {
    color: Colors.colorLightGray,
    marginStart: 10,
    fontSize: 12
  },
  sectionCoursesInfoContainer: {
    marginTop: 0,
  },

  sectionCoursesItemImage: {
    height: 100,
    width: 200,
    flexDirection: 'row-reverse',
  },
  sectionCourseOption: {
    margin: 10,
  },
  sectionCoursesItemContainer: {
    backgroundColor: Colors.colorBoldGray,
    margin: 10,
    paddingBottom: 10,
    width: 200,
  },
  sectionCoursesContainer: {
    marginTop: 10,
  },
  sectionName: {
    color: Colors.colorWhite,
    fontSize: 18,
    marginStart: 10,
  },
  sectionSeeAll: {
    color: Colors.colorLightGray,
    fontSize: 14,
  },

  //rating
  sectionRating: {
    flexDirection: "row",
    marginStart: 10,
  },
  sectionRatingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },

  //home
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
    paddingLeft: 10,
  },

  //author
  imageAuthor: {
    height: 80,
    width: 80,
    borderRadius: 400 / 2,
  },
  authorItemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 10
  },
  sectionAuthorContainer: {
    marginEnd: 10,
  },
  sectionAuthorDetailContainer: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
    paddingHorizontal: 10
  },
  sectionAuthorHeaderContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20
  },
  buttonFollowContainer: {
    borderRadius: 5,
    backgroundColor: Colors.colorLightBlue,
    paddingVertical: 10,
    paddingHorizontal: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  authorWidgetSocialContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },


  //path
  sectionPathImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.colorLightBlack,
    height: 100,
    width: 200,
  },
  imagePath: {
    height: 60,
    width: 60,
  },
  sectionPathInfoContainer: {
    backgroundColor: Colors.colorBoldGray,
    height: 70,
    width: 200,
    paddingTop: 10
  },
  sectionPathItemContainer: {
    height: 200,
    width: 200,
    marginEnd: 20,
  },
  sectionPathContainer: {
    marginEnd: 10,
  },
  sectionProgressContainer: {
    marginVertical: 10,
    marginBottom: 30
  },
  sectionPathInfoHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  imagePathInfo: {
    width: 50,
    height: 50,
  },

  //skills
  sectionSkillItemContainer: {
    borderRadius: 30,
    backgroundColor: Colors.colorBoldGray,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },
  sectionSkillDetailContainer: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
  },

  //categories
  imageCategory: {
    width: 150,
    height: 80,
    opacity: 0.8,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesName: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.colorWhite,
    fontSize: 25
  },
  sectionCategoriesTitleDetail: {
    height: 170,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  categoriesTitleDetail: {
    fontSize: 45,
    fontWeight: "bold",
    color: Colors.colorWhite,
  },
  sectionCategoriesImageContainer: {
    height: 250,
    flexDirection: "column",
    opacity: 0.8,
    shadowOpacity: 0.5,
    marginBottom: 30
  },
  sectionCategoriesDetailContainer: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
  },


  //recommendation
  imageRecommendation: {
    width: "100%",
    height: 150,
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
  },
  sectionRecommendationContainer: {
    height: 300,
    marginHorizontal: 10,
  },

  //list courses
  listCoursesImage: {
    width: 120,
    height: 60,
    paddingVertical: 5
  },
  listCoursesItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 240,
    marginTop: 10,
    marginEnd: 10
  },

  //download
  downloadContainer: {
    backgroundColor: Colors.colorBackground,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  //search
  searchContainer: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
    padding: 10
  },
  recentSearchListContainer: {
    marginVertical: 20,
  },
  recentSearchesItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginStart: 5
  },
  recentSearchesHeader: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5
  },
  textClearAll: {
    fontSize: 14,
    color: Colors.colorLightBlue,
  },


});

export default Styles;
