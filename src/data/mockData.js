// === DESTINATIONS ===
export const destinations = [
  {
    id: "d1",
    name: "Assam",
    description:
      "Home to the one-horned rhinoceros, lush tea gardens, and the mighty Brahmaputra river. Assam is the gateway to North East India.",
    image:
      "https://www.tourism-rajasthan.com/wp-content/uploads/2022/10/Kaziranga-National-Park-scaled.jpg",
    hotels: [
      {
        id: "h1",
        name: "Vivanta Guwahati",
        price: 9500,
        image: "p1.jpg",
        images: [
          "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Khanapara, Guwahati, Assam",
        description:
          "A modern luxury hotel with panoramic views of the city and hills, offering an urban oasis.",
        amenities: [
          "Free WiFi",
          "Swimming Pool",
          "Spa & Sauna",
          "Gym",
          "Multiple Restaurants",
          "Concierge",
        ],
        rating: 4.8,
        reviews: [
          {
            name: "Rohan",
            rating: 5,
            text: "Amazing stay! The pool was incredible and staff was very courteous.",
            date: "2025-07-10",
          },
        ],
        coordinates: { lat: 26.1154, lng: 91.8213 },
      },
      {
        id: "h2",
        name: "Radisson Blu Hotel Guwahati",
        price: 8200,
        image:
          "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Gotanagar, Guwahati, Assam",
        description:
          "A 5-star hotel offering stylish rooms, an infinity pool, and easy access to the highway.",
        amenities: [
          "Free WiFi",
          "Infinity Pool",
          "Spa",
          "Gym",
          "Bar",
          "Room Service",
        ],
        rating: 4.7,
        reviews: [
          {
            name: "Amit",
            rating: 5,
            text: "Felt like luxury. The infinity pool is the best part.",
            date: "2025-06-11",
          },
        ],
        coordinates: { lat: 26.1365, lng: 91.6912 },
      },
    ],
    foodPlaces: [
      {
        id: "f1",
        name: "Khorikaa",
        location: "Ulubari, Guwahati, Assam",
        images: [
          "https://images.pexels.com/photos/10580551/pexels-photo-10580551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        rating: 4.5,
        description:
          "Famous for its authentic Assamese thalis and ethnic cuisine.",
        specialties: [
          "Pork with Bamboo Shoot",
          "Duck Roast",
          "Parampara Thali",
        ],
        cleanlinessScore: 9.0,
        averagePrice: 800,
      },
    ],
    sites: [
      {
        id: "s1",
        name: "Kaziranga National Park",
        description:
          "A UNESCO World Heritage site, home to two-thirds of the world's one-horned rhinoceroses.",
        images: [
          "https://etimg.etb2bimg.com/photo/121282895.cms",
          "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2020%2F10%2F28%2F168948-kaziranga.webp",
        ],
        rating: 4.9,
        highlights: [
          "One-Horned Rhino",
          "Jeep Safari",
          "Elephant Safari",
          "Bird Watching",
        ],
        tips: [
          "Best time: November to April",
          "Book safaris in advance",
          "Wear neutral colors",
        ],
        coordinates: { lat: 26.6667, lng: 93.3667 },
      },
      {
        id: "s2",
        name: "Kamakhya Temple",
        description:
          "A major Hindu pilgrimage site, this temple is dedicated to the goddess Kamakhya.",
        images: [
          "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/20/f375af75a20179930ed9e19567ebed13_1000x1000.jpg",
          "https://mysimplesojourn.com/wp-content/uploads/2019/02/Kamakhaya-temple-Guwahati_2-1024x634.jpg",
        ],
        rating: 4.8,
        highlights: [
          "Religious Significance",
          "Panoramic City View",
          "Ambubachi Mela",
        ],
        tips: [
          "Dress conservatively",
          "Be prepared for long queues",
          "Visit early morning",
        ],
        coordinates: { lat: 26.1664, lng: 91.706 },
      },
    ],
  },
  {
    id: "d2",
    name: "Tawang, Arunachal Pradesh",
    description:
      "High‑altitude town with ancient monasteries, snow‑capped peaks and the Indo‑China border passes.",
    image:
      "https://easternroutes.com/wp-content/uploads/2017/12/Sela_Pass_Gate-Tawang-Arunachal_Pradesh.jpg",
    hotels: [
      {
        id: "h3",
        name: "Hotel Polo Towers Shillong",
        price: 7000,
        image:
          "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Polo Grounds, Shillong, Meghalaya",
        description:
          "A well-known hotel in Shillong offering comfortable stays and modern amenities.",
        amenities: ["Free WiFi", "Spa", "Gym", "Restaurant", "Bar"],
        rating: 4.5,
        reviews: [
          {
            name: "Aditya",
            rating: 5,
            text: "Great service and centrally located. The rooms were very clean.",
            date: "2025-07-01",
          },
        ],
        coordinates: { lat: 25.5902, lng: 91.8973 },
      },
      {
        id: "h4",
        name: "Ri Kynjai - Serenity By The Lake",
        price: 11000,
        image:
          "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Umiam Lake, Shillong, Meghalaya",
        description:
          "A luxury resort inspired by Khasi architecture, offering breathtaking views of Umiam Lake.",
        amenities: ["Private Balconies", "Spa", "Restaurant", "Lake View"],
        rating: 4.9,
        reviews: [
          {
            name: "Sneha",
            rating: 5,
            text: "Absolutely paradise! So peaceful and the views are unreal.",
            date: "2025-06-10",
          },
        ],
        coordinates: { lat: 25.6669, lng: 91.9054 },
      },
    ],
    foodPlaces: [
      {
        id: "f3",
        name: "Café Shillong",
        location: "Laitumkhrah, Shillong",
        images: [
          "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        rating: 4.6,
        description:
          "A very popular cafe with a great vibe, live music, and good food.",
        specialties: ["Coffee", "Burgers", "Sizzlers", "Shakes"],
        cleanlinessScore: 9.2,
        averagePrice: 1000,
      },
    ],
    sites: [
      {
        id: "s3",
        name: "Living Root Bridge",
        description:
          "Famous bio-engineering wonders where bridges are grown from the roots of rubber trees by the Khasi tribes.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/5/51/Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg",
          "https://meghtour.web-assets.org/cdn-cgi/image/format=auto,width=1366,quality=90,fit=scale-down,slow-connection-quality=45/explore/destinations/interest/living-root-bridge-banner.jpeg",
        ],
        rating: 4.9,
        highlights: [
          "Bio-Engineering",
          "Trekking",
          "Nature Walk",
          "Unique Scenery",
        ],
        tips: [
          "Requires moderate trekking",
          "Wear good shoes",
          "Visit Mawlynnong",
        ],
        coordinates: { lat: 25.2604, lng: 91.686 },
      },
      {
        id: "s4",
        name: "Nohkalikai Falls",
        description:
          "The tallest plunge waterfall in India, located near Cherrapunji, one of the wettest places on earth.",
        images: [
          "https://s7ap1.scene7.com/is/image/incredibleindia/noh-ka-likai-falls-cherrapunjee-meghalaya-2-attr-hero?qlt=82&ts=1751460275793",
        ],
        rating: 4.7,
        highlights: [
          "Tallest Plunge Waterfall",
          "Scenic Viewpoint",
          "Near Cherrapunji",
        ],
        tips: [
          "Best viewed during monsoon",
          "Can be foggy",
          "Entry fee required",
        ],
        coordinates: { lat: 25.2892, lng: 91.6917 },
      },
    ],
  },
  {
    id: "d3",
    name: "Gangtok, Sikkim",
    description:
      "Capital of Sikkim with Himalayan vistas, monasteries and adventure spots like Nathula Pass.",
    image:
      "https://www.atithitourandtravel.com/wp-content/uploads/2018/07/Gangtok.jpg",
    hotels: [
      {
        id: "h5",
        name: "Mayfair Spa Resort & Casino",
        price: 12500,
        image:
          "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Lower Samdur Block, Gangtok, Sikkim",
        description:
          "An award-winning luxury resort offering a casino, spa, and stunning valley views.",
        amenities: [
          "Free WiFi",
          "Casino",
          "Spa",
          "Pool",
          "Multiple Restaurants",
        ],
        rating: 4.8,
        reviews: [
          {
            name: "Vikram",
            rating: 5,
            text: "Pure luxury. The best hotel in Gangtok, hands down.",
            date: "2025-05-20",
          },
        ],
        coordinates: { lat: 27.3175, lng: 88.583 },
      },
      {
        id: "h6",
        name: "Tashiling Residency Hotel & Spa",
        price: 5000,
        image:
          "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Kazi Rd, Gangtok, Sikkim",
        description:
          "A comfortable hotel in the heart of Gangtok with a relaxing spa.",
        amenities: ["Free WiFi", "Spa", "Restaurant"],
        rating: 4.4,
        reviews: [],
        coordinates: { lat: 27.3314, lng: 88.6148 },
      },
    ],
    foodPlaces: [
      {
        id: "f4",
        name: "Taste of Tibet",
        location: "MG Marg, Gangtok",
        images: [
          "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        rating: 4.5,
        description:
          "Authentic Tibetan cuisine, famous for its momos and thukpa.",
        specialties: ["Momos", "Thukpa", "Shyaphale", "Thenthuk"],
        cleanlinessScore: 9.0,
        averagePrice: 700,
      },
    ],
    sites: [
      {
        id: "s5",
        name: "Tsomgo Lake (Changu Lake)",
        description:
          "A glacial lake located at a high altitude. The lake is revered by the local Sikkimese people.",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/cd/ac/a3/tsomgo-lake.jpg?w=1200&h=-1&s=1",
        ],
        rating: 4.8,
        highlights: [
          "Glacial Lake",
          "High Altitude",
          "Yak Rides",
          "Scenic Beauty",
        ],
        tips: [
          "Requires a permit",
          "Can be very cold",
          "Risk of altitude sickness",
        ],
        coordinates: { lat: 27.3746, lng: 88.7618 },
      },
      {
        id: "s6",
        name: "Rumtek Monastery",
        description:
          "A large, beautiful monastery, it is the seat of the Karmapa Lama.",
        images: [
          "https://www.trawell.in/admin/images/upload/723415296Gangtok_Rumtek_Monastery_Main.jpg",
        ],
        rating: 4.6,
        highlights: [
          "Buddhist Monastery",
          "Architecture",
          "Spiritual",
          "Valley View",
        ],
        tips: [
          "Check prayer timings",
          "Dress modestly",
          "Photography might be restricted",
        ],
        coordinates: { lat: 27.2917, lng: 88.5583 },
      },
    ],
  },
  {
    id: "d4",
    name: "Arunachal Pradesh",
    description:
      "The 'Land of the Dawn-Lit Mountains', known for its stunning monasteries and remote Himalayan beauty.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/giant-budhha-statue-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1742178821432",
    hotels: [
      {
        id: "h7",
        name: "Hotel Tawang Inn",
        price: 4500,
        image:
          "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Tawang, Arunachal Pradesh",
        description:
          "A cozy inn offering warm hospitality and stunning views of the Tawang Valley.",
        amenities: ["Free WiFi", "Room Heater", "Restaurant", "Room Service"],
        rating: 4.3,
        reviews: [],
        coordinates: { lat: 27.5872, lng: 91.8601 },
      },
      {
        id: "h8",
        name: "Dondrub Homestay",
        price: 2500,
        image:
          "https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Near Tawang Monastery, Tawang",
        description:
          "Experience authentic Monpa hospitality and home-cooked food.",
        amenities: ["Home-cooked Meals", "Clean Rooms", "Cultural Immersion"],
        rating: 4.9,
        reviews: [],
        coordinates: { lat: 27.5879, lng: 91.8595 },
      },
    ],
    foodPlaces: [
      {
        id: "f5",
        name: "Dragon's Cafe",
        location: "Near Tawang War Memorial, Tawang",
        images: [
          "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        rating: 4.6,
        description:
          "A popular cafe known for its good food and views, run by the Indian Army.",
        specialties: ["Momos", "Noodles", "Coffee", "Samosas"],
        cleanlinessScore: 9.5,
        averagePrice: 500,
      },
    ],
    sites: [
      {
        id: "s7",
        name: "Tawang Monastery",
        description:
          "The largest monastery in India and second largest in the world. A vital center of Tibetan Buddhism.",
        images: [
          "https://media1.thrillophilia.com/filestore/nigyng7w10scygecc4c4b62bmg6h_tawang-monastery-1.jpg",
        ],
        rating: 4.9,
        highlights: [
          "Largest Monastery",
          "Buddhist Culture",
          "Stunning Architecture",
        ],
        tips: [
          "Visit during morning prayers",
          "Dress respectfully",
          "Museum inside is a must-visit",
        ],
        coordinates: { lat: 27.588, lng: 91.8594 },
      },
      {
        id: "s8",
        name: "Sela Pass",
        description:
          "A high-altitude mountain pass at 13,700 ft, known for its scenic beauty and the Sela Lake.",
        images: [
          "https://hblimg.mmtcdn.com/content/hubble/img/tawangdestimgs/mmt/activities/m_Sela_Pass_1_l_426_640.jpg",
        ],
        rating: 4.8,
        highlights: [
          "High-Altitude Pass",
          "Sela Lake",
          "Snowfall",
          "Scenic Drive",
        ],
        tips: [
          "Can be very cold",
          "Risk of altitude sickness",
          "Often has snow",
        ],
        coordinates: { lat: 27.4925, lng: 92.1056 },
      },
    ],
  },
  {
    id: "d5",
    name: "Nagaland",
    description:
      "The 'Land of Festivals', home to diverse indigenous tribes, vibrant culture, and the historic capital of Kohima.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/dimapur-nagaland-travel-masthead-hero?qlt=82&ts=1727368339099",
    hotels: [
      {
        id: "h9",
        name: "Hotel Vivor",
        price: 6000,
        image:
          "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Kohima, Nagaland",
        description:
          "A modern hotel in Kohima offering luxury amenities and great service.",
        amenities: ["Free WiFi", "Restaurant", "Gym", "Event Hall"],
        rating: 4.6,
        reviews: [],
        coordinates: { lat: 25.6586, lng: 94.1032 },
      },
    ],
    foodPlaces: [
      {
        id: "f6",
        name: "Naga Kitchen",
        location: "Kohima, Nagaland",
        images: [
          "https://images.pexels.com/photos/5641088/pexels-photo-5641088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        rating: 4.7,
        description: "The best place to try authentic Naga cuisine.",
        specialties: [
          "Smoked Pork with Bamboo Shoot",
          "Axone",
          "Raja Mircha Chutney",
        ],
        cleanlinessScore: 9.0,
        averagePrice: 1000,
      },
    ],
    sites: [
      {
        id: "s9",
        name: "Kohima War Cemetery",
        description:
          "A memorial dedicated to the soldiers of the 2nd British Division who died in WWII.",
        images: [
          "https://s7ap1.scene7.com/is/image/incredibleindia/kohima-war-cemetery-kohima-nagaland-1-attr-hero?qlt=82&ts=1727012356754",
        ],
        rating: 4.8,
        highlights: [
          "Historical Site",
          "Well-Maintained",
          "Peaceful",
          "WWII History",
        ],
        tips: ["Read the inscriptions", "Maintain silence", "Open all days"],
        coordinates: { lat: 25.6698, lng: 94.1084 },
      },
      {
        id: "s10",
        name: "Kisama Heritage Village",
        description:
          "The venue for the famous Hornbill Festival, this village showcases the traditions of all Naga tribes.",
        images: [
          "https://images.pexels.com/photos/15170068/pexels-photo-15170068/free-photo-of-wood-house-in-kisama-heritage-village.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        rating: 4.7,
        highlights: [
          "Hornbill Festival",
          "Naga Culture",
          "Traditional Huts (Morungs)",
        ],
        tips: [
          "Best to visit during Hornbill (Dec 1-10)",
          "Otherwise, mostly empty",
        ],
        coordinates: { lat: 25.603, lng: 94.1118 },
      },
    ],
  },
  {
    id: "d6",
    name: "Manipur",
    description:
      "The 'Jewel of India', a land of serene landscapes, classical dance, and the floating Loktak Lake.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Breathtaking_beauty_of_Dzukou_Valley_in_Manipur-Nagaland_border_%28edit%29.jpg/250px-Breathtaking_beauty_of_Dzukou_Valley_in_Manipur-Nagaland_border_%28edit%29.jpg",
    hotels: [
      {
        id: "h10",
        name: "The Classic Hotel",
        price: 7500,
        image:
          "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        images: [
          "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        location: "Imphal, Manipur",
        description:
          "One of the best luxury hotels in Imphal, offering modern comforts.",
        amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant"],
        rating: 4.5,
        reviews: [],
        coordinates: { lat: 24.807, lng: 93.9318 },
      },
    ],
    foodPlaces: [
      {
        id: "f7",
        name: "Ima Keithel (Mother's Market) Stalls",
        location: "Imphal, Manipur",
        images: [
          "https://images.pexels.com/photos/13529367/pexels-photo-13529367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        rating: 4.6,
        description:
          "Try authentic Manipuri street food at stalls run by women.",
        specialties: ["Singju (Salad)", "Eromba", "Paknam", "Keli Chana"],
        cleanlinessScore: 8.0,
        averagePrice: 200,
      },
    ],
    sites: [
      {
        id: "s11",
        name: "Loktak Lake",
        description:
          "The largest freshwater lake in NE India, famous for its 'phumdis' (floating islands).",
        images: [
          "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/bw-travel/media/media_files/2025/05/15/Ixn6qd9m52TpTViMKO5N.png",
        ],
        rating: 4.9,
        highlights: [
          "Floating Islands (Phumdis)",
          "Boating",
          "Keibul Lamjao National Park",
        ],
        tips: [
          "Take a boat ride",
          "Visit the floating park",
          "Best time: Post-monsoon",
        ],
        coordinates: { lat: 24.5372, lng: 93.785 },
      },
      {
        id: "s12",
        name: "Ima Keithel (Mother's Market)",
        description:
          "A 500-year-old market run exclusively by women. A unique cultural experience.",
        images: [
          "https://images.pexels.com/photos/14104279/pexels-photo-14104279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        rating: 4.7,
        highlights: [
          "All-Women Market",
          "Local Handicrafts",
          "Textiles",
          "Local Life",
        ],
        tips: [
          "Respect the vendors",
          "Good place for souvenirs",
          "Bargaining is common",
        ],
        coordinates: { lat: 24.8143, lng: 93.9427 },
      },
    ],
  },
];

// === POPULAR PACKAGES ===
// src/data/mockData.js

export const popularPackages = [
  {
    id: "p1",
    title: "Assam Wildlife Safari",
    image:
      "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2023/11/kaziranga-national-park.jpg",
    price: 15000,
    rating: 4.9,
    duration: 5,
    items: [
      "Kaziranga Jeep Safari",
      "Elephant Safari",
      "Tea Garden Tour",
      "Kamakhya Temple Visit",
    ],
  },
  {
    id: "p2",
    title: "Meghalaya Living Bridges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNae6hxDzC6H5UlYfUbEuA1ue0fb2ELDECPA&s",
    price: 18000,
    rating: 4.8,
    duration: 6,
    items: [
      "Shillong City Tour",
      "Cherrapunji Waterfalls",
      "Living Root Bridge Trek",
    ],
  },
  {
    id: "p3",
    title: "Sikkim Mountain Vistas",
    image: "https://peakvisor.com/photo/sikkim.jpg",
    price: 22000,
    rating: 4.9,
    duration: 7,
    items: ["Gangtok City Tour", "Tsomgo Lake Visit", "Rumtek Monastery"],
  },
  {
    id: "p4",
    title: "Tawang Monastery Trail",
    image:
      "https://www.luxurytrailsofindia.com/wp-content/uploads/2016/07/Tawang-Monastery-1.jpg",
    price: 25000,
    rating: 4.8,
    duration: 8,
    items: [
      "Tawang Monastery",
      "Sela Pass",
      "Bum La Pass",
      "Guwahati Transfer",
    ],
  },
  {
    id: "p5",
    title: "Majuli River Island Retreat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Majuli_Island.jpg",
    price: 13500,
    rating: 4.7,
    duration: 4,
    items: [
      "Ferry to Majuli Island",
      "Satra Monastery Tour",
      "Cycle Ride in Villages",
      "Assamese Cultural Evening",
    ],
  },
  {
    id: "p6",
    title: "Arunachal Hidden Valleys",
    image:
      "https://imgs.search.brave.com/NPhEXvlAX2a6ttOkfpp4BCBEh0b4xVASja5BorVzLRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnRyaXBvdG8uY29t/L21lZGlhL2ZpbHRl/ci9ubC9pbWcvMjMz/MTM3My9JbWFnZS8x/Njg1OTc3NDMxX2No/dWdfdmFsbGV5X2Js/b2dfMS5qcGcud2Vi/cA",
    price: 28000,
    rating: 5.0,
    duration: 9,
    items: [
      "Ziro Valley Music Fest",
      "Apatani Tribal Homestay",
      "Rafting on Siang River",
    ],
  },
];

// === POPULAR HOTELS ===
export const popularHotels = [
  {
    id: "h1",
    name: "Vivanta Guwahati",
    location: "Guwahati, Assam",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 9500,
    type: "Luxury",
  },
  {
    id: "h4",
    name: "Ri Kynjai - Serenity By The Lake",
    location: "Shillong, Meghalaya",
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 11000,
    type: "Resort",
  },
  {
    id: "h5",
    name: "Mayfair Spa Resort & Casino",
    location: "Gangtok, Sikkim",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 12500,
    type: "Luxury",
  },
  {
    id: "h7",
    name: "Hotel Tawang Inn",
    location: "Tawang, Arunachal Pradesh",
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 4500,
    type: "Mountain Inn",
  },
];

// === POPULAR RESTAURANTS ===
export const popularRestaurants = [
  {
    id: "f1",
    name: "Khorikaa",
    location: "Guwahati, Assam",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/10580551/pexels-photo-10580551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Assamese",
    price: "$$",
  },
  {
    id: "f3",
    name: "Café Shillong",
    location: "Shillong, Meghalaya",
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Multi-Cuisine",
    price: "$$",
  },
  {
    id: "f4",
    name: "Taste of Tibet",
    location: "Gangtok, Sikkim",
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Tibetan",
    price: "$",
  },
  {
    id: "f6",
    name: "Naga Kitchen",
    location: "Kohima, Nagaland",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/5641088/pexels-photo-5641088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cuisine: "Naga",
    price: "$$",
  },
];

// === POPULAR SITES ===
export const popularSites = [
  {
    id: "s1",
    name: "Kaziranga National Park",
    location: "Assam",
    rating: 4.9,
    image:
      "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2022/11/Kaziranga-National-Park-in-Assam_1553856939.jpg",
    price: 1000,
    description: "Home of the One-Horned Rhino",
  },
  {
    id: "s3",
    name: "Living Root Bridge",
    location: "Meghalaya",
    rating: 4.9,
    image:
      "https://travenjo.com/wp-content/uploads/2019/06/Living-Root-Bridge-Mawlynnong-.jpg?x58748",
    price: 100,
    description: "Bio-engineering marvel",
  },
  {
    id: "s5",
    name: "Tsomgo Lake",
    location: "Sikkim",
    rating: 4.8,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/cd/ac/a3/tsomgo-lake.jpg?w=1200&h=-1&s=1",
    price: 150,
    description: "High-altitude glacial lake",
  },
  {
    id: "s7",
    name: "Tawang Monastery",
    location: "Arunachal Pradesh",
    rating: 4.9,
    image:
      "https://media1.thrillophilia.com/filestore/nigyng7w10scygecc4c4b62bmg6h_tawang-monastery-1.jpg",
    price: 50,
    description: "Largest monastery in India",
  },
];

// === POPULAR TRAVEL AGENCIES ===
export const popularAgencies = [
  {
    id: "a1",
    name: "North East Adventures",
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialty: "Wildlife & Trekking",
    destinations: 7,
    description:
      "Your specialist for wildlife, trekking, and cultural tours across all 7 sisters of North East India.",
    years: 10,
    clients: 1200,
    services: [
      "Jeep Safaris",
      "Trekking Guides",
      "Cultural Immersion",
      "Monastery Tours",
      "Permit Assistance",
    ],
  },
  {
    id: "a2",
    name: "Himalayan Escapes",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialty: "Sikkim & Arunachal",
    destinations: 5,
    description:
      "Experts in high-altitude adventures, monastery circuits, and permit-required travel.",
    years: 12,
    clients: 950,
    services: [
      "Nathu La Pass Tours",
      "Tawang Monastery Trips",
      "High-Altitude Trekking",
      "Private Drivers",
    ],
  },
  {
    id: "a3",
    name: "Meghalaya Trekkers",
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialty: "Caving & Root Bridges",
    destinations: 3,
    description:
      "Get off the beaten path with our caving, waterfall, and living root bridge trekking experts.",
    years: 8,
    clients: 700,
    services: [
      "Caving Expeditions",
      "Living Root Bridge Treks",
      "Waterfall Hops",
    ],
  },
  {
    id: "a4",
    name: "Assam Heritage Tours",
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/2082109/pexels-photo-2082109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialty: "Tea Gardens & River Cruises",
    destinations: 6,
    description:
      "Discover Assam’s tea trails, Brahmaputra river cruises, and cultural tours showcasing traditional villages and wildlife.",
    years: 9,
    clients: 1100,
    services: [
      "Tea Estate Visits",
      "Brahmaputra River Cruise",
      "Cultural Village Tours",
      "Wildlife Safaris",
      "Local Handicraft Experiences",
    ],
  },
  {
    id: "a5",
    name: "Nagaland Explorer Co.",
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialty: "Tribal & Festival Tours",
    destinations: 4,
    description:
      "Experience Nagaland’s vibrant tribal heritage, Hornbill Festival, and scenic mountain adventures with local experts.",
    years: 11,
    clients: 850,
    services: [
      "Hornbill Festival Packages",
      "Tribal Village Homestays",
      "Mountain Trekking",
      "Cultural Workshops",
      "Local Guide Assistance",
    ],
  },
];

// === EXPERIENCES ===

export const experiences = [
  {
    id: "exp1",
    title: "Kaziranga Wildlife & Tea Estate Retreat",
    subtitle: "5-day luxury wilderness escape",
    agencyId: "a1",
    price: "Rs. 1,200",
    duration: "5 days",
    destinations: ["Guwahati", "Kaziranga", "Jorhat"],
    image:
      "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2025/10/Hathikhuli.jpg",
    overview:
      "Explore the UNESCO-listed Kaziranga National Park, home to the one-horned rhino, and relax in colonial-style tea bungalows surrounded by lush plantations.",
    includes: [
      "4×4 jungle safaris",
      "Luxury bungalow stay",
      "All meals & transfers",
      "Tea garden walk",
      "Cultural evening with Bihu dance",
    ],
    highlights: [
      "Elephant & jeep safaris",
      "Visit to tea factory",
      "Brahmaputra sunset cruise",
      "Local Assamese cuisine workshop",
    ],
    rating: 4.9,
    reviews: 58,
  },
  {
    id: "exp2",
    title: "Meghalaya Living Root Bridges & Waterfalls Trail",
    subtitle: "6-day adventure through the Abode of Clouds",
    agencyId: "a3",
    price: "Rs. 950",
    duration: "6 days",
    destinations: ["Shillong", "Cherrapunji", "Mawlynnong", "Dawki"],
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqxNDCosTTiwSZ4p2vpj2-z8wduZEWc2K1tIo8lECA7X7PPCeh5-DGprId9DFIwHHyO1vOwDz_jEZ0vwnANlKSuTnOEdmt4qTMbuIpBR2PbsUzob0NUvTV98tvxJ9CDUN1L5kZfVPhuZw/w1200-h630-p-k-no-nu/The+living+root+bridges+of+Meghalaya+-+one+of+the+best+monsoon+holiday+destinations+of+India.JPG",
    overview:
      "Trek through misty forests, cross centuries-old living root bridges, and kayak on crystal-clear rivers in one of the cleanest villages in Asia.",
    includes: [
      "Boutique homestay accommodation",
      "Daily breakfast & dinner",
      "Guided treks",
      "Private transfers",
      "Entry fees & permits",
    ],
    highlights: [
      "Double-decker root bridge hike",
      "Nohkalikai Falls viewpoint",
      "Boating in Dawki River",
      "Village eco-walk in Mawlynnong",
    ],
    rating: 5.0,
    reviews: 72,
  },
  {
    id: "exp3",
    title: "Tawang Monastery & Himalayan Culture Expedition",
    subtitle: "7-day high-altitude spiritual adventure",
    agencyId: "a5",
    price: "Rs. 1,500",
    duration: "7 days",
    destinations: ["Guwahati", "Bomdila", "Tawang", "Dirang"],
    image:
      "https://c8.alamy.com/comp/D1XT3W/monk-sitting-tawang-monastery-arunachal-pradesh-india-the-largest-D1XT3W.jpg",
    overview:
      "Journey through winding Himalayan passes to visit ancient monasteries, alpine lakes, and meet the warm-hearted Monpa people.",
    includes: [
      "All permits (ILP)",
      "Mountain lodge stays",
      "Breakfast & dinner",
      "Local guide & driver",
      "Cultural interactions",
    ],
    highlights: [
      "Visit 400-year-old Tawang Monastery",
      "Sela Pass (13,700 ft)",
      "PT Tso Lake photography stop",
      "Monpa handicraft shopping",
    ],
    rating: 4.8,
    reviews: 46,
  },
  {
    id: "exp4",
    title: "Hornbill Festival & Naga Village Experience",
    subtitle: "5-day cultural celebration of Nagaland",
    agencyId: "a7",
    price: "Rs. 1,100",
    duration: "5 days",
    destinations: ["Kohima", "Khonoma", "Touphema"],
    image:
      "https://www.shikhar.com/blog/wp-content/uploads/2020/12/Nagaland-Hornbill-festival-1024x680.jpg",
    overview:
      "Attend the world-famous Hornbill Festival, discover warrior heritage, and stay in traditional villages with authentic Naga hospitality.",
    includes: [
      "Festival entry passes",
      "Village homestay",
      "Guided heritage tours",
      "Local meals",
      "All transfers",
    ],
    highlights: [
      "Tribal dance performances",
      "Local rice beer tasting",
      "Khonoma green village walk",
      "Traditional craft market",
    ],
    rating: 4.9,
    reviews: 63,
  },
  {
    id: "exp5",
    title: "Ziro Valley Music & Nature Escape",
    subtitle: "4-day Apatani culture & music immersion",
    agencyId: "a6",
    price: "Rs. 800",
    duration: "4 days",
    destinations: ["Ziro", "Itanagar"],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/5f/26/e2/concert.jpg?w=700&h=-1&s=1",
    overview:
      "Relax amid rice paddies and pine hills in Ziro Valley. Attend the world-famous Ziro Music Festival and explore unique Apatani tribal culture.",
    includes: [
      "Festival tickets",
      "Eco-lodge stay",
      "Daily meals",
      "Guided village tours",
      "Local transport",
    ],
    highlights: [
      "Live indie music festival",
      "Apatani tribal village walk",
      "Local craft markets",
      "Bonfire nights under the stars",
    ],
    rating: 4.7,
    reviews: 51,
  },
  {
    id: "exp6",
    title: "Sikkim Monastery & Lake Tour",
    subtitle: "6-day scenic Himalayan journey",
    agencyId: "a4",
    price: "Rs. 1,350",
    duration: "6 days",
    destinations: ["Gangtok", "Tsomgo Lake", "Pelling", "Ravangla"],
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-sikkim-tri-hero?qlt=82&ts=1727167195792",
    overview:
      "Discover Sikkim’s breathtaking lakes, monasteries, and snow-capped peaks on this serene spiritual and scenic adventure.",
    includes: [
      "All permits (ILP)",
      "Luxury hotel stays",
      "Breakfast & dinner",
      "Private vehicle & guide",
      "Entrance fees",
    ],
    highlights: [
      "Rumtek & Pemayangtse monasteries",
      "Tsomgo & Khecheopalri Lakes",
      "Kanchenjunga viewpoints",
      "Ravangla Buddha Park",
    ],
    rating: 5.0,
    reviews: 48,
  },
  {
    id: "exp7",
    title: "Mizoram Hills & Handloom Trail",
    subtitle: "5-day offbeat cultural circuit",
    agencyId: "a8",
    price: "Rs. 850",
    duration: "5 days",
    destinations: ["Aizawl", "Reiek", "Hmuifang"],
    image:
      "https://static2.tripoto.com/media/filter/tst/img/371044/TripDocument/1543731240_trek_to_reiek_peak_i.jpg.webp",
    overview:
      "Experience Mizoram’s tranquil hills, traditional handlooms, and folk music while staying in scenic village lodges.",
    includes: [
      "Homestay accommodation",
      "Local guide",
      "Daily breakfast & dinner",
      "Cultural performance",
      "Transfers & permits",
    ],
    highlights: [
      "Reiek Tlang viewpoint trek",
      "Visit Mizo handloom centers",
      "Local bamboo cuisine",
      "Evening folk dance show",
    ],
    rating: 4.6,
    reviews: 39,
  },
  {
    id: "exp8",
    title: "Tripura Royal Heritage & Nature Tour",
    subtitle: "4-day palace and lake experience",
    agencyId: "a2",
    price: "Rs. 700",
    duration: "4 days",
    destinations: ["Agartala", "Ujjayanta Palace", "Neermahal", "Rudrasagar"],
    image:
      "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/tripura/7-day-trip-tripura-a-week-in-the-crown-of-the-east/1-ujjayanta-palace-tripura-tri-iter-day1.jpg",
    overview:
      "Explore Tripura’s royal heritage, serene lakes, and temples surrounded by forested hills.",
    includes: [
      "Heritage hotel stay",
      "Private guide",
      "All meals",
      "Boat ride at Rudrasagar Lake",
      "Airport transfers",
    ],
    highlights: [
      "Ujjayanta Palace Museum",
      "Boat to Neermahal Water Palace",
      "Tripura Sundari Temple visit",
      "Local tribal market walk",
    ],
    rating: 4.8,
    reviews: 34,
  },
];
