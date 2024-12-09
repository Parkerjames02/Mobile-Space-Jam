// These are libs so we can use diff functions;
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { Image, Text, View, Pressable, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import { Audio } from 'expo-av';

// Create a function for sound effects
function PageTransition() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/Swooshing.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

// Create a function for sound effects
function OpenBrowser() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/Bat_Swing.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

function IntroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 67,
          }}>
          Space Exploration
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Image
          source={require('./assets/Solar-System-Icon.png')}
          style={{ width: 365, height: 365 }}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 30,
            color: 'black',
            textAlign: 'center',
          }}>
          Enter The Solar System
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 1')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 40,
              color: 'white',
            }}>
            START
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function TheSunScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 139,
          }}>
          The Sun
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 7,
        }}>
        <Image
          source={require('./assets/Sun.png')}
          style={{ width: 387, height: 387 }}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          The Sun is the star at the center of the
          {'\n'} Solar System. It is a nearly perfect ball of
          {'\n'} hot plasma, heated to incandescence by
          {'\n'} nuclear fusion reactions in its core, radiating
          {'\n'} the energy mainly as visible light, ultraviolet
          {'\n'} light, and infrared radiation. It is by far the
          {'\n'} most important source of energy for life
          {'\n'} on Earth.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Sun');
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 2')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function MercuryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 136.5,
          }}>
          Mercury
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 43,
        }}>
        <Image
          source={require('./assets/Mercury.png')}
          style={{ width: 325, height: 325 }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 23 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. It is named after the Roman god Mercurius
          (Mercury),
          {'\n'} god of commerce, messenger of the gods,
          {'\n'} and mediator between gods and mortals, corresponding to the
          Greek god Hermes.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://en.wikipedia.org/wiki/Mercury_(planet)'
            );
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 3')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function VenusScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 152,
          }}>
          Venus
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 43,
        }}>
        <Image
          source={require('./assets/Venus.png')}
          style={{ width: 325, height: 325 }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 23 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          Venus is the second planet from the Sun. It
          {'\n'} is named after the Roman goddess of love
          {'\n'} and beauty. As the brightest natural object in
          {'\n'} Earth's night sky after the Moon, Venus can
          {'\n'} cast shadows and can be visible to the naked eye in broad
          daylight.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Venus');
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 4')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function EarthScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 158,
          }}>
          Earth
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 43,
        }}>
        <Image
          source={require('./assets/Earth.png')}
          style={{ width: 325, height: 325 }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 23 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          Earth is the third planet from the Sun and
          {'\n'} the only astronomical object known to
          {'\n'} harbor life. While large amounts of water
          {'\n'} can be found throughout the Solar System,
          {'\n'} only Earth sustains liquid surface water.
          {'\n'} About 71% of Earth's surface is made up
          {'\n'} of the ocean, dwarfing Earth's polar ice,
          {'\n'} lakes and rivers.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Earth');
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 5')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function MarsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 160,
          }}>
          Mars
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 43,
        }}>
        <Image
          source={require('./assets/Mars.png')}
          style={{ width: 325, height: 325 }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 23 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          Mars is the fourth planet from the Sun and
          {'\n'} the second-smallest planet in the Solar
          {'\n'} System, being larger than only Mercury. In English, Mars
          carries the name of the
          {'\n'} Roman god of war and is often referred to
          {'\n'} as the "Red Planet".
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Mars');
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 6')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function JupiterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 144.5,
          }}>
          Jupiter
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 43,
        }}>
        <Image
          source={require('./assets/Jupiter.png')}
          style={{ width: 325, height: 325 }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 23 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          Jupiter is the fifth planet from the Sun and
          {'\n'} the largest in the Solar System. It is a gas
          {'\n'} giant with a mass more than two and a half times that of all
          the other planets in the
          {'\n'} Solar System combined, but slightly less
          {'\n'} than one-thousandth the mass of the Sun.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://en.wikipedia.org/wiki/Jupiter'
            );
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 7')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function SaturnScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 149,
          }}>
          Saturn
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <Image
          source={require('./assets/Saturn.png')}
          style={{ width: 400, height: 400 }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 23 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          Saturn is the sixth planet from the Sun and
          {'\n'} the second-largest in the Solar System, after Jupiter. It is a
          gas giant with an average
          {'\n'} radius of about nine and a half times that of Earth. It only
          has one-eighth the average
          {'\n'} density of Earth.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Saturn');
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 8')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function UranusScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 145.5,
          }}>
          Uranus
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Image
          source={require('./assets/Uranus.png')}
          style={{ width: 325, height: 325 }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 23 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          Uranus is the seventh planet from the Sun.
          {'\n'} Its name is a reference to the Greek god of
          {'\n'} the sky, Uranus, who, according to Greek mythology, was the
          great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and
          {'\n'} father of Cronus (Saturn).
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Uranus');
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Page 9')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function NeptuneScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'AvenirNext-Bold',
            fontSize: 29,
            color: 'white',
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 133.5,
          }}>
          Neptune
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Image
          source={require('./assets/Neptune.png')}
          style={{ width: 325, height: 325 }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 23 }}>
        <Text
          style={{
            fontFamily: 'Gill Sans',
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
          }}>
          Neptune is the eighth and farthest-known
          {'\n'} Solar planet from the Sun. In the Solar
          {'\n'} System, it is the fourth-largest planet by diameter, the
          third-most-massive planet, and
          {'\n'} the densest giant planet. It is 17 times the
          {'\n'} mass of Earth, and slightly more massive
          {'\n'} than its near-twin Uranus.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: -190,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://en.wikipedia.org/wiki/Neptune'
            );
          }}
          onPressOut={() => OpenBrowser()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Learn More
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 665,
          left: 200,
          right: 0,
          bottom: 0,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            backgroundColor: 'darkslateblue',
            paddingVertical: 7,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Intro Screen')}
          onPressOut={() => PageTransition()}>
          <Text
            style={{
              fontFamily: 'AvenirNext-Bold',
              fontSize: 20,
              color: 'white',
            }}>
            Next Page
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro Screen">
        <Stack.Screen name="Intro Screen" component={IntroScreen} />
        <Stack.Screen name="Page 1" component={TheSunScreen} />
        <Stack.Screen name="Page 2" component={MercuryScreen} />
        <Stack.Screen name="Page 3" component={VenusScreen} />
        <Stack.Screen name="Page 4" component={EarthScreen} />
        <Stack.Screen name="Page 5" component={MarsScreen} />
        <Stack.Screen name="Page 6" component={JupiterScreen} />
        <Stack.Screen name="Page 7" component={SaturnScreen} />
        <Stack.Screen name="Page 8" component={UranusScreen} />
        <Stack.Screen name="Page 9" component={NeptuneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
