import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, ImageBackground, TouchableOpacity, NavigationContainer } from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import 'react-native-gesture-handler';
// import { NavigationContainer } from 'react-navigation/native';


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
  
  const rey = {
    uri: 'https://assets5.domestika.org/project-covers/000/231/555/231555-original-rey_starwars_1200.jpg?1451998663',
    width: 300,
    height: 500
  };

  const leia = {
    uri: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg',
    width: 300,
    height: 500
  };

  const solo = {
    uri: 'https://vignette.wikia.nocookie.net/starwars/images/0/01/Hansoloprofile.jpg/revision/latest?cb=20100129155042',
    width: 300,
    height: 500
  };

  const kylo = {
    uri: 'https://vignette.wikia.nocookie.net/villains/images/a/aa/Kylo_Ren_Poster.jpg/revision/latest?cb=20171227070645',
    width: 300,
    height: 500
  };

  const padame = {
    uri: 'https://vignette.wikia.nocookie.net/memorydelta/images/7/78/Padme.jpg/revision/latest?cb=20150315023452',
    width: 300,
    height: 500
  };

  const c3p0 = {
    uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e2b9bf5-4213-4238-b963-af5a5b3ca5e1/d8yqhzn-3c7a217b-45fe-43e6-b3b2-6d931fa501c9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80ZTJiOWJmNS00MjEzLTQyMzgtYjk2My1hZjVhNWIzY2E1ZTEvZDh5cWh6bi0zYzdhMjE3Yi00NWZlLTQzZTYtYjNiMi02ZDkzMWZhNTAxYzkuanBnIn1dXX0.cgDRELJQCZF_SHtZau3UEDkn22FQJQT4nNLEU1APrlo',
    width: 300,
    height: 500
  };

  const r2 = {
    uri: 'https://www.menkind.co.uk/media/catalog/product/cache/image/1000x/beff4985b56e3afdbeabfc89641a4582/c/3/c3po_-r2d2_-bb8-3pk-58993-_44_-edited.jpg',
    width: 300,
    height: 500
  };

  const vader = {
     uri: 'https://s3.crackedcdn.com/phpimages/article/9/8/8/637988_v3.jpg',
    width: 300,
    height: 500
  };

  const dooku = {
    uri: 'https://vignette4.wikia.nocookie.net/villains/images/b/b8/DOOKU.png/revision/latest?cb=20121125045847',
    width: 300,
    height: 500
  };

  const palpatine = {
    uri: 'http://www.starwarsreport.com/wp-content/uploads/2019/06/palpatine-darth-sidious-star-wars-819x1024.jpg',
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
    height: 500,
  };

  const omera = {
    uri: 'https://i.insider.com/5f9c78436f5b310011724980?width=1300&format=jpeg&auto=webp',
    width: 300,
    height: 500
  };

  const image = { 
    uri: 'http://getwallpapers.com/wallpaper/full/6/d/f/10101.jpg',
    width:1200, 
    height:1500,
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
          <Text style={styles.cardTextRey}>Rey</Text>
          <Image source={rey} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextLeia}>Princess Leia</Text>
          <Image source={leia} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextSolo}>Han Solo</Text>
          <Image source={solo} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextC3P0}>C3-P0</Text>
          <Image source={c3p0} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextPadame}>Padame Amidala</Text>
          <Image source={padame} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextR2}>R2-D2</Text>
          <Image source={r2} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextLuke}>Luke SkyWalker</Text>
          <Image source={luke} />
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


        <View style={styles.card}>
          <Text style={styles.cardTextVader}>Darth Vader</Text>
          <Image source={vader} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextDooku}>Count Dooku</Text>
          <Image source={dooku} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTextPalpatine}>Palpatine</Text>
          <Image source={palpatine} />
        </View>
      
        <View style={styles.card}>
          <Text style={styles.cardTextKylo}>Kylo Ren</Text>
          <Image source={kylo} />
        </View>
   
      </ScrollView>


    </SafeAreaView>
    
  )
}







const styles = StyleSheet.create( {

    header:{
      paddingBottom:10,
      paddingTop:10,
    },

    backgroundImage:{
   
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
      color:'#0000FF',
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
      margin:5,
      marginBottom:25,
      flex:1,
      borderWidth:10,
      borderColor:'#0000CD',
      padding:15,
    },

    cardLayout:{
      flex:1,
      alignItems:'center',
      backgroundColor:'black'
    },

    cardTextGrogu:{
      fontSize:25,
      fontWeight:'bold',
      color:'#228B22',
      paddingBottom:14,
    },
  
    cardTextDin:{
      fontSize:25,
      fontWeight:'bold',
      color:'#778899',
      paddingBottom:14,
    },

    cardTextRey:{
      fontSize:25,
      fontWeight:'bold',
      color:'#0000CD',
      paddingBottom:14,
    },

    cardTextLuke:{
      fontSize:25,
      fontWeight:'bold',
      color:'#228B22',
      paddingBottom:14,
    },

    cardTextLeia:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextSolo:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextKylo:{
      fontSize:25,
      fontWeight:'bold',
      color:'#8B0000',
      paddingBottom:14,
    },

    cardTextC3P0:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextPadame:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextR2:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextVader:{
      fontSize:25,
      fontWeight:'bold',
      color:'#8B0000',
      paddingBottom:14,
    },

    cardTextDooku:{
      fontSize:25,
      fontWeight:'bold',
      color:'#8B0000',
      paddingBottom:14,
    },

    cardTextPalpatine:{
      fontSize:25,
      fontWeight:'bold',
      color:'#8B0000',
      paddingBottom:14,
    },

    cardTextGreef:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextClient:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextPershing:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextKuill:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextig11:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextDune:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },

    cardTextOmera:{
      fontSize:25,
      fontWeight:'bold',
      color:'#008B8B',
      paddingBottom:14,
    },
  }
)
