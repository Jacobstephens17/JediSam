import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';


export default function App() {

  const dinDjarin = {
    uri: 'https://www.housemorningwood.com/wp-content/uploads/2020/11/Mudhorn-signet-pauldron-1.jpg',
    width: 300,
    height: 500
  };

const luke = {
    uri: 'https://wallpapercave.com/wp/wp3984534.jpg',
    width: 300,
    height: 500
};

const vader = {
  uri: 'https://s3.crackedcdn.com/phpimages/article/9/8/8/637988_v3.jpg',
  width: 300,
  height: 500
};

const grogu = {
  uri: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/the-mandalorian-season-2-chapter-13-grogu-social-featured.png',
  width: 300,
  height: 500
};

const greef = {
  uri: 'https://i.insider.com/5dcc481d79d757101c735212?width=1300&format=jpeg&auto=webp',
  width: 300,
  height: 500
};

const client = {
  uri: 'https://i.insider.com/5dcc426679d7570ecb2bd742?width=1300&format=jpeg&auto=webp',
  width: 300,
  height: 500
};

const pershing = {
  uri: 'https://i.insider.com/5dcc52eb79d75741f06b0564?width=1300&format=jpeg&auto=webp',
  width: 300,
  height: 500
};

const kuill = {
  uri: 'https://i.insider.com/5dcc483479d7570f924fe104?width=1300&format=jpeg&auto=webp',
  width: 300,
  height: 500
};
const ig11 = {
  uri: 'https://i.insider.com/5dcc486879d7573e7d58a64c?width=1300&format=jpeg&auto=webp',
  width: 300,
  height: 500
};

const dune = {
  uri: 'https://i.insider.com/5dcc484779d7570f924fe107?width=1300&format=jpeg&auto=webp',
  width: 300,
  height: 500
};

const omera = {
  uri: 'https://i.insider.com/5f9c78436f5b310011724980?width=1300&format=jpeg&auto=webp',
  width: 300,
  height: 500
};

 return(
    <SafeAreaView style={styles.cardLayout}>

      <View style={styles.header}>
        <Text style={styles.headerSam}>Sam's Guide</Text>
        <Text style={styles.headerText}>To The</Text>
        <Text style={styles.headerStar}>Star Wars Galaxy</Text>
      </View>

      <ScrollView >

        <View  style={styles.card}>
          <Text style={styles.cardTextGrogu} >Grogu</Text>
          <Image source={grogu} />
        </View>
       
        <View style={styles.card}>
          <Text style={styles.cardTextDin}>Din Djarin</Text>
          <Image source={dinDjarin} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextLuke}>Luke SkyWalker</Text>
          <Image source={luke} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextVader}>Darth Vader</Text>
          <Image source={vader} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextGreef}>Greef Carga</Text>
          <Image source={greef} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextClient}>The Client</Text>
          <Image source={client} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextPershing}>Doctor Pershing</Text>
          <Image source={pershing} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextKuill}>Kuill</Text>
          <Image source={kuill} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextig11}>IG-11</Text>
          <Image source={ig11} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextDune}>Cara Dune</Text>
          <Image source={dune} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextOmera}>Omera</Text>
          <Image source={omera} />
        </View>



        
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  header:{
    paddingBottom:10,
    paddingTop:10,
    
  },

  headerText:{
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    color:'red',
  },

  headerSam:{
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    color:'blue',
  },

  headerStar:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    color:'green',
  },

  heading:{
    flex:1,
  },

  card:{
   margin:25,
   flex:1,
  },

  cardLayout:{
   flex:1,
   backgroundColor:'black',
   alignItems:'center'
  },

  cardTextDin:{
    fontSize:25,
    fontWeight:'bold',
    color:'silver',
  },

  cardTextLuke:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },

  cardTextVader:{
    fontSize:25,
    fontWeight:'bold',
    color:'red',
  },

  cardTextGrogu:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },

  cardTextGreef:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },

  cardTextClient:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },

  cardTextPershing:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },

  cardTextKuill:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },

  cardTextig11:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },
  cardTextDune:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },
  cardTextOmera:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },
})