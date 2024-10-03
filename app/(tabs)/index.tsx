import { Image } from "react-native";

import React,{useState, useEffect} from 'react';


import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "http://localhost:8080/api/mangas/oderOne"

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then((json) => setData(json))
      .catch((error)=> console.error(error))
      .finally(() => setLoading(false))
  }, [])
  return (
    <ParallaxScrollView
      //Cette partie là est le header
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View className="flex-row py-3 justify-evenly bg-gray-200">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-12 h-12"
            style={{ width: 70, height: 70, aspectRatio: 1 }}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/ri_bar-chart-horizontal-fill.svg")}
            className="w-12 h-12"
            style={{ width: 30, height: 30, aspectRatio: 1 }}
            resizeMode="contain"
          />
          {/*Je dois adapter cette vue pour que l'icône shopping et user soient plus à droite. */}
          <View className="">
            <Image
              source={require("../../assets/images/bx_bx-user-check.svg")}
              className="w-12 h-12"
              style={{ width: 30, height: 30, aspectRatio: 1 }}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/carbon_shopping-cart-plus.svg")}
              className="w-12 h-12"
              style={{ width: 30, height: 30, aspectRatio: 1 }}
              resizeMode="contain"
            />
          </View>

          <Text className="container mx-auto">
            <Image
              source={require("../../assets/images/bannierre_mangas.webp")}
              className="absolute bottom-0 left-0 h-44 w-72 " // Utilisation des classes Tailwind
              style={{ width: 300, height: 100, aspectRatio: 1 }} // Ajustez la valeur du ratio
              resizeMode="contain"
            />
          </Text>
        </View>
      }
    >
      {/*Cette partie constitue le centre de la page d'accueil*/}
      <View className="gap-2 mb-2">
           {
        loading ? (<Text>Loading...</Text>) : (
          data.map((mangas) => {
            return (
              <View>
                <Text>{mangas.title}</Text>
                <Text>{mangas.summary}</Text>

            </View>
            )
          })
        )
      }  
       
        {/* <Text className="text-lg font-semibold">
          <a href="">
            MANGA
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 74 70"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </Text> */}
      </View>
      
      {/* <View className="gap-2 mb-2"> */}
      <Text className="text-lg font-semibold">
        <a href="">
          LES PLUS RÉCENTS
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 70"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </Text>
      {/* </View> */}
      {/* <View className="gap-2 mb-2"> */}
      <Text className="text-lg font-semibold">
        <a href="">
          GENRE
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 70"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </Text>
      {/* </View> */}

      {/*Footer*/}
      <View className="bg-dark-up py-3 text-white">
        <Text className="flex flex-col md:flex-row md:px-10 justify-around items-center">
          <Text className="flex flex-col w-1/3">
            <Image source={require("../../assets/images/logo.png")} />
            <Text className="infos">
              Score<span> 4.1</span> | <span>1500</span> avis
            </Text>
          </Text>
        </Text>
        <Text className="flex flex-col md:flex-row w-1/3 justify-between">
          <Text className="text-center my-6 md:text-start">
            <ul className="list">
              <li>
                <h4>Manga’up</h4>
              </li>
              <li>
                <a>Les conditions de vente</a>
              </li>
              <li>
                <a>Politique de confidentialité</a>
              </li>
              <li>
                <a>contact</a>
              </li>
            </ul>
          </Text>
          <Text className="text-center md:text-start my-6">
            <ul className="list">
              <li>
                <h4>Compte</h4>
              </li>
              <li>
                <a>Créer un compte</a>
              </li>
              <li>
                <a>Se connecter</a>
              </li>
            </ul>
          </Text>
        </Text>

        <Text className="flex flex-col md:flex-col w-1/3">
          <Text className="flex flex-row mx-auto gap-4 my-6">
            <a href="https://discord.com/" target="_blank">
              <Image
                source={require("../../assets/images/discord_mobile.png")}
              />
            </a>
            <a href="https://x.com/home" target="_blank">
              <Image src={require("../../assets/images/x_mobile.png")} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <Image src={require("../../assets/images/insta_mobile.png")} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Image src={require("../../assets/images/facebook_mobile.png")} />
            </a>
          </Text>
          <Image
            className="mx-auto"
            src={require("../../assets/images/android-btn.png")}
          />
        </Text>
      </View>

      <Image
        className="my-6 mx-auto w-8/12"
        src={require("../../assets/images/line_desktop.png")}
      />
      <Text className="text-center">
        Copyright © 2024 Manga’up
        <Text>Contact, Mention legale - All rights reserved</Text>
      </Text>
    </ParallaxScrollView>
  );
}
// import React,{useState, useEffect} from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// export default function App() {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(true)

//   const url = "http://localhost:8080/api/mangas/nine"

//   useEffect(() => {
//     fetch(url)
//       .then(resp => resp.json())
//       .then((json) => setData(json))
//       .catch((error)=> console.error(error))
//       .finally(() => setLoading(false))
//   }, [])


//   return (
//     <View style={styles.container}>
//       {
//         loading ? (<Text>Loading...</Text>) : (
//           data.map((post) => {
//             return (
//               <View>
//                 <Text style={styles.title}>{post.title}</Text>
//                 <Text>{post.body}</Text>
//             </View>
//             )
//           })
//         )
//       }      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
// });