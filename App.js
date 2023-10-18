import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { WebView } from "react-native-webview";

class App extends Component {
  state = {
    count: 0,
    webViewVisible: false,
    webViewURL: "https://dpsmap.com",
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
    Linking.openURL("https://dpsmap.com/mapdir");
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

  openURLInWebView = (url) => {
    this.setState({
      webViewVisible: true,
      webViewURL: url,
      sidebarVisible: false,
    });
  };

  closeWebView = () => {
    this.setState({
      webViewVisible: false,
    });
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

    handleHomeButtonPress = () => {
      if (this.state.webViewVisible) {
        this.closeWebView();
      } else {
        // Handle the action to return to the outer page (e.g., navigate to the main page)
      }
    };
  };

  render() {
    const {
      sidebarVisible,
      webViewVisible,
      webViewURL,
      handleHomeButtonPress,
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
          <Image source={require("./logo/logo.png")} style={styles.imageLogo} />
          <View style={styles.loginSignupButtons}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() =>
                this.openURLInWebView("https://address.dpsmap.com/login.php")
              }
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={() =>
                this.openURLInWebView("https://address.dpsmap.com/register.php")
              }
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        {!webViewVisible && (
          <View style={styles.content}>
            <Text style={styles.contentText}>
              Design Printing Service Co., Ltd
            </Text>

            {/* First Group of Buttons */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.interactiveButton}
                onPress={() => this.openURLInWebView("https://dpsmap.com")}
              >
                <Image
                  source={require("./logo/website.jpg")}
                  style={styles.image}
                />
                <Text style={styles.urlButtonText}>dps map</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.interactiveButton}
                onPress={() =>
                  this.openURLInWebView("https://map.dpsmap.com/session/")
                }
              >
                <Image
                  source={require("./logo/address.jpg")}
                  style={styles.imageAddress}
                />
                <Text style={styles.urlButtonText}>Address DPS</Text>
              </TouchableOpacity>
            </View>

            {/* Second Group of Buttons */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.interactiveButton}
                onPress={() =>
                  this.openURLInWebView("https://dpsmap.com/mapdir/")
                }
              >
                <Image
                  source={require("./logo/map-dir.png")}
                  style={styles.imageMapdir}
                />
                <Text style={styles.urlButtonText}>Map Directory</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.interactiveButton}
                onPress={() =>
                  this.openURLInWebView(
                    "https://dpsmap.com/pages/map-download/"
                  )
                }
              >
                <Image
                  source={require("./logo/download.png")}
                  style={styles.imageDownload}
                />
                <Text style={styles.urlButtonText}>Free Map Download</Text>
              </TouchableOpacity>
            </View>

            {/* Thrid Group of Buttons */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.interactiveButton}
                onPress={() =>
                  this.openURLInWebView("https://shop.dpsmap.com/")
                }
              >
                <Image
                  source={require("./logo/shopping.jpg")}
                  style={styles.image}
                />
                <Text style={styles.urlButtonText}>Shop GPS & Map</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.interactiveButton}
                onPress={() =>
                  this.openURLInWebView("https://dpsmap.com/pages/about-us/")
                }
              >
                <Image
                  source={require("./logo/about-us.png")}
                  style={styles.image}
                />
                <Text style={styles.urlButtonText}>About Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {webViewVisible && (
          <WebView source={{ uri: webViewURL }} style={styles.webView} />
        )}

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerLeft}
            onPress={this.closeWebView}
          >
            <Icon
              name="home"
              size={20}
              color="black"
              style={styles.footerIconClick}
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
              style={styles.footerIconClick}
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
                onPress={() => this.openURLInWebView("https://dpsmap.com")}
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
                onPress={() =>
                  this.openURLInWebView("https://map.dpsmap.com/session/")
                }
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
                onPress={() =>
                  this.openURLInWebView("https://dpsmap.com/mapdir/")
                }
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
                onPress={() =>
                  this.openURLInWebView(
                    "https://dpsmap.com/pages/map-download/"
                  )
                }
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
                onPress={() =>
                  this.openURLInWebView("https://shop.dpsmap.com/")
                }
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
                onPress={() =>
                  this.openURLInWebView("https://dpsmap.com/pages/about-us/")
                }
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
    paddingHorizontal: "5%",
    paddingTop: "10%",
    paddingBottom: "1%",
    backgroundColor: "#FFFFFF",
  },
  imageLogo: {
    width: 50,
    height: 50,
  },
  image: {
    width: "50%",
    height: "50%",
  },
  imageAddress: {
    width: "60%",
    height: "50%",
  },
  imageMapdir: {
    width: "80%",
    height: "50%",
  },
  imageDownload: {
    width: "100%",
    height: "50%",
  },
  loginSignupButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#007AFF",
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
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 80,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#FFFFFF",
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
    color: "#007AFF",
    paddingTop: 5,
    paddingBottom: 5,
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
    shadowRadius: 4,
  },
  webView: {
    flex: 1,
  },
  /*footer*/
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "15%",
    borderTopWidth: 0,
    borderTopColor: "white",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
  },
  footerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerIcon: {
    marginRight: 10,
    color: "white",
  },
  footerIconClick: {
    marginRight: 7,
    color: "#007AFF",
  },
  footerText: {
    fontWeight: "bold",
    color: "#007AFF",
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
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderRadius: 10,
    marginTop: "2%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  sidebarButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: "5%",
  },
  sidebarImage: {
    width: "30%",
    height: "15%",
    marginTop: "40%",
    alignItems: "center",
    marginLeft: "34%",
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
    color: "blue",
  },
});

export default App;
