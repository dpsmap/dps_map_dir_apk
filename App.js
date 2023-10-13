import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { WebView } from "react-native-webview";
import { Image } from "react-native";
import { ImageBackground } from "react-native";

class App extends Component {
  state = {
    count: 0,
    webViewVisible: false,
    sidebarVisible: false,
    newURL: "https://dpsmap.com",
    newURLVisible: true,
    copyrightText: "© 2023 DPS Map",

    addressURL: "https://map.dpsmap.com/session/",
    addressURLVisible: true,

    mapdirURL: "https://dpsmap.com/mapdirectory",
    mapdirURLVisible: true,

    mapdownloadURL: "https://dpsmap.com/pages/map-download/",
    mapdownloadURLVisible: true,

    shopdpsURL: "https://shop.dpsmap.com/",
    shopdpsURLVisible: true,

    aboutusURL: "https://dpsmap.com/pages/about-us/",
    aboutusURLVisible: true,
  };

  openURL = () => {
    Linking.openURL("https://dpsmap.com/mapdirectory");
  };

  openNewURL = () => {
    Linking.openURL(this.state.newURL);
  };

  openaddressURL = () => {
    Linking.openURL(this.state.addressURL);
  };

  openmapdirURL = () => {
    Linking.openURL(this.state.mapdirURL);
  };

  openmapdownloadURL = () => {
    Linking.openURL(this.state.mapdownloadURL);
  };

  openshopdpsURL = () => {
    Linking.openURL(this.state.shopdpsURL);
  };

  openaboutusURL = () => {
    Linking.openURL(this.state.aboutusURL);
  };

  closeSidebar = () => {
    this.setState({
      sidebarVisible: false,
    });
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      sidebarVisible: !prevState.sidebarVisible,
    }));

    toggleWebView = () => {
      this.setState((prevState) => ({
        webViewVisible: !prevState.webViewVisible,
      }));
    };

    const refreshContent = () => {
      this.setState({
        count: 0, // Reset the count if needed
        sidebarVisible: false,
        newURLVisible: true,
      });
    };
  };

  render() {
    const {
      sidebarVisible,
      webViewVisible,
      newURLVisible,
      addressURLVisible,
      mapdirURLVisible,
      mapdownloadURLVisible,
      shopdpsURLVisible,
      aboutusURLVisible,
      copyrightText,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.companyName}>DPS Mapdirectory</Text>
          <View style={styles.loginSignupButtons}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Design Printing Service Co., Ltd
          </Text>

          {/* First Group of Buttons */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.interactiveButton}
              onPress={this.openNewURL}
            >
              <Icon name="globe" size={50} color="white" style={styles.icon} />
              <Text style={styles.urlButtonText}>dps map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.interactiveButton}
              onPress={this.openaddressURL}
            >
              <Icon
                name="location-arrow"
                size={50}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.urlButtonText}>Address DPS</Text>
            </TouchableOpacity>
          </View>

          {/* Second Group of Buttons */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.interactiveButton}
              onPress={this.openmapdirURL}
            >
              <Icon name="map" size={50} color="white" style={styles.icon} />
              <Text style={styles.urlButtonText}>Map Directory</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.interactiveButton}
              onPress={this.openmapdownloadURL}
            >
              <Icon
                name="download"
                size={50}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.urlButtonText}>Free Map Download</Text>
            </TouchableOpacity>
          </View>

          {/* Thrid Group of Buttons */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.interactiveButton}
              onPress={this.openshopdpsURL}
            >
              <Icon
                name="shopping-cart"
                size={50}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.urlButtonText}>Shop GPS & Map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.interactiveButton}
              onPress={this.openaboutusURL}
            >
              <Icon name="info" size={50} color="white" style={styles.icon} />
              <Text style={styles.urlButtonText}>About Us</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerLeft}
            onPress={this.refreshContent}
          >
            <Icon
              name="home"
              size={20}
              color="black"
              style={styles.footerIcon}
            />
            <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerLeft}
            onPress={this.toggleSidebar}
          >
            <Icon
              name="bars"
              size={20}
              color="black"
              style={styles.footerIcon}
            />
            <Text style={styles.footerText}>Menu</Text>
          </TouchableOpacity>
        </View>
        {sidebarVisible && (
          <View style={styles.sidebar}>
            <ImageBackground
              source={require("./logo/background.png")}
              style={styles.sidebarBackground}
            >
              <Image
                source={require("./logo/logo.png")}
                style={styles.sidebarImage}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={this.closeSidebar}
              >
                <Icon
                  name="arrow-left"
                  size={20}
                  color="blue"
                  style={styles.footerIcon}
                />
                <Text style={styles.sidebarButtonText}> Back </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={this.openNewURL}
              >
                <Icon
                  name="globe"
                  size={20}
                  color="black"
                  style={styles.footerIcon}
                />
                <Text style={styles.sidebarButtonText}>dps map</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={this.openaddressURL}
              >
                <Icon
                  name="location-arrow"
                  size={20}
                  color="black"
                  style={styles.footerIcon}
                />
                <Text style={styles.sidebarButtonText}>Address DPS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={this.openmapdirURL}
              >
                <Icon
                  name="map"
                  size={20}
                  color="black"
                  style={styles.footerIcon}
                />
                <Text style={styles.sidebarButtonText}>Map Directory</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={this.openmapdownloadURL}
              >
                <Icon
                  name="download"
                  size={20}
                  color="black"
                  style={styles.footerIcon}
                />
                <Text style={styles.sidebarButtonText}>Free Map Download</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={this.openshopdpsURL}
              >
                <Icon
                  name="shopping-cart"
                  size={20}
                  color="black"
                  style={styles.footerIcon}
                />
                <Text style={styles.sidebarButtonText}>Shop GPS & Map</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={this.openaboutusURL}
              >
                <Icon
                  name="info"
                  size={20}
                  color="black"
                  style={styles.footerIcon}
                />
                <Text style={styles.sidebarButtonText}>About Us</Text>
              </TouchableOpacity>
              <View style={styles.sidebarFooter}>
                <Text style={styles.copyrightText}>{copyrightText}</Text>
              </View>
            </ImageBackground>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#007AFF",
    /*
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0.1,
    zIndex: 1, ScrollView
    */
  },
  companyName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 10,
    paddingTop: 10,
  },
  loginSignupButtons: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 80,
    marginRight: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  signupButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 80,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 20,
    fontWeight: "bold",
    /*
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 0,
    */
    marginBottom: 25,
    color: "#007AFF",
  },
  urlButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
  },
  urlButtonText: {
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
  },
  icon: {
    color: "#007AFF",
  },

  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  interactiveButton: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#007AFF",
    borderWidth: 2,
    margin: 10,
    shadowColor: "rgba(19,86,111,1.000)",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 4, // Shadow radius
  },

  /*footer*/
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderTopWidth: 0,
    borderTopColor: "white",
    backgroundColor: "#007AFF",
    borderRadius: 80,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 8,
  },
  footerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerIcon: {
    marginRight: 10,
    color: "white",
  },
  footerText: {
    fontWeight: "bold",
    color: "white",
  },
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    elevation: 400,
  },
  sidebarText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  sidebarButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  sidebarButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  sidebarImage: {
    width: 100,
    height: 100,
    marginTop: "50%",
    alignItems: "center",
    marginLeft: "37%",
  },
  sidebarBackground: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  closeButton: {
    position: "absolute",
    top: "80%",
    right: "50%",
    left: "40%",
    width: 70,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },

  sidebarFooter: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  copyrightText: {
    fontSize: 12,
    color: "black",
  },
});

export default App;
