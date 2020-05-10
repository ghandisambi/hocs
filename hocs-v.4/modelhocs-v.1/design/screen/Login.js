import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform,View
} from 'react-native';

// galio component
import {
  Block, Button, Input, NavBar, Text,
} from 'galio-framework';
import theme from '../theme';


const { height, width } = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <View style={{flex:1}}>
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
            <Text muted center size={theme.SIZES.FONT * 0.875}>
            S'inscrire avec un compte de réseau social
            </Text>
            <Block row center space="between" style={{ marginVertical: theme.SIZES.BASE * 1.875 }}>
              <Block flex middle right>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 1.625}
                  icon="plus"
                  iconFamily="FontAwesome"
                  color={theme.COLORS.FACEBOOK}
                  shadowColor={theme.COLORS.FACEBOOK}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
              <Block flex middle center>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 1.625}
                  icon="twitter"
                  iconFamily="FontAwesome"
                  color={theme.COLORS.TWITTER}
                  shadowColor={theme.COLORS.TWITTER}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
              <Block flex middle left>
                <Button
                  round
                  onlyIcon
                  iconSize={theme.SIZES.BASE * 1.625}
                  icon="dribbble"
                  iconFamily="FontAwesome"
                  color={theme.COLORS.DRIBBBLE}
                  shadowColor={theme.COLORS.DRIBBBLE}
                  iconColor={theme.COLORS.WHITE}
                  style={styles.social}
                  onPress={() => Alert.alert('Not implemented')}
                />
              </Block>
            </Block>
            
            <Text muted center size={theme.SIZES.FONT * 0.68} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
              Vous faites déjà parti de la communauté HOUSEOFCLOTHES?
            </Text>
            <Text muted center size={theme.SIZES.FONT * 0.58} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
              Connectez-vous!
            </Text>
          </Block>
          
          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                type="email-address"
                placeholder="Adresse e-mail"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Mot de passe"
                style={{ width: width * 0.9 }}
                onChangeText={text => this.handleChange('password', text)}
              />

              <Text
                color={"black"}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Informations de compte oubliées ?
              </Text>
            </Block>
            <Block flex middle>
              <Button
                round
                color="black"
                onPress={() => Alert.alert(
                  'Sign in action',
                  `Email: ${email}
Password: ${password}`,
                )}
              >
                Connexion
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                <Text center color={"black"} size={theme.SIZES.FONT * 0.75}>
                  {"Pas de compte? Inscrivez-vous"}
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Login;
