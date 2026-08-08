import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Camera,
  Compass,
  Crown,
  Gem,
  Globe2,
  HeartHandshake,
  Hotel,
  Map,
  Mountain,
  Palmtree,
  Plane,
  Sailboat,
  ShieldCheck,
  ShipWheel,
  Sparkles,
  Sun,
  TicketsPlane,
  TreePalm,
  Users,
  Utensils
} from "lucide-react";

export interface PackageItem {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  type: "Indian Tour" | "International Tour";
  category: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  description: string;
  itinerary: [string, string][];
  inclusions: string[];
  exclusions: string[];
}

export const packages: PackageItem[] = [
  {
    "slug": "chandigarh-kullu-manali-happyflying",
    "title": "Chandigarh  Kullu - Manali-happyflying",
    "location": "Chandigarh  Kullu - Manali-happyflying",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1585,
    "image": "/assets/images/uttarkhand1.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "Indian Tour"
    ],
    "description": "( Approx 120 km ) Arrive at Chandigarh airport/railway station. Proceed to Shimla,  Reach  . Check-in the hotel and relax for the day. Enjoy the delicious dinner from the hotel and...",
    "itinerary": [
      [
        "Day 1 - Chandigarh   -  Shimla ",
        "( Approx 120 km ) Arrive at Chandigarh airport/railway station. Proceed to Shimla,  Reach  . Check-in the hotel and relax for the day. Enjoy the delicious dinner from the hotel and overnight stay at Shimla hotel."
      ],
      [
        "Day 02 ",
        "- Shimla Sightseeing After breakfast, sightseeing of places in and around Shimla, Kufri is famous for its Himalayan National Park, Poney and Yak Ride and One can see the endless Himalayan Panorama from Kufri, after that in the evening Visit Mall road ,  back to the hotel and Overnight Stay at the hotel."
      ],
      [
        "Day 03 ",
        "- Shimla- Manali  via Kullu  (Approx 232 Kms) After breakfast & check out the hotel & depart to Manali .  Enroute to Kullu Shawl factory & enjoy the River Rafting (At your own cost). After that, proceed to Shimla .Reach Shimla then check into the hotel. Overnight stay at Manali."
      ],
      [
        "Day 04 ",
        "- Manali Sightseeing After breakfast, visit sightseeing places in and around Manali, such as Hadimba Temple, Club House, Vashisht Bath, Van Vihar, and Tibetan Monastery. After that return to the hotel for an overnight stay."
      ],
      [
        "Day 05 ",
        "- Solang Valley Sightseeing - Shimla After breakfast, I visited the Solang Valley Sightseeing . Here you can enjoy adventure activities like - Sikking, Snow Biking, Pony Ride , Paragliding, Zorbing . ( All activity on direct payment basis ) ( If Time permits )  .  after That Proceed to Shimla. Reach Shimla then check in to the hotel & Overnight stay at the hotel. Notes :- Activities on direct payment basis ."
      ],
      [
        "Day 06 ",
        "- Shimla - Chandigarh  Departure ( Approx 120 Kms ) After breakfast, check-out from the hotel, proceed to Chandigarh . Reach Chandigarh  Directly drop to Chandigarh Airport / Railway Station  . INCLUSIONS:- · Welcome drink (non alcoholic). · Accommodation in 4 Star. .  Meal Plan: ( APAI- 5 B/f + 5 Lunch + 5 Dinner Only.) ·  Sightseeing and long run as per itinerary. ·  Inclusive of all taxes. .  2 x 500 ml water bottles per pax per day . .  1 room FOC  BASIS EXCLUSIONS:- Personal expenses / Train/Air fare /  GST 5% / English speaking spot Guide/ / Entry tickets / Atul Tunnel/ Rohtang pass ."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "darjeeling-gangtok-tour-package-8-nights-9-days",
    "title": "Darjeeling & Gangtok Tour Package – 8 Nights & 9 Days",
    "location": "Darjeeling & Gangtok   – 8 Nights & 9 Days",
    "duration": "9 Days / 8 Nights",
    "price": "₹29,300 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 514,
    "image": "/assets/images/darjleeng.jpeg",
    "tags": [
      "Heritage & Nature",
      "9 Days",
      "Indian Tour"
    ],
    "description": "Bagdogra / New Jalpaiguri – Gangtok Arrival: Arrive at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP). Transfer to Gangtok: The drive takes about 4-5 hours (125 km)...",
    "itinerary": [
      [
        "Day 01",
        "Bagdogra / New Jalpaiguri – Gangtok Arrival: Arrive at Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP). Transfer to Gangtok: The drive takes about 4-5 hours (125 km). Check-in: Upon arrival, check into your hotel. Evening at Leisure: Explore MG Road, the main street in Gangtok, for some shopping and local food."
      ],
      [
        "Day 02",
        "Gangtok Local Sightseeing Tashi Viewpoint: Panoramic views of the Kanchenjunga range. Ganesh Tok: A small temple with great views. Hanuman Tok: Another viewpoint and a temple dedicated to Hanuman. Enchey Monastery: A serene and beautiful monastery. Banjhakri Falls: A picturesque waterfall amidst lush greenery. Institute of Tibetology: Learn about Tibetan culture and history. Flower Exhibition Center: A variety of exotic flowers and orchids."
      ],
      [
        "Day 03",
        "Excursion Trip to Tsomgo Lake & Baba Mandir (New) Tsomgo Lake: A beautiful glacial lake at an altitude of 12,310 feet. Baba Harbhajan Singh Mandir: A shrine dedicated to an Indian army soldier. Nathula Pass (Optional): If open, you can visit the India-China border (requires special permit)."
      ],
      [
        "Day 04",
        "Gangtok to Pemayangtse Transfer to Pemayangtse: Drive (approx. 5 hours, 110 km). Check-in: Check into your hotel. Pemayangtse Monastery: Visit the ancient and significant monastery."
      ],
      [
        "Day 05",
        "Pemayangtse Local Sightseeing Rabdentse Ruins: Historical ruins of the former capital of Sikkim. Sangachoeling Monastery: One of the oldest monasteries in Sikkim. Khecheopalri Lake (Optional): A sacred lake, about 1.5-hour drive from Pemayangtse."
      ],
      [
        "Day 06",
        "Pemayangtse to Darjeeling Transfer to Darjeeling: Drive (approx. 4-5 hours, 75 km). Check-in: Check into your hotel. Evening at Leisure: Explore the local markets and enjoy the views."
      ],
      [
        "Day 07",
        "Darjeeling Local Sightseeing (9 AM to 5 PM) Tiger Hill: Early morning visit for sunrise over Kanchenjunga. Batasia Loop: A spiral railway track with a garden. Ghoom Monastery: One of the oldest Tibetan monasteries in Darjeeling. Himalayan Mountaineering Institute: Learn about the history of mountaineering. Padmaja Naidu Himalayan Zoological Park: Home to rare Himalayan animals. Japanese Peace Pagoda: A serene pagoda with beautiful views. Darjeeling Ropeway: Enjoy a cable car ride for panoramic views."
      ],
      [
        "Day 08",
        "Transfer to Kalimpong & Later Local Sightseeing Transfer to Kalimpong: Drive (approx. 2.5 hours, 50 km). Check-in: Check into your hotel. Local Sightseeing: Deolo Hill: Panoramic views of the Teesta River and surrounding valleys. Durpin Dara Hill: Offers great views of the town and the mountains. Zang Dhok Palri Phodang Monastery: Houses rare scriptures. Flower Nurseries: Kalimpong is known for its flower nurseries, especially orchids and cacti."
      ],
      [
        "Day 09",
        "Kalimpong – New Jalpaiguri / Bagdogra Transfer to Bagdogra / New Jalpaiguri: Drive (approx. 2.5 hours, 70 km) for your onward journey."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "darjeeling-and-gangtok-happyflying",
    "title": "Darjeeling and gangtok-happyflying",
    "location": "Darjeeling and gangtok-happyflying",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 906,
    "image": "/assets/images/gangtok.jpeg",
    "tags": [
      "Heritage & Nature",
      "4 Days",
      "Indian Tour"
    ],
    "description": "-  IXB Airport – Gangtok (120 kms / 5 hrs) Meet & Greet on arrival at  IXB Airport & transfer to Gangtok (5,500 ft.). On arrival Check-in to hotel & rest of the day at leisure. Ove...",
    "itinerary": [
      [
        "Day 01 ",
        "-  IXB Airport – Gangtok (120 kms / 5 hrs) Meet & Greet on arrival at  IXB Airport & transfer to Gangtok (5,500 ft.). On arrival Check-in to hotel & rest of the day at leisure. Overnight stay at Gangtok."
      ],
      [
        "Day 02 ",
        "-  Excursion to Tsomgo Lake & Baba Mandir After breakfast, start for an excursion to Tsomgo Lake (12,400 ft.) & Baba Mandir (13,200 ft.) which is 55 kms one way from Gangtok city. Overnight stay atGangtok. (In case of a landslide or any other reason Tsomgo Lake is closed, we will provide alternate sightseeing.)"
      ],
      [
        "Day 03 ",
        "- Gangtok Local Sightseeing – Darjeeling (100 kms / 4 hrs) This morning starts for a half day trip of Gangtok city covering the Flower show, Cottage Industry and Handicraft Centre, Institute of Tibetology, Dro-dul Chorten, Enchey Monastery & Banjakhri Falls (maximum 3-4 hours). Afternoon drive to Darjeeling (6,950 ft.). On arrival check-in to your hotel. Overnight stay at Darjeeling."
      ],
      [
        "Day 04 ",
        "- Darjeeling Sightseeing & Departure Early Morning (at 04:00 am) drive to Tiger hill (8,400 ft.) to watch the spectacular sunrise over Mt. Khangchendzongha (28,208 ft. Worlds 3rd highest peak), on your way back visit Ghoom Monastery and Batasia Loop. After breakfast check out from the hotel & visit Himalayan Mountaineering Institute, P.N. Zoological Park (Thursdayclosed), Tenzing Rock, Tibetan Refugee self-help Centre (Sunday closed), Tea Garden (outer view), Ropeway and Japanese Temple. By afternoon transfer to  IXB Airport for your onward journey. Inclusion :- ·  Accommodation on  4  star. ·  Meal Plan   APAI :- 3 Breakfast + 3 Lunch  + 3 Dinner Only. · Exclusive Non a/c vehicle for transfers & sightseeing. vehicle will not be at disposal it will be available to guests as per itinerary only (point to point basis). ·  All permit fees & hotel taxes (as per itinerary). ·  Rates are valid for INDIAN NATIONALS only. .  2 x 500 ml water bottles per pax per day  . .  2 Pax on a FOC basis. .  Gala Dinner  . Exclusion :- ·  Air Fare / Train fare. ·  Personal Expenses such as Laundry, telephone calls, tips & gratuity, mineral water, soft & hard drinks, rafting, rock climbing, paragliding, joy ride (Toy Train), porterage. · Additional sightseeing or extra usage of vehicles, other than mentioned in the itinerary. ·   Guide charges. ·  Any cost arising due to natural calamities like, landslides, road blockage, political disturbances (strikes), etc (to be borne by the client, which is directly payable on the spot). ·  Any increase in taxes or fuel price, leading to increase in cost on surface transportation & land arrangements, which may come into effect prior to departure. ·  Room Heater Charges. ·  Insurance. .   GST 5%  . ·  Insurance / Nathula Pass ·  Anything which is not included in the inclusion ."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "offbeat-north-east-package",
    "title": "Offbeat North East Package",
    "location": "Offbeat North East",
    "duration": "8 Days / 7 Nights",
    "price": "₹27,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 2158,
    "image": "/assets/images/guwahati.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "Indian Tour"
    ],
    "description": "Arrive Guwahati Meet and assist by The Cat Holidays representative at the Guwahati Airport or Railway Station and transfer to Kaziranga National Park, the home of “One Horned Rhino...",
    "itinerary": [
      [
        "Day 1",
        "Arrive Guwahati Meet and assist by The Cat Holidays representative at the Guwahati Airport or Railway Station and transfer to Kaziranga National Park, the home of “One Horned Rhinoceros”. Arrive and check in at your hotel. Evening free for leisure or explore the local market. Overnight stay in Kaziranga. Optional: Bihu Dance could be organized on request."
      ],
      [
        "Day 2",
        "Kaziranga National Park Early morning explore any one zone of Kaziranga National Park on back of Elephant i.e. Elephant Safari (Optional: Unless it is mentioned in the inclusion). Get up early morning at 5.30 AM and start for both central range ‘Kohora’ and western range ‘Bagori’. At 6:30 AM return to the hotel or resort for breakfast. After breakfast take little rest in the resort or hotel. Afternoon around 01.45 PM you have Jeep Safari in Central range. Return back to resort or hotel. Overnight in Kaziranga."
      ],
      [
        "Day 3",
        "Kaziranga To Nameri After breakfast, transfer to Nameri. On the way to Nameri you will be visiting Tezpur. Tezpur is the city of blood and has a magnificent scenic beauty boasting of Art, Culture and Literature. Visit the Bamuni Hills, The Hazara Pukhmi, Cole Park and Agnigarh. Overnight in Nameri Lodge."
      ],
      [
        "Day 4",
        "Nameri National Park Have your breakfast choose between trekking or rafting. You can go for trekking in the range with a forest guard or later you can go for rafting in Jia Bhorali. Then Visit Nameri National Park. Another important wild life sanctuary of Arunachal Pradesh The Pakhui (Pakke) wild life Sanctuary adjoins the Park on its North-Eastern point. The river Jia- Bhoroli and its tributaries namely the Diji, Dinai, Doigurung, Nameri, Dikorai, Kharietc crisscross the park. Enjoy rafting in the Jia Bhoroli river in the south western boundary. Overnight at Nameri."
      ],
      [
        "Day 5",
        "Nameri To Shillong After breakfast, check out from the hotel and then drive to Shillong. The ‘Gleneagles of the East’ lies in the centre of a plateau surrounded by Khasi hills. En-route visit Umium Lake or Barapani Park. Evening visit famous Police Bazaar of Shillong. Overnight at Shillong."
      ],
      [
        "Day 6",
        "Shillong Sightseeing After breakfast, full day sightseeing of Shillong. The ‘Gleneagles of the East’ lies in the centre of a plateau surrounded by Khasi hills. The gorgeous city offers amazing tourist spots. Visit Don Bosco Museum of Indigenous Culture, Ward’s Lake is popular for short garden walks and boating. Botanical Garden offers plethora of indigenous and exotic plants and rare collection of orchids. Butterfly Museum is a storehouse of finest and rarest species of butterflies and moths. Lady Hydari Park is a Japanese style landscaped park endowed with streaches of roses and exquisite flowers. The Mini Zoo adjacent to the park has about 73 birds, 140 reptiles and mammals. Golf Course is one of the largest Golf courses in Asia. Spend the evening in the splendid arena. State Museum is a display of the lifestyle and heritage of the people of Meghalaya. Elephant Falls is a mountain stream gorging down two successive falls set in dells of fern covered rocks. Shillong Peak displays a mesmerizing view of the scenic country side. A unique spot of Shillong is Archery Stakes. A gambling sport which is held every day (except Sundays) at 4.00 PM. Later come back to hotel. Overnight in Shillong."
      ],
      [
        "Day 7",
        "Shillong To Guwahati After breakfast, come back to Guwahati. Guwahati, Visit numerous temples like Maa Kamakhya Temple, Sukreshwar Temple, Umananda Temple, Navagraha Temple, Bashistha Ashram, Tirupathi Balaji Temple and many more. Visit the Second world war Cemetery, State Museum, State Zoo and Srimanta Sankardeva Kalakshetra (A museum of Assam diverse culture) and Science Museum beside the temples. Optional: Boat Cruise at Brahmaputra River in the evening. Overnight at Guwahati."
      ],
      [
        "Day 8",
        "Departure After breakfast, return back to Guwahati Airport or Railway station for your departure. Your tour ends here with pleasant memories. Tentative Itinerary Note: Above Itinerary is just indicative. Do not consider it as a Final Schedule. Date & Time of Tours can be changed by Local Agent / Tour Operator."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "exquisite-rajasthan-5-nights-and-6-days",
    "title": "Exquisite Rajasthan – 5 Nights and 6 Days",
    "location": "Exquisite Rajasthan – 5 Nights and 6 Days",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.8,
    "reviews": 1855,
    "image": "/assets/images/majestic-tour-rajasthan.jpg",
    "tags": [
      "Heritage & Culture",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Arrive at Udaipur airport and transfer to the hotel. Udaipur, ‘the city of lakes’ is admired for its fairy-tale palaces, lakes, temples, and gardens among many more. Evening at lei...",
    "itinerary": [
      [
        "Day 01 Arrive Udaipur",
        "Arrive at Udaipur airport and transfer to the hotel. Udaipur, ‘the city of lakes’ is admired for its fairy-tale palaces, lakes, temples, and gardens among many more. Evening at leisure. Overnight stay at Udaipur."
      ],
      [
        "Day 02 Udaipur",
        "Breakfast at hotel. Morning city sight seeing tour. Built in 1559 A.D. by Maharaja Udai Singh, the city has been described as the most romantic spot on the continent of India by Col. James Todd. The places of interest include City Palace which has several carved balconies, arches and decorated pillars, Zenana Mahal, Fateh Prakash, Durbar Hall and Shambhu Niwas. Also visit Jagdish temple, Sahelion-ki-Bari (queen’s resort for the friends). Evening Motor launch cruise(Cruise not included) on the placid waters of Lake Pichola. Overnight stay."
      ],
      [
        "Day 03 Udaipur – Jodhpur",
        "After Breakfast & check out from hotel & drive to Jodhpur. Arrive Jodhpur and check in at hotel. Day at leisure and overnight stay."
      ],
      [
        "Day 04 Jodhpur Sightseeing – Jaisalmer",
        "Breakfast at hotel. Proceed for local city sight seeing tour. Jodhpur, stronghold of the fierce Rathore clan, was founded in 1459 by Prince Jodha . Visit the Mehrangarh Fort, situated on a low sandstone hill. Within the fort, visit Moti Mahal and Phool Mahal . Also visit Jaswant Thada , an imposing marble cenotaph, built in memory of Maharaja Jaswant singh II around 1899 and Umaid Public gardens. there after continue drive to Jaisalmer, the golden city of Rajasthan . Overnight at Jaisalmer."
      ],
      [
        "Day 05 Jaisalmer",
        "After breackfast proceed for sightseeing tour of The Golden City – Jaisalmer. Visit the 12th century magnificent fort at Jaisalmer (This is the highlight of the tour). Also visit the beautifully and magnificently carved Havelis of Salim Singh ki Haveli and Patwon ki Haveli and Gandhi Sagar Tank, followed by a visit to the Barabagh Hill. Return back to hotel. Overnight stay."
      ],
      [
        "Day 06 Jaisalmer",
        "After breakfast check out from the hotel and drive to Jaisalmer Railway Station/Airport."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "majestic-tours",
    "title": "majestic tours",
    "location": "majestic s",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1094,
    "image": "/assets/images/majestic-tour-rajasthan.jpg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Arrival – Jaipur You will be greeted upon arrival by our representative who will drive you to charming Pink City, Jaipur offers a plethora of touristic attractions to the traveller...",
    "itinerary": [
      [
        "Day 1",
        "Arrival – Jaipur You will be greeted upon arrival by our representative who will drive you to charming Pink City, Jaipur offers a plethora of touristic attractions to the traveller. The City Palace in the heart of Jaipur is known for its blend of Rajasthani and Mughal architecture. Jaipur- the fabled “pink city” of the desert named after Jai Singh, the former Maharaja of Jaipur. This is the only city in the world symbolizing the nine divisions of the universe through the nine rectangular sectors subdividing it. En route visit Fatehpur Sikri, the famous city of Mughal emperor Akbar. In the evening, can enjoy Dinner at Chokhi Dhani Restaurant. (Ethnic Indian Restaurant serving Vegetarian Rajasthani Cuisine). Overnight in Hotel"
      ],
      [
        "Day 2",
        "Jaipur – Ranthambore After breakfast in the morning drive to Ranthambore . Ranthambore is known all over for it’s Ranthambore National Park that offers more opportunities of sighting of tigers and other fast depleting animals. Enjoy an afternoon canter safari to spot tigers(at additional cost). Stay overnight at hotel."
      ],
      [
        "Day 3",
        "Ranthambore – Agra After Breakfast drive to another historical and romantic city – Agra. Enroute visit Fatehpur Sikri – once the capital of Mughal Emperor Akbar. Also visit the Bulund Darwaza, the largest gateway in the world. On arrival check-in to your hotel"
      ],
      [
        "Day 04",
        "Agra After Breakfast visit The world famous Taj Mahal – the most precious gift of love built by Emperor Shah Jahan for his loving wife Mumtaz and Also visit the Marble inlay making factories to see traditional workers making amazing marble crafts. Overnight stay at Agra."
      ],
      [
        "Day 05 ",
        "Agra – Jaipur After breakfast drive to Jaipur Arrive & Check into the hotel. Jaipur: Beautiful palaces, forts and colourful bazaars speak of the pink city’s glorious regal past. Modernity walks hand-in-hand with history in Jaipur. This largest city of Rajasthan, founded by Maharaja Sawai Jai Singh, is famous for its magnanimous hospitality. Evening explore colorful local market. Overnight at Hotel."
      ],
      [
        "Day 06 ",
        "Departure After breakfast leave for the airport for your return journey back to your home."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "rajasthan-temple-tour",
    "title": "rajasthan temple tour",
    "location": "rajasthan temple",
    "duration": "7 Days / 6 Nights",
    "price": "₹24,900 / person",
    "type": "Indian Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 5,
    "reviews": 1257,
    "image": "/assets/images/rajasthan.jpg",
    "tags": [
      "Pilgrimage & Spiritual",
      "7 Days",
      "Indian Tour"
    ],
    "description": "Arrive Jaipur. Assistance on arrival by our company representative & transfer to your pre booked hotel. Later day free for sightseeing visiting Amber Fort, the Old capital of Jaipu...",
    "itinerary": [
      [
        "Day 01 Arrive Jaipur + Sightseeing",
        "Arrive Jaipur. Assistance on arrival by our company representative & transfer to your pre booked hotel. Later day free for sightseeing visiting Amber Fort, the Old capital of Jaipur Rulers. Later after Amber fort visit The Maharaja’s City Palace Museum, Jai Singh’s Astronomical Observatory [Jantar Mantar] and Hawa Mahal. Evening free at leisure. Overnight stay at Jaipur."
      ],
      [
        "Day 02 Excursion tour to Khatu Shyamji & Salasar Balaji [400 Kms Total Drive]",
        "After early breakfast full day free for an Excursion tour to Khatu Shyamji & Salasar Balaji. After Divine Darshan drive back to Jaipur. Evening free at leisure. Overnight stay at Jaipur."
      ],
      [
        "Day 03 Jaipur to Pushkar & Ajmer [130 Kms 03 Hrs drive]",
        "After Bfast check out from the hotel & proceed to Pushkar. Arrive & check in to your prebooked hotel. Later visit Lord Brahma Temple – Pushkar & Ajmer Khwaja Moinuddin Chisti Dargah. Evening free at leisure. Overnight stay at Pushkar."
      ],
      [
        "Day 04 Pushkar to Udaipur Via Sanwariya Sethji [350 Kms 05 to 06 Hours Drive]",
        "After early bfast check out from the hotel & proceed to Udaipur Via Sanwariya Sethji Temple Visit. Keep Continue your journey to Udaipur. Arrive Udaipur & check in to your prebooked hotel. Overnight stay at Udaipur."
      ],
      [
        "Day 05 Udaipur sightseeing",
        "After bfast full day free for sightseeing visiting Jagdish Temple, City Palace Museum, Crystal Art Gallery, Maharana Pratap Memorial and Sahelion Ki Bari & Fateh Sagar Lake. Evening free at leisure. Overnight stay at Udaipur."
      ],
      [
        "Day 06 Excursion tour to Eklingji & Nathdwara [120 Kms Total Drive]",
        "After breakfast full day free for an excursion tour to Eklingji Lord Shiva Temple. Later proceed to Nathdwara to take the Darshan of Shreenathji. Evening can enjoy the visit to Statue of Belief.Later drive back to Udaipur. Overnight stay at Udaipur"
      ],
      [
        "Day 07 Udaipur Airport  Railway Station Drop",
        "After breakfast check out from the hotel & transfer to the airport  railway station to board the flight  train for onward destination."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "rajasthan-tour-package",
    "title": "rajasthan tour package",
    "location": "rajasthan",
    "duration": "5 Days / 4 Nights",
    "price": "₹20,500 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.7,
    "reviews": 435,
    "image": "/assets/images/rajasthan1.jpg",
    "tags": [
      "Heritage & Culture",
      "5 Days",
      "Indian Tour"
    ],
    "description": "Arrive in Jaipur Welcome to the Pink City! Once you arrive in Jaipur, check into your hotel and take some time to relax. In the evening, you might want to explore the local markets...",
    "itinerary": [
      [
        "Day 1",
        "Arrive in Jaipur Welcome to the Pink City! Once you arrive in Jaipur, check into your hotel and take some time to relax. In the evening, you might want to explore the local markets and get a feel for the vibrant city. Don’t miss the chance to try some delicious Rajasthani cuisine for dinner."
      ],
      [
        "Day 2",
        "Jaipur Sightseeing Get ready for a full day of exploring Jaipur’s top attractions. Here are some must-see spots: Amber Fort: Start your day with a visit to this majestic fort. The intricate architecture and panoramic views are a perfect introduction to Jaipur’s rich history. City Palace: A beautiful blend of Mughal and Rajput architecture, the City Palace is a must-visit. Hawa Mahal: Also known as the Palace of Winds, this iconic landmark is perfect for a quick photo stop. Jantar Mantar: This UNESCO World Heritage site is an astronomical observatory with some fascinating instruments."
      ],
      [
        "Day 3",
        "Jaipur to Pushkar by Road Time for a road trip! Drive from Jaipur to Pushkar, a journey of about 150 km which takes around 3 hours. Once you arrive in Pushkar, check into your hotel and spend the rest of the day relaxing or exploring the town at your own pace. You might want to visit the Pushkar Lake or take a stroll through the local markets."
      ],
      [
        "Day 4",
        "Pushkar Sightseeing Spend your day exploring Pushkar’s unique attractions: Pushkar Lake: A sacred lake surrounded by ghats where pilgrims come to take a holy dip. Brahma Temple: One of the very few temples dedicated to Lord Brahma in the world. Camel Fair Grounds: If your visit coincides with the annual Pushkar Camel Fair, don’t miss the colorful festivities and camel trading."
      ],
      [
        "Day 5",
        "Pushkar to Jaipur It’s time to head back to Jaipur. After breakfast, drive back to Jaipur, which should take around 3 hours. Depending on your flight or train schedule, you might have some time for last-minute shopping or a quick visit to a nearby attraction. Safe travels! Rajasthan Tour Packages Rajasthan, the name evokes a stately royal heritage that graces its mighty forts and majestic palaces. This realm ofthe Maharajas features a vibrant, multi-hued culture that struts like a multi-coloured peacock over the drab browns and beiges of the desert. Its history of carving prosperity from the desert and its warm hospitality make Rajasthan tour an unforgettable experience. A Rajasthan is a spectacular medley of its royal grandeur, colourful festivals, picture-postcard landscapes and warm hospitality. Take a Rajasthan trip to experience the opulence of its regal past embellished with the latest creature comforts and amenities. Rajasthan tour packages are the best option for you if you’re hoping to take a vacation to Rajasthan that you’ll never forget. If you want to welcome every type of traveller from Delhi, Mumbai, Chennai, or Bangalore, we offer the most extensive choice of customized Rajasthan tour packages. Discover more than 40 Rajasthan travel packages with incredible deals and offers. Rajasthan tour packages include a variety of complete tours and activities."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "best-of-north-east-india",
    "title": "Best of North East India",
    "location": "Best of North East India",
    "duration": "7 Days / 6 Nights",
    "price": "₹24,900 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 763,
    "image": "/assets/images/guwahati.jpeg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "Indian Tour"
    ],
    "description": "Transfer from Guwahati airport/railway station to Shillong en route visit Umium Lake. Shillong became the first capital of the State of Meghalaya. Located in undulating pine covere...",
    "itinerary": [
      [
        "Day 01 – Arrive Guwahati – Shillong (110 kms /approx.3 hours)",
        "Transfer from Guwahati airport/railway station to Shillong en route visit Umium Lake. Shillong became the first capital of the State of Meghalaya. Located in undulating pine covered hills, the city has a milder climate than tropical India. The city centre is 1496m above sea level and currently has a population of around 270,000. Home to several waterfalls, it is also known as theScotland of the East. The British legacy is still visible in the architecture and food habits of the population. Overnight at Shillong."
      ],
      [
        "Day 02 –Shillong –Cherrapunjee –Shillong (60 kms / approx. 2 hourseach way)",
        "Breakfast at the hotel and drive to Cherrapunjee. Cherrapunji inMeghalayais one of thewettest places on the planet and the only place in India to receive rain throughout the year. The town of Cherrapunji is nestled in the East Khasi Hills about 50 km southwest of the state’s capital,Shillong. Cherrapunji, also known as Sohra or Churra, means‘the land of oranges’. The cliffs of Cherrapunji also offer stunning views of the plains of Bangladesh. Visit to Arwah Cave, Nahkhalikai Falls, Mwasmai Cave, Seven Sister Falls, Dainthlen Waterfalls and Eco Park and Rama Krishna Mission Museum. Return back to Shillong, en-route visit Shillong Peak offers a birds eye view of the entire city and valley and Elephant Fallsis a mountain stream gorging down two successive falls set in dells of fern covered rocks. Overnight at Shillong."
      ],
      [
        "Day 03 – Shillong –Kaziranga (320 kms / approx. 7 hours)",
        "After breakfast drive from Shillongto Kaziranga. KazirangaNational park is a world heritage site famous for the Great Indian One Horned Rhinoceros. The landscape of Kaziranga is of sheer forest, tall elephant grass, rugged reeds, marshes and shallow pools. Kaziranga also has a good number of Tigers and is home to large breeding population of Elephants, Wild Water Buffalo and Swamp Deer. Overnight at hotel."
      ],
      [
        "Day 04 – Kaziranga",
        "Early morning elephant ride at the park & return to the hotel for breakfast. Later Jeep Safari in the Central range of the park. Overnight at hotel."
      ],
      [
        "Day 05–Kaziranga – Guwahati (230 kms / approx. 4-5 hours)",
        "After breakfast drive from Kaziranga to Guwahati. The gateway to the northeast and the largest and most cosmopolitan city in the region, Guwahati serves as the starting block for most Northeast itineraries. It’s a somewhat featureless city –a prosaic heap of glass and concrete for the most part –but there are a scattering of interesting temples to explore. Walk its back alleys and old quarters, however, and you will be able to salvage agenerous amount of local flavour that lingers amid its suburban sprawl of ponds, palm trees, small single-storey traditional houses and old colonial-era mansions. Overnight at hotel."
      ],
      [
        "Day 06 – Guwahati",
        "After breakfast visit Kamakhya temple – The temple is dedicated to goddess Kamakhya an incarnation of Sati. It is on Nilachal hill, says the Shiva Purana, that the yoni or creative organ of Sati fell when Vishnu, in a bid to save the world from the Shiva’s tandava nrittya or dance of destruction, cut her dead body into 51 pieces with his suddarshan chakra. Also visit Navagraha temple, Umananda temple, Balaji Temple, state Zoo. Overnight in Guwahati."
      ],
      [
        "Day 07 – Departure Guwahati",
        "After breakfast transfer to the airport/railway station in time for onward connection."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "shillong-and-kaziranga-national-park-tour-package",
    "title": "Shillong and Kaziranga National Park Tour Package",
    "location": "Shillong and Kaziranga National Park",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Wildlife & Adventure",
    "rating": 5,
    "reviews": 2028,
    "image": "/assets/images/shillong.jpeg",
    "tags": [
      "Wildlife & Adventure",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Guwahati (1148 Ft / 350 Mts) Shillong (5002 Ft / 1525 Mts, 140 Kms / 03 to 04 Hrs drive approx) Arrive Guwahati Airport (GAU) / Guwahati Railway Station (GHY) & transfer to Shillon...",
    "itinerary": [
      [
        "Day 01 Arrival Guwahati Airport (GAU) / Railway Station – Shillong",
        "Guwahati (1148 Ft / 350 Mts) Shillong (5002 Ft / 1525 Mts, 140 Kms / 03 to 04 Hrs drive approx) Arrive Guwahati Airport (GAU) / Guwahati Railway Station (GHY) & transfer to Shillong. Enroute visit Umium Lake, a majestic placid lake with its surrounding sylvan hills. On arrival at Shillong, check in at your hotel. Overnight stay at Shillong. Note: Sightseeing could only get incorporated if guest arrives in morning."
      ],
      [
        "Day 02 Shillong – Excursion to Cherrapunjee – Shillong",
        "Cherrapunjee(4690Ft / 1430 Mts,60Kms / 02to 03 Hrs drive approx oneway) After breakfast, today go a day excursion to Cherrapunjee – the place on the earth. En route visit Elephant falls. At Cherrapunjee visit Garden of Caves, Arwah Cave / Mawsmai Cave, Seven Sisters Falls and Nohkalikai Falls. Later drive back to Shillong. Overnight in Shillong. Note Most of the waterfalls get dried up in winter."
      ],
      [
        "Day 03 Shillong – Excursion to Mawlynnong – Dawki – Shillong",
        "Mawllynnong (4906 Ft / 1496 Mts, 80 Kms / 03 to 04 Hrs drive approx oneway) Dawki Lake (5904 Ft / 1800 Mts, 30 Kms / 01 to 02 Hrs drive approx) Wake up early and have your breakfast and drive to Mawlynnong. Today you can explore the cleanest village Mawlynnong. Also visit Single living Root Bridge. (45 mins gradual walk downwards / 1 hour gradual walk upwards) After lunch drive to Dawki. Dawki is the gateway to Bangladesh where major export and import transactions take place. It is a splendid drive of 30 kilometers passing through deep gorges and ravines, which is certainly a thrilling experience. On approaching Dawki is the Umngot River, The Umngot River is the natural boundary between Ri Pnar or Jaintia Hills with Hima Khyrim of Khasi hills over which a single span suspension bridge was constructed. Drive back to Shillong for overnight stay. Note Most of the waterfalls get dried up in winter."
      ],
      [
        "Day 04 Shillong – Shillong Local sightseeing – Kaziranga",
        "Kaziranga National Park (197 Ft/ 60 Mts, 240 Kms / 06 to 07 Hrs drive approx) After breakfast visit Don Bosco Museum (Sunday Closed) & Ward’s Lake (Closed on Tuesday) and drive to Kaziranga. Upon arrival at Kaziranga, check in at hotel. Overnight stay at Kaziranga. Kaziranga National Park: In the heart of Assam, covering an area of 430 sq-kms, is inhabited by the world’s largest population of one-horned rhinoceroses, as well as many mammals, including tigers, elephants, panthers and bears, and thousands of birds. In 1985, it was declared a World Heritage Site by UNESCO for its unique natural environment."
      ],
      [
        "Day 05 Kaziranga – Local Sightseeing – Kaziranga",
        "Kaziranga National Park (197 Ft / 60 Mts) After breakfast go for Optional: Elephant Ride / Jeep Safari (subjected to availability & operational condition) to one Range. After lunch go for Optional: Jeep Safari (subjected to availability & operational condition) to the other Range. Visit Kaziranga National Orchid And Biodiversity Park (Subjected to time availability & operational condition). Overnight at Kaziranga. Optional: For rate, kindly refer to Supplement & Optional Cost Column, given below the main package cost. Entry ticket & Jeep safari are all regulated and controlled by the forest Dept. Govt. of Assam. We do not have any control on the booking of entry ticket & Jeep safari. Elephant rides are conducted and controlled by the forest department. We cannot confirm the same in advance. The ticket counter for booking opens only in the evening, one day prior to the ride. Only after securing the tickets, we can confirm the ride for you. If there is an increase in the cost for jungle activities by the Forest Department / hike in fuel price, then there will be supplement cost applicable on & above the quoted package cost."
      ],
      [
        "Day 06 Kaziranga – Guwahati Airport (GAU) / Guwahati Railway Station (GHY)",
        "Guwahati (1148 Ft / 350 Mts, 250 Kms / 05 to 06 Hrs drive approx) After breakfast transfer to Guwahati Airport (GAU) / Guwahati Railway Station (GHY) for onwards connection. THE COST INCLUDES Meet & Greet upon arrival Accommodation as per the itinerary, on specified plan on Twin Sharing Basis. All applicable transfers & sightseeing by specified vehicle as per the itinerary only (on point to point basis). THE COST DOES NOT INCLUDE Sightseeing entry fees, guide charge, Camera fee, river cruise, Kamakhya Temple entry, any up-gradation charges Cost for Evening Snacks & Tea Dawki Boat Ride. Cost for service not mentioned under the “cost includes” heads. Cost for airfare, train fare or any other internal fare. Personal expenses such as laundry, soft drinks, mineral water, porter, tip etc. Expenses incurred due to change in oil price, mishaps, landslide, strike, political unrest etc. In such case, extra will be charged as per actual which will be collected directly from the guest. Difference in cost arising due to change in fuel price. Difference in cost arising due to extra usage of vehicle other than scheduled mentioned in the itinerary."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "shillong-guwahati-tour-package",
    "title": "Shillong Guwahati Tour Package",
    "location": "Shillong Guwahati",
    "duration": "5 Days / 4 Nights",
    "price": "₹20,500 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.8,
    "reviews": 783,
    "image": "/assets/images/shillong.jpeg",
    "tags": [
      "Heritage & Culture",
      "5 Days",
      "Indian Tour"
    ],
    "description": "Arrival Guwahati Airport (GAU) / Guwahati Railway Station (GHY) – Shillong Guwahati (1148 Ft / 350 Mts) Shillong (5002 Ft / 1525 Mts, 140 Kms / 03 to 04 Hrs drive approx) Arrive Gu...",
    "itinerary": [
      [
        "Day 01",
        "Arrival Guwahati Airport (GAU) / Guwahati Railway Station (GHY) – Shillong Guwahati (1148 Ft / 350 Mts) Shillong (5002 Ft / 1525 Mts, 140 Kms / 03 to 04 Hrs drive approx) Arrive Guwahati Airport (GAU) / Guwahati Railway Station (GHY)  & transfer to Shillong. Enroute visit Umium Lake (also known as Barapani Lake), a majestic placid lake with its surrounding sylvan hills. Upon reaching check in & overnight at Shillong. Note: Sightseeing could only get incorporated if guest has early arrival."
      ],
      [
        "Day 02",
        "Shillong – Excursion to Cherrapunjee – Shillong Cherrapunjee (4690 Ft / 1430 Mts, 60 Kms / 02 to 03 Hrs drive approx oneway) After breakfast, today go a day excursion to Cherrapunjee. Enroute visit Elephant falls. At Cherrapunjee visit Garden of Caves, Arwah Cave / Mawsmai Cave, Seven Sisters Falls and Nohkalikai Falls. Later drive back to Shillong. Overnight in Shillong. Note Most of the waterfalls get dried up in winter."
      ],
      [
        "Day 03",
        "Shillong – Excursion to Mawlynnong – Dawki – Shillong Mawlynnong (4906 Ft / 1496 Mts, 80 Kms / 03 to 04 Hrs drive approx one way) Dawki Lake (5904 Ft / 1800 Mts / 30 Kms / 01 to 02 Hrs drive approx) Wake up early and have your breakfast and drive to Mawlynnong. Today you can explore the cleanest village Mawlynnong. Also visit  Single living Root Bridge. (45 mins gradual walk downwards / 1 hour gradual walk upwards) After lunch drive to Dawki. Dawki is the gateway to Bangladesh where major export and import transactions take place. It is a splendid drive of 30 kilometers passing through deep gorges and ravines, which is certainly a thrilling experience. On approaching Dawki is the Umngot River, The Umngot River is the natural boundary between Ri Pnar or Jaintia Hills with Hima Khyrim of Khasi hills over which a single span suspension bridge was constructed. Drive back to Shillong for overnight stay. Note Most of the waterfalls get dried up in winter."
      ],
      [
        "Day 04",
        "Shillong – Guwahati Guwahati (1148 Ft / 350 Mts, 140 Kms / 03 to 04 Hrs drive approx) After breakfast check out and proceed to Guwahati. On time in the evening go for River Cruise (on direct payment & subjected to operational condition). Upon reaching, check in & over night at Guwahati. Optional: Brahmaputra River Sunset Cruise / Brahmaputra River Dinner Cruise (Subjected to water level & operational condition). For rate, kindly refer to Supplement & Optional Cost Column, given below the main package cost."
      ],
      [
        "Day 05",
        "Guwahati – Guwahati Airport (GAU) / Guwahati Railway Station (GHY) for departure Guwahati (1148 Ft / 350 Mts, 25 Kms / 01 Hrs drive approx) After breakfast transfer to Guwahati Airport (GAU) / Guwahati Railway Station (GHY) for onwards connection."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "shillong-to-guwahati-happyflying",
    "title": "shillong to guwahati-happyflying",
    "location": "shillong to guwahati-happyflying",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.8,
    "reviews": 730,
    "image": "/assets/images/guwahati3.jpeg",
    "tags": [
      "Heritage & Culture",
      "4 Days",
      "Indian Tour"
    ],
    "description": "-  Guwahati Airport / Rly Station to Shillong (Approx 100 Kms) On arrival at Guwahati Airport / Railway Station & transfer to Shillong, which is also called the 'Scotland of the Ea...",
    "itinerary": [
      [
        "Day 01",
        "-  Guwahati Airport / Rly Station to Shillong (Approx 100 Kms) On arrival at Guwahati Airport / Railway Station & transfer to Shillong, which is also called the 'Scotland of the East\". On the way visit the majestic Umiam Lake (Barapani). You may do the water sports here (Optional). On arrival at Shillong, check in at your hotel. Evening you can visit the Police Bazaar which is the biggest local market. Overnight stay at Shillong."
      ],
      [
        "Day 02",
        "-  Shillong to Cherrapunjee –(Approx 60 Kms) One way After early breakfast, drive to Cherrapunjee (4,400 ft.), the wettest place in the world. You will see the beautiful waterfall known as Nohkalikai. You can also explore the caves known as Mawsmai. Evening return to Shillong, enroute visit Elephanta falls. Overnight stay at Shillong."
      ],
      [
        "Day 03",
        "-  Shillong to Guwahati - Sightseeing (Approx 100 Kms) After breakfast check out from the hotel and visit Don Bosco Museum (Sunday Closed) & Ward’s Lake. After that drive to Guwahati. Arrive and check in at your hotel. In the evening we suggest an optional tour of Golden sunset cruise on the Brahmaputra (Direct Payment by own). Overnight stay at Guwahati."
      ],
      [
        "Day 04",
        "-  Guwahati Hotel to Guwahati Airport / Railway Station - Transfer After breakfast visit Kamakhya Temple (Notes -Timing 08:00 A.M till 01:00 P.M & 3:00 P.M till it gets dark). Transfer to Guwahati Airport / Railway Station for your onward journey. Note: Temple visit will depend on your departure time. It may have been done the previous day.) COST INCLUDES Accommodation as mentioned in hotel Meal Plan    (  APAI - 3 B/F  + 3 Lunch   + 3 Dinner )  Only . All hotel taxes (as per itinerary) Rates are valid for INDIAN NATIONALS only. 2 x 500 ml water bottles per pax per day  . 2 Pax on a FOC basis. Gala Dinner  . COST NOT INCLUDES  :- Personal Expenses such as Laundry, telephone calls, tips & gratuity, mineral water, soft & hard drinks, porterage Additional sightseeing or extra usage of vehicle, other than mentioned in the itinerary Guide charges, Entry Fees & Camera Charges if any VIP Darshan in Kamakhya Temple Any cost arising due to natural calamities like cyclone, road blockage, political disturbances (strikes), etc (to be borne by the client and directly payable on the spot)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "sikkim-tour-itinerary-6-nights-and-7-days",
    "title": "Sikkim Tour Itinerary – 6 Nights and 7 Days",
    "location": "Sikkim  Itinerary – 6 Nights and 7 Days",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1185,
    "image": "/assets/images/sikkim.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Welcome and transfer to hotel. Free evening....",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Welcome and transfer to hotel. Free evening."
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "jammu-and-kashmir-trip",
    "title": "jammu and kashmir trip",
    "location": "jammu and kashmir trip",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1699,
    "image": "/assets/images/uttarkhand1.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "Indian Tour"
    ],
    "description": "About Kashmir Trip\r\nIf you dream of a serene escape to the breathtaking valleys and snow-clad mountains, then a Kashmir trip is exactly what you need. Known as “Paradise on Earth,”...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "About Kashmir Trip\r\nIf you dream of a serene escape to the breathtaking valleys and snow-clad mountains, then a Kashmir trip is exactly what you need. Known as “Paradise on Earth,” Kashmir has always been a favourite destination for nature lovers and adventure seekers. With our exclusive Jammu Kashm"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "all-odisha-tour-packages",
    "title": "All Odisha Tour Packages",
    "location": "All Odisha  s",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.8,
    "reviews": 789,
    "image": "/assets/images/odisha-tribe.jpeg",
    "tags": [
      "Heritage & Culture",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Best honeymoon destinations in Odisha\r\nAmidst the immense natural beauty, local culture and traditions, and regional heritage, there are many romantic places in Orissa. This is why...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Best honeymoon destinations in Odisha\r\nAmidst the immense natural beauty, local culture and traditions, and regional heritage, there are many romantic places in Orissa. This is why it ranks among the top honeymoon destinations in the country. For instance, Puri is considered the best Orissa tourist "
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "golden-triangle-of-odisha-with-gopalpur-tour-package",
    "title": "Golden Triangle of Odisha with Gopalpur Tour Package",
    "location": "Golden Triangle of Odisha with Gopalpur",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.8,
    "reviews": 928,
    "image": "/assets/images/odisha-tribe.jpeg",
    "tags": [
      "Heritage & Culture",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Pickup from Bhubaneswar airport Proceed to the Puri. En-route visit Dhauli( the peace pagoda), Lingaraj Temple, Chausath (64) Yogini temple. After reaching Puri check into the hote...",
    "itinerary": [
      [
        "Day 1 Arrival Bhubaneshwar – Puri",
        "Pickup from Bhubaneswar airport Proceed to the Puri. En-route visit Dhauli( the peace pagoda), Lingaraj Temple, Chausath (64) Yogini temple. After reaching Puri check into the hotel in the evening and enjoy at Puri beach. Overnight at Puri."
      ],
      [
        "Day 2 ",
        "Puri – (Jagannath Temple) – Konark ( Sun Temple) – Puri After morning breakfast, Darshan at Sri Jagannath Temple (Non Hindus are not allowed),​​Gundicha Temple (MausimaTemple), Bedi Hanuman Temple,Then drive to Konark on marine drive, visit Chandrabhaga beach &Ramchandi temple. Then visit the famous Sun Temple called black Pagoda, The 12th century temple richly decorated with stone carving. In the evening enjoy light & sound show in Konark (by own cost). Evening return to Puri, in the evening enjoy and relax at golden beach, free time shopping at Puri local market. Overnight at Puri."
      ],
      [
        "Day 3 ",
        "Puri – Barkul Chilika – Gopalpur After Breakfast Check Out From the Hotel. Proceed to Barkul ( Chilika) to Visit Asia’s largest sweet wdriveater lake. Visit the Kalijai Temple in the middle of the lake. Check in the Resort. Then drive to Gopalpur, check in hotel. Overnight at Gopalpur."
      ],
      [
        "Day 4 ",
        "Gopalpur – Chandragiri – Taptapani – Gopalpur After Breakfast Chandragiri to visit the Buddhist Monastery( Approx. 80Km Drive), later Proceed to Taptapani to take a bath at Hot Water Spring. Enjoy the rest of the day at leisure as you can spend the free time the way you want. After Visit Back to Gopalpur. Evening Leisure at Beach. Overnight at Gopalpur."
      ],
      [
        "Day 5 ",
        "Gopalpur – Bhubaneswar Local After breakfast drive to Bhubanehswar and visit local Bhubaneshwar and visit Rajarani temple, Mukteshwar temple, Parshurameshwaram Temple, Khandagiri, Udaygirijain caves, overnight at Bhubaneswar."
      ],
      [
        "Day 6",
        "Bhubaneshwar Drop After breakfast check out from the hotel and visit Nandankanan Zoo (This zoo is famous for variety wild life sanctuary & also famous for white Tiger & Lion Safari (Closed On Monday), Tribal museum (Closed On Monday) then transfer to the airport/railway station to catch the flight/ train for onward Journey with a bag full of memories. ================= Tour End ====================== Note: Nandankanan, State Museum and Tribal Museum remain closed on Monday and on state Holidays."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "odisha-package-tour-puri-bhubaneswar-3-nights-4-days",
    "title": "Odisha Package Tour Puri – Bhubaneswar – 3 Nights & 4 Days",
    "location": "Odisha   Puri – Bhubaneswar – 3 Nights & 4 Days",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.7,
    "reviews": 1464,
    "image": "/assets/images/odisha.jpeg",
    "tags": [
      "Heritage & Culture",
      "4 Days",
      "Indian Tour"
    ],
    "description": "Arrival Bhubaneswar – ​Puri Pickup from Bhubaneswar airport, Drive for Puri. Check in Hotel. After fresh up visit for Darshan at Sri Jagannath Temple (Non Hindus are not allowed) A...",
    "itinerary": [
      [
        "Day 1",
        "Arrival Bhubaneswar – ​Puri Pickup from Bhubaneswar airport, Drive for Puri. Check in Hotel. After fresh up visit for Darshan at Sri Jagannath Temple (Non Hindus are not allowed) At evening enjoy at Puri bache. Overnight at Puri."
      ],
      [
        "Day 2 ",
        "Puri – Chilika Lake ( Satpada ) – Puri After morning breakfast, Depart for ​​Satapada, Chilka. ​ On the way visit Alarnath Temple after reaching Chilika lake Take a boat (Direct payment) meets the Irrawaddy Dolphins in nature and the Hradaya –Sagar Sangam or the sea mouth (the point where the lake meets the sea). Enjoy the day at Chilka Lake (India’s biggest inland lake spread over 1,100 square kilometers). Evening return to Puri, visit Gundicha Temple (Mausima Temple), Bedi Hanuman Temple, Overnight at Puri."
      ],
      [
        "Day 3 ",
        "Puri – Konark ( Sun Temple) –​ Bhubaneswar After breakfast check out then drive to ​​Konark on marine drive, visit ​​Chandrabhaga beach & ​​Ramchandi temple. Then visit The famous Sun Temple called black Pagoda, The 12th century temple richly decorated with stone carving in then ​drive to Bhubaneswar. En-route visit ​​Pipli village, Dhauli (the peace pagoda),  Lingaraj Temple​, Chausath (64) Yogini ​temple. ),​at evening check in hotel. Overnight at Bhubaneshwar"
      ],
      [
        "Day 4 ",
        "Puri –​ Bhubaneswar -​Departure​ After breakfast check out drive to visit local Bhubaneshwar ​​Rajarani temple, ​​Mukteshwar temple, Parshurameshwaram Temple,​ Kedar Gauri temple,​ Khandagiri, Udaygiri jain caves, ​Tribal museum (Closed On Monday)  Nandankanan Zoo (This zoo is famous for variety wild life sanctuary & also famous for white Tiger & Lion Safari (Closed On Monday) if time permits then free time for shopping evening transfer to airport/railway station to catch the flight/ train  for onward Journey with bag full of memories. Please note: 1: Nandan Kanan, state Museum and Tribal Museum remain closed on Monday and on state holidays. 2: For Jagannath Temple & Local Places -No Big Vehicle allowed except Auto/Rickshaw (Book by own)."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "odisha-tribal-tour",
    "title": "Odisha Tribal Tour",
    "location": "Odisha Tribal",
    "duration": "7 Days / 6 Nights",
    "price": "₹24,900 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.7,
    "reviews": 778,
    "image": "/assets/images/odisha.jpeg",
    "tags": [
      "Heritage & Culture",
      "7 Days",
      "Indian Tour"
    ],
    "description": "ARRIVE BHUBANESWAR On the day one of your Odisha tribal tours, you will be arriving at Bhubaneswar airport and driven to the hotel for refreshment. Your first day of the tribal tou...",
    "itinerary": [
      [
        "DAY 01",
        "ARRIVE BHUBANESWAR On the day one of your Odisha tribal tours, you will be arriving at Bhubaneswar airport and driven to the hotel for refreshment. Your first day of the tribal tour in Odisha will begin with exploring the capital city- Bhubaneswar. Visit the the Tribal Museum to get a brief knowledge of the tribes in Odisha and their crafts. And then visit Khandagiri / Udayagiri Jain Caves. If time permits visit Lingaraj Temples, Rajarani Temple & Mukteswar Temple. Evening visit Ekamrahaat for Odisha Art & Handicrafts. Overnight at Bhubaneswar."
      ],
      [
        "DAY 02",
        "BHUBANESAR – GOPALPUR On the second day of your tribal tour in Odisha, Post breakfast, drive to Gopalpur on Sea en-route Chilka Lake. Gopalpur on Sea is a retreat for sea- worshippers. This is the one of the magnificent beaches of Orissa and is worth visiting. Later, visit Chilka Lake ( Barkul), which is divided into an outer channel with a narrow neck. This channel leads into the sea and on the other hand, the main body of the lake has a muddy bottom plentiful in organic matter. Reach your hotel in Gopalpur on Sea. Check in, freshen up and take a little rest. You may use the rest of the day exploring the nearby lanes, communicating with local people, enjoying street food, etc. Return to your hotel and halt for an overnight stay."
      ],
      [
        "DAY 03",
        "GOPALPUR – RAYAGADA Morning drive to Rayagada. On the way visit Taptapanithe hot spring & Gunupur region to see the housing of Saura tribes and the famous wall painting. Reached at Hotel & overnight stay in hotel."
      ],
      [
        "DAY 04",
        "- RAYAGADA – JEYPORE In the morning visit the weekly market of Desia Kondh tribe’s and Dongaria Kondh weekly market – Jaharia Paroja Village- Jeypore. Overnight stay at Jeypore."
      ],
      [
        "DAY 05",
        "JEYPORE Visit weekly market of Bonda, Gadaba & Didai. Later visit of Gadaba Village. Morning visit to the most interesting Bonda tribal market at Onukadeli where they come all the way to sale their home made country alcohol .In this market you will also meet interesting Godoba, Paraja, Dedehi and Mali tribes who come to this market to buy their weekly needs or to share a drink from the palm tree. Back to Hotel & Overnight."
      ],
      [
        "DAY 06",
        "JEYPORE VILLAGE HIKE (DESIA) In the morning hike for half a day to visit nearby Godaba, Paraja, Mali villages and back to the camp to relax. In the evening enjoy the Dhemsa dance by the host community and you may join to match your steps with the tunes of the local drum and flute."
      ],
      [
        "DAY 07",
        "DEPARTURE TO BHUBANESWAR The last day of your Odisha tribal tours in the morning depart for Gupteswar region and hike by the riverside to visit Dhurubatribes .In the afternoon visit the weekly market at Baligaon and then board the train at Koraput for Bhubaneswar. Or Else Back to Bhubaneswar by Vehicle. About Tribal Tour: Set out on a interesting travel through Odisha, a state in eastern India famous for its dynamic tribal culture. Start your investigation in Bhubaneswar, the capital city, where you’ll visit tribal historical centers and social centers to pick up bits of knowledge into the different innate communities. Travel to inaccessible tribal towns scattered over the beautiful scenes of Odisha. Drench yourself in their special way of life, wealthy conventions, and ancient customs. Lock in with tribal individuals to memorize around their craftsmanship shapes, conventional hones, and fables. Witness the captivating move and music exhibitions that shape an fundamentally portion of their culture. Find the uncommon craftsmanship of the tribal artisans. Visit artisan towns where gifted people make complex Pattachitra depictions, earthenware figures, bamboo and cane items, and dazzling tribal gems. Witness their imaginative handle and bolster their craftsmanship by acquiring bona fide tribal makes. Investigate bustling tribal markets, where the communities accumulate to exchange agrarian deliver, painstaking work, and conventional things. Encounter the dynamic atmosphere as you associated with tribal dealers and submerge yourself within the colorful embroidered artwork of the marketplaces. Take within the common magnificence that encompasses the tribal locales of Odisha. Travel through rich woodlands, journey to mesmerizing waterfalls, and climb up beautiful mountains. Wonder at the biodiversity of Simlipal National Stop, be captivated by the cascading Duduma Waterfall, or enjoy panoramic sees from the crests of Deomali Slopes. In case conceivable, time your visit to coincide with tribal celebrations. Witness the blissful celebrations as the tribes come together to perform age-old customs, sing conventional tunes, and exhibit their particular move shapes. Submerge yourself within the merry soul and pick up a more profound understanding of their social legacy. All through your visit, hone mindful tourism. Regard the protection and traditions of the tribal communities, look for authorization some time recently taking photos, and back neighborhood activities that contribute to the well-being and conservation of tribal culture. Odisha’s tribal visit guarantees an improving encounter as you interface with the innate communities, appreciate their aestheticness, and pick up a significant appreciation for their dynamic way of life."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "puri-jagannath-package-with-gopalpur-tour-package-odisha-6-nights-7-days",
    "title": "Puri Jagannath Package with Gopalpur Tour Package – Odisha 6 Nights 7 Days",
    "location": "Puri Jagannath  with Gopalpur   – Odisha 6 Nights 7 Days",
    "duration": "7 Days / 6 Nights",
    "price": "₹24,900 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.9,
    "reviews": 1196,
    "image": "/assets/images/puri-jagannath-odisha.jpeg",
    "tags": [
      "Heritage & Culture",
      "7 Days",
      "Indian Tour"
    ],
    "description": "Pickup from Bhubaneswar airport Proceed to the Puri.  En-route visit Dhauli ( the peace pagoda),  Lingaraj Temple, Chausath (64) Yogini temple. After reaching Puri check into the h...",
    "itinerary": [
      [
        "Day 1 Arrival Bhubaneshwar – Puri",
        "Pickup from Bhubaneswar airport Proceed to the Puri.  En-route visit Dhauli ( the peace pagoda),  Lingaraj Temple, Chausath (64) Yogini temple. After reaching Puri check into the hotel in the evening and enjoy at Puri beach. Overnight at Puri."
      ],
      [
        "Day 2",
        "Puri – (Jagannath Temple) – Konark ( Sun Temple) – Puri After morning breakfast, Darshan at Sri Jagannath Temple (Non Hindus are not allowed), Gundicha Temple (Mausima Temple), Bedi Hanuman Temple, Then drive to Konark on marine drive, visit Chandrabhaga beach & Ramchandi temple. Then visit the famous Sun Temple called black Pagoda, The 12th century temple richly decorated with stone carving. In the evening enjoy light & sound show in Konark (by own cost). Evening return to Puri, in the evening enjoy and relax at golden beach, free time shopping at Puri local market. Overnight at Puri."
      ],
      [
        "Day 3 ",
        "Puri – Barkul Chilika – Gopalpur After Breakfast Check Out From the Hotel. Proceed to Barkul ( Chilika) to Visit Asia’s largest sweet wdriveater lake. Visit the Kalijai Temple in the middle of the lake. Check in the Resort. Then drive to Gopalpur, check in hotel. Overnight at Gopalpur."
      ],
      [
        "Day 4",
        "Gopalpur – Chandragiri – Taptapani – Gopalpur After Breakfast Chandragiri to visit the Buddhist Monastery (Approx. 80Km Drive), later proceed to Taptapani to take a bath at Hot Water Spring. Enjoy the rest of the day at leisure as you can spend the free time the way you want. After Visit Back to Gopalpur. Evening Leisure at Beach. Overnight at Gopalpur."
      ],
      [
        "Day 5",
        "Gopalpur – Bhubaneswar Local After breakfast drive to Bhubanehswar and visit local Bhubaneshwar and visit Rajarani temple, Mukteshwar temple, Parshurameshwaram Temple, Khandagiri, Udaygiri jain caves, overnight at Bhubaneswar."
      ],
      [
        "Day 6",
        "Bhubaneswar Local After breakfast check out from the hotel and visit Nandankanan Zoo (This zoo is famous for variety wild life sanctuary & also famous for white Tiger & Lion Safari (Closed On Monday), Tribal museum (Closed On Monday). Overnight at Bhubaneswar."
      ],
      [
        "Day 7",
        "Bhubaneswar Departure. After breakfast check out from the hotel then visit Ekamra haat (If time permits) then​ ​transfer to the airport/railway station to catch the flight/ train for onward Journey with a bag full of memories. Please note: 1: Nandan Kanan, state Museum and Tribal Museum remain closed on Monday and on state holidays."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "all-uttarakhand-tour-packages",
    "title": "All Uttarakhand Tour Packages",
    "location": "All Uttarakhand  s",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1524,
    "image": "/assets/images/uttarkhand.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Best Places to Visit Uttarakhand\r\nIf you’re planning Uttarakhand trip packages, just know this state is brimming with natural beauty, adventure, and culture. Whether it’s the seren...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Best Places to Visit Uttarakhand\r\nIf you’re planning Uttarakhand trip packages, just know this state is brimming with natural beauty, adventure, and culture. Whether it’s the serene hill stations or the sacred rivers, Uttarakhand tourist places are perfect for anyone looking to soak in nature and hi"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "chardham-tour-package",
    "title": "Chardham Tour Package",
    "location": "Chardham",
    "duration": "10 Days / 9 Nights",
    "price": "₹31,500 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1154,
    "image": "/assets/images/kedarnath-uttarkhand.jpeg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "Indian Tour"
    ],
    "description": "Our representative will meet you at Haridwar railway station / Dehradun and drive to Barkot. Check into the hotel and in the evening have dinner and Overnight stay....",
    "itinerary": [
      [
        "Day 01- Haridwar /Dehradun to Barkot (Approx 7 to 8 hrs )",
        "Our representative will meet you at Haridwar railway station / Dehradun and drive to Barkot. Check into the hotel and in the evening have dinner and Overnight stay."
      ],
      [
        "Day 02 Barkot to Yamunotri (Approx 2 to 3 hours, then 5 km Trek)",
        "After breakfast, Drive to Jankichatti and then trek / palki / horse (your own expenses) for 06 km to reach Yamunotri. Visit the temple of Goddess Yamuna which is situated on the banks of the river. There is a hot water spring adjacent to this temple. The pilgrims take a holy dip in this spring before the darshan of the temple. You can also cook rice in these hot waters. After darshan return back to Jankichatti. Stay overnight at the Barkot hotel."
      ],
      [
        "Day 03 Barkot to Uttarkashi (5 to 6 hrs.)",
        "After Breakfast drive to Uttarkashi. You can visit the famous Vishwanath Temple. Dinner & overnight at the hotel."
      ],
      [
        "Day 04- Uttarkashi to Gangotri – Uttarkashi (3.5 hrs)",
        "After breakfast, proceed to Harsil. This is one of the most beautiful valleys in Uttarakhand. On the way we can halt at Gangnani which again has hot water springs. You can take a dip here. Then drive to Gangotri (22 kms/1 hr). Over here devotees take a holy dip in the Holy River of Hindus- The Ganges. It is also called Bhagirathi from where it originates. You can then perform pooja and enjoy the picturesque surroundings. In the evenings, back to Uttarkashi. Stay overnight at the hotel."
      ],
      [
        "Day 05- Uttarkashi – Guptkashi (Approx 8 to 9 hrs)",
        "After breakfast drive to Guptkashi , it will take full day to reach, in the evenings check into the hotel dinner and overnight stay."
      ],
      [
        "Day 06 – Guptkashi – Kedarnath 23 km drive & 18 km trek",
        "Post your early breakfast leave by vehicle for Gaurikund Then you can go Kedarnath Trek (If you take heli then you can opt Guptkashi helipad or Phata helipad). On arrival check in some rest and Holi vision to Lord Shiva After darshan and Pooja at Kedarnath Temple later back to hotel, dinner and Overnight Stay at Kedarnath /Sitapur.and if you will go kedarnath by helicopter then same day return in Guptkashi and have dinner overnight stay."
      ],
      [
        "Day 07- Trek down to Guptkashi- 18 KM Trek (23 km Drive)",
        "Wake up early in the morning and visit Morning aarti after completing the puja process, have breakfast checkout from the hotel and trek down to Gaurikund. Here will meet the driver and drive to Guptkashi , on arrival check in, some rest and evening visit Omkareswr Temple then back, have dinner & overnight stay."
      ],
      [
        "Day 08– Guptkashi to Badrinath (Approx 6-7 hrs)",
        "After breakfast checkout from Guptkashi and drive to famous hindus pilgrim place Badrinath Dham, via Rudraprayag Nandprayag, Karnprayag, Vishnu Prayag Badrinath Temple is dedicated to Lord Vishnu and it’s also called Bakunth of Kaliyuga, the temple is one of the Char Dham. Full day holy vision in Badrinath dham and participate Evening aarti then back to hotel have dinner overnight stay"
      ],
      [
        "Day 09",
        "Badrinath then Rudraprayag – (5 to 6 Hrs.) Wake up early morning and visit morning aarti and have breakfast and checkout from hotel and cover the local places like, Brahma kapal, Charan paduka, Narad kund, Vyas Gufa, Ganesh Gufa, Tapt Kund, Yogdhyan Badri Temple, , Mata Murti Temple etc then evening drive to Rudraprayag. On arrival check in some rest and have dinner overnight."
      ],
      [
        "Day 10 – Rudraprayag to Haridwar Drop (5 to 6 hrs)",
        "After breakfast checkout from Rudraprayag and drive to Haridwar. Then your own journey Towards the home with happy memories of the tour."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "eco-nature-discovery-camp-jim-corbett-national-park",
    "title": "Eco & Nature Discovery Camp – Jim Corbett National Park",
    "location": "Eco & Nature Discovery Camp – Jim Corbett National Park",
    "duration": "5 Days / 4 Nights",
    "price": "₹20,500 / person",
    "type": "Indian Tour",
    "category": "Wildlife & Adventure",
    "rating": 5,
    "reviews": 1925,
    "image": "/assets/images/uttarkhand.jpeg",
    "tags": [
      "Wildlife & Adventure",
      "5 Days",
      "Indian Tour"
    ],
    "description": "Theme: Welcome to the Wilderness Arrival at Delhi airport and transfer to Jim Corbett National Park (approx. 6 hours by road) Packed breakfast and lunch en route Students are encou...",
    "itinerary": [
      [
        "Day 1 – Arrival and Orientation in Corbett",
        "Theme: Welcome to the Wilderness Arrival at Delhi airport and transfer to Jim Corbett National Park (approx. 6 hours by road) Packed breakfast and lunch en route Students are encouraged to observe and document landscape changes during the drive Arrival and check-in at an eco-lodge or nature camp near Corbett Welcome drinks and orientation briefing by the camp naturalist Distribution of camp kits (caps, notebooks, eco-passports, safety rules) Evening: “Know Your Jungle” Introduction Session Presentation by a wildlife expert on Jim Corbett’s flora and fauna Interactive quiz and discussion on India’s biodiversity Icebreaker games to form student teams for the week’s challenges Dinner and overnight stay at the camp Learning Focus: Understanding ecosystems, introduction to India’s natural heritage, teamwork"
      ],
      [
        "Day 2 – Wildlife Safari and Conservation Learning",
        "Theme: Exploring the Forest Ecosystem Early morning: Jeep safari inside Corbett National Park Guided experience through the dense Sal forests and river belts Spot deer, elephants, langurs, and possibly tigers Fieldwork: Students record observations of animals, vegetation, and sounds Return to camp for breakfast Late morning: Wildlife Conservation Workshop Session with park rangers or conservationists on wildlife protection Students learn about poaching, tourism impact, and eco-sustainability Lunch at the camp Afternoon: Nature Walk and Tree Identification Trail Guided walk through the forest buffer zone Learn to identify native trees, bird calls, and animal tracks Activity: Create a “Leaf Journal” – students collect and document leaves Evening: Documentary Screening – “The Life of Jim Corbett and the Tigers of India” Reflection circle afterward to discuss key learnings Dinner and overnight stay at the camp Learning Focus: Biodiversity, conservation ethics, observation skills"
      ],
      [
        "Day 3 – River Ecology and Adventure Day",
        "Theme: Understanding Nature Through Action Morning: River Ecosystem Study (Kosi River) Visit the nearby riverbank for a hands-on workshop Learn about aquatic life, water cycles, and pollution control Activity: Collect small water samples for pH and cleanliness tests Picnic-style lunch by the river Afternoon: Adventure and Team Building Activities Ziplining, rock climbing, rope course, and obstacle races (supervised and age-appropriate) Group challenge: “Eco Treasure Hunt” – nature-based problem-solving competition Evening: Bonfire and Storytelling Night Students share stories, poems, or experiences about the day Campfire games and music Dinner and overnight stay at the camp Learning Focus: River ecology, adventure safety, collaboration, leadership"
      ],
      [
        "Day 4 – Sustainable Living and Village Immersion",
        "Theme: Learning from the Land and the People Morning: Visit to a nearby Kumaoni village Guided interaction with local families Learn about organic farming, water management, and rural crafts Activity: Participate in farming or try traditional cooking Discussion: “What sustainability means in real life” Lunch with local cuisine at the village Afternoon: Upcycling and Eco-Art Workshop Students create artwork using natural or waste materials Presentation on “Reduce, Reuse, Recycle” practices Evening: Cultural Exchange Program Folk dance and music performance by local villagers Students share a short performance, song, or skit in return Dinner and overnight stay at the camp Learning Focus: Sustainability, cultural awareness, rural economy, empathy"
      ],
      [
        "Day 5 – Reflection and Departure",
        "Theme: From Awareness to Action Early morning yoga or mindfulness session in nature Focus on breathing, awareness, and gratitude for the environment Breakfast and group reflection session Students share their learnings and create an “Eco Pledge” as a team Presentation of participation certificates Departure for Delhi after lunch Assisted transfers to the airport for the flight back home Learning Focus: Reflection, responsibility, and environmental stewardship"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "himalayan-ganga-gateway-package-tour-uttarakhand",
    "title": "Himalayan Ganga Gateway Package Tour – Uttarakhand",
    "location": "Himalayan Ganga Gateway   – Uttarakhand",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Wildlife & Adventure",
    "rating": 4.9,
    "reviews": 1961,
    "image": "/assets/images/uttarkhand1.jpeg",
    "tags": [
      "Wildlife & Adventure",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Dehradun to Dehradun – Arrival in Dehradun Your adventure begins as you arrive at Dehradun Airport, where you’ll be greeted by the crisp mountain air and the anticipation of the jo...",
    "itinerary": [
      [
        "DAY 1",
        "Dehradun to Dehradun – Arrival in Dehradun Your adventure begins as you arrive at Dehradun Airport, where you’ll be greeted by the crisp mountain air and the anticipation of the journey ahead. A warm welcome awaits you, and your driver will be ready to transfer you to your Hotel. On arrival, complete the check in formalities and freshen Up. Get ready for Local Sightseeing of Dehradun. Visit Robbers Cave, Malsi Deer Park, Tapkeshwar Mahadev Temple. FRI (Forest Research Institute). Note- If the arrival Time in Dehradun is in the morning, in that case only Sightseeing can be done in Dehradun."
      ],
      [
        "DAY 2",
        "Dehradun to Dhanaulti/ Kanatal – Transfer & Sightseeing (65Kms/ 02 Hrs) Your day begins with a hearty breakfast, and your driver will be ready to transfer you to the enchanting hill station of Dhanaulti/Kanatal. Get ready to explore the natural and spiritual wonders of the region. You’ll be driven to the Surkanda Devi Temple, an ancient and revered temple dedicated to the goddess Parvati. This temple is perched on a hill, offering not only a spiritual experience but also breathtaking panoramic views of the surrounding landscapes. Take some time to offer your prayers, soak in the serene atmosphere, and capture the scenic beauty with your camera. After your visit to Surkanda Devi Temple, the journey continues to Kanatal, a picturesque village in the Tehri Garhwal region. Kanatal is known for its tranquil surroundings and lovely landscapes, making it an ideal place to unwind and connect with nature. Once you reach Dhanaulti/Kanatal, check-in at your chosen accommodation and take some time to relax. Possible Sightseeing: Eco Park, Surkanda Devi Temple, Kanatal Adventure Park"
      ],
      [
        "DAY 3",
        "Dhanaulti/ Kanatal to Harsil – Transfer & Sightseeing (201Kms – 06-7Hrs) After breakfast to energize yourself for the day. Get ready to transferred from Dhanaulti/Kanatal to Harsil is a charming town known for its spiritual significance and scenic beauty. Set out on a scenic drive to Harsil, a hidden gem nestled amidst the mountains. Harsil is famous for its apple orchards and the glistening Bhagirathi River. Upon reaching Harsil, check-in at your accommodation and relish the tranquility of this serene town. The night in Harsil promises to be a peaceful one, with the gentle sound of the river in the background, spend the night in Harsil, where the peaceful ambiance will ensure a restful sleep. Possible Sightseeing: Ganganani (Hot Spring)"
      ],
      [
        "DAY 4",
        "Harsil (Local Sightseeing) This day is dedicated to exploring the natural beauty and wilderness of the region. If Possible get ready Early in the Morning, and go for a short trek to Lama Top For the Mesmerizing Sunrise. Later return to the hotel and after breakfast, prepare for a day trip to the Mukhba Village (Known as winter seat of Goddess Ganga). Later you can go for Sattal trek which is only 5-6Kms from Dharali. As the day draws to a close, return to Harsil, where you can relax and reminisce about the day’s adventures. The night in Harsil is sure to be restful as you fall asleep under a blanket of stars, surrounded by the tranquil beauty of the mountains. Later you can go for evening walk to Bagori Village. Possible Sightseeing: Mukhba Village, Sattal Trek & evening walk to Bagori Village"
      ],
      [
        "DAY 5",
        "Harsil to Uttarkashi (75Kms/ 03Hrs) After breakfast to energize yourself for the day. Get ready to transfer from Harsil to Uttarkashi. The day commences with a visit to the revered Kashi Vishwanath Temple in Uttarkashi, an important religious site dedicated to Lord Shiva. Participate in the morning rituals and experience the spiritual vibes of this sacred place. Explore other local attractions in Uttarkashi, which may include the Nehru Institute of Mountaineering. These visits will allow you to delve deeper into the culture and heritage of the region, with the gentle sound of the river in the background. Possible Sightseeing: Kashi Vishwanath Temple, Nehru Institute of Mountaineering."
      ],
      [
        "DAY 6",
        "Uttarkashi to Dehradun Airport Drop via Tehri (195 Kms – 06 Hrs) Your journey’s final day begins with breakfast in Uttarkashi. After packing your belongings, check out from your hotel, bidding farewell to the peaceful town of Uttarkashi. Today, you’ll start your journey back to Dehradun via the scenic route through Tehri. Your first stop today is the remarkable Tehri Dam, a monumental hydroelectric project that created an artificial lake. The beauty of the vast reservoir surrounded by hills is a sight to behold. Tehri Dam also offers an array of water sports activities, including boating and jet skiing. If you’re an adventure enthusiast, this is the perfect place to get your adrenaline pumping. Enjoy these water sports experiences and create lasting memories. After the exhilarating water sports, it’s time to bid farewell to Chamba and continue your journey to Dehradun. Drop at Dehradun Airport/ Railway station as per your Schedule. Possible Sightseeing: Tehri Dam TOUR END !!!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kedarnath-yatra-tour-package-3-nights-4-days",
    "title": "Kedarnath Yatra Tour Package – 3 Nights & 4 Days",
    "location": "Kedarnath Yatra   – 3 Nights & 4 Days",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 4.8,
    "reviews": 1055,
    "image": "/assets/images/kedarnath-uttarkhand.jpeg",
    "tags": [
      "Pilgrimage & Spiritual",
      "4 Days",
      "Indian Tour"
    ],
    "description": "Pickup from the Haridwar/Rishikesh/Dehradun railway station and drive to Guptkashi. On arrival check in to the hotel. Dinner and overnight stay in Guptkashi....",
    "itinerary": [
      [
        "Day 01\tHaridwar – Guptkashi (203 kms/6-7hr)",
        "Pickup from the Haridwar/Rishikesh/Dehradun railway station and drive to Guptkashi. On arrival check in to the hotel. Dinner and overnight stay in Guptkashi."
      ],
      [
        "Day 02\tGuptkashi – Sonprayag (30kms by road) – Gorikund – Kedarnath (14 km by Treek one side)",
        "After breakfast, checkout from the hotel and drive to Sonprayag from Sonprayag drive to Gauri Kund by local transport at own cost. On arrival in Gaurikund, the trek starts (14 Km) (can also use Poni, Ghori, Doli for trek by own cost). Upon reaching in Kedarnath premises, check in to the hotel for overnight stay. (In Kedarnath, hotel food will not be included in the package) OR Kedarnath By Helicopter After breakfast, drive to helipad. On arrival, after taking boarding passes, later fly to Kedarnath. After arrival in Kedarnath helipad, go to temple by walking. After darshan, check in to the hotel for overnight stay in Kedarnath."
      ],
      [
        "Day 03\tKedarnath – Guptkashi (By Same route)",
        "After early morning visit to Kedarnath temple, check out from the hotel and back to Sonprayag via Gaurikund by trek and from Sonprayag drive to Guptkashi by transport. Later, back to hotel for dinner and overnight stay in Guptlkashi."
      ],
      [
        "Day 04\tGuptkashi – Rishikesh – Haridwar/Rishikesh/Dehradun (201km/5-6 hr)",
        "After breakfast, checkout from the hotel and drive to Haridwar. Enroute visit Rishikesh to see Ram Jhoola, Lakshman Jhoola, Parmarth Niketan and back to Haridwar for attending Ganga Aarti. Later, drop at Haridwar/Rishikesh railway station. STANDARD HOTEL ACCOMMODATION: Guptkashi: (02 Nights) Hotel Amit Residency /Hotel Vijaya Palace/Hotel Veerbhadra/Hotel JPG Palace/Raj Palace Inn/similar Kedarnath: (01 Night) Bombay House /Jhalaram House/GMVN/Agra Bhawan/Similar (EPAI) DELUXE HOTEL ACCOMMODATION: Guptkashi: (02 Nights) Navicrow Inn /Kedar Darshan /Hotel Kedar Valley/Hotel Mrituanjay Palace/Hotel New Bharat/Hotel Himalayan Orchid/Hotel Sun Inn/simliar Kedarnath: (01 Night) Bikaner House/Gyatri Sadan/Punjab Sindh Awas/Simliar (EPAI) LUXURY HOTEL ACCOMMODATION: Guptkashi: (02 Nights) Villa Adya Resort/ The Village Retreat/Kedar River Retreat/Charmachan/Fyoli Resort/Buransh Resort/Similar Kedarnath: (01 Night) Bikaner House/Gyatri Sadan/Punjab Sindh Awas/similar (EPAI) PACKAGE COST INCLUSION Pick up from Haridwar Railway Station and cover Kedarnath Destinations and back to Haridwar Railway Station. Standard /Deluxe/ Luxury Hotel accommodation for 03 Nights / 04 Days with complimentary Breakfast and Dinner. (Except Kedarnath) Kedarnath Stay will be EPAI Basis (Food will be directly basis) Comfort vehicle for transfers & sightseeing. Vehicle will available to guest as per itinerary only. All Toll, Parking, Driver Accommodation food and allowance. All Basic Sight seen with Kedarnath Sector. PACKAGE COST EXCLUSION Lunch, Evening snacks, Hi-Tea & GST 5% Helicopter Ticket for Kedarnath Temple from Phata/ Guptkashi to Kedarnath Breakfast & Dinner in Kedarnath Hotel. Pony, Doli, Potter for Kedarnath Trek and Extra Sight seen during Kedarnath Yatra. Special Pooja, VIP Darshan In Kedarnath Temple. Any type of train and flight tickets. Extra Sightseen (Neelkanth Temple, Lakhamandal, Triyoginarayan, Ukhimath, Kalimath, Chopta, Auli) KEDARNATH YATRA SIGHT SEENING Visit to Kedarnath ji. Visit to Prayag (Deoprayag, Rudraprayag) Visit to Rishikesh Sight seen (Ram Jhoola, Lakshman Jhoola and Parmarth Niketan) CHECK LIST FOR THE CHARDHAM YATRA Please carry a photo Id and proof of the address along with you. Do carry sufficient light woolens from May to Aug and heavy woolens from Sept to Nov. Carry good walking shoes: – canvas or sport shoes If you wish you can carry dry eatables with you like biscuits, snacks and chocolates etc. Always hire registered pony, Kandi and porter. Move slowly and steadily and give the driver enough time for rest. Please carry umbrella/ Rain coat and one torch. Carry sufficient money to pay for your personal expenses. It is advisable to carry your own personal medical kit. Avoid carrying heavy jewelry during the Yatra. Don’t use soap while bathing/ washing clothes in the river. Don’t throw wrappers/poly bags on the road or in the forest during the journey. Don’t carry poly bags as it is banned in Uttarakhand."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kumaon-tour-package-nainital-ranikhet-kausani-jim-corbett",
    "title": "Kumaon Tour Package – Nainital – Ranikhet – Kausani – Jim Corbett",
    "location": "Kumaon   – Nainital – Ranikhet – Kausani – Jim Corbett",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1119,
    "image": "/assets/images/kedarnath-uttarkhand.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Your adventure begins with a pick-up from Delhi airport or railway station, followed by a scenic drive to Nainital. Upon reaching, check-in to your hotel and indulge in a delicious...",
    "itinerary": [
      [
        "Day 1 – Delhi to Nainital",
        "Your adventure begins with a pick-up from Delhi airport or railway station, followed by a scenic drive to Nainital. Upon reaching, check-in to your hotel and indulge in a delicious breakfast. Immerse yourself in the tranquillity of Nainital Lake with a leisurely boat ride and soak in the breathtaking scenic beauty. Visit the revered Naini Devi Temple, before returning to your hotel for a delightful dinner. Nani Devi Temple: Naina Devi Temple is considered one of the Shakti Peeths. It is believed that the eyes of Goddess Sati, the wife of Lord Shiva, fell at the spot where the Naina Devi Temple is now situated. Hence, the name “Naina,” which means eyes. Possible Sightseeing: Naini Lake, Naina Devi Temple Distance Covered: 320 Kms / 07 Hrs Drive Meals: Dinner Stay: Nainital"
      ],
      [
        "Day 2 – Nainital Sightseeing",
        "After a hearty breakfast, set out for Kainchi Dham, a spiritual retreat nestled in the serene surroundings. Later, embark on an exciting lake tour, exploring the enchanting Bhimtal, Naukuchiatal, and Sattal. These lakes, nestled 5-8 kms apart, captivate with their scenic beauty and tranquil ambiance. and relish lunch at a local restaurant. Explore the Eco Cave Gardens, home to six interconnected caves showcasing the rich Himalayan wildlife and culture. Cap off the day at Tiffin Top, a hilltop offering stunning views of the Himalayan peaks. Enjoy boating on these serene waters before concluding the day with a delectable dinner and a peaceful overnight stay. Kainchi Dham:  Kainchi Dham is renowned as the ashram of Neem Karoli Baba, a revered spiritual guru and mystic. The ashram attracts devotees seeking spiritual guidance, solace, and blessings. Possible Sightseeing: Kainchi Dham, Bhimtal, Naukachiatal, Sattal, Eco Cave, Tiffin Top Distance Covered: 30-40 Kms Meals: Breakfast & Dinner Stay: Nainital"
      ],
      [
        "Day 3 – Nainital to Ranikhet",
        "Bid farewell to Nainital after a delightful breakfast and set out for Ranikhet. The journey unfolds with picturesque vistas, leading you to the serene town of Ranikhet. Upon arrival, check into your hotel and explore the local attractions that adorn the landscape. Engage in the natural beauty and cultural heritage that Ranikhet has to offer. As the day concludes, allow the tranquillity of Ranikhet to embrace you. Possible Sightseeing: Jhula Devi Temple, Mankameshwar Temple Distance Covered: 57 Kms / 02 Hrs Meals: Breakfast & Dinner Stay: Ranikhet"
      ],
      [
        "Day 4 – Ranikhet to Kausani",
        "A new day begins with a morning breakfast, followed by a scenic drive to Kausani. And explore the Sumitranandan Pant Gallery. Upon reaching Kausani, delve into the serene surroundings of the Kausani Tea Estate and Savor a mesmerizing sunset with a cup of tea at your hotel. The night unfolds in the tranquillity of Kausani. Possible Sightseeing: Sumitranandan Pant Gallery, Kausani, Anasakti Ashram Distance Covered: 90 Kms / 04 Hrs Meals: Breakfast & Dinner Stay: Ranikhet"
      ],
      [
        "Day 5 –Kausani to Corbett",
        "After a hearty breakfast in the lap of nature, bid adieu to Kausani and set forth for Corbett National Park. Upon arrival, check into your hotel and brace yourself for an exhilarating jeep safari into the heart of Jim Corbett Park (At Additional Cost). As the day transitions into night, let the untamed beauty of Corbett captivate your senses. Possible Sightseeing: Sumitranandan Pant Gallery, Kausani Distance Covered: 135 Kms / 05 Hrs Meals: Breakfast & Dinner Stay: Corbett"
      ],
      [
        "Day 6 – “Jim Corbett to Delhi",
        "Farewell with Cherished Memories” After a leisurely breakfast, check out from the hotel, bidding adieu to the wild beauty of Corbett. Embark on the return journey to Delhi, cherishing the memories of a tranquil Himalayan retreat. The tour concludes, leaving you with sweet memories to treasure. Possible Sightseeing: Morning Safari (At Additional Cost). Distance Covered: 245 Kms / 06 Hrs Drive Meals: Breakfast Stay: NA This comprehensive itinerary promises an immersive journey through natural wonders, adventure, and spiritual exploration, offering a perfect blend of tranquility and excitement in the lap of the Himalayas. Hotel Details 3 Star Hotel- Nainital 2N – Hotel Aroma / Cedar Wood Resort / Similar Ranikhet 1N – Hotel Xomotel Ranikhet / Kafal Cottage / Ranikhet Continental / Similar Kausani 1N – Sunita Himalayan Paradise / /Stay Inn / Kausani Retreat / Similar Jim Corbett 1N – Hotel Mallard Resort / Hotel Wild Vista / Similar NOTE: In Mountain/ Hills AC vehicle’s services will be not provided. AC vehicle will be provided only in case of Delhi Pick & drop to Haridwar Or Dehradun or vice versa against prior information or written confirmation."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "uttarakhand-chardham-yatra-tour-package-11-nights-and-12-days",
    "title": "Uttarakhand Chardham Yatra Tour Package – 11 Nights and 12 Days",
    "location": "Uttarakhand Chardham Yatra   – 11 Nights and 12 Days",
    "duration": "12 Days / 11 Nights",
    "price": "₹35,900 / person",
    "type": "Indian Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 4.8,
    "reviews": 2076,
    "image": "/assets/images/uttarkhand1.jpeg",
    "tags": [
      "Pilgrimage & Spiritual",
      "12 Days",
      "Indian Tour"
    ],
    "description": "Pickup from the Delhi railway station and Drive to Haridwar on arrival check in to the hotel and after refreshment visit Mansa Devi or Chandi Devi and in Evening attain holy Ganga ...",
    "itinerary": [
      [
        "Day 1 Delhi-Haridwar (230 km/5-6hr)",
        "Pickup from the Delhi railway station and Drive to Haridwar on arrival check in to the hotel and after refreshment visit Mansa Devi or Chandi Devi and in Evening attain holy Ganga Aarti in Har Ki Pauri ghat and later back to hotel dinner overnight stay in Haridwar."
      ],
      [
        "Day 2 Haridwar – Barkot (180 kms/5-6 hr)",
        "After breakfast check out from the hotel and drive to Barkot via visit Kempty Fall,outer Mussoorie and after that drive straight to Barkot on arrival check in to the hotel, after refreshment having dinner and overnight stay in Barkot."
      ],
      [
        "Day 3 Barkot-Jankichatti –(50 km/01 hr) –Yamunotri (06 km Trek )-Back to Barkot same route",
        "Morning after breakfast drive to Jankichatti by road and from Janki chatty start 6 km of trek for Yamunotri temple ( can use also potter, poni, ghori for the trek at own cost )after visit Yamunotri temple back to Jankichatti by trek and after that back to hotel by drive , taking dinner , overnight stay in Barkot."
      ],
      [
        "Day 4 Barkot – Uttarkashi (100kms/4hr)",
        "Morning after breakfast checkout from the hotel and Drive to Uttarkashi. Visit Vishwanath Temple & Others. Later Check in Hotel. Rest day at leisure. Night stay in Uttarkashi. Uttarkashi: Situated at the bank of river Bhagirathi. The temple of Lord Vishwanath is located here where a massive iron trident is erected."
      ],
      [
        "Day 5 Uttarkashi – Harsil -Gangotri (100kms/3-4 each side)-Back to Uttarkashi.",
        "Morning after breakfast we proceed to Gangotri (3048 mts), enroute we enjoy picturesque Harsil village, Bhagirathi River and the most magnificent view of the Himalayas. After Gangotri Darshan we return to Uttarkashi. Oernight stay at Uttarkashi."
      ],
      [
        "Day 6 Uttarkashi – Guptkashi (218 kms/7-8hr)",
        "Morning after Breakfast checkout from the hotel and drive to straight to Guptkashi. on arrival Check in Hotel, night halt."
      ],
      [
        "Day 7 Guptkashi –Sonprayag (30kms by road)-Gorikund- Kedarnath (14 km by Treek one side)",
        "Morning after breakfast checkout from the hotel and drive to sonprayag from sonpryag drive to Gauri Kund by local transport at own cost, on arrival Gaurikund, Trek start from Gaurikund to Kedarnath (14 Km)(can also use poni, ghori, doli for trek by own cost). Reaching in Kedarnath premises , check in to the hotel and overnight stay in Hotel. ( In Kedarnath Hotel food will not include in the Package) OR Kedarnath By Helicopter Morning after breakfast drive to Helipad on arrival, taking boarding passes and later fly for Kedarnath Helipad on arrival Kedarnath helipad go to temple by walk in after reaching check in to the hotel and overnight stay in Kedarnath ."
      ],
      [
        "Day 8 Kedarnath-Guptkashi (By Same route)",
        "Early morning visit to Kedarnath Temple and check out from the hotel and back to sonprayag via gorikund by trek and From sonprayag drive to Guptkashi by cab , back to hotel and overnight stay in Guptlkashi."
      ],
      [
        "Day 9 Guptkashi – Joshimath-Pandukeswar/Govindghat –Badrinath (218 kms/7-8hr)",
        "Morning Breakfast check out from the hotel and drive to Badrinath via Joshimath and visit Narsingh Dev Temple after that back to Badrianth on arrival check in to the hotel after refreshment visit Badrivishal and dinner overnight stay in Badrianth."
      ],
      [
        "Day 10 Badrinath – Panchprayag –Rudraprayag (155 km/5-6 hr)",
        "Early morning, pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal. Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). Later after breakfast checkout from the hotel and drive back to Srinagar via visit Panchprayag on arrival Srinagar Check in to the Hotel dinner overnight stay in Srinagar."
      ],
      [
        "Day 11 Rudraprayag-Rishikesh– Haridwar (130km/3-4 hr)",
        "Morning Breakfast checkout from the hotel and drive to Haridwar enroute visit Rishikesh Sight Seeing covering with Ram Jhula , Lakshman Jhula, Parmarth Niketan and back to haridwar attain Ganga Aarti and Check in to the hotel and dinner overnight stay in Haridwar."
      ],
      [
        "Day 12 Haridwar-Delhi (240km/4-5hr)",
        "Morning after Breakfast checkout from the hotel and drive to Delhi railway station/Airport drop"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "valley-of-flowers-trek-in-uttarakhand",
    "title": "Valley of Flowers Trek in Uttarakhand",
    "location": "Valley of Flowers Trek in Uttarakhand",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Wildlife & Adventure",
    "rating": 4.9,
    "reviews": 1352,
    "image": "/assets/images/uttarkhand.jpeg",
    "tags": [
      "Wildlife & Adventure",
      "6 Days",
      "Indian Tour"
    ],
    "description": "287 km, 8-9 Hours As advised by the tour leader of this journey, you will report at the pre-decided spot in Haridwar and will be warmly greeted by our representative. After a brief...",
    "itinerary": [
      [
        "Day 01 – Haridwar – Joshimath",
        "287 km, 8-9 Hours As advised by the tour leader of this journey, you will report at the pre-decided spot in Haridwar and will be warmly greeted by our representative. After a brief introduction about the journey, you will hop on a traveler bus to leave for Joshimath which is about 287 km away from Haridwar and can be covered in 89 hours depending upon the sharp- cutting curves on the road. Along this journey to Joshimath, you will make a brief stopover at Devprayag which is a holy site as per Hindu spirituality and where the river Bhagirathi conspire into river Alaknanda to later flow down as River Ganga. Later, you will enjoy an amazing road journey cutting through the deep edges of mountains and giving you some rare glimpses of the gorgeous landscapes of the Himalayan region. Upon reaching Joshimath, you will check in to your Guesthouse and firmly enjoy the spiritual aura of this divine town established by the very famous sage – Adi Shankaracharya. MEALS: Dinner."
      ],
      [
        "Day 02 – Joshimath – Village Ghagharia",
        "26km Drive And 9 km Trek After feasting on your breakfast, you will get ready to leave for Govindghat village which is about 26km away from Joshimath and can be covered in 2-3 hours. Govindghat is the base camp area for the Valley of flowers trek and is another celestial place located in the arms of the Himalayan Mountains. You will make a short lunch stopover at this place and feast on the local dishes while witnessing the spellbinding culture of Garhwal. Later, you will harness your trekking backpacks and get ready to make your walk towards your destination. Today, you will only make a gradual ascend towards the last inhabited village in this region – Village Ghangharia which is about 9 km away from Govindghat. You will walk into the deep Himalayan region while making your way towards Ghangharia and also enjoy the swift jumps on the boulders lined along the river Lakshman Ganga. After reaching village Ghangharia, you will get settled in your camping tents and retire for the night once you finish your dinner. MEALS: Breakfast, Lunch, Dinner."
      ],
      [
        "Day 03 – Village Ghagharia – A Short Excursion To Hemkund Sahib",
        "10 km Drive And 9 km Trek After feasting on your breakfast early in the morning, you will get ready to walk to the highest Sikh temple of India – Hemkund Sahib today. For Hemkund Sahib, you will first make a drive of about 10 km to reach the last motorable region and you will get to witness a mesmerizing journey cutting through the snow-capped mountains of Uttarakhand. After the road journey of 10km, you will once again harness your trekking backpacks and walk on a perfectly rock-leveled path to the spiritual temple of Hemkund Sahib. Hemkund Sahib holds a very spiritual and greatly revered abode of Guru Gobind Singh in the hearts of the Sikh community and largely registers a mass visitation every year. Once you pay homage inside the Hemkund Sahib, you can rest your worries while sitting beside the pristine lake harbored inside the temple arena. Later, when you believe to have roamed around the vicinity of Hemkund Sahib and gathered every religious memory of this site, you will descend back to Village Ghangharia where you will enjoy another sleepover. Note: In case the temple is closed, you will make this short excursion to Valley of Flowers that day and walk to the Hemkund Sahib the next day. MEALS: Breakfast, Lunch, Dinner."
      ],
      [
        "Day 04 – Village Ghangharia – Mesmerizing Walk To Valley Of Flowers",
        "4 km After feasting on your breakfast, you will get ready to walk to the gorgeous Valley of Flowers which is about 4km away from this town and can be traced in about 2-3 hours of time. Only after walking down 3km of distance, you will enter into the deep vicinity of the Valley of flowers and start walking along the rock-leveled path lined by different species of flowers. Once you finish your 4km of this trekking journey, you will enter into a region filled with verdant landscapes which are alone enough to melt your heart. You will enjoy a brief time cherishing the inexplicable beauty of this valley and gathering every inch of memory of the site blooming under thousands of species of flowers. You may also get a chance to watch some rare animal species during this journey and who knows you will catch a rare sight of flying squirrel, gray langur, Himalayan weasel, black bear, red fox, etc. After cherishing every joyous moment of this trekking expedition, you will get ready to retrace your path back to the village of Ghangharia where you stay for another sleepover. MEALS: Breakfast, Lunch, Dinner."
      ],
      [
        "Day 05 – Village Ghagharia – Back To Joshimath",
        "9km Trek And 26 Km Drive After feasting on your breakfast, you will get ready to say your goodbye to the amazing expedition and trek back to Govindghat which is about 9km away from Village Ghagharia and also enjoy a usual lunch stopover at this place where you enjoy some local cuisines with a gorgeous view of the snow-capped mountains. From Govindghat, you will hop on a traveler bus and drive back to Joshimath which is only about 26km away from here, and once again, cherish every sweet moment of driving on the sharp-cutting roads of Uttarakhand. Upon reaching Joshimath, you will check in to your Guesthouse with a Govt. Id. You can either enjoy a short trip through the town of Joshimath or retire for the day. Since Joshimath is a quaint little town but you can still explore some of the spiritual places like Shri Shankaracharya Math, Narsingh Temple, Bhavishya Badri, etc. MEALS: Breakfast, Lunch, Dinner."
      ],
      [
        "Day 06 – Joshimath – Back To Haridwar",
        "287 km After feasting on your breakfast early in the morning, you will drive back to Haridwar which is about 287km away from Joshimath. And make you witness the sharp-cutting road journey of Uttarakhand. Once you reach Haridwar, our representative will say goodbye to you and transfer you either to your hotel or Railway/Bus Station. MEALS: Breakfast."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "agatti-island-package-lakshadweep",
    "title": "Agatti Island Package – Lakshadweep",
    "location": "Agatti Island  – Lakshadweep",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.7,
    "reviews": 1273,
    "image": "/assets/images/kerala-houseboat.jpeg",
    "tags": [
      "Beach & Backwaters",
      "4 Days",
      "Indian Tour"
    ],
    "description": "Kochi-Agatti  (by Flight) Welcome to Agatti! Our representative will receive and escort you to your hotel after arrival at the Agatti airport. After the check  in procedures, enjoy...",
    "itinerary": [
      [
        "Day 1",
        "Kochi-Agatti  (by Flight) Welcome to Agatti! Our representative will receive and escort you to your hotel after arrival at the Agatti airport. After the check  in procedures, enjoy  lunch  and  proceed for sightseeing on the  island which  includes  attractions such  as Public  Library, Anthropological Museum, South  Beach,  Eastern  Jetty  (ship  embarkation  and  disembarkation  point), NIOT Sea Water  Desalination  Plant and  Lagoon  Beach.  In  the  evening  you can explore the  nearby beach  and  enjoy the sunset.  Back to hotel for dinner. Overnight stay at Agatti Island. Meal Plan: Lunch-Dinner"
      ],
      [
        "Day 02",
        "– Agatti  – OPTIONAL   –  Bangaram  Island Day Trip and  back  via Thinnakara  Island (by Boat) After breakfast, proceed to Bangaram Island, a small uninhabited island  of Agatti, with a well-experienced guide. From Agatti, it will take 45minutes in a private boat to reach  the island. Enjoy walks  on beautiful beaches  and see floating turtles in clear waters. After reaching Bangaram,    explore   the   island    on   foot   and our   boat  will   bring   you to Thinnakara  Island for sightseeing. In the  evening, return to your hotel and relax. Enjoy a comfortable overnight stay at Agatti. Meal Plan: Breakfast-Lunch-Dinner"
      ],
      [
        "Day  03",
        "–   Agatti  –  OPTIONAL    –  Kalpetti   Island  Trip After  breakfast, proceeds to Kalpetti Island for a half day excursion by boat. Afternoon back to Agatti,  have  Lunch  and  the rest  day  free  for  leisure  and  for water sport activities  like  diving,  snorkeling,  kayaking,  fishing,  reef  watch  etc.., all  the water sports  are directly payable at the Resort. Overnight stay at Agatti. Meal Plan: Breakfast-Lunch-Dinner"
      ],
      [
        "Day 04",
        "Departure  from Agatti After breakfast, proceeds to Agatti airport. Hope you had a great time"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "all-south-india-package",
    "title": "all south india package",
    "location": "all south india",
    "duration": "13 Days / 12 Nights",
    "price": "₹38,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 418,
    "image": "/assets/images/madurai.jpeg",
    "tags": [
      "Heritage & Nature",
      "13 Days",
      "Indian Tour"
    ],
    "description": "Arrival in Chennai, local sightseeing....",
    "itinerary": [
      [
        "Day 1–2",
        "Arrival in Chennai, local sightseeing."
      ],
      [
        "Day 3–4",
        "Mahabalipuram and Pondicherry (heritage and French colony)."
      ],
      [
        "Day 5–6",
        "Thanjavur and Trichy (temple tours)."
      ],
      [
        "Day 7–8",
        "Madurai and Rameswaram."
      ],
      [
        "Day 9–10",
        "Thekkady and Periyar wildlife sanctuary."
      ],
      [
        "Day 11–12",
        "Alleppey backwaters and houseboat stay."
      ],
      [
        "Day 13–14",
        "Kochi city tour and Kathakali performance."
      ],
      [
        "Day 15",
        "Departure from Kochi. Kerala Backwaters & Ayurveda Tour (10 Days)"
      ],
      [
        "Day 1–2",
        "Arrival in Kochi, sightseeing."
      ],
      [
        "Day 3–5",
        "Munnar hills and tea plantations."
      ],
      [
        "Day 6–7",
        "Thekkady and wildlife sanctuary."
      ],
      [
        "Day 8–9",
        "Alleppey houseboat and Ayurvedic massage."
      ],
      [
        "Day 10",
        "Depart from Kochi. Heritage and Temple Tour (12 Days) Chennai – Kanchipuram – Mahabalipuram – Thanjavur – Madurai – Trichy – Rameswaram – Kanyakumari Focuses on the Dravidian architecture marvels and sacred temples. Travel Tips for South India 1. Weather and Packing South India is generally hot and humid. Pack lightweight cotton clothes, sunblock, a hat, and an umbrella. In hill stations, carry a light jacket. During monsoons (June–September), rain gear is essential. 2. Transport Options Airports: Chennai, Kochi, Bengaluru, Hyderabad, and Trivandrum are major international airports. Trains: Indian Railways connect all major cities and towns. Book tickets early. Private Cabs: Ideal for families and senior travelers. Buses: Widely available but can be crowded and less comfortable for long journeys. 3. Language While English is widely spoken in cities and tourist areas, knowing a few words in Tamil, Malayalam, Kannada, or Telugu helps in rural areas. 4. Cultural Etiquette Dress modestly when visiting temples. Remove shoes before entering religious places. Photography may be restricted in some temples. Respect local customs and rituals. 5. Food South Indian food is predominantly vegetarian, though coastal areas offer excellent seafood. Spicy food is common, but milder options are available. Always choose bottled water. Choosing the Right Tour Operator Several tour operators specialize in South India packages, offering fixed itineraries as well as customizable ones. Consider: Reputation and reviews Licensed guides Local experience and support Customizable options Price transparency Sustainable and Responsible Tourism With increasing footfall, it’s crucial to travel responsibly: Avoid single-use plastics. Support local artisans and businesses. Choose eco-friendly stays. Respect wildlife and natural habitats. South India is also increasingly embracing eco-tourism with community-based initiatives in places like Wayanad, Coorg, and the Nilgiris. Final Thoughts A South India tour is not just a vacation—it’s an immersion into centuries-old traditions, stunning landscapes, and a rhythm of life that feels both ancient and enduring. Whether you’re gliding through the backwaters in a houseboat, tracing the intricate carvings of a Chola temple, or sipping filter coffee on a cool hill morning, South India captures the essence of soulful travel. Whether you opt for a curated package or plan your own route, the diversity and depth of South India ensure that every journey becomes a cherished memory."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "andaman-package-i",
    "title": "Andaman Package I",
    "location": "Andaman  I",
    "duration": "7 Days / 6 Nights",
    "price": "₹24,900 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1803,
    "image": "/assets/images/kerala-houseboat.jpeg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "Indian Tour"
    ],
    "description": "Arrival- Corbyn’s Cove- Cellular Jail Light & Sound Show Arrival at Port Blair in the afternoon and transfer to respective Hotel. After checkin and some rest, take a drive towards ...",
    "itinerary": [
      [
        "Day 01",
        "Arrival- Corbyn’s Cove- Cellular Jail Light & Sound Show Arrival at Port Blair in the afternoon and transfer to respective Hotel. After checkin and some rest, take a drive towards Corbyn’s Cove Beach, about 7 kms from Port Blair. This coconut palm fringed beach, is ideal for swimming. Later proceed to the National Monument the Cellular Jail, and witness the saga of the Indian Freedom struggle through the Light and Sound Show, held within the same complex. Return to Hotel. Stay Overnight in Port Blair"
      ],
      [
        "Day 02",
        "Havelock Island After breakfast and as per ferry timing transfer to Jetty to take the onward ferry to Havelock Island.  On arrival at Havelock Island, our representative will receive and escort you to check-in to the respective hotel / resort. After checkin, proceed to the Radhanagar Beach, one of the most picturesque beaches on the Islands. The beach has also been ranked 07th among the beaches of Asia by the TIME magazine. Return to hotel / resort. Stay Overnight in  Havelock Island."
      ],
      [
        "Day 03",
        "Havelock – Neil Island. (Check out time 0800 hrs) After an early breakfast, and as per ferry timing proceed to the Jetty to take the Ferry to Neil Island. After check-in at hotel, proceed for sightseeing of this lush green Island is known for its plantations and tropical forests. The pristine white sandy beaches at Sitapur, Bharatpur and Howrah Bridge are worth a visit. The breath-taking view of sea and the lush green forests on the island rejuvenate the senses.  Return to hotel. Stay Overnight in Neil Island."
      ],
      [
        "Day 04",
        "Return to Port Blair from Neil Island.( Check out time 0800 hrs) Morning at leisure.   Later in the afternoon transfer to Havelock Jetty to take the return ferry to Port Blair as per ferry timing. Upon return from Havelock Island, transfer to Hotel. Overnight stay at respective Hotel / Resort at Port Blair."
      ],
      [
        "Day 05",
        "Ross Island + North Bay (closed on Wednesday) After Breakfast visit the Administrative Capital Prior to Independence from where the Britishers governed the entire A & N Islands-ROSS ISLAND, A destination for Nature Walk amidst friendly Deer’s & Peacocks. Smritika Museum, records the life of its political prisoners. Excursion to North Bay – Coral Island, with Glass Bottom Ride & Snorkeling (optional) one can explore the Coral reefs underneath. Overnight in Port Blair."
      ],
      [
        "Day 06",
        "Port Blair City Tour- Chidyatapu After Breakfast  proceed for a City Tour of Port Blair which includes the Fisheries Museum (Aquarium) – exhibits species of marine life peculiar to the islands, Anthropological Museum – displays tribal essential and artefacts’, Naval Marine Museum (Samudrika) – gives a good retrospect of the history, shells, Corals marine life, geography and archaeology of these islands, visit the National Memorial-Cellular Jail, Designed especially for solitary confinement it earned the Islands the dreaded name of Kala Pani,  and the Water Sports complex.After lunch proceed to Chidyatapu – famous for lush green mangroves, forest cover with numerous chirping birds and Sandy beach (Known as the Sunset Point).Overnight at Port Blair."
      ],
      [
        "Day 07",
        "Departure Drop at Airport. Return home with memories of a wonderful holiday.( Check out time 0800 hrs) End of Tour"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "bangalore-mysore-coorg-ooty-kodaikanal-coimbatore",
    "title": "Bangalore – Mysore – Coorg – Ooty – Kodaikanal & Coimbatore",
    "location": "Bangalore – Mysore – Coorg – Ooty – Kodaikanal & Coimbatore",
    "duration": "10 Days / 9 Nights",
    "price": "₹31,500 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1686,
    "image": "/assets/images/coorg.jpeg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "Indian Tour"
    ],
    "description": "Arrive Bangalore – Bangalore Local Sightseeing After Pick-up, proceed to visit Lalbagh, Bull Temple, Vidansaudha(drive past), Vishveshwarya Technological Museum, Art Gallery, Cubbo...",
    "itinerary": [
      [
        "Day 1",
        "Arrive Bangalore – Bangalore Local Sightseeing After Pick-up, proceed to visit Lalbagh, Bull Temple, Vidansaudha(drive past), Vishveshwarya Technological Museum, Art Gallery, Cubbon Park, Indira Gandhi Musical Fountain Park and ISKON temple. Overnight stay at Bangalore"
      ],
      [
        "Day 2",
        "Bangalore to Mysore After breakfact, check-out from the hotel & proceed to Mysore. En route visit Srirangapatna(Dariya Daulat Bagh, Gumbaz, Tippu Fort and Temple). On arrival check in to hotel. Evening proceed to Brindavan Garden. Overnight stay at Mysore."
      ],
      [
        "Day 3",
        "Coorg Arrival and sightseeing on the way Touring through the forest and sighting scenic beauty On the third day of holiday package, you can check out from the hotel in Mysore after having breakfast and then you can proceed for a sightseeing tour to Chamundi hills and Mysore zoo. Once you are done with the sightseeing trip you can head out to Coorg. On your arrival at Coorg you can rest for a while in the hotel and then head out for a sightseeing trip to Cauvery Nisargadhama, Dubare Reserve Forest, ( Elephant camp ) and Bylekuppe – Tibetan Temple. There will be an overnight stay in the hotel at Coorg."
      ],
      [
        "Day 4",
        "Coorg Sightseeing ​Enjoy the Temple Tours After having breakfast at the hotel, you can proceed for a sightseeing trip to Bhagamandala, Talacauvery, Abbi Falls, Raja’s Seat, and Omkareshwara Temple. In the evening you are free to shop in the local market. Then you can return back to the hotel and have a night stay."
      ],
      [
        "Day 5",
        "Ooty Arrival and sightseeing on the way Wildlife tours at Dubare Reserve Forest You can have your breakfast at the hotel and then head out for a sightseeing trip to Dubare Reserve Forest and then proceed to Ooty. On your arrival at Ooty, you can rest for a while and then visit Bandipur safari, OOTY LAKE and Boathouse. In the evening, you are free to go shopping and then return to the hotel for a night stay."
      ],
      [
        "Day 6",
        "Ooty Sightseeing Beautiful garden tour You can have breakfast at the hotel on the sixth day of package and then head out for a full day trip to Doddabetta, Tea Factory, Botanical Garden and Rose Garden. Once you are done with the day you can return back to the hotel for a night stay."
      ],
      [
        "Day 7",
        "Kodaikanal Arrival and sightseeing on the way Tour in and around Coonoor You can have your breakfast and then Coonoor. You can visit all the places of tourist attractions in Coonoor and then proceed to Kodaikanal. On your arrival at Kodaikanal, you will have a night stay."
      ],
      [
        "Day 8",
        "Kodaikanal – Sightseeing Spend fun time at Kodai Lake You can have your breakfast and then proceed to visit Cocker’s Walk, Green Valley view, Golf Course, Pine tree forest, Pillar Rock, Upper Lake View, Moire Point, Shanthi Valley View, Guna Cave, Pambar Falls, Bryant Park, and Kodai Lake Boating. Then you can go shopping in the evening and finally have an overnight stay in Kodaikanal"
      ],
      [
        "Day 9",
        "Kodaikanal To Coimbatore After the breakfast, you check out of the hotel and leave for Coimbatore. On arrival, check-in into the hotel. Then proceed to visit Aadiyogi Isha Foundation. Enjoy shopping in the local market in the evening and stay overnight at Coimbatore."
      ],
      [
        "Day 10",
        "Coimbatore Drop After breakfast, you are driven to Coimbatore airport/station to carry on with your own plans."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "bangaram-island-tour-lakshadweep",
    "title": "Bangaram Island Tour – Lakshadweep",
    "location": "Bangaram Island  – Lakshadweep",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 5,
    "reviews": 758,
    "image": "/assets/images/kerala-yoga.jpeg",
    "tags": [
      "Beach & Backwaters",
      "3 Days",
      "Indian Tour"
    ],
    "description": "– Arrival at Agatti Island – Bangaram – On arrival at Agatti airport, our representative will pick up you and transfer you to Bangaram Island by boat. On arrival, check in to resor...",
    "itinerary": [
      [
        "Day 01",
        "– Arrival at Agatti Island – Bangaram – On arrival at Agatti airport, our representative will pick up you and transfer you to Bangaram Island by boat. On arrival, check in to resort, have lunch and take rest for the day. In the evening, you can explore the nearby beach by walk and enjoy the sunset. Back to hotel for dinner. Overnight stay at Bangaram Island. Meal Plan: Lunch & Dinner"
      ],
      [
        "Day 02",
        "-Bangaram -Thinnakara Excursion (Direct Payment at the Resort) & Leisure  – Post breakfast; proceed for an OPTIONAL HALF DAY EXCURSION TO THINNAKARA ISLAND. Thinnakara is a small uninhabited island in the  same atoll of Bangaram, watch the turtles in the lagoon, enjoy the serene beach and water sports activities and go back to Bangaram Island. After Lunch, free for leisure and back to hotel. Overnight stay at Bangaram Island. Meal Plan: Breakfast & Lunch & Dinner Days  03  to  05:  -Bangaram  –  Days  for  Dive  and  water  sports  – Post breakfast; proceed  for  water  sports  activities. Enjoy  the  scuba  diving,   kayaking, snorkeling and other fun activities. Enjoy the sun bath and  later  back to resort. Overnight stay at Bangaram Island. All the water sports are directly payable at the resort. Meal Plan: Breakfast & Lunch & Dinner"
      ],
      [
        "Day  06",
        "–  Bangaram-  Agatti  (Departure)- After breakfast, you will be transfer to Agatti Island by boat which takes approx. 40 min. Reach Agatti airport and take your flight to Kochi with beautiful memories."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "classic-mysore-coorg-tour",
    "title": "Classic Mysore Coorg Tour",
    "location": "Classic Mysore Coorg",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 1815,
    "image": "/assets/images/mysore.jpeg",
    "tags": [
      "Heritage & Nature",
      "4 Days",
      "Indian Tour"
    ],
    "description": "Bangalore – Mysore Pick up from Bangalore Airport/ Railway Station / Bus Stand and drive towards Mysore. enroute visit Srirangapatna – Island fortress of Tippu Sultan. Visit Tippu’...",
    "itinerary": [
      [
        "Day 01",
        "Bangalore – Mysore Pick up from Bangalore Airport/ Railway Station / Bus Stand and drive towards Mysore. enroute visit Srirangapatna – Island fortress of Tippu Sultan. Visit Tippu’s summer Palace, Mosque, and Sri Ranganatha Temple. On arrival check into the hotel. Later in the evening enjoy sightseeing of Mysore visiting Mysore palace and Brindavan gardens. Evening free for own activities or for shopping. Overnight stay at the hotel."
      ],
      [
        "Day 02",
        "Mysore – Coorg After breakfast, checkout from the hotel and drive towards Coorg also known as Kodagu. The Coffee country of South India is also well known for their excellent hospitality. This land claims one the highest contributions to the Indian Defense. On arrival at Coorg, check in to the hotel and the rest of the day is free for nature walk and bird watching around your lush green resort. Stay at the Hotel overnight."
      ],
      [
        "Day 03",
        "Coorg After breakfast, proceed to visit Coorg Sightseeing – visit Byalakuppe the biggest Tibetan settlement in India, visit Marble Temple of Buddha, Nisargadhama, Raja Seat and Omkareshwar Temple at Madikeri and to the holy place – Tal Cauvery – the source of river Cauvery. Bagamandala, Madikeri Fort, Museum, Abbey falls after that return back to hotel and overnight stay at the hotel."
      ],
      [
        "Day 04",
        "Coorg – Bangalore After breakfast, check out from the hotel and you are dropped at Bangalore"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "ezhupunna-cochin-vagamon-vandanmedu-thekkady-kerala-package-tour",
    "title": "Ezhupunna (Cochin) – Vagamon – Vandanmedu (Thekkady) – Kerala Package Tour",
    "location": "Ezhupunna (Cochin) – Vagamon – Vandanmedu (Thekkady) – Kerala",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.7,
    "reviews": 616,
    "image": "/assets/images/kerala-houseboat.jpeg",
    "tags": [
      "Beach & Backwaters",
      "4 Days",
      "Indian Tour"
    ],
    "description": "Arrival → Ezhuppunna (Backwater Village Stay) Arrival at Cochin Airport / Railway Station Drive to Ezhuppunna (approx. 1 hr) Activities: Relax at peaceful backwater boutique resort...",
    "itinerary": [
      [
        "Day 1",
        "Arrival → Ezhuppunna (Backwater Village Stay) Arrival at Cochin Airport / Railway Station Drive to Ezhuppunna (approx. 1 hr) Activities: Relax at peaceful backwater boutique resort Pedal Boating, Country Boat Country Rod Fishing, Swimming Pool Sunset Cruise Carroms, Table tennis, Ludo (professional -glass table) Badminton court Overnight stay in Ezhuppunna."
      ],
      [
        "Day 2",
        "Ezhuppunna → Vagamon (4–5 hrs) After breakfast, drive to Vagamon (scenic hill road). Sightseeing: Vagamon Meadows Pine Forest Kurisumala View Point Thangalpara View Point Tea garden views Overnight stay in Vagamon (resort)"
      ],
      [
        "Day 3 & 4",
        "Vagamon → Vandanmedu (Thekkady) (3–4 hrs) After breakfast, drive to Vandanmedu, check in at hotel. Resort nestled amidst a lush cardamom and tea plantation, provides the perfect setting for an old-world experience. Reside in a lavish plantation with exquisitely furnished extra spacious dwellings that range from cottages to villas, suites to tree houses, all designed to enchant and comfort you. Read, swim, take a leisurely walk around the plantation, or unwind by the bonfire as you soak in the tranquility of nature. Welcome drink on arrival All Meals (02 Breakfast, 02 Lunch & 02 Dinner) Guided spice plantation tour Campfire with Music at dinner time Guided Cardamom curing center visit at Kailasapara Estate Jeep safari to the top most part of misty valley at Kailasapara Estate Boating & fishing in your very own 4 Acres Lake at Kailasapara Estate Guided trekking in a 1500 acres Forest & Spice plantation at Kailasapara Estate Overnight stay in Vandanmedu Thekkady ( 2 Nights)"
      ],
      [
        "Day 5",
        "Vandanmedu (Thekkady) → Kochi Departure (4–5 hrs) After breakfast: Scenic drive back to Kochi If time permits: quick visit to Fort Kochi / Marine Drive Drop at Airport / Railway Station"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "goa-tour",
    "title": "goa tour",
    "location": "goa",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 2076,
    "image": "/assets/images/coorg.jpeg",
    "tags": [
      "Beach & Backwaters",
      "4 Days",
      "Indian Tour"
    ],
    "description": "Arrival in Goa Upon arrival at the airport or station, you’ll be greeted and transferred to your 3-star hotel in Goa by an air-conditioned vehicle. Take some time to relax and sett...",
    "itinerary": [
      [
        "Day 01",
        "Arrival in Goa Upon arrival at the airport or station, you’ll be greeted and transferred to your 3-star hotel in Goa by an air-conditioned vehicle. Take some time to relax and settle in after your journey."
      ],
      [
        "Day 02",
        "North Goa Sightseeing (09 30 am to 05 30 pm) Get ready for a day of exploration in North Goa! Anjuna Beach: Explore the vibrant flea market and enjoy the laid-back vibe of this popular beach. Baga Beach: Indulge in water sports activities or simply relax on the sandy shores. Calangute Beach: Known as the “Queen of Beaches,” soak in the sun and enjoy beachside activities. Vagator Beach: Admire the stunning cliffs and catch a mesmerizing sunset."
      ],
      [
        "Day 03",
        "South Goa Sightseeing (09 30 am to 05 30 pm) Discover the charms of South Goa today! Dona Paula: Enjoy panoramic views of the Arabian Sea and visit the Dona Paula viewpoint. Mangueshi Temple: Experience the spirituality and architecture of this revered Hindu temple. Miramar Beach: Take a leisurely stroll along the golden sands and enjoy the serene ambiance. Panjim: Explore the historic quarter of Goa’s capital city, visit local markets, and savor Goan cuisine."
      ],
      [
        "Day 04",
        "Departure Sadly, it’s time to bid farewell to Goa. Check out from your hotel and depart for the airport or station, where your memorable trip comes to an end."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "hampi-badami-aihole-pattadakal",
    "title": "Hampi – Badami – Aihole – Pattadakal",
    "location": "Hampi – Badami – Aihole – Pattadakal",
    "duration": "5 Days / 4 Nights",
    "price": "₹20,500 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.8,
    "reviews": 1737,
    "image": "/assets/images/hampi-badami-aihole-pattadakal.jpeg",
    "tags": [
      "Heritage & Culture",
      "5 Days",
      "Indian Tour"
    ],
    "description": "Hampi – Badami – Aihole – Pattadakal Breakfast at hotel. Checkout from Hotel. Drive to Badami Enroute visit enroute Banashankari Temple. Visit Sangameshwara temple. Visit Malegitti...",
    "itinerary": [
      [
        "Day 01",
        "Hampi – Badami – Aihole – Pattadakal Breakfast at hotel. Checkout from Hotel. Drive to Badami Enroute visit enroute Banashankari Temple. Visit Sangameshwara temple. Visit Malegitti shivalaya Fort and temple. Overnight stay at Hotel"
      ],
      [
        "Day02",
        "Badami Breakfast at Hotel Visit Bhuthanatha temple. Visit Agastya Lake. Visit Ravana Pahad and Badami Fort. Overnight stay at the hotel."
      ],
      [
        "Day 3",
        "Badami to Hampi Breakfast at Hotel. Drive to Hampi Arrive Hampi and check in to the hotel. Visit Anegundi Local Sightseeing, Queen’s palace. Visit Durga Temple & Fort. Visit Pampa Sarovar Visit Anjana Parvat (Lord Hanuman Birth Place) Overnight stay at Hotel"
      ],
      [
        "Day 04 Hampi",
        "Breakfast at Hotel. Visit Virupaksha Temple. Visit Ganesh images. Visit Lashminarashimha Temple. Visit Badavilinga. Visit Lotus Mahal. Visit Queens Bath. Visit Vittal Temple & Stone Chariot Overnight stay at the hotel."
      ],
      [
        "Day 05",
        "Hampi Breakfast at hotel. Check out from the hotel Drop at Railway station/Bus stand"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "hyderabad-city-tour",
    "title": "Hyderabad City Tour",
    "location": "Hyderabad City",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1539,
    "image": "/assets/images/hyderbad.jpeg",
    "tags": [
      "Heritage & Nature",
      "4 Days",
      "Indian Tour"
    ],
    "description": "A Gentle Introduction to Hyderabad On arrival at Hyderabad Airport, you will be warmly received and transferred to your hotel for check-in and relaxation. As the city unfolds, begi...",
    "itinerary": [
      [
        "DAY 1",
        "A Gentle Introduction to Hyderabad On arrival at Hyderabad Airport, you will be warmly received and transferred to your hotel for check-in and relaxation. As the city unfolds, begin your journey with a peaceful visit to Birla Mandir, offering calm views and spiritual serenity. Continue to the majestic Qutub Shahi Tombs, where royal stories rest in timeless stone, followed by an exploration of the legendary Golconda Fort, echoing with tales of power and grandeur. As evening approaches, enjoy leisure moments at Lumbini Park before gliding across the tranquil waters of Hussain Sagar Lake. Conclude the day with a captivating laser show that brings Hyderabad’s history to life, before returning to the hotel for an overnight stay"
      ],
      [
        "DAY 2",
        "Ramoji Film City – A Day Inside the World of Cinema Step into the magical world of movies with a full-day holiday studio tour at the iconic Ramoji Film City. The experience begins with a thematic opening ceremony at 9:45 a.m., setting the tone for an unforgettable journey into cinema. Travel through the vast studios aboard a charming non-AC vintage bus as you explore famous film locations, including the grand Baahubali sets. Enjoy the excitement of Ramoji Movie Magic with thrilling experiences such as the Action Theatre, Space Yatra, and Filmi Duniya, where fantasy and filmmaking come alive. Be entertained by spectacular live shows including Spirit of Ramoji, the Wild West Stunt Show, Dad jinn’s Live TV Show, and Lights, Camera, Action. Wander through beautifully designed locations and lush gardens before enjoying a delicious vegetarian lunch at Eureka. The fun continues at Fundustan, featuring Borasura, Toyland, and an energetic Rain Dance, making it a delight for children and families alike. Discover nature during the eco tour, visiting the Butterfly Park, Exotic Bird Park – Wings, and the serene Bonsai Garden – Vaman. Conclude the day with a fascinating motion-capture virtual shoot experience, offering a glimpse into modern filmmaking technology. Note: Professional photography is not permitted. Cameras beyond DSLR specifications (18–55 mm) and any form of recording instruments are strictly prohibited"
      ],
      [
        "DAY 3",
        "Echoes of Faith, Art, and Farewell The day begins with a visit to the regal Chow Mahalla Palace, once the seat of the Nizams and a symbol of royal elegance. Continue to the iconic Charminar, the heart of Hyderabad, standing tall amid centuries of history, followed by a peaceful visit to the sacred Mecca Masjid nearby. Step into the world of art and heritage at the Salarjung Museum, home to one of the finest collections of rare artefacts and timeless treasures. Later, stroll through the lively lanes of Laad Bazaar, famous for its traditional bangles and local crafts. As the journey nears its end, seek serenity at the Statue of Equality, a symbol of harmony and devotion. With memories of Hyderabad etched in the heart, proceed for transfer and drop at the airport."
      ],
      [
        "DAY 4",
        "Nature’s Farewell Embrace After breakfast, check out from the hotel and proceed to Nehru Zoological Park, one of the largest and most well-maintained zoos in India, spread across vast greenery near Mir Alam Lake. Home to a wide variety of wildlife including lions, tigers, leopards, elephants, rhinoceros, deer, reptiles, and exotic birds, the park offers a refreshing blend of education and leisure. Well-planned safari zones, spacious natural enclosures, shaded walkways, and a toy train ride make the visit enjoyable for families and children alike. The serene environment and natural landscapes provide a calm and memorable experience, perfect for winding down the journey. After the visit, enjoy lunch at a local restaurant. Later, proceed for transfer and drop at the airport, carrying home beautiful memories of Hyderabad."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "karnataka-heritage",
    "title": "karnataka heritage",
    "location": "karnataka heritage",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 5,
    "reviews": 1165,
    "image": "/assets/images/karnataka-heritage.jpeg",
    "tags": [
      "Heritage & Culture",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Bangalore / Hassan (180kms / 4 Hrs)  Morning board your vehicle and drive to Hassan, en-route visit Shravanabelagola – The monolithic statue of Lord Gomateshwara, a jain saint and ...",
    "itinerary": [
      [
        "Day 01",
        "Bangalore / Hassan (180kms / 4 Hrs)  Morning board your vehicle and drive to Hassan, en-route visit Shravanabelagola – The monolithic statue of Lord Gomateshwara, a jain saint and an object of worship for centuries, standing atop one of the hills. On arrival check in to your hotel. After lunch visit Belur & Halebeed Temple. Evening free. Overnight."
      ],
      [
        "Day 02",
        "Hassan I Badami (450kms / 8hrs)  Morning breakfast at 07.30hrs. Check out and drive to Badami, on arrival check in to your hotel, evening visit Badami caves. Dinner and overnight."
      ],
      [
        "Day 03",
        "Badami / Hospet (125kms / 3hrs)  Morning breakfast, checkout and drive to Hospet, en-route visit Pattadakal – A World Heritage Site it has 10 major temples representing early Chalukyan architecture. Visit Virupaksha, Mallikarjuna and Papanatha Temples. Lunch and there on drive to Aihole – The famous as cradle of Indian temple Architecture, it has over 125 temples all intricately carved and rich in detail. Famous ones are Lad Khan temple, Durga temple, Ravalphadi Cave temple, Konti temple complex, jain Meguti temple are a few not to be missed. On arrival check in to a hotel and overnight."
      ],
      [
        "Day 04",
        "Hospet  Morning breakfast, proceed for a full day sightseeing visit to King’s Palace – this is the largest enclosure, including two major platform structures, an underground chamber which must have served as a treasury or private audience hall, Mahanavami Dibba – equally impressive is the massive Mahanavami Dibba, where the kings once sat on gem- studded golden thrones and watched processions pass by. Queen’s Bath – This structure has a very plain exterior but the interior is stunningly ornate, with graceful arched corridors, projecting balconies and lotus-shaped fountains that used to spout perfumed water for the ladies of the court. Return to hotel and overnight."
      ],
      [
        "Day 05",
        "Hospet – Hampi Morning breakfast, day tour visit Hampi, Thungabadhra Dam, Banashankari Temple or go for Slot bear watching."
      ],
      [
        "Day 06",
        "Hospet / Bangalore(350kms / 6 hrs)  Morning breakfast, at 08.00hrs, check out and drive to Bangalore. On arrival drop at Taj West End hotel or airport. Tour ends."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kavaratti-island-lakshadweep",
    "title": "Kavaratti Island -lakshadweep",
    "location": "Kavaratti Island -lakshadweep",
    "duration": "2 Days / 1 Nights",
    "price": "₹13,900 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.8,
    "reviews": 1608,
    "image": "/assets/images/kerala-houseboat.jpeg",
    "tags": [
      "Beach & Backwaters",
      "2 Days",
      "Indian Tour"
    ],
    "description": "–   Arrival   at   Agatti   Island   –   Kavaratti   – On  arrival  at  Agatti  airport,  our representative will pick up you and transfer you to Kavaratti Island by boat, which ta...",
    "itinerary": [
      [
        "Day   01",
        "–   Arrival   at   Agatti   Island   –   Kavaratti   – On  arrival  at  Agatti  airport,  our representative will pick up you and transfer you to Kavaratti Island by boat, which take approximates 02.03hours. On arrival, check in to resort, have lunch and take rest for the day.  In the evening, you can explore the nearby beach by walk and enjoy the sunset. Back to hotel for dinner.  Overnight stay at Kavratti Island.  Meal Plan: Lunch & Dinner Days  02  to  05:  -Kavaratti  –  Days  for  Dive  and  water  sports  – Post breakfast; proceeds for water sports activities. Enjoy the scuba diving, kayaking, snorkeling and other fun activities. Enjoy the sun bath and later back to resort. All the water sports are directly payable at the resort.  Overnight stay at Kavratti Island. Meal Plan: Breakfast & Lunch & Dinner OPTIONAL  EXCURSION  (Direct  payment) at Kavaratti includes Kavaratti  Island  lagoon,  Marine  aquarium  and  Museum,  Dolphin Dive centre & Ujra mosque…,"
      ],
      [
        "Day  06",
        "–  Kavaratti  –  Agatti  (Departure)- After breakfast, you will be transfer to Agatti Island by boat. Reach Agatti airport and take your flight to Kochi with  beautiful memories."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kerala-houseboat",
    "title": "Kerala HouseBoat",
    "location": "Kerala HouseBoat",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 688,
    "image": "/assets/images/kerala-houseboat.jpeg",
    "tags": [
      "Beach & Backwaters",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Itinerary\r\nThe specially designed houseboats exquisitely echo Kerala culture. Having a trip on these floating paradises would surely impress you. It brings to you a great opportuni...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Itinerary\r\nThe specially designed houseboats exquisitely echo Kerala culture. Having a trip on these floating paradises would surely impress you. It brings to you a great opportunity of enjoying the village life and scenic charm of authentic Kerala from a really closer view. As the houseboats move g"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kerala-package-tour-the-green-triangle",
    "title": "Kerala Package Tour – The Green Triangle",
    "location": "Kerala   – The Green Triangle",
    "duration": "5 Days / 4 Nights",
    "price": "₹20,500 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.7,
    "reviews": 1690,
    "image": "/assets/images/rajasthan1.jpg",
    "tags": [
      "Beach & Backwaters",
      "5 Days",
      "Indian Tour"
    ],
    "description": "ARRIVE COCHIN; TRANSFER TO MUNNAR On arrival at Cochin Airport/railway station you will be met and later transferred to Munnar. **Munnar** is a hill station located in the Idukki d...",
    "itinerary": [
      [
        "DAY 1",
        "ARRIVE COCHIN; TRANSFER TO MUNNAR On arrival at Cochin Airport/railway station you will be met and later transferred to Munnar. **Munnar** is a hill station located in the Idukki district of Kerala. Situated at an altitude of 5,200 feet, This traditional beautiful town is popular for its tea estates. Munnar is popular among nature lovers, wildlife enthusiasts, honeymooners, adventure enthusiasts and almost every kind of traveller. >Enroute view Cheeyappara & Valara waterfalls, On arrival at Munnar, check into Hotel and relax for the rest of the day. **Overnight stay at Munnar**”"
      ],
      [
        "DAY 2",
        "MUNNAR Munnar is situated at the confluence of three mountain streams – Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level. This majestic hill station was once the summer resort of the British government in South India. Sightseeing in Munnar – Mattupetty Dam, Kundale Lake, Echo point, Rajamalai where you can visit the rarest species known as Nilgiri Thars (Subject to opening)"
      ],
      [
        "DAY 3",
        "MUNNAR – THEKKADY After Breakfast from Hotel/Resort, Check out and drive to Thekkady. A scenic journey past mist capped mountains, spice plantations and open grasslands lined with spectacular water falls & delightful trekking trails form the access to your hide way here. On arrival Check in to your already booked hotel in Thekkady, Refresh and Proceed to Thekkady Sightseeing. Boat safari on the Periyar Lake extends a lifetime’s chance to spot exotic wildlife in its natural habitat. Overnight at Thekkady (Extra Payable) Note: Boat Ride at Lake Periyar, please book direct by online in advance: https://www.periyartigerreserve.org"
      ],
      [
        "DAY 04",
        "THEKKADY – ALLEPPEY After Breakfast, Checkout from Hotel/Resort, and drive to Alleppey, Check in to your already booked hotel in Alleppey, Alleppey is one of the most popular cities in Kerala which is known for its azure backwaters and houseboat cruises. You may have the chances to take part in activities like: Option of Doing Boating at Vembanad Lake at Alleppey (Direct Payable), Evening Visit Alappuzha Beach The beaches of Alappuzha offer excellent sunset views. Evening Back to Resort, Overnight stay at Alleppey"
      ],
      [
        "DAY 06",
        "COCHIN AIRPORT DROP After check out from the Hotel and drive to Cochin Airport / railway station (depend on your departure place) for your flight / train back home, feeling contented about a wonderful holiday you spent in the God’s Own Country."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kerala-yoga-journey-with-nature-retreats",
    "title": "Kerala Yoga Journey with Nature Retreats",
    "location": "Kerala Yoga Journey with Nature Retreats",
    "duration": "14 Days / 13 Nights",
    "price": "₹40,300 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.7,
    "reviews": 605,
    "image": "/assets/images/shiradi.jpeg",
    "tags": [
      "Beach & Backwaters",
      "14 Days",
      "Indian Tour"
    ],
    "description": "Cochin — Ezhupunna (44 Km / 1.5 hrs) Arrive at Cochin airport, meet assistance by our representative, followed by a transfer to your hotel. Overnight at the hotel....",
    "itinerary": [
      [
        "Day 1 ",
        "Cochin — Ezhupunna (44 Km / 1.5 hrs) Arrive at Cochin airport, meet assistance by our representative, followed by a transfer to your hotel. Overnight at the hotel."
      ],
      [
        "Day 2 ",
        "Ezhupunna Start your day with an early morning Yoga session and a healthy breakfast later, at the hotel. Proceed to Fort Kochi and experience ethnic tour start with the visit of the famous Chinese Fishing Nets of Cochin. The huge cantilevered Chinese Fishing Nets that droop towards the waters like over sized hammocks have become a hallmark that represents Fort Kochi on every postcard. Next visit is at the St.Francis CSI Church, the oldest European church in India built in 1503, where the Portuguese explorer Vasco da Gama was originally buried and passed by the finest Santa Cruz Basilica. Take a tuk tuk – the most popular mode of transport among the localities, go along with your local tour and stop at the Dhobi Khana (laundry station), once throbbing with activity, it is now a picture of slow extinction. Enjoy lunch at a local restaurant. Continue through the small streets of Mattanchery, and arrive at the fruit market on Palace Road where locals get a variety of fresh and organic produces at bargains prices. Don’t miss a stop at the spice market, where exotic odors of the finest ginger, cloves, cardamom, turmeric and pepper emanate from the spice warehouses lining the street. Make a pause and have one “meter tea” at one of the tea stall. There is now an opportunity to interact with a Brahmin family. The Brahmin are the highest of the four Hindu castes of priests and scholars of Vedic literature, their traditional occupation is to conduct rites at marriages, births and other auspicious occasions. This ritual called mehndi arts holds plenty of cultural significance in Indian traditions and is one of the most important ritual during the wedding ceremonies. Visit the Jewish Synagogue at the heart of what is locally called the Jew Town, and finally stop at the Dutch Palace with its beautiful mural paintings from the 17th century. Rest of the day free to enjoy the premise and activities of the hotel. Overnight stay at the hotel."
      ],
      [
        "Day 3 ",
        "Ezhupunna This early morning proceed with your morning Yoga session before your breakfast. Go on an exotic village tour the first stage commence by walking through the man made country side foot paths by the side of narrow canals for 15-20 minutes and reach a junction called “Cherunkal”. On the way you can see many houses of old and different types. Your tour will be passing through and by the side of fish farms rearing prawns and the greenly lush paddy fields. Enjoy bird watching of different types of water birds and their chirpings. Follow with a cycling tour from Cherunkal, move on to the next point called Vellathode and reach there within 20 minutes. On the way you can enjoy the glorious greenery of the village and its serenity and beauty. At the end of the cycling you reach a village market where all kinds of local fishes and vegetables are put for sale. In and around this market, you can have the taste of local food and a tea from the local shops. The market is by the side of backwaters and a country boat will be waiting for you for the cruise. A sweet & Fresh tender coconut welcome you on board. The cruise will be in a non mechanized country boat which is pulled manually. This journey takes 2 hours and get you to the next village called `Thazhuppu’. Kingfishers just popping in, see the green country side, swaying palm trees and people warm and friendly. Disembark and walk to a family meal experience interactions with the family, exchange of ideas and enriching experience with local Nasarani food for lunch. Later the day visit the local boat building yard/unit where you can watch the craftsmanship of the local carpenters. Back to the hotel, over night stay at the hotel."
      ],
      [
        "Day 4 ",
        "Ezhupunna — Vagamon (44 Km / 1.5 hrs) After an early morning Yoga session and a healthy breakfast, check-out and drive to Vagamon. On arrival check-in at Vanilla County, a farmstead at the foothills of Vagamon, surrounded by a beautiful series of hillocks, valleys and cascading waterfalls. The rest of your day is free to enjoy the premises of your hotel. There is opportunity to indulge in a rejuvenating ayurvedic massage. Overnight stay at the homestay."
      ],
      [
        "Day 5 ",
        "Vagamon This early morning proceed with your morning Yoga session before your breakfast. In the afternoon, take a spice plantation excursion into the tropical fields where you can touch, smell and taste almost all the spices seen worldwide. Follow your exotic journey with a swim in one of the natural rock pools around. Evening enjoy a drive to a view point for a sunset session. Overnight stay at hotel."
      ],
      [
        "Day 6 ",
        "Vagamon Wake-up with the surroundings chanting birds of this serene area and before your break-fast at the homestay proceed with your morning Yoga session, today followed by a workshop on Yoga along with a resort or local Yoga teacher. This afternoon take a Tea Tour : From the homestay proceed to a tea plantation passing through the tea gardens rolling hills and villages and take a visit to the tea factory : Learn the intricacies of tea manufacture – the difference between Orthodox and CTC Black Tea manufacture as well as master the nuances of tea tasting and how to brew a perfect cup of black tea. Drive back to your hotel, on your may stop at the Christian Monastery Kurisumala, in the heart of the Sahya Mountains. It is a meditative place where thoughts arise from the depth of silence. Even today people move to these mountains in search of peace of mind. Over-night stay at the homestay."
      ],
      [
        "Day 7 ",
        "Vagamon – Alleppey (110 Km / 31/2 hrs) After an early morning Yoga session and a healthy breakfast, check-out and drive to Alleppey. Rightly known as Venice of the East, Alleppey with its majestic canals, streams and distributaries along its banks, weave an intricate and enchantingly beautiful web. On arrival check-in at your hotel, with beautiful backwater frontage. Rest of the day free amidst coconut groves and views of the backwaters. There is opportunity to indulge in a rejuvenating ayurvedic massage. Enjoy a sunset cruise as organised by the hotel. Over­ night stay at hotel."
      ],
      [
        "Day 8 ",
        "Alleppey – Kumarakom – Alleppey This morning proceed with your morning Yoga session breakfast at the hotel. Free time and Lunch. Later the day go in to the Musings of Aymanam village, home of Arundha thi Roy’s novel ‘The God of Small Things’. Start your local immersion with a ride on a traditional canoe cruise through the narrow, complete tranquil except for the birds or someone washing clothes. Follow with a walk in the heart of this typical Kuttanad village sur-rounded by paddy fields and identify the snakes abodes, sacred to earliest habitants, some of them still alive. The walk through the village with your storey teller is an opportunity, rare indeed, see local houses, the friendly people and the ways of Living. Meet your Kathakali master in his house who will introduce you to this traditional theatre form, which adapts styles of ancient Sanskrit with visual presentations of human expressions. Follow the trail to a local household. Experience a typical Kerala vegetarian lunch served on plantain leaf. Travel about 15 minutes and your guide will start explaining the birds —various categories — that you see on the paddy fields and the surrounding areas. Vembanad lake with its majestic canals, streams and distributaries along its banks, weave an intricate and enchantingly beautiful web. We proceed back to our hotel by motor boat absorbing the joy of visions around the backwaters. Overnight stay at hotel."
      ],
      [
        "Day 9",
        "Alleppey Take an early morning Yoga session with the resort Yoga master and a healthy breakfast later, at the hotel. Day free to relax, or enjoy some ayurvedic treatments. You may also explore some of the activities offered in the property such as canoeing in the canals, village walk, or stay by the pool or just watch the life on backwaters from your launch in the garden. There are also enough possibilities for a curious bird watcher. This evening experience a tranquil Yoga session before you go for dinner. Overnight stay at the hotel."
      ],
      [
        "Day 10",
        "Alleppey-Marari Beach (18 Km 30 mnts) After an early morning Yoga session and a healthy breakfast, check-out and drive to Marari Beach right on the shores of the Arabian Sea. On arrival check-in at the Marari Sands and lunch at the in-house restaurant. Day free to relax by the pool or at the beach. Enjoy another Yoga session in the evening as the sea as your backdrop dinner and over- night stay at the hotel."
      ],
      [
        "Day 11",
        "Marari Beach After your Yoga class and breakfast, pick one of the cycles and take a tour to visit the local villages, temples and churches around. Rest of the day free to relax by the pool, the beach. Overnight stay at the hotel."
      ],
      [
        "Day 12",
        "Marari Beach Before breakfast enjoy an early morning Yoga session with the sunrise. Free time until Day 12: Marari Beach lunch. Later join for a workshop on Yoga along with the resort Yoga teacher followed by the Yoga session. Overnight stay at the hotel."
      ],
      [
        "Day 13",
        "Marari Beach-Cochin (45 Km 1.5 hrs) Have a morning Yoga session followed by the breakfast. Check-out and drive to Fort Kochi. On arrival check-in at the hotel. This afternoon is free to explore the Colonial Kochi. Evening witness a demonstration on Kathakali – the dance drama, unique to Kerala. This dance can be characterized by gesticulations, amazing costumes and very extensive make-up. The stories are mostly taken from the epics Mahabharatha and Ramayana. Overnight stay at hotel."
      ],
      [
        "Day 14",
        "Departure Cochin It is time to say good bye. After your breakfast transfer to the Kochi International Airport to connect your flight"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "madurai-rameswaram-kodaikanal-ooty",
    "title": "Madurai – Rameswaram – Kodaikanal – Ooty",
    "location": "Madurai – Rameswaram – Kodaikanal – Ooty",
    "duration": "7 Days / 6 Nights",
    "price": "₹24,900 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1030,
    "image": "/assets/images/madurai.jpeg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "Indian Tour"
    ],
    "description": "ARRIVAL AT MADURAI AND TRANSFER TO HOTEL On the first day you will be met on arrival at Madurai airport by our representative and will get directly transferred to Madurai. Check in...",
    "itinerary": [
      [
        "DAY 01",
        "ARRIVAL AT MADURAI AND TRANSFER TO HOTEL On the first day you will be met on arrival at Madurai airport by our representative and will get directly transferred to Madurai. Check into the hotel. Later in the evening, proceed to visit Madura Meenakshi Temple. Back to the hotel for overnight stay"
      ],
      [
        "DAY 02",
        "MADURAI – RAMESWARAM Post breakfast proceed to Rameswaram. Reach Rameswaram within 4 hrs. Later visit Dhunshkodi, Pamban Bridge, APJ Abdul Kalam Memorial, visit Ramanatha Swamy Temple. Overnight stay"
      ],
      [
        "DAY 03",
        "RAMESWARAM – KODAI Post breakfast, check out and proceed for Kodai. Reach Kodai by late afternoon (7 hrs). Check into the hotel and relax. Rest of the time to relax. Overnight stay"
      ],
      [
        "DAY 04",
        "AT KODAI Today is the day to explore more in Kodai. Visit, places such as: Kodai Lake: The lake is star-shaped, centrally located in the town of Kodaikanal and is surrounded by lush green hills of the northwestern Palani Hills range Coakers Walk: The lovely path of Coakers Walk that curves by the edge of the gorgeous mountain have been constructed mainly for morning and evening walks. One can also choose to ride a bicycle to explore the scenic location Green Valley View: Located at a distance of 5.5 km from the Kodaikanal Lake, the Green Valley View not just offers a gorgeous view Vaigai Dam: A dam built across the Vaigai River. It provides water for irrigation to the Madurai district and Dingigul district."
      ],
      [
        "DAY 05",
        "KODAI – OOTY This day morning after having breakfast at the hotel, you will be travelling from Kodai to Ooty. Reach ooty with in 6 hrs. Check into the hotel and relax. Overnight stay"
      ],
      [
        "DAY 06",
        "IN OOTY; Full day sightseeing The next day morning after having breakfast at the hotel, this day also we will use for entire local Ooty sightseeing. Ooty (short for Udhagamandalam) is a resort town in the Western Ghats mountains, in southern India’s Tamil Nadu state. Founded as a British Raj summer resort, it retains a working steam railway line. Sightseeing in Ooty includes, Ooty Lake: Ooty Lake lies at a distance of approximately 2 km from Ooty city in the district Nilgiris. The beautiful lake is spread over an area of 65 acres, and its foundation was laid down by John Sullivan who was the collector of Coimbatore in 1824. The Lake is surrounded by Eucalyptus trees and greenery all around. One can also spot numerous streams coming out through the hills. This is a perfect place to capture for people who are genuinely interested in photography. Ooty Botanical Gardens: The Ooty Botanical Garden was laid down in the year 1848 and was designed so as to have a terraced terrain. The Botanical garden in Ooty is home to many rare species of trees, chief among them being the cork tree, the only one of its kind in India. The paperbark tree, the monkey puzzle tree and an old fossilized tree estimated to be 20 million years old round out the other rare species. Ooty Rose Gardens: Rose Garden lies in the heart and soul of Ooty. The construction stays to be magnificent and there are small tunnels made wherein the roses are planted. This botanical garden conducts the best flower show of the century and it has the highest amount of rose production in the country. Different kinds of roses are cultivated here, incorporating different hybrid quality like tea and miniature roses which are gathering great footing in the market place these days. Thread Garden: The Thread Garden at Ooty is a popular tourist spot that exhibits some of the most magnificent and exquisite collection of artificial flowers and plants, all made by the expert hands of the skillful artists by using just thread. After that return back to the hotel and overnight stay at the hotel"
      ],
      [
        "DAY 07",
        "DEPARTURE TRANSFER The next day morning after having breakfast at the hotel, you will be travelling from Ooty to Coimbatore airport for your departure transfer."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "mysore-coorg-ooty-package-tour",
    "title": "Mysore Coorg Ooty Package Tour",
    "location": "Mysore Coorg Ooty",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 2088,
    "image": "/assets/images/mysore.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Bangalore to Mysore Meet & greet and drive towards Mysore. Arrive Mysore & check in to the hotel. Visit Maharaja Palace. Art Gallery in the Jaganmohan Palace house. Chamundi Hill –...",
    "itinerary": [
      [
        "Day 01",
        "Bangalore to Mysore Meet & greet and drive towards Mysore. Arrive Mysore & check in to the hotel. Visit Maharaja Palace. Art Gallery in the Jaganmohan Palace house. Chamundi Hill – temple of Chamundeshwari, monoliths of Nandi and the gigantic Mahishasura statue. Day at Leisure. Overnight stay at the hotel."
      ],
      [
        "Day 02",
        "Mysore to Coorg Visit Jayachamaraja Wodeyar Golf Club. Back to hotel. Breakfast at hotel & check out from the hotel. Enroute visit Byalakuppe – largest Tibetan settlement in South India. Arrive Coorg, Check in to the hotel. Visit Omkareshwara temple. Visit Raja Seat. Return to hotel & overnight stay at the hotel."
      ],
      [
        "Day 03",
        "Coorg Breakfast at hotel. Visit Dubare Elephant Camp. Visit Golden Temple – Tibetan monastery. Visit Nisaragadhama. Visit Abbey Falls. Overnight stay at the hotel."
      ],
      [
        "Day 04",
        "Coorg to Ooty Breakfast at hotel. Check out from the hotel. Arrive Ooty, & check in to the hotel. Visit Botanical Garden. Visit Market Place. Visit Ooty Lake. Day at Leisure. Overnight stay at the hotel."
      ],
      [
        "Day 05",
        "Excursion to Coonoor Breakfast at hotel. Visit Sim’s Park in Coonoor. Visit Lamb’s Rock. Visit Dolphin’s Nose. Return back to hotel. Overnight stay at the hotel."
      ],
      [
        "Day 06",
        "Ooty to Bangalore Breakfast at hotel. Check out from the hotel. Back to Bangalore, Drop to Airport / Railway Station / Bus Stand."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "royal-mysore-heritage-tour",
    "title": "Royal Mysore & Heritage Tour",
    "location": "Royal Mysore & Heritage",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Culture",
    "rating": 4.9,
    "reviews": 1484,
    "image": "/assets/images/royal-mysore-and-heritage.jpeg",
    "tags": [
      "Heritage & Culture",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Bangalore / Hassan-Shravanabelagola, Hassan, Belur & Halebeedu. (180kms/4hrs) ( Meal – Lunch & Dinner) Morning board your vehicle and drive to Hassan, en route visit Shravanabelago...",
    "itinerary": [
      [
        "Day 01",
        "Bangalore / Hassan-Shravanabelagola, Hassan, Belur & Halebeedu. (180kms/4hrs) ( Meal – Lunch & Dinner) Morning board your vehicle and drive to Hassan, en route visit Shravanabelagola -The monolithic statue of Lord Gomateshwara, a Jain saint and an object of worship for centuries, standing atop one of the hills. On arrival in Hassan, check in to your hotel. Lunch and proceed to visit i Belur & Halebeed Temple. Return to Hassan. Dinner and over night."
      ],
      [
        "Day 02",
        "Hassan / Mysore (120 Kms / 2 Hrs)(Meal- Breakfast, Lunch & Dinner) Morning breakfast, check out at 08.00hrs, drive to Mysore, on arrival check in to your hotel. Lunch and half a day city tour – proceed to visit Chamundi Hill, Maharaja Palace, Art Gallery, and evening Palace lighting. Return to hotel. Dinner and overnight."
      ],
      [
        "Day 03",
        "Hassan / Bangalore (180kms/4 Hrs)   Morning breakfast at 08.00hrs, checkout and drive to Bangalore en- route visit St. Philomenas Church, Srirangapatna – Island fortress of Tippu Sultan. Visit Tippu’s summer Palace (Dariya Daulat Bagh), Gumbaz, and Sri Ranganathaswamy Temple. n arrival drop off at Taj West and to airport. Tour Ends."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "south-india-temple-tour-madurai-rameshwaram-kanyakumari-kovalam",
    "title": "South India Temple Tour – Madurai Rameshwaram Kanyakumari Kovalam",
    "location": "South India Temple  – Madurai Rameshwaram Kanyakumari Kovalam",
    "duration": "5 Days / 4 Nights",
    "price": "₹20,500 / person",
    "type": "Indian Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 4.8,
    "reviews": 1830,
    "image": "/assets/images/tirupati.jpeg",
    "tags": [
      "Pilgrimage & Spiritual",
      "5 Days",
      "Indian Tour"
    ],
    "description": "Arrival Madurai Arrive at Madurai airport and proceed to hotel. Later proceed to visit Tirumalai Nayak Place, Mariamman Tank and then to Meenakshi Temple. Overnight at Madurai....",
    "itinerary": [
      [
        "Day 01 ",
        "Arrival Madurai Arrive at Madurai airport and proceed to hotel. Later proceed to visit Tirumalai Nayak Place, Mariamman Tank and then to Meenakshi Temple. Overnight at Madurai."
      ],
      [
        "Day 02 ",
        "Madurai – Rameshwaram After breakfast, proceed to Rameshwaram – situated in the Gulf of Mannar at the tip of the Indian peninsula. Visit Ramanathaswamy temple , Dhanushkodi and Adam’s Bridge. Overnight at Rameswaram."
      ],
      [
        "Day 03 ",
        "Rameshwaram – Kanyakumari After breakfast, proceed to Kanyakumari. Arrive in Kanyakumari and check into the hotel. Evening at leisure. Overnight at Kanyakumari."
      ],
      [
        "Day 04 ",
        "Kanyakumari – Kovalam After breakfast, take a boat to visit the Vivekananda Rock Memorial and Tri Samudra Milan. Later in the afternoon visit the Gandhi Mandapam and then visit Kanyakumari Amman temple. Then proceed to Kovalam. Overnight at Kovalam."
      ],
      [
        "Day 05 ",
        "Kovalam – Trivandrum – departure Early morning, enjoy sunrise at beach on your own. After breakfast, proceed to Trivandrum Airport as per your flight timings to board flight for your hometown."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "the-safari-trail-karnataka",
    "title": "The Safari Trail Karnataka",
    "location": "The Safari Trail Karnataka",
    "duration": "8 Days / 7 Nights",
    "price": "₹27,100 / person",
    "type": "Indian Tour",
    "category": "Wildlife & Adventure",
    "rating": 4.7,
    "reviews": 1167,
    "image": "/assets/images/coorg.jpeg",
    "tags": [
      "Wildlife & Adventure",
      "8 Days",
      "Indian Tour"
    ],
    "description": "Drive from Bangalore to Bandipur National Park – check into your resort and relax amidst nature....",
    "itinerary": [
      [
        "Day 1",
        "Drive from Bangalore to Bandipur National Park – check into your resort and relax amidst nature."
      ],
      [
        "Day 2",
        "Full day at Bandipur – spot wildlife on jeep safaris and enjoy the lush greenery."
      ],
      [
        "Day 3",
        "Travel to B.R. Hills – a quiet escape with tribal culture and thick forests."
      ],
      [
        "Day 4",
        "Explore the hills – nature walks, temples, and peace."
      ],
      [
        "Day 5",
        "Drive to Mysore – visit heritage spots and experience royal charm."
      ],
      [
        "Day 6",
        "Head to Kabini (Nagarahole National Park) – one of India’s top wildlife reserves."
      ],
      [
        "Day 7",
        "Jungle safari, birdwatching, and peaceful riverside vibes in Kabini."
      ],
      [
        "Day 8",
        "Return to Bangalore with unforgettable memories."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "tirupati-darshan",
    "title": "Tirupati Darshan",
    "location": "Tirupati Darshan",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 4.9,
    "reviews": 1536,
    "image": "/assets/images/tirupati.jpeg",
    "tags": [
      "Pilgrimage & Spiritual",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Bangalore – Tirupati Pickup from Bangalore railway station/ Airport and drive towards Tirupati. On arrival at Tirupati, check in to the hotel. Later proceed to visit Sri Padmavathi...",
    "itinerary": [
      [
        "Day 01",
        "Bangalore – Tirupati Pickup from Bangalore railway station/ Airport and drive towards Tirupati. On arrival at Tirupati, check in to the hotel. Later proceed to visit Sri Padmavathi temple, Sri Govindaraja swamy temple, ISKCON temple and Sri Kapileswara swamy temple, Srikalahasti visit Sri Kalahasteeswara swamy Vayulinga Kshetram one of the ancient temples dedicated to Lord Shiva also famous for Rahu- Kethu dosha nivaran pooja and Sri Gnana Prasunambika Goddess Parvathi temple. Later return back to the hotel and overnight stay at the hotel."
      ],
      [
        "Day 02",
        "Tirumala Balaji Darshan and Papavinasanam visit After breakfast, proceed to Tirumala, believed to be Kaliguga Vaikuntam, visit Sri Venkateswara swamy (Lord Balaji) temple and Sri Varaha swamy temple. After darshan, proceed to visit local sightseeing in Tirumala including Papavinasanam, Sri Venugopala swamy temple and Japali Hanuman Temple, Varaha Swamy Temple. Later back to the hotel and overnight stay at the hotel."
      ],
      [
        "Day 03",
        "Tirupati – Bangalore After breakfast, check out from the hotel and you are dropped at Bangalore railway station/ Airport for your onward journey."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "ultimate-kerala-package-tour",
    "title": "Ultimate Kerala Package Tour",
    "location": "Ultimate Kerala",
    "duration": "7 Days / 6 Nights",
    "price": "₹24,900 / person",
    "type": "Indian Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 1716,
    "image": "/assets/images/kerala-houseboat.jpeg",
    "tags": [
      "Beach & Backwaters",
      "7 Days",
      "Indian Tour"
    ],
    "description": "ARRIVE COCHIN; TRANSFER TO MUNNAR On arrival at Cochin Airport/railway station you will be met and later transferred to Munnar . **Munnar** is a hill station located in the Idukki ...",
    "itinerary": [
      [
        "DAY 1",
        "ARRIVE COCHIN; TRANSFER TO MUNNAR On arrival at Cochin Airport/railway station you will be met and later transferred to Munnar . **Munnar** is a hill station located in the Idukki district of Kerala. Situated at an altitude of 5,200 feet, This traditional beautiful town is popular for its tea estates. Munnar is popular among nature lovers, wildlife enthusiasts, honeymooners, adventure enthusiasts and almost every kind of traveller. >Enroute view Cheeyappara & Valara water falls, On arrival at Munnar, check into Hotel and relax for the rest of the day. **Overnight stay at Munnar**”"
      ],
      [
        "DAY 2",
        "MUNNAR Munnar is situated at the confluence of three mountain streams – Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level. This majestic hill station was once the summer resort of the British government in South India. Sightseeing in Munnar – Mattupetty Dam, Kundale Lake, Echo point, Rajamalai where you can visit the rarest species known as Nilgiri Thars (Subject to opening)"
      ],
      [
        "DAY 3",
        "MUNNAR – THEKKADY After Breakfast from Hotel/Resort, Check out and drive to Thekkady. A scenic journey past mist capped mountains, spice plantations and open grasslands lined with spectacular water falls & delightful trekking trails form the access to your hide way here. On arrival Check in to your already booked hotel in Thekkady, Refresh and Proceed to Thekkady Sightseeing . boat safari on the Periyar Lake extends a lifetime’s chance to spot exotic wildlife in its natural habitat. Overnight at Thekkady (Extra Payable) Note: Boat Ride at Lake Periyar, please book direct by online in advance: https://www.periyartigerreserve.org"
      ],
      [
        "DAY 04",
        "THEKKADY – ALLEPPEY After Breakfast, Checkout from Hotel/Resort, and drive to Alleppey, Check in to your already booked hotel in Alleppey, Alleppey is one of the most popular cities in Kerala which is known for its azure backwaters and houseboat cruises., You may have the chances to take part in activities like: Option of Doing Boating at Vembanad Lake at Alleppey (Direct Payable), Evening Visit Alappuzha Beach The beaches of Alappuzha offer excellent sunset views. Evening Back to Resort, Overnight stay at Alleppey"
      ],
      [
        "DAY 05",
        "ALLEPPEY – KOVALAM After Breakfast, Checkout from Hotel/Resort, and drive to Kovalam Check in to your already booked hotel in Kovalam. Proceed for local Sightseeing (if time permits). Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favourite haunt of tourists, especially Europeans, since the 1930s. A massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing. The leisure options at this beach are plenty and diverse-sunbathing, swimming, herbal body toning massages, etc. The tropical sun acts so fast that one can see the faint blush of coppery tan on the skin in a matter of minutes. Life on the beach begins late in the day and carries on well into the night. Overnight stay at Kovalam"
      ],
      [
        "DAY 06",
        "KOVALAM – Trivandrum City Tour After breakfast proceed for day trip of Trivandrum City Tour. Visit Padmanabha Swamy Temple, Horse Palace, Napier Museum, Sree Chitra Art Gallery etc. Evening to explore Kovalam beaches. Overnight stay at Kovalam."
      ],
      [
        "DAY 07",
        "TRIVANDRUM – Departure After check out from the Hotel and drive to Trivandrum Airport / railway station (depend on your departure place) for your flight / train back home, feeling contented about a wonderful holiday you spent in the God’s Own Country."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "ajanta-and-ellora-tour",
    "title": "Ajanta and Ellora Tour",
    "location": "Ajanta and Ellora",
    "duration": "4 Days / 3 Nights",
    "price": "₹18,300 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1993,
    "image": "/assets/images/ajanta.jpeg",
    "tags": [
      "Heritage & Nature",
      "4 Days",
      "Indian Tour"
    ],
    "description": "Mumbai to Aurangabad Start your journey from Mumbai to Aurangabad. Depending on your mode of transportation, allocate time accordingly. Arrive in Aurangabad and check into your acc...",
    "itinerary": [
      [
        "Day 01",
        "Mumbai to Aurangabad Start your journey from Mumbai to Aurangabad. Depending on your mode of transportation, allocate time accordingly. Arrive in Aurangabad and check into your accommodation. Rest and relax after your journey. Optionally, explore the local area and try some authentic Aurangabadi cuisine."
      ],
      [
        "Day 02",
        "Ajanta Caves – Aurangabad Early morning departure to Ajanta Caves (about 2 hours from Aurangabad). Explore the UNESCO World Heritage site of Ajanta Caves, known for its ancient rock-cut Buddhist cave monuments. Ajanta Caves feature exquisite murals and sculptures, providing a glimpse into ancient Indian art and culture. Return to Aurangabad in the evening. Evening at leisure or explore the local markets."
      ],
      [
        "Day 3",
        "Pitalkhora Caves + Local Sightseeing Visit Pitalkhora Caves, which are lesser-known but equally fascinating rock-cut caves with historical significance. After exploring Pitalkhora, return to Aurangabad for local sightseeing. Local attractions may include Bibi Ka Maqbara (also known as the Mini Taj Mahal), Aurangabad Caves, and other historical sites. Spend the evening shopping for souvenirs or enjoying local delicacies."
      ],
      [
        "Day 4",
        "Aurangabad – Mumbai Check out from your hotel in Aurangabad. Depending on your departure time, you may have some free time for any last-minute exploration or shopping. Depart for Mumbai, completing your journey back."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "aurangabad-shirdi-pune-nashik-tour",
    "title": "Aurangabad – Shirdi – Pune – Nashik Tour",
    "location": "Aurangabad – Shirdi – Pune – Nashik",
    "duration": "6 Days / 5 Nights",
    "price": "₹22,700 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1376,
    "image": "/assets/images/triambakeshwar-maharashtra.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "Indian Tour"
    ],
    "description": "Pune On arrive pick up from Pune airport & drop at hotel. On arrive check in hotel & relax. Overnight stay at hotel....",
    "itinerary": [
      [
        "Day 1 ",
        "Pune On arrive pick up from Pune airport & drop at hotel. On arrive check in hotel & relax. Overnight stay at hotel."
      ],
      [
        "Day 2 ",
        "Pune to Aurangabad After morning breakfast proceed to visit Ajantha caves & Daulatabad fort. Evening return to Aurangabad & visit Bibi ka Makbara. After sightseeing Check in to Aurangabad hotel."
      ],
      [
        "Day 3 ",
        "Aurangabad – Shirdi After morning breakfast check out from hotel & proceed to visit Ellora caves & Ghrishneshwar jyotirlinga temple, after darshan proceed to Shirdi. On arrive check in hotel & do Shiridi Sai Darshan. Overnight stay at SHIRIDI hotel."
      ],
      [
        "Day 4 ",
        "Shirdi – Shani Shingnapur – Nashik After morning breakfast, check out from hotel & proceed to Nashik. On the way visit Shani Shingnapur temple, take a darshan & proceed to Nashik. VISIT NASIK Trymbakeshwar Temple (One of the JyotirLinga ) & Panchabati- subject to time availability. Check in to hotel & relax. Overnight stay in Nashik."
      ],
      [
        "Day 5 ",
        "Nashik – Mumbai After morning breakfast check out from hotel & proceed to Mumbai. On arrive visit Local sightseeing like Mahalaxmi temple, Sidhhivinayak temple, Bandra worli sea link, Gateway of India, Juhu Chowpati etc. Evening check in hotel & relax. Overnight stay."
      ],
      [
        "Day 6 ",
        "Mumbai After morning breakfast drop at Mumbai Airport."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "glimpse-of-gujarat",
    "title": "Glimpse of Gujarat",
    "location": "Glimpse of Gujarat",
    "duration": "7 Days / 6 Nights",
    "price": "₹24,900 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 2040,
    "image": "/assets/images/gujarat-kutch.jpeg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "Indian Tour"
    ],
    "description": "Rajkot – Dwarka (240 km / 5 hrs) Arrive at Rajkot and begin your scenic journey to Dwarka, one of India’s holiest cities. En route, stop at Jamnagar to visit the famous Bala Hanuma...",
    "itinerary": [
      [
        "Day 1",
        "Rajkot – Dwarka (240 km / 5 hrs) Arrive at Rajkot and begin your scenic journey to Dwarka, one of India’s holiest cities. En route, stop at Jamnagar to visit the famous Bala Hanuman Temple, known for its world-record continuous chanting of “Ram Dhun” since 1964. Continue towards Dwarka and arrive by evening. Check in at the hotel and relax. Overnight stay in Dwarka."
      ],
      [
        "Day 2",
        "Dwarka Sightseeing After breakfast, begin your spiritual exploration with a visit to the sacred Dwarkadhish Temple dedicated to Lord Krishna. Take a holy dip at Gomti Ghat and then visit the Rukmini Devi Temple. In the afternoon, proceed to Bet Dwarka, believed to be Lord Krishna’s original residence. En route, visit the Nageshwar Jyotirlinga Temple, one of the twelve Jyotirlingas of Lord Shiva. In the evening, enjoy leisure time at Shivrajpur Beach. Overnight stay in Dwarka."
      ],
      [
        "Day 3",
        "Dwarka – Porbandar – Somnath (250 km / 5 hrs) After breakfast, check out and drive towards Somnath. En route, visit Porbandar, the birthplace of Mahatma Gandhi, and explore Kirti Mandir. Arrive in Somnath by afternoon and relax. In the evening, visit the revered Somnath Temple and attend the evening Aarti. Later, enjoy the Sound & Light Show that beautifully narrates the temple’s rich history. Overnight stay in Somnath."
      ],
      [
        "Day 4",
        "Somnath – Sasan Gir (Approx. 50 km / 1 hr) After breakfast, check out and visit Bhalka Tirth, Geeta Mandir, and Triveni Sangam. Later drive to Sasan Gir. Check in at the hotel. In the evening, enjoy an exciting Gir Jungle Safari in Gir National Park, the only natural habitat of Asiatic Lions. Overnight stay in Sasan Gir."
      ],
      [
        "Day 5",
        "Sasan Gir – Bhavnagar (Approx. 280 km / 6 hrs) After breakfast, check out and drive to Bhavnagar. Upon arrival, check in at the hotel. Later visit Nishkalank Mahadev Temple near Koliyak Beach. The temple is uniquely located in the sea and can be accessed only during low tide, where devotees walk through shallow waters to reach the shrine. Overnight stay in Bhavnagar."
      ],
      [
        "Day 6",
        "Bhavnagar – Statue of Unity (Approx. 300 km / 6 hrs) Early morning depart for Kevadia, home to the magnificent Statue of Unity – the world’s tallest statue dedicated to Sardar Vallabhbhai Patel. After check-in, visit the Sardar Sarovar Dam, Valley of Flowers, and the Statue of Unity Viewing Gallery. In the evening, witness the spectacular Projection Mapping Show. Overnight stay in Kevadia."
      ],
      [
        "Day 7",
        "Kevadia – Vadodara – Dakor – Ahmedabad (Approx. 200 km / 4 hrs) After breakfast, check out and drive to Vadodara. Visit the majestic Laxmi Vilas Palace, one of the largest private residences in the world, and enjoy a walk through Sayaji Garden. Later proceed to Dakor to visit the sacred Ranchhodrai Temple dedicated to Lord Krishna. After darshan, continue your journey to Ahmedabad. Arrive in the evening with time for shopping or leisure. Overnight stay in Ahmedabad."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "gujarat-kutch-rann-utsav-tour",
    "title": "Gujarat Kutch Rann Utsav Tour",
    "location": "Gujarat Kutch Rann Utsav",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 442,
    "image": "/assets/images/gujarat.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "Indian Tour"
    ],
    "description": " Check-in time: 12:30 PM Transfer from Bhuj to Rann Utsav – The Tent City, Dhordo on fixed timings: 08:15 AM\tFrom Railway Station, Bhuj and Airport, Bhuj 10:00 AM\tFrom Railway Stat...",
    "itinerary": [
      [
        "DAY 1",
        " Check-in time: 12:30 PM Transfer from Bhuj to Rann Utsav – The Tent City, Dhordo on fixed timings: 08:15 AM\tFrom Railway Station, Bhuj and Airport, Bhuj 10:00 AM\tFrom Railway Station, Bhuj and Airport, Bhuj 01:30 PM\tFrom Railway Station, Bhuj and Airport, Bhuj 03:30 PM\tFrom Railway Station, Bhuj and Airport, Bhuj The above timings are for fixed departures and are subject to change. No complimentary transfers will be available after the above timings. Individual transfers are available on request (chargeable). Tent allotment for guests arriving before the check-in time will be subject to availability. The distance from Bhuj to Rann Utsav – The Tent City, Dhordo, is 85 km (approx), which takes about 1 hour and 45 minutes. Arrival at Rann Utsav – The Tent City, Dhordo from Bhuj 12:30 PM Onwards\tWarm welcome and check-in 12:30 PM to 02:30 PM\tEnjoy delicious lunch at the respective dining area 02:30 PM to 04:30 PM\tLeisure time/Indulge in an exciting range of activities at Skyzilla, Club House, Craft Market/Haat, Various Selfie Points, Rejuvenation Center, Art Gallery, Live Demonstration area of Kutch craft & many others. 04:00 PM to 05:00 PM\tHigh tea at the respective dining area 05:00 PM to 07:00 PM\tVisit the Sunset Point and the breathtaking White Rann to witness the grandeur of the setting sun. Transfers will be arranged by bus, camel cart, or a combination of both for a truly memorable experience. 07:00 PM to 07:30 PM\tReturn to Rann Utsav – The Tent City, Dhordo 07:30 PM to 10:00 PM\tEnjoy a scrumptious dinner at the respective dining area 09:00 PM to 10:30 PM\tEnjoy the culture of Kutch along with entertaining activities at the cultural activity area"
      ],
      [
        "DAY 2",
        " 06:00 AM to 06:30 AM\tMorning tea 06:30 AM to 07:30 AM\tExperience a rejuvenating yoga session at the dedicated Area 06:30 AM to 07:00 AM\tVisit the Sunrise Point to witness the beauty of the rising sun over the serene White Rann. As the first light touches the vast salt desert, it creates a magical and unforgettable morning experience. 07:30 AM to 10:00 AM\tBreakfast at the respective dining area 10:00 AM to 12:30 PM\tLeisure time/Indulge in an exciting range of activities at Skyzilla, Club House, Craft Market/Haat, Various Selfie Points, Rejuvenation Center, Art Gallery, Live Demonstration area of Kutch Craft and many others. 12:30 PM to 02:30 PM\tEnjoy delicious lunch at the respective dining area 03:00 PM to 07:30 PM\tEnjoy a complimentary tour to Kala Dungar (Black Hill), the highest point of Kutch. En route, visit the handicraft village “Gandhi Nu Gaam.” Tea/coffee and light refreshments will be served during the journey. 07:30 PM to 10:00 PM\tEnjoy a scrumptious dinner at the respective dining area 09:00 PM to 10:30 PM\tEnjoy the culture of Kutch along with entertaining activities at the cultural activity area"
      ],
      [
        "DAY 3",
        " 06:00 AM to 06:30 AM\tMorning tea 06:30 AM to 07:30 AM\tExperience a rejuvenating yoga session at the dedicated area 07:30 AM to 09:30 AM\tBreakfast at the respective Dining Area 09:30 AM\tCheck-out with happy memories 11:30 AM to 02:00 PM\tComplimentary sightseeing at Smritivan Earthquake Museum, Bhuj, for 2 hours (approx) It Extends homage to the almost 13,000 victims of the massive Gujarat earthquake of 2001. Located a top Bhujia Hill in the State of Gujarat, the memorial spans an impressive 170 acres on the historically significant Bhujiyo Dungar. (It will be closed on every Monday)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "gujarat-tour-with-dwarka-somnath-sasangir",
    "title": "Gujarat Tour with Dwarka Somnath Sasangir",
    "location": "Gujarat  with Dwarka Somnath Sasangir",
    "duration": "5 Days / 4 Nights",
    "price": "₹20,500 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1312,
    "image": "/assets/images/dwaraka.jpeg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "Indian Tour"
    ],
    "description": "ARRIVE AT RAJKOT – JAMNAGAR – DWARKA (04HRS) Arrival at Rajkot and drive towards Dwarka via Jamnagar Visit Bala Hanuman Temple, Jamnagar Nageshwar Temple Dwarkadhish Temple Overnig...",
    "itinerary": [
      [
        "DAY 01",
        "ARRIVE AT RAJKOT – JAMNAGAR – DWARKA (04HRS) Arrival at Rajkot and drive towards Dwarka via Jamnagar Visit Bala Hanuman Temple, Jamnagar Nageshwar Temple Dwarkadhish Temple Overnight Stay at Dwarka"
      ],
      [
        "DAY 02",
        "DWARKA – BET DWARKA – DWARKA (01HRS) After Breakfast Visit Bhait Dwarika Rukshamanee Temple Gomti Ghat Dwarka & Gomti Talav Modhera Bhadreshwar Mahadev Temple Sudama Setu Shri Swaminarayan Temple Overnight Stay at Dwarka"
      ],
      [
        "DAY 03",
        "DWARKA – PORBANDAR – SOMNATH (04HRS) After Breakfast Checkout from Hotel Drive to Somnath via Porbandar Visit Kirti Mandir, Porbandar Somnath Mahadev Temple Light & Sound Show at temple Overnight stay at Somnath"
      ],
      [
        "DAY 04",
        "SOMNATH – DIU – SASANGIR (02HRS+3HRS) After Breakfast Nagoa Beach Diu Fort Gangeshwar Temple Naida Caves I.N.S Khukery St. Paul Church Night stay at Sasangir"
      ],
      [
        "DAY 05",
        "SASANGIR – RAJKOT DROP (04HRS) Gir National Safari (6am to 9am) After Breakfast Jalaram Temple Swaminarayan Temple Naulakha Palace Uperkot Fort Mahabbat Makbara Drop at Rajkot Stn/Airport —– TOUR ENDS ——"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kutch-tour-with-sasan-gir",
    "title": "Kutch Tour with Sasan Gir",
    "location": "Kutch  with Sasan Gir",
    "duration": "5 Days / 4 Nights",
    "price": "₹20,500 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 1265,
    "image": "/assets/images/gujarat-kutch.jpeg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "Indian Tour"
    ],
    "description": "- Bhuj to Rann of Kutch [85 KM / 1.30 HRS Approx] Arrival in Bhuj, pick up from Railway Station / Airport and transfer to Rann of Kutch, check inn to resort after refreshment enjoy...",
    "itinerary": [
      [
        "Day 1 ",
        "- Bhuj to Rann of Kutch [85 KM / 1.30 HRS Approx] Arrival in Bhuj, pick up from Railway Station / Airport and transfer to Rann of Kutch, check inn to resort after refreshment enjoy Lunch in Resort and we go for visit Karo Dungar and India Bridge and after On Evening we go for visit Rann of Kutch and enjoy activities like camel Ride, Paragliding, Camel Cart Ride, and also visit amazing view of Sunset and later back to resort enjoy Cultural program and overnight in Rann of Kutch. Meals:- Lunch, Dinner"
      ],
      [
        "Day 2",
        "- Rann of Kutch to Bhuj Sightseeing night in Gandhidham Early morning we go for visit White Rann of Kutch Sunrise view and later back to resort, breakfast and check out from hotel and transfer to Bhuj, we visit Aina Mahal, Prag Mahal, Kutch Museum and later free for Shopping at Handicraft market and after go for Lunch and later transfer to Bhujodi Village we visit Hira Lakshmi Park and Vande Mataram Museum and later free for shopping in Bhujodi village and transfer to Gandhidham, check inn to Hotel and overnight in Gandhidham. Meals: Breakfast and Dinner"
      ],
      [
        "Day 3",
        "- Gandhidham to Day trip Mandvi (90 KM one way / 01.30 HRS approx.) After Breakfast we visit Day trip to Mandvi, and we enjoy Mandvi Beach, Vijay Vilas Palace, Kranti Guru Smarak and enjoy sunset at Mandvi Beach return to Gandhidham, on the way we visit 72 Jain Temple at Koday Village, Bhadreshwar Jain Temple and overnight stay at Gandhidham. (Meals:- Breakfast and Dinner)"
      ],
      [
        "Day 4",
        "- Gandhidham to Sasan Gir (350 KM / 07 HRS Approx Drive) After breakfast check out from Hotel and drive to Sasan Gir, check inn to Hotel and if we have time we go for visit Devaliya Park Safari (own cost) and back to resort overnight in Sasan Gir. (Meals: Breakfast, Dinner at Sasan Gir Resort Only)"
      ],
      [
        "Day 5",
        "- Sasan Gir to Rajkot (180 KM / 03.30 HRS approx. drive) Early morning visit Sasan Gir Jungle Safari (approx. 3 HRS – own cost) and back to Resort after breakfast check out and transfer to Rajkot and Drop at Railway Station / Airport. (Meals: Breakfast)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "madhya-pradesh-with-gwalior-orchha-khajuraho",
    "title": "Madhya Pradesh with Gwalior – Orchha – Khajuraho",
    "location": "Madhya Pradesh with Gwalior – Orchha – Khajuraho",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 542,
    "image": "/assets/images/madhya-pradesh.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Discover the rich heritage of Madhya Pradesh on this captivating 5-night package tour featuring 2 nights in Gwalior, 1 night in Orchha, and 2 nights in Khajuraho. This itinerary bl...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Discover the rich heritage of Madhya Pradesh on this captivating 5-night package tour featuring 2 nights in Gwalior, 1 night in Orchha, and 2 nights in Khajuraho. This itinerary blends majestic forts, ancient temples, and UNESCO wonders, offering a seamless journey through central India’s historical"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "maharashtra-tour",
    "title": "Maharashtra Tour",
    "location": "Maharashtra",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1726,
    "image": "/assets/images/triambakeshwar-maharashtra.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Day Wise Itinerary\r\n1st Day : Mumbai to Mahabaleshwar, Maharastra, – Mumbai to Mahabaleshwar\r\nApprox Distance: 250 Km • Est. Travel Time: 6 hours\r\nArrive at Mumbai , and proceed to...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Day Wise Itinerary\r\n1st Day : Mumbai to Mahabaleshwar, Maharastra, – Mumbai to Mahabaleshwar\r\nApprox Distance: 250 Km • Est. Travel Time: 6 hours\r\nArrive at Mumbai , and proceed to Mahabaleshwar , enrotue visit Panchgini, on arrival check inn to pre booked hotel , overnight stay at Mahabaleshwar\r\n\r\n"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "nashik-tour",
    "title": "Nashik Tour",
    "location": "Nashik",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 723,
    "image": "/assets/images/shiradi.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Arrive Mumbai – Nashik Arrive in Mumbai. Transfer to Nashik. Check into your hotel in Nashik. Visit the Panchavati Temple complex including Ramkund and Sita Gufa. Return to the hot...",
    "itinerary": [
      [
        "Day 1",
        "Arrive Mumbai – Nashik Arrive in Mumbai. Transfer to Nashik. Check into your hotel in Nashik. Visit the Panchavati Temple complex including Ramkund and Sita Gufa. Return to the hotel for dinner and overnight stay."
      ],
      [
        "Day 2",
        "Nashik Visit Trimbakeshwar Temple. Explore the Anjneri Hills. Lunch at a local restaurant. Tour and wine tasting at Sula Vineyards. Explore local markets or Gangapur Dam. Return to the hotel for dinner and overnight stay."
      ],
      [
        "Day 3",
        "Nashik – Mumbai Drop Check out from the hotel. Visit Pandavleni Caves. Drive back to Mumbai. Lunch en route. Drop off at your preferred location in Mumbai."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "panch-dwarka-temple-tour-with-4-jyotirlinga-2-shaktipeeths",
    "title": "Panch Dwarka Temple Tour with 4 Jyotirlinga & 2 Shaktipeeths",
    "location": "Panch Dwarka Temple  with 4 Jyotirlinga & 2 Shaktipeeths",
    "duration": "13 Days / 12 Nights",
    "price": "₹38,100 / person",
    "type": "Indian Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 4.9,
    "reviews": 727,
    "image": "/assets/images/dwaraka.jpeg",
    "tags": [
      "Pilgrimage & Spiritual",
      "13 Days",
      "Indian Tour"
    ],
    "description": "Ahmedabad – Dwarka (450 kms/9hrs) Today arrival at Ahmedabad, Proceed towards Dwarka. Enroute we will visit Bala Hanuman Temple in Jamnagar. Dwarka is considered to be one of the C...",
    "itinerary": [
      [
        "Day 1",
        "Ahmedabad – Dwarka (450 kms/9hrs) Today arrival at Ahmedabad, Proceed towards Dwarka. Enroute we will visit Bala Hanuman Temple in Jamnagar. Dwarka is considered to be one of the Chardhams and Saptrishi as per Hindu Religion. Reach Dwarka and visit the marvellous Dwarkadhish Temple and Gomti Ghat."
      ],
      [
        "Day 2",
        "Dwarka Today morning after refreshment and breakfast, we will visit Bet Dwarka – an island in the Gulf of Kutch, Rukmani Temple – the temple dedicated to wife of Lord Krishna. Thereby Visit and Nageshwar Jyortirlinga – one of the 12 Jyortirlingas dedicated to Lord Shiva in Hindu Religion, Gopi Talav. Evening leisure at Shivrajpur beach and overnight stay."
      ],
      [
        "Day 3",
        "Dwarka – Porbandar – Somnath (250 kms/5hrs) Today morning after refreshment and breakfast, proceed towards Somnath. Enroute we will visit Porbandar Sightseeing such as Kirti Mandir – birthplace of Mahatma Gandhi and Sudama Temple – a temple dedicated to Sudama, a close friend of Lord Krishna in Porbandar on the way. Reach Somnath. Check in at hotel and after refreshment we will visit Bhalka Tirth – the place where Lord Krishna attained Moksha. Visit the Holy Triveni Sangam of Hiran, Kapil and Saraswati Rivers to wash off your sins, Somnath Mahadev Temple – Considered to be the first of the 12 Jyortirlingas. Feel the divinity in the evening arti and watch the Light and Sound Show to feel the grandeur of the Somnath Temple. Overnight stay at Somnath."
      ],
      [
        "Day 4",
        "Somnath – Bhavnagar (280 kms/6hrs) Today morning after refreshment and breakfast, we will proceed towards Bhavnagar, Check in at hotel and after refreshment we will visit Nishkalank Mahadev – 5 Shivalingas in the Gulf of Khambhat believed to be established by the Pandavas as per Mahabharata where darshan can be done only in low tides. Overnight stay at Bhavnagar"
      ],
      [
        "Day 5",
        "Bhavnagar – Vadodara (250 kms/5hrs) Today morning after refreshment and breakfast, check out and proceed towards Vadodara with a visit to Lothal – an ancient Indus Valley Civilization Port on the way. Reach Vadodara, check in at hotel and after refreshment we will visit Golden Statue of Lord Shiva at Sur Sagar Lake, Sayaji Baugh. Overnight at Vadodara."
      ],
      [
        "Day 6",
        "Vadodara – Pavagadh (55Km/1hr) – Dakor (62Km/1hr) – Ahmedabad (155Km/3hrs) Today morning after refreshment and breakfast, we will Proceed to Pavagadh. It’s one of the Saktipith in Gujarat. We will Visit Shri Mahakali Mataji Temple in Pavagadh Hill. and then we will Visit Dakor(62Km,2Hr) to visit Ranchhodraiji Temple of Dakor – a temple dedicated to Lord Krishna. Return back to Ahmedabad and time is for leisure and shopping. Overnight stay at Ahmedabad."
      ],
      [
        "Day 7",
        "Ahmedabad – Shamlaji (132km/3hrs) – Ambaji (120Km/3hrs) After refreshing and checking out early this morning, we will embark on a visit to the ancient Vaishnav Temple at Shamlaji, which is one of the Panch Dwarkas in Gujarat. Following that, we will journey to Ambaji, a temple that holds special significance as one of the 51 Shaktipiths. This sacred site is imbued with the divine presence of Goddess Amba. We will conclude our day by spending the night in Ambaji."
      ],
      [
        "Day 8",
        "Ambaji – Udaipur (180Km/4hrs) Today, after refreshing ourselves and having breakfast in the early morning, we’ll make our way to Ambaji Temple, situated atop a hill. We’ll have the option to ascend either by climbing or taking a ropeway. Afterwards, we’ll continue our journey towards Udaipur. There, we’ll have leisure time to explore local shopping areas or simply relax. We’ll spend the night in Udaipur."
      ],
      [
        "Day 9",
        "Udaipur – Shrinathaji – Eklingji – Udaipur Today after refreshing and having breakfast, we will proceed towards Nathdwara (50Km/1hr) to seek the divine blessings of Lord Shrinathji, a beloved form of Lord Krishna. Experience the sacred bliss of the darshan, followed by a visit to the Kankroli Temple (18Km,40Min). Continuing our spiritual journey, we will then head to Eklingji, the revered temple dedicated to Lord Shiva. Finally, we will return to Udaipur for an overnight stay."
      ],
      [
        "Day 10",
        "Udaipur – Ujjain (335km/7hrs) Today morning after refreshment and breakfast, we will Visit Ujjain is one of holiest cities as per Hindu Religion and one of the four places where the Kumbh Mela is held. Visit Kal Bhairav Temple – a temple of guardian deity of the city where the common worship is done through Liquor. Visit the Mangalnath Temple – believed to be the birthplace of Mangal (one of the planets) where astronomical studies were done in ancient times. Overnight stay at Ujjain."
      ],
      [
        "Day 11",
        "Ujjain – Indore (60Km/1hr) This early morning we visit the Mahakaleshwar Temple – one of 12 Jyotirlinga’s for Bhasma Arti at 4:00 AM which is believed to be worth to witness if you visit the temple. After breakfast and refreshments, we’ll set out for Indore. Check in at hotel and after fresh n up we will visit Rajwada Palace, a majestic symbol of the Holkar dynasty’s grandeur, followed by the serene ISKCON Temple dedicated to Lord Krishna. In the evening, we’ll explore Sarafa Bazaar, where the streets burst with a delightful array of street food stalls offering local delicacies, sweets, and snacks. We’ll spend the night in Indore."
      ],
      [
        "Day 12",
        "Indore – Omkareshwar (80km/3hrs)– Indore(80km/3hrs) Today early morning, Check out and proceed towards Omkareshwar which is also one of the 12 Jyotirlinga’s dedicated to Lord Shiva. Set at a picturesque location on the banks of Holy River Narmada, the place is a treat for the Pilgrims and scenic lovers. Return to Indore and overnight stay."
      ],
      [
        "Day 13",
        "Indore Drop Today morning after refreshment and breakfast, we will do check out and drop at Indore Railway Station/Airport as per schedule."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "ujjain-omkarehwar-indore-tour",
    "title": "Ujjain – Omkarehwar – Indore Tour",
    "location": "Ujjain – Omkarehwar – Indore",
    "duration": "3 Days / 2 Nights",
    "price": "₹16,100 / person",
    "type": "Indian Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 4.9,
    "reviews": 1666,
    "image": "/assets/images/ujjain.jpeg",
    "tags": [
      "Pilgrimage & Spiritual",
      "3 Days",
      "Indian Tour"
    ],
    "description": "Arrive – Ujjain/Indore Welcome to the Heart of India – Madhya Pradesh! Will Arrive At Ujjain Railway Station as per the Scheduled Train , Meet Our Driver At the Designated Meeting ...",
    "itinerary": [
      [
        "Day 01 ",
        "Arrive – Ujjain/Indore Welcome to the Heart of India – Madhya Pradesh! Will Arrive At Ujjain Railway Station as per the Scheduled Train , Meet Our Driver At the Designated Meeting Point and Together Proceed transfer to Ujjain and check in your pre booked hotel. After fresh-up Start temple tour of Ujjain visiting Mahakaleshwar Temple , Sandipani Ashram, Ramghat, Bhartrihari Caves, Harsidhhi Temple, 84 Mahadevas temple . Dinner at hotel or Restaurant at your own. Overnight at hotel in at Ujjain."
      ],
      [
        "Day 2 ",
        "Ujjain – Omkareshwar After breakfast check-out from the hotel and proceed for Omkareshwar. On arrival check-in the hotel and after fresh-up procced to visit The presence of one of the twelve Jyotirlinga makes Omkareshwar one of the holiest Hindu sites of India.Darshan at Shri Omkareshwar Temple and Mamleshwar Temple. Overnight stay at Omkareshwar."
      ],
      [
        "Day 03 ",
        "- Omkareshwar – Indore Drop After breakfast check-out from the hotel and proceed for Indore on arrival visit Rajwada Palace, Lal Bagh Palace, Central Musuem, Bada Ganpati Mandir, Bhim Janam Bhoomi, Gandhi Hall, Chhappan ( 56 ) Bhog. Kanch Mandir, Anpurna Temple, Central Musuem. In evening drop at Indore Airport for onward journey with sweet memory."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "egypt-cruise-tour",
    "title": "Egypt Cruise Tour",
    "location": "Egypt Cruise",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Honeymoon & Luxury",
    "rating": 4.7,
    "reviews": 1966,
    "image": "/assets/international/egypt-cruise.jpeg",
    "tags": [
      "Honeymoon & Luxury",
      "3 Days",
      "International Tour"
    ],
    "description": "Experience the magic of ancient Egypt aboard Nile cruise.\r\n\r\nExplore the River Nile Cruises in Nile Story Nile Cruise which sail from Aswan to Luxor for 3 nights on friday and 04 n...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Experience the magic of ancient Egypt aboard Nile cruise.\r\n\r\nExplore the River Nile Cruises in Nile Story Nile Cruise which sail from Aswan to Luxor for 3 nights on friday and 04 nights from Luxor to Aswan on Monday. Enjoy your Nile Cruise Tours on board the Nile Story Nile Cruise and visit the famo"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "egypt-tour",
    "title": "Egypt Tour",
    "location": "Egypt",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 1608,
    "image": "/assets/international/egypt-cruise.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "Arrival and Dinner Cruise Upon arrival at Cairo International Airport, you’ll be warmly greeted by a tour representative who will assist you through the airport procedures. After m...",
    "itinerary": [
      [
        "Day 1",
        "Arrival and Dinner Cruise Upon arrival at Cairo International Airport, you’ll be warmly greeted by a tour representative who will assist you through the airport procedures. After meeting and assisting, you’ll be transferred to your accommodation, in Cairo, once at the hotel, check-in and take some time to relax and refresh after your journey. In the evening, you’ll be picked up from your hotel for a memorable dinner cruise on the Nile Crystal. As you glide along the Nile River, you will be treated to a delightful open buffet dinner featuring a variety of local and international dishes. The cruise is enhanced by a lively show featuring traditional belly dancers and Egyptian folklore performances, offering a captivating glimpse into the local culture. After this enchanting experience on the Nile, you’ll be transferred back to your hotel for an overnight stay, allowing you to rest and prepare for the exciting adventures that await."
      ],
      [
        "Day 2",
        "Pyramids and Egyptian Museum Start your day with a hearty breakfast at the hotel before setting off to visit one of the most iconic landmarks in the world: the Great Pyramids of Giza. You’ll explore the three famous pyramids—Cheops, Chephren, and Mykerinus—before enjoying a unique camel ride around these ancient wonders. The tour also includes a visit to the enigmatic Sphinx and the Valley Temple, providing a comprehensive insight into Egypt’s pharaonic past. For lunch, you’ll head to Tasty House Restaurant, where you can enjoy a delicious meal in a comfortable setting. After lunch, continue your exploration with a visit to the Egyptian Museum. This museum houses an extensive collection of ancient Egyptian artifacts, including the treasures of Tutankhamun. As you wander through the museum, your guide will share fascinating stories and historical facts about the exhibits. In the evening, return to your hotel where you can unwind and spend the evening at your leisure. Whether you choose to relax in your room or explore the local area, you’ll have a comfortable overnight stay at the hotel."
      ],
      [
        "Day 3",
        "Day Trip to Alexandria After an early breakfast at the hotel, depart for a full-day trip to Alexandria, a city renowned for its rich history and stunning Mediterranean views. The journey to Alexandria takes approximately 2.5 to 3 hours by road. Upon arrival, begin your sightseeing tour with a visit to the Citadel of Qait Bay, a fortress built on the site of the ancient Pharos Lighthouse, one of the Seven Wonders of the Ancient World. Next, head to Pompei’s Pillar, a towering Roman triumphal column. Continue your exploration with a visit to the Catacombs of Kom el Shoqafa, an intricate underground tomb complex and one of the Seven Wonders of the Middle Ages. For lunch, you’ll dine at Ibn Hamido Restaurant, enjoying fresh seafood and other local specialties. After lunch, if time permits, continue exploring Alexandria, taking in more of its historic sites and coastal charm. Return to Cairo in the late afternoon. The evening is free for you to relax or explore on your own. Spend the night at your hotel, resting up for another day of sightseeing."
      ],
      [
        "Day 4",
        "Day Trip to Fayoum Start your journey early in the morning with a drive from your hotel in Cairo to Fayoum. Upon arrival, take a relaxing stroll around the lush Fayoum Oasis, known for its beautiful palm trees and tranquil waters. Visit Wadi El Rayan, famous for its stunning waterfalls and scenic landscapes, and enjoy a boat ride or a short hike to explore the area. Next, head to the charming Tunis Village, renowned for its pottery workshops. Observe local artisans at work and perhaps try your hand at pottery. Savor a traditional Egyptian lunch Buried in the Sand, enjoying dishes made with fresh, local ingredients. Continue your visit to Lake Qarun, one of the oldest lakes in the world. Take a leisurely walk along the shore and watch for various bird species. Explore the ancient ruins of Karanis, an archaeological site that offers a glimpse into life during the Greco-Roman period. Conclude your memorable day trip with a drive back to Cairo, reflecting on the rich history and natural beauty."
      ],
      [
        "Day 5",
        "Islamic and Coptic Cairo Begin your day with breakfast at the hotel, then set off to explore some of Cairo’s most significant historical and religious sites. Your first stop is the Citadel of Saladin, where you’ll visit the impressive Mosque of Muhammad Ali. This fortress offers panoramic views of Cairo and is an essential part of the city’s history. Next, delve into Coptic Cairo with a visit to the Hanging Church, one of the oldest Christian churches in Egypt. Continue exploring the area to see other Coptic sites that highlight the rich religious heritage of the city. For lunch, you’ll dine at a local restaurant, enjoying a meal that showcases traditional Egyptian cuisine. In the afternoon, visit the bustling Khan El Khalili Bazaar, a major souk in the Islamic district of Cairo. Here, you can shop for souvenirs, spices, jewelry, and more while soaking in the vibrant atmosphere of this historic market. In the evening, return to your hotel. Enjoy some free time to relax or venture out to explore more of Cairo on your own. Overnight at the hotel."
      ],
      [
        "Day 6",
        "Departure On your final day, enjoy breakfast at the hotel before checking out. A tour representative will assist with your transfer to Cairo International Airport for your departure flight. Reflect on the incredible experiences and memories you’ve made during your time in Egypt as you journey home."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "classical-morocco-tour",
    "title": "Classical Morocco Tour",
    "location": "Classical Morocco",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 2183,
    "image": "/assets/international/morocco-classical.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "CASABLANCA – RABAT Upon your arrival to Casablanca international Airport, you’ll be met by Zalagh Voyages representative. First, you will visit of Casablanca: the United Nations sq...",
    "itinerary": [
      [
        "Day 1",
        "CASABLANCA – RABAT Upon your arrival to Casablanca international Airport, you’ll be met by Zalagh Voyages representative. First, you will visit of Casablanca: the United Nations square, the Central market and the Mosque Hassan II. The afternoon is dedicated to the visit of the Méchouar, the ruins of Chellah, the Kasbah of Oudayas, the Hassan Tower and the Mausoleum of Mohamed V in Rabat. Overnight at the hotel"
      ],
      [
        "Day 2",
        "CHEFCHAOUEN After breakfast, guests will be transferred to Chefchaouen, the enchanting blue and white city known for its mosques and sanctuaries. Overnight at the hotel."
      ],
      [
        "Day 3",
        "FES Departure to Fes ,the spiritual capital of Morocco. The visit includes the two parts of the city: the new one and the Medina. The tour includes the Jewish and Arab districts, fountains, souks, medersas, the Karaouiyine university and the mausoleum of Moulay Idriss. Overnight at the hotel"
      ],
      [
        "Day 4",
        "FES-MEKNES-VOLUBILIS-MOULAY DRISS After breakfast at the hotel, clients will be picked up by their driver for a transfer and guided tours of Meknes, Volubilis, and Moulay Idriss. Departure to Fez for an overnight stay at the hotel."
      ],
      [
        "Day 5",
        "FES Leisurely day in Fes. Unwind with a traditional Moroccan hammam for a rejuvenating experience amidst Fes’ timeless charm."
      ],
      [
        "Day 6",
        "MARRAKECH-AGAFAY Embark on an exhilarating excursion into the serene Agafay Desert, immersing yourself in its tranquil landscape. Experience traditional Berber hospitality under the vast desert sky, engaging in activities like thrilling quad biking adventures or the timeless charm of camel riding."
      ],
      [
        "Day 7",
        "MARAKKESH Explore Marrakech, the “Red City,” filled with ancient red sandstone structures and a vibrant culture. Immerse yourself in its lively ambiance, filled with musicians, storytellers, and more. Overnight at the hotel"
      ],
      [
        "Day 8",
        "CASABLANCA Departure to Casablanca Airport"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "morocco-eco-tourism-tour",
    "title": "Morocco Eco Tourism Tour",
    "location": "Morocco Eco ism",
    "duration": "14 Days / 13 Nights",
    "price": "₹1,57,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 2092,
    "image": "/assets/international/morocco-classical.jpeg",
    "tags": [
      "Heritage & Nature",
      "14 Days",
      "International Tour"
    ],
    "description": "Upon arrival at Casablanca Airport, clients will be transferred to the hotel. After settling in, they will embark on a guided tour of the city, including a visit to the Hassan II M...",
    "itinerary": [
      [
        "DAY 1 – CASABLANCA",
        "Upon arrival at Casablanca Airport, clients will be transferred to the hotel. After settling in, they will embark on a guided tour of the city, including a visit to the Hassan II Mosque, the largest mosque in Morocco. Overnight stay atthe hotel."
      ],
      [
        "DAY 2 – CASABLANCA – FEZ",
        "Clients will enjoy breakfast at the hotel before being picked up by their driver and guide for a guided tour of Meknes and the holy city of Moulay Idriss. Lunch will be served during the tour, followed by a wine tasting. In the afternoon, clients will be transferred to Fez for an overnight stay at the hotel."
      ],
      [
        "DAY 3 – FEZ",
        "Following breakfast at the hotel, clients will be picked up by their driver and guide for a guided walking and driving tour of Fez, a UNESCO-listed city known for its authenticity and historic architecture. Overnight stay at the hotel."
      ],
      [
        "DAY 4 – FEZ – TAZA – FEZ",
        "After breakfast at the hotel, clients will be picked up for a day trip to Djbel Tazekka National Park, where they will enjoy light hiking with an eco guide. They will then be transferred back to Fez for another overnight stay at the hotel."
      ],
      [
        "DAY 5 – FEZ – BENI MELLAL – MARRAKECH",
        "Clients will have breakfast at the hotel before being picked up for a transfer to Marrakech. Lunch will be provided during the journey. Overnight stay at the hotel in Marrakech."
      ],
      [
        "DAY 6 – MARRAKECH",
        "After breakfast at the hotel, clients will be picked up by their driver and guide for a guided tour of Marrakech, visiting iconic landmarks such as Jemaa El Fna square, Bahia Palace, and the Koutoubia Minaret. The afternoon will be free for clients to explore the city on their own before enjoying the Fantasia dinner show. Overnight stay at the hotel."
      ],
      [
        "DAY 7 – MARRAKECH",
        "Following breakfast, clients will be picked up for a day trip to the High Atlas Mountains, including a Berber lunch. Overnight stay at the hotel in Marrakech."
      ],
      [
        "DAY 8 – MARRAKECH – AIT BEN HADDOU – ZAGORA",
        "After breakfast, clients will be picked up for a drive over the High Atlas Mountains to Zagora, with a stop at the famous Ait Benhaddou Kasbah along the way. Overnight stay at the hotel."
      ],
      [
        "DAY 9 – ZAGORA – ERG CH’GAGA (SAHARA)",
        "Clients will enjoy breakfast before being picked up for a transfer to M’Hamid, where they will embark on a 4X4 journey to Erg Zhigaga dunes for an unforgettable experience in the desert. Overnight stay at the Bivouac."
      ],
      [
        "DAY 10 – M’HAMID (SAHARA) – OUARZAZATE",
        "After breakfast at the camp, clients will explore M’Hamid by camel or 4X4 before a tour of Inhabitant Kasbahs. They will then be transferred to Ouarzazate for an overnight stay at the hotel."
      ],
      [
        "DAY 11 – OUARZAZATE – TODRA GORGES",
        "Following breakfast at the hotel, clients will be picked up for a day trip to Todra Gorges, the deepest and most beautiful in the country. Overnight stay at the hotel in Ouarzazate."
      ],
      [
        "DAY 12 – OUARZAZATE – TAROUDANT – AGADIR",
        "Clients will have breakfast at the hotel before being transferred to Agadir, with a tour of Taroudant along the way. Overnight stay at the hotel."
      ],
      [
        "DAY 13 – AGADIR",
        "After breakfast, clients will enjoy a day trip to Souss Massa Park, known for its variety of bird species and tranquil atmosphere. Overnight stay at the hotel in Agadir."
      ],
      [
        "DAY 14 – FLY HOME",
        "Clients will have breakfast at the hotel before being transferred to Agadir Airport for their flight back home. Tours can be modified according to your requests"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "alaska",
    "title": "Alaska",
    "location": "Alaska",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 784,
    "image": "/assets/international/alaska.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "Alaska is known for being the largest state of the United States of America. It is the northernmost and westernmost state of the United States and is also known for being the only ...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Alaska is known for being the largest state of the United States of America. It is the northernmost and westernmost state of the United States and is also known for being the only non-contiguous state.\r\n It is a state that attracts tourists from all over the world. It is a place that you must explor"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "aloha-hawaii",
    "title": "Aloha Hawaii",
    "location": "Aloha Hawaii",
    "duration": "12 Days / 11 Nights",
    "price": "₹1,40,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 876,
    "image": "/assets/international/aloha-and-hawaii.jpeg",
    "tags": [
      "Heritage & Nature",
      "12 Days",
      "International Tour"
    ],
    "description": "Welcome to Oahu Island! Oahu is a mix of natural, historical and cultural experiences. You’ll enjoy Waikiki beach and the picturesque Pali lookout to name a few points of interest....",
    "itinerary": [
      [
        "Day 01 – Welcome to Hawaii",
        "Welcome to Oahu Island! Oahu is a mix of natural, historical and cultural experiences. You’ll enjoy Waikiki beach and the picturesque Pali lookout to name a few points of interest. Wherever you go, whatever you do on Oahu, you’ll have plenty of opportunities to enjoy this island’s treasures all the while being showered with the Aloha Spirit of Hawaii."
      ],
      [
        "Day 02 – Pearl Harbor& Historical Honolulu City Tour",
        "Today you will take a tour to visit the Arizona Memorial & Pearl Harbor, where we will transport you to the morning of December 7, 1941 as you re-live the moment that thrust America into World War II. Your journey continues with a visit to Punchbowl National Cemetery of the Pacific & Courts of the Missing. Then you will see Honolulu’s historic district which drive by `Iolani Palace, the only royal palace on American soil, Kawaiahao Church, the State Library and Archives and much more. (Meals: B)"
      ],
      [
        "Day 03 – Deluxe Circle Island Tour",
        "Today you will go on the Circle Island Tour, which lets you explore the historical, scenic, & cultural highlights of Oahu. The tour includes Diamond Head, Hanauma Bay, Dole Plantation, famous North Shore beaches, the Hawai’i Temple& more. (Meals: B)"
      ],
      [
        "Day 04 – Diamond Head Scenic Coast Tour",
        "Today you will head east towards Makapuu Point, Oahu’s southeastern tip & an amazing lookout point. Then you’re off to the nearby Halona Blowhole, an underwater lava tube that shoots water high into the air when waves flow into it. From here you also have a great view of Sandy Beach. Your tour guide will show you Kahala, the Beverly Hills of Oahu. It’s where Hawaii’s millionaires have their multi-million dollar mansions, surrounded by meticulously manicured, tropical gardens. (Meals: B)"
      ],
      [
        "Day 05 – Honolulu-Kauai",
        "Today you will get on a plane to transfer to Kauai. Welcome to Kauai – From the soaring cliffs of the Napali Coast to the vast chasms of the Waimea Canyon, Kauai embraces the senses like no other destination. Discover 50-miles of heavenly beaches & the charming historic small towns with no building taller than a coconut tree. You will check into your hotel and have the rest of the day at your leisure. (Meals: B)"
      ],
      [
        "Day 06 – Kauai- Waimea Canyon Tour",
        "Today you will go on a Kauai Waimea Canyon Experience & Wailua River Tour. Today you will enjoy a day filled with the lush beauty, legends and saga of Hawaii’s “Garden Isle.” Waimea Canyon is over 10 miles long & almost 4,000 feet deep this was formed by erosion & the catastrophic collapse of the volcano that created Kauai. Then go for a river boat cruise on Wailua River, sail up this historic & sacred river. (Meals: B)"
      ],
      [
        "Day 07 – Kauai- Maui",
        "Today you will board a plane to Maui. Welcome to Maui – Discover your own reason to love Maui. From the seaside streets of Lahaina, the lovely beaches of Kaanapali, over 120-miles of beaches, the arts & culture of Kahului and one of the best places to whale watch in the world. The Road to Hana has 600 curves & 54 bridges & is one of the world’s most scenic drives. You will check into your hotel & have the rest of the day at your leisure. (Meals: B)"
      ],
      [
        "Day 08 – Maui – Hana Bus Tour",
        "Today you will go on the Hana Bus Tour. Feast your eyes on bamboo jungles, breezy Eucalyptus groves & roadside fruit stands. You will see Paia Town, which is the “surf capital of the world.” Onward to Kaumahina State Park, where there are several trails uphill from the ocean to Keanae Lookout. You will also see the black sand on an ancient lava flow includes sea cliffs, lava tubes, arches & the beach in Waianapanap State Park & Beach. (Meals: B)"
      ],
      [
        "Day 09 – Maui – City Tour",
        "Today you will go on a Historical Valley & City Tour; you will see Maui’s most popular sights. Iao Valley is a tranquil, lush paradise of exotic plants & natural pools. From there, you’ll head to the little historic fishing village of Lahaina, now a mecca for shoppers & anyone seeking fun. Check out the 110-year-old Banyan tree, the Pioneer Inn Hotel built in 1906 & the wharf’s bits of history that have been carefully preserved. Since the 1700s, when King Kamehameha made it his home, Lahaina has been a casual place of merriment. (Meals: B)"
      ],
      [
        "Day 10 – Maui – Big Island",
        "Today you will fly to Big Island; the biggest & exotic island of Hawaii. Upon arrival enjoy the rest of the day at leisure exploring the city. (Meals: B)"
      ],
      [
        "Day 11 – Grand Island Circle Bus Tour",
        "After breakfast, we will explore the Hawaii Grand Circle Island by bus. Enjoy the scenic 260 mile Hawaii Circle Island tour, Coffee Plantation, Hawaii Volcanoes National Park, Fern Tree Jungle, Hilo City, Waimea and much more. (Meals: B)"
      ],
      [
        "Day 12 – Departure",
        "After breakfast, spend some time at leisure. Depart for the airport to board your flight for next destination. (Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "ancient-peru-machu-picchu",
    "title": "Ancient Peru & Machu Picchu",
    "location": "Ancient Peru & Machu Picchu",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 2130,
    "image": "/assets/international/south-america.jpg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "Arrive in Lima, the capital of Peru, and transfer to the hotel upon arrival. The beauty of the city’s many fine carved, wooden balconies found throughout the city is a joy. The cen...",
    "itinerary": [
      [
        "Day 01 – Lima",
        "Arrive in Lima, the capital of Peru, and transfer to the hotel upon arrival. The beauty of the city’s many fine carved, wooden balconies found throughout the city is a joy. The center of Lima is compact, and can easily be walked around. The main building in the Plaza is the Cathedral. Overnight in Lima."
      ],
      [
        "Day 02 – Lima City Tour",
        "After breakfast, proceed for a city tour and visit the Main Square, the Government Palace, City Hall, the Cathedral, the San Francisco Convent and its “Catacombs,” ancient underground cemetery of Lima, Torre Tagle Palace, and the Osambela House. Visit the Gold Museum, then continue to the modern and high end side of Lima city, the Mira Flores. Overnight in Lima.(Meals: B)"
      ],
      [
        "Day 03 – Lima – Cuzco",
        "After breakfast, depart for Cuzco. Check-in to the hotel upon arrival. Enjoy a city tour, after acclimating to the altitude, in the afternoon. Visit nearby Ruins “Cusco” of Tambo achy, Kenki, Puca – Pucara, and the fortress of Sacsay huaman. Also see the Koricancha or temple of the Sun. Overnight in Cuzco. (Meals: B)"
      ],
      [
        "Day 04 – Cuzco – Full Day Excursion to Machu Picchu",
        "After breakfast, begin your day with a breathtaking train ride, which goes through Urubamba Valley and mountain top ruins of Machu Picchu. Machu Picchu is eye tantalizing tribute to man in harmony with nature. It is located high above the clouds, high above the Sacred Valley. Take the afternoon train back to Cusco and overnight in the hotel. (Meals: B)"
      ],
      [
        "Day 05 – Cuzco-Full Day Excursion to Sacred Valley",
        "Breakfast at the hotel, then discover the Sacred Valley of the Incas on this full-day excursion. Travel to the scenic town of Pisac, where you’ll visit the local market and see mass if traveling on a Sunday. Then, head over to the ruins of the Ollantayambo Fortress and the Temple of the Sun, a mysterious structure with massive 12 foot (3.5m) tall stones. (Meals: B)"
      ],
      [
        "Day 06 – Departure",
        "Transfer to the airport to board the flight for your next destination.(Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "argentina",
    "title": "Argentina",
    "location": "Argentina",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 428,
    "image": "/assets/international/argentina.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "Welcome in Buenos Aires, the capital of Argentina. After completing all the immigration formalities, you will be transferred to the hotel. Buenos Aires is, with over 11 million inh...",
    "itinerary": [
      [
        "Day 01 – Buenos Aires",
        "Welcome in Buenos Aires, the capital of Argentina. After completing all the immigration formalities, you will be transferred to the hotel. Buenos Aires is, with over 11 million inhabitants, one of the largest cities in Argentina. Overnight in Buenos Aires."
      ],
      [
        "Day 02 – Buenos Aires",
        "After breakfast, we start the city tour of Buenos Aires. Visit “Plaza de Mayo,” the Pink House, the Buenos Aires Cathedral, the 9 of July Avenue, the Colon Theatre, La Boca neighborhood with the traditional “Caminito Street,” “San Martin Plaza,” Recoleta Cemetery, and the Palermo Woods. In the afternoon, we will tour the Tigre and Parana’s Delta River. Then, return by bus along the Panamerican Highway to the city of Buenos Aires. Overnight in Buenos Aires. (Meals: B)"
      ],
      [
        "Day 03 – Buenos Aires – Fiesta Gaucha tour",
        "After breakfast, enjoy a full day Fiesta Gaucha Tour at Estancia Santa Susana, and meet ‘gauchos’ in their own environment. Ride to the outskirts of the city into the countryside, the ‘pampas’, cradle of the ‘gaucho’ and the rich ‘gaucho’ tradition. After dinner, proceed to enjoy the LA VENTANA, TANGO SHOW. Overnight in Buenos Aires. (Meals: B)"
      ],
      [
        "Day 04 – Buenos Aires – El Calafate",
        "Today after breakfast, depart for El Calafate. The city is located at the base of Calafate Hill on the shore of the Argentinian Lake. In the early 20th century, the Patagonian trails had wagon stops every three leagues, the average distance covered in a day’s journey by a driven wagon. These inevitable stops were named by the wagon drivers: “El Bote,” “El Calafate,” and “El Centinela.” The name “El Calafate” comes from the dense calafate (berberis genus) shrubbery that grew on this alluvial plain. Check-into the hotel upon arrival.(Meals: B)"
      ],
      [
        "Day 05 – El Calafate – Full Day Excursion to Perito Moreno Glacier",
        "After breakfast, proceed to the fascinating landscape of Argentinia’s Perito Moreno glacier on a full day tour from El Calafate. Explore glacier streams, small lagoons, gullies, crevasses and plenty of ice formations on this one of a kind South American experience. Learn about the general glaciology of the region as well as a particular phenomenon that happens in the Perito Moreno Glacier.(Meals: B)"
      ],
      [
        "Day 06 – Departure",
        "Transfer to the airport to board the flight for your next destination.(Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "best-of-alaska",
    "title": "Best of Alaska",
    "location": "Best of Alaska",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1601,
    "image": "/assets/international/alaska.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "Upon arrival, transfer to your hotel. Within walking distance of most downtown hotels are the Anchorage Museum of History and Art, numerous restaurants, and other downtown attracti...",
    "itinerary": [
      [
        "Day 01 – Anchorage",
        "Upon arrival, transfer to your hotel. Within walking distance of most downtown hotels are the Anchorage Museum of History and Art, numerous restaurants, and other downtown attractions."
      ],
      [
        "Day 02 – Anchorage City Tour",
        "Visit Anchorage’s historical sites on this city sightseeing tour by coach. This 3hour, fully narrated tour is the perfect way to get a comprehensive overview of this great Alaskan city. Enjoy informative live, onboard narration as you visit Earthquake Park and Lake Hood. Then, explore the Alaska Native Heritage Center to get an in-depth look at Alaska’s unique cultural heritage. (Meals: B)"
      ],
      [
        "Day 03 – Full Day Excursion to Denali National Park (OPTIONAL)",
        "Depart from Anchorage’s Merrill Field airport very early in the morning and fly to Denali National Park in a small plane. As you approach and circle Mt. McKinley, watch for climbers on their way to the summit. After landing, you will board a bus for your park tour. Your driver will assist you in spotting wildlife along the road and answer questions about the park and its resources.(Meals: B)"
      ],
      [
        "Day 04 – Prince William Sound – 26 Glacier Cruise",
        "Take part on this full-day adventure to Whittier from downtown Anchorage via coach or rail. Take a high-speed catamaran for your cruise through Prince William Sound and watch for sea otters, whales and birds as you travel through glacier-filled College and Harrimann Fjords. This tour provides an excellent opportunity to witness glacier calving. (Meals: B)"
      ],
      [
        "Day 05 – Anchorage – Fairbanks",
        "Today after breakfast proceed by plane to Fairbanks, the largest city in the Interior region of Alaska. Check in & time on own. (Meals: B)"
      ],
      [
        "Day 06 –Fairbanks – City Tour",
        "Get to know Fairbanks, called the ‘Golden Heart City,’ on this 5-hour sightseeing tour. Visit the Morris Thompson Cultural and Visitors Center for an intro into the city’s history and culture, and admire the architecture at the University of Alaska’s Museum of the North. Feast your eyes on the Trans-Alaska Pipeline, the world’s largest pipeline, and wrap up your day at the Santa Claus House in the North Pole. (Meals: B)"
      ],
      [
        "Day 07 – Arctic Circle Day Trip",
        "Today we will take you to the Arctic Circle, Earth’s northernmost circle of latitude, where the sky is completely dark or light all day. Aboard a climate-controlled van, cruise along the Dalton Highway, cross the Yukon River and then enjoy lunch in the arctic landscape. Learn about the indigenous Eskimo culture in the region, and take home incredible pictures, as well an official Arctic Circle certificate. (Meals: B)"
      ],
      [
        "Day 08 – Departure",
        "Today we finish our trip and get ready to fly back home or to the next destination. (Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "brazil",
    "title": "Brazil",
    "location": "Brazil",
    "duration": "10 Days / 9 Nights",
    "price": "₹1,23,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 2115,
    "image": "/assets/international/brazil.jpeg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "International Tour"
    ],
    "description": "Welcome to South America’s largest and most populous country. Rio de Janeiro is the second largest city in Brazil, on the South Atlantic coast. Rio is famous for its breathtaking l...",
    "itinerary": [
      [
        "Day 01 – Arrival Rio de Janeiro",
        "Welcome to South America’s largest and most populous country. Rio de Janeiro is the second largest city in Brazil, on the South Atlantic coast. Rio is famous for its breathtaking landscape, its laidback beach culture, and its annual carnival. On arrival, transfer to your hotel."
      ],
      [
        "Day 02 – Rio City Tour – Corcovado Mountain – Christ the Redeemer",
        "After breakfast, enjoy a full day city tour of Rio. Ascend on Corcovado Mountain by train to visit one of the world’s most famous landmarks, the gigantic statue of Christ, the Redeemer. Then, proceed to Cascatinha, Tijuca Forest, to the top of Corcovado Mountain. Cidade Maravilhosa, “the marvelous city” as it is known to its residents and the rest of Brazil, is also the most beautiful city in the world. As a tropical resort, Rio offers miles of golden beaches, including, Ipanema and Copacabana, two of the most famous stretches of sand in the world. The tour continues with the visit to Metropolitan Cathedral, samba stadium and view of architectonic monuments of Rio. Overnight in Rio.(Meals: B)"
      ],
      [
        "Day 03 –  Guanabara Bay & Sugar Loaf Mountain",
        "We will take a boat tour of Guanabara Bay, viewing the incredible “Wonder City” from its most famous bay. Based on water volume, Guanabara Bay is the largest bay in the world, and has several islands such as the Governor’s Island and Snakes Island. To the west lies Rio de Janeiro, and facing east, the municipal district of Niteroi. Various sights and landmarks such as the neighborhoods of Botafogo, Flamengo, Urca, Sugar Loaf Mountain, Fort Sao Joao, Flagstone Island, Santa Cruz Fortress, Rio-Niteroi Bridge and more will be seen as we depart from the Marina da Gloria. Overnight in Rio.(Meals: B)"
      ],
      [
        "Day 04 – Rio de Janeiro – Sao Paulo",
        "Fly to Sao Paulo, and on arrival transfer to your hotel. Take a city tour of São Paulo, the world’s second largest city & South America’s industrial powerhouse!The city of São Paulo is full of surprises. It is the largest German manufacturing city in the world, and contains great architecture, such as this masterpiece by Oscar Niemeyer, architect of the capital, Brasilia. (Meals: B)"
      ],
      [
        "Day 05 – Sao Paulo – Iguassu Falls Brazil",
        "Today after breakfast at the hotel, fly to the natural wonder known as the Iguassu Falls, located on the border of Brazil, Argentina and Paraguay. Upon arrival, check-in at the hotel. Day at leisure. (Meals: B)"
      ],
      [
        "Day 06 – Iguassu Falls",
        "Today after breakfast, we proceed to enjoy the Iguassu Falls National Park, touring the Brazilian side of the Falls. You will walk with the guide, descending a walkway, contemplating the lovely waterfalls in all of nature’s exuberance, with panoramic views of both sides – Brazilian and Argentinean. Reach the highest elevation, then descend into the Brazilian side lookout, which provides magnificent photo opportunities and views. Overnight in Iguassu. (Meals: B)"
      ],
      [
        "Day 07 – Departure",
        "Transfer to the airport to board the flight for your next destination.(Meals: B) OPTIONAL TOUR: 2 DAYS –MANAUS AND AMAZON RAINFOREST, BRAZIL"
      ],
      [
        "Day 07 – Arrival in Manaus",
        "Arrive in Manaus. Located in the middle of the Amazon Rainforest, Manaus is the capital of Brazil’s largest state, Amazonas, an incongruous pocket of urbanity in the middle of the jungle, a major port for ocean vessels that’s 1500km from the ocean. Overnight in Manaus. (Meals: B)"
      ],
      [
        "Day 08 – Amazon Rainforest",
        "This morning enjoy a Meeting of the Waters tour, where the Rio Negro&Amazon run side by side. Afterward go for a nature hike through the jungle, then have lunch featuring typical Amazonian dishes. Visit to the home of local Amazonian residents with an opportunity for piranha fishing. (Meals: B)"
      ],
      [
        "Day 09 – Departure",
        "Transfer to the airport to board the flight for your next destination.(Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "canada-discovery",
    "title": "canada discovery",
    "location": "canada discovery",
    "duration": "15 Days / 14 Nights",
    "price": "₹1,65,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 982,
    "image": "/assets/international/canada-discovery.jpeg",
    "tags": [
      "Heritage & Nature",
      "15 Days",
      "International Tour"
    ],
    "description": "Welcome to Toronto! A fabulous waterfront city lying on the north shore of Lake Ontario, Toronto is Canada’s largest and most cosmopolitan city. Its breathtaking architecture, worl...",
    "itinerary": [
      [
        "Day 01 – Arrive in Toronto",
        "Welcome to Toronto! A fabulous waterfront city lying on the north shore of Lake Ontario, Toronto is Canada’s largest and most cosmopolitan city. Its breathtaking architecture, world class Theater, international sports, and beautiful waterfront setting make this a popular city to study in. Stroll around Harbor front Park with new international friends. Over 25 million people visit Toronto annually. Upon arrival, check-in to the hotel."
      ],
      [
        "Day 02 – Toronto City Tour",
        "After breakfast, proceed for a City tour of Toronto, where you will explore the Hockey Hall of Fame, CN Tower, Rogers Centre, Air Canada Centre, Olympic Spirit, and Toronto’s Harbor front, St. Lawrence Market, the Entertainment District, Casa Loma, the Royal Ontario Museum, Bata Shoe Museum, Eaton Centre. (Meals: B)"
      ],
      [
        "Day 03 – Niagara Falls Day Tour",
        "After breakfast, you will proceed towards Canada’s greatest Natural Wonder- Niagara Falls. You will visit the Horseshoe Falls, Table Rock, Floral Clock, Clifton Hill, and Niagara on the lake. We will board the famous boat, “Maid of the Mist,” which takes us close to the thundering falls and around the American and Horseshoe Falls (seasonal). Later we will proceed back to Toronto. (Meals: B)"
      ],
      [
        "Day 04 – Toronto- Montreal",
        "Today we proceed by plane/train to Montreal. A city at the foot of Mount Royal, Montreal known for its majestic Churches, Olympic Stadium and exciting festivals. Upon arrival, check-in to the hotel. Spend the time at leisure. (Meals: B)"
      ],
      [
        "Day 05 – Montreal City Tour",
        "After breakfast, proceed for an exciting city tour of Montreal. Visit Old Montreal, Notre-Dame Basilica, Olympia Park, Mount Royal Park, St. Joseph’s Oratory, Montreal Harbor, Chinatown, Place Ville Marie, City Hall, Bell Centre, Downtown Montreal and much more.(Meals: B)"
      ],
      [
        "Day 06 – Ottawa City Tour",
        "After breakfast, travel from Montreal by motor coach and spend a day exploring beautiful and historic Ottawa, Canada’s Capital. The City tour includes the Parliament Building, Supreme Court of Canada, National Arts Center, Rideau Canal, Ottawa City Hall, Rockcliffe Lookout, Dows Lake, Ornamental Gardens, Chinatown & Little Italy, and Farmers Byward Market. Later, drive back to Montreal. (Meals: B)"
      ],
      [
        "Day 07 – Quebec City Tour& Montmorency Falls",
        "After Breakfast, proceed for a day tour to Quebec City. Today, we will bring you through all the historical treasures of Quebec such as: Place Royale, Plains of Abraham, Parliament Building, Montmorency Falls, Ile D’ Orleans, Place D’Armes and many more. (Meals: B)"
      ],
      [
        "Day 08 – Montreal- Calgary",
        "Today we proceed by plane/train to Calgary, which is the largest city in the province of Alberta, Canada. It is located in the south of the province, in a region of foothills and high plains, approximately 80 km east of the front ranges of the Canadian Rockies. Upon arrival, check-in to the hotel. Spend rest of the day at leisure. (Meals: B)"
      ],
      [
        "Day 09 – Calgary City tour",
        "After breakfast, you will proceed for a city tour of Calgary. Visit Calgary Tower, Old and New City Hall, Olympic Plaza, Fort Calgary Historic Park, Chinatown, Eau Claire Market Mall, Stephen Avenue, Devonian Garden, Stampede Park, Saddle dome, and much more. (Meals: B)"
      ],
      [
        "Day 10 – Banff City Tour & Gondola Ride",
        "Today you will enjoy a stunning tour, which is a great way to see Banff and its surrounding areas from an amazing selection of perspectives. A full day excursion takes you from the city of Calgary into the Canadian Rockies through Alberta’s foothills and ranching country to the resort town of Banff in the Rocky Mountains. Experience our stories of the people, geology, and the building of this mountain town. This day trip includes admission to the Banff Gondola, where an 8-minute gondola car takes you to the top of the mountain. (Meals: B)"
      ],
      [
        "Day 11 – Calgary – Vancouver",
        "Today we proceed by plane/train to Vancouver, which is truly one of the world’s most beautiful cities and one of the healthiest places to visit or live. It is a sophisticated, vibrant, fun loving, outdoor living city. Upon arrival, check in hotel and spend time at leisure. (Meals: B)"
      ],
      [
        "Day 12 – Vancouver City Tour – Grouse Mountain- Suspension Bridge Tour",
        "This all day tour combines Vancouver Highlights with the best of the North Shore: Capilano Suspension Bridge and Park and Grouse Mountain including the Grouse Mountain Sky ride to the top of the mountain. You’ll see Stanley Park, Chinatown, Gastown, English Bay and Yaletown downtown. You’ll also have plenty of time to explore Capilano Suspension Bridge, with its Tree Top Adventure, Cliff Walk and the amazing bridge itself. Then it’s up to the top of Grouse Mountain by gondola where you’ll have time to visit Coola and Grinder, the two orphaned Grizzly Bears, watch amazing lumberjacks and the Lumber Jack Show, Birds in Motion and the Theatre in the Sky. (Meals: B)"
      ],
      [
        "Day 13 – Victoria & Butchart Garden Tour",
        "Today you will enjoy a 90 minute cruise through the spectacular Gulf Islands. Watch for whales, sea lions and bald eagles. You will visit Butchart Gardens, which is fifty-five acres of flowers, trees, pathways and creeks. Featuring a sunken garden, a world famous rose garden and a wonderful restaurant serving High Tea daily, Butchart Gardens is one of the most beautiful and best maintained gardens in the world. Tour the city of Victoria and take a scenic drive along the coast and enjoy the views. Ride through the famous Oak Bayand Uplands residential areas plus the University of Victoria, Beacon Hill Park, Chinatown and Downtown. (Meals: B)"
      ],
      [
        "Day 14 – Vancouver – Whistler& Shannon Falls Tour",
        "After breakfast, you will enjoy the breathtaking views and scenic stops along the thrilling Sea-To-Sky Highway. Feel the mist of the spectacular 335-meter Shannon Falls. When you get to Whistler, there is ample time to shop, dine, take the Peak 2 Peak gondola, ride a bike or stroll through the trails. Seasonally, ride the Gondola to the Peak of Whistler Mountain. Enjoy glacier, mountain and river views on your leisurely ride home. (Meals: B)"
      ],
      [
        "Day 15 – Fly Out",
        "After breakfast, we will depart for the airport to board your flight for next destination. (Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "canada",
    "title": "canada",
    "location": "canada",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 556,
    "image": "/assets/international/canada-discovery.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "When one thinks of Canada, everyone automatically conjures up images of beautiful vistas, craggy mountains, vast coastline, and the Niagara. But there is so more to the place than ...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "When one thinks of Canada, everyone automatically conjures up images of beautiful vistas, craggy mountains, vast coastline, and the Niagara. But there is so more to the place than that. Canada has an amazing culture and it believes in people’s happiness and equality first. The Canadians love visitor"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "east-canada-tour",
    "title": "East Canada Tour",
    "location": "East Canada",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 724,
    "image": "/assets/international/canada.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "Welcome to Toronto! A fabulous waterfront city lying on the north shore of Lake Ontario, Toronto is Canada’s largest and most cosmopolitan city. Its breathtaking architecture, worl...",
    "itinerary": [
      [
        "Day 01 – Arrive in Toronto",
        "Welcome to Toronto! A fabulous waterfront city lying on the north shore of Lake Ontario, Toronto is Canada’s largest and most cosmopolitan city. Its breathtaking architecture, world Class Theater, international sports, and beautiful waterfront setting make this a popular city to study in. Stroll around Harbourfront Park with new international friends. Over 25 million people visit Toronto annually. Upon arrival, check-in to the hotel."
      ],
      [
        "Day 02 – Toronto City Tour",
        "After breakfast, proceed for a City Tour of Toronto, where you will explore the Hockey Hall of Fame, CN Tower, Rogers Centre, Air Canada Centre, Olympic Spirit, Toronto’s Harbourfront, St. Lawrence Market, the Entertainment District, Casa Loma, the Royal Ontario Museum, Bata Shoe Museum, and Eaton Centre. (Meals: B)"
      ],
      [
        "Day 03 – Niagara Falls Day Tour",
        "After breakfast, today you will proceed towards Canada’s greatest Natural Wonder, Niagara Falls. You will visit Horseshoe Falls, Table Rock, floral clock, Clifton Hill and Niagara on the Lake. You will ride the famous “Maid of the Mist,” which takes us close to the thundering Falls and around the American Falls (seasonal). Later, we will proceed back to Toronto. (Meals: B)"
      ],
      [
        "Day 04 – Toronto – Montreal",
        "After breakfast, we proceed by plane/train to Montreal. A city at the foot of Mount Royal, Montreal is known for its majestic Churches, Olympic Stadium and exciting festivals. Upon arrival, check-in to the hotel. Spend the time at leisure. (Meals: B)"
      ],
      [
        "Day 05 – Montreal City Tour",
        "After breakfast, proceed for an exciting city tour of Montreal. Visit Old Montreal, Notre-Dame Basilica, Olympia Park, Mount Royal Park, St. Joseph’s Oratory, Montreal Harbor, Chinatown, Place Ville Marie, City Hall, Bell Centre, Downtown Montreal and much more. (Meals: B)"
      ],
      [
        "Day 06 – Ottawa City Tour",
        "After breakfast, travel from Montreal by motor coach and spend a day exploring beautiful and historic Ottawa, Canada’s Capital. The City tour includes the Parliament Building, Supreme Court of Canada, National Arts Center, and Rideau Canal, Ottawa City Hall, Rockcliffe Lookout, Dows Lake, Ornamental Gardens, Chinatown & Little Italy, and Farmers Byward Market. Later drive back to Montreal. (Meals: B)"
      ],
      [
        "Day 07 – Quebec City Tour & Montmorency Falls",
        "After breakfast, proceed for a day tour to Quebec City. Today we will bring you through all the historical treasures of Quebec such as: Place Royale, Plains of Abraham, Parliament Building, Montmorency Falls, Ile D’ Orleans, Place D’Armes, and many more.(Meals: B)"
      ],
      [
        "Day 08 – Montreal – Fly Out",
        "Today we finish our trip and get ready to fly back home or to the next destination. (Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "hawai",
    "title": "hawai",
    "location": "hawai",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1616,
    "image": "/assets/international/aloha-and-hawaii.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "Hawaii: A land of Lei garlands, Aloha greetings, and tunes of Ukulele!\r\nHawaii tour packages are synonymous with paradisiacal beaches, stunning waterfalls, volcanic craters, multi-...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Hawaii: A land of Lei garlands, Aloha greetings, and tunes of Ukulele!\r\nHawaii tour packages are synonymous with paradisiacal beaches, stunning waterfalls, volcanic craters, multi-hued coral reefs, and Polynesian culture. Holidays in Hawaii are replete with sun, sand, surf, and adventure.\r\n\r\nThis gr"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "mexico",
    "title": "mexico",
    "location": "mexico",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1475,
    "image": "/assets/international/mexico.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "Mexico is a great mosaic that combines beautiful natural settings, cities with pre-Hispanic, colonial and modern heritage, a wide variety of exquisite delicacies that delight palat...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Mexico is a great mosaic that combines beautiful natural settings, cities with pre-Hispanic, colonial and modern heritage, a wide variety of exquisite delicacies that delight palates, and fascinating traditions that captivate the visitor.\r\n\r\nFrom the beach to the mountains, from the desert to the ju"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "south-america",
    "title": "South America",
    "location": "South America",
    "duration": "12 Days / 11 Nights",
    "price": "₹1,40,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 618,
    "image": "/assets/international/south-america.jpg",
    "tags": [
      "Heritage & Nature",
      "12 Days",
      "International Tour"
    ],
    "description": "Arrive in Lima, the capital of Peru, and proceed for the city tour to visit the Main Square (Plaza Mayor), Government Palace, City Hall, the Catherdral, the San Francisco Convent a...",
    "itinerary": [
      [
        "Day 01 – Lima",
        "Arrive in Lima, the capital of Peru, and proceed for the city tour to visit the Main Square (Plaza Mayor), Government Palace, City Hall, the Catherdral, the San Francisco Convent and its “Catacombs,” ancient underground cemetery of Lima, El Oidor, Torre Tagle Palace, a beautiful mansion, and the Osambela House. Afterwards, visit the Gold Museum and splendid collection of guns. The tour continues to the modern and high end side of Lima city, the Mira Flores. Overnight in Lima."
      ],
      [
        "Day 02 – Lima – Cuzco",
        "Today, we proceed by plane/train/road to Cuzco. Arrive at the hotel, and after acclimating to the altitude, proceed to city tour in the afternoon. Visit nearby Ruins “Cusco” of Tambo achy, Kenki, Puca – Pucara, and finally the fortress of Sacsayhuaman. Also visit the Koricanchaor temple of the Sun. Overnight in Cuzco. (Meals: B)"
      ],
      [
        "Day 03 – Machu Picchu – Cuzco",
        "After breakfast, begin your day with a breathtaking train ride, which goes through Urubamba Valley and mountain top ruins of Machu Picchu. Machu Picchu is eye tantalizing tribute to man in harmony with nature. It is located high above the clouds. Machu Picchu has become one of most popular destinations in South America, high above the Sacred Valley. Take afternoon train back to Cusco and overnight in the hotel. (Meals: B)"
      ],
      [
        "Day 04 – Cuzco – Buenos Aires",
        "Today, we proceed by plane/train/road to Buenos Aires, the capital of Argentina. After completing all the immigration formalities, you will be transferred to the hotel. Buenos Aires is, with over 11 million inhabitants, one of the largest cities in Argentina. A city with modern structure and dynamic activities has found the way to preserve old traditions &lovely spots. Overnight in Buenos Aires.(Meals: B)"
      ],
      [
        "Day 05 – Buenos Aires",
        "After breakfast, we start the city tour of Buenos Aires. Visit “Plaza de Mayo,” the Pink House, the Buenos Aires Cathedral, the 9 of July Avenue, the Colon Theatre, La Boca neighborhood with the traditional “Caminito Street,” “San Martin Plaza,”Recoleta Cemetery, and the Palermo Woods. In the afternoon, we will tour the Tigre and Parana’s Delta River. Then we will return by bus along the Panamerican Highway to the city of Buenos Aires. Overnight in Buenos Aires.(Meals: B)"
      ],
      [
        "Day 06 – Buenos Aires",
        "After breakfast, enjoy a full day Fiesta Gaucho Tour at Estancia Santa Susana and meet ‘gauchos’ in their own environment. Ride to the outskirts of the city into the countryside, the ‘pampas’, cradle of the ‘gaucho’ and the rich ‘gaucho’ tradition. Visit typical Estancia in Buenos Aires Province who welcomes you with delicious Argentine ’empanadas’. After dinner, proceed to enjoy the LA VENTANA, TANGO SHOW. This is a diverse and superb Tango show with the great tango orchestras of the forties. Also included are a folklore show with dancers and musicians from the Altiplano. Overnight in Buenos Aires.(Meals: B)"
      ],
      [
        "Day 07 – Buenos Aires – Iguassu Falls",
        "Today, we proceed by plane/train to Iguassu Falls, located on the border of Brazil, Argentina, and Paraguay. After checking in to the hotel, we proceed to enjoy the Iguassu Falls National Park, touring the Brazilian side of the fall. You will walk with the guide, descending a walkway, contemplating the lovely waterfalls in all of nature’s exuberance, with panoramic views of both sides – Brazilian and Argentinean. Reach the highest elevation, then descend into the Brazilian side lookout, this provides magnificent photo opportunities and views. Overnight in Iguassu.(Meals: B)"
      ],
      [
        "Day 8 – Iguazu Falls",
        "After breakfast, visit the Argentina side of the falls, taking a guided walking tour of this natural wonderland. You will see a never to be forgotten spectacle of 275 cataracts from different angles, walking through the raised platforms, getting near the Devil’s Throat and its immense amount of water spilled, causing wetness to a large area around it. After lunch, we tour the Itaipu Dam, which is one of the world’s largest hydroelectric power plants and a technological wonder. Stop at panoramic overlooks for photo opportunity. The spectacle of the spillway of the dam, with its huge flow of water is particularly impressive.Overnight in Iguassu.(Meals: B)"
      ],
      [
        "Day 9 – Iguazu Falls – Rio de Janeiro",
        "Today, we proceed by plane/train to Rio de Janeiro. Upon arrival, transfer to the hotel, check-in, and enjoy lunch. Afternoon is at leisure, so you can relax at the hotel. We will visit the Sugar Loaf drive to “Praia Vermelha” (Red beach), to take the two stage car up to the top of Sugar Loaf, which grants the entrance to Rio’s harbor and Guanabara Bay. The cable car holds 80 passengers and each of the two stages takes two minutes. The first stage is Morro da Urca & the second stage goes to the Sugar Loaf itself, the view is spectacular at sunset. Overnight in Rio. (Meals: B)"
      ],
      [
        "Day 10 – Rio de Janeiro City Tour",
        "After breakfast, enjoy a full day city tour of Rio. Ascend on Corcovado Mountain by train to visit one of the world’s most famous landmarks, the gigantic statue of Christ, the Redeemer. Then proceed to Cascatinha, Tijuca Forest, to the top of Corcovado Mountain. Cidade Maravilhosa, “the marvelous city” as it is known to its residents and the rest of Brazil, is also the most beautiful city in the world. As a tropical resort, Rio offers miles of golden beaches, including, Ipanema and Copacabana, two of the most famous stretches of sand in the world. The tour continues with the visit to Metropolitan Cathedral, samba stadium and view of architectonic monuments of Rio. Overnight in Rio. (Meals: B)"
      ],
      [
        "Day 11 – Rio de Janeiro",
        "After breakfast, we will take a boat tour of Guanabara Bay, viewing the incredible “Wonder City” from its most famous bay, and has several islands such as the Governor’s Island and Snakes Island. To the west lies Rio de Janeiro, and facing east, the municipal district of Niteroi. Various sights and landmarks such as the neighborhoods of Botafogo, Flamengo, Urca, Sugar Loaf Mountain, Fort Sao Joao, Flagstone Island, Santa Cruz Fortress, Rio-Niteroi Bridge and more will be seen as we depart from the Marina da Gloria. Overnight in Rio.(Meals: B)"
      ],
      [
        "Day12 – Rio de Janeiro",
        "Today we will check out from the hotel, transfer to airport and board the flight. Your memorable trip to South America ends here as you return back home. (Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "usa",
    "title": "USA",
    "location": "USA",
    "duration": "12 Days / 11 Nights",
    "price": "₹1,40,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1564,
    "image": "/assets/international/canada-discovery.jpeg",
    "tags": [
      "Heritage & Nature",
      "12 Days",
      "International Tour"
    ],
    "description": "Arrive in New York Welcome to the “Big Apple,” the “City That Never Sleeps”—New York is a city of superlatives: America’s biggest; its most exciting; its business and cultural capi...",
    "itinerary": [
      [
        "Day 1",
        "Arrive in New York Welcome to the “Big Apple,” the “City That Never Sleeps”—New York is a city of superlatives: America’s biggest; its most exciting; its business and cultural capitals; the nation’s trendsetter. For more than a century, it has been one of the world’s major centers of commerce and finance. Upon arrival at the airport, you will be transferred to the hotel."
      ],
      [
        "Day 2",
        "New York City Tour After breakfast, we proceed for a City Tour of New York. The sightseeing will include USA’s famous landmark “Statue of Liberty.” We will take a ferry ride to Liberty Island for a spectacular view of the New York City Skyline. Next, we experience the view of a lifetime from the 86th floor of the Empire State Building. Later in the day we will see Rockefeller Center, Wall Street, Ground Zero and Central Park, Times Square, United Nations and Trump Tower. (Meals: B)"
      ],
      [
        "Day 3",
        "New York – Washington D.C. Today, we proceed by plane/train/road to Washington D.C., capital of the United States of America and a Guide to the Historic Neighborhoods and Monuments. Other than the federal government, tourism is D.C.’s biggest industry. The city attracts almost twenty million visitors each year. After checking in at the hotel, you will explore the capital city of US. Seethe White House, Lincoln Memorial, Supreme Court, the Capitol Building, the Smithsonian Air and Space museum, Union Station, World War II Memorial Building, Pentagon building and Washington monument.(Meals: B)"
      ],
      [
        "Day 4",
        "Washington D.C.- Buffalo- USA side Niagara Falls Today, we proceed by plane/train to Buffalo, to view the world famous falls, which form one of the natural wonders of the World. (Meals: B)"
      ],
      [
        "Day 5",
        "USA side Niagara Falls After breakfast, we will board the famous boat, “Maid of the Mist,” which takes us close to the thundering falls and around the American and Horseshoe Falls (seasonal). Return to the hotel to freshen up after your damp ride and then enjoy dinner at Niagara’s finest restaurant. You can also visit the falls on own at night to see them lit up beautifully.(Meals: B)"
      ],
      [
        "Day 6",
        "Las Vegas Today, we proceed by plane/train to Las Vegas. On arrival, transfer to your hotel. In the evening, we proceed for a city tour of Las Vegas, experiencing the spectacular Colorful Dancing Fountain water fountains of the Bellagio, the Pirate Ships at Treasure Island, Stratosphere Tower, Downtown Vegas, and of course Fremont street, where over 12 million lights create a free show with pumping music. (Meals: B)"
      ],
      [
        "Day 7",
        "Grand Canyon (Optional) Spend the day at leisure OR take the Grand Canyon Tour BUS OR AIR (OPTIONAL). Don’t forget the new Wonder of the West, The SKYWALK. In the evening, take the Las Vegas Night Flight (OPTIONAL), a Helicopter Ride over dazzling night time Vegas, take in a fabulous show, or visit any of the free shows such as the Sirens of Treasure Island and much more."
      ],
      [
        "Day 8",
        "Las Vegas- Los Angeles Today, we proceed by plane/train/road to Los Angeles. Enjoy a city tour of Los Angeles, where we will drive you through the “Entertainment capital of the world,” Hollywood Walk of Fame, Beverly Hills, Grumman Chinese Theater, Sunset Strip, Rodeo Drive for the world’s most expensive shopping, and China town for some good bargains."
      ],
      [
        "Day 09",
        "Los Angeles- Universal Studios Join us today for a tour of Universal Studios, which has always been known for its innovative rides and attractions and is designed to let visitors experience the movies like never before. A trip to Universal is like a trip into the heart of Hollywood. With films and TV shows always in production, one never knows who they might see wandering the sidewalks of the park. (Meals: B)"
      ],
      [
        "Day 10",
        "Los Angeles- Disney Land Today you will visit Disney Land, where storybook fantasy is everyday reality and Disney classics are brought to life. From the moment you step onto Main Street USA, you are transported to a place where the cares of the outside world seem to magically melt away.(Meals: B)"
      ],
      [
        "Day 11",
        "Los Angeles – San Francisco Today, we proceed by plane/train/road to San Francisco, one of the few North American cities to achieve the legendary status of such places as Paris or London. You will visit the famous Golden Gate Bridge, with the world’s highest bridge towers. Continue on to Twin Peaks, Lombard Street, Cable Car, Pier 39, Nob Hill, Civic Center, Union Square, Fisherman’s Wharf, Palace of Fine Arts& other highlights. (Meals: B)"
      ],
      [
        "Day 12",
        "Departure from San Francisco After breakfast, spend some time at leisure. Depart for the airport to board your flight for next destination. (Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "west-canada-tour",
    "title": "West Canada Tour",
    "location": "West Canada",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 730,
    "image": "/assets/international/canada.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "Today you will fly to Vancouver, which is truly one of the world’s most beautiful cities and one of the healthiest places to visit or live. It is a sophisticated, vibrant, fun lovi...",
    "itinerary": [
      [
        "Day 01- Arrive in Vancouver",
        "Today you will fly to Vancouver, which is truly one of the world’s most beautiful cities and one of the healthiest places to visit or live. It is a sophisticated, vibrant, fun loving, outdoor living city. Upon arrival, check in hotel and spend time at leisure."
      ],
      [
        "Day 02 – Vancouver City Tour – Grouse Mountain – Suspension Bridge",
        "This all day tour combines Vancouver Highlights with the best of the North Shore: Capilano Suspension Bridge and Park, and Grouse Mountain, including the Grouse Mountain Sky ride to the top of the mountain. You’ll see Stanley Park, Chinatown, Gas town, English Bay and Yaletown downtown. You’ll also have plenty of time to explore Capilano Suspension Bridge, with its Tree Top Adventure, Cliff Walk and the amazing bridge itself. Then it’s up to the top of Grouse Mountain by gondola, where you’ll have time to visit Coola and Grinder, the two orphaned Grizzly Bears,watch amazing lumberjacks and the Lumber Jack Show, Birds in Motion, and the Theatre in the Sky. (Meals: B)"
      ],
      [
        "Day 03 – Victoria & Butchart Garden Tour",
        "Today you will enjoy a 90 minute cruise through the spectacular Gulf Islands. Watch for whales, sea lions and bald eagles. You will visit Butchart Gardens, which is fifty-five acres of flowers, trees, pathways and creeks. Featuring a sunken garden, a world famous rose garden and a wonderful restaurant serving High Tea daily, Butchart Gardens is one of the most beautiful and best maintained gardens in the world. Tour the city of Victoria and take a scenic drive along the coast and enjoy the views. Ride through the famous Oak Bay and Uplands residential areas, plus the University of Victoria, Beacon Hill Park, Chinatown, and Downtown. (Meals: B)"
      ],
      [
        "Day 04 – Vancouver – Whistler & Shannon Falls Tours",
        "After breakfast, you will enjoy the breathtaking views and scenic stops along the thrilling Sea-To-Sky Highway. Feel the mist of the spectacular 335-meter Shannon Falls. In Whistler, you will have time to dine, shop, take the Peak 2 Peak gondola, bike or stroll along the trails. Seasonally, ride the Gondola to the Peak of Whistler Mountain. Enjoy glacier, mountain and river views on your leisurely ride home. (Meals: B)"
      ],
      [
        "Day 05 – Calgary",
        "Today we proceed by plane/train to Calgary; the largest city in the province of Alberta, Canada. It is located in the south of the province, in a region of foothills and high plains, approximately 80 km east of the front ranges of the Canadian Rockies. Upon arrival, check-in to the hotel. Spend rest of the day at leisure. (Meals: B)"
      ],
      [
        "Day 06 – Calgary City Tour",
        "After breakfast, you will proceed for a city tour of Calgary and visit Calgary Tower, Old and New City Hall, Olympic Plaza, Fort Calgary Historic Park, Chinatown, Eau Claire Market Mall, Stephen Avenue, Devonian Garden, Stampede Park, Saddle dome and much more. (Meals: B)"
      ],
      [
        "Day 07 – Banff City Tour & Gondola Ride",
        "Today, you will enjoy a stunning tour, which is a great way to see Banff and its surrounding areas from an amazing selection of perspectives. A full day excursion takes you from the city of Calgary into the Canadian Rockies through Alberta’s foothills and ranching country to the resort town of Banff in the Rocky Mountains. Experience our stories of the people, geology, and the building of this mountain town. This day trip includes admission to the Banff Gondola, where an 8-minute gondola car takes you to the top of the mountain. (Meals: B)"
      ],
      [
        "Day 08 – Calgary – Fly Out",
        "Today, we finish our trip and get ready to fly back home or to the next destination.(Meals: B)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "bhutan-bumthang",
    "title": "Bhutan – Bumthang",
    "location": "Bhutan – Bumthang",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 1158,
    "image": "/assets/international/bhutan-bhumtan.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "You will arrive at the capital town of Thimphu. A day of sightseeing in Thimphu, where we will visit the National Memorial Chorten, the Tashichhodzong, and the breathtaking Buddha ...",
    "itinerary": [
      [
        "Day 1",
        "You will arrive at the capital town of Thimphu. A day of sightseeing in Thimphu, where we will visit the National Memorial Chorten, the Tashichhodzong, and the breathtaking Buddha Point. Overnight in Thimphu."
      ],
      [
        "Day 2",
        "We will drive to Punakha in the morning. On the way, we will stop at the Dochula Pass, which offers one of the most beautiful views of Bhutanese landscape. In Punakha, we will visit the Punakha Dzong (fortress), Bhutanese architecture at its finest, and Chimi Lhakhang (Temple of Fertility), built in the 15th century by the ‘Divine Mad Man’ (Lama Drukpa Kuenley). Overnight in Punakha."
      ],
      [
        "Day 3",
        "We will continue our journey towards Central Bhutan. We will reach the sleepy town of Trongsa, the gateway to central Bhutan. In Trongsa, we will visit the majestic Trongsa Dzong, one of the largest in the country and of great historical significance. Then, we will visit the ancient Ta Dzong (watch tower) dedicated to the Royal Wangchuck dynasty. Then, we will drive to Bumthang, which is about 2-3 hours away. Overnight in Bumthang."
      ],
      [
        "Day 4",
        "A day of sightseeing in the fascinating valley of Bumthang, where we will visit important religious and historical sites including Jambay Lhakhang, Kurjey Lhakhang and Tamshing Lhakhang. We will also visit the Jakar Dzong (Bhutan’s largest). Overnight in Bumthang."
      ],
      [
        "Day 5",
        "Another day of sightseeing and relaxing in Bumthang. We will visit the Chumey Valley, where one can see women weaving traditional attire of exquisite design called the Yathra. Then, we will visit the famous Swiss cheese factory. Overnight in Bumthang."
      ],
      [
        "Day 6",
        "Today will be a full day drive to Paro with sightseeing en-route. Overnight in Paro."
      ],
      [
        "Day 7",
        "We will hike up to the ‘Tiger’s Nest’, the sacred Taktshang monastery and have lunch at the Taktshang cafeteria overlooking the beautiful Paro valley. We will visit the Paro Rinpung Dzong (‘the fortress of the heap of jewels’) and the National Museum (Ta Dzong). Overnight in Paro."
      ],
      [
        "Day 8",
        "We will say good-bye to you as you make your way back to the border town. Tashi Delek!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "experience-bhutan-druk-path-trek",
    "title": "EXPERIENCE BHUTAN(Druk Path Trek)",
    "location": "EXPERIENCE BHUTAN(Druk Path Trek)",
    "duration": "11 Days / 10 Nights",
    "price": "₹1,31,500 / person",
    "type": "International Tour",
    "category": "Wildlife & Adventure",
    "rating": 4.9,
    "reviews": 1041,
    "image": "/assets/international/bhutan-bhumtan.jpeg",
    "tags": [
      "Wildlife & Adventure",
      "11 Days",
      "International Tour"
    ],
    "description": "Arrival in Paro On your arrival at Paro International airport, we will greet you in a typical Bhutanese style, and take you to your Paro hotel. We will take a stroll in Paro town t...",
    "itinerary": [
      [
        "Day 01",
        "Arrival in Paro On your arrival at Paro International airport, we will greet you in a typical Bhutanese style, and take you to your Paro hotel. We will take a stroll in Paro town to take in the scenary and atmosphere of this mystical kingdom. Overnight at a hotel in Paro."
      ],
      [
        "Day 02",
        "Paro Sightseeing We will drive northwest up the valley to Drukgyel Dzong, built in 1646 by Zhabdrung Ngawang Namgyal to commemorate his victory over the Tibetan invaders. Though largely destroyed by fire in 1951, its towering walls are still an imposing sight. On a clear day, there is a splendid view of Mt. Jomolhari from the approach road to Drukgyel Dzong. Then, we will visit one of the typical village houses clustered near the dzong. On our way back, we will visit Kyichu Lhakhang, one of the oldest and most sacred shrines of Bhutan. In the afternoon, we will pay a visit to Ta Dzong, once a fortified lookout tower and now the National Museum. Then, we will walk down the hillside trail to visit Rinpung Dzong (Paro Dzong), whose name translates to ‘the fortress of the heap of jewels’. Overnight at a hotel in Paro."
      ],
      [
        "Day 03",
        "Paro – Jele Dzong, 1st day of trek 8km, 3 hours Today is a short trekking day. The journey will start with a short climb up to Jele Dzong. The trek trail ascends gradually up to the camp, and if the weather is clear Paro valley can be seen with snowcapped mountains behind. Above the camp is Jele-la pass (3,400m) and Jele Dzong (mostly in ruins). There is also a lhakhang containing a statue of Buddha Sakyamuni. Overnight camp."
      ],
      [
        "Day 04",
        "Jele Dzong – Jangchulakha 10km, 3-4 hours We will begin with a one and a half hour climb and then ascend more gradually upwards. The trail will take us through thick alpine forests and rhododendrons. You will have fine views of Jumoihari and other snow capped peaks if the weather is right, and you may hear some monal pheasants calling during the day. You may see yak herders around your campsite. Overnight camp."
      ],
      [
        "Day 05",
        "Jangchulakha – Jimllangtsho 11km, 4 hours The trail follows the ridge, and on a clear day the views of the mountains and valley are sensational. You will enjoy a great view of Jichu Drake (6,989m), the peak representing the protective deity of Paro. Our camp will be close to the Jimilangtsho lakes, which are famous for their giant sized trout. Overnight camp."
      ],
      [
        "Day 06",
        "JimiLangtsho – Simkota 11km, 4 hours The trail takes you through dwarf rhododendron trees and passes by the lake of Janetsho. Today you may come across some yak herders’ camps and get an idea of how these people live. We camp overnight close to Simkota Lake, and if you are lucky, you could catch a lake trout for your dinner. Overnight camp."
      ],
      [
        "Day 07",
        "Simkota – Phajoding 10km, 4 hours Today, we begin with a gradual climb, and if the weather permits you will enjoy majestic views of Mt. Gangkar Puensum, and a host of other peaks. The trail slowly descends through juniper trees to a campsite beside a community hail near Phajoding cafeteria. Overnight in cafeteria or camp, depending on weather conditions."
      ],
      [
        "Day 08",
        "Phajodlng – Thlmphu 5km, 3 hours The trek to Thimphu is downhill all the way, passing through a forested area of mostly blue pine. Taking a leisurely pace, we will reach Thimphu in about 3 hours. Overnight at the hotel in Thimphu."
      ],
      [
        "Day 09",
        "ExcursIon to Punakha/Wangduephodrang After breakfast, we will take a full day excursion to the Punakha and Wangdue valleys. The drive from Thimphu crosses Dochu-la pass (3,088m) that has an enchanting view of the Bhutanese landscape. In Punakha, we will visit Punakha Dzong situated at the junction of the Pho Chu and Mo Chu rivers. Built in the 17th century by Zhabdrung Ngawang Namgyal, this dzong has played a significant role in the history of Bhutan. Then, we will drive to Wangduephodrang to visit the Wangduephodrang Dzong (recently destroyed by fire and under construction) and the local market. In the evening, we will drive back to Thimphu. Overnight at the hotel in Thimphu."
      ],
      [
        "Day 10",
        "Thimphu – Paro A day of sightseeing in Thimphu, where we will visit the National Memorial Chorten, the National Library, Changangkha Lhakhang, Tashichhodzong, and the National Painting School. Other places that you can choose to visit are the Thimphu Zoo to see the magnificent takin, the National Textile Museum, the Folk Museum and the breathtaking Buddha Point. We may also be able to visit the weekly vegetable market. In the evening, we will drive to Paro. Overnight at the hotel in Paro."
      ],
      [
        "Day 11",
        "Departure from Paro We will say good-bye to you at the Paro International Airport. Tashi Delek!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "experience-bhutan-paro-festival",
    "title": "EXPERIENCE BHUTAN(Paro Festival)",
    "location": "EXPERIENCE BHUTAN(Paro Festival)",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1922,
    "image": "/assets/international/bhutan-druk-path.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. In the afternoon, we will visit the Paro Rinpung Dzong (‘the fortress of the...",
    "itinerary": [
      [
        "Day 1",
        "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. In the afternoon, we will visit the Paro Rinpung Dzong (‘the fortress of the heap of jewels’) and the National Museum (Ta Dzong). We will also visit the Kichu Lhakhang and Drukgyel Dzong (in ruins). Overnight in Paro."
      ],
      [
        "Day 2",
        "This morning, we visit Paro Festival. You will see locals dressed in their finest clothes who have walked for miles to attend the festivities. They come to watch masked dances, to pray, and to feast. While the underlying purpose of the festival is spiritual, dances are more often like plays, telling stories where good triumphs over evil, or depicting significant historical events, especially surrounding the life of Bhutan’s patron saint, Padmasambhava (also known as Guru Rinpoche). There is inevitably a great deal of socialising as well. The occasion provides an opportunity for people to relax and forget the daily routine, and to dress in their finest clothes and jewelry, but it is also an occasion for prayer and blessings. Overnight in Paro."
      ],
      [
        "Day 3",
        "Early in the morning, we visit the festival again to see the excitement of the thongdrel ceremony, where a large religious painting made of cloth is unfurled on the side of the Dzong. This event takes place on the last day of the annual festival. After the festival, You will be driven to the capital town of Thimphu, which is a short one-hour drive. On the way, we will stop at the magnificent Tamchhog Lhakhang, the hereditary place of worship for Bhutan’s iron bridge builder. There will be sightseeing in Thimphu town for those who are not too tired from the journey. Overnight in Thimphu."
      ],
      [
        "Day 4",
        "A day of sightseeing in Thimphu, where we will visit the Tashichhodzong (fortress), National Memorial Chorten, National Textile Museum and the breathtaking Buddha Point. Other places that you can choose to visit are the Thimphu Zoo to see the magnificent takin, the Folk Heritage Museum and the National Library. We may also be able to visit the weekly vegetable market. Overnight in Thimphu."
      ],
      [
        "Day 5",
        "We will drive to Punakha in the morning. On the way, we will stop at the Dochula Pass, which offers one of the most beautiful views of Bhutanese landscape. In Punakha, we will visit the Punakha Dzong (fortress), Bhutanese architecture at its finest, and Chimi Lhakhang (Temple of Fertility), built in the 15th century by the ‘Divine Mad Man’ (Lama Drukpa Kuenley). Overnight in Punakha."
      ],
      [
        "Day 6",
        "We will drive back to Paro. The evening can be spent visiting handicraft shops for souvenirs of your trip. Overnight in Paro."
      ],
      [
        "Day 7",
        "We will hike up to the ‘Tiger’s Nest’, the sacred Taktshang monastery and have lunch at the Taktshang cafeteria overlooking the beautiful Paro valley. On the way back, we can visit the Dumtse Lhakhang, a temple built by Thangthong Gyalpo, the iron bridge builder. Overnight in Paro."
      ],
      [
        "Day 8",
        "We will say good-bye to you at the Paro International Airport. Tashi Delek!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "experience-bhutan-textilejewelry",
    "title": "EXPERIENCE BHUTAN(TextileJewelry)",
    "location": "EXPERIENCE BHUTAN(TextileJewelry)",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 1583,
    "image": "/assets/international/bhutan-druk-path.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. You will be driven to the capital town of Thimphu, which is a short one-hour...",
    "itinerary": [
      [
        "Day 1",
        "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. You will be driven to the capital town of Thimphu, which is a short one-hour drive. On the way, we will stop at the magnificent Tamchhog Lhakhang, the hereditary place of worship for Bhutan’s iron bridge builder. There will be sightseeing in Thimphu town for those who are not too tired from the flight. Overnight in Thimphu."
      ],
      [
        "Day 2",
        "A day of sightseeing in Thimphu, where we will visit the Tashichhodzong (fortress), National Memorial Chorten and the breathtaking Buddha Point. As part of the Textile/jewelry tour, we will visit the National Textile Museum and Zorig Chusum (School of 13 Traditional Arts). We will also meet with the weavers association and talk with local weavers, and then visit the famous traditional boot-making shop. In the evening, we will visit the local handicraft shops specializing in traditional textile and jewelry. Overnight in Thimphu."
      ],
      [
        "Day 3",
        "We will drive to Punakha in the morning. On the way, we will stop at the Dochula Pass, which offers one of the most beautiful views of Bhutanese landscape. In Punakha, we will visit the Punakha Dzong (fortress), Bhutanese architecture at its finest, and Chimi Lhakhang (Temple of Fertility), built in the 15th century by the ‘Divine Mad Man’ (Lama Drukpa Kuenley). Overnight in Punakha."
      ],
      [
        "Day 4",
        "We will drive back to Paro. In the afternoon, we will visit the Paro Rinpung Dzong (‘the fortress of the heap of jewels’) and the National Museum (Ta Dzong). We will also visit the Kichu Lhakhang and Drukgyel Dzong (in ruins). The evening can be spent visiting handicraft shops for souvenirs of your trip. Overnight in Paro."
      ],
      [
        "Day 5",
        "We will hike up to the ‘Tiger’s Nest’, the sacred Taktshang monastery and have lunch at the Taktshang cafeteria overlooking the beautiful Paro valley. On the way back, we can visit the Dumtse Lhakhang, a temple built by Thangthong Gyalpo, the iron bridge builder. Overnight in Paro."
      ],
      [
        "Day 6",
        "We will say good-bye to you at the Paro International Airport. Tashi Delek!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "experience-bhutan",
    "title": "Experience Bhutan",
    "location": "Experience Bhutan",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 961,
    "image": "/assets/international/bhutan-kingdom-in-sky.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. You will be driven to the capital town of Thimphu, which is a short one-hour...",
    "itinerary": [
      [
        "Day 1",
        "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. You will be driven to the capital town of Thimphu, which is a short one-hour drive. On the way, we will stop at the magnificent Tamchhog Lhakhang, the hereditary place of worship for Bhutan’s iron bridge builder. There will be sightseeing in Thimphu town for those who are not too tired from the flight. Overnight in Thimphu."
      ],
      [
        "Day 2",
        "A day of sightseeing in Thimphu, where we will visit the Tashichhodzong (fortress), National Memorial Chorten, Thimphu Zoo, the National Textile Museum, the breathtaking Buddha Point, and the Folk Museum. We will have dinner at Folk Heritage to try out authentic Bhutanese cuisine. Overnight in Thimphu."
      ],
      [
        "Day 3",
        "We will drive to Punakha in the morning. On the way, we will stop at the Dochula Pass, which offers one of the most beautiful views of Bhutanese landscape. In Punakha, we will visit the Punakha Dzong (fortress), Bhutanese architecture at its finest, and Chimi Lhakhang (Temple of Fertility), built in the 15th century by the ‘Divine Mad Man’ (Lama Drukpa Kuenley). Overnight in Punakha."
      ],
      [
        "Day 4",
        "We will drive back to Paro. In the afternoon, we will visit the Paro Rinpung Dzong (‘the fortress of the heap of jewels’) and the National Museum (Ta Dzong). The evening can be spent visiting handicraft shops for souvenirs of your trip. Overnight in Paro."
      ],
      [
        "Day 5",
        "We will hike up to the ‘Tiger’s Nest’, the sacred Taktshang monastery and have lunch at the Taktshang cafeteria overlooking the beautiful Paro valley. On the way back, we can visit the Dumtse Lhakhang, a temple built by Thangthong Gyalpo, the iron bridge builder. Overnight in Paro."
      ],
      [
        "Day 6",
        "We will say good-bye to you at the Paro International Airport. Tashi Delek!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "journey-to-the-heart-of-bhutan",
    "title": "JOURNEY TO THE HEART OF BHUTAN",
    "location": "JOURNEY TO THE HEART OF BHUTAN",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 870,
    "image": "/assets/international/bhutan-kingdom-in-sky.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. You will be driven to the capital town of Thimphu, which is a short one-hour...",
    "itinerary": [
      [
        "Day 1",
        "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. You will be driven to the capital town of Thimphu, which is a short one-hour drive. On the way, we will stop at the magnificent Tamchhog Lhakhang, the hereditary place of worship for Bhutan’s iron bridge builder. In Thimphu, we shall relax at the hotel for some time and then take a stroll in Thimphu town. Overnight in Thimphu."
      ],
      [
        "Day 2",
        "A day of sightseeing in Thimphu, where we will visit the National Memorial Chorten, the Tashichhodzong, and the and the breathtaking Buddha Point. Other places that you can choose to visit are Thimphu Zoo to see the magnificent takin, the National Textile Museum and the Folk Heritage Museum. Overnight in Thimphu."
      ],
      [
        "Day 3",
        "We will drive to Punakha in the morning. On the way, we will stop at the Dochula Pass, which offers one of the most beautiful views of Bhutanese landscape. In Punakha, we will visit the Punakha Dzong (fortress), Bhutanese architecture at its finest, and Chimi Lhakhang (Temple of Fertility), built in the 15th century by the ‘Divine Mad Man’ (Lama Drukpa Kuenley). Overnight in Punakha."
      ],
      [
        "Day 4",
        "We will continue our journey towards Central Bhutan. We will reach the sleepy town of Trongsa, the gateway to central Bhutan. In Trongsa, we will visit the majestic Trongsa Dzong, one of the largest in the country and of great historical significance. Then, we will visit the ancient Ta Dzong (watch tower) dedicated to the Royal Wangchuck dynasty. Then, we will drive to Bumthang, which is about 2-3 hours away. Overnight in Bumthang."
      ],
      [
        "Day 5",
        "A day of sightseeing in the fascinating valley of Bumthang, where we will visit important religious and historical sites including Jambay Lhakhang, Kurjey Lhakhang and Tamshing Lhakhang. We will also visit the Jakar Dzong (Bhutan’s largest) and the famous Swiss cheese factory. Overnight in Bumthang."
      ],
      [
        "Day 6",
        "Today will be a full day drive to Paro with sightseeing en-route. Overnight in Paro."
      ],
      [
        "Day 7",
        "We will hike up to the ‘Tiger’s Nest’, the sacred Taktshang monastery and have lunch at the Taktshang cafeteria overlooking the beautiful Paro valley. We will visit the Paro Rinpung Dzong (‘the fortress of the heap of jewels’) and the National Museum (Ta Dzong). Overnight in Paro."
      ],
      [
        "Day 8",
        "We will say good-bye to you at the Paro International Airport. Tashi Delek!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kingdom-in-the-sky",
    "title": "KINGDOM IN THE SKY",
    "location": "KINGDOM IN THE SKY",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1739,
    "image": "/assets/international/bhutan-kingdom-in-sky.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. You will be driven to the capital town of Thimphu, which is a short one-hour...",
    "itinerary": [
      [
        "Day 1",
        "You will arrive at the Paro International Airport where we will greet you in a typical Bhutanese style. You will be driven to the capital town of Thimphu, which is a short one-hour drive. On the way, we will stop at the magnificent Tamchhog Lhakhang, the hereditary place of worship for Bhutan’s iron bridge builder. In Thimphu, we shall relax at the hotel for some time and then take a stroll in Thimphu town. Overnight in Thimphu."
      ],
      [
        "Day 2",
        "A day of sightseeing in Thimphu, where we will visit the National Memorial Chorten, the Tashichhodzong, and the and the breathtaking Buddha Point. Other places that you can choose to visit are Thimphu Zoo to see the magnificent takin, the National Textile Museum and the Folk Heritage Museum. Overnight in Thimphu."
      ],
      [
        "Day 3",
        "We will drive to Punakha in the morning. On the way, we will stop at the Dochula Pass, which offers one of the most beautiful views of Bhutanese landscape. In Punakha, we will visit the Punakha Dzong (fortress), Bhutanese architecture at its finest, and Chimi Lhakhang (Temple of Fertility), built in the 15th century by the ‘Divine Mad Man’ (Lama Drukpa Kuenley). Overnight in Punakha."
      ],
      [
        "Day 4",
        "We will continue our journey towards Central Bhutan. We will drive to Phobjikha valley in the morning. Once at Phobjikha, we will walk/hike around the breathtaking valley that has been declared as the first eco-tourism destination of Bhutan. Overnight in Phobjikha."
      ],
      [
        "Day 5",
        "After spending the morning visiting the monasteries in Phobjikha, today will be a full day drive to Paro with sightseeing en-route. The evening can be spent visiting handicraft shops for souvenirs of your trip. You could also choose to visit a local farmhouse and drink tea with a local farmer and his family. Overnight in Paro."
      ],
      [
        "Day 6",
        "Today will be a full day of sightseeing in Paro. In the morning, we will visit the Paro Rinpung Dzong (‘the fortress of the heap of jewels’) and the National Museum (Ta Dzong). After lunch, we will visit the Drukgyel Dzong (‘fortress of victory’) and the sacred Kyichu Lhakhang. Overnight in Paro."
      ],
      [
        "Day 7",
        "We will hike up to the ‘Tiger’s Nest’, the sacred Taktshang monastery and have lunch at the Taktshang cafeteria overlooking the beautiful Paro valley. On the way back, we can visit the Dumtse Lhakhang, a temple built by Thangthong Gyalpo, the iron bridge builder. Overnight in Paro."
      ],
      [
        "Day 8",
        "We will say good-bye to you at the Paro International Airport. Tashi Delek!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "bali-honeymoon-tour",
    "title": "Bali Honeymoon Tour",
    "location": "Bali Honeymoon",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 2044,
    "image": "/assets/international/bali-destination-tour.jpeg",
    "tags": [
      "Beach & Backwaters",
      "5 Days",
      "International Tour"
    ],
    "description": "ARRIVE BALI – ULUWATU TEMPLE (-/L/D) Arrive at NGURAH RAI INTERNATIONAL AIRPORT and proceed to immigration for get stamp passport. Collecting luggage and meet our guide at the arri...",
    "itinerary": [
      [
        "DAY 1 ",
        "ARRIVE BALI – ULUWATU TEMPLE (-/L/D) Arrive at NGURAH RAI INTERNATIONAL AIRPORT and proceed to immigration for get stamp passport. Collecting luggage and meet our guide at the arrival zone meeting point. Get Flower Garland from our Balinese Costumed Girl before proceed to the car. Noon : Depart from Airport to Indian Restaurant for Lunch. After lunch, transfer to hotel for check in. At 4.00 PM : Depart from Hotel to visit ULUWATU TEMPLE.  Uluwatu Temple, or Pura Luhur Uluwatu, one of six key temples believed to be Bali’s spiritual pillars, is renowned for its magnificent location, perched on top of a steep cliff approximately 70 metres above sea level. Evening : Diner at Indian Restaurant. After dinner, transfer back to hotel."
      ],
      [
        "DAY 2 ",
        "FULL DAY KINTAMANI TOUR (B/L/D) Breakfast at hotel. Morning transfer from hotel to BATUBULAN VILLAGE to visit BATIK FACTORY to see the making of BATIK CLOTH painted. Next proceed to Celuk Village which is famous for its silvers works followed by visiting MAS VILLAGE which is famous for its painters and wood carvings. Continue the tour direct to KINTAMANI VILLAGE and have stop at PENELOKAN VIEW POINT to enjoy the beautiful and magnificent view of Mount and Lake BATUR. Noon : Enjoy INDONESIAN HALAL BUFFET LUNCH at GRAND PUNCAK SARI RESTAURANT. Afterwards proceed to TAMPAK SIRING VILLAGE to visit TIRTA EMPUL TEMPLE. A Hindu Temple located in a valley between two hills with big springs and sacred by the local residents as a place to melt all the bad influences in the body and purifies the soul and mind. It is a place to purify our self from the bad influences in life where we can discover the traditional showers sourced from the springs at this temple. Evening : Dinner at Indian Restaurant. After dinner, transfer back to hotel"
      ],
      [
        "DAY 3 ",
        "WATERSPORT ACTIVITIES + PIRATE DINNER CRUISES (B/L/D) Breakfast at hotel. Morning CHECK transfer to TANJUNG BENOA BEACH for WATERSPORT ACTIVITIES. Package will be including : 1x Banana Boat ride + 1 x Visit Turtle Island with Glass Bottom Boat (Optional water  Sports can be taken on the spot on personal account, such as parasailing, jet ski, flying fish, snorkeling, sky tube, sea walker, etc) Noon : Enjoy Indian Lunch at Indian Restaurant. After lunch, transfer back to hotel for relax. At 4.00 PM : Depart from hotel to join PIRATE DINNER CRUISE by SEA SAFARI CRUISES. Experience sailing with a unique PHINISI vessel and Pirate costumed crews on a relaxing evening covered with the atmosphere of PIRATE as the sun goes down. Enjoy the fresh air on the top deck while entertained with Live Music Show,Exotic Belly Dance, Awesome Fire Dance and play various games with prizes. Pirate Dinner Cruises Including : Pirate Accessories upon Check in, Welcome Drinks, International Buffet Menu Dinner, Coffee, Tea and Iced Water during Cruises, Entertainment (Live music, Belly dance, Pirate Dance, Fire dance, Games with prizes, Free dance) Finish with dinner cruise, transfer back to hotel."
      ],
      [
        "DAY 4 ",
        "FULL DAY BALI SAFARI & MARINE PARK – JUNGLE HOPPER PACKAGE (B/L/D) Breakfast at hotel. Morning depart from hotel to BALI SAFARI & MARINE PARK. A safari Park which stand on an area of 40 hectares which includes the three Village in Gianyar. Here you can see different kinds of animal origination from three regions of Indonesia, India and Africa. Consisted of 400 animals and 800 species. All the animals adapted to their natural habitat and culture combined with BALI Culture, making Bali Safari & Marine Park became one of which must be visited. Package will include below : 1 x Safari Journey, Free Access to Fresh Water Aquarium, Animal Show (11.00 AM), Elephant Show (11.45 AM), Access to Waterpark, 1 x Access to Fun Zone. Finish with BALI SAFARI & MARINE PARK, transfer directly to Indian Restaurant for Lunch. After lunch, continue to have afternoon sunset tour to visit TANAH LOT TEMPLE. Tanah Lot Temple is one of Bali’s most important landmarks, famed for its unique offshore setting and sunset backdrops. An ancient Hindu shrine perched on top of an outcrop amidst constantly crashing waves; Tanah Lot Temple is simply among Bali’s not-to-be-missed icons. Evening : Dinner at Indian Restaurant. After dinner, transfer back to hotel."
      ],
      [
        "DAY 5 ",
        "Check out Hotel in Bali – Transfer out Airport (B/–/–)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "exotic-bali-destination-tour",
    "title": "Exotic Bali Destination Tour",
    "location": "Exotic Bali Destination",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Beach & Backwaters",
    "rating": 5,
    "reviews": 2059,
    "image": "/assets/international/bali-destination-tour.jpeg",
    "tags": [
      "Beach & Backwaters",
      "6 Days",
      "International Tour"
    ],
    "description": "Arrive  Bali  ( No meal) Arrival at Ngurah Rai International Airport, welcoming by our guide and transfer to hotel. Overnight ....",
    "itinerary": [
      [
        "Day 1 ",
        "Arrive  Bali  ( No meal) Arrival at Ngurah Rai International Airport, welcoming by our guide and transfer to hotel. Overnight ."
      ],
      [
        "Day 2 ",
        "Penglipuran Village – Kintamani Volcano – Coffee Plantation – Tirta Empul ( B. L. D ) Breakfast at  hotel. Visit Penglipuran Village. Then continue to Kintamani Tours will visit Kintamani  village for enjoy the beautiful view Volcano of Mount Batur and Lake Batur. Lunch at Local Restaurant with mount and lake batur views. After lunch visit Bali Coffee Plantation, is a place to see various Tropical plantations such as coffee robusta, plain Balinese potatoes, cacao, durian tree and many more. Then visit Tirta Empul Temple or Tampak Siring Temple is a holy spring water temple located in Tampak Siring Village. Then continue to Celuk Village, is the famous village in Bali as a tourist destination cause of the local resident is very proactive to the gold and silver crafting. Dinner at Local restaurant. Back to Hotel and free on your own program. Dinner at Local restaurant. Back to Hotel and free on your own program."
      ],
      [
        "Day 3 ",
        "Bedugul – Tanah Lot  (B. L. D) Departure from the hotel at 8:00 am ,  visit  Taman Ayun temple then  Ulundanu  , located at  Lake Bratan, bedugul. exploring the traditional market Bedugul, lunch at Bedugul, after lunch continue towards to villages with excellent  landscapes of rice terraces, clove plantations and tropical fruits  at Jatiluwih  village , then  visit the icon object  of Tanah Lot. then return  to hotel"
      ],
      [
        "Day 4 ",
        "Water Blow – Garuda Wisnu Kencana  – Uluwatu – Kecak  (B . L. D) Breakfast at  hotel, morning free to enjoy swim and fun at water blow beach until lunch time, after lunch visit monument of Garuda Wisnu Kencana then  visit Uluwatu Temple  , then continuing with Kecak fire dance at location  then return to hotel ."
      ],
      [
        "Day 5  ",
        "Full day Safari   ( B .D) After breakfast , depart from hotel to Bali Safari, for full day activities, evening before return to hotel, dinner seafood at Jimbaran."
      ],
      [
        "Day 6 ",
        "Free until transfer out  ( B. ) After breakfast  free time, until transfer to airport for return to home country"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "magical-bali",
    "title": "Magical Bali",
    "location": "Magical Bali",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Beach & Backwaters",
    "rating": 4.7,
    "reviews": 1598,
    "image": "/assets/international/bali-honeymoon-tour.jpeg",
    "tags": [
      "Beach & Backwaters",
      "6 Days",
      "International Tour"
    ],
    "description": "ARRIVAL (D) Arrive in Bali at Ngurah Rai International Airport – Meet & greet with our representative team – Dinner at Indian Restaurant – Transfer to hotel & overnight...",
    "itinerary": [
      [
        "Day 01",
        "ARRIVAL (D) Arrive in Bali at Ngurah Rai International Airport – Meet & greet with our representative team – Dinner at Indian Restaurant – Transfer to hotel & overnight"
      ],
      [
        "Day 02",
        "KINTAMANI & UBUD TOUR (B,D) Breakfast at the hotel – Pick up for starting tour with visit Celuk & Mas Village (Gold & Silver smith Village) – Batik Factory – Kintamani Viewing Point to see Mt. Batur from the distance – Coffee Plantation – Tegenungan Waterfall – Dinner at Indian Restaurant – Back to hotel & overnight."
      ],
      [
        "Day 03",
        "BEDUGUL & TANAH LOT TEMPLE TOUR (B,D) Breakfast at the hotel – Pick up for start Bedugul Tour with Candi Kuning Traditional Market – Ulundanu Beratan Temple & Lake Beratan – Tanah Lot Temple – Dinner at Indian Restaurant – Back to hotel & overnight."
      ],
      [
        "Day 04",
        "WATERSPORT & ULUWATU TEMPLE (B,D) Breakfast at the hotel – Pick up for Water sport activity Include: 01x Banana Boat, 01x Jet Ski, 01x Flying Fish (other activity on personal account) – Uluwatu Temple – Dinner at Indian Restaurant – Back to hotel & overnight. **Note: We don’t do for Single Parasailing due to safety reason. For UPGRADE from Flying Fish to Parasailing Adventure/Couple Parasailing additional USD 5 per pax"
      ],
      [
        "Day 05",
        "NUSA PENIDA WEST ISLAND TOUR (B,L,D) Morning pick-up with breakfast box from hotel – Transfer to Jetty at 7.00 am then visit Nusa Penida Island with speedboat – Nusa Penida West Island Tour Include: Kelingking Bay, Broken Beach, Angel Billabong, Crystal Bay & Lunch at Local Restaurant (Island Tour based on Pvt Basis) – Afternoon back to Bali main island with speed boat – Candle Light Dinner at the beach with Indian Food – Back to hotel & overnight"
      ],
      [
        "Day 07",
        "DEPARTURE (B) Breakfast at the hotel – Free on leisure in the morning until the pick-up time – Pick up and transfer to the airport for the next destination."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "south-korea-seoul-busan-jeju-island",
    "title": "South Korea Seoul Busan Jeju Island",
    "location": "South Korea Seoul Busan Jeju Island",
    "duration": "10 Days / 9 Nights",
    "price": "₹1,23,000 / person",
    "type": "International Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 1757,
    "image": "/assets/international/seoul-busan.jpeg",
    "tags": [
      "Beach & Backwaters",
      "10 Days",
      "International Tour"
    ],
    "description": "INCHEON ARRIVAL Arrive at Incheon International Airport After disembarking from aircraft clear Immigrations and pick your Luggage. Transfers to hotel Hotel Check-in as per hotel po...",
    "itinerary": [
      [
        "Day 01",
        "INCHEON ARRIVAL Arrive at Incheon International Airport After disembarking from aircraft clear Immigrations and pick your Luggage. Transfers to hotel Hotel Check-in as per hotel policy@ 1500Hrs Day is free for Leisure you may explore your own pace Meals:- No Meals Overnight at Seoul HOTEL"
      ],
      [
        "DAY 02",
        "[GYEONGBOKGUNG PALACE, BUKCHON, GWANGJANG MARKET] Breakfast at Hotel. Transfers for Seoul Sightseeing Gyeongbokgung Palace [Changing of the Royal Gaurd Ceremony] Bukchon Hanok Village Gwangjang Market Naksan Park Eungbongsan Mountain Meals:- Breakfast Overnight at Seoul HOTEL"
      ],
      [
        "DAY 03",
        "[NAMI ISLAND AND PETITE FRANCE – FILMING LOCATION WITH GUIDE & LUNCH] Breakfast at Hotel. Transfers for Nami Island Excursion Nami Island Petite France Meals:- Breakfast Overnight at Seoul HOTEL"
      ],
      [
        "DAY 04",
        "[SEOUL – BUSAN] Breakfast at Hotel. Transfers to Seoul Station for KTX Train to Busan Upon Arrival at Busan Station. Transfers for Busan Hotel Day is free for own Leisure Meals:- Breakfast Overnight at Busan HOTEL"
      ],
      [
        "DAY 05 [BUSAN COSTAL CHARM & CULTURE",
        "GAMCHEON VILLAGE & SKY CAPSULE] Breakfast at Hotel. Transfers to Busan Sightseeing Gamcheon Culture Village Busan Sky Capsule Meals:- Breakfast Overnight at Busan HOTEL"
      ],
      [
        "DAY 06",
        "[BUSAN – JEJU] Breakfast at Hotel. Transfers to Gimhae International Airport, Busan for Flight to Jeju Island Upon Arrival at Jeju International Airport. Transfers to Jeju Hotel. Today is free for own Leisure Today you may explore at your own pace Meals:- Breakfast Overnight at Jeju HOTEL"
      ],
      [
        "DAY 07",
        "[JEJU ISLAND SOUTHERN UNESCO MT. HALLA ONE DAY BUS TOUR] Breakfast at Hotel. Transfers to Jeju South Course Sightseeing Hallasan Mountain Camellia Hill Eungdeungmul Valley Daepo Haean Jusangjeolli Cliff Cheonjiyeon Waterfall O’sulloc Tea Museum Dongmun Traditional Market Jeju Meals:- Breakfast Overnight stay at Jeju Hotel"
      ],
      [
        "DAY 08",
        "[JEJU EASTEN MUST VISIT USESCO SPOTS] Breakfast at Hotel. Transfers to Jeju Eastern Course Sightseeing Hamdeok Beach Gwangchigi Beach Nogsanlo Haenyeo Museum Seongsan Ilchulbong Ilchul Land Seongeup Folk Village Dongmun Traditional Market Meals:- Breakfast Overnight stay at Jeju Hotel"
      ],
      [
        "DAY 09",
        "[JEJU ISLAND – SEOUL] Breakfast at Hotel. Transfers to Jeju International Airport for Flight to Seoul Upon Arrival at Gimpo International Airport, Seoul. Transfers to Seoul Hotel. Today is free for own leisure Today you may explore at your own pace Meals:- Breakfast Overnight stay at Seoul Hotel"
      ],
      [
        "DAY 10",
        "[LEAVE SEOUL] Breakfast at Hotel. After Breakfast transfers to Incheon International Airport for Flight to your onward journeys Meals:- Breakfast"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "south-korea-seoul-busan",
    "title": "South Korea Seoul Busan",
    "location": "South Korea Seoul Busan",
    "duration": "7 Days / 6 Nights",
    "price": "₹97,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 438,
    "image": "/assets/international/seoul-busan.jpeg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "International Tour"
    ],
    "description": "INCHEON ARRIVAL Arrive at Incheon International Airport After disembarking from aircraft clear Immigrations and pick your Luggage. Transfers to hotel Hotel Check-in as per hotel po...",
    "itinerary": [
      [
        "Day 01",
        "INCHEON ARRIVAL Arrive at Incheon International Airport After disembarking from aircraft clear Immigrations and pick your Luggage. Transfers to hotel Hotel Check-in as per hotel policy@ 1500Hrs Day is free for Leisure you may explore your own pace Meals:- No Meals Overnight at Seoul HOTEL"
      ],
      [
        "DAY 02",
        "[GYEONGBOKGUNG PALACE, BUKCHON, GWANGJANG MARKET] Breakfast at Hotel. Transfers for Seoul Sightseeing Gyeongbokgung Palace [Changing of the Royal Gaurd Ceremony] Bukchon Hanok Village Gwangjang Market Naksan Park Eungbongsan Mountain Meals:- Breakfast Overnight at Seoul HOTEL"
      ],
      [
        "DAY 03",
        "[NAMI ISLAND AND PETITE FRANCE – FILMING LOCATION WITH GUIDE & LUNCH] Breakfast at Hotel. Transfers for Nami Island Excursion Nami Island Petite France Meals:- Breakfast Overnight at Seoul HOTEL"
      ],
      [
        "DAY 04",
        "[SEOUL – BUSAN] Breakfast at Hotel. Transfers to Seoul Station for KTX Train to Busan Upon Arrival at Busan Station. Transfers for Busan Hotel Day is free for own Leisure Meals:- Breakfast Overnight at Busan HOTEL"
      ],
      [
        "DAY 05 [BUSAN COSTAL CHARM & CULTURE",
        "GAMCHEON VILLAGE & SKY CAPSULE] Breakfast at Hotel. Transfers to Busan Sightseeing Gamcheon Culture Village Busan Sky Capsule Meals:- Breakfast Overnight at Busan HOTEL"
      ],
      [
        "DAY 06",
        "[BUSAN – SEOUL] Breakfast at Hotel. After Breakfast transfers to Busan Station for KTX train to Seoul. Arrival at Seoul Station & Transfers to Seoul Hotel Day is free for own leisure Meals:- Breakfast Overnight at Seoul Hotel"
      ],
      [
        "DAY 07",
        "[LEAVE SEOUL] Breakfast at Hotel. After Breakfast transfers to Incheon International Airport for Flight to your onward journeys Meals:- Breakfast"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "taiwan-tour",
    "title": "Taiwan Tour",
    "location": "Taiwan",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1129,
    "image": "/assets/international/taiwan-tour.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "B’fast: X                            L: X                                                   D: IndianMeal...",
    "itinerary": [
      [
        "Day 1 India—Taoyuan International Airport—Ximending Hotel Check-In",
        "B’fast: X                            L: X                                                   D: IndianMeal"
      ],
      [
        "Day 2 Taipei—National Palace Museum—Presidential Hall—Chiang Kei Shek Memorial Hall—Dinner—Ximending",
        "B’fast: Hotel                   L: IndianMeal                               D: IndianMeal"
      ],
      [
        "Day 3 Taipei—Lungshan Temple—44 South Military Village—Taipei 101 Xinyi Shopping District(inc. Taipei 101)—RaoHe Night Market",
        "B’fast: Hotel                   L: Din Tai Fung                              D: IndianMeal"
      ],
      [
        "Day 4 Taipei—Pinapple Cake Shop—Yehliu Geopark—Shifen Old Street(inc. Sky Lantern)—Jiufan Village—Keelung Night Market",
        "B’fast: Hotel                   L: Seafood Meal                          D: IndianMeal"
      ],
      [
        "Day 5 Taipei—Yilan Museum(Viewpoint of Turtle Island)—YiLan National Traditional of Arts—Kavalan Whiskey Factory Tour—Hot-Spring Foot Bath—Ximending Hotel",
        "B’fast: Hotel                   L: Seafood Meal                          D: IndianMeal"
      ],
      [
        "Day 6 Taipei—Taoyuan International Airport—India",
        "B’fast: Hotel                   L: X                                                   D: X Hotel: Taipei Papawhale Hotel or Similar"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "all-of-japan-tour",
    "title": "All of Japan Tour",
    "location": "All of Japan",
    "duration": "14 Days / 13 Nights",
    "price": "₹1,57,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 2098,
    "image": "/assets/international/all-of-japan.jpg",
    "tags": [
      "Heritage & Nature",
      "14 Days",
      "International Tour"
    ],
    "description": "ARRIVAL IN NARITA AIRPORT (Breakfast) Arriving at Narita Airport. A driver is waiting for guests holding a signboard of guests. After check-in at the hotel, the rest of the day is ...",
    "itinerary": [
      [
        "Day 1",
        "ARRIVAL IN NARITA AIRPORT (Breakfast) Arriving at Narita Airport. A driver is waiting for guests holding a signboard of guests. After check-in at the hotel, the rest of the day is free to start discovering this exciting city by yourself. TOKYO HOTEL: TOKYO DOME HOTEL OR SIMILAR // MEALS: NON"
      ],
      [
        "Day 2",
        "KAMAKURA SIGHTSEEING TOUR (Breakfast) After Breakfast, Meiji Shrine, Shibuya Crossing Street (Hachiko Statue), Shinjuku Gyoen, Shinjuku Golden Street TOKYO HOTEL: TOKYO DOME HOTEL OR SIMILAR"
      ],
      [
        "Day 3",
        "FREE DAY (Breakfast) After Breakfast, Free day. TOKYO HOTEL: TOKYO DOME HOTEL OR SIMILAR"
      ],
      [
        "Day 4",
        "TOKYO SIGHTSEEING TOUR (Breakfast) After Breakfast, Meiji Shrine, Shibuya Crossing Street (Hachiko Statue), Shinjuku Gyoen, Shinjuku Golden Street TOKYO HOTEL: TOKYO DOME HOTEL OR SIMILAR"
      ],
      [
        "Day 5",
        "TOKYO SIGHTSEEING TOUR (Breakfast) After Breakfast, Tsukiji Market, Tokyo Skytree (450m observatoru deck), Asakusa temple&Nakamise shopping street, Imperial Palace, Ginza TOKYO HOTEL: TOKYO DOME HOTEL OR SIMILAR"
      ],
      [
        "Day 6",
        "MT.FUJI & HAKONE SIGHTSEEING TOUR (Breakfast) After Breakfast, Lake Ashi Cruise, Mt Fuji 5th station if weather permitted, Oshino Hakkai HAMAMATSU HOTEL: OKURA ACT CITY HAMAMATSU OR SIMILAR"
      ],
      [
        "Day 7",
        "KYOTO SIGHTSEEING TOUR (Breakfast) After Breakfast, Kinkakuji, Kiyomizu Temple OPTION①: Tea Ceremony Experience + JPY 7,000 per person OPTION②: Kimono Experience + JPY 3,500 per person OPTION③: Maiko Performance at Gion corner + JPY 7,000 per person KYOTO HOTEL: MIYAKO HOTEL KYOTO HACHIJO OR SIMILAR"
      ],
      [
        "Day 8",
        "KYOTO SIGHTSEEING TOUR (Breakfast) After Breakfast, Arashiyama Bamboo Groove, Tenryuji, Fushimi Inari KYOTO HOTEL: MIYAKO HOTEL KYOTO HACHIJO OR SIMILAR"
      ],
      [
        "Day 9",
        "NARA& OSAKA SIGHTSEEING TOUR (Breakfast) After Breakfast, Todaiji, Nara Deer Park, Kasuga Taisha, Naramachi, Shinsaibashi OSAKA HOTEL: SHERATON MIYAKO OSAKA OR SIMILAR"
      ],
      [
        "Day 10",
        "OSAKA SIGHTSEEING TOUR (Breakfast) After Breakfast, Osaka Castle, Umeda Skybuilding, Kuromon Ichiba, Dotonbori OSAKA HOTEL: SHERATON MIYAKO OSAKA OR SIMILAR"
      ],
      [
        "Day 11",
        "FREE DAY (Breakfast) After Breakfast, Free day. OPTION①: Hiroshima Tour + JPY 55,200 per person Atomic Bomb Dome, Peace Park Museum, Itsukushima Shrine OSAKA HOTEL: SHERATON MIYAKO OSAKA OR SIMILAR"
      ],
      [
        "Day 12",
        "WAKAYAMA SIGHTSEEING TOUR (Breakfast) After Breakfast, Wakayama Castle, Wakaura Tenmangu, Koyasan OSAKA HOTEL: SHERATON MIYAKO OSAKA OR SIMILAR"
      ],
      [
        "Day 13",
        "KOBE SIGHTSEEING TOUR (Breakfast & Kobe Beef Lunch) After Breakfast, Nunobiki Waterfall, Kobe Chinatown, Kobe Beef Lunch, Kobe Harbour OSAKA HOTEL: SHERATON MIYAKO OSAKA OR SIMILAR"
      ],
      [
        "Day 14",
        "DEPARTING FROM KANSAI AIRPORT (Breakfast) Transfer to the Airport on a Private basis"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "blooming-japan-cherry-blossom",
    "title": "Blooming Japan Cherry Blossom",
    "location": "Blooming Japan Cherry Blossom",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 479,
    "image": "/assets/international/blooming-japan-cherry-blossom.jpg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "ARRIVAL AT NARITA Welcome to Japan – a fascinating land where timeless traditions meet cutting-edge innovation. On arrival at Narita International Airport, complete immigration and...",
    "itinerary": [
      [
        "DAY 01",
        "ARRIVAL AT NARITA Welcome to Japan – a fascinating land where timeless traditions meet cutting-edge innovation. On arrival at Narita International Airport, complete immigration and customs formalities before being comfortably transferred to your hotel for check-in. (Standard check-in time: 1500 hrs). The rest of the day is yours to relax and prepare for the exciting journey ahead – a perfect balance of culture, nature, and discovery. Note: For late arrivals, a packed dinner will be arranged. Meal Plan: Dinner Overnight in Narita"
      ],
      [
        "DAY 02",
        "EXPLORING TOKYO Highlights: Tokyo Sky Tree | Ueno Park | TeamLab Planets | Meguro River Cruise Begin your adventure with Tokyo – a city where the future and tradition coexist beautifully. Visit the Tokyo Sky Tree, Japan’s tallest structure, offering sweeping views of the capital. Continue to Ueno Park, a local favorite, especially during cherry blossom season. Walk under a canopy of pink blooms for an unforgettable springtime experience. Later, step into the digital world at TeamLab Planets, an immersive art museum where creativity and technology merge. In the evening, enjoy a tranquil Meguro River Cruise, drifting past rows of sakura trees reflected in the water. Meal Plan: Breakfast | Lunch | Dinner Overnight in Tokyo"
      ],
      [
        "DAY 03",
        "TOKYO – HAKONE – TOKYO Highlights: Mt. Fuji (5th Station – subject to operation) | Owakudani Boiling Valley | Lake Ashi Cruise Leave the bustle of Tokyo behind as you journey to scenic Hakone. Visit Mt. Fuji, Japan’s sacred icon, and ascend to the 5th Station (weather permitting) for stunning views. Explore Owakudani Boiling Valley, famous for its volcanic vents and hot springs. End the day with a leisurely cruise on Lake Ashi, set against a serene mountain backdrop. Meal Plan: Breakfast | Lunch | Dinner Overnight in Tokyo"
      ],
      [
        "DAY 04",
        "TOKYO – HIROSHIMA – KYOTO Highlights: Bullet Train | Peace Memorial Park | Kyoto Arrival Experience Japan’s legendary Shinkansen (bullet train) as you travel at incredible speeds to Hiroshima. Visit the moving Peace Memorial Park, including the A-Bomb Dome, a solemn reminder of resilience and peace. Continue by bullet train to Kyoto, Japan’s cultural capital, home to timeless temples and traditions. Meal Plan: Breakfast | Lunch | Dinner Overnight in Kyoto"
      ],
      [
        "DAY 05",
        "KYOTO Highlights: Sagano Romantic Train | Arashiyama Bamboo Groves | Sake Brewery Discover Kyoto’s enchanting beauty: Ride the Sagano Romantic Train, winding through valleys, mountains, and rivers – especially magical during cherry blossom season. Stroll through the world-famous Arashiyama Bamboo Groves, a surreal pathway of towering bamboo stalks. Visit a Sake Brewery to learn the art of brewing Japan’s signature rice wine, followed by a tasting session. Meal Plan: Breakfast | Lunch | Dinner Overnight in Kyoto"
      ],
      [
        "DAY 06",
        "KYOTO Highlights: Kiyomizu-dera Temple | Kimono Experience | Fushimi Inari Shrine Step deeper into Kyoto’s cultural soul: Visit Kiyomizu-dera Temple, perched on a hillside with breathtaking valley views. Embrace tradition with a Kimono-wearing experience, walking historic streets in elegant attire. Explore the legendary Fushimi Inari Shrine, with its thousands of red torii gates leading up Mount Inari. Meal Plan: Breakfast | Lunch | Dinner Overnight in Kyoto"
      ],
      [
        "DAY 07",
        "OSAKA – NARA – OSAKA/KANSAI Highlights: Nara Deer Park | Todai-ji Temple | Osaka Castle (Photo Stop) | Shinsaibashi & Dotonbori Conclude your journey with the cultural gems of Kansai: Visit Nara Deer Park, where friendly deer roam freely, and the majestic Todai-ji Temple, housing the Great Buddha. Drive to Osaka for a photo stop at Osaka Castle, surrounded by lovely gardens. Spend the evening at Shinsaibashi and Dotonbori, Osaka’s vibrant districts of shopping, neon lights, and irresistible street food. Meal Plan: Breakfast | Lunch | Dinner Overnight in Kansai/Osaka"
      ],
      [
        "DAY 08",
        "DEPARTURE FROM KANSAI As your Japanese adventure comes to a close, we thank you for joining us. Carry home cherished memories of cherry blossoms, serene shrines, and unforgettable experiences. We hope to welcome you again on another remarkable journey soon. Meal Plan: Breakfast"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "japan-alpine-trail",
    "title": "Japan Alpine Trail",
    "location": "Japan Alpine Trail",
    "duration": "10 Days / 9 Nights",
    "price": "₹1,23,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1734,
    "image": "/assets/international/blooming-japan-cherry-blossom.jpg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "International Tour"
    ],
    "description": "ARRIVAL AT NARITA Welcome to Japan—a land where ancient culture blends beautifully with modern innovation. Upon landing at Narita International Airport and completing customs and i...",
    "itinerary": [
      [
        "DAY 01",
        "ARRIVAL AT NARITA Welcome to Japan—a land where ancient culture blends beautifully with modern innovation. Upon landing at Narita International Airport and completing customs and immigration, you’ll be transferred to your hotel for check-in (Standard Check-In Time: 1500 hrs). Use the remainder of the day to relax and prepare for the memorable journey ahead. If your flight arrives late, a packed dinner will be arranged. Dinner Overnight in Narita"
      ],
      [
        "DAY 02",
        "TOKYO DAY HIGHLIGHTS: TOKYO SKY TREE | ASAKUSA SENSOJI TEMPLE & NAKAMISE STREET | TEAMLAB PLANETS | AKIHABARA After a refreshing night, begin your exploration of Tokyo. Start with the Tokyo Sky Tree, Japan’s tallest structure, offering sweeping views of the entire city. Continue to Asakusa’s Sensoji Temple—Tokyo’s oldest—and walk along Nakamise Street, lined with traditional treats and souvenirs. Later, immerse yourself in the digital world of TeamLab Planets before ending the day in buzzing Akihabara, famous for anime, manga, and gaming culture. Breakfast | Lunch | Dinner Overnight in Tokyo"
      ],
      [
        "DAY 03",
        "TOKYO – HAKONE – TOKYO DAY HIGHLIGHTS: MT. FUJI 5TH STATION (SUBJECT TO OPERATION) | LAKE ASHI CRUISE | HAKONE ROPEWAY | OWAKUDANI BOILING VALLEY Today’s journey takes you toward the scenic Hakone region. If weather permits, ascend to Mt. Fuji’s 5th Station for magnificent views of Japan’s most iconic peak. Then relax on a peaceful Lake Ashi cruise, followed by a ride on the Hakone Ropeway offering stunning panoramic vistas. Continue to Owakudani—known for its strong volcanic activity—where you’ll see steaming vents and bubbling springs. Breakfast | Lunch | Dinner Overnight in Tokyo"
      ],
      [
        "DAY 04",
        "TOKYO – MATSUMOTO DAY HIGHLIGHTS: SCENIC DRIVE TO MATSUMOTO | MATSUMOTO CASTLE (PHOTO STOP) Leave behind Tokyo’s lively pace and travel to the charming city of Matsumoto. Take in picturesque rural landscapes en route. Upon arrival, stop for photos at the striking Matsumoto Castle—nicknamed the “Crow Castle” for its black exterior—set against the backdrop of the Japanese Alps. Breakfast | Lunch | Dinner Overnight in Matsumoto"
      ],
      [
        "DAY 05",
        "MATSUMOTO – TOYAMA DAY HIGHLIGHTS: TATEYAMA KUROBE ALPINE ROUTE Experience the spectacular Tateyama Kurobe Alpine Route—a thrilling journey involving cable cars, buses, ropeways, and mountain trolleys. The star attraction is the Snow Corridor, where massive walls of snow rise dramatically on both sides. This surreal passage offers breathtaking views, making it a truly unforgettable experience. Breakfast | Lunch | Dinner Overnight in Toyama"
      ],
      [
        "DAY 06",
        "TOYAMA – KYOTO DAY HIGHLIGHTS: VISIT SHIRAKAWA-GO VILLAGE This morning, visit Shirakawa-go—a beautifully preserved UNESCO World Heritage village known for its unique gassho-zukuri thatched-roof farmhouses. Surrounded by mountain scenery, it feels like stepping into a postcard of rural Japan. Later, continue to Kyoto, Japan’s cultural capital. Breakfast | Lunch | Dinner Overnight in Kyoto"
      ],
      [
        "DAY 07",
        "KYOTO DAY HIGHLIGHTS: ARASHIYAMA BAMBOO GROVES | SAKE BREWERY | KIMONO WEARING | FUSHIMI INARI TAISHA SHRINE Begin your day at the serene Arashiyama Bamboo Groves, where towering stalks create a magical natural walkway. Later, visit a traditional Sake Brewery to learn about the craft of rice-wine making and enjoy tasting authentic sake. Embrace Japanese tradition with a Kimono Wearing Experience before heading to Fushimi Inari Shrine, famous for its countless vermillion torii gates. Breakfast | Lunch | Dinner Overnight in Kyoto"
      ],
      [
        "DAY 8",
        "KYOTO – NARA – OSAKA DAY HIGHLIGHTS: NARA DEER PARK | TODAI-JI TEMPLE | FREE TIME AT SHINSAIBASHI & DOTONBORI Today explore Nara, Japan’s first capital. Meet the friendly deer at Nara Deer Park and visit Todai-ji Temple, home to the Great Buddha—one of the world’s largest bronze statues. Later travel to Osaka and enjoy free time at Shinsaibashi and Dotonbori, the city’s lively shopping and entertainment areas filled with boutiques, street food, and neon-lit streets. Breakfast | Lunch | Dinner Overnight in Osaka"
      ],
      [
        "DAY 09",
        "OSAKA – HIROSHIMA KANSAI DAY HIGHLIGHTS: RETURN SHINKANSEN RIDE TO HIROSHIMA | HIROSHIMA PEACE MEMORIAL PARK Board Japan’s high-speed Shinkansen for a journey to Hiroshima. Visit the Hiroshima Peace Memorial Park—including the Cenotaph, Children’s Peace Monument, and Flame of Peace. Spend time at the A-Bomb Dome, a UNESCO World Heritage Site that stands as a symbol of resilience and a powerful reminder of history. Return by bullet train to Osaka/Kansai. Breakfast | Lunch | Dinner Overnight in Kansai"
      ],
      [
        "DAY 10",
        "KANSAI – DEPARTURE Your journey comes to a close today. We extend our heartfelt thanks for choosing to travel with us and hope the experiences and memories created on this tour stay with you forever. Wishing you a pleasant onward journey and hoping to welcome you again soon."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "magical-japan-tour",
    "title": "Magical Japan Tour",
    "location": "Magical Japan",
    "duration": "9 Days / 8 Nights",
    "price": "₹1,14,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 1185,
    "image": "/assets/international/japan-alpine-tour.jpg",
    "tags": [
      "Heritage & Nature",
      "9 Days",
      "International Tour"
    ],
    "description": "ARRIVAL AT NARITA Welcome to Japan—a land where timeless traditions blend effortlessly with cutting-edge innovation. After completing customs and immigration formalities at Narita ...",
    "itinerary": [
      [
        "DAY 01",
        "ARRIVAL AT NARITA Welcome to Japan—a land where timeless traditions blend effortlessly with cutting-edge innovation. After completing customs and immigration formalities at Narita International Airport, you will be transferred to your hotel for check-in (Standard Check-In Time: 1500 hrs). Spend the rest of the day relaxing and preparing for the exciting journey ahead. Please Note: In case of late flight arrivals, a packed dinner will be arranged. Dinner Overnight in Narita"
      ],
      [
        "DAY 02",
        "TOKYO DAY HIGHLIGHTS: TOKYO SKY TREE | ASAKUSA SENSOJI TEMPLE & NAKAMISE STREET | TEAMLAB PLANETS | AKIHABARA Your Japan adventure begins with a visit to the iconic Tokyo Sky Tree—the tallest structure in Japan—offering stunning panoramic views of the city. Continue to the historic Sensoji Temple in Asakusa and walk along Nakamise Street, filled with traditional snacks and local souvenirs. Then step into a world of digital art at TeamLab Planets, where light, reflections, and technology create an immersive experience. End your day in Akihabara, Japan’s vibrant hub for anime, manga, and gaming culture. Breakfast | Lunch | Dinner Overnight in Tokyo"
      ],
      [
        "DAY 03",
        "TOKYO (DAY AT LEISURE) DAY HIGHLIGHTS: OPTIONAL ACTIVITY – TOKYO DISNEYLAND Today is free for you to explore Tokyo at your own pace or enjoy optional activities. Optional Activity: Tokyo Disneyland Step into the magical universe of Disneyland—where fantasy, parades, enchanting rides, and beloved characters create unforgettable joy for all ages. Breakfast | Dinner Overnight in Tokyo"
      ],
      [
        "DAY 04",
        "TOKYO – HAKONE – TOKYO DAY HIGHLIGHTS: MT. FUJI 5TH STATION (SUBJECT TO OPERATION) | LAKE ASHI CRUISE | HAKONE ROPEWAY | OWAKUDANI BOILING VALLEY Travel to Hakone for a breathtaking encounter with Mt. Fuji. Weather permitting, ascend to the 5th Station for magnificent views of the iconic mountain. Enjoy a calm cruise on Lake Ashi, followed by a scenic ride on the Hakone Ropeway, offering dramatic panoramic landscapes. Explore Owakudani Boiling Valley, a geothermal area known for its steam vents, sulfur springs, and bubbling pools—revealing the raw power of nature. Breakfast | Lunch | Dinner Overnight in Tokyo"
      ],
      [
        "DAY 05",
        "TOKYO – HIROSHIMA – KYOTO DAY HIGHLIGHTS: BULLET TRAIN FROM TOKYO TO HIROSHIMA | PEACE MEMORIAL PARK | BULLET TRAIN FROM HIROSHIMA TO KYOTO Begin your day with a thrilling Shinkansen ride to Hiroshima. Visit the Peace Memorial Park—home to significant landmarks such as the A-Bomb Dome, a powerful reminder of the tragic events of 1945. Continue your journey by bullet train to Kyoto, Japan’s cultural center, where centuries-old traditions come alive through temples, streets, and heritage sites. Breakfast | Lunch | Dinner Overnight in Kyoto"
      ],
      [
        "DAY 06",
        "KYOTO DAY HIGHLIGHTS: ARASHIYAMA BAMBOO GROVES | SAKE BREWERY | KIMONO WEARING Start your morning in the serene Arashiyama Bamboo Grove, where towering stalks create a mesmerizing natural walkway. Visit a traditional Sake Brewery to learn about the craftsmanship behind Japan’s iconic rice wine and enjoy a tasting session. Experience Japanese tradition firsthand through a Kimono Wearing session. Conclude your day at the famed Fushimi Inari Shrine, known for its thousands of vermillion torii gates forming a mystical pathway. Breakfast | Lunch | Dinner Overnight in Kyoto"
      ],
      [
        "DAY 07",
        "KYOTO – NARA – OSAKA DAY HIGHLIGHTS: NARA DEER PARK | TODAI-JI TEMPLE | OSAKA CASTLE (PHOTO STOP) | FREE TIME AT SHINSAIBASHI & DOTONBORI Explore Nara, Japan’s ancient capital, beginning with Nara Deer Park, where friendly free-roaming deer greet visitors. Visit Todai-ji Temple, home to the Great Buddha—one of the world’s largest bronze statues. Continue to Osaka for a photo stop at the famous Osaka Castle. Spend the evening strolling through Shinsaibashi and Dotonbori, bustling districts filled with shopping, vibrant lights, and delicious street food. Breakfast | Lunch | Dinner Overnight in Osaka"
      ],
      [
        "DAY 8",
        "OSAKA – KANSAI (DAY AT LEISURE) Enjoy a relaxed day in Osaka with the freedom to explore or enjoy optional activities. Optional Activity: Universal Studios Japan Dive into the world of movies and fantasy—from the Wizarding World of Harry Potter to thrilling rides, iconic attractions, and family-friendly fun. Breakfast | Dinner Overnight in Kansai"
      ],
      [
        "DAY 09",
        "KANSAI – DEPARTURE As your journey concludes, we extend our heartfelt gratitude for traveling with us. May the memories, landscapes, and cultural experiences stay with you long after the trip ends. Wishing you a pleasant onward journey and hoping to welcome you again soon."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "tokyo-japan-tour",
    "title": "Tokyo – Japan Tour",
    "location": "Tokyo – Japan",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1178,
    "image": "/assets/international/japan-alpine-tour.jpg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "International Tour"
    ],
    "description": "ARRIVAL IN TOKYO AIRPORT (Breakfast) After arrival, a driver will wai for guests holding a signboard with their names After check-in at the hotel, the rest of the day is free to st...",
    "itinerary": [
      [
        "Day 1",
        "ARRIVAL IN TOKYO AIRPORT (Breakfast) After arrival, a driver will wai for guests holding a signboard with their names After check-in at the hotel, the rest of the day is free to start discovering this exciting city by yourself. TOKYO HOTEL: TOKYO DOME HOTEL OR SIMILAR // MEALS: NONE"
      ],
      [
        "Day 2",
        "TOKYO OPTIONS TOUR (Breakfast) •Meet up at Hotel (~9:00) Imperial Palace Nijubashi, Asakusa Senso-ji and Nakamise Street, Tokyo Skytree (450m) TOKYO HOTEL: TOKYO DOME HOTEL OR SIMILAR"
      ],
      [
        "Day 3",
        "TOKYO OPTIONS TOUR (Breakfast) •Meet up at Hotel (~9:00) Meiji Shrine, Harajuku & Shibuya Scramble Cross, Odaiba, TeamLab Planet TOKYO HOTEL: TOKYO DOME HOTEL OR SIMILAR"
      ],
      [
        "Day 4",
        "MT.FUJI & HAKONE SIGHTSEEING TOUR (Breakfast) •Meet up at Shimashi (~9:00)Mt. Fuji 5th Station, Japanese Style Local Restaurant*, Gotemba, Hakone Sky Gondola, Owakudani Valley, Pirate Boat Cruise on Lake Ashi •Return to Tokyo (~17:00) HAMAMATSU HOTEL: OKURA ACT CITY HAMAMATSU OR SIMILAR"
      ],
      [
        "Day 5",
        "DEPARTING FROM TOKYO AIRPORT(Breakfast) Transfer to the Airport on a Private basis"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "best-of-nepal",
    "title": "best of nepal",
    "location": "best of nepal",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1618,
    "image": "/assets/international/best-of-nepal.jpg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "Arrive in Kathmandu Upon arrival in Kathmandu Airport, you will be greeted and assistance by our Representative. After completing your custom formalities, transfer to Hotel for che...",
    "itinerary": [
      [
        "Day 1",
        "Arrive in Kathmandu Upon arrival in Kathmandu Airport, you will be greeted and assistance by our Representative. After completing your custom formalities, transfer to Hotel for check-in. Late afternoon, visit Boudhanath Stupa, Evening, attend Aarati at Pashupatinath Temple. Drive back to Hotel. Overnight in Kathmandu Hotel."
      ],
      [
        "Day 2 ",
        "Kathmandu – Drive to Pokhara After breakfast, drive to Pokhara (about 210 km, 6/7 hrs). En-route visit Manakamana Temple by Cable Car. After puja / darshan, continue drive to Pokhara. Arrive in Pokhara. Transfer to Hotel. Overnight in Pokhara Hotel."
      ],
      [
        "Day 3 Pokhara",
        "Early morning, sunrise and Himalayan view from Sarangkot hill (subject to weather condition). Next, visit Bindabasini Temple. Drive to Hotel for breakfast. Later, visit Devis fall, Gupteshwor Cave, Seti River and boat ride on Phewa Lake and visit Taal Barahi Temple. Rest of the day is free. Overnight in Pokhara Hotel."
      ],
      [
        "Day 4  Pokhara- Kathmandu",
        "After having leisurely breakfast, drive towards Kathmandu. Upon arrive in Kathmandu, transfer to hotel for check in. Rest of the day is free. Overnight in Kathmandu Hotel.."
      ],
      [
        "Day 5   Kathmandu- Sightseeing",
        "Breakfast is at Hotel. After breakfast, visit Kailashanth Mahadev Temple (World’s Tallest Shiva Statue). Next visit Bhaktapur Durbar Square and museum (shooting spot). Later, visit Jalanarayan Temple (Sleeping Vishnu). Drive back to Hotel. Overnight is at Hotel in Kathmandu."
      ],
      [
        "Day 6 Kathmandu – Departure",
        "Breakfast is at Hotel. Free till departure. Later, on time, transfer to International Airport for onward destination."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "experience-nepal",
    "title": "Experience Nepal",
    "location": "Experience Nepal",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1935,
    "image": "/assets/international/best-of-nepal.jpg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "Arrive in Kathmandu Upon arrival in Kathmandu Airport, you will be greeted and assistance by our Representative. After completing your custom formalities, transfer to Hotel for che...",
    "itinerary": [
      [
        "Day 1",
        "Arrive in Kathmandu Upon arrival in Kathmandu Airport, you will be greeted and assistance by our Representative. After completing your custom formalities, transfer to Hotel for check-in. Late afternoon, visit Boudhanath Stupa, Evening, attend Aarati at Pashupatinath Temple. Drive back to Hotel. Overnight in Kathmandu Hotel."
      ],
      [
        "Day 2 ",
        "Kathmandu – Drive to Pokhara After breakfast, drive to Pokhara (about 210 km, 6/7 hrs). En-route visit Manakamana Temple by Cable Car. After puja / darshan, continue drive to Pokhara. Arrive in Pokhara. Transfer to Hotel. Overnight in Pokhara Hotel"
      ],
      [
        "Day 3 Pokhara",
        "Early morning, sunrise and Himalayan view from Sarangkot hill (subject to weather condition). Next, visit Bindabasini Temple. Drive to Hotel for breakfast. Later, visit Devis fall, Gupteshwor Cave, Seti River and boat ride on Phewa Lake and visit Taal Barahi Temple. Rest of the day is free. Overnight in Pokhara Hotel."
      ],
      [
        "Day 4  ",
        "Pokhara – Chitwan Drive to Chitwan (about 160 km, 5 hrs drive). Arrive in Chitwan. Transfer to Hotel for check –in. Upon arrival, lunch will be served. After that, visit Tharu Village. Evening, sunset and Tharu Stick Dance. Overnight in Chitwan Hotel."
      ],
      [
        "Day 5  Chitwan",
        "Today, you will enjoy Jungle activities like, Elephant back safari, Elephant Breeding Center, Canoe ride on the Rapti River, Jungle Walk and Elephant bath (during summer season only). Overnight in Chitwan Hotel."
      ],
      [
        "Day 6 Chitwan- Kathmandu",
        "After breakfast, drive back to Kathmandu. Upon arrival in Kathmandu, visit Swoyambhunath Stupa (Monkey Temple) if time permits. Later, transfer to Hotel for check-in. Overnight in Kathmandu Hotel."
      ],
      [
        "Day 7 Kathmandu – Sightseeing>",
        "Breakfast is at Hotel. After breakfast, visit Kailashanth Mahadev Temple (World’s Tallest Shiva Statue). Next visit Bhaktapur Durbar Square and museum (shooting spot). Later, visit Jalanarayan Temple ( Sleeping Vishnu). Drive back to Hotel. Overnight is at Hotel in Kathmandu."
      ],
      [
        "Day 8",
        "Kathmandu – Departure Breakfast is at Hotel. Free till departure. Later, on time, transfer to International Airport for onward destination."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kailash-mansarovar-yatra-package-by-helicopter",
    "title": "Kailash – Mansarovar Yatra Package by Helicopter",
    "location": "Kailash – Mansarovar Yatra  by Helicopter",
    "duration": "11 Days / 10 Nights",
    "price": "₹1,31,500 / person",
    "type": "International Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 4.7,
    "reviews": 2019,
    "image": "/assets/international/kailash-mansarovar-yatra-package.jpg",
    "tags": [
      "Pilgrimage & Spiritual",
      "11 Days",
      "International Tour"
    ],
    "description": "Arrival in Kathmandu Upon arriving at the Kathmandu airport, you will be greeted by a representative who will assist you with your customs formalities and transfer you to your hote...",
    "itinerary": [
      [
        "Day 01",
        "Arrival in Kathmandu Upon arriving at the Kathmandu airport, you will be greeted by a representative who will assist you with your customs formalities and transfer you to your hotel for check-in. In the evening, you will visit the Pashupatinath Temple to witness the Arati darshan, and then retire for the night at your hotel."
      ],
      [
        "Day 02",
        "Pashupatinath sightseeing – Fly to Nepalgunj The following day, after breakfast, you will spend the entire day sightseeing at the Pashupatinath Temple. Later in the afternoon, you will fly to Nepalgunj, where you will spend the night at a hotel."
      ],
      [
        "Day 03",
        "Nepalgunj – Fly to Simikot Elevation: 2800M Post breakfast transferred to the domestic airport for a 50-minute flight to Simikot. Upon arriving in Simikot, you will be picked up and transferred to your hotel to rest for the day and acclimatize to the high altitude. You will spend the night in Simikot"
      ],
      [
        "Day 04",
        "Simikot – Fly to Hilsa by Helicopter – Drive to Purang Elevation: 3900M The next day, after breakfast, you will take a helicopter ride to Hilsa, which has a weight limit of 15 kg per person. Upon arriving in Hilsa, you will wait for other members of your group to arrive since it is a group visa, and everyone must enter the Tibet side in one group. Once everyone has arrived, you will complete immigration and customs formalities in Nepal and China and continue driving to Purang, which takes around an hour. On the way, you will have to pass through two checkpoints, where the checking might take up to an hour each. You will then check in to your hotel in Purang and spend the night there."
      ],
      [
        "Day 05",
        "Purang – Drive to Lake Manasarovar Elevation: 4590M Post Breakfast you will drive to Rakshas Tal, which is around 70 km away and takes 1.5 hours. On the way, you will pass through one checkpoint. Upon arriving at Rakshas Tal, you will see Gurla Mandhata Parvat and get your first view of Mt. Kailash’s south face and Manasarovar Lake. After a 25 km drive, you will reach Lake Manasarovar, where the rest of the day is free for spiritual activities such as pooja, havan worship, meditation, and holy bathing. You will spend the night in a lodge on the shores of Lake Manasarovar."
      ],
      [
        "Day 06",
        "Manasarovar – Drive to Darchen Elevation: 4560M Post breakfast, you will drive for an hour to Darchen, which is the base camp of Holy Mt. Kailash. The rest of the day is free for acclimatization and preparation for the circuit (Parikrama). You will spend the night at a hotel in Darchen."
      ],
      [
        "Day 07",
        "Yama Dwar – Trek to Dirapuk Elevation: 4790M Post breakfast, you will drive 10 km to Tarboche (Yama Dwar), which is the starting point of Parikrama/Kora. From there, you will trek to Diraphuk, which is a 12 km (6/7 hours) trek across Mt. Kailash’s west face. You will spend the night at a guesthouse in Dirapuk."
      ],
      [
        "Day 08",
        "Dirapuk – Trek to Zuthulphuk Elevation: 4790M Post breakfast you will walk for approximately 8 to 10 hours (Parikrama). Trekking up to Dolma La Pass (5600 m) is the most challenging journey throughout the trip. You will offer very short prayers at Dolma La and move towards Gaurikund. Then, you will trek to Zuthulphuk, which is 22 km away, and spend the night at a guesthouse there."
      ],
      [
        "Day 9",
        "Zuthulphuk – Drive to Purang Post breakfast, you will trek for around 8 km to reach the endpoint where jeeps will be waiting to drive you to Darchen, marking the end of Parikrama. After lunch, you will proceed to drive to Purang via the Manasarovar Parikrama circuit and stay overnight at a guest house."
      ],
      [
        "Day 10",
        "Return to Kathmandu Post breakfast, you will start your early morning drive to the Nepal border. From there, you will take a helicopter flight to Simikot, followed by a connecting flight to Nepalgunj, and finally to Kathmandu, where you will stay overnight at a hotel."
      ],
      [
        "Day 11",
        "Departure Post breakfast, you will be transferred to the Tribhuvan International Airport for your departure flight to your onward destination."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "kailash-mansarovar-yatra-package-by-land",
    "title": "Kailash – Mansarovar Yatra Package by Land",
    "location": "Kailash – Mansarovar Yatra  by Land",
    "duration": "14 Days / 13 Nights",
    "price": "₹1,57,000 / person",
    "type": "International Tour",
    "category": "Pilgrimage & Spiritual",
    "rating": 5,
    "reviews": 666,
    "image": "/assets/international/kailash-mansarovar-yatra-package.jpg",
    "tags": [
      "Pilgrimage & Spiritual",
      "14 Days",
      "International Tour"
    ],
    "description": "Arrival in Kathmandu Upon arrival in Kathmandu airport, our representative will meet and assist you. After completing your custom formalities, transfer to the hotel for check-in. O...",
    "itinerary": [
      [
        "Day 01",
        "Arrival in Kathmandu Upon arrival in Kathmandu airport, our representative will meet and assist you. After completing your custom formalities, transfer to the hotel for check-in. Overnight stay at a hotel in Kathmandu."
      ],
      [
        "Day 02",
        "Sight-seeing of Pashupatinath and other temples After breakfast, full day sightseeing of Pashupatinath Temple and Jal Narayan Temple (sleeping Vishnu). Later, drive back to the hotel for packing and preparation for the Kailash Yatra. Overnight stay at a hotel in Kathmandu."
      ],
      [
        "Day 03",
        "Transfer to Syabrubesi (2400 m) After breakfast, drive around 152 km from Kathmandu to Syabrubesi (7 hours). Transfer to the hotel for check-in and overnight at the lodge."
      ],
      [
        "Day 04",
        "Drive to Kerung (26 km) After breakfast, drive to Rasuwa Gadi (1 hour drive, 15 km). Following immigration and customs formalities on both sides (Nepal & China), we drive to the small town – Kerung. Overnight stay at the lodge in Kerung."
      ],
      [
        "Day 05",
        "Day at leisure for acclimatization Rest day for altitude acclimatization at Kerung."
      ],
      [
        "Day 06",
        "Drive to Saga (4500m) After breakfast, drive to Saga crossing Bramhaputra river (100 km, 4 hours). Arrive in Saga and transfer to the hotel for check-in. Overnight stay in Saga."
      ],
      [
        "Day 07",
        "Drive to Lake Mansarovar – 4590m (450 km) After breakfast, drive towards Mansarovar. It is a very auspicious day for all people who will have a first glimpse of Holy Mansarovar and view of Mt. Kailash from Horchow Pass. Overnight stay at a lodge in Chu Gompa at the shore of lake Mansarovar."
      ],
      [
        "Day 08",
        "Drive from Mansarovar to Darchen After breakfast, do parikrama of Mansarovar Lake by vehicle (102 km, 3 hours) and perform spiritual activities such as Puja, Havana worship, Meditation, Holy bath etc. Afternoon drive to Darchen – 4560m (30 km). Overnight stay at a simple lodge."
      ],
      [
        "Day 09",
        "Drive to Yama Dwar – Trek to Diraphuk After breakfast, take a short drive to Yama Dwar. This is Kora’s starting point. We will trek to Diraphuk, which is a 12 km (6/7 hours) trek, crossing the west face of Mt. Kailash. You will visit the north face of Mt. Kailash and touch the feet of Mt. Kailash (Charan Sparsh – optional). Arrive in Diraphuk, then transfer to the guest house."
      ],
      [
        "Day 10",
        "Trek to Zuthulphuk (4790 m) – approx. 22km Walk approximately 08 / 10 hours – Parikrama. Trek up to Dolma La pass (5600 m), it is the day every pilgrim talks about, the most difficult journey throughout the trip. We will offer very short prayers at Dolma La and move towards Gaurikund. Then trek to Zuthulphuk. Overnight stay at the guest house."
      ],
      [
        "Day 11",
        "Zuthulphuk to Saga via Mansarovar Horchu After Breakfast, we will trek around 8 km. We will be reaching the point, where our jeeps will be waiting to drive us to Darchen, and Parikarma (circuit) ends. After lunch, we will drive to Saga via Mansarovar Horchu. Overnight stay at the guest house."
      ],
      [
        "Day 12",
        "Drive to Kerung After breakfast drive to Kerung. Check-in and overnight stay at a simple lodge in Kerung."
      ],
      [
        "Day 13",
        "Return back to Kathmandu After breakfast, drive to Rasuwa Gadi. Complete both Nepal and China’s immigration and customs formalities. Drive to Kathmandu via Syabrubesi. Arrive in Kathmandu and transfer to the hotel for check-in. Overnight in Kathmandu."
      ],
      [
        "Day 14",
        "Final departure After breakfast, departure transfer to Tribhuvan International airport to connect your onward journey."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "nepal-heritage",
    "title": "nepal heritage",
    "location": "nepal heritage",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Culture",
    "rating": 4.7,
    "reviews": 556,
    "image": "/assets/international/best-of-nepal.jpg",
    "tags": [
      "Heritage & Culture",
      "3 Days",
      "International Tour"
    ],
    "description": "Nepal with rich ancient cultures set against the most dramatic scenery in the world is a land of discovery and unique experience. For broad minded individuals who value an experien...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Nepal with rich ancient cultures set against the most dramatic scenery in the world is a land of discovery and unique experience. For broad minded individuals who value an experience that is authentic and mesmerizing, Nepal is the ideal destination. Come and revel in the untouched and the undiscover"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "nepal-with-muktinath-tour",
    "title": "Nepal with Muktinath Tour",
    "location": "Nepal with Muktinath",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1616,
    "image": "/assets/international/china-with-beijing-and-shanghai.jpg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "ARRIVAL IN KATHMANDU Arrive in Kathmandu – upon arrival our airport representative will meet, assist and transfer to Hotel. Welcome drink at hotel and proceed for briefing regardin...",
    "itinerary": [
      [
        "DAY 01",
        "ARRIVAL IN KATHMANDU Arrive in Kathmandu – upon arrival our airport representative will meet, assist and transfer to Hotel. Welcome drink at hotel and proceed for briefing regarding the program. At evening visit Bouddha Stupa and Pashupatinath Temple. Overnight stay at Kathmandu. Bouddhanath Stupa: As one of the largest stupas in the world, Boudhnath is a hub of Tibetan Buddhism in Nepal. The towering white dome is adorned with colorful prayer flags, and the area is surrounded by monasteries and shops selling religious artifacts. Pilgrims and tourists alike circumambulate the stupa, spinning prayer wheels and offering their devotion. Pashupatinath Temple: This revered Hindu temple complex is located along the banks of the sacred Bagmati River. It is dedicated to Lord Shiva in his manifestation as Pashupati, the Lord of Animals. The temple’s intricate architecture and the rituals performed here provide a deep insight into Hindu spirituality and funeral practices."
      ],
      [
        "DAY 02",
        "KATHMANDU TO POKHARA DRIVE After breakfast and early morning activities take a scenic drive to Pokhara [Approx 200 km]. In-route visit Manakamana Temple. Check-in at hotel in Pokhara and Overnight stay. Manakamana Temple: Manakamana Temple is a sacred Hindu shrine located in Gorkha, Nepal. Situated atop a hill, it is dedicated to the goddess Bhagwati, believed to fulfill the wishes of devotees. Accessible by a cable car ride, it offers stunning views of the surrounding hills and the Trishuli River. The temple holds great religious significance and is a popular pilgrimage site for Hindus."
      ],
      [
        "DAY 03",
        "POKHARA TO MUKTINATH BY JEEP After breakfast and early morning activities drive to Jomsom [Approx 160 km]. Overnight stay at hotel in Jomsom."
      ],
      [
        "DAY 04",
        "MUKTINATH TO POKHARA BY DRIVE Early in the morning drive to Muktinath Temple. After Muktinath Temple Darshan drive back Pokhara. In-route visit Bindabasani Temple. Overnight stay at hotel in Pokhara. Muktinath Temple: Muktinath Temple, perched at 3,710 meters in Nepal’s Mustang region, is a revered site for both Hindus and Buddhists. Dedicated to Lord Vishnu, it boasts 108 water spouts symbolizing purity. Pilgrims seek spiritual cleansing in its holy waters. The temple holds deep significance for both faiths and offers stunning Himalayan vistas, making it a magnet for visitors seeking spiritual and natural solace."
      ],
      [
        "DAY 05",
        "POKHARA TO KATHMANDU DRIVE Early in the morning after breakfast, visit Devi’s Falls, Gupteshwor Cave. After breakfast drive back to Kathmandu. Bindabasani Temple: Situated in the heart of Pokhara, the Bindabasani Temple is a revered Hindu shrine dedicated to the goddess Bindabasani. It holds significant religious importance for the local population and is known for its intricate architecture and vibrant religious ceremonies. Devis Falls: Devis Falls, also known as “Patale Chhango,” is a mesmerizing waterfall located southwest of Pokhara. It is formed by the Pardi Khola stream, which disappears underground into a mysterious cave. The falls offer a captivating sight, especially during the monsoon season when the waters are at their most forceful. Gupteshwor Cave: Adjacent to Devis Falls, Gupteshwor Cave is a mystical underground cave system. It houses a sacred Shiva lingam and is illuminated by dim lights, creating an enchanting atmosphere. The cave’s narrow passages lead to a hidden vantage point offering a unique view of the roaring waterfall."
      ],
      [
        "DAY 06",
        "DEPARTURE Early in the after breakfast, transfer to the international airport for your onward departure flight. Note: – No stop for Lunch or any other activities during arrival / departure transfer"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "china-with-beijing-and-shanghai",
    "title": "China with Beijing and Shanghai",
    "location": "China with Beijing and Shanghai",
    "duration": "7 Days / 6 Nights",
    "price": "₹97,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 832,
    "image": "/assets/international/china-with-beijing-and-shanghai.jpg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "International Tour"
    ],
    "description": "Arrive Shanghai On arrival, you will meet Local tour representative near the Exit area at Airport. Take transfer to the hotel. Check-in into the hotel & relax for a while. In the a...",
    "itinerary": [
      [
        "Day 1",
        "Arrive Shanghai On arrival, you will meet Local tour representative near the Exit area at Airport. Take transfer to the hotel. Check-in into the hotel & relax for a while. In the afternoon visit the Town God’s Temple and Shanghai Museum. Town’s God Temple or Temple of the Town Gods of Shanghai is a main Taoism Temple in the city that enjoys a high reputation both at home and abroad by its long history and magnificent architecture. Further visit Shanghai Museum, which is a large museum of ancient Chinese artifacts. It has more than 1,20,000 precious historical relics, including bronze ware, china ware, calligraphy works, paintings, jade articles, ancient coins, ancient furniture, and sculptures. Proceed to Restaurant and have dinner before returning to the hotel. Overnight stay at hotel in Shanghai. (Dinner)"
      ],
      [
        "Day 2",
        "Shanghai City tour After breakfast in the morning at hotel, you will visit Buddhism shrine– Jade Buddha Temple, located in the down-town area of Shanghai City. It is named for its two bejeweled white Jade Buddha. Your next stop is Yu Gardenwhich has many scenic courtyards decorated with baroque rockery, pools, and flora that are all connected by corridors and passageways. Then you can do some shopping at silk factory where you can touch and feel the marvelous heritage from ancient Chinese people. In the afternoon, the shopping trip will begin at Nanjing Road and the People’s Square. Some of the traditional food and handicrafts of old Shanghai can be found here. Heading towards east, you will reach the Bund. As a landmark of Shanghai city as well as a fantastic photo stop, it is the perfect place for you to take photos together with your families and friends to memorize this wonderful moment. Later enjoy dinner at Restaurant & return to your hotel. Overnight stay at hotel in Shanghai. (Breakfast + Dinner)"
      ],
      [
        "Day 3",
        "Shanghai (Day Free for Leisure) Optional- Disneyland tour (at Extra Cost) Today after breakfast you can spend the day exploring the city on your own OR opt for Disneyland tour (at Extra cost). It will be a fun experience filled with creativity, adventure and thrills for Guests of all ages! Shanghai Disney Resort is a themed resort in Pudong, Shanghai, China. It is the first Disney park resort in mainland China and the second in China, after the Hong Kong Disneyland Resort. The resort opened on June 16, 2016. Here set your sights on Enchanted Storybook Castle- the largest Disney castle on the planet and then get ready to explore as you discover 6 unique and unforgettable lands: Mickey Avenue, Gardens of Imagination, Fantasy land, Adventure Isle, Treasure Cove & Tomorrow land. After spending the entire day have dinner & later return to your hotel. Overnight stay at hotel in Shanghai. (Breakfast + Dinner)"
      ],
      [
        "Day 4",
        "Shanghai – Beijing (by Bullet train) After breakfast, pack your bags & check out from the hotel. You will be transferred to the station to catch High speed bullet train for Beijing. Enjoy the 5 hours amazing journey and reach Beijing. On arrival, take transfer to the hotel. Check-in into the hotel and take rest for some time. Remaining time in evening, you may spend to explore nearby places on your own. Being capital of the People’s Republic of China, Beijing is the nation’s political, economic, and cultural center. A city combining both modern and traditional architecture, Beijing is an ever-changing mega city rich in history and also truly modern. Later have dinner at Restaurant and return to your hotel. Overnight stay at hotel in Beijing. (Breakfast + Dinner)"
      ],
      [
        "Day 5",
        "Beijing City tour After breakfast at hotel, get ready for the City tour. You will visit the famous Tian’anmen Square(the Gate of Heavenly Peace) which is known as the biggest square in the world. Then you will pass through the gate and walk into the Forbidden City where the emperors of Ming and Qing dynasties ruled China for more than 500 years. In the afternoon, continue the trip to the Summer Palace. Having the largest royal park and being well preserved, it was designated, in 1960 by the State Council, as a Key Cultural Relics Protection Site of China. Containing examples of the ancient arts, it also has graceful landscapes and magnificent constructions. After the sightseeing, you will visit Pearl shop where you can find jewels made of the finest pearls. Later in the evening, return to your hotel after having dinner. Overnight stay at hotel in Beijing. (Breakfast + Dinner)"
      ],
      [
        "Day 6",
        "Visit Great Wall of China After breakfast at the hotel, begin today’s tour by visiting Jade gallery where you will find marvelous jewels made of the traditional Chinese Gems- Jade. Later continue your trip to the legendary Great Wall (Juyong Pass section). It used to be a massive defensive structure built to keep off intrusion and later acknowledged as a UNESCO World Heritage Site. It is also the symbol of China and of the wisdom of its people as well. At the site, you will find it astonishing that the ancient Chinese people were capable of building such an immense structure with merely the simplest tools of that time. In the afternoon, you will go to the Beijing Olympic Park, where you will see the exterior of the National Stadium- Bird’s Nest and Water Cube. Afterwards, you can have rest inside a tea house while drinking some refreshing tea. Remaining time in the evening to explore nearby places on your own. After having dinner at Restaurant, return to the hotel. Overnight stay at hotel in Beijing. (Breakfast + Dinner)"
      ],
      [
        "Day 7",
        "Beijing (Departure) After breakfast, pack your bags and check out from the hotel. Later you will be transferred to the airport to board the return flight for Delhi. (Breakfast) Tentative Itinerary Note: Above Itinerary is just indicative. Do not consider it as a Final Schedule. Date & Time of Tours can be changed by Local Agent / Tour Operator."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "fascinating-far-east-summer",
    "title": "Fascinating Far East – Summer",
    "location": "Fascinating Far East – Summer",
    "duration": "11 Days / 10 Nights",
    "price": "₹1,31,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 505,
    "image": "/assets/international/highlights-cambodia-tour.jpg",
    "tags": [
      "Heritage & Nature",
      "11 Days",
      "International Tour"
    ],
    "description": "Welcome to your “Fascinating Far East” tour. Our representative greets you at the designated meeting point and transfers to Pattaya (Approx 2 1/2 Hrs). Check in after 1400 hrs. Vis...",
    "itinerary": [
      [
        "DAY 01 | Arrive Bangkok – Onto Pattaya",
        "Welcome to your “Fascinating Far East” tour. Our representative greets you at the designated meeting point and transfers to Pattaya (Approx 2 1/2 Hrs). Check in after 1400 hrs. Visit Art In Paradise, 3D interactive Museum, where you interact with scenes and click photos, like “ride a flying carpet”. In the evening be dazzled at the Colosseum Show. Enjoy vividly colorful, kaleidoscopic extravanganza of traditional and contemporary performances, glittering costumes and vibrant music. Later, proceed to have dinner and then return to your hotel. Overnight in Pattaya. Dinner at an Indian restaurant."
      ],
      [
        "DAY 02 | In Pattaya",
        "Skip along the aqua blue ocean to the Coral Island or Koh Larn in a speedboat. View the beautiful marine life and colorful coral formations. Indulge in any exciting adventure sport (at an additional cost) like water skiing, parasailing, snorkeling. Later, visit beautiful Nong Nooch Village, renowned for its intricately sculpted knot tropical gardens, watch Thai cultural show and popular Elephant show. Next, proceed to Tuxedo Illusion Hall. The team of professional illusionists is trained by Mr. Tuxedo. Here at the Tuxedo Magic Show, tricks performed by the world renowned magician and his group will leave you spellbound! Later, proceed for dinner. Return to your hotel. Overnight in Pattaya. Breakfast at the hotel restaurant, Lunch and Dinner at an Indian restaurant."
      ],
      [
        "DAY 03 | Pattaya – Onto Bangkok",
        "Proceed to Bangkok. Enroute visit Gems Gallery. Proceed on a guided city and temples tour. Visit the Golden Buddha Temple and Marble BuddhaTemple. Visit Erawan Shrine, dedicated to four – faced Lord Brahma, where legends say your wishes come true. Visit a shopping mall. Later, check into the hotel (check in after 1400 hrs). The rest of the evening is at leisure. Overnight in Bangkok. Breakfast at the hotel restaurant, Lunch and Dinner at an Indian restaurant."
      ],
      [
        "DAY 04 | In Bangkok",
        "Today morning visit Safari World and Marine Park for an ultimate Safari experience. Watch Orang Utan Boxing show, Sea Lion show, Spy War Action Stunt Show, Feeding Show, take a jungle walk or watch rare animals from comforts of a coach. After dinner, return to your hotel. Overnight in Bangkok. Breakfast at the hotel restaurant, Lunch at Safari world and Dinner at an Indian restaurant."
      ],
      [
        "DAY 05 | Bangkok – Onto Kuala Lumpur",
        "Transfer to airport for your flight to Kuala Lumpur. Our local representative will meet you outside the customs area. On arrival, proceed for panoramic city tour of Putrajaya, the federal administrative capital of Malaysia. View Putra Lake, Putra Bridge, Putra Mosque, Seri Perdana Complex (PM’s residence). Later proceed for a panoramic city tour of Kuala Lumpur. See the King’s Palace, National Monument, National Mosque, Jamed Mosque, Merdeka Square, National Museum, Petronas Twin Towers and enjoy a photo stop. Later, transfer to the hotel (Check in after 1400 Hrs). You have an option to visit KL tower. Overnight in Kuala Lumpur. Breakfast at the hotel restaurant and Dinner at an Indian restaurant."
      ],
      [
        "DAY 06 | Kuala Lumpur – Genting Highlands – Kuala Lumpur",
        "Proceed to Genting Highlands with cable car ride. Enroute visit Batu Caves, old Hindu shrine in Malaysia. Later, proceed to Berjaya Hills Colmar Tropicale, a French themed resort. It is modelled after 16th Century Colmar town, Alsace, France. Set amidst 80 acres of lush greenery of Malaysian rainforest in the hills, enjoy the cool refreshing highland climate and spectacular scenery, as the medieval French village takes you back in an era steeped in culture. European dancers, clowns, fire-eater street performances enthrall you. Located 3500 feet above sea level, the Japanese village is the first of its kind outside Japan. At Japanese Tea House, you can witness Tea ceremony (cost extra). At Botanical Garden, view wide variety of flora and fauna and rare plants like Tiger Orchid and the ever popular Tongkat Ali are all there. Return to Kuala Lumpur. After dinner, transfer to your hotel. Overnight in Kuala Lumpur. Breakfast at the hotel restaurant, Lunch at Genting Highland and Dinner at an Indian restaurant."
      ],
      [
        "DAY 07 | Kuala Lumpur -Malacca",
        "In morning, proceed to Malacca (3.30 hrs). Arrive and explore the Malacca city, (or Melaka), a UNESCO World Heritage site, with both European and Asian cultures influences. In Chinatown area, visit Cheng Hoon Teng Temple, oldest Chinese temple of worship in Malaysia. Built in 1646, it is also known as “Merciful Cloud Temple”. Dedicated to Kuan Yin, Goddess of Mercy, admire the temple’s beautiful laquer and wood craftsmanship, built by artisans of China. Visit Dutch Square, around the old Portugese Christ Church and Stadhyus, the centuries old Dutch colonial building. Then visit ruins of Parto De Santiago (A’Famosa) & St Paul Hill. Built in 1511, A’Famosa is one of the oldest surviving European architectural remains in Asia. See Maritime Museum, a replica of the “Flora De La Mar’, a Portugese ship that sank off the coast of Melaka, on its way to Portugal (outside view). Board a River cruise on Melaka River (with audio commentary) and view the beautiful landmarks like churches, mosques, bridges etc. Melaka River, once called ‘Venice Of The East” is the point where the history of Melaka began centuries ago, and Malacca flourished in its heyday of bustling traders. The 1998 movie Entrapment was partially filmed here. Visit F.O.S. Factory Outlet Store at Dataran Pahlawan Melaka Megamall, where you can pick up branded clothing like Tommy Hilfiger, Ralph Lauren, etc at discounted prices. Check-in at the hotel (Check in after 1400 Hrs). Overnight in Malacca. Breakfast at the hotel restaurant, Lunch and Dinner at an Indian restaurant."
      ],
      [
        "DAY 08 | Malacca -Singapore",
        "Drive to Singapore. Arrive and check in to the hotel (Check in after 1400 Hrs). Visit Alive Museum. It is Singapore’s brand new fun and entertainment destination. Sprawling over 10000 square feet, more than 80 artwork exhibits, including 9 locally themed paintings are brought alive with 3D painting that create visual illusions. Being interactive, hop into the frame and take memorable photos. Visit Gardens By The Bay with Cloud Forest. Visit one of the Top 10 Award winning Gardens of the world – Gardens by the Bay! Explore diverse plant life from around the world displayed in it’s spectacular Cooled Conservatories. Explore the diverse plant life. Step into the world of the Cloud Forest and explore the highlands amidst orchids, pitcher plants and ferns from the cool-moist Tropical Montane region, complete with the tallest Indoor Waterfall in the World at 35-metre. Overnight in Singapore. Breakfast at the hotel restaurant, Lunch and Dinner at an Indian restaurant"
      ],
      [
        "DAY 09 | In Singapore",
        "Proceed on a guided panoramic city tour driving past the City Hall, Parliament House, the Tower-like Westin Stamford Hotel, Orchard Road, China Town area and Swissotel Hotel. Take a photo stop at Singapore’s famous symbol – the Merlion and the Esplanade. After lunch, proceed to Sentosa Island. At Sentosa- “Fun happens all the time.” Visit the Underwater World, Asia’s most popular oceanarium. Delight yourself at the Dolphin Lagoon and get close views of pink dolphins and fur seals. Watch the Dolphins and Fur-Seals Live performance with tea/coffee at an exclusive lounge (first-come-first-served basis). We wrap up the evening with the mesmerizing night show by the sea – ‘Wings of Time“. Discover an awe-inspiring display of water, colorful laser lights, music and fire effects, with a tale of friendship. You can choose options of Skyline Luge Sentosa (one ride), and return by Skyride Chairlift, or opt for 4D Adventureland, either Extreme Log Ride or4D Movie Journey2: The Mysterious Island. You can also opt for Madame Tussauds Wax Museum, including a Boat Ride, and take memorable photos with favourite celebrities, or opt for Butterfly Park and Insect Kingdom. Overnight in Singapore. Breakfast at the hotel restaurant, Lunch and Dinner in an Indian restaurant."
      ],
      [
        "DAY 10 | In Singapore",
        "The day is at leisure to explore this wonderful city or take optional tour of Jurong Bird Park, where you find birdlife from around the world or opt for Singapore Flyer, for bird’s eye view of Singapore. You can also opt for Night Safari, the wildlife night park with an exciting tram ride, spectacular shows and up close animal encounters or you can opt to visit Universal Studios Singapore, where you can experience cutting-edge rides, shows and attractions based on your favourite blockbuster films and television series. After an exciting day, transfer back to your hotel. Overnight in Singapore. Breakfast at the hotel restaurant and Dinner at an Indian restaurant."
      ],
      [
        "DAY 11 | Homeward Bound.",
        "Good times need never end!! As you get ready for the airport and your flight back home, relive the high points of your ‘HolidayMonk Fascinating Far East’ tour. We are confident you will join us again sometime soon. Breakfast either at the hotel or onboard your return flight. Photos"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "highlights-cambodia-tour",
    "title": "Highlights Cambodia Tour",
    "location": "Highlights Cambodia",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1875,
    "image": "/assets/international/highlights-cambodia-tour.jpg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "International Tour"
    ],
    "description": "SIEM REAP ARRIVAL- VISIT SIEM REAP On arrival at airport you will be met and transferred to the hotel by our local representative. Then visit West Baray Big Pond, a “baray” is a wa...",
    "itinerary": [
      [
        "DAY 01",
        "SIEM REAP ARRIVAL- VISIT SIEM REAP On arrival at airport you will be met and transferred to the hotel by our local representative. Then visit West Baray Big Pond, a “baray” is a water reservoir built by the ancient Khmer people. Then turn to Wat Thmei (Killing Field) contains a unique glass-walled stupa containing the bones of victims of the Khmer Rouge. Some of the bones were recovered from a nearby well while others are the remains of soldiers who died on a nearby battlefield. Come back to visit the “Les Artisans d’Angkor – Chantiers Ecole” the Finest Authentic Khmer Arts and Crafts. Welcome buffet dinner with Apsara Dance Show (at your own account) Overnight at the hotel in Siem Reap."
      ],
      [
        "DAY 02",
        "FULLDAY ANGKOR TOUR (B) Today you will explore South Gate of Angkor Thom known as Big Angkor, 3km2 walled and moated royal city and was the last capital of the Angkorian Empire, the famous Bayon Temple was an architectural muddle, in part because it was constructed in a somewhat piecemeal fashion for over a century. Terrace of the Elephants is an impressive, two and a half meter tall, 300-meter-long terrace wall adorned with carved elephants and gradual that spans the heart of Angkor Thom in front of Baphuon – huge temple mountain in the heart of Angkor Thom, Royal Palace Area and Phimeanakas – impressive rite and sandstone pyramid. Terrace of the Leper King is at the north end of the Terrace of the Elephants, a double terrace wall with deeply carved nag as, demons and other mythological beings. Last you will visit Ta Prohm temple which is a wonderful combination of human genius and natural beauty. Giant trees have grown here for centuries. Afternoon visit Angkor Wat temple, the founder of the temple was Suryavarman II who reined Cambodia from 1113 to 1152 and built the five towers in the 12th century to dedicate to the Hindu God Vishnu. The plan of the pyramidal conception of the temple combined with spaces, alleys, ditches is an ancient masterpiece of architectural design and construction .Free time to have funny time at bars and pubs at Angkor night market. Overnight at the hotel in Siem Reap."
      ],
      [
        "DAY 03",
        "SIEM REAP VISIT – EXPRESS BUS TP PHNOM PENH (B) This morning visit Floating Villages, located 10 kilometers south of Siem Reap. Take a ride in a traditional wooden boat on the Tonle Sap, the “Great Lake” of Cambodia and the largest in Asia. Here you’ll see plenty of examples of the Khmer way of life on the Tonle Sap. Then visit Wat Bo founded in the 18th century, a highly respected pagoda contains very unique wall paintings of the Reamker (Ramayana) that are said to be late 19th century and Local Market. Lunch at local restaurant (at your own account) before heading to BUS STATION for shuttle bus departure to Phnom Penh (If you prefer taking the flight for route Siem Reap –Phnom Penh, please see below for our surcharge) Welcome to Phnom Penh – the city retains its traditional Khmer and colonial styles with French villas and large tree-line sidewalk. . Overnight at the hotel in Phnom Penh."
      ],
      [
        "DAY 04",
        "FULL DAY PHNOM PENH TOUR (B) This morning you will visit the impressive colourful Khmer-style royal palace complex build in 1866 by the Predecessors of King Norodom. Nearby is Silver pagoda (the emerald Buddha temple), where contain plenty of Buddha Statues decorated and made by gold, diamond, gemstone and silver. We will stop at Independence monument and explore the National museum; a beautiful Khmer architecture building contains more than 5000 art antiques made by bronze, wood, gold, silver, copper, sandstone and others. We pass through the river-front park where 4 rivers met at a junction include mystical Mekong. Walk up to sacred hill Phnom Daun Penh – also the name of a pagoda and name of the capital nowadays. Afternoon we continue to Tuol Sleng prison now is Genocide Museum, the most secret part of the Khmer Rouge regime. It’s also called S-21 (abbreviated for Security Office 21), a Khmer Rouge’s premier security camp, specifically designed for the interrogation and extermination of anti-Angkor elements. Leave the relics of the bad history of Cambodia we will have lunch (at your own cost) before going shopping around Russian market, enjoy the bustling daily activities of the locals. Oovernight at the hotel in Phnom Penh."
      ],
      [
        "DAY 05",
        "PHNOM PENH DEPARTURE (B) This morning you will be transfer to airport for your flight back home or your next destination. Happy Ending."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "hong-kong-venetian-macau",
    "title": "Hong Kong & Venetian Macau",
    "location": "Hong Kong & Venetian Macau",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1975,
    "image": "/assets/international/hong-kong-&-venetian-macau.jpg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "Meet arrival at HKG Airport & Transfer to hotel. Night Tour HKG Night Tour with Victoria Peak with 1 way Peak Tram Ticket (Group ticket), Madame Tussauds ticket (group ticket), Vic...",
    "itinerary": [
      [
        "Day 01",
        "Meet arrival at HKG Airport & Transfer to hotel. Night Tour HKG Night Tour with Victoria Peak with 1 way Peak Tram Ticket (Group ticket), Madame Tussauds ticket (group ticket), Victoria Harbour with 1way Star Ferry, Old Clock Tower, Night Market (1 hour) and SIC return transfer"
      ],
      [
        "Day 02",
        "Breakfast at Hotel. Full Day Ocean Park Tour"
      ],
      [
        "Day 03",
        "Breakfast at Hotel. Full Day Disneyland Tour"
      ],
      [
        "Day 04",
        "On to Macau Breakfast at Hotel,Transfer to pier for ferry to Macau & Take Shuttle bus to hotel"
      ],
      [
        "Day 05",
        "Breakfast at Hotel, A-me Temple, The Ruins’ of St. Paul’s Cathedral, Casino, Macau Tower (Entrance ticket not included), souvenir shop and return transfer"
      ],
      [
        "Day 06",
        "Breakfast at Hotel, Take Shuttle bus to pier for ferry to HKG Airport for DEP,"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "hong-kong-and-macau",
    "title": "Hong Kong and Macau",
    "location": "Hong Kong and Macau",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1138,
    "image": "/assets/international/hong-kong-&-venetian-macau.jpg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "Arrive Hong Kong + City tour Welcome to the ever enthusiastic Hong Kong. On your arrival at Hong Kong Airport, meet our local tour representative at the specified area who will ass...",
    "itinerary": [
      [
        "Day 1",
        "Arrive Hong Kong + City tour Welcome to the ever enthusiastic Hong Kong. On your arrival at Hong Kong Airport, meet our local tour representative at the specified area who will assist you for your transfer to the hotel. Check in at your hotel and relax. Later get ready for Hong Kong City tour which includes visit to Famous city attractions like- Victoria Peak (Top-Level) & Harbour Front Promenade. There after head to the age old Jewellery factory, a souvenir shop. Further visit Aberdeen Village Aberdeen Fishing Village, the exclusive home town of fishermen where you can enjoy charming views of fishing boats, yachts and boat houses (Sampan Ride Is Optional- to be Paid Extra, directly by the Guest). After City tour, our tour representative will drop you at Tsim Sha Tsui shopping area to explore the local market and to buy gifts as a souvenir for your loved ones. Return back to hotel by own. Stay overnight at hotel in Hong Kong."
      ],
      [
        "Day 2",
        "Hong Kong- Day Free at Leisure Enjoy a relaxed morning followed by an extensive morning breakfast at hotel. The day is at your leisure. Today you can spend the day on your own pace exploring the city on your own or you can opt for a trip to Hong Kong Disneyland (at an additional cost) to explore the magical adventures of this exciting world famous theme park. Click pictures with your favourite Disney Characters, take fun-filled rides and relish delicious food. Hang out here for the whole day for unlimited fun and entertainment and have a truly thrill filled day. Later return to the hotel and sleep relaxed. Stay overnight at hotel in Hong Kong. (B)"
      ],
      [
        "Day 3",
        "Hong Kong- Day Free at Leisure Charge with an extensive morning breakfast at the Hotel. Remaining day is Free for leisure or you may spend the remaining day to enjoy a tour to Ocean Park (at an additional cost). Ocean Park is South East Asia’s largest Water & Adventure Park that features various marine and mammal exhibits, thrill rides and exciting shows. It is the first Asian winner of Applause award, the most prestigious award in Amusement & Theme park industry. Ocean Park tour will fill your day with wonder, pleasure and excitement & reward you with satisfying memories. Various Food joints are available in Ocean Park like- The Bakery, Panda Café, Bayview Restaurant, Terrace Café and Café Ocean to sit back and enjoy your meal. After spending a memorable day, return back to hotel and sleep relaxed. Stay overnight at hotel in Hong Kong. (B)"
      ],
      [
        "Day 4",
        "Hong Kong- Transfer to Macau Today morning after breakfast, check out from the hotel and get transferred to Ferry Pier for your Ferry transfer to Macau, the mystic city. On reaching Macau, get transferred to your hotel and check in (Standard Check-in time is 1500 hrs). Relax and refresh, then step out to explore the city on your own. Enjoy the city come live in glistening night lights and savour the famous local delicacies (on your own). Stay overnight at hotel in Macau. (B)"
      ],
      [
        "Day 5",
        "Macau- Day Free to Explore Take a fill at morning breakfast and set out for self exploration of the city. The day is free on your own and you may decide to spend it in your preferred way. There are various historical attractions like Ruins of St. Paul’s Church, 17th century Portuguese Cathedral, etc. You can spend some time at the Fisherman’s Wharf if you wish. In the evening, you can make a visit to Macau Tower followed by trying out some local delicacies. Try out some gambling at the famous resort this night. Later retire to slumber. Stay overnight at hotel in Macau. (B)"
      ],
      [
        "Day 6",
        "Macau- Hong Kong- Delhi Today your vacation comes to an end. Make the most of this morning. Check out from the hotel after having an extensive breakfast at hotel. Catch your shuttle from the hotel for your transfer to the Ferry where you’ll take direct Ferry to the Hong Kong Airport. We hope that your vacation was truly memorable and would be glad to receive your feedback on your return. Return Home with Wonderful Memories. (B) Tentative Itinerary Note: Above Itinerary is just indicative. Do not consider it as a Final Schedule. Date & Time of Tours can be changed by Local Agent / Tour Operator."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "hong-kong-macau-and-disneyland",
    "title": "Hong Kong, Macau and Disneyland",
    "location": "Hong Kong, Macau and Disneyland",
    "duration": "7 Days / 6 Nights",
    "price": "₹97,500 / person",
    "type": "International Tour",
    "category": "Honeymoon & Luxury",
    "rating": 4.9,
    "reviews": 441,
    "image": "/assets/international/hong-kong-&-venetian-macau.jpg",
    "tags": [
      "Honeymoon & Luxury",
      "7 Days",
      "International Tour"
    ],
    "description": "Arrive Hong Kong – Macau Welcome to your tour of Hong Kong & Macau! Upon arrival in Hong Kong, walk across to Hong Kong ferry terminal (before crossing immigration) for direct ferr...",
    "itinerary": [
      [
        "DAY 01 ",
        "Arrive Hong Kong – Macau Welcome to your tour of Hong Kong & Macau! Upon arrival in Hong Kong, walk across to Hong Kong ferry terminal (before crossing immigration) for direct ferry service to Macau. Travel from Hong Kong to Macau by ferry. On arrival in Macau board the hotel shuttle and transfer to hotel. Rest of days is leisure. Overnight at the hotel, Macau."
      ],
      [
        "DAY 02 ",
        "Macau Enjoy buffet breakfast at the hotel. This day, you will be met at your hotel lobby for a half day city tour of Macau. On this tour one can experience the charm of the Chinese and Portuguese heritages embraced in arrays of modernized architecture. Today Enjoy Indian Lunch The evening is at leisure. Overnight at the hotel, Macau."
      ],
      [
        "DAY 03 ",
        "Macau to Hong Kong Today after breakfast, You will be transferred from hotel in Macau to the pier to board the ferry to Hong Kong. From the pier you will be transferred to your hotel in Hong Kong by hotel Shuttle. Rest of the day is leisure. Overnight at the hotel in Hong Kong."
      ],
      [
        "DAY 04 ",
        "Hong Kong Enjoy Breakfast at the Hotel. Today proceed for half day panoramic tour of Hong Kong Island. Discover the highlights of Hong Kong. Enjoy city tour of Hong Kong with visit to Sky 100, Peak Tram and Madame Tussauds by Coach, After a Fulfilled day transfer and return to the Hotel. Overnight at the hotel, Hong Kong."
      ],
      [
        "DAY 05 ",
        "Hong Kong Breakfast Leisure Day or Optional Tours"
      ],
      [
        "DAY 06 ",
        "Hong Kong to Disneyland Hotel Breakfast Around 10:00 Meat At Hotel Lobby & SIC to Hollywood Hotel 1st Day Disneyland Pass."
      ],
      [
        "DAY 07 ",
        "Disneyland Enjoy buffet breakfast at the hotel. Today you will be picked from your Hotel lobby and transferred to the airport for your onward flight back Home. Return home with wonderful memories."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "myanmar-discovery",
    "title": "Myanmar Discovery",
    "location": "Myanmar Discovery",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 2165,
    "image": "/assets/international/myanmar-discovery.jpg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "Itinerary\r\nDiscover the Myanmar Top 5 Attractions and capture the spirit of Myanmar on this 11 Day journey . Along the journey, you’ll explore several of Myanmar’s greatest treasur...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Itinerary\r\nDiscover the Myanmar Top 5 Attractions and capture the spirit of Myanmar on this 11 Day journey . Along the journey, you’ll explore several of Myanmar’s greatest treasures, behold spectacular scenery, learn about different cultures, and experience the warmth and hospitality bestowed by th"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "myanmar-treasures",
    "title": "Myanmar Treasures",
    "location": "Myanmar Treasures",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 524,
    "image": "/assets/international/myanmar-discovery.jpg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "Itinerary\r\nOn this fascinating 8 Day tour you’ll unlock the several of Myanmar’s greatest treasures, behold spectacular scenery, learn about different cultures, and experience the ...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Itinerary\r\nOn this fascinating 8 Day tour you’ll unlock the several of Myanmar’s greatest treasures, behold spectacular scenery, learn about different cultures, and experience the warmth and hospitality bestowed by the locals. From the spiritual heavyweight of Shwedagon Pagoda in Yangon, historic ki"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "myanmar",
    "title": "Myanmar",
    "location": "Myanmar",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1222,
    "image": "/assets/international/myanmar-discovery.jpg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "major highlights of Myanmar. This Itinerary starts off in Mandalay and ends in Yangon that designed for the travelers from Mandalay Arrival. You’ll explore historic kingdom of Mand...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "major highlights of Myanmar. This Itinerary starts off in Mandalay and ends in Yangon that designed for the travelers from Mandalay Arrival. You’ll explore historic kingdom of Mandalay, the ancient temples of Bagan, picturesque Inle Lake and the iconic Shwedagon Pagoda in Yangon on this fascinating "
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "northern-and-central-vietnam",
    "title": "Northern and Central Vietnam",
    "location": "Northern and Central Vietnam",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1866,
    "image": "/assets/international/northern-and-central-vietnam.jpg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "HANOI ARRIVAL – AFTERNOON HALF DAY CITY TOUR Arrival in Hanoi Upon arrival at Noi Bai International Airport (Hanoi), you will be greeted by our private driver (without guide) and t...",
    "itinerary": [
      [
        "Day 1",
        "HANOI ARRIVAL – AFTERNOON HALF DAY CITY TOUR Arrival in Hanoi Upon arrival at Noi Bai International Airport (Hanoi), you will be greeted by our private driver (without guide) and transferred to your hotel. Note: The official check-in time is 14:00. Early check in will be surcharged if requested. 13:30 – 14:00 Pickup for City Tour Our local guide will meet you at the hotel for a fascinating Hanoi City Tour. During the tour, we will visit: Temple of Literature: The first university of Vietnam, established in the 11th century. This historic site highlights Vietnam’s educational legacy and Confucian traditions. Hoa Lo Prison Museum (Hanoi Hilton): A museum that tells the story of the prison built by the French for political prisoners and later used by North Vietnam to house U.S. prisoners of war during the Vietnam War. 17:00 Return to Hotel. The tour finishes with a transfer back to your hotel, where you can relax for the evening. Overnight in Hanoi. Inclusions: Private transfer, Local guide for tour city tour, Entrance fees Meals: None"
      ],
      [
        "Day 2",
        "HANOI – HALONG BAY – OVERNIGHT ON CRUISE (B/L/D) – PRIVATE TRANSFER Breakfast at your hotel and check out. 08:30 Depart Hanoi for a 3-hour drive to Ha Long Bay, including a short 20-minute rest stop along the way. Upon arrival at the jetty in Ha Long City around noon, proceed with check-in formalities. Be warmly welcomed aboard. Lunch will be served while cruising into the bay, allowing you to admire the majestic limestone karsts and emerald waters. In the afternoon, enjoy onboard activities, shore excursions, or simply relax on deck and take in the spectacular surroundings. Towards the end of the day, the boat anchors for the night among the stunning rock formations. Dinner is served on board. Overnight on the cruise. Note: The exact cruise itinerary will be confirmed upon selection of the cruise vessel. Inclusions: Private transfer, cruise activities, Local guides on cruise Meals: Breakfast, Lunch, Dinner"
      ],
      [
        "Day 3",
        "HALONG BAY – HANOI – FLIGHT TO DA NANG (B/BRUNCH) – PRIVATE TRANSFER We will continue our journey on Halong Bay in the early morning. A Tai Chi Class on the sun deck is a must that you should not miss when on the cruise. Sitting on the upper deck, you can relax and go sightseeing while taking photos of the magnificent beauty of the rocky islands rising from the emerald water of the bay. Join in on some cruise activities or relax (activities vary depending on each boat’s itinerary). 10:30 Our boat cruises back to the jetty, and you will enjoy the last moment in the bay before having a traditional Vietnamese brunch. You leave the boat around noon, and we go ashore and take a 3-hour drive transfer to Hanoi airport for a flight to Da Nang City. Upon arrival in Da Nang City, a private transfer will bring you from the airport to the hotel in Da Nang City. Check in at the hotel and spend your free time on your own. Overnight in Da Nang. Inclusions: Private airport transfer, Local guide Meals: Brunch"
      ],
      [
        "Day 4",
        "DA NANG – BASKET BOAT AT COCONUT FOREST – HOI AN ANCIENT TOWN – DA NANG (B) Have breakfast at the hotel and enjoy a relaxing morning with free time at your own leisure. You may choose to rest at the hotel or explore the surrounding area on your own. 14:00 You will be picked up to visit the ecological area of Cam Thanh Water Coconut Forest. Hop on a traditional basket boat and experience about 30 minutes. After the visit, continue to explore the charm of Hoi An Ancient Town. You will visit famous landmarks such as the Japanese Covered Bridge, the Sa Huynh Cultural Museum, and a traditional Ancient House. Take a leisurely walk along Lantern Street and enjoy shopping at Nguyen Hoang Night Market. Dinner on your own. 20:00 Return to your hotel in Da Nang. Overnight in Da Nang. Inclusions: Private transfer, Local guide, Entrance fees Meals: Breakfast"
      ],
      [
        "Day 5",
        "DA NANG – BANA HILLS – GOLDEN BRIDGE – FANTASY PARK – DA NANG (B) Breakfast at the hotel. 8:00 Get picked up from the hotel and transferred by road to Ba Na Hills, a scenic mountain resort known for its cool climate, French colonial architecture, and iconic Golden Bridge. Upon arrival, take the spectacular cable car ride to the mountain peak, then explore: Golden Bridge – a stunning architectural feat held aloft by two giant stone hands emerging from the mountainside. Jardin D’Amour – a series of vibrant and artistic flower gardens. Luna Castle – A magical, European-style castle nestled in the heart of Ba Na Hills. Explore its whimsical architecture, indoor play zones, and vibrant fairytale atmosphere – perfect for families and photo lovers. Linh Ung Pagoda – Home to a large statue of the Goddess of Mercy. Hill-climbing train – Vietnam’s first and only funicular railway. Have lunch on your own In the afternoon, continue to visit: Fantasy Park – Vietnam’s third largest indoor games zone, with a series of interesting games: 4 – 5D film, skier, The Death Race, Dinosaur Park… (Games with coins and awards are not free – on your own account). 15:00 Take the cable car down from Bana Hills, then transfer to your hotel in Da Nang. 17:00 – 17:30 Arrive at your hotel in Da Nang. Overnight in Da Nang. Note: Sun World Ba Na Hills ticket excludes: The Wax Statue Museum, Debay Wine Cellar, Rain Sheltering Teahouse, Roller Coaster game(Alpine Coaster), Wowpass, Games with coins or prize redemption, 10D movie, Beverages…(expenses are on your account).. Inclusions: Private transfer, Local guide, Cable Car round trip with Fantasy Park Meals: Breakfast"
      ],
      [
        "Day 6",
        "DA NANG – DEPARTURE (B) – Have breakfast at the hotel and freely relax. Check out with your luggage and meet our driver (no guide) to take you to the airport for the flight. Sincere thanks for traveling to Vietnam with us. We trust that you have enjoyed your trip and look forward to seeing you again! Inclusions: Private airport transfer Meals: Breakfast"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "offbeat-vietnam",
    "title": "Offbeat Vietnam",
    "location": "Offbeat Vietnam",
    "duration": "9 Days / 8 Nights",
    "price": "₹1,14,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1505,
    "image": "/assets/international/northern-and-central-vietnam.jpg",
    "tags": [
      "Heritage & Nature",
      "9 Days",
      "International Tour"
    ],
    "description": "HANOI ARRIVAL – SAPA – CAT CAT VILLAGE – Welcome to Hanoi, the capital of Vietnam! Upon arrival, our driver (without a guide) picks up from the hotel, then goes to Sapa. 09:30 Foll...",
    "itinerary": [
      [
        "Day 1",
        "HANOI ARRIVAL – SAPA – CAT CAT VILLAGE – Welcome to Hanoi, the capital of Vietnam! Upon arrival, our driver (without a guide) picks up from the hotel, then goes to Sapa. 09:30 Follow the highway to Lao Cai city with the first comfort break 11:00 Second comfort break at Lao Cai city before approaching Sapa 13:00 Arrive in Sapa Town with colorful traditional costumes of H’Mong, Dzao, and Tay ethnic People. Lunch on your own. 14:30 Meet our guide and then transfer to Cat Cat village, which is home to Black H’mong ethnic people and is located near the bottom of a deep valley at the foot of Fansipan Peak. Our local guide will show you the daily life activities of the locals, trek down to the valley bottom to the waterfall where the French built a Hydraulic Power Station, stop for a photo with the bridge and waterfall, then you will walk uphill for the bus to pick you up to get back to Sapa in the afternoon. The trekking distance is about 2.5 km, and it lasts for 2 hours 16:30 Come back to Sapa Town. Overnight in Sapa. Inclusions: Private transfer, Local guide in Sapa, Entrance fees Meals: None"
      ],
      [
        "Day 2",
        "SAPA – FANSIPAN – HANOI (B) – Breakfast at the hotel, then check out. 08:00 – The driver and our tour guide will take you to the Fansipan Cable Car Station. Enjoy a 20-minute cable car ride with breathtaking views over the mountains and Muong Hoa Valley. 09:00 – Arrive at an altitude of 2,800 meters. Enjoy sightseeing and taking photos. Visit the spiritual pagoda complex, then trek up 600 steps or take the Do Quyen Climbing Mountain Train (round-trip ticket included) to reach the summit of Fansipan, known as the Roof of Indochina. Spend about 1.5 hours hiking, exploring, and taking photos. Lunch on your own. 13:30 – Depart for Hanoi by private car. 20:30 – Arrive at your hotel in Hanoi. Check in and relax. Overnight in Hanoi. Inclusions: Private transfer, Local guide in Sapa, Entrance fees Meals: Breakfast"
      ],
      [
        "Day 3",
        "HANOI – NINH BINH – HOA LU – TAM COC – HANG MUA – HANOI (B) Have breakfast at your hotel. 8:00: Our tour guide will pick you up from your hotel. We take you to Ninh Binh, about 120 km from the Hanoi Old Quarter. 9:00 – 9:15: Have a short break for 20 minutes to relax. 10:15 – 10:30: Arrive in Ninh Binh, then walk to visit Hoa Lu. This is the former capital of Vietnam. You will be impressed by the outstanding architecture when entering the temples of King Dinh and King Le, the first and second emperors of ancient Vietnam, built in the 17th century. Lunch on your own. Visit Tam Coc for 1.5 hours on the boat ride. During the boat trip, you will be surprised by the charming beauty here with paddy fields, river, water, cloud, sky, and a stunning cave system. All make a masterpiece which Vietnamese people call “Halong Bay on land”. Get on the bus to go to Mua Cave ( Dancing Cave). Walking up almost 500 steps, you can reach the top of Lying Dragon Mountain and have an amazing panoramic view of Tam Coc from here. 17:00 – 17:30: Get on the bus to return to Hanoi. 19:00 – 19:30: Arrive in Hanoi and get dropped off at your hotel. The trip ends! Notes: Programs & schedules are subject to change without prior notice due to weather conditions or external factors. On weekends, some roads will not allow vehicles to make room for the walking street, therefore, our bus will drop you off at the closest and suitable point in the Old Quarter instead. Inclusions: Private transfer, Local guide, Entrance fee (Hoa Lu, Hang Mua), Boat ride in Tam Coc Meals: Breakfast"
      ],
      [
        "Day 4",
        "HANOI – CAT BA – LAN HA BAY DAY TRIP – HANOI (B/L) – GROUP TOUR Breakfast at your hotel. 7:00 – 7:30 Our bus and guide will pick you up from your hotel and transfer you to Cat Ba Island for your day cruise. 10:15 – 10:30 Reach Cat Ba Island, drive on a scenic coastal from Cai Vieng Port to Beo Harbour. 11:00 You’ll be warmly welcomed on board with a refreshing drink. The cruise staff will provide a brief introduction to the cruise itinerary, safety instructions, and important notes for the day. Cruise through the serene waters of Cai Beo Ancient Fishing Village, one of the oldest and most poetic fishing villages in Vietnam, with charming floating houses nestled along the limestone cliffs. 11:30 Savor a delicious lunch (Buffet lunch is served for group from 40 guests) 13:00 After lunch, the cruise sails to Viet Hai Port. Disembark and head to the pier, where you will take electric car/bicycle to the ancient Viet Hai Village. Experience a unique fish-foot massage, stroll through well-preserved traditional houses, or engage in conversations with local residents for a truly memorable experience. 14:30 KAYAKING – SWIMMING Our Captain and Tour Guide will choose the best stop for the group to experience interesting activities: Swimming in the middle of the sea, boat- jumping, sliding down from the top deck to cool water, kayaking,…. (We highly recommend that you wear a life jacket when swimming/ kayaking/playing with water slide…for a safe journey) 15:40 The boat begins its journey back to Beo Pier. It is perfect time to relax yourself on the top deck with a cup of ordered drink. 16:15 Small sunset party is served with fresh fruit, biscuits & tea. 16:45 Return to Beo Dock, say ”Goodbye” Lan Ha Bay & Serenity Cruise team, and Get on the bus back to Ha Noi. 20:30 Arrive at Hanoi Old Quarter, end of unforgettable journey. Overnight in Hanoi. Important Notes: – Cruise itinerary might be changed due to weather and other conditions without prior notice – Swimming or kayaking activity may be not possible due to bad weather. Unused services are not subjected to a refund – Lunch on the cruise is served with seafood, meats & Vietnamese rice. Request for food vegetarian should be informed at least 1 day before departure Inclusions: Local guide, Shuttle bus, Boat Trip, Entrance fees Meals: Breakfast, Lunch"
      ],
      [
        "Day 5",
        "FLIGHT TO DONG HOI – PHONG NHA (B) Have breakfast at the hotel and freely relax. 3 hours before the flight time, pick up to the airport. Upon arrival, pick up and transfer to the hotel in Phong Nha. Overnight in Phong Nha. Inclusion: Private airport transfer Meals: Breakfast"
      ],
      [
        "Day 6",
        "PARADISE CAVE – PHONG NHA CAVE – TRAIN TO DA NANG (B/L) Have breakfast at the hotel. 08:45 – 9:00: You will be picked up at hotel in Phong Nha area around. 09:00 You will explore the most impressive Paradise cave – the longest dry cave in Asia. 12:45 Lunch at local restaurant. Vegetarian option available. 13:30 Visit Phong Nha cave (50 km about the city, 45 minutes driving). After 25 minutes on boat, visitors will arrive Phong Nha cave, and take a couple of hours to see the cave. This cave is called a water cave, and is famous for its rock formation which has been given names such as the “Lion”, the “Fairy Caves”, the “Royal Court”, and the “Buddha”. 16:00 – 16:30 Tour ends and return to the hotel. 18:00 Pick up to the train station for the nigh train to Da Nang (SE5 at 19:28). Upon arrival, pick up at the hotel for check-in and relax. Overnight at the hotel. Inclusion: Private transfer, Local Guide, Entrance fee, Train Ticket Meals: Breakfast, Lunch"
      ],
      [
        "Day 7",
        "DA NANG – MARBLE MOUNTAIN – BASKET BOAT AT COCONUT FOREST – HOI AN ANCIENT TOWN – DA NANG (B) Breakfast at the hotel and enjoy a relaxing morning at your leisure. 13:00 – 13:45 – Our guide and driver will pick you up from your hotel in Da Nang and begin your sightseeing adventure with a visit to Ngu Hanh Son Mountain, also known as Marble Mountain. This cluster of five marble and limestone hills is a famous landmark in the region. You’ll explore the area’s caves, pagodas, and scenic viewpoints, offering stunning vistas of the surrounding landscape. Next, visit Non Nuoc Village, located at the foot of the Marble Mountains. The village is renowned for its stone sculptures and handicrafts. Here, you can admire intricate marble statues and other works of art created by talented local artisans. 15:30 – Continue your journey to the Coconut Forest in Cam Thanh, Hoi An. This area is famous for its lush mangrove forests and traditional basket boat rides. You’ll have the chance to navigate the waterways in a basket boat, a traditional Vietnamese vessel used by local fishermen. While riding, you’ll gain insight into the daily life of the villagers and their fishing practices. The boatmen will also perform some entertaining and magical basket boat maneuvers. 17:00 – Head to Hoi An Ancient Town, a UNESCO World Heritage Site. The town is famous for its well-preserved ancient houses, assembly halls, bridges, and temples. Stroll through the charming streets and soak in the atmosphere of this historical town. As the evening sets in, the streets come alive with colorful lanterns, creating a magical ambiance that transports you back in time. Have dinner by yourself. 20:00 – 20:30 – After a delightful exploration of Hoi An, we’ll say goodbye and depart for Da Nang. 21:00 – 21:30 – Arrive back at your hotel in Da Nang. Rest and unwind for the evening. Overnight in Da Nang. Inclusions: Private transfer, Local guide, Entrance fees, Basket boat Meals: Breakfast"
      ],
      [
        "Day 8",
        "DA NANG – BANA HILLS – GOLDEN BRIDGE – FANTASY PARK – DA NANG (B/L) Breakfast at the hotel. 8:00 Meet your guide and driver to head to Ba Na Hills. Take a cable car ride from Ba Na Hills station, and stop at Night station to visit Vong Nguyet Hills, Linh Ung Pagoda, and the Old Villas of the French. Continue moving up by cable car to the Nui Chua Mountain – the top of Ba Na range, visiting Nghinh Phong top, Le Nim Villas, Orchid Garden… Experience the Hill Climbing train (the first and unique funicular in Vietnam) and visit an old French cellar (Debay Ancient Wine Cellar) and the flower garden Le Jardin D’amour. You should not miss walking on the famous Golden Bridge, crossing through the foggy hills of the mountain, and witnessing the amazing and gorgeous view of Da Nang City. Lunch in Bana HIlls. In the afternoon, free to join games in Fantasy Park – the third largest indoor games zone in Vietnam with a series of interesting games: 4 – 5D film, skier, The Death Race, Dinosaur Park… 15:00 Take the cable car down from Bana Hills, then transfer to your hotel. 17:00 – 17:30 Arrive at your hotel. Overnight in Da Nang. Note: Wax Statue Museum, France Wine Cellar entrance & wine, Roller Coaster game, Climbing game, or some games with prizes, 10D movie are excluded (expense is on your account). Inclusions: Private transfer, Local guide, Entrance fees, cable car round trip Meals: Breakfast, Lunch"
      ],
      [
        "Day 9",
        "DA NANG – DEPARTURE (B) – Have breakfast at the hotel and freely relax. Check out with your luggage and meet our driver (no guide) to take you to the airport for the flight. Sincere thanks for traveling to Vietnam with us. We trust that you have enjoyed your trip and look forward to seeing you again! Inclusions: Private airport transfer Meals: Breakfast"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "philippines-tour",
    "title": "Philippines Tour",
    "location": "Philippines",
    "duration": "7 Days / 6 Nights",
    "price": "₹97,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 557,
    "image": "/assets/international/philippines-tour.jpg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "International Tour"
    ],
    "description": "Arrival in Manila & City Exploration Morning/Afternoon: Arrive at Ninoy Aquino International Airport (MNL) in Manila. Transfer: Take a pre-arranged transfer or taxi to your hotel i...",
    "itinerary": [
      [
        "Day 1",
        "Arrival in Manila & City Exploration Morning/Afternoon: Arrive at Ninoy Aquino International Airport (MNL) in Manila. Transfer: Take a pre-arranged transfer or taxi to your hotel in Manila. Check in and relax. Afternoon: Start your Manila exploration with a visit to Intramuros, the historic walled city. Walk or take a kalesa (horse-drawn carriage) ride to explore Fort Santiago, a historical citadel. Visit San Agustin Church and Museum, the oldest stone church in the Philippines and a UNESCO World Heritage Site. Stroll through Casa Manila, a colonial-era house museum. Evening: Enjoy dinner at a local restaurant in the Intramuros area or explore the vibrant Malate district for more dining options. You could also catch the sunset at Manila Baywalk."
      ],
      [
        "Day 2",
        "Manila’s Culture & Modernity Morning: Visit Rizal Park (Luneta Park), a significant historical urban park dedicated to the national hero Jose Rizal. Explore the National Museum Complex (National Museum of Fine Arts, National Museum of Anthropology, National Museum of Natural History) to delve deeper into Filipino art, history, and culture. Afternoon: Experience modern Manila by visiting Bonifacio Global City (BGC). This area is known for its upscale shopping, dining, and public art installations. You can explore SM Mall of Asia if you’re interested in a large shopping experience. Evening: Enjoy a farewell dinner in Manila. Consider trying Filipino cuisine specialties."
      ],
      [
        "Day 3",
        "Fly to Cebu & Cultural Immersion Morning: Check out from your Manila hotel. Transfer to MNL airport for your domestic flight to Mactan-Cebu International Airport (CEB). Transfer: Arrive in Cebu. Take a pre-arranged transfer to your hotel in Cebu City. Check in. Afternoon: Begin your Cebu City tour. Visit Magellan’s Cross, a historical landmark marking the arrival of Christianity in the Philippines. Explore the Basilica Minore del Santo Niño, the oldest Roman Catholic church in the Philippines. Discover Fort San Pedro, the oldest and smallest triangular bastion fort in the country. Ascend to the Cebu Taoist Temple for panoramic views of the city. Evening: Enjoy a traditional Cebuano dinner."
      ],
      [
        "Day 4",
        "Cebu’s Natural Wonders (Whale Sharks & Waterfalls) Early Morning (Optional but Highly Recommended): Embark on a Whale Shark watching tour in Oslob. This is an early start but offers a unique opportunity to swim with these gentle giants. Late Morning/Afternoon: Head to Kawasan Falls in Badian for canyoneering (guided adventure involving jumping, sliding, and rappelling through canyons) or simply enjoy swimming in the beautiful turquoise pools. Late Afternoon: Return to your hotel in Cebu City. Evening: Relax and have dinner at your leisure."
      ],
      [
        "Day 5",
        "Fly to Boracay & Beach Bliss Morning: Check out from your Cebu hotel. Transfer to CEB airport for your domestic flight to Caticlan Airport (MPH), the closest airport to Boracay. Transfer: From Caticlan, it’s a short land transfer to Caticlan Jetty Port, followed by a 15-20 minute boat ride to Boracay Island. Upon arrival at Boracay, you’ll take a tricycle or van to your hotel. Afternoon: Check into your resort in Boracay. Spend the afternoon relaxing on White Beach, famous for its powdery white sand and crystal-clear waters. Swim, sunbathe, or simply enjoy the stunning scenery. Evening: Witness a breathtaking Boracay sunset from White Beach. Enjoy a beachfront dinner at one of the many restaurants."
      ],
      [
        "Day 6",
        "Boracay Island Hopping & Water Activities Morning: Embark on an Island Hopping tour. This typically includes: Snorkeling at vibrant coral gardens. Visiting Puka Beach (Yapak Beach), known for its Puka shells. Exploring Magic Island (if included in the tour) for cliff jumping. Enjoying a BBQ lunch on board or at a designated stop. Afternoon: Indulge in various water activities like parasailing, paddleboarding, jet-skiing, or simply more swimming and relaxing on the beach. Evening: Explore the lively D’Mall area for souvenir shopping and dinner. Consider a relaxing paraw sailing experience during sunset."
      ],
      [
        "Day 7",
        "Departure from Boracay to India Morning: Enjoy a final breakfast in Boracay. Depending on your flight schedule, you might have time for some last-minute souvenir shopping or a final dip in the ocean. Transfer: Check out from your hotel and transfer back to Caticlan Airport (MPH) for your flight to Manila (MNL) or another international gateway, connecting to your flight back to India. Enjoy your incredible journey through the Philippines! Includes"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "phu-quoc-honeymoon",
    "title": "Phu Quoc Honeymoon",
    "location": "Phu Quoc Honeymoon",
    "duration": "4 Days / 3 Nights",
    "price": "₹72,000 / person",
    "type": "International Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 1393,
    "image": "/assets/international/phu-quoc-honeymoon.jpg",
    "tags": [
      "Beach & Backwaters",
      "4 Days",
      "International Tour"
    ],
    "description": "PHU QUOC ARRIVAL – STARFISH BEACH (PRIVATE TRANSFER, NO GUIDE) Welcome to Phu Quoc – Vietnam! Upon arrival, greeted by the local driver and transferred to downtown. Check in your h...",
    "itinerary": [
      [
        "DAY 1",
        "PHU QUOC ARRIVAL – STARFISH BEACH (PRIVATE TRANSFER, NO GUIDE) Welcome to Phu Quoc – Vietnam! Upon arrival, greeted by the local driver and transferred to downtown. Check in your hotel as per standard check in time. Afternoon, transfer to Starfish Beach by private car (no guide), The beach known as one of the most beautiful beaches in Phu Quoc, with its creamy white sand and gentle, calm waves. Relax on the beach (personal expenses such as beach towels, chairs, drinks, and showers are not included). Overnight in Phu Quoc."
      ],
      [
        "DAY 2",
        "PHU QUOC – 4 ISLAND CARBLE CAR (PRIVATE TOUR) (B/L) Morning, start your adventure with a private hotel pickup and transfer to the harbor, where you’ll board a speed boat for an unforgettable island-hopping experience in southern Phu Quoc. Explore May Rut Trong Island for stunning photos and beach swimming, then continue to Mong Tay Island or May Rut Ngoai Island for more scenic moments and relaxation. Discover the underwater beauty at Gham Ghi Island or Kim Quy Island with a snorkeling session, admiring vibrant coral reefs and colorful marine life. For an optional experience, visit Coral Park (sea-walking experience and other sea activities – at your own expense) to explore Asia’s largest coral conservation area. The journey continues to Thom Island, where you’ll enjoy a delicious buffet lunch with over 100 Asian and European dishes at Mango Restaurant. After lunch, experience thrilling rides at Aquatopia Water Park and take in breathtaking aerial views on the three-wire sea-crossing cable car. Before returning, visit Sunset Town, a charming European-style area perfect for capturing memorable photos, before concluding the tour with a comfortable transfer back to your hotel. Tour Duration: 7.5 – 8 hours. Optional cost: Enjoy Kiss of the sea show: Surcharge $26/per pax"
      ],
      [
        "DAY 3",
        "PHU QUOC – VIN WONDERS – GRAND WORLD (PRIVATE TRANSFER, NO GUIDE) (B) Breakfast at hotel and check out. Transfer to visit VinWonders Phu Quoc. This is the largest theme park in Vietnam, offering a great deal of interesting entertainment options, including exhilarating rides, waterpark slides, indoor games, street performances, musical fountains, 5D cinema and so many more to discover. This afternoon, we visit Grand World Phu Quoc. With a scale of 85 hectares, the area owns splendid and magnificent architecture which is inspired by the European cities. Venice River, or Lake of Love, is considered one of the best imitations of the original river in Venice City, Italy. Here, you can choose to sit on the gondolas (at your own cost) along the river to watch the romantic scenery created by a lot of sophisticated buildings. Families with children can also visit Teddy Bear Museum – inspired by The Indiana Jones movie, with more than 20 zones to observe giant or cute bears from all continents since ancient times (entrance ticket at your own cost). Remaining time is to visit other attractions in Grand World such as Bamboo House, Urban Park, or Beach Square, all are ticket-free. Overnight in Phu Quoc. Optional cost: Enjoy Quintense of the Sea show: $17/per person Teddy Bear Museum entrance fee: $13/per person Gondola Boat ride: $13/per person"
      ],
      [
        "DAY 4",
        "PHU QUOC – DEPARTURE (B) Breakfast at hotel and check out Free at leisure until transfer with driver (no guide) to the airport for the departure flight."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "vietnam-children-tour-the-pearl-island-phu-quoc",
    "title": "Vietnam Children Tour The Pearl Island – Phu Quoc",
    "location": "Vietnam Children  The Pearl Island – Phu Quoc",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 1993,
    "image": "/assets/international/offbeat-vietnam.jpg",
    "tags": [
      "Beach & Backwaters",
      "6 Days",
      "International Tour"
    ],
    "description": "PHU QUOC ARRIVAL – Welcome to Phu Quoc Island! Upon arrival, our driver (no guide) will pick you up from the airport and transfer you to the hotel. The official check-in time is 14...",
    "itinerary": [
      [
        "Day 1",
        "PHU QUOC ARRIVAL – Welcome to Phu Quoc Island! Upon arrival, our driver (no guide) will pick you up from the airport and transfer you to the hotel. The official check-in time is 14:00. Freely relax and discover the city. Overnight in Phu Quoc. Inclusions: Private transfer (no guide) Meals: None"
      ],
      [
        "Day 2",
        "PHU QUOC – 4 ISLANDS TOUR BY CABLE CAR AND SPEEDBOAT (L) – GROUP TOUR Enjoy breakfast at the hotel. 8:00 Pick up from your hotel, then transfer to the harbor, and board a speedboat. Visit 4 islands in the south: Gam Ghi Island: Snorkeling at the coral reef – Enjoy the beach Buom Island (or Mong Tay Island): Snorkeling at the coral reef May Rut Island: white sand lagoon – unique chillout Having Lunch on the Island Sea walker (pay by yourself): a new type of service, walk under the ocean, fish flocks are swimming & colorful coral reefs of Phu Quoc. Speed boat arrives at Thom Island: Enjoy the water park – more than 20 modern games from the world’s leading manufacturers. Back on the cable car (around 25 mins): Enjoy the sunset & rides with a panoramic overall view of the islands 17:00 Return to your hotel. Overnight in Phu Quoc. Suggestion: On the way back to your hotel, if you wish to visit Sunset Sanato – Oc Sen Beach Bar, Sunset Beach Bar, Night Market, or Sao Beach, we will drop you there, but you will have to pay for the ticket and come back to the hotel by yourself. Notes: In case of unfavorable weather conditions, some islands may be replaced with alternative destinations, or the cable car ride may take place before visiting the islands. The cable car experience schedule will be arranged by the tour guide. In case the water park is under maintenance, guests can still enjoy the cable car ride and continue the tour as planned. The tour price remains unchanged. Inclusions: Shuttle bus, Local guide, Cable car ticket, Speed Boat, Snorkeling, Equipment: mask, snorkel & Fins (Fins not available in child sizes), Life Jackets Meals: Local Lunch"
      ],
      [
        "Day 3",
        "PHU QUOC – VIN WONDER (B) – Enjoy breakfast at your hotel. 10:00 AM – Meet your driver in the hotel lobby and transfer to VinWonders Phu Quoc, the island’s premier entertainment complex. Dive into a world of excitement with record-breaking games, thrilling water park attractions, and captivating art performances. Don’t miss the chance to explore one of the five largest aquariums in the world, home to a stunning variety of marine species. Lunch is on your own – there are plenty of dining options inside the park for you to choose from. 17:00 – Return to your hotel and unwind after a fun-filled day. Overnight in Phu Quoc. Inclusions: Private transfer (no guide), Vin Wonder entrance fee Meals: None"
      ],
      [
        "Day 4",
        "PHU QUOC – VIN SAFARI PARK – GRAND WORLD  – Enjoy breakfast at your hotel. 09:00 AM – Meet your driver (no guide) in the hotel lobby and depart for Vinpearl Safari Park, Vietnam’s largest wildlife conservation park. The sanctuary preserves a rich diversity of over 400 plant species and 4,000 wild animals representing 200 species, including many rare and endangered. Explore the natural habitat and get up close to some of the world’s most fascinating creatures. Lunch on your own at the Safari Park or nearby. Afternoon – Continue your journey to Grand World Phu Quoc, famously known as “The City That Never Sleeps.” Launched in early 2021, this vibrant destination has quickly become a social media sensation. Explore an exciting mix of attractions, including: The Essence of Vietnam Show (ticket on your own) – A mesmerizing performance that blends modern technology with traditional culture, recreating scenes from a thousand-year-old imperial capital. Legend of Bamboo, Contemporary Art Park, Lake of Love, Tropical Dance Square, and the Grand World Food Court, offering diverse experiences from art to cuisine. 17:00 – Return to your hotel. Overnight in Phu Quoc. Inclusions: Private transfer (without guide), Vin Wonder entrance fees, 1 day use Meals: None"
      ],
      [
        "Day 5",
        "PHU QUOC – KISS BRIDGE – KISS OF THE SEA SHOW (B) -; Breakfast in the hotel, then a free day on your own. 17.00. Pick up at the Hotel Lobby or Meeting Points. Coming to the An Thoi area, check in at Sunset Town for the Kiss Bridge and the Kiss of the Sea show 21:00 Transfer back to your hotel. Overnight in Phu Quoc. Inclusions: Private transfer, Entrance fee for Kiss of the sea Meals: None"
      ],
      [
        "Day 6",
        "PHU QUOC – DEPARTURE – Have breakfast at the hotel. Free on your own and check out the hotel before check-out time. 3.5 hours before the departure international flight, our driver will pick you up at the hotel and transfer you to the airport for the flight back home. Hope you enjoyed the trip to Vietnam with sweet memories! Inclusions: Private transfer Meals: None"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "vietnam-coffee-and-pepper-plantation-tour",
    "title": "Vietnam Coffee and Pepper Plantation Tour",
    "location": "Vietnam Coffee and Pepper Plantation",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1052,
    "image": "/assets/international/coffee-cherry-farm-in-guatemala-agricultural-landscape.jpg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "Cam Ranh Arrival – Buan Ma Thuat (225 kms / 5-6 hrs.) Upon your arrival at Cam Ranh international airport, you are warmly welcome by our representative and transfer to the hotel in...",
    "itinerary": [
      [
        "Day 01",
        "Cam Ranh Arrival – Buan Ma Thuat (225 kms / 5-6 hrs.) Upon your arrival at Cam Ranh international airport, you are warmly welcome by our representative and transfer to the hotel in Nha Trang for check-in. You are free at your leisure for relaxing after the long time flight. Overnight at hotel in Nha Trang. Meal Plan: N/A"
      ],
      [
        "Day 02",
        "Coffee Plantation + Pepper Plantation Visit After breakfast at hotel, you will visit Daklak ethnic museum, the first Ede village with its typical long house and stop for a break at Trung Nguyen coffee house, the most famous Vietnamese coffee brand. Continue the orientation tour of Buon Ma Thuot City, come to visit pepper, coffee and other tropical plantation. Visit the local village Ako Dhong of the E-de. Walk around to take photos before return to LAK through a scenic. Finish the tour around 17:00. Savour your dinner at a local restaurant and join in the traditional Gong music dancing show and rice wine drinking with the E-de people. Overnight at hotel in Buon Ma Thuot. Meal Plan: Breakfast"
      ],
      [
        "Day 03",
        "Buan Ma Thuat – Nha Trang (184 kms / 4-5 hrs.) After breakfast at hotel, you come to visit Bao Dai Place. Bao Dai is the last king of the Vietnamese feudal dynasty. Then you transfer back to Nha Trang. This afternoon, you are free at your leisure. Overnight at hotel in Nha Trang. Meal Plan: Breakfast"
      ],
      [
        "Day 04",
        "Nha Trang City Tour After breakfast at hotel, today you have a Nha Trang city tour. Transfer to visit Oceanographic Institute – The institute of oceanography, which was established in 1923, was one of the first centres for scientific research in Indochina. Then drive to Long Son Pagoda – The pagoda that was founded in the late 19th century then renovated in 1940. Located on Trai Thuy hill, it is the largest pagoda in Nha Trang. Every year, tens of thousands of tourists visit the Pagoda to see and praise the 79 feet tall white Buddha statue, Kim Than Phat To, and many other architectural features that the pagoda has offer. Continute to Ponagar Cham Tower – The tower was built the Cham civilization between the 7th and 12th century to honor Yang I Nu Ponagar – mother of the Kingdom. The local Buddhists of Nha Trang use this place for prayer and worshipping and there are many incense lighted giving the place an interesting aroma. The Ponagar tower is a very glorified structure with amazing architectures filling with stunning colours. Chong Rocks – Chong Rocks is a famous sight in Nha Trang city. It is at Hon Chong clump, Vinh Phuoc ward. Chong Rocks of two large rock clusters is located on the beach at the foot of la San hill. All of the rocks lying about in disorder and in the way create a majestic look. Then visit and shopping Dam Market – the largest trading center in Nha Trang. After that, transfer back to hotel. Overnight in Hotel at Nha Trang. Meal Plan: Breakfast"
      ],
      [
        "Day 05",
        "03 Islands Visit 8h30: Pick you up at your hotel or meeting point in Nha Trang city You arrive at Nha Trang Port and start to visit the first attraction – Hon Mun Island. You can enjoy swimming with clear blue water at Hon Mun Island – Mot, and explore the marine life paradise in Nha Trang Bay including shimmering colourful corals and fishes large and small with many beautiful colours. You visit Hon Tam Premium Mud Bath at the Complex of Mud Bathing, Mineral Bath, Swimming Pool, The Largest On Hon Tam Island, In Vietnam (Surcharge for private bath). Have lunch at Restaurant, with fresh seafood dishes on the sea, available at Nha Trang. 16h00: Return to Original Pick Up Point: cruise port Meal Plan: Breakfast + Lunch"
      ],
      [
        "Day 06",
        "Departure After breakfast at hotel check out from hotel and transfer to airport for your onwards journey. Meal Plan: Breakfast"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "vietnam-escape-da-nang-and-hanoi",
    "title": "Vietnam Escape – Da Nang and Hanoi",
    "location": "Vietnam Escape – Da Nang and Hanoi",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 1554,
    "image": "/assets/international/offbeat-vietnam.jpg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "International Tour"
    ],
    "description": "Arrival  Da Nang ( Via – Hanoi/Ho Chi Minh ), Vietnam – Bana Hill tour  with Guide Today you’ll land in Da Nang Airport. Driver at airport then transfer to hotel for check in. Chec...",
    "itinerary": [
      [
        "Day 1",
        "Arrival  Da Nang ( Via – Hanoi/Ho Chi Minh ), Vietnam – Bana Hill tour  with Guide Today you’ll land in Da Nang Airport. Driver at airport then transfer to hotel for check in. Check in time is 14.00–early check in not included. our tour guide will pick you up and start with you on your journey to Bana Hills. Arrival at  cable car station and stand in que for 30 min cable car ride to reach at Bana Hills. Cable car 2 ways Golden Bridge Fantasy park French village Not included entrance fee for Wax Museum..evening come back to hotel, Overnight stay in Danang."
      ],
      [
        "Day 2",
        "Coconut forest – Hoian village Tour (B) After breakfast, you’ll have free time until our driver arrives to pick you up and transfer you to Tan Son Nhat airport   for the flight to Danang.Check in hotel. 3 PM – Coconut forest – Hoian village Tour 6 Hours( Basket boat ticket in coconut forest by own ) Overnight stay in Danang."
      ],
      [
        "Day 3",
        "DaNang – To Hanoi flight. (B) After breakfast, you’ll have free time until our driver arrives to pick you up and transfer you to DaNang airport  for the flight to Hanoi. Arrival Pickup to Hanoi City Tour – Visit The Temple of Literature, Vietnam’s first university ,Hoan Kiem Lake & Ly Thai   Statue. HCM Complex : Ho Chi Minh Mausoleum, One pillar Pagoda, Ba Dinh Square. 3 Hour tour then Check in Hotel. Overnight stay in Hanoi."
      ],
      [
        "Day 4",
        "Full day – Ninh  Binh tour with Guide (B) After breakfast, at 08:30 in the morning, our tour guide will pick you up and start with you on your journey to Ninh Binh 2-2,5 hours driving per way for transfer. Visit Hoa Lu Ancient Capital, 2 hour-boat trip to visit Tam Coc. Evening 6 pm come back to hotel, Overnight Stay in Hanoi."
      ],
      [
        "Day 5",
        "Hanoi. Departure (B) After Breakfast, after check out our car you to Hanoi – Noi Bai airport for departure flight."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "vietnam-northern-charm-island-bliss",
    "title": "vietnam Northern Charm & Island Bliss",
    "location": "vietnam Northern Charm & Island Bliss",
    "duration": "7 Days / 6 Nights",
    "price": "₹97,500 / person",
    "type": "International Tour",
    "category": "Beach & Backwaters",
    "rating": 4.9,
    "reviews": 1345,
    "image": "/assets/international/vietnam-children-tour-the-pearl-island-phu-quoc.jpg",
    "tags": [
      "Beach & Backwaters",
      "7 Days",
      "International Tour"
    ],
    "description": "HANOI ARRIVAL – Welcome to Vietnam! Upon arrival at Noi Bai International Airport (Hanoi), you will be warmly greeted by our private driver and transferred to your hotel in the cit...",
    "itinerary": [
      [
        "Day 1",
        "HANOI ARRIVAL – Welcome to Vietnam! Upon arrival at Noi Bai International Airport (Hanoi), you will be warmly greeted by our private driver and transferred to your hotel in the city center. Note: The official check-in time is 14:00. Early check-in is subject to availability and may incur a surcharge. You have the rest of the day free at your leisure. Suggestion: Discover the charm of Hanoi with a self-guided visit to iconic sites such as: – Hanoi Train Street – St. Joseph’s Cathedral – The Hanoi Opera House – Hoan Kiem Lake and Ngoc Son Temple – Enjoy a panoramic view from the Observation Sky Deck – Wander through the Hanoi Old Quarter – the famous 36 ancient streets by electric car or cyclo – Experience the traditional Water Puppet Show – a unique cultural performance of northern Vietnam Recommendation: For a vibrant local experience, plan to arrive in Hanoi on a weekend, when the Walking Street and Night Market light up the Old Quarter with live music, food stalls, and street performances. Overnight in Hanoi. Inclusions: Private airport transfer Meals: None"
      ],
      [
        "Day 2",
        "HANOI – NINH BINH – HOA LU – TAM COC – CYCLING – HANOI (B/L) – GROUP TOUR Pickup: between 7:30 – 8:00 | End at hotel around 18:30 | Group size: Max 18 pax 07:30 – 08:00 – Our guide will meet you at your hotel and start a 120km modern bus journey through the verdant landscape. Stop over for a rest on the way. 10:30 – Arrive in Hoa Lu, once the ancient capital of Vietnam, dating back to the 11th century. Having been eroded over the millennia, the ruins have nearly been absorbed by the spectacular scenery, creating a mystical atmosphere that will ensure to titillate your imagination. Visit King Dinh and King Le Temples. Cycling around the village for sightseeing & discovering the life of the local people. Enjoy lunch in a restaurant, a great place to savor the intense flavors of Vietnamese food, then go to Tam Coc for a stunning boat trip. 13:00 – Board the sampan boats, owned by locals, gently sailing along Ngo Dong River, capturing the wonderful scenery of Karst hills, rice fields, and peaceful villages, and passing “Hang Ca”, “Hang Hai”, and “Hang Ba”. 16:00 – Get on the shuttle bus to return to Hanoi. 18:00 – 18:30 – Drop off at your hotel in Hanoi Old Quarter. Overnight in Hanoi. Inclusions: Shuttle bus, Local guide, Entrance fees, Cycling, Boat in Tam Coc Meals: Breakfast, Lunch"
      ],
      [
        "Day 3",
        "HANOI – HALONG BAY – OVERNIGHT ON CRUISE (B/L/D) – GROUP TOUR Breakfast at your hotel and check out. 08:30 Depart Hanoi for a 3-hour drive to Ha Long Bay, including a short 20-minute rest stop along the way. Upon arrival at the jetty in Ha Long City around noon, proceed with check-in formalities. Be warmly welcomed aboard. Lunch will be served while cruising into the bay, allowing you to admire the majestic limestone karsts and emerald waters. In the afternoon, enjoy onboard activities, shore excursions, or simply relax on deck and take in the spectacular surroundings. Towards the end of the day, the boat anchors for the night among the stunning rock formations. Dinner is served on board. Overnight on the cruise. Note: The exact cruise itinerary will be confirmed upon selection of the cruise vessel. Inclusions: Shuttle bus, Entrance fees, Room on cruise Meals: Breakfast, Lunch, Dinner"
      ],
      [
        "Day 4",
        "HALONG BAY – HANOI – FLIGHT TO PHU QUOC (B/BRUNCH) – GROUP TOUR We will continue our journey on Halong Bay in the early morning. A Tai Chi Class on the sun deck is a must that you should not miss when on the cruise. Sitting on the upper deck, you can relax and go sightseeing while taking photos of the magnificent beauty of the rocky islands rising from the emerald water of the bay. Join some cruise activities or relax (activities depend on each boat’s itinerary). 10:30 Our boat cruises back to the jetty, and you will enjoy the last moment in the bay before having a traditional Vietnamese brunch. You leave the boat around noon, and we go ashore and take a 3-3.5 hours drive transfer to Hanoi airport for a flight to Phu Quoc. Upon arrival in Phu Quoc, a private transfer will bring you from the airport to your hotel in Phu Quoc. Check in at the hotel and spend your free time on your own. Overnight in Phu Quoc Inclusions: Private airport transfer, Shuttle bus transfer, Local guide Meals: Brunch"
      ],
      [
        "Day 5",
        "PHU QUOC – 4 ISLANDS TOUR BY CABLE CAR AND SPEEDBOAT (B/L) – GROUP TOUR Enjoy breakfast at the hotel. 8:00 Pick up from your hotel, then transfer to the harbor, and board a speedboat. Visit 4 islands in the south: Gam Ghi Island: Snorkeling at the coral reef – Enjoy the beach Buom Island (or Mong Tay Island): Snorkeling at coral reef May Rut Island: white sand lagoon – unique chillout Having Lunch on the Island Sea walker (pay by yourself): a new type of service, walking under the ocean, the fish flocks are swimming & colorful coral reefs of Phu Quoc. Speed boat arrives at Thom Island: Enjoy the water park – more than 20 modern games from the world’s leading manufacturers. Back on the cable car (around 25 mins): Enjoy the sunset & rides with a panoramic overall view of the islands 17:00 Return to your hotel. Overnight in Phu Quoc. Suggestion: On the way back to your hotel, if you wish to visit Sunset Sanato – Oc Sen Beach Bar, Sunset Beach Bar, Night Market, or Sao Beach, we will drop you there, but you will have to pay for the ticket and go back to the hotel by yourself. Note: In case of weather conditions, some islands will change to another island, or the cable car can go before visiting the islands. The time to experience the cable car will be arranged by the tour guide In case of water park maintenance, you can still experience the cable car and continue the journey. Tour price unchanged Inclusions: Shuttle bus, Local guide, Cable car ticket, Speed Boat, Snorkeling, Equipment: mask, snorkel & Fins (Fins not available in child sizes), Life Jackets Meals: Breakfast, Local Lunch"
      ],
      [
        "Day 6",
        "PHU QUOC – VIN WONDER – GRAND WORLD (B) – Breakfast in your hotel. 09:00 AM You meet the driver (without the tour guide) in the lobby, then transfer to Vin Wonders – experiencing Vietnam’s and the world’s record-winning games, waterpark, and art shows, especially visiting one of the five aquariums with the largest marine species. 16:00 Pick you up from Vin Wonders to Grand World, which is known as the city that doesn’t sleep, as its operating hours are all night – a brand new destination, launched in the first half of 2021, and has already gained popularity on a series of social networking sites. When the sun goes down, it’s also time for visitors to enjoy the Essence of Vietnam (gateway ticket is self-sufficient), a large-scale coordinated scene show, combining advanced technology to recreate a thousand-year-old capital city. There are also the Legend of Bamboo, Contemporary Art Park, Lake of Love, Tropical Dance Square, and Grand World Phu Quoc Food Court… waiting for you to explore. 20:00 Return to your hotel. Meals are at your arrangement. Overnight in Phu Quoc. Inclusions: Private transfer (no guide), Vin Wonder entrance fee for 1 day use Meals: Breakfast"
      ],
      [
        "Day 7",
        "PHU QUOC – DEPARTURE (B) – Have breakfast at the hotel. Free on your own and check out the hotel before check-out time. 3.5 hours before the departure international flight, our driver will pick you up at the hotel and transfer you to the airport for the flight back home. Hope you enjoyed the trip to Vietnam with sweet memories! Inclusions: Private transfer Meals: Breakfast"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "vietnam-short-trip-with-hanoi-halong-bay-cruise",
    "title": "Vietnam Short Trip with Hanoi – Halong Bay Cruise",
    "location": "Vietnam Short Trip with Hanoi – Halong Bay Cruise",
    "duration": "4 Days / 3 Nights",
    "price": "₹72,000 / person",
    "type": "International Tour",
    "category": "Honeymoon & Luxury",
    "rating": 4.8,
    "reviews": 1836,
    "image": "/assets/international/northern-and-central-vietnam.jpg",
    "tags": [
      "Honeymoon & Luxury",
      "4 Days",
      "International Tour"
    ],
    "description": "HANOI ARRIVAL (D) Upon arrival at NoiBai International airport, meet by our driver and transfer to hotel for check-in. Then you can free and easy for walking around to explore Hano...",
    "itinerary": [
      [
        "DAY 1",
        "HANOI ARRIVAL (D) Upon arrival at NoiBai International airport, meet by our driver and transfer to hotel for check-in. Then you can free and easy for walking around to explore Hanoi. Overnight at your hotel in Hanoi Dinner at Namaste Restaurant"
      ],
      [
        "DAY 2",
        "HANOI – HALONG BAY (B/L/D) SHARING BUS AND BOAT After breakfast at the hotel, you will leave Hanoi by shuttle bus and arrive at the jetty around noon. The staff will welcome you on board with a refreshing drink followed by a cruise briefing. After lunch, cruise through the magnificent bay, admiring the fascinating rock formations and the crystal clear water. Later explore some of the small islets and relax on a white sandy beach before returning to the junk before dinner. Overnight on board"
      ],
      [
        "DAY 3",
        "HALONG BAY – HANOI (B/L) Start the day with coffee, tea, and breakfast pastries served in the dining room. For those interested, it will be followed by a 30-minute instruction in tai chi on the sundeck. Transfer by tender to the “Day Boat” and sail to some of Halong Bay’s more untouched locales (exact locations depend on tide conditions). Enjoy time kayaking or swimming before a multi-course lunch is served at mid-day. After lunch, return to the harbor and drive back to Hanoi. Overnight at your hotel in Hanoi"
      ],
      [
        "DAY 4",
        "HANOI DEPARTURE (B) Breakfast at hotel then free until your transfer to the airport with driver only for your departure flight. Trip ends. End of services____________"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "srilanka-luxury-golf-escape",
    "title": "Srilanka Luxury Golf Escape",
    "location": "Srilanka Luxury Golf Escape",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Honeymoon & Luxury",
    "rating": 4.7,
    "reviews": 1497,
    "image": "/assets/international/srilanka-luxury-golf-escape.jpeg",
    "tags": [
      "Honeymoon & Luxury",
      "5 Days",
      "International Tour"
    ],
    "description": "Arrival | Colombo–Kandy Meet & assist on arrival at Bandaranaike International Airport Drive to Kandy (approx. 3.5 hours) in a luxury air-conditioned van Optional en-route visit to...",
    "itinerary": [
      [
        "Day 1",
        "Arrival | Colombo–Kandy Meet & assist on arrival at Bandaranaike International Airport Drive to Kandy (approx. 3.5 hours) in a luxury air-conditioned van Optional en-route visit to Pinnawala Elephant Orphanage Check-in at Victoria Golf Resort, Digana Evening at leisure Overnight: Kandy"
      ],
      [
        "Day 2",
        "Golf at Victoria Golf & Country Resort Breakfast at hotel 18-hole round at Victoria Golf & Country Resort (Green fee, caddy & ball spotter included) Afternoon sightseeing in Kandy: Temple of the Sacred Tooth Relic Kandy Lake walk Upper Lake Road viewpoint Optional evening cultural dance show Overnight: Victoria Golf Resort, Digana"
      ],
      [
        "Day 3",
        "Golf & Transfer | Kandy–Colombo Breakfast at hotel Second 18-hole round at Victoria Golf & Country Resort After lunch, drive to Colombo (approx. 4 hours) Check-in at Amari Colombo Overnight: Colombo"
      ],
      [
        "Day 4",
        "Golf at Royal Colombo Golf Club Breakfast at hotel 18-hole round at Royal Colombo Golf Club (RCGC) Afternoon at leisure or optional Colombo city exploration Overnight: Amari Colombo"
      ],
      [
        "Day 5",
        "Departure Breakfast at hotel Transfer to Bandaranaike International Airport ***End of Tour***"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "srilanka-ramayana",
    "title": "Srilanka – Ramayana",
    "location": "Srilanka – Ramayana",
    "duration": "7 Days / 6 Nights",
    "price": "₹97,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 2083,
    "image": "/assets/international/srilanka-luxury-golf-escape.jpeg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "International Tour"
    ],
    "description": "Arrival in Sri Lanka & Clients will be met by our representative on arrival and transferred to Near Hotel for Fresh up (Wash & Change) After the  Breakfast Transfer for to Chilaw t...",
    "itinerary": [
      [
        "Day 01",
        "Arrival in Sri Lanka & Clients will be met by our representative on arrival and transferred to Near Hotel for Fresh up (Wash & Change) After the  Breakfast Transfer for to Chilaw to Visit Munneswaram Temple (Approximately 90 minutes Drive) Muneswaram Temple, Chilaw. * After his victorious battle, Lord Rama left for Ayodhya, in one of King Ravana”s vimana (carriages).He felt he was being followed by bramhaasthi dosham as he had killed King Ravana who was a Brahmin. Legend has it that when he came to this place he felt bramhaasthi dosham was not following him and he stopped the vimana and asked God Shiva for remedy. Lord Shiva blessed Lord Rama and advised him to install four lingams there and pray to get rid of the dosham. Since then many Hindu devotees flock to the Temple. Thereafter proceed to Mannavari Temple. (Approximately 20 Minutes Drive) Manaweri Temple. * Manavari is the first lingam installed and prayed to by Lord Rama and this lingam is also called Ramalinga Shivan. Lunch at outside restaurant Transfer to Sigiriya Check in at the hotel. DINNER & OVER NIGHT STAY AT HOTEL– SIGIRIYA"
      ],
      [
        "Day 02",
        "After breakfast proceed to Trincomalee Trincomalee 165 Miles from Colombo is one of the largest and safest Natural Harbours in the World. Trincomalee is connected by Rail and Road. It has sunny weather throughout the year, with white sandy beaches, calm, placid and warm waters, ideal for underwater activities and for Whale watching.Nilaveli-10 miles away are the finest beach in Trincomalee starting at Uppuveli- 5 miles away extending all the way to Nilaveli. Pigeon Island is a great place for Diving, Snorkeling and sea bathing.There are 7 Hot Spring at Kanniyai just 5 miles away on the Anuradhapura road.Thiriyai Vata-da-ge is 30 miles to the North of Trincomalee and is one of the best monuments in Sri Lanka. Koneshwara Temple According to an inscription found on the doorway to the Fortress this Temple. Destroyed by the Portuguese in the 16 Century A.D. they threw all the columns down to the sea below. Three bronze statues were brought up by divers found among the columns in the sea and are now kept in the modern temple at the same Visit Koneswaram Temple (Shaktipeetam) Trincomalee – Koneswaram Temple Trincomalee- According to an inscription found on the doorway to the Fortress this Temple. Destroyed by the Portuguese in the 16 CenturyA.D. they threw all the columns down to the sea below.Three bronze statues were brought up by divers found among the columns in the sea and are now kept in the modern temple at the same site, within the Dutch Fort in Trincomalee. Lunch at outside restaurant, Return back to Kandy Kandy – The hill capital is another “World Heritage Sites”. It was the last stronghold of the Sinhalese Kings during the Portuguese, Dutch and British rule and finally lost to the British in 1815 after an agreement. To the Buddhist of Sri Lanka and the World, Kandy is one of the most sacred sites as it is the home of the “Dalada Maligawa” – Temple of the Sacred Tooth Relic of Lord Buddha. The Bathing Pavilion (Ulpenge) is by the Lake and in the Center of the lake is the Island called “Kiri samudraya” (Milk white ocean) used by the kings as the summer house. Today it is the center of Buddhism, Arts, Crafts, Dancing, Music and Culture. Visitors can see these Dance & Music at the daily Cultural Performances held at several places in the city. DINNER & OVER NIGHT STAY AT HOTEL– KANDY"
      ],
      [
        "Day 03",
        "After breakfast Transfer to Mahiyanganay. Enjoy a delicious breakfast at your hotel. Today you will visit the following places Mahiyanganaya. Dunuwala& Laggala – Dunuwala (the site where Ravana died) and Laggala (where Ravana prayed to Lord Shankara). The cartels behind the Dunuvila Lake are called Laggala. Laggala is derived from the Sinhala term Ilakka Gala, which when translated into English gives us the meaning “Target Rock”. Laggala served as a sentry point to the King Ravana’s army and it was from this rock the first Glimpse of Lord Rama’s army was sighted. This hill is geographically the highest part of the northern region and on a clear day Thiru Koneshwaran and Talai Mannar can been seen. King Ravana is believed to have meditated on this rock and prayed at Thiru Koneshwaran to Lord Shiva. It is here that King Ravana was killed by Lord Rama’s Brahmaastharam. The top of Laggala is flat and believed to have been hit by the Brahmaastharam. Yahangala Here King Ravana’s body was displayed after his death to allow his countrymen to offer their last respect. Wera Gantota Weragantota was the capital city of King Ravana and means “a place of flying chariot (aircraft) is landing” in Sinhala language. It is believed to be the first place where Sita was brought into Sri Lanka in King Ravana’sVimana. These jungles are the place where the city of Lankapura once stood. The city had a beautiful palace for Queen Mandothari surrounded by waterfalls, streams and varieties of flora and fauna. Sita Kotuwa Sita was kept at Queen Mandodari‘s Palace and later move first to Sita Kotuwa (translated “Sita’s Fort”) and finally to AshokaVatika. The ruins found here are the remnants of later civilizations. Gurulupotha Lankapura Here was a flying chariot (aircraft) repair center known as Gurulupotha. In Valmiki’s depiction King Ravana’s Vimana resembled a huge peacock. The Vimana in Sinhala language means Dhandu Monara which is known as “flying peacock”; hence the name Gurulupotha, which means “parts of birds” . Return back to Kandy Late Lunch at outside restaurant Temple of the Sacred Tooth Relic  – Ever since 4th Century A.D, when the Buddha’s Tooth was brought to Sri Lanka hidden from sacrilegious hands in an Orissan princess’ hair, the Relic has grown in repute and holiness in Sri Lanka and throughout the Buddhist world. It is considered Sri Lanka’s most prized possession. DINNER & OVER NIGHT STAY AT HOTEL– KANDY"
      ],
      [
        "Day 04",
        "After breakfast proceed to Nuwara Eliya,En route visit the Sri Baktha Hanuman Temple, Ramboda Sri Baktha Hanuman Temple, Ramboda – (Approximately 1 ½ Hrs Drive) On these hills of Ramboda where Hanuman was searching for Sitadevi, the Chinmaya mission of Sri Lanka built a temple with Hanuman as the presiding deity. On every full moon day special pooja”s are conducted and witnessed by thousands of devotees. Lunch at outside restaurant Commencing sightseeing in Nuwara Eliya. Nuwara Eliya – The ‘Little England’ of Sri Lanka, is set against beautiful backdrops of Mountains, Valleys, Waterfalls and Tea Plantations. It is supposed to be one of the coolest places in the Island, but it is really just like an English spring day, although the temperature does drop at night. All around Nuwara Eliya you will see evidence of the British influence, houses like country cottages or Queen Ann style mansions. The Victoria Park, in the middle of the town, is a lovely place for a stroll or a picnic and is also good for Birding as you get some rare birds in this Park. Seasons may be absent elsewhere in Sri Lanka, but here you can read them by the flowers, which bloom in the spring (march to May) and the fall (August and September). These are the “seasons” when low-country folk flock to Nuwara Eliya to escape the sea level heat and humidity. Evening visit the Gayathri Pe(e)dam in Nuwara Eliya. Gayathri Pedam It is believed to be the place from where King Ravana”s son Meghanath propitiated Lord Shiva with penance and poojas and in turn was granted super natural powers by lord Shiva. Return to hotel. DINNER & OVER NIGHT STAY AT HOTEL, NUWARA ELIYA."
      ],
      [
        "Day 05",
        "After breakfast proceed to Ella, En route visit Seetha Amman Temple, Seetha Eliya. Seetha Amman Temple, Seetha Eliya. – (Approximately 20 Minutes Drive) The stream that runs from the hill, catered to the needs of Sitadevi during her stay at Ashoka Vatika. She is said to have bathed in this stream. Now there is a temple erected for Lord Rama, Sitadevi, Luxshmana and Hanuman by the side of this stream. It is interesting to note that foot prints akin to Lord Hamunams are found by this river -some  small  and some  large Hakgala Botanical Gardens The Hakgala Botanical Gardens was one of the pleasure gardens of King Ravana. This garden was expanded during the British period and has a wide variety of flowers including an excellent collection of orchids. This is the exotic pleasure garden where King Ravana kept the depressed Sita, insisting that she marries him. It was here where the heartwarming meeting took place between her and Hanuman, who brought her Rama’s ring with the news that Rama was looking for her. He offered to carry her back but she refused saying it would be an insult to Rama’s honor if she did so. Part of this majestic garden still exists. It is also said that Hanuman nearly destroyed it in order to prove to Ravana of the forces against him. Thereafter proceed to Divurumpola situated in Nuwara Eliya Welimada road. Divurmpola (Approximately 1 Hrs Drive) Divurmpola means a place where one takes an oath.  Sitadevi, after being liberated from King Ravana was subjected to a test to prove here chastity by offering herself to the fire. However she came unscathed and proved her holiness during this ritual at this place. Lunch at outside restaurant Ella Ella is a small mountain village near Bandarawela and boasts three locations linked to the Ramayana where local legend claims Ravana was hiding Sita. First there is the Ravana Ella Cave, located at the massive Ella Falls; a breathtaking 1080 feet high waterfall that cascades into several falls. The rocky undergoes of the waterfall is Khondalite, a kind of limestone which undergoes faster decay as hard gneiss or granite. This has resulted in many caves being formed near the falls. King Ravana is said to have lived in one of the caves above the waterfall. A nearby pool bored out of the rock by the gushing waters is where Sita is said to have bathed Ravana. Return Back to Nuwara Eliya DINNER & OVER NIGHT STAY AT HOTEL, NUWARA ELIYA."
      ],
      [
        "Day 06",
        "After breakfast at Bandarawela Hotel proceed to Colombo via Ratnapura and Sitawaka, Aviswsawella.( Approx 197 km & 6 hrs drive) Visit a gem mine at Ratnapura. Ratnapura is the fabled city of gems.  Its name remains unchanged over the years and means “city of gems”.  In Ratnapura prospecting and mining goes on every day.  Visit a gem mine and a museum and strike a bargain at one of the shops. Sitawaka, situated near Avissawella on a tributary of the Kelani Ganga (river).  Not surprisingly it derives its name from Sita, who is supposed to have been imprisoned by Ravana in a grove in this neighborhood. Lunch at outside restaurant, Shopping in Colombo Dinner at outside restaurant. Check in at the hotel. OVER NIGHT STAY AT HOTEL, COLOMBO."
      ],
      [
        "Day 07",
        "After breakfast proceed to Panchamuga Anjaneyar Temple. Panchamuga Anjaneyar Temple. * A temple dedicated to Anjaneyar in Sri Lanka. * This is the only temple in the world to have a chariot of Anjaneyar. Lunch at outside restaurant Thereafter commence a tour of Colombo, which includes time to do the shopping. * Colombo – a drive through the city taking you to the busy commercial areas as well as the tree-lined residential, Cinnamon Gardens. Visit Fort, the former British administrative center and military garrison, Sea Street – the Goldsmith’s quarters in the heart of Pettah, the Bazaar area, where there is a Hindu Temple with elaborate stone carvings, and the Dutch Church of Wolfendhal dating back to 1749. The historic Dawatagaha Mosque and the former Eye Hospital are two buildings in Cinnamon Gardens worth looking at. Also visit the BMICH, see the replica of Avukana Buddha and the Independence Square. Thereafter transfer to the airport for the departure flight. (Approximately 1 Hrs Drive)"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "srilanka",
    "title": "srilanka",
    "location": "srilanka",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 431,
    "image": "/assets/international/srilanka-luxury-golf-escape.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "About Sri Lanka\r\n\r\nWould now be the best time to tell you that Sri Lanka is home to the world’s oldest human planted tree? If this doesn’t reflect the island country’s old-world ch...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "About Sri Lanka\r\n\r\nWould now be the best time to tell you that Sri Lanka is home to the world’s oldest human planted tree? If this doesn’t reflect the island country’s old-world charm, then its timeless ruins and legendary temples certainly will. At the south-east of India, Sri Lanka is home to UNES"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "experience-uzbekistan-tour",
    "title": "Experience Uzbekistan Tour",
    "location": "Experience Uzbekistan",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 882,
    "image": "/assets/international/uzbeks-tashkent-tour.jpg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": " Arrival in Tashkent (Uzbekistan) On your arrival at Tashkent airport, Meet & Greet Service by our representative. After clearing Immigration and baggage pick up, get transferred t...",
    "itinerary": [
      [
        "DAY 1",
        " Arrival in Tashkent (Uzbekistan) On your arrival at Tashkent airport, Meet & Greet Service by our representative. After clearing Immigration and baggage pick up, get transferred to hotel and check in as per naming list. Tashkent City Glimpses tour with the various attractive sightseeing. Dinner at Indian Restaurant with Indian buffet. Night Stay al hotel In Tashkent. Sight Seeing Included: Amir Timor’s Square / Broadway Street / Central Asian Plov Centre (The Plov Center in Tashkent – also called Besh Qozon – is the city’s most popular place to eat plov. Also known as pilaf or pilau, this dish is popular across Central Asia, the Middle East and beyond. However, nowhere does it quite like the Uzbeks). Dinner Included Le Grand Plaza or Similar Room Included: Standard Meals at hotel: CP included only"
      ],
      [
        "DAY 2",
        " Intercity Transfers to Khiva, enroute visit to Urgench. Enjoy buffet breakfast at your hotel’s coffee shop. Later check out and proceed to Tashkent to Khiva via Urgench on private basis. On Arriving Urgench and transfer to Khiva 30 Kms, an ancient capital of Khorezm, (Khwarazma .The Land of the Sun”). Lunch al the Uzbek Local Restaurant. Start your tour by a walk into the splendid historical part of Khiva. Overnight Stay at hotel in Khiva. Breakfast & Dinner included Hotel Muso Tera or Similar Room Included: Standard Meals at hotel: CP included only"
      ],
      [
        "DAY 3",
        " Intercity transfers to Bukhara. Buffet breakfast in the hotel. Time free for leisure. Check out from the Hotel. Enjoy your free time to take a walk through the old streets of lchan – Kala and city walls. Lunch at Local Restaurant. City Sightseeing & Shopping tour in Khiva local bazar. Transfers from the Khiva to Urgench Airport 30 Km, on the Way Dinner at local Uzbek restaurant. Departure from Urgench to Bukhara. Arrival Bukhara Airport meet and Greet Service and Transfers to the hotel Bukara Hotel. Overnight Stay al Bukhara. Breakfast & Dinner included Mercure Bukhara Old Town or Similar Room Included: Standard Meals at hotel: CP included only"
      ],
      [
        "DAY 4",
        " Full Day City Tour of Bukhara 2 Enjoy buffet breakfast al your hotel’s coffee shop. Check-out from Hotel, Spend your Hall day in fascinating Old Bukhara which Is listed by UNESCO as a World Heritage Site. Lunch at Local Uzbek Restaurant. Continue Sight Seeing. Enjoy your Dinner at Local Uzbek Food. Night Stay al hotel in Bhukara. Sight Seeing Included: Toqi Sarrofon Bazaar / The Ark / Poi Kalon Breakfast & Dinner included Mercure Bukhara Old Town or Similar Room Included: Standard Meals at hotel: CP included only"
      ],
      [
        "DAY 5",
        " Full day Bukhara City Tour 1 Enjoy buffet breakfast at your hotel’s coffee shop. Start the second day in Bukhara discovering more attractions. Participation in street festivities, during the day • which will feel the spirit of the holiday on the streets of old Bukhara, visit streets’ and their traditions. Lunch at Local Bukhara Uzbek Restaurant. Then visit Sitorai Mokhi – Khosa – residence of Bukhara’s last Emi~ unique site combining Oriental and other attractions. Enjoy your Dinner of Local food in Restaurant. Night Stay at Bhukara. Sight Seeing Included: Ismail Samani Mausoleum / Lyabi Khauz / Chor Minor Breakfast & Dinner included Mercure Bukhara Old Town or Similar Room Included: Standard Meals at hotel: CP included only"
      ],
      [
        "DAY 6",
        " Intercity Transfers to Samarkand from Bukhara. Enjoy buffet breakfast at your hotel’s coffee shop. Check-out hom Hotel and drive to Samarkand 290 Km (4 Hours) En-route stop and participate in master class of pottery workshop in Gijduvan. Lunch in Gijduvan. Head towards Samarkand. On arrival, transfer to the Hotel and check in. Proceed to Registan Square tour Dinner at Local SAMARKAND Restaurant. Night Stay at Samarkand. Breakfast & Dinner included Hilton Garden Inn Samarkand or Similar Room Included: Standard Meals at hotel: CP included only"
      ],
      [
        "DAY 7",
        " Intercity transfers to Tashkent from Samarkand Enjoy buffet breakfast at your hotel’s coffee shop. Check out from the Hotel. Proceed to Samarkand City Tour of other attractions. Lunch at the Indian Local Restaurant and continuation of the tour in Samarkand: Time for shopping Taur al Boulevard Street walk to Slab national Market, Free time, photo shooting. Back to Tashkent TRAIN #AfROSIAB”. Departure hom Samarkand and reaching Tashkent al station Transfers to Hotel for Check in. Dinner at Indian Restaurant. Night Stay al Tashkent. Breakfast & Dinner Included Le Grand Plaza or Similar Room Included: Standard Meals at hotel: CP included only"
      ],
      [
        "DAY 8",
        " Departure back to Destination Enjoy buffet breakfast al your hotel’s coffee shop. Join Tashkent city tour & shopping tour at more other places. Lunch at Indian restaurant. Transfers to Airport. Arrival in India with unforgettable memories. Sight Seeing Included: Chorsu Bazaar / Hazrat Imam Complex tashkent / Kulkedash Madrassa / Memorial of Repressions Victims Breakfast included."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "uzbeks-tashkent-tour",
    "title": "Uzbeks Tashkent Tour",
    "location": "Uzbeks Tashkent",
    "duration": "4 Days / 3 Nights",
    "price": "₹72,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 936,
    "image": "/assets/international/uzbeks-tashkent-tour.jpg",
    "tags": [
      "Heritage & Nature",
      "4 Days",
      "International Tour"
    ],
    "description": "DELHI-TASHKENT- WELCOMES YOU Arrival in Tashkent and Customs will take about 01 Hour. Check in @ 1400 hrs (standard time) Our Airport Executive will be waiting outside the Airport ...",
    "itinerary": [
      [
        "DAY 1",
        "DELHI-TASHKENT- WELCOMES YOU Arrival in Tashkent and Customs will take about 01 Hour. Check in @ 1400 hrs (standard time) Our Airport Executive will be waiting outside the Airport with Placard. Lunch at Indian Restaurant ( optional) Transfer Restaurant -Hotel by bus/ Check-in to the Hotel ( 1400 HRS ) Transfer for Evening City Tour at 16.00 Hrs Independence Square Tashkent Broadway Amir Temur Square 20:00hrs Transfer to an Indian Restaurant for Dinner( optional) Transfer back to Hotel at 22.00 Hrs"
      ],
      [
        "DAY 2 TASHKENT – CHARVAK – CHIMGAN MOUNTAINS – TASHKENT",
        "Breakfast 07:00 hrs – 10.00 Hrs 00 hrs Visit Charvak and Chimgan mountains about 125 KMS from Tashkent. Nicknamed Switzerland of Uzbekistan, this area is famous with Tashkent residents and guests as a recreational area. Chair lift takes you to the top of the mountain from where you enjoy breathtaking views, you must take some time for photo shooting! 14:30hrs Lunch in Pyramids resort in Chimgan Mountains( optional) 15:30hrs Free time to explore Charvak Artificial Reservoir& You may try your hands on Skiing, Ice skating, Snow Bikes, Horse riding, Local Kebabs with Vodka on your own cost. 18:00hrs Transfer back to Tashkent & Check in, Relax for a while 20:00hrs Transfer to an Indian Restaurant for Dinner( optional) Overnight at Hotel"
      ],
      [
        "DAY 3 TASHKENT FULL DAY CITY TOUR – Magic City",
        "Breakfast 07:00 Hrs -10:00 Hrs 30 Hrs Panoramic City Tour of Beautiful Tashkent, visit: City tour of Tashkent: Monument of Courage” (1969) Romanov Prince Duke” Residence Opera and Ballet Theatre named after Alisher Navoi (outside only) Memorial of Repressions Victims with the traditional ornaments Tashkent TV Tower (outside only) Lunch at Indian restaurants Visit to Magic City Park 1bottles of 1lt of water to be given per pax 20:00hrs Transfer to an Indian Restaurant for Dinner( optional) 23:00hrs Transfer back to the hotel."
      ],
      [
        "DAY4 CHECK OUT – TOUR TO LOCAL MARKET – MEGA MALL",
        "Breakfast 07.00 Hrs – 10.00 Hrs Check out from Hotel @ 12.00 Hrs 1300 to 1930—free Time for shopping on your own. 2000 HRS Transfer to Tashkent International Airport for your onward Journey. Pick up point hotel. Please Note: There might be changes to the above mentioned Itinerary however, smaller might be but it will be aimed to enhance and optimize your experience with us"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "uzbeks-tashkent-with-samarkand-day-tour",
    "title": "Uzbeks Tashkent with Samarkand Day Tour",
    "location": "Uzbeks Tashkent with Samarkand Day",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 1411,
    "image": "/assets/international/uzbeks-tashkent-tour.jpg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "International Tour"
    ],
    "description": "DELHI-TASHKENT- WELCOMES YOU Arrival in Tashkent and Customs will take about 01 Hour. Our Airport Executive will be waiting outside the Airport with Placard. Transfer Restaurant -H...",
    "itinerary": [
      [
        "DAY 1",
        "DELHI-TASHKENT- WELCOMES YOU Arrival in Tashkent and Customs will take about 01 Hour. Our Airport Executive will be waiting outside the Airport with Placard. Transfer Restaurant -Hotel by bus/ Check-in to the Hotel 1400—Standard check in time. (Actual time will be based on actual flight timing.) 20:00hrs Transfer to an Indian Restaurant for Dinner( optional) Transfer back to Hotel at 22.00 Hrs"
      ],
      [
        "DAY 2 TASHKENT – CHARVAK – CHIMGAN MOUNTAINS – TASHKENT",
        "Breakfast 07:00 hrs – 10.00 Hrs 00 hrs Visit Charvak and Chimgan mountains about 125 KMS from Tashkent. Nicknamed Switzerland of Uzbekistan, this area is famous with Tashkent residents and guests as a recreational area. Chair lift takes you to the top of the mountain from where you enjoy breathtaking views, you must take some time for photo shooting! 14:30hrs Lunch in Pyramids resort in Chimgan Mountains( optional) 15:30hrs Free time to explore Charvak Artificial Reservoir& You may try your hands on Skiing, Ice skating, Snow Bikes, Horse riding, Local Kebabs with Vodka on your own cost. 18:00hrs Transfer back to Tashkent & Check in, Relax for a while 20:00hrs Transfer to an Indian Restaurant for Dinner( optional) Overnightat Hotel"
      ],
      [
        "DAY 3 TASHKENT FULL DAY CITY TOUR.",
        "Breakfast 07:00 Hrs -10:00 Hrs 30 Hrs Panoramic City Tour of Beautiful Tashkent, visit: City tour of Tashkent: Monument of Courage” (1969) Romanov Prince Duke” Residence Opera and Ballet Theatre named after Alisher Navoi (outside only) Memorial of Repressions Victims with the traditional ornaments Tashkent TV Tower (outside only) Lunch at Indian restaurants Visit to Magic City Park 1bottles of 1lt of water to be given per pax 20:00hrs Transfer to an Indian Restaurant for Dinner( optional) 23:00hrs Transfer back to the hotel."
      ],
      [
        "DAY 4 TASHEKNT-SAMARKAND DAY TOUR (Bullet train tickets are subjected to availability)",
        "00 Hrs Early buffet breakfast 00 Hrs Transfer to Railway Station for the Bullet Train “Afrosiab” Distance of 350 KMS would be covered in 2.00Hrs only. 10.10 AM arrival at Samarkand Railway Station. Samarkand: Samarkand is the former capital of Great Amir Temur. Samarkand Tours: Registon Square Guri Emir Mausoleum Bibikhanym Mosque Siob Local Bazaar 30 Hrs  Lunch at the Uzbek Restaurant.( optional) 30 Hrs Transfer back to Samarkand Railway station. 00 Hrs Arrive Tashkent and Some time to relax at Hotel. 00 Hrs Transfer to an Indian Restaurant for Dinner( optional) 30 Hrs Transfer Back to Hotel and overnight at Hotel PLEASE NOTE ALL MONUMENTS TO BE SEEN FROM OUTSIDE ONLY. GUEST MAY PAY DIRECTLY AT THE TICKET COUNTERS IF WISH TO SEE MONUMENTS FROM INSIDE."
      ],
      [
        "DAY 5 CHECK OUT – SHOPPING & AIRPORT TRANSFER.",
        "Breakfast 07.00 Hrs – 10.00 Hrs Check out from Hotel @ 11.00 Hrs 1200 hrs—Lunch time( optional) 1300- 1600 hrs —Free time for shopping (own your own, Transfer not booked) 1600 Hrs Transfer to Tashkent International Airport for your onward Journey Note- if guest can do early check out then they can get more time for shopping."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "athens-mykonos-santorini-crete-greece",
    "title": "Athens Mykonos Santorini Crete – Greece",
    "location": "Athens Mykonos Santorini Crete – Greece",
    "duration": "11 Days / 10 Nights",
    "price": "₹1,31,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 402,
    "image": "/assets/international/athens-mykonos-santorini-crete-greece.jpeg",
    "tags": [
      "Heritage & Nature",
      "11 Days",
      "International Tour"
    ],
    "description": "Arrival in Athens (Private) Arrive in Athens and enjoy a private transfer to your 4-star hotel. Settle in and take the evening to explore the vibrant city at your leisure....",
    "itinerary": [
      [
        "Day 1",
        "Arrival in Athens (Private) Arrive in Athens and enjoy a private transfer to your 4-star hotel. Settle in and take the evening to explore the vibrant city at your leisure."
      ],
      [
        "Day 2",
        "Athens Sightseeing  (Seat-in-Coach, Shared) Panathenaic Stadium: Pass by this historic stadium (Kallimarmaro), the only one in the world built entirely of marble, where the first modern Olympic Games were held in 1896. Hellenic Parliament: Drive past the Hellenic Parliament, the seat of Greece’s government, and see the changing of the guard at the Monument to the Unknown Soldier. Also pass by the Prime Minister’s Residence, guarded by the traditionally dressed Euzones. Temple of Olympian Zeus: Admire the towering columns of this once-grand temple dedicated to Zeus, the king of the gods. Hadrian’s Arch: Observe this impressive Roman-era arch, which once marked the boundary between ancient Athens and the Roman city. Academy, University & National Library: Pass by these neoclassical buildings, which represent Greece’s dedication to education and culture. Constitution Square (Syntagma): Drive through the central square of Athens, a hub of political and social activity surrounded by historical buildings. Acropolis: Stop at this legendary site and explore its iconic monuments, including the Parthenon, Propylaea, Temple of Athena Nike, and the Erechtheion. Acropolis Museum: Stop to visit this modern museum showcasing an impressive collection of artifacts and sculptures from the Acropolis. Free Afternoon: Spend the rest of the day at your leisure, exploring Athens on your own."
      ],
      [
        "Day 3",
        "Athens to Mykonos (Private & Shared) After breakfast, enjoy a private transfer from your hotel to the port with a luxury vehicle. Depart from Piraeus Port on a shared ferry to Mykonos. Upon arrival, transfer to your 3-star hotel for check in. The remainder of the day is free for you to explore this unique island."
      ],
      [
        "Day 4",
        "Delos Island Tour (Shared) Embark on a shared boat tour to the archaeological site of Delos. Discover the ancient ruins and learn about the island’s historical significance."
      ],
      [
        "Day 5",
        "Mykonos Leisure (Private) Enjoy a day at your own pace. Relax on the sandy beaches, explore local boutiques, or savor Mykonian cuisine."
      ],
      [
        "Day 6",
        "Mykonos to Santorini (Shared) After breakfast, enjoy a transfer from your hotel to Mykonos’s Port. Depart from Mykonos on a shared ferry transfer to Santorini. Upon arrival, transfer from Santorini’s port to your hotel.Check-in at a 3-star hotel and enjoy a free evening."
      ],
      [
        "Day 7",
        "Free day for Exploration in Santorini (Private) Experience Santorini’s must-see sites, including Oia, Fira, and Pyrgos. Enjoy free time to soak in the island’s unique beauty."
      ],
      [
        "Day 8",
        "Santorini to Heraklion, Crete (Private & Shared) After breakfast, enjoy a transfer from your hotel to Santorini’s port. Depart from Santorini on a shared ferry transfer to Heraklion. Upon arrival enjoy a private transfer from Heraklion port to your hotel. Check-in at a 4-star hotel and enjoy an evening stroll through the historic city center on your own."
      ],
      [
        "Day 9",
        "Knossos Palace (Shared) Explore the legendary Knossos Palace with a guided tour. Learn about Crete’s fascinating Minoan history."
      ],
      [
        "Day 10",
        "Heraklion Leisure & Overnight Ferry to Athens (Private & Shared) Relax or explore Heraklion at your own pace. Consider visiting local markets, beaches, or nearby traditional villages. Enjoy a private transfer from your hotel to the port of Heraklion and then an overnight ferry back to Athens (Piraeus Port)."
      ],
      [
        "Day 11",
        "Athens – Departure Day (Private) Our assistant will meet you at the Port – Ferry Dock, with a luxurious private vehicle and transfer you to the Airport for your departure flight."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "athens-paros-santorini-ios-greece-tour",
    "title": "Athens Paros Santorini Ios – Greece Tour",
    "location": "Athens Paros Santorini Ios – Greece",
    "duration": "7 Days / 6 Nights",
    "price": "₹97,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1555,
    "image": "/assets/international/athens-paros-santorini-ios.jpeg",
    "tags": [
      "Heritage & Nature",
      "7 Days",
      "International Tour"
    ],
    "description": "Arrival in Athens – Piraeus / Paros Upon arrival in Athens International airport transfer to Piraeus port to take the ferry to Paros. Upon your arrival in Paros, transfer to your h...",
    "itinerary": [
      [
        "Day 1",
        "Arrival in Athens – Piraeus / Paros Upon arrival in Athens International airport transfer to Piraeus port to take the ferry to Paros. Upon your arrival in Paros, transfer to your hotel. After check-in at your hotel enjoy a free evening at your leisure."
      ],
      [
        "Day 2-3",
        "Paros Enjoy a day at your own pace Or have an Optional island tour (Private or Shared) Parikia is the capital town of Paros and lies on the northwest side of the island. Nestling amongst this you will come across tiny churches like the church Agios Konstantinos built on top of the ancient temple of the goddess Demeter and the remains of the Frankish castle right at the heart of the old town. Lunch in tavern. The Church of Panagia Ekatontapyliani is one of the oldest, best preserved, and most important churches in Greece. Naoussa is a picturesque town on the north side of the island. Here exist the ruins of a Venetian citadel from the 15th century."
      ],
      [
        "Day 4",
        "Paros to Santorini After breakfast, depending on your time to board the ferry, go to Paros Port. Depart from Paros to Santorini. Upon arrival take a transfer to your hotel. Check-in at a 3-star hotel and enjoy a free evening."
      ],
      [
        "Day 5-6",
        "Santorini Experience Santorini’s must-see sites, including Oia, Fira, and Pyrgos. Enjoy free time soaking in the island’s unique beauty. Or have an Optional island tour (Private or Shared) We will start with Akrotiri Archaeological site. Akrotiri is a Bronze Age settlement on the volcanic island of Santorini (Thera). The settlement was destroyed by a huge eruption during the 17th century BC and buried under the volcanic ash, which preserved the whole city in perfect conditions to be referred often as “Prehistoric Pompei”. We will continue with Red Beach, known for the unique colour of the sand and the hill behind it. We continue with Perivolos black sand beach, one of the longest beaches in Cyclades & the best beach in Santorini, considered as the trendiest beach of the island. We will walk at Megalochori (Walking Tour), one of the most beautiful traditional villages of the island. Enjoy the sunset at the end of the day."
      ],
      [
        "Day 7",
        "Santorini to Ios After breakfast, depending on your time to board the ferry, go to Santorini’s Port. Depart from Santorini to Ios. Upon arrival take a transfer to your hotel. Check-in at a 3-star hotel and enjoy a free evening."
      ],
      [
        "Day 8",
        "Ios Enjoy a day at your own pace Or have an Optional island tour (Private or Shared) Explore the laid-back charm and youthful spirit of Ios. Start your tour in Chora, a maze of whitewashed alleys, blue-domed chapels, and traditional windmills offering panoramic views. Visit Homer’s Tomb, said to be the resting place of the legendary poet, and continue to the picturesque harbor of Gialos. Relax at Mylopotas Beach, one of the most beautiful in the Cyclades, where you can swim in crystal-clear waters or enjoy lunch at a seaside tavern. Experience the perfect mix of culture, history, and island serenity."
      ],
      [
        "Day 9",
        "Ios to Piraeus/Athens After breakfast, depending on your time to board the ferry to Piraeus port"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "azerbaijan-georgia-armenia-tour",
    "title": "Azerbaijan Georgia Armenia Tour",
    "location": "Azerbaijan Georgia Armenia",
    "duration": "12 Days / 11 Nights",
    "price": "₹1,40,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1909,
    "image": "/assets/international/azerbaijan-georgia-armenia-tour.jpeg",
    "tags": [
      "Heritage & Nature",
      "12 Days",
      "International Tour"
    ],
    "description": "PRICES & INCLUDED LIST: SEE LAST PAGE DETAILED TOUR PROGRAM...",
    "itinerary": [
      [
        "DAY 11\tDeparture",
        "PRICES & INCLUDED LIST: SEE LAST PAGE DETAILED TOUR PROGRAM"
      ],
      [
        "Day 1",
        "Baku – Arrival – City Tour Arrive in Baku and transfer to the hotel (check in is possible from 12:00). After a short break, start a guided sightseeing tour of Baku. Walk along Martyrs’ Lane, known as ‘Shehidler Khiyabany’ among locals, and find a beautiful view overlooking Baku’s coastline. Move to Icheri Sheher, the old part of the city. Visit the Shirvanshah’s Palace, Caravanserai, Maiden Tower, and main market square, which has numerous art studios and souvenir stalls. Finish the sightseeing tour by exploring Nizami Street and Fountain Square. Overnight at the hotel. Duration of sightseeing tour: 4-5 hours"
      ],
      [
        "Day 2",
        "Baku – Ateshgah – Heydar Aliyev Centre – Gobustan – Baku After breakfast, drive to Ateshgah, located in the village of Surakhany. Zoroastrians from India used to travel thousands of kilometres to Ateshgah to worship the fire coming out of the earth. Return to Baku to visit the iconic Heydar Aliyev Cultural Centre, which is in a quirky building designed by Iraqi-British architect Zaha Hadid. The Centre showcases examples of a wide spectrum of Azerbaijani culture, with national costumes, musical instruments, and carpets providing a good insight into local craftsmanship. In the afternoon, drive to Gobustan to visit the Petroglyphs Museum and explore petroglyphs dating back to 10,000 BC. The Gobustan Rock Art Cultural Landscape is a UNESCO World Heritage Site. Weather permitting, switch to a 4×4 vehicle and continue to the mud volcanoes (Gobustan is home to almost half of the world’s mud volcanoes). Return to Baku for overnight at the hotel. Duration of sightseeing tour: 8-9 hours"
      ],
      [
        "Day 3",
        "Baku – Gabala – Shamakhi – Lahich – Sheki Breakfast. Depart Baku and drive towards Sheki. Visit Gabala resort. On the way, stop at the Diri Baba Mausoleum in Maraza village. Continue to Shamakhi to visit the historical Juma Mosque, which was restored in 2013. Weather permitting, this will be followed by a scenic drive through the Girdimanchay River Canyon to the 5th century village of Lahich. Lahich is rich in historic and cultural value, with charming cobbled streets. It is famous for its medieval water supply and sewage systems and its many traditional workshops where jewelry, copperware, carpets, pottery, daggers, and iron tools are made. Continue driving to Sheki, a pleasant and easily walkable medieval town set in a lush mountainous area, which is particularly famous for its sweet baklava. Arrive in Sheki at about 19:00 and spend the night at a hotel. Duration of sightseeing tour: 10-11 hours"
      ],
      [
        "Day 4",
        "Sheki – Georgian border – Kvareli – Telavi At 08:30, after breakfast and hotel check-out, visit the colourful Sheki Bazaar. Here, you can find virtually everything you may want to eat, including local fruits and berries, spices, freshly-baked bread, honey, cheeses, and Sheki sweets. Continue to the Sheki Khans Palace, which is surrounded by medieval fortress walls, and then explore the handicrafts workshops and the famous caravanserai. Depart Sheki and head towards the border with Georgia (115 km, ~2 h). Cross the border and start exploring the eastern part of Georgia, which is famous for its viticulture and winemaking traditions. The first stop will be the Khareba Winery, near the town of Kvareli. On the way there, enjoy the picturesque landscapes of vineyards and wine-producing villages. Khareba’s unique wine cellar is in a tunnel carved out of the rock. Originally built for military purposes, today the tunnel is used to store Kakheti’s finest wines. Enjoy a winery tour and a tasting session. Continue to Telavi and check in to your hotel. Overnight at the hotel. Duration of sightseeing tour: 7-8 hours"
      ],
      [
        "Day 5",
        "Telavi – Tsinandali – Sighnaghi – Bodbe – Tbilisi After breakfast, take a short walk through the charming streets of Old Telavi, stopping for photos at the monument to Erekli II and the giant plane tree that is more than 900 years old. Then continue exploring the Kakheti Region by visiting Tsinandali Palace, the former residence of Georgian dukes. Prince Chavchavadze, a 19th century public figure and poet, turned the Estate into what it is today, with a beautiful English-style garden, a museum, and a wine cellar. The next stop is Sighnaghi, the Royal Town and “City of Love”. This city, surrounded by defensive walls with 23 towers, was an important trading center on the Great Silk Road. Continue to Bodbe Convent – according to legend, this is the burial place of St. Nino, who converted Georgia to Christianity in the 4th century. Since 1889, following a decree by Tsar Alexander III of Russia, Bodbe Convent functions as a nunnery. Arrive in the capital of Georgia, Tbilisi. Overnight at a hotel. Duration of sightseeing tour: 6-7 hours"
      ],
      [
        "Day 6",
        "Tbilisi- Jvari-Mtskheta-Tbilisi Breakfast, followed by a sightseeing tour of Tbilisi. Start at Metekhi Church and the monument to Vakhtang Gorgasali, the legendary founder of Tbilisi. Visit Narikala Fortress to enjoy a breathtaking panoramic view of the city. Walk past Tbilisi’s only mosque, down to the sulphur bath house district. Enjoy a stroll through the Sharden area, which is full of narrow streets with cozy cafés, wine bars, and souvenir shops, and breathe in the history of Old Tbilisi. Also visit Sioni Cathedral, Anchiskhati Basilica, and the famous Rezo Gabriadze Theatre’s clock tower, before crossing the Bridge of Peace to Rike Park. Then we will visit Jvari monastery (UNESCO WORLD HERITAGE SITE) After Jvari, visit Mtskheta, one of the oldest towns in Georgia and the country’s cultural and religious centre. Mtskheta was the capital of the eastern Georgian Kingdom of Kartli from the 3rd century BC. Visit Svetitskhoveli, which is the main cathedral of Mtskheta and a sacred place where the robe of Christ is kept. Overnight at a hotel."
      ],
      [
        "Day 7",
        "Tbilisi-Ananuri-Jinvali-Gudauri-Kazbegi-Tbilisi Breakfast. After the hotel breakfast, drive to the direction of Gudauri. On the way visiting Ananuri Fortress which is located directly on the Georgian Military Road. Ananuri was also a former residence of Argveti Dukes, which features churches and towers dating back to the 16th and 17th centuries. Jinvali Reservoir is one of the most beautiful places in Georgia. The lake is surrounded on all sides by green mountains covered with deciduous and pine forests. The most convenient way to admire the views of Jinvali reservoir is from Ananuri Castle. Continue driving towards Gudauri. Stop near The Arch of Friendship for photo shooting. The monument was built together with an observation deck back in 1983 in the name of friendship between the Russian and Georgian peoples. Continue the way to Kazbegi. 4×4 vehicle trip to Gergeti Trinity church (located at an altitude of 2,170m) and enjoy breathtaking views of Mount Kazbegi. Drive back to Tbilisi. Overnight at a hotel."
      ],
      [
        "Day 8",
        "Tbilisi-Georgia-Armenia border-Hagarcin-Sevan-Sevanavank-Yerevan After breakfast drive to the direction of Georgia-Armenia border. On the way to Yerevan visiting Hagarcin Monastery – which is located 18 kilometers from Dilijan, far from populated areas, among dense forests and magnificent mountain landscapes. The name of the monastery from Armenian is translated as “games of eagles”. The image of this proud bird can often be seen on the walls of Hagarcin. Our next stop is lake Sevan sightseeing – Set 1900m above sea level it’s the largest lake in the Caucasus and one of the largest freshwater high-altitude lakes in the world. Its colors and shades change with the weather, forming dazzling azure to dark blue hues, and a thousand shades in between. Savanavak – In the northwest part of Sevan Lake, on a narrow rocky peninsula, there stands one of the most prominent examples of medieval Armenian architecture – Sevanavank Monastery. Today the two black temples of Sevan stand deserted like two guards of this ancient lake. The view from there is simply magnificent: the mountains surround lake from all sides and snow tops are seen almost on the entire perimeter and disappear behind horizon. And behind the horizon of the dark blue open water space shrouded in fog are the green mountain slopes whose tops are covered with snow even in summer. Arrival in Yerevan and overnight."
      ],
      [
        "Day 9",
        "Yerevan – Garni Temple – Geghard Monastery Breakfast. Visiting Garni temple, which towers over a triangular cape, is the unique survived example of heathen culture in Armenia. It is a blend of Greco-Roman and Armenian styles. According to the research of some historians, the temple was created by the Armenian king Trdat I, who ruled in the second half of the 1st century and dedicated it to the Armenian God of Sun – Mihr. After adopting Christianity in 301, the pagan temple lost its significance and the fortress of Garni became the summer residence of the kings. Nowadays the ruins of the royal palace and the bathroom with a stunning mosaic work can be found near the temple. The temple is loved by both local and guests, because the temple is not like other religious monuments in Armenia, and when you are closer, it seems that you are in little Greece with an Armenian spirit. Our next stop is the monastery of Geghard or Gegardavank which is located in a gorge between high suspended rocks, between mountains covered with thick forests. The monastery itself and its cells are carved into the rock and contains a number of churches and tombs, most of them cut into the rock, which illustrate the very peak of Armenian medieval architecture. Drive back to Yerevan."
      ],
      [
        "Day 10",
        "Yerevan-Khor Virap Monastery – Noravank Monastery – Areni Winery-Tbilisi Breakfast. Visiting Khor Virap (Khor means deep, Virap – pit, dungeon) – one of the Armenian shrines, which in ancient times was a famous place of pilgrimage. However, Khor Virap is important for Armenians not only for its connection with Christianity: the monastery is closely associated with the symbol of Armenia. It is from here that the unimaginable view of Mount Ararat opens. Due to circumstances, the symbol of Armenia Ararat today is not in its historic homeland, but in Turkey, and the monastery of Khor Virap is 40 km away from the mountain and from the Turkish border. If you look closely, you can see the border posts of Turkey. The beautiful Noravank Monastery (“Nor” – new, “vank” – monastery) was built in the 13th century and stands majestically in the gorge of the river Arpa, and in the gorge, makes the view even more impressive. The spare lines of the church contrast beautifully with the sharp red rock cliffs, and the dramatic scenery is one of the best reasons to visit Noravank. And our last activity is wine degustation in Areni winery. Drive back to Tbilisi city and overnight in Tbilisi"
      ],
      [
        "Day 11",
        "Departure Check-out from the hotel. Transfer to Tbilisi International Airport. End of the tour."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "azerbaijan-winter-entertainments-tour",
    "title": "Azerbaijan Winter Entertainments Tour",
    "location": "Azerbaijan Winter Entertainments",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 636,
    "image": "/assets/international/azerbaijan-georgia-armenia-tour.jpeg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "International Tour"
    ],
    "description": "Arrival in Baku Landing at the Baku International Airport Clearing immigration and customs, collecting the baggage Meeting with the company representative at the arrivals hall Tran...",
    "itinerary": [
      [
        "Day 1",
        "Arrival in Baku Landing at the Baku International Airport Clearing immigration and customs, collecting the baggage Meeting with the company representative at the arrivals hall Transfer to the hotel (duration: 30-35 minutes) Arrival at the hotel, assistance with check-in process (registration time: 14:00-15:00) Spare time for freshen up Overnight in Baku"
      ],
      [
        "Day 2",
        "Excursion through Baku (6 hours) Sights: Palace of Shirvanshahs, Maiden Tower, Museum of Miniature Books, caravansaries, mosques, baths, Building of Baku City Executive Power, Governor’s Garden, Azerbaijan State Philharmonic Hall, Building of Heydar Aliyev Foundation, Baku Boulevard, Little Venice, International Mugam Center, Carpet Museum in the form of folded carpet, Baku Eye – Ferris Wheel, Crystal Hall, Government House, the symbols of modern Baku – truly iconic Flame Towers with interactive panels, Cultural Center, Congress Hall, Socar Tower, Azersu Building in the form of water droplet, Olympic Gymnastics Arena, Olympic Stadium, upland park – the spectacular place where you can enjoy an unsurpassed view of the city"
      ],
      [
        "Day 3",
        "One-day trip to Shahdag Mountain Resort (10 hours) Get warmer and be ready for real winter with full of entertainment – our today’s road leads to Shahdag that is a favorite place for active leisure fans. Surrounded by the Greater Caucasus, Shahdag Mountain Resort commands a stunning panorama, almost 2,500 meters above sea level. Majestic mountains, brightly shining sun, untold natural beauty – this all can be felt here. You can rent a ski or snowboard. Moreover, if you have not tried before to ski then this is the right time to challenge yourself. All slopes are equipped with modern lifts and the view from them is marvelous. If you are not interested in skiing or snowboarding, there are plenty of other alternative activities such as snow-scooting, snowmobiling, tubing, zip-line, paintball, snow grooming machine tours, ice rink, shooting center, adventure park, horseback, riding, quad tours. Moreover, taste delicious local food at the restaurants, relax in spa, and practice your winter photography and so on."
      ],
      [
        "Day 4",
        "Free day Breakfast at the hotel Free day in Baku that is an excellent opportunity to be acquainted with the country and its way of life, purchase memorable gifts and souvenirs for your loved ones Overnight in Baku"
      ],
      [
        "Day 5",
        "Departure Breakfast at the hotel Time to enjoy the hotel facilities Check-out formalities (standard time: 12:00) Transfer to Baku International Airport (in case of late departure, suitcases can be left in the hotel) Departure"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "city-break-in-athens-greece-tour",
    "title": "City Break in Athens – Greece Tour",
    "location": "City Break in Athens – Greece",
    "duration": "4 Days / 3 Nights",
    "price": "₹72,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1846,
    "image": "/assets/international/city-break-in-athens.jpeg",
    "tags": [
      "Heritage & Nature",
      "4 Days",
      "International Tour"
    ],
    "description": "Arrival in Athens (Private) Upon arrival at Athens International Airport, enjoy a private transfer in a luxury vehicle to your 4-star hotel. After check-in, take the rest of the da...",
    "itinerary": [
      [
        "Day 1",
        "Arrival in Athens (Private) Upon arrival at Athens International Airport, enjoy a private transfer in a luxury vehicle to your 4-star hotel. After check-in, take the rest of the day to relax or explore the city at your leisure."
      ],
      [
        "Day 2",
        "Athens Sightseeing  (Seat-in-Coach, Shared) Panathenaic Stadium: Pass by this historic stadium (Kallimarmaro), the only one in the world built entirely of marble, where the first modern Olympic Games were held in 1896. Hellenic Parliament: Drive past the Hellenic Parliament, the seat of Greece’s government, and see the changing of the guard at the Monument to the Unknown Soldier. Also pass by the Prime Minister’s Residence, guarded by the traditionally dressed Euzones. Temple of Olympian Zeus: Admire the towering columns of this once-grand temple dedicated to Zeus, the king of the gods. Hadrian’s Arch: Observe this impressive Roman-era arch, which once marked the boundary between ancient Athens and the Roman city. Academy, University & National Library: Pass by these neoclassical buildings, which represent Greece’s dedication to education and culture. Constitution Square (Syntagma): Drive through the central square of Athens, a hub of political and social activity surrounded by historical buildings. Acropolis: Stop at this legendary site and explore its iconic monuments, including the Parthenon, Propylaea, Temple of Athena Nike, and the Erechtheion. Acropolis Museum: Stop to visit this modern museum showcasing an impressive collection of artifacts and sculptures from the Acropolis. Free Afternoon: Spend the rest of the day at your leisure, exploring Athens on your own."
      ],
      [
        "Day 3",
        "Athens – A Day of Discovery and Leisure (Private) Spend the day at your leisure exploring Athens at your own pace. Discover the city’s historical treasures, visit museums, enjoy local cuisine at traditional tavernas, or indulge in shopping in the city’s vibrant districts. Take this opportunity to experience Athens in your own unique way."
      ],
      [
        "Day 4",
        "Departure from Athens (Private) After breakfast, enjoy a private transfer in a luxury vehicle to Athens International Airport for your departure. Reflect on the memorable experiences of your Athens city break as you journey home."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "croatia-gems-tour",
    "title": "Croatia Gems Tour",
    "location": "Croatia Gems",
    "duration": "9 Days / 8 Nights",
    "price": "₹1,14,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 794,
    "image": "/assets/international/croatia-gems-tour.jpeg",
    "tags": [
      "Heritage & Nature",
      "9 Days",
      "International Tour"
    ],
    "description": "Welcome to Croatia! On arrival at Zagreb Airport, you will be met and transferred to your hotel. Zagreb, the capital of Croatia, is known for its historical museums and cultural ev...",
    "itinerary": [
      [
        "DAY 1\tARRIVE ZAGREB | WALKING TOUR OF ZAGREB",
        "Welcome to Croatia! On arrival at Zagreb Airport, you will be met and transferred to your hotel. Zagreb, the capital of Croatia, is known for its historical museums and cultural events. It has many fine sights, plenty of restaurants, cafes and bars and lots of entertainment. Enjoy your stay and explore the main spots on your guided walking tour of Zagreb with a scenic funicular ride. Feel the pulse of the city and embrace all the charm Zagreb has to offer. Get acquainted with the past and the present that will show you the hidden gems of the Croatian capital. Discover Lower and Upper Town and experience the true stories that shaped Zagreb into the city it is today. You have an opportunity to add in an optional activity like the Zagreb Eye Observation Deck. Enjoy panoramic views of the city from the Observation deck on the 16th floor of a skyscraper. Overnight stay in ZAGREB Meal: –"
      ],
      [
        "DAY 2\tZAGREB | OPTIONAL DAY TRIP TO SLOVENIA",
        "Spend the day at leisure on your own. We recommend you take an optional Day Trip to Ljubljana and Lake Bled OR Excursion to Varazdin and Trakoscan Castle. Discover the gems of Slovenia on this exciting day trip from Zagreb. Start the day visiting the capital city of Ljubljana – an enchanting town. Continue with a getaway to the nature and enjoy mesmerizing views of Lake Bled and the castle of Bled. (NOTE: You need to be in possession of a multiple entry Schengen visa to visit Slovenia) Overnight stay in ZAGREB Meal: Breakfast"
      ],
      [
        "DAY 3\tZAGREB –PLITVICE | VISIT PLITVICE NATIONAL PARK (425KMS – 5HRS)",
        "This morning travel to Plitvice and check into your hotel. Enjoy a tour of Plitvice National Park Plitvice National Park is renowned for its dramatic waterfalls, glittering lakes, and lush forested cliffs. It is Croatia’s best-known national park and one of eight that is listed on the UNESCO list of World Heritage sites. The ticket offers you full access to the park’s hiking trails and boardwalks, a ride on the park’s panoramic train, shuttle buses between the Upper and Lower Lakes, and an electric boat cruise around Kozjak Lake. Overnight stay in PLITVICE Meal: Breakfast"
      ],
      [
        "DAY 4\tPLITVICE – ZADAR (150KMS – 2HRS) | WALKING TOUR OF ZADAR",
        "This morning proceed to Zadar, a city of exceptional history and rich cultural heritage. Later enjoy a guided walking tour of Zadar During the walk you will see the Old City, stop by the Church of St. Donat that lies on the ancient Roman forum built from the 1st century BC to the 3rd century AD, Cathedral of St. Anastasia, Sea Gate, Land Gate, City Walls and the Square of Five Wells also included is free tasting of Maraschino liqueur and Pag cheese for you. At the end of the tour you can take your time listening to the unique sound of the Sea organ. Later this evening, we recommend you experience the most beautiful sunset in the world on an optional Romantic Sunset Cruise. Overnight stay in ZADAR Meal: Breakfast"
      ],
      [
        "DAY 5\tZADAR – SPLIT (160KMS – 2HRS) | SPLIT WALKING TOUR",
        "Today, continue your journey to Split, also known as a city of various events which makes it one of the most interesting and attractive cities to visit. Later this evening, enjoy a guided walking tour of Split. Discover the 1700-year-old Diocletian Palace in the modern city of Split. Unveil the hidden secrets and gain insight into this ancient city’s colorful past. Admire the famous landmarks such as the Catholic Cathedral of Saint Domnius, the Peristil, the Golden Gate and the statue of Gregory of Nin — a medieval Croatian bishop. Later, see 24-hour “sun” clock at the City Square and the Riva promenade. Overnight stay in SPLIT Meal: Breakfast"
      ],
      [
        "DAY 6\tSPLIT | BLUE LAGOON – 3 ISLAND TOUR",
        "Today, set off on a relaxing and refreshing excursion to the Blue Lagoon – 3 Island Tour. Enjoy panoramic views of Split and its surroundings as you travel by boat to the beautiful UNESCO protected world heritage town of Trogir. Get lost in its small stone streets and learn about the 4000 years old historical sites and monuments. Next, visit the Blue Lagoon by speedboat. Spend time swimming or snorkelling on small, hidden, untouched beaches, and take the opportunity to click amazing photographs. The last stop tour is the picture-perfect small island Šolta. Here, visit the fishing village of Stomorska and enjoy free time for swimming, relaxing and exploring this island. UPGRADE YOUR TOUR: You have an opportunity to upgrade your Blue Lagoon tour to a full day Blue Cave Tour at an additional cost. Explore some of the most beautiful Adriatic islands: Biševo, Vis, Pakleni islands, Hvar and Brač on a full day Blue Cave – 5 Island tour (weather permitting). Begin the tour with a visit to the Blue Cave – one of the most beautiful spots on the Adriatic. Arrive exactly when the sunlight reflects through the sea floor and bathes the entire cave in aquamarine light. Next, enjoy a small coffee break at Komiza, a fisherman’s village on the island of Vis. Stop briefly in the bay of Stiniva and enjoy swimming. Enroute, visit the small caves carved by the sea into the cliffs of island Vis. Arrive at Stončica bay, enjoy swimming and sun-bathing on the sandy beach. Enroute to beautiful island of Hvar, enjoy panoramic view of the Pakleni islands. Hvar town is one of the most beautiful harbors in the world, and a rich cultural heritage center as well. End your tour with a visit to the beautiful Brač island for swimming. Overnight stay in SPLIT Meal: Breakfast"
      ],
      [
        "DAY 7\tSPLIT – DUBROVNIK | WALKING TOUR OF DUBROVNIK",
        "Check out and travel to Dubrovnik. which lies on the edge of the Adriatic Sea. It has been rightly nick named as the ‘The Pearl of the Adriatic’ Later, explore Dubrovnik on a guided walking tour and enjoy a Cable Car ride. Explore around the Old Town discovering Dubrovnik’s past and present. Get mesmerised by architectural treasures, artistic intensity and its cultural opulence. Take the Dubrovnik Cable Car and enjoy breath taking views of the Old City and the Adriatic Sea from the top of the Srd Hill. Overnight stay in DUBROVNIK Meal: Breakfast"
      ],
      [
        "DAY 8\tDUBROVNIK | CHOICE OF ANY ONE OF THE THREE TOURS",
        "Choose any one of the 3 tours. Day Trip to Bosnia & Herzegovina OR Montenegro OR Elaphiti Islands. (NOTE: Guest travelling only on SIC will do the Dubrovnik Walking tour a day prior and, on this day, they will choose from any one of the below mentioned 3 options. Guests travelling on Private Tours will do the Dubrovnik Walking Tour and Cable Car on this day). Spend a day exploring Bosnia and Herzegovina, visit the UNESCO-listed city of Mostar, a city with a rich history. See the Ottoman–era mosques and bathhouses; explore the cobbled stone streets and one of the wonders of the modern world, the spectacular Mostar Bridge. OR Discover the beauty of Montenegro, exploring the coastal towns of Kotor and Budva. Cross the valleys of Dubrovacka and Konavle and discover the magnificent bay of Kotor. (NOTE: You need to be in possession of a multiple entry Schengen visa to visit Montenegro) OR Set out to explore the sunny Elaphiti Islands, see the three most beautiful islands – Kolocep, Lopud and Sipan and enjoy a day swimming in crystal clear sea. Overnight stay in DUBROVNIK Meal: Breakfast"
      ],
      [
        "DAY 9\tDEPART DUBROVNIK",
        "Your trip concludes with a departure transfer to Dubrovnik Airport. Thank you for visiting Croatia! We hope you have enjoyed your vacation and wish you a safe journey back home. Meal: Breakfast END OF SERVICES"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "eastern-europe-tour",
    "title": "Eastern Europe Tour",
    "location": "Eastern Europe",
    "duration": "10 Days / 9 Nights",
    "price": "₹1,23,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 2059,
    "image": "/assets/international/europe-tour-swiss-paris-brussels-amsterdam.jpeg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "International Tour"
    ],
    "description": "Szentendre day trip...",
    "itinerary": [
      [
        "Day 6\tBudapest",
        "Szentendre day trip"
      ],
      [
        "Day 8\tBratislava – Vienna – Departure",
        "ITINERARY"
      ],
      [
        "Day 1",
        "Arrival in Vienna – A Charming Welcome and Musical Evenings Upon arrival in Vienna, your European adventure begins! You will be greeted at the airport and transferred to your hotel for check-in. After settling in, take a leisurely stroll through Vienna’s historic streets, soaking in the charming atmosphere and iconic. In the evening, let the enchanting melodies of a transport you to another time. After the concert, indulge in a delectable dinner at an Indian restaurant. Overnight at a hotel in Vienna."
      ],
      [
        "Day 2",
        "Discover Vienna’s Imperial Legacy After breakfast, set out to explore Vienna’s rich history and culture. Visit the majestic Schönbrunn Palace and wander through its beautiful gardens. Continue to St. Stephen’s Cathedral, one of the city’s most iconic landmarks. In the afternoon, visit the Vienna State Opera and admire its grand architecture. End the day with a relaxing evening enjoying dinner at an Indian restaurant. Overnight in Vienna."
      ],
      [
        "Day 3",
        "Vienna to Prague – A Journey with Surprises  Start your day with breakfast at the hotel before departing for Prague. Enjoy a scenic ride through the picturesque Austrian and Czech countryside visiting a small yet beautiful town Český Krumlov before resuming our journey. Upon arrival in Prague, check into your hotel and take some time to relax. In the evening, explore Prague’s Old Town and its stunning architecture, including the Astronomical Clock and Charles Bridge. Cap off the day with a sumptuous dinner and soak in the vibrant Prague nightlife. Overnight in Prague."
      ],
      [
        "Day 4",
        "Exploring Prague’s Historic Treasures Start your day with a hearty breakfast before experience a thrilling Nuclear Bunker Tour, followed by an Indian lunch. Post that, explore the grandeur of Prague Castle, and spend the early evening shopping before we start our journey with a serene Vltava River Cruise, savoring a coffee or beer as you glide past iconic landmarks like the Charles Bridge. Afterward, stroll through the city’s cobblestone streets and enjoy dinner at an Indian restaurant to complete your magical day."
      ],
      [
        "Day 5",
        "Prague to Budapest – A Day of Majestic Views Start the day with breakfast at the hotel before embarking on a journey to . The site offers a variety of picturesque trails that wind through meadows, ponds, and forests. After a refreshing break we resume our journey to Budapest. Upon arrival, check into your hotel and take some time to relax. Evening at leisure, perhaps with some shopping or relaxation. Conclude your long journey with a delightful dinner. Overnight in Budapest."
      ],
      [
        "Day 6",
        "Budapest – Szentendre Serenity and Adventure Explore the artistic and natural beauty of Margaret Island, followed by a guided tour of the serene village of Szentendre. Enjoy an Indian lunch before leaving for Buda Castle then spend your evening at scenic river cruise complete with Hungarian folklore performances. Relish dinner on board, experiencing the magic of Budapest’s illuminated skyline. Overnight in Budapest."
      ],
      [
        "Day 7",
        "Budapest to Bratislava- A Day of Majestic Views Following breakfast, depart from Budapest and head to Bratislava, Slovakia’s capital. Upon arrival, enjoy delicious Lunch before we check-in to hotel. Relax before we explore the city’s unique mix of medieval and modern architecture. Visit Bratislava Castle for panoramic views of the city and the Danube River. Evening at leisure, perhaps with some shopping or relaxation. Conclude your Bratislava experience with a delightful dinner. Overnight in Bratislava."
      ],
      [
        "Day 8",
        "Return to Vienna and Departure After breakfast, journey back to Vienna for your departure. Finally, you will be transferred to the airport for your journey home, carrying with unforgettable memories from your Central European adventure."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "europe-tour-london-to-italy",
    "title": "Europe Tour – London to Italy",
    "location": "Europe  – London to Italy",
    "duration": "17 Days / 16 Nights",
    "price": "₹1,82,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 814,
    "image": "/assets/international/europe-tour-london-to-italy.jpeg",
    "tags": [
      "Heritage & Nature",
      "17 Days",
      "International Tour"
    ],
    "description": "Itinerary details:...",
    "itinerary": [
      [
        "Day 16\tRome\tDeparture",
        "Itinerary details:"
      ],
      [
        "Day 1",
        "Arrival in London, UK Arrive in London: Upon arrival at Airport, you will be your hotel in the city. Check-in and Relax: After checking into your hotel, relax and unwind from your journey. Evening at Leisure: Spend the evening at leisure, perhaps taking a stroll around or enjoying dinner at a local restaurant. Overnight Stay: Rest up for a day of exploration tomorrow."
      ],
      [
        "Day 2",
        "London City Tour – Changing of the Guard, Buckingham Palace, London Eye, Tower Bridge, Trafalgar Square Breakfast at the Hotel: Start your day with breakfast at the hotel. Morning: Begin your London City Tour with a visit to Buckingham Palace to witness the Changing of the Guard ceremony. This iconic event happens in the morning, and you will get the chance to see the Guards in their ceremonial uniforms marching to the palace. Late Morning to Early Afternoon: Next, head to Trafalgar Square, home to Nelson’s Column, and explore the area, which is a hub of London’s cultural and historical landmarks. Then, make your way to the London Eye, the giant Ferris wheel located on the South Bank of the Thames, for panoramic views of the city. Afternoon: After the London Eye, proceed to the Tower Bridge. Visit the bridge and enjoy the fantastic views from the walkways. Learn about its history and importance as a symbol of London. Explore the nearby , where you can see the Crown Jewels and experience the fascinating history of this historic fortress. Evening: After the tour, enjoy some free time to wander around Covent Garden, or relax in a cafe. Overnight Stay: Return to your hotel and relax for the night."
      ],
      [
        "Day 3",
        "Stonehenge, Bath & Windsor Castle – Countryside Tour from London Full-Day Countryside Tour: After breakfast, embark on a full-day tour to Stonehenge, Bath, and Windsor Castle. Stonehenge: Start the day with a visit to the mysterious Stonehenge, a UNESCO World Heritage site. Explore the stone circle and learn about its prehistoric significance. Bath: Next, head to the historic city of Bath, famous for its Roman Baths and Georgian architecture. Visit the Roman Baths and the stunning Bath Abbey. Windsor Castle: Conclude the day with a visit to Windsor Castle, the official residence of the British royal family. Return to London: After the tour, return to London for the evening. Overnight Stay: Rest for the night at your hotel."
      ],
      [
        "Day 4",
        "Transfer to Amsterdam, Netherlands – Amsterdam City Tour & Canal Cruise Morning: After breakfast, check out from your hotel in London and transfer to Amsterdam. Arrival in Amsterdam: Upon arrival in Amsterdam, check into your hotel and relax. Amsterdam City Tour: In the afternoon, embark on a guided city tour of Amsterdam Canal Cruise: In the evening, enjoy a relaxing canal cruise, sailing through Amsterdam’s while taking in the beautiful views of historic buildings and bridges. Overnight Stay: Return to your hotel and enjoy a restful night."
      ],
      [
        "Day 5",
        "Zaanse Schans Windmill Tour from Amsterdam Breakfast at the Hotel: Start the day with breakfast. Day Tour to Zaanse Schans: Explore the traditional Dutch village of Zaanse Schans, famous for its working windmills. Visit windmill museums and learn about the history of Dutch craftsmanship, including wooden clogs and cheese-making. Return to Amsterdam: After the tour, return to Amsterdam and enjoy some free time to explore further or shop. Overnight Stay: Rest for the night."
      ],
      [
        "Day 6",
        "Brussels, Belgium – City Tour Morning Transfer to Brussels: After breakfast, start your journey to Brussels Upon arrival, check into the hotel and relax a while. Brussels City Tour: embark on a guided city tour of Brussels. Visit the iconic places of the city and discover the beautiful squares, historic buildings, and Art Nouveau architecture. Evening at Leisure: You can visit chocolate shops around and spend your time leisurely. Overnight Stay: Stay overnight in Brussels."
      ],
      [
        "Day 7",
        "Transfer from Brussels to Paris, France – Eiffel Tower & Seine River Cruise Morning: After breakfast, depart from Brussels and head to Paris. Arrival in Paris: Upon arrival, check into your hotel. Eiffel Tower: In the evening, head to the Eiffel Tower for panoramic views of Paris. Seine River Cruise: Enjoy a scenic Seine River Cruise to see the city’s famous landmarks illuminated at night, such as Notre Dame and the Louvre. Overnight Stay: Rest at your hotel in Paris."
      ],
      [
        "Day 8",
        "Paris – Louvre Museum, Notre Dame, Montmartre & Sacré-Cœur Morning: Visit the iconic Louvre Museum, home to famous artworks like the Mona Lisa and Venus de Milo. Afternoon: Explore Notre-Dame Cathedral, then head to Montmartre, known for its bohemian atmosphere. Visit Sacré-Cœur Basilica for breathtaking views of Paris. Evening: Take some time to wander through the nearby places and enjoy the evening lights. Overnight Stay: Stay in Paris."
      ],
      [
        "Day 9",
        "Arrival in Zurich, Switzerland Morning: After breakfast, check out from your Paris hotel and head to Zurich. Arrival in Zurich: Upon arrival, check into your hotel and relax. Free Day in Zurich: Spend the evening exploring Zurich’s Old Town (Altstadt), stroll along Bahnhofstrasse for shopping or spend your free time relaxingly. Overnight Stay: Stay overnight in Zurich."
      ],
      [
        "Day 10",
        "Jungfraujoch – Top of Europe from Zurich Day Tour to Jungfraujoch: Enjoy a full-day excursion to Jungfraujoch, the “Top of Europe.” Travel by train to the highest railway station in Europe, and enjoy stunning views of the Aletsch Glacier and surrounding peaks Return to Zurich: After the tour, return to Zurich in the evening. Overnight Stay: Stay overnight in Zurich."
      ],
      [
        "Day 11",
        "Rhine Falls, Zurich City Tour & Zurich Cruise Morning: Visit the magnificent Rhine Falls, Europe’s largest waterfall, located near Schaffhausen. Take a boat ride to get up close to the falls and enjoy the breathtaking scenery. Zurich City Tour: In the afternoon, return to Zurich for a guided city tour. Visit landmarks like Grossmünster Church, the Felsenegg viewing point, and enjoy a scenic Zurich Lake cruise. Overnight Stay: Stay overnight in Zurich."
      ],
      [
        "Day 12",
        "Munich, Germany – City Tour Morning Transfer to Munich: After breakfast, take a train to Munich (around 4 hours). Munich City Tour: Upon arrival, take a guided city tour of Munich, Visit the landmarks with the guide and experience vibrant atmosphere. A city tour of Munich offers a perfect blend of historical landmarks, impressive architecture, and modern attractions. Overnight Stay: Stay in Munich."
      ],
      [
        "Day 13",
        "Transfer to Venice, Italy – Via Salzburg City Tour Morning: Depart Munich for Venice, stopping in Salzburg for a city tour. Salzburg Tour: Salzburg, is the birthplace of Mozart and a UNESCO World Heritage site, is a city full of charm, history, and culture. From its Baroque architecture to its musical heritage, Salzburg offers a perfect blend of historical landmarks, stunning views, and artistic treasures. Arrival in Venice: Continue your journey to Venice, arriving in the evening. Check into your hotel. Overnight Stay: Rest in Venice."
      ],
      [
        "Day 14",
        "Venice – Gondola Ride Morning: After the breakfast start your day Gondola Ride is through Venice’s picturesque canals. Enjoy the tranquil atmosphere as you float past historic buildings and under charming bridges. Overnight Stay: Stay overnight in Venice."
      ],
      [
        "Day 15",
        "Rome – Colosseum & Vatican City Tour Morning: After breakfast, transfer to Rome. Rome City Tour: Begin your Roman adventure with a visit to the Colosseum, Roman Forum, and Palatine Hill. Learn about ancient Rome’s grandeur and history. Vatican City: Visit Peter’s Basilica, and the Vatican Museums, home to incredible art collections including the Sistine Chapel. Overnight Stay: Stay in Rome."
      ],
      [
        "Day 16",
        "Departure from Rome Morning: After breakfast, check out from your hotel and head to Airport for your flight home. End of Tour: Depart Rome with wonderful memories of your European adventure."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "europe-tour-swiss-paris-brussels-amsterdam",
    "title": "Europe Tour – Swiss Paris Brussels Amsterdam",
    "location": "Europe  – Swiss Paris Brussels Amsterdam",
    "duration": "10 Days / 9 Nights",
    "price": "₹1,23,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 798,
    "image": "/assets/international/europe-tour-swiss-paris-brussels-amsterdam.jpeg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "International Tour"
    ],
    "description": "Embark on an Enchanting European Odyssey...",
    "itinerary": [
      [
        "Day 9\tDeparture from Amsterdam",
        "Embark on an Enchanting European Odyssey"
      ],
      [
        "Day 1",
        "Arrival in Zurich – Gateway to Swiss Splendor Welcome to Zurich, a city where modernity meets medieval charm. Upon arrival, transfer to your hotel and settle in. Spend the day exploring and picturesque Old Town. In the evening, enjoy a relaxing dinner and prepare for the adventures ahead. Overnight in Zurich."
      ],
      [
        "Day 2",
        "Zurich Highlights with a Sweet Twist Begin your day with a delightful Zurich city tour, taking in the iconic Bahnhofstrasse and Lake Zurich. Afterward, enjoy a serene cruise on Lake Zurich. Conclude the day with a visit to the Lindt Home of Chocolate, where indulgence meets Swiss tradition. Overnight in Zurich."
      ],
      [
        "Day 3",
        "Jungfraujoch – Journey to the Top of Europe Embark on an unforgettable excursion to Jungfraujoch, the highest railway station in Europe. Marvel at panoramic Alpine views, stroll through the Ice Palace and soak in the grandeur of the Swiss Alps. Return to Zurich for a cozy evening. Overnight in Zurich."
      ],
      [
        "Day 4",
        "Rhine Falls & Stein am Rhein – A Symphony of Nature and History Visit the majestic Rhine Falls, Europe’s largest waterfall, and be captivated by its roaring beauty. Continue to Stein am Rhein, a charming medieval town renowned for its colorful frescoed buildings. Return to Zurich for your final Swiss evening. Overnight in Zurich."
      ],
      [
        "Day 5",
        "Paris Awaits – Evening Romance by the Seine Bid farewell to Zurich as you journey to Paris, the City of Light. Upon arrival, check into your hotel and unwind. In the evening, ascend the Eiffel Tower for breathtaking views and enjoy a magical Seine River cruise under the starlit Parisian sky. Overnight in Paris."
      ],
      [
        "Day 6",
        "Parisian Wonders – Art, Architecture, and Atmosphere Discover Paris’s cultural gems, starting with the Louvre Museum’s masterpieces. Explore the historic Notre-Dame Cathedral, followed by the bohemian charm of Montmartre and the serene beauty of Sacré-Cœur Basilica. Savor a delightful dinner to complete your Parisian day. Overnight in Paris."
      ],
      [
        "Day 7",
        "From Paris to Amsterdam via Brussels Travel to Brussels for a captivating city tour, exploring landmarks like the Atomium and Grand Place. Continue to Amsterdam, where canals and culture await. Check into your hotel and relax after your scenic journey. Overnight in Amsterdam."
      ],
      [
        "Day 8",
        "Amsterdam – Windmills and Waterways Begin with a visit to Zaanse Schans, a picturesque village featuring iconic Dutch windmills. In the evening, enjoy a canal cruise through Amsterdam’s illuminated waterways, soaking in the city’s charm from the water. Overnight in Amsterdam."
      ],
      [
        "Day 9",
        "Departure from Amsterdam – Fond Farewell After breakfast, transfer to the airport for your departure, carrying cherished memories of Zurich, Paris, and Amsterdam. Safe travels!"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "europe",
    "title": "europe",
    "location": "europe",
    "duration": "12 Days / 11 Nights",
    "price": "₹1,40,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1082,
    "image": "/assets/international/europe-tour-swiss-paris-brussels-amsterdam.jpeg",
    "tags": [
      "Heritage & Nature",
      "12 Days",
      "International Tour"
    ],
    "description": "ARRIVE IN PARIS DAY HIGHLIGHTS: ARRIVE AT PARIS| ILLUMINATION TOUR OF PARIS Greetings! Today we embark on our flight to one of the most romantic and captivating cities in the world...",
    "itinerary": [
      [
        "DAY 01",
        "ARRIVE IN PARIS DAY HIGHLIGHTS: ARRIVE AT PARIS| ILLUMINATION TOUR OF PARIS Greetings! Today we embark on our flight to one of the most romantic and captivating cities in the world – Paris, the capital of France. Upon arrival at Paris Charles de Gaulle Airport and completion of immigration and customs formalities, transfer and check-in at your hotel (Standard Check-In Time: 1500 Hrs). Take some time to relax at your hotel and get ready to experience the charm, art, and allure that make Paris truly unforgettable. Later in the evening, delight in the enchanting illumination tour of Paris – a magical journey through the heart of Paris as night falls, unveiling the City of Lights in all its illuminated splendor. The Illumination Tour of Paris, also known as “Paris by Night,” is a captivating experience that transforms the city into a mesmerizing spectacle. As darkness descends, iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, Louvre Museum, and countless bridges and boulevards come alive with a dazzling display of lights, casting a romantic and enchanting ambiance. Note: Transfers will be in accordance with the group schedule; otherwise, clients are required to manage their own transfers to the hotel. Dinner Overnight in Paris"
      ],
      [
        "DAY 02",
        "PARIS DAY HIGHLIGHTS: GUIDED CITY TOUR | EIFFEL TOWER 3RD LEVEL | SEINE RIVER CRUISE Today after Breakfast, proceed on a captivating, guided tour of Paris with our Professional English Speaking local Guide, where you’ll be enchanted by the city’s most illustrious landmarks. Admire the grandeur of Place Vendome, the opulence of Place de l’Opéra Garnier, the artistic Musée d’Orsay, the vast expanse of Place de la Concorde, and stroll down the world-renowned Champs Elysées. Take in the majestic views of the Arc de Triomphe, Alexander Bridge, Les Invalides, and other significant sites. Our exploration culminates with a visit to the iconic Eiffel Tower, ascending to its 3rd level for a panoramic spectacle that not only symbolizes Paris but the entirety of France. The adventure continues with a romantic cruise along the Seine River, acclaimed as one of the world’s most picturesque journeys. Enjoy the backdrop of exquisite monuments, including Notre Dame, the Eiffel Tower, the Louvre, and the Orsay Museum, as you glide beneath charming bridges. Each moment offers a unique perspective on the vibrant heart of Paris, showcasing its architectural wonders in the soft glow of evening lights. Breakfast | Lunch | Dinner Overnight in Paris"
      ],
      [
        "DAY 03",
        "PARIS – BRUSSELS – NETHERLANDS DAY HIGHLIGHTS: ATOMIUM|ORIENTATION TOUR OF BRUSSELS | GRAND PLACE | MANNEKEN PIS STATUE Today, check out and journey towards Brussels in Belgium. As we arrive in Brussels, the headquarters of the European Union and the capital of Belgium, our first stop is to capture memorable photos at Atomium. Continue to Grand Place, renowned as one of Europe’s most beautiful squares, featuring the majestic medieval Town Hall and the iconic Manneken Pis statue, before proceeding to your accommodation in the Netherlands. Breakfast | Lunch | Dinner Overnight in Netherlands"
      ],
      [
        "DAY 04",
        "NETHERLANDS DAY HIGHLIGHTS: KEUKENHOF GARDENS (UNTIL 10TH MAY) | VISIT ZAANSE SCHANS | CHEESE & CLOG FACTORY | PHOTO STOP AT WINDMILLS | AMSTERDAM CANAL CRUISE After breakfast, visit the world-famous Keukenhof Gardens (until 10th May)—a breathtaking floral paradise showcasing millions of tulips in full bloom. From 11th May onwards, explore Madurodam, a fascinating miniature park that captures the essence of the Netherlands in intricate detail. Continue to Zaanse Schans, a quaint Dutch village that perfectly reflects traditional life and craftsmanship. Visit the Cheese & Clog Factory to witness the making of authentic Dutch cheese and wooden clogs, followed by a photo stop at the iconic windmills—a symbol of the Netherlands’ timeless charm. Later, enjoy a scenic Amsterdam Canal Cruise, gliding through picturesque waterways lined with historic buildings, charming bridges, and vibrant city life. Breakfast | Lunch | Dinner Overnight in Netherlands"
      ],
      [
        "DAY 05",
        "NETHERLANDS – LUXEMBOURG – STRASBOURG DAY HIGHLIGHTS: TRAM RIDE IN LUXEMBOURG | SHORT WALKING TOUR OF LUXEMBOURG | EUROPEAN PARLIAMENT PHOTO STOP After breakfast, journey to Luxembourg, one of Europe’s most picturesque and affluent capitals. Begin your visit with a scenic Tram Ride, offering charming views of the city’s elegant boulevards, modern districts, and green landscapes. Continue with a short walking tour exploring the heart of the city—visit the Gëlle Fra (Golden Lady) war memorial, admire the graceful Notre Dame Cathedral, and enjoy a photo stop at the Grand Duke’s Palace, the official residence of the Grand Duke of Luxembourg. Later, proceed to Strasbourg, a city that harmoniously blends French elegance and German character. Enjoy an orientation tour and a photo stop at the European Parliament, a proud emblem of European unity. Breakfast | Lunch | Dinner Overnight in Strasbourg"
      ],
      [
        "DAY 06",
        "STRASBOURG – BLACK FOREST (GERMANY) – SWITZERLANDS DAY HIGHLIGHTS: HOUSE OF 1000 CLOCKS | CUCKOO CLOCK DEMONSTRATION | VISIT LAKE TITISEE | BOAT RIDE AT RHINE FALLS After breakfast, journey through the scenic Black Forest region of Germany, famed for its lush woodlands, fairytale charm, and centuries-old craftsmanship. Visit the renowned House of 1000 Clocks, a delightful showcase of Germany’s traditional artistry, and witness a live Cuckoo Clock Making Demonstration, where skilled artisans craft these timeless creations with precision and pride. Continue to the picturesque Lake Titisee, a tranquil haven surrounded by pine-covered hills—an ideal spot to soak in the serene beauty of the region. Later, cross the border into Switzerland, a land of pristine lakes and alpine splendour, and proceed to Schaffhausen to enjoy a captivating Boat Ride at Rhine Falls, Europe’s largest waterfall, where you can feel the exhilarating power of nature up close. Check in at your hotel and relax after a day filled with scenic wonders and cultural delights. Breakfast | Lunch | Dinner Overnight in Switzerland"
      ],
      [
        "DAY 07",
        "SWITZERLAND DAY HIGHLIGHTS:  MT. TITLIS | ORIENTATION TOUR OF LUCERNE | FREE TIME FOR SHOPPING Today after Breakfast, immerse yourself in the extraordinary beauty of the Swiss Alps with an once-in a-lifetime journey to the summit of Mt. Titlis at 3,020 meters. Traverse various cable cars, including the revolutionary Rotair, the world’s first revolving cable car, offering an unobstructed 360- degree view of the stunning snow-capped peaks, deep crevasses, and pristine white snow fields adorned with massive ice boulders. Don’t miss the chance to visit the “Cliff Walk,” Europe’s highest suspension bridge, along the cliff of Mt. Titlis. Later, embark on an orientation tour of Lucerne, renowned as one of Switzerland’s most beautiful cities. Explore landmarks such as the Lion Monument and Kapell Brucke, with some free time to indulge in shopping for famous Swiss watches, knives, and chocolates. Breakfast | Lunch | Dinner Overnight in Switzerland"
      ],
      [
        "DAY 08",
        "SWITZERLAND – LIECHTENSTEIN – INNSBRUCK DAY HIGHLIGHTS:  CITY TRAIN RIDE AT VADUZ | SWAROVSKI CRYSTAL MUSEUM AND SHOWROOM AT WATTENS | ORIENTATION TOUR OF INNSBRUCK Today after Breakfast, sit back and relax in your coach as you embark on a picturesque journey to Innsbruck. Along the way, make a stop in Vaduz, the capital of Liechtenstein, a small principality nestled between Switzerland and Austria within the breathtaking Alps. Enjoy a charming city train ride through Vaduz, exploring the sights of this picturesque capital. This delightful journey offers a unique perspective on the city’s rich history and culture, making it a truly memorable experience. Continue your scenic drive to Wattens, where you’ll have the opportunity to explore the Swarovski World of Crystals and marvel at exquisite crystalline works of art. Later, partake in an orientation tour of the charming city of Innsbruck. Admire the iconic Golden Roof with its fire-gilded copper tiles, a distinctive landmark, and stroll along the cobblestone pathways of Maria Theresien Strasse. Breakfast | Lunch | Dinner Overnight in Tyrol Region"
      ],
      [
        "DAY 09",
        "INNSBRUCK – VENICE – PADOVA DAY HIGHLIGHTS: BOAT TRANSFER TO VENICE | WALKING TOUR OF VENICE |GONDOLA RIDE Depart from your hotel and set out for the charming city of Venice in Italy—a city adorned with beautiful monuments and serpentine canals, a place that has inspired poetry and passion through the ages. Upon arrival at the pier in Venice, embark on a private boat sailing over the Giudecca Canal. The boat journey leads you to the iconic St. Mark’s Square, the heart of Venice. Marvel at St. Mark’s Basilica, a splendid example of Byzantine architecture, and gaze upon the renowned Bell Tower and Clock Tower, featuring the dominant signs of the Zodiac and the current moon phase. Take in the sight of the Bridge of Sighs, an elegant structure made of white limestone spanning the Rio di Palazzo, connecting the old prisons to the interrogation rooms at the Doge’s Palace. Conclude your day with a romantic Gondola ride, gliding along the enchanting canals amidst the backdrop of baroque buildings—a truly magical experience in this captivating city. Return to the pier and later check into your hotel. Breakfast | Lunch | Dinner Overnight in Padova or similar"
      ],
      [
        "DAY 10",
        "PISA – FLORENCE DAY HIGHLIGHTS: SQUARE OF MIRACLES | LEANING TOWER OF PISA |VISIT PIAZZALE MICHELANGELO AT FLORENCE This morning, after breakfast, begin your exploration in Pisa, home to the architectural wonders of the Square of Miracles, including the world-famous Leaning Tower of Pisa. After capturing this iconic sight, continue your journey to Florence – the cradle of the Renaissance. Visit Piazzale Michelangelo, offering breathtaking panoramic views of the city. Conclude your day with a rich appreciation for the timeless art, history, and architecture that define both Pisa and Florence. Breakfast | Lunch | Dinner Overnight in Tuscany"
      ],
      [
        "DAY 11",
        "ROME – VATICAN CITY DAY HIGHLIGHTS: GUIDED CITY TOUR OF ROME | PHOTOSTOP AT COLOSSEUM |VISIT TREVI FOUNTAIN | VISIT ST. PETER’S BASILICA & ST. PETER’S SQUARE AT VATICAN Embark on a guided city tour of Rome with an expert English-speaking local guide, exploring the city’s remarkable history and architectural grandeur. Enjoy a photo stop at the Colosseum, the iconic symbol of ancient Rome and one of the greatest architectural marvels ever built. Continue to the Trevi Fountain, the city’s most enchanting landmark, where legend has it that tossing a coin ensures your return to Rome. Later, visit St. Peter’s Basilica and St. Peter’s Square at the Vatican, renowned for their spiritual significance, artistic masterpieces, and stunning architectural beauty. Breakfast | Lunch | Dinner Overnight in Rome"
      ],
      [
        "DAY 12",
        "ROME – DEPARTURE As our journey together comes to an end, we extend our heartfelt gratitude for choosing to explore and experience the wonders with us. We trust that the memories created during this tour will linger in your heart, and the diverse landscapes and cultures will stay with you. Safe travels on your onward journey, and may the adventures continue in your future explorations. Thank you for being part of our travel family, and we hope to welcome you back on another exciting adventure soon."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "georgia-and-armenia-tour",
    "title": "Georgia and Armenia Tour",
    "location": "Georgia and Armenia",
    "duration": "11 Days / 10 Nights",
    "price": "₹1,31,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 500,
    "image": "/assets/international/azerbaijan-georgia.jpeg",
    "tags": [
      "Heritage & Nature",
      "11 Days",
      "International Tour"
    ],
    "description": "PRICES & INCLUDED LIST: SEE LAST PAGE DETAILED TOUR PROGRAM...",
    "itinerary": [
      [
        "DAY 10\tDeparture (GEO)",
        "PRICES & INCLUDED LIST: SEE LAST PAGE DETAILED TOUR PROGRAM"
      ],
      [
        "Day 1",
        "Arrival in Tbilisi Arrival at Tbilisi Airport. Transfer to the hotel in Tbilisi."
      ],
      [
        "Day 2",
        "Tbilisi City Tour – Jvari – Mtskheta – Tbilisi After breakfast, we will embark on Tbilisi. Start at Metekhi Сhurch and the monument to Vakhtang Gorgasali, the legendary founder of Tbilisi. Visit Narikala Fortress to enjoy a breathtaking panoramic view of the city. Walk down to the district of sulphur bath houses and pass by the only mosque in Tbilisi. Walk down to the district of sulphur bath houses and pass by the only mosque in Tbilisi. Stroll through the Sharden area, full of narrow streets with cozy cafés, wine tasting bars, and souvenir shops, and breathe in the history of Old Tbilisi. Also visit Sioni Cathedral, Anchiskhati Basilica, and the famous Rezo Gabriadze Theatre’s clock tower, before crossing the Bridge of Peace to Rike Park. Our next stop will be at Jvari Church which stands atop a rocky cliff, looking down upon Mtskheta like a stoic guardian. Enjoy the views of the confluence of the Aragvi and Mtkvari Rivers. Our next stop is Mtskheta. In ancient times, it was the capital of Georgia, and now it is a cozy town with a renovated European-style center. Here you can buy delicious churchkhela and other traditional sweets. Visit Svetitskhoveli Cathedral, one of the most venerated churches in the country which is known as the burial site of Christ’s robe. Today Svetitskhoveli Cathedral is the second largest church in Georgia and its principal house of worship Overnight in Tbilisi."
      ],
      [
        "Day 3",
        "Tbilisi – Ananuri – Jinvali – Gudauri – Kazbegi – Tbilisi Breakfast. After the hotel breakfast, drive to the direction of Gudauri. On the way visiting Ananuri Fortress which is located directly on the Georgian Military Road. Ananuri was also a former residence of Argveti Dukes, which features churches and towers dating back to the 16th and 17th centuries. Jinvali Reservoir is one of the most beautiful places in Georgia. The lake is surrounded on all sides by green mountains covered with deciduous and pine forests. The most convenient way to admire the views of Jinvali reservoir is from Ananuri Castle. Continue driving towards Gudauri. Stop near The Arch of Friendship for photo shooting. The monument was built together with an observation deck back in 1983 in the name of friendship between the Russian and Georgian peoples. Continue the way to Kazbegi. 4×4 vehicle trip to Gergeti Trinity church. Come back to Tbilisi stay overnight."
      ],
      [
        "Day 4",
        "Tbilisi – Nekresi – Alaverdi – Kindzmarauli Factory – Tbilisi Breakfast. In the morning depart towards Kakheti region which is famous for its wine production. Drive to Kakteti via beautiful Gombori pass, which offers you the shortest and picturesque way to the heart of Kakheti, the city of Telavi. Gombori road is spectacular at any time of year. Our first stop is Nekresi Monastery which is standing on a hill and facing a beautiful view of the Alazani Valley. The monastery complex of Nekresi unites several monuments of Georgian architecture, among which there are three churches. Next stop is Alaverdi – one of the most impressive cultural monuments in all of Georgia. Built as a royal monastery in the 11th century alongside such famous works as Bagrati Cathedral in Kutaisi, Svetitskhoveli in Mtskheta it is a fantastic example of Georgian religious architecture. After we will have Wine degustation in Kindzmarauri factory in Kvareli – one of the most beautiful towns in Kakheti region. The fortress’s wine cellar produced wine and molasses exclusively for the royal families for much of its history. We are finishing this trip with Sighnaghi sightseeing. The town is located in the eastern part of Kakheti, and is known as the City of Love. The town sits atop a bluff overlooking the Alazani Valley, which is one of Georgia’s most famous wine-producing regions. Drive back to Tbilisi for overnight."
      ],
      [
        "Day 5",
        "Tbilisi – Gori – Uplistsikhe Cave Town – Tbilisi Breakfast. Drive to the direction of Kutaisi. Visiting Stalin Museum which is located in Gori, in the town where Stalin was born. The complex of the museum was opened in 1957 and includes the memorial house, Stalin’s carriage, and the two-storied exhibition building, memorial things, presents, canvases, photo and film documents are gathered in the museum. Our next station is Uplitsikhe cave which, literally ‘Fortress of God’, is an ancient rock-hewn town which played a significant role in Georgian history over a period of approximately 3,000 years. No more than 150 caves have survived from the huge settlement, where the number of grottoes carved into the rock once exceeded 700. Uplistsikhe is remarkable for the unique combination of styles from rock-cut cultures of the region. Drive back to Tbilisi for overnight."
      ],
      [
        "Day 6",
        "Tbilisi – Georgia-Armenia border – Hagarcin – Sevan – Yerevan After breakfast drive to the direction of Georgia-Armenia border. On the way to Yerevan visiting Hagarcin Monastery – which is located 18 kilometers from Dilijan, far from populated areas, among dense forests and magnificent mountain landscapes. The name of the monastery from Armenian is translated as “games of eagles”. The image of this proud bird can often be seen on the walls of Hagarcin. Our next stop is lake Sevan sightseeing – Set 1900m above sea level it’s the largest lake in the Caucasus and one of the largest freshwater high-altitude lakes in the world. Its colors and shades change with the weather, forming dazzling azure to dark blue hues, and a thousand shades in between. Savanavak – In the northwest part of Sevan Lake, on a narrow rocky peninsula, there stands one of the most prominent examples of medieval Armenian architecture – Sevanavank Monastery. Today the two black temples of Sevan stand deserted like two guards of this ancient lake. The view from there is simply magnificent: the mountains surround lake from all sides and snow tops are seen almost on the entire perimeter and disappear behind horizon. And behind the horizon of the dark blue open water space shrouded in fog are the green mountain slopes whose tops are covered with snow even in summer. Arrival in Yerevan and overnight."
      ],
      [
        "Day 7",
        "Yerevan – Garni Temple – Geghard Monastery Breakfast. Visiting Garni temple, which towers over a triangular cape, is the unique survived example of heathen culture in Armenia. It is a blend of Greco-Roman and Armenian styles. According to the research of some historians, the temple was created by the Armenian king Trdat I, who ruled in the second half of the 1st century and dedicated it to the Armenian God of Sun – Mihr. After adopting Christianity in 301, the pagan temple lost its significance and the fortress of Garni became the summer residence of the kings. Nowadays the ruins of the royal palace and the bathroom with a stunning mosaic work can be found near the temple. The temple is loved by both local and guests, because the temple is not like other religious monuments in Armenia, and when you are closer, it seems that you are in little Greece with an Armenian spirit. Our next stop is the monastery of Geghard or Gegardavank which is located in a gorge between high suspended rocks, between mountains covered with thick forests. The monastery itself and its cells are carved into the rock and contains a number of churches and tombs, most of them cut into the rock, which illustrate the very peak of Armenian medieval architecture. Drive back to Yerevan."
      ],
      [
        "Day 8",
        "Yerevan-Khor Virap – Noravank Monastery – Areni Winery – Yerevan Breakfast. Visiting Khor Virap (Khor means deep, Virap – pit, dungeon) – one of the Armenian shrines, which in ancient times was a famous place of pilgrimage. However, Khor Virap is important for Armenians not only for its connection with Christianity: the monastery is closely associated with the symbol of Armenia. It is from here that the unimaginable view of Mount Ararat opens. Due to circumstances, the symbol of Armenia Ararat today is not in its historic homeland, but in Turkey, and the monastery of Khor Virap is 40 km away from the mountain and from the Turkish border. If you look closely, you can see the border posts of Turkey. The beautiful Noravank Monastery (“Nor” – new, “vank” – monastery) was built in the 13th century and stands majestically in the gorge of the river Arpa, and in the gorge, makes the view even more impressive. The spare lines of the church contrast beautifully with the sharp red rock cliffs, and the dramatic scenery is one of the best reasons to visit Noravank. And our last activity is wine degustation in Areni winery. Drive back to Yerevan for overnight."
      ],
      [
        "Day 9",
        "Yerevan – Transfer to Tbilisi Breakfast. Yerevan sightseeing’s: Yerevan or the so-called “City of the Sun and Light” is the capital city of Armenia, one of the most ancient and lively cities in the world. The capital city is a major tourist destination thanks to its numerous landmarks, extensive nightlife, great museums and lovely parks. One of the truly magnificent sights is Republic Square with musical fountains: from early May till mid-autumn there is a fantastic singing-dancing fountains show, accompanied by some great music of various genres. Another sight not to be missed is Cascade Complex, a massive staircase that connects the upper and lower parts of the city and features an array of statues crafted by renowned artists. Lots of sidewalk cafes, restaurants, and beautiful artwork make this place a favorite spot for locals. Transfer to Armenia-Georgia border. Overnight in Tbilisi."
      ],
      [
        "Day 10",
        "Departure Check-out from the hotel. Transfer to Tbilisi International Airport. End of the tour."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "georgia-bike-tour",
    "title": "Georgia Bike Tour",
    "location": "Georgia Bike",
    "duration": "9 Days / 8 Nights",
    "price": "₹1,14,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1036,
    "image": "/assets/international/azerbaijan-georgia.jpeg",
    "tags": [
      "Heritage & Nature",
      "9 Days",
      "International Tour"
    ],
    "description": "PRICES & INCLUDED LIST: SEE LAST PAGE DETAILED TOUR PROGRAM...",
    "itinerary": [
      [
        "DAY 8\tDeparture",
        "PRICES & INCLUDED LIST: SEE LAST PAGE DETAILED TOUR PROGRAM"
      ],
      [
        "Day 1",
        "Arrival in Tbilisi Arrival to Tbilisi and transfer to hotel."
      ],
      [
        "Day 2",
        "Tbilisi Today we will walk through the historical streets of old Tbilisi and enjoying the unique combination of cultures. Meandering through the narrow streets of the city we will come across various religious buildings: Churches, Synagogues, Mosques, wooden houses built in the 19th century with colourful balconies, sulphur baths, and the Narikala fortress. Free time in the second half of the day. Overnight in Tbilisi."
      ],
      [
        "Day 3",
        "Tbilisi – Svetitskhoveli – Uplistsikhe – Gori Bike riding: 61 km 6 hrs (↑640 m. ↓520 m) In the morning, we drive to the ancient town of Mtskheta and visit the UNESCO World Heritage Site, the beautiful Svetitskhoveli Cathedral. After visiting Svetitskhoveli, we will adjust the bicycles and begin our 8 days cycling adventure. We will cycle to the Uplistsikhe cave town. Visit Uplistsikhe cave town, which was connected to the Silk Road. Once the glorious castle-town is now an open-air museum and deservedly considered one of the most important tourist monuments in the country. After Uplistsikhe, we will drive to Gori, check-in at the hotel. In our free time, we will be able to see the place, where Stalin was born. Overnight in Gori."
      ],
      [
        "Day 4",
        "Gori – Kintsvisi – Borjomi – Akhaltsikhe Bike riding: 149 km 9 hrs (↑1290 m. ↓930 m) In the morning, we will ride your bicycle to Kintsvisi Church, which is distinguished by it’s beautiful frescoes. After visiting this beautiful monastery, we will pass several churches and castles on the way and then, drive to Akhaltsikhe, the administrative center of Southern Georgia. On the way, we will visit the town of Borjomi, which is hidden in the green. Borjomi is a famous balneological and climatic resort. While walking in Borjomi Central Park, we can taste the famous mineral water. Overnight in Akhaltsikhe."
      ],
      [
        "Day 5",
        "Akhaltsikhe – Vardzia Bike riding: 65 km. 4 hrs. (↑870 m. ↓560 m) Today, we will travel entirely by bicycle. We will start the journey relatively early in the morning as you have a long and tiring road ahead. On the way, stop for Khertvisi Fortress and take a photo of this medieval defensive structure. Continue bike riding to Vardzia, check-in at the hotel, and prepare yourself for delicious lunch at a local family. After some time, visit Vardzia Monastery Complex, which is the largest among the rock-carved cities in Georgia and can be easily seen from afar. Overnight in Vardzia."
      ],
      [
        "Day 6",
        "Vardzia – Akhalkalaki Bike riding: 46 km. 4 hrs. (↑830 m ↓380 m) Today, we travel entirely by bicycle. We will cycle to Akhalkalaki, which is located on a volcanic plateau. In the afternoon, we will have free time to relax. Various masterclasses can be done if interested. Overnight in Akhalkalaki."
      ],
      [
        "Day 7",
        "Akhalkalaki – Tbilisi Bike riding: 74 km. 4 hrs. (↑520 m ↓1700 m) In the morning, we will drive to the largest lake of Georgia – Paravni, from where starts our bicycle trip to Tbilisi. We will pass several lakes, where a delicious lunch will be served at the fish restaurant. Overnight in Tbilisi."
      ],
      [
        "Day 8",
        "Departure Transfer to the airport and departure."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "georgia-tour",
    "title": "Georgia Tour",
    "location": "Georgia",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1423,
    "image": "/assets/international/georgia-and-armenia.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "Georgia Tourism\r\nThere are a number of different Georgia Tourism Packages that can be purchased when you travel this area. The packages are full of different attractions and activi...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Georgia Tourism\r\nThere are a number of different Georgia Tourism Packages that can be purchased when you travel this area. The packages are full of different attractions and activities that are available in the city and in the surrounding areas. However, make sure that if you want to see certain att"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "georgia-trekking-tour",
    "title": "Georgia Trekking Tour",
    "location": "Georgia Trekking",
    "duration": "9 Days / 8 Nights",
    "price": "₹1,14,500 / person",
    "type": "International Tour",
    "category": "Wildlife & Adventure",
    "rating": 5,
    "reviews": 2106,
    "image": "/assets/international/georgia-and-armenia.jpeg",
    "tags": [
      "Wildlife & Adventure",
      "9 Days",
      "International Tour"
    ],
    "description": "DETAILED TOUR PROGRAM...",
    "itinerary": [
      [
        "DAY 8\tDeparture",
        "DETAILED TOUR PROGRAM"
      ],
      [
        "Day 1",
        "Arrival in Tbilisi Arrival to Tbilisi, meet the guide. Transfer to the hotel and stay overnight in Tbilisi."
      ],
      [
        "Day 2",
        "Tbilisi – Mtskheta – Stepantsminda – Gveleti Waterfall – Stepantsminda (↑↓300m, 1-2 hours, 4km) In the morning we travel from Tbilisi to Mtskheta. Mtskheta is renowned for being the ancient capital and religious centre of Georgia. Here we visit the UNESCO World Heritage Sites: Jvari Monastery built in the 6th century high up on the hill overlooking Mtskheta – from Jvari Monastery we have an amazing panoramic view of the city with the confluence of the Mtkvari and Aragvi rivers. We move on to the beautiful 11th Century Cathedral which is reported to be the burial site of Christ’s mantle and one of the finest examples of ecclesiastical architecture in Georgia. In the afternoon we follow the military road, which is one of the most spectacular routes in Georgia. After arriving in Stepantsminda we will pass the Dariali gorge of dramatic beauty and walk to Gveleti waterfall. The second day of the trip ends in Stepantsminda."
      ],
      [
        "Day 3",
        "Stepantsminda – Juta – Mt. Chaukhebi – Stepantsminda (↑↓680m, 3-4 hours, 9km) In the morning we drive through the beautiful Sno Valley to the village of Juta (2165 m). This village amazes visitors with its ancient way of life preserved to this day. Surrounded by beautiful mountains, Juta is completely cut off from the rest of the country for six months. From Juta we will start walking to the foot of Chaukhebi mountain (2550 m). While trekking we will pass the amazing wild nature and we will see the beautiful mountain Chaukhebi (3842 m). Filled with amazing impressions, we return to the village of Juta with the same way. In the evening we will stay in Stepantsminda."
      ],
      [
        "Day 4",
        "Stepantsminda – Gergeti – Sabertse Pass – Stepantsminda (↑↓1200m, 5-6 hours, 14km) In the morning we will explore Sabertse Pass. From Stepantsminda (1700 m.) drive to Gergeti Trinity Church (2170 m.). From the church we can enjoy beautiful views of Stepantsminda and the Great Caucasus Mountains. We will leave the car in the parking area near the church and continue on foot to the pass. Sabertse Pass is located on the classic route of the glacier. This time we will only cross the pass. From here there is an amazing view of the Great Caucasus. In the evening we return to Stepantsminda."
      ],
      [
        "Day 5",
        "Stepantsminda – Truso Valley – Gudauri (↑ 350m ↓240m, 3 hours, 14km) After breakfast, we will drive along the main road of the region and later we will start trekking in the virgin nature of Truso Valley. We continue walking in the beautiful villages of the valley, where the ancient towers are preserved. Abandoned and empty houses give us an idea of the real-life of this valley. Especially beautiful and impressive is the walk in the Truso Valley. In the evening we will stay in Gudauri."
      ],
      [
        "Day 6",
        "Gudauri – Khada Gorge – Tbilisi (↑100m ↓850m, 5-6 hours, 15km) In the morning we will start pleasant trekking from Gudauri and find ourselves in the beautiful Khada gorge, which is surrounded by fascinating nature. The road will take us to the fifteenth-seventeenth-century small castle and shortly to a small river. On the way, we will encounter acidic waters. While trekking in the beautiful nature, we follow the descent, which will eventually lead us to the village of Kvesheti. Transport is waiting for us here, which will take us to Tbilisi."
      ],
      [
        "Day 7",
        "Tbilisi Today we start our Tbilisi sightseeing tour to get acquainted with the city. Walking through the historical part of the city and enjoying the unique combination of cultures. Meandering through the narrow streets of the city we will come-across various religious buildings: Churches, Synagogues, Mosques, Wooden houses built in the 19th century with colourful balconies, sulphur baths, the Narikala fortress. The rest of the day is left for exploring Tbilisi further, tasting wine in one of the many wine-bars, and getting acquainted with Georgian cuisine in one of the many great restaurants in the city centre."
      ],
      [
        "Day 8",
        "Departure Transfer to the airport and departure."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "grand-tour-of-greece",
    "title": "Grand Tour of Greece",
    "location": "Grand  of Greece",
    "duration": "10 Days / 9 Nights",
    "price": "₹1,23,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1724,
    "image": "/assets/international/grand-tour-of-greece.jpeg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "International Tour"
    ],
    "description": "Arrival in Athens (Private) Upon arrival at Athens International Airport, enjoy a private transfer in a luxury vehicle to your 4-star hotel. Settle in and prepare for the adventure...",
    "itinerary": [
      [
        "Day 1",
        "Arrival in Athens (Private) Upon arrival at Athens International Airport, enjoy a private transfer in a luxury vehicle to your 4-star hotel. Settle in and prepare for the adventures ahead."
      ],
      [
        "Day 2",
        "Athens Sightseeing  (Seat-in-Coach, Shared) Panathenaic Stadium: Pass by this historic stadium (Kallimarmaro), the only one in the world built entirely of marble, where the first modern Olympic Games were held in 1896. Hellenic Parliament: Drive past the Hellenic Parliament, the seat of Greece’s government, and see the changing of the guard at the Monument to the Unknown Soldier. Also pass by the Prime Minister’s Residence, guarded by the traditionally dressed Euzones. Temple of Olympian Zeus: Admire the towering columns of this once-grand temple dedicated to Zeus, the king of the gods. Hadrian’s Arch: Observe this impressive Roman-era arch, which once marked the boundary between ancient Athens and the Roman city. Academy, University & National Library: Pass by these neoclassical buildings, which represent Greece’s dedication to education and culture. Constitution Square (Syntagma): Drive through the central square of Athens, a hub of political and social activity surrounded by historical buildings. Acropolis: Stop at this legendary site and explore its iconic monuments, including the Parthenon, Propylaea, Temple of Athena Nike, and the Erechtheion. Acropolis Museum: Stop to visit this modern museum showcasing an impressive collection of artifacts and sculptures from the Acropolis. Free Afternoon: Spend the rest of the day at your leisure, exploring Athens on your own."
      ],
      [
        "Day 3",
        "Mycenae & the Wonders of the Peloponnese (Shared) Depart from Athens aboard a shared luxury bus and travel along the scenic coast to the Corinth Canal, making a short stop to admire this engineering marvel. Continue to Epidaurus, home to the world-renowned ancient theater with exceptional acoustics, where every word spoken on stage can be heard perfectly by 14,000 spectators. Visit the Ancient Theatre of Epidaurus and experience its legendary sound properties. Journey onwards to Nafplion, Greece’s first capital, for a brief stop to stroll through its charming streets and take in the picturesque views. Next, head to Mycenae, the legendary kingdom of Agamemnon, one of the most significant archaeological sites of the Bronze Age. Explore the Mycenaean Citadel, pass through the Lion’s Gate, and visit the Treasury of Atreus (Tomb of Agamemnon), one of the grandest and most elaborate tholos tombs of the ancient world. Finally, cross the Peloponnese to Olympia, arriving in time for dinner and an overnight stay at a 4-star hotel."
      ],
      [
        "Day 4",
        "Olympia – Delphi (Shared) Travel to Olympia on a shared bus, the birthplace of the Olympic Games. Visit the archaeological site and museum, gaining insights into ancient athletic traditions. Arrival at Delphi for dinner and an overnight stay in a 4-star hotel."
      ],
      [
        "Day 5",
        "Delphi – Meteora (Shared) Journey to Delphi on a shared luxury bus, once considered the center of the world in ancient Greek mythology. Explore the Temple of Apollo and the Delphi Museum. Arrival at Meteora for dinner and an overnight stay in a 4-star hotel."
      ],
      [
        "Day 6",
        "Meteora – Thessaloniki (Shared) Head to Meteora on a shared luxury bus to witness the stunning monasteries perched atop towering rock formations. Tour these architectural marvels and learn about their historical significance. Arrival at Thessaloniki for an overnight stay in a 4-star hotel."
      ],
      [
        "Day 7",
        "Panoramic Tour of Thessaloniki  (Seat-in-Coach, Shared) Explore Thessaloniki’s rich history and culture, visiting landmarks such as the White Tower, the Rotunda, and the Arch of Galerius. Stroll along the waterfront promenade and discover the city’s vibrant markets and Byzantine churches."
      ],
      [
        "Day 8",
        "Thessaloniki – Edessa – Naoussa (Shared) Begin your day with an enriching journey through the historic region of Macedonia. Your first stop is Edessa, a charming town renowned for its breathtaking waterfalls, a true natural spectacle. Continue to Naoussa, where you will visit the serene and historically significant site of Aristotle’s School, where the great philosopher shared his wisdom on ethics and governance with Alexander the Great and the Macedonian youth. Next, head to Vergina (ancient Aigai) to explore the remarkable Museum of the Great Tumulus, home to the royal tombs of Macedonia. Discover the fascinating artifacts from the tomb of King Philip II, father of Alexander the Great, a discovery that reshaped our understanding of ancient history. A short distance away, visit Veria (Biblical Beroea), where you will see Saint Paul’s Bema, a site of religious and historical importance. Wander through the old Jewish quarter and explore the vibrant marketplace, where history and local culture come to life. Conclude your day with a return to Thessaloniki for dinner and an overnight stay."
      ],
      [
        "Day 9",
        "Thessaloniki – Pella – Athens (Shared) Travel to Pella, the historic capital of Alexander the Great, where you will admire the remarkable 4th-century B.C. floor mosaics, beautifully preserved both in their original setting and within the modern museum. Continue your journey to the Archaeological Park of Dion, the sacred city of the ancient Macedonians, nestled at the foot of the majestic Mount Olympus. After exploring these iconic sites, drive south through the scenic landscapes of Thessaly, passing Lamia and the legendary battlefield of Thermopylae, where you will see the monument of King Leonidas. Conclude your journey in Athens, arriving late in the afternoon."
      ],
      [
        "Day 10",
        "Departure from Athens (Private) After breakfast, enjoy a private transfer, with a luxury vehicle, from your hotel to Athens International Airport for your departure."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "indian-butterfly-of-turkey-tour",
    "title": "Indian Butterfly Of Turkey Tour",
    "location": "Indian Butterfly Of Turkey",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.8,
    "reviews": 1465,
    "image": "/assets/international/indian-butterfly-turkey.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "(Indian Dinner included) Meet at the airport Transfer to your hotel. You will be given your room key and the rest of the day is yours to explore Istanbul. Evening we have Indian Di...",
    "itinerary": [
      [
        "Day 1 – Istanbul – Arrival Day – Saturday",
        "(Indian Dinner included) Meet at the airport Transfer to your hotel. You will be given your room key and the rest of the day is yours to explore Istanbul. Evening we have Indian Dinner. Overnight in Istanbul."
      ],
      [
        "Day 2 – Istanbul City Tour – Sunday",
        "(Breakfast, Indian Lunch and Indian Dinner included) We depart from the hotel at 08:30am for the Istanbul City Tour. “TOPKAPI PALACE” The great palace of the Ottoman sultans from the 15th to the 19th centuries. The palace houses an exquisite collection of crystal, silver, and Chinese porcelain. Robes worn by the sultans and their families, the famous jewels of the Imperial Treasury, miniatures, and the Holy Mantle; enshrining relics of the Prophet Mohammed. Next on the list is the “SULTANAHMET IMPERIAL MOSQUE” Across from St. Sophia built in the 16th century by the architect Mehmet, is known as the “BLUE MOSQUE” because of its magnificent interior decoration of blue Iznik tiles. Outside the Blue Mosque we find the “HIPPODROME”. The Ancient Hippodrome was the scene of chariot races and entertainment. The Hippodrome comprises of three monuments; the Obelisk of Theodosius, the bronze Serpentine Column and the Column of Constantine. After a short enjoyable lunch break we head to the Grand Spice Bazaar for shopping. After the shopping tour come back to Hotel. Dinner at the Indian Restaurant. Overnight in Istanbul."
      ],
      [
        "Day 3 – Istanbul Bosphorus Cruise and Flight to Izmir / Kusadasi – Monday",
        "(Breakfast, Indian Lunch and Indian Dinner included) After breakfast depart for Bosphorus Cruise tour. Enjoy a magical Istanbul Bosphorus Cruise and Spice Market Tour starting at 08:30. Enjoy the array of sites you can see from the boat including: SPICE BAZAAR (Egyptian Bazaar). BOSPHORUS BY BOAT a traditional excursion by boat along the waterway separating Europe and Asia. Lunch break at the Turkish restaurant. After the lunch depart for Istanbul Ataturk airport for domestic flight to Izmir. Transfer from airport and check in to your hotel in Kusadasi. Dinner and overnight in Kusadasi."
      ],
      [
        "Day 4 – Kusadasi – Ephesus Tour – Turkish Village Sirince – Tuesday",
        "(Breakfast, Indian Style Turkish Lunch and Indian Dinner included) 08:30 Departure from hotel fully guided tour of Ephesus, one of the best preserved ancient sites in the world en-route, visiting the Temple of Artemis, Curetes street, famous Roman baths, Celsus Library and Grand theatre. Lunch break around 13:00pm. After the lunch, we will visit a place which continues to perform one of the oldest arts of Turkey; a carpet weaving centre. After Lunch we will do a Turkish Village Tour. Sirince’s construction style today belongs to Anatolian Greeks. The houses on the slope are all Orginal with their white paints. Sirince Village also has a fantastic reputation for making some of the best wines in Turkey – especially fruit wines. We will visit the vineyards and it is time to learn how to make fruit wine with Turkish wine makers. In the evening you will be tested about your knowledge of making fruit wine. On the way we will visit one of the famous leather production centers of the region, where you will have the opportunity to get a good factory rate. On this guided tour, you will avoid the constant nagging and sometimes bullying that is well known in the markets of Turkey. Enabling you to enjoy the shopping experience whilst gaining the knowledge of the ancient craftsmen Overnight in Kusadasi."
      ],
      [
        "Day 5 – Kusadasi – Pamukkale Tour – Wednesday",
        "(Breakfast, Indian Lunch and Indian Dinner included) At 08:00 we depart for Pamukkale Tour. We will check at the hotel around 12.00 and we have a lunch break until 13.30. Afterwards we shall visit the calcium terraces of Pamukkale (cotton castle) and the ruins of Hierapolis, then walk around this natural phenomenon and have the option of lying in the waters of the natural springs. Overnight in Pamukkale"
      ],
      [
        "Day 6 – Pamukkale- Denizli to Istanbul – End of Tour – Thursday",
        "(Breakfast included) Today we depart for Denizli airport for our domestic flight to Istanbul and then back to home. We hope your tour was a memorable one and we would like to see you in the future in one of our tours again. Have a nice trip back home and thanks for choosing TravelShop Turkey."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "indian-dream-of-turkey-tour",
    "title": "Indian Dream Of Turkey Tour",
    "location": "Indian Dream Of Turkey",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1365,
    "image": "/assets/international/indian-butterfly-turkey.jpeg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "International Tour"
    ],
    "description": "(Indian Dinner included) Meet at the airport Transfer to your hotel. You will be given your room key and the rest of the day is yours to explore Istanbul. Evening we have Indian Di...",
    "itinerary": [
      [
        "Day 1 – Istanbul – Arrival Day",
        "(Indian Dinner included) Meet at the airport Transfer to your hotel. You will be given your room key and the rest of the day is yours to explore Istanbul. Evening we have Indian Dinner. Overnight in Istanbul."
      ],
      [
        "Day 2 – Istanbul City Tour",
        "(Breakfast, Indian Lunch and Indian Dinner included) We depart from the hotel at 08:30am for the Istanbul City Tour. “TOPKAPI PALACE” The great palace of the Ottoman sultans from the 15th to the 19th centuries. The palace houses an exquisite collection of crystal, silver, and Chinese porcelain. Robes worn by the sultans and their families, the famous jewels of the Imperial Treasury, miniatures, and the Holy Mantle; enshrining relics of the Prophet Mohammed. Next on the list is the “SULTANAHMET IMPERIAL MOSQUE” Across from St. Sophia built in the 16th century by the architect Mehmet, is known as the “BLUE MOSQUE” because of its magnificent interior decoration of blue Iznik tiles. Outside the Blue Mosque we find the “HIPPODROME”. The Ancient Hippodrome was the scene of chariot races and entertainment. The Hippodrome comprises of three monuments; the Obelisk of Theodosius, the bronze Serpentine Column and the Column of Constantine. After a short enjoyable lunch break we head to the Grand Spice Bazaar for shopping. After the shopping tour come back to Hotel. Dinner at the Indian Restaurant. Overnight in Istanbul."
      ],
      [
        "Day 3 – Istanbul Bosphorus Cruise and Flight to Capadocia",
        "(Breakfast, Indian Lunch and Indian Dinner included) After breakfast depart for Bosphorus Cruise tour. Enjoy a magical Istanbul Bosphorus Cruise and Spice Market Tour starting at 08:30. Enjoy the array of sites you can see from the boat including: SPICE BAZAAR (Egyptian Bazaar). BOSPHORUS BY BOAT a traditional excursion by boat along the waterway separating Europe and Asia. Lunch break at the Turkish restaurant. After the lunch depart for Istanbul airport for domestic flight to Cappadocia. Transfer from airport and check in to your hotel in Cappadocia. Dinner and overnight in Cappadocai."
      ],
      [
        "Day 4 – Cappadocia Underground City & Goreme Open Air Museum",
        "(Breakfast, Indian Style Turkish Lunch and Indian Dinner included) You will be picked up approximately 09:30 We will drive you to Ozkonak Underground City, one of the best preserved Underground cities in Cappadocia. Than visit to Uchisar Castle, the highest point of Cappadocia. After Uchisar, you visit Goreme Open Air Museum, the Heart of Cappadocia. Goreme Open Air Museum is famous for frescoes dating to 10th century describing the life of Jesus Christ and monks. Next stop is Cavusin, which is an abandoned village with old cave Greek houses. After Cavusin you go to the restaurant in Avanos to have lunch. After lunch, you visit a pottery work shop, to see how to make potteries. Then you go Pasabagi where you can see three – headed fairy chimneys. After Pasabagi you visit another workshop to see Cappadocian handwoven carpets and kilims. Next stop is Devrent Valley, which is also called Imagination Valley, where you can see natural rock formations looking like animals. Then you head to a wine shop in Urgup for wine tasting. Last stop is Three Beauties, three beautiful fairy chimneys with their hats, which is the symbol of Cappadocia. This tour will end approximately at 18.00 and you will be returned back to your hotel. Overnight in Cappadocia."
      ],
      [
        "Day 5 – Cappadocia to Istanbul – End of Tour",
        "(Breakfast included) After breakfast you will have free time in Cappadocia. Today we depart for Kayseri Airport for our domestic flight to Istanbul and then back to home. We hope your tour was a memorable one and we would like to see you in the future in one of our tours again."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "italy-tour",
    "title": "Italy Tour",
    "location": "Italy",
    "duration": "10 Days / 9 Nights",
    "price": "₹1,23,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 5,
    "reviews": 2007,
    "image": "/assets/international/london-to-italy.jpeg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "International Tour"
    ],
    "description": "Welcome to Italy! On arrival at Rome Airport, you will be met and transferred to your hotel. The rest of the day is free or rediscover the Eternal City on the Illuminated tour of R...",
    "itinerary": [
      [
        "DAY 1 – ARRIVE ROME",
        "Welcome to Italy! On arrival at Rome Airport, you will be met and transferred to your hotel. The rest of the day is free or rediscover the Eternal City on the Illuminated tour of Rome (optional). Overnight stay in ROME."
      ],
      [
        "DAY 2 – ROME",
        "Explore Rome on a 24hr hop on hop off tour. Explore the Eternal City at your own pace. See major sights such as the Trevi Fountain, Pantheon, Vatican City, Colosseum, Arch of Constantine, Palatine Hill, Piazza Venezia and lots more. You can extend your tour by adding an optional visit to Vatican Museums and the Sistine Chapel. Overnight stay in ROME. Meal: Breakfast"
      ],
      [
        "DAY 3 – ROME – SALERNO – SORRENTO (2 HRS)",
        "This morning travel by train from Rome to Salerno Station. This is the last station, after which you need to proceed on your own to your hotel in Sorrento. Spend the day relaxing by the crystal waters of the Mediterranean Sea. Overnight stay in SORRENTO Meal: Breakfast"
      ],
      [
        "DAY 4 – SORRENTO",
        "Today enjoy a full day tour of Capri island. This tour combines a guided aspect with independent exploring, so you can get the most out of your trip. First, wander the island of Capri at your own pace, and then cruise the surrounding waters, taking in views of the area’s highlights including the famous grottos. Overnight stay in SORRENTO Meal: Breakfast"
      ],
      [
        "DAY 5 – SORRENTO – SALERNO – FLORENCE (4 HRS)",
        "This morning travel back to Salerno Station for train to Florence. On arrival at Florence Station proceed on your own to your hotel. Enjoy a Hop On Hop Off Bus tour of Florence. Sit back and let your driver slowly take you along the winding country roads. See Piazalle Michaelangelo, Piazza del Duomo, Giotto’s Bell Tower, the Roman amphitheater, to name just a few and of course the splendid paths and trails which lend themselves so well for trekking or strolling. Sunset is especially magical and quite romantic! Overnight stay in FLORENCE Meal: Breakfast"
      ],
      [
        "DAY 6 – FLORENCE",
        "Today enjoy full day tour of Tuscany region. Explore art, history, countryside, food. Tuscany has it all. Explore the city of Siena and the cathedral, and then take to the Chianti hills for a Tuscan lunch and wine tasting. Roam the streets of San Gimignano, and travel to Pisa to admire the architectural drama of Cathedral Square – home to the UNESCO-listed Leaning Tower of Pisa. Overnight stay in FLORENCE Meal: Breakfast"
      ],
      [
        "DAY 7 – FLORENCE – VENICE (2 ½ HRS)",
        "Today, travel by train to Venice, the romantic city of Venice. The rest of the day is free, in the evening you have an opportunity to enjoy an optional tour of Gondola Serenade. Ride on Gondolas with musicians and singers as you pass by canals of Venice. Overnight stay in VENICE Meal: Breakfast"
      ],
      [
        "DAY 8 – VENICE",
        "This morning you have time free for optional Walking tour tour of Venice. A pleasant walking tour through the most representative monuments of the unique city in the world! Later in the afternoon enjoy an excursion to Murano, Burano & Torcello Island. Visit the famous islands of Murano known worldwide for it’s exquisite glasswork, Burano for lace and Torcello for Venice’s first cathedral. Overnight stay in VENICE Meal: Breakfast"
      ],
      [
        "DAY 9 – VENICE – MILAN (2 ½ HRS)",
        "Today, travel by train to Milan. Later in the afternoon, see popular sights of Milan on hop-on hop-off bus tour. See the iconic Milan Duomo and the famous opera house La Scala to get on and off as much as you like, the city of Milan is yours to discover. Overnight stay in MILAN Meal: Breakfast"
      ],
      [
        "DAY 10 – DEPART MILAN",
        "Today check out as you are transferred to Milan Airport for your return flight. Thank you for visiting Italy! We hope you have enjoyed your vacation and wish you a safe journey back home. END OF SERVICES Meal: Breakfast"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "paris-amsterdam-switzerland-tour",
    "title": "Paris Amsterdam Switzerland Tour",
    "location": "Paris Amsterdam Switzerland",
    "duration": "10 Days / 9 Nights",
    "price": "₹1,23,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 881,
    "image": "/assets/international/europe-tour-swiss-paris-brussels-amsterdam.jpeg",
    "tags": [
      "Heritage & Nature",
      "10 Days",
      "International Tour"
    ],
    "description": "Amsterdam Arrival Arrival at Amsterdam airport, Pickup and transfer to hotel. Rest day free for leisure. Overnight Stay....",
    "itinerary": [
      [
        "Day 1",
        "Amsterdam Arrival Arrival at Amsterdam airport, Pickup and transfer to hotel. Rest day free for leisure. Overnight Stay."
      ],
      [
        "Day 2",
        "Amsterdam City tour  After breakfast, enjoy Amsterdam city tour on Hop on hop off basis. Overnight Stay."
      ],
      [
        "Day 3",
        "FREE DAY  After breakfast, day free for leisure on your own. You can take optional tour of South of Holland with Madurodam on SIC basis. Overnight Stay."
      ],
      [
        "Day 4",
        "Amsterdam to Paris After breakfast, check out from hotel. Take train from Amsterdam station to Paris. Arrival at Paris. Check in at hotel. Overnight stay."
      ],
      [
        "Day 5",
        "Paris city tour After breakfast, Enjoy Paris city tour on SIC basis. Entrance ticket to Eiffel Tower 2nd Level (Subject to availability) and River Seine Boat Cruise included. Rest day free for leisure. Overnight Stay."
      ],
      [
        "Day 6",
        "FREE DAY  After breakfast, day free or leisure on your own. You can take optional tour of Disneyland on SIC basis. Overnight Stay."
      ],
      [
        "Day 7",
        "Paris to Zurich After breakfast, check out from hotel. Take train from Paris station to Zurich. Arrival, Check in at hotel. Overnight Stay."
      ],
      [
        "Day 8",
        "Mt. Tiltis After breakfast, join Mt. Titlis SIC tour for mountain excursion. Return back to Zurich later afternoon. Overnight Stay."
      ],
      [
        "Day 9",
        "FREE DAY  After breakfast, day free for leisure on your own. You can take optional Zurich city tour by Classic trolley tour on SIC basis. Overnight Stay."
      ],
      [
        "Day 10",
        "Zurich Onwards After breakfast, check out from hotel. Pickup and transfer to Zurich airport for onward flight."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "spain-with-portugal-tour",
    "title": "Spain with Portugal Tour",
    "location": "Spain with Portugal",
    "duration": "11 Days / 10 Nights",
    "price": "₹1,31,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1722,
    "image": "/assets/international/spain-with-portugal.jpeg",
    "tags": [
      "Heritage & Nature",
      "11 Days",
      "International Tour"
    ],
    "description": "Arrive in Lisbon. Welcome to Lisbon, the capital city of Portugal. It is famous for its sunny weather, great nightlife, colourful buildings, Fado music, and friendly locals. It’s a...",
    "itinerary": [
      [
        "DAY 1",
        "Arrive in Lisbon. Welcome to Lisbon, the capital city of Portugal. It is famous for its sunny weather, great nightlife, colourful buildings, Fado music, and friendly locals. It’s also home to famous landmarks like the Belem Tower and Jerónimos Monastery. On arrival in Lisbon, get greeted by your friendly professional Tour Manager who will take you to your hotel and assist you with your check in. Relax in the comforts of your hotel. Overnight in Lisbon (Dinner)"
      ],
      [
        "DAY 2",
        "Guided city tour of Lisbon. Photo-stop at Belem Tower. Orientation tour of Sintra. Today after breakfast, meet your professional English speaking guide and proceed for your guided city tour. Stroll Lisbon’s historic cobblestone streets filled with intrigue and culture during on this guided tour. Walk the city’s oldest quarter, Moorish Alfama and art deco-style Chiado districts. see landmarks like the Sé Cathedral and Commerce Square. Plus, stroll to the city’s best cafes and boutiques with your expert guide showing you local ‘Lisboa.’ Visit Avenida da Liberdade – the most expensive and fancy avenue in Lisbon. Praca dos Restauradores, Igreja de Sao Domingos, Chiado etc. Later we proceed to see the Belem Tower for a photo-stop. It is an imposing medieval defensive tower on the northern bank of the River Tagus in Lisbon and a symbol of Europe’s Age of Discovery. Belém Tower is sometimes known as The Tower of St Vincent as its construction celebrated the expedition to India of Vasco da Gama, the famous Portuguese explorer. Next, we drive to Sintra. Discover the most enchanting palaces in Europe wrapped in stunning natural beauty. Visit the Pena Palace, walk through the colorful streets of the village, taste one of the best Portuguese dishes and pass the Estoril coast with its beautiful beaches. See the magical Pena Palace with its colorful architectural extravagance and lush garden, pass through the picturesque village of Cascais and the Estoril Coast with its vast and beautiful beaches. Overnight in Lisbon (Breakfast, Lunch, Dinner)"
      ],
      [
        "DAY 3",
        "Drive to Seville. Enjoy the Flamenco Show. Check out from your hotel and relax in your coach as we drive to Seville, the largest city in Southern Spain. It was said to have been built by Hercules himself and its fascinating history makes it one of Spain’s most intriguing places to visit. On arrival in Seville, transfer to your hotel and check in. Later in the evening be ready to live an authentic Flamenco experience! Enjoy an electrifying Flamenco show of flamboyant dancing, singing, hand clapping and rousing guitar music. Overnight in Seville (Breakfast, Lunch, Dinner)"
      ],
      [
        "DAY 4",
        "Guided city tour of Seville. Drive to Granada. Enroute, guided city tour of Cordoba. Visit Monastery of San Jerenimo. Today we check out from the hotel and explore the shiny and sunbathed city is the home of Flamenco and Andalusian culture in general with a professional English speaking guide. Its rich heritage is mirrored on its streets and monuments, especially in the old town where scenes of romance are on every corner on this guided tour. See the most famous landmark of Seville, the Catedral de Santa María de la Sede, the largest gothic church in Spain, a UNESCO World Heritage Site and the final resting place of Christopher Columbus. La Giralda, Real Alcázar, Plaza Nueva, Aire de Sevilla, Catedral de Sevilla and Giralda etc. Come through the old city of Seville, to the cathedral, the Alcázar and the main highlights of the capital of Andalucia. Later we drive to Cordoba. Enroute, have a brief halt at Home to the largest old town in Spain and the only city in the world to have four Unesco-protected sites. On arrival, start with your orientation city tour. Walk through the streets of the city at your own pace, with breaks to take photos, eat or buy a souvenir. You will see the monuments and attractions of Córdoba: Mosque-Cathedral of Córdoba, Alcázar de los Reyes Cristianos, Roman Bridge, Puerta del Puente, Patio de los Naranjos, Jewish Quarter of Córdoba, Plaza of the Corredera etc. Next we visit the Monastery of San Jernimo. This building has been considered an architectural jewel among the religious buildings of Córdoba since the beginning of the 15th century. It was the first monastery of the Sisters of St Jerome in Spain. Continue your drive to Granada and check in to your hotel. Overnight in Granada (Breakfast, Lunch, Dinner)"
      ],
      [
        "DAY 5",
        "Guided city tour of Granada. Visit Alhambra Palace and Generalife Gardens. Orientation tour of Malaga. Today after breakfast, meet your professional English-speaking guide and follow your guide into the narrow streets covered in white houses, Roman Bridge gardened patios and many springs that mix in harmony Arabic and Christian architecture. Marvel at the famous Puerta Elvira (Gate of Elvira), Puerta Monaita (Monaita Gate), Palacio de Dar-al-Horra, Convent of Santa Isabel la Real etc. Visit the Alhambra Palace, situated atop a hill overlooking Granada, Spain, is a breathtaking testament to Moorish art and architecture. Learn about history, the enclave, the spaces that make up the monumental complex and museums, to discover everything that the monumental complex of the Alhambra and Generalife have to offer. Each step through the Alhambra’s halls reveals a tapestry of history, from the Generalife Gardens’ tranquility to the Nasrid Palaces’ opulent chambers. The Alhambra’s grandeur extends beyond its physical beauty; it whispers tales of Moorish culture, Islamic influence, and the enduring allure of a palace that has stood the test of time, leaving an indelible mark on the landscape and the hearts of those fortunate enough to wander its halls. Following that, sit back in your coach as we drive to Malaga for an orientation tour. Discover Málaga and the charm of its streets, squares, and hidden corners. The Cathedral, Calle Larios, the Atarazanas Market, the Roman Theater and the Alcazaba are just some of the emblematic monuments that you will see. Additionally, you will discover the peculiar history of Malaga with some secret legends and facts that will let you fall in love with this city. Overnight in Granada (Breakfast, Lunch, Dinner)"
      ],
      [
        "DAY 6",
        "Onto Madrid. Enroute visit Toledo. Check out from your hotel and proceed to Madrid, one of Europe’s most dynamic capital and greenest cities. It is known for its historical buildings, food markets, and the royals. Within its boundaries you’ll find a range of cultural and historical treasures such as the Royal Palace, Royal Theater along with numerous museums and art galleries that are unmatched elsewhere in Europe. Enroute we visit the Imperial former capital city of Toledo, where you will be escorted through its narrow cobblestone streets, soaking up the medieval atmosphere. The visit will include the interior of the magnificent Gothic cathedral and a visit to St. Tome Church, where El Greco’s masterpiece painting is displayed. Next we visit the Toledo Sword Factory. Toledo steel, historically known for being unusually hard, is from Toledo, Spain, which has been a traditional sword-making and a metal-working center. The swords forged in Toledo, Spain, were once considered the finest in the world. Continue your drive to Madrid. On arrival, Check in and relax in the comforts of your hotel. Overnight in Madrid (Breakfast, Lunch, Dinner)"
      ],
      [
        "DAY 7",
        "Guided city tour of Madrid. Photo-stop at Royal Palace. Visit Bullfighting Ring. This morning, meet your guide will take you to visit the city of Madrid which will allow you to see Madrid’s most outstanding attractions, like the Puerta del Sol, the magnificent fountains of Neptune and Cibeles, the stately Alcala Gate, the busy Gran Via, the Plaza de España and the Plaza de Oriente. Next, proceed to the Royal Palace of Madrid. It is the official residence of the Spanish royal family at the city of Madrid, although now used only for state ceremonies. It is the largest functioning royal palace and the largest by floor area in Europe. Next we proceed to visit a famous Bullfighting Ring. To many, the image of Spain is closely associated with bullfights – an art that became popular in the early twelfth century and is still very much alive. Overnight in Madrid (Breakfast, Lunch, Dinner)"
      ],
      [
        "DAY 8",
        "Onto Valencia. Guided tour of Valencia. Post breakfast, check out from the hotel as we drive to Valencia which is supposedly known for its vibrant culture, historical significance, and beautiful landscapes. Meet your professional English-speaking guide and proceed for guided tour through the historic center and visit the most emblematic monuments, with a focus on the city’s three World Heritage properties. The city of Valencia boasts more than 21 centuries of history, dozens of monuments from every era, and three World Heritage properties. Visit Valencia’s most emblematic monuments. Visit the Lonja de la Seda. Discover the Silk Exchange (Lonja de la Seda), the Water Tribunal (Tribunal de las Aguas), and the Fallas (an annual festival featuring ephemeral art, fire, and fireworks). Few destinations in the world can boast three different cultural attractions on the prestigious UNESCO list. Later visit the famous vineyards of Valencia and Uncork the secrets of Valencian wine. Discover the ancient art of winemaking in Spain as you journey through the historic Utiel-Requena region. Later drive to your hotel and check in. Overnight in Valencia (Breakfast, Lunch, Dinner)"
      ],
      [
        "DAY 9",
        "Drive to Barcelona. Guided city tour of Barcelona. Visit Sagrada Familia. Today we check out from the hotel and proceed to the much awaited city of Barcelona. The vibrant capital of Catalonia in northeastern Spain, is a city that seamlessly blends rich history, modern design, and a captivating cultural scene. Its iconic architecture, notably the mesmerizing works of Antoni Gaudí such as the Sagrada Família and Park Güell, defines the city’s skyline. Upon arrival, proceed for a Guided tour of Barcelona. Enjoy a guided walking tour of Barcelona’s Gothic Quarter, with a professional English speaking guide to accompany you. Wander past important historic monuments such as the Saló del Tinell, the Capella de Santa Àgata and the Palau del Lloctinent. Visit the Olympic Village, Columbus monument and Montjuïc Mountain where you will be able to see the Olympic Stadium, see Plaza de Cataluna, lively Ramblas the most famous street of Barcelona. Next we visit Sagrada Familia. The Sagrada Família is a large unfinished Roman Catholic minor basilica and is a one-of-a-kind temple, for its origins, foundation and purpose. Five generations now have watched the Temple progress in Barcelona. Today, more than 135 years after the laying of the cornerstone, construction continues on the Basilica. Overnight in Barcelona (Breakfast, Lunch, Dinner)"
      ],
      [
        "DAY 10",
        "Excursion to Montserrat. Free time at the lively Lam Ramblas. Today post breakfast, we will be proceeding to one of the most popular day trip from Barcelona – Montserrat. It a visit to a unique mountain range offering views over Catalonia. Venture into the Catalan countryside to visit Montserrat on this full-day tour from Barcelona. See the Basilica and Monastery on Montserrat, a beautiful, multi-peak mountain with dramatic rock formations, with free time to continue exploring the museum, farmer’s market, or views from the ridge of Cavall Bernat. Later return to the city and have some free time at Lam Ramblas. As a cultural and social hub, Las Ramblas captures the essence of Barcelona’s dynamic spirit, making it a must-visit destination for those seeking the city’s unique charm. Overnight in Barcelona (Breakfast, Lunch, Dinner)"
      ],
      [
        "Day 11",
        "Fly back home Your memorable holiday ends, today it’s time to fly back home. Say goodbye to the wonderful new friends you have made on the tour. Check out and depart for the Airport with pleasant memories of your European trip which you will cherish for a lifetime. (Breakfast) Inclusion: Sightseeing and excursions PORTUGAL Lisbon • City tour with a local guide • Photo-stop at Belem Tower Sintra • Orientation tour of Sintra SPAIN Seville • Experience the Flamenco Show • City tour with a local guide Cordoba • City tour with a local guide Granada • City tour with a local guide • Entrance to Alhambra Palace and Generalife Gardens Malaga • Orientation tour of Malaga Madrid • City tour with a local guide • Photo-stop at the Royal Palace • Entrance to Bullfighting Ring Valencia • City tour with a local guide Barcelona • City tour with a local guide • Entrance Sagrada Familia. • Excursion to Montserrat • Free time at Las Ramblas"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "turkey-tour",
    "title": "Turkey Tour",
    "location": "Turkey",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 1225,
    "image": "/assets/international/indian-dream-of-turkey.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "Upon our arrival at Istanbul International Airport, your guide will meet, assist and transfer you to the hotel. Istanbul was the capital city of Byzantium & Roman Empires and Ottom...",
    "itinerary": [
      [
        "Day 1 – Istanbul – Arrival Day",
        "Upon our arrival at Istanbul International Airport, your guide will meet, assist and transfer you to the hotel. Istanbul was the capital city of Byzantium & Roman Empires and Ottoman State. It is a most fascinating city, which actually crosses two continents Europe and Asia. It is a city of amalgamation of museums, bazaars, minarets, mosques, churches, palaces, and restaurants catering to every one’s taste, customs and fifteen million people. Overnight in Istanbul."
      ],
      [
        "Day 2 – Istanbul City Tour",
        "(Breakfast and Lunch included) After breakfast, we have Istanbul City Tour. Our first visit will be HIPPODROME. Ancient Hippodrome was the scene of chariot races, with the three monuments; the Obelisk of Theodosius, the bronze Serpentine Column and the Column of Constantine. Than we will visit SULTANAHMET IMPERIAL MOSQUE. Across from Hagia Sophia Grand Mosque, it was built in the 16th century by the architect Mehmet, is known as the BLUE MOSQUE because of its magnificent interior decoration of blue Iznik tiles. Our next visit will be HAGIA SOPHIA GRAND MOSQUE. The Hagia Sophia Grand Mosque, previously known as the Church of Divine Wisdom, is simply the best of its kind! Hagia Sophia pm. After the lunch, We will take you to the ASIL EFENDI which is a unique atmosphere with reasonable prices for your shopping. Here you will find; Exotic Spices and Herbs, Turkish Baklava, Turkish Delights, Turkish Coffee, nuts and fruits, small souvenirs such as Ceramic Handicrafts, Evil Eyes totems, all naturel olive oil, soaps and many other goods in Souvenir Shops and stores. After the tour, transfer back to your hotel. Please Note: Please do not forget to carry headscarf with you for the visit of religious places as Blue Mosque & Haghia Sophia Mosque."
      ],
      [
        "Day 3 – Istanbul Bosphorus Cruise and Flight to Izmir / Kusadasi",
        "(Breakfast, Lunch and Dinner included) After breakfast enjoy BOSPORUS BY BOAT; a traditional excursion by boat along the waterway separating Europe and Asia. The shore lined with old wooden villas, palaces of marble, fortresses, and small fishing villages. During the excursion, you will see the magnificent sights of the following attractions from your boat. See Dolmabahce Palace, and further along, the parks and imperial pavilions of Yildiz Palace. On the coastal edge of this park, is Ciragan Palace, 300 meters of its marble facade faces the shore. At Ortakoy a great variety of artists, gather every sunday to display their work along the street. Ortakoy is a symbol of tolerance with a church, a mosque and a synagogue existing side by side for centuries. RUMELI FORTRESS (view from boat), Built by Mehmet the Conqueror in 1452 prior to the conquest of Istanbul was completed in only four months to control and protect the infamous Bosporus passage. It is one of the most beautiful works of military architecture anywhere in the world. BEYLERBEYI PALACE (view from boat), is the summer residence of Ottoman sultans exists in its original renovated glory featuring original antique furniture and magnificent gardens with the Harem on the Asian side of Istanbul. Lunch break at the Turkish restaurant. After the lunch we will then take you to the GRAND SPICE BAZAAR, which is a unique atmosphere with reasonable prices for your shopping. Here you will find; Exotic Spices and Herbs, Turkish Baklava, Turkish Delights, Turkish Coffee, nuts and fruits, small souvenirs such as Ceramic Handicrafts, Evil Eyes totems, all naturel olive oil, soaps and many other goods in Souvenir Shops and stores. After the tour transfer to Istanbul Airport for domestic flight to Izmir. Transfer from airport and check in to your hotel in Kusadasi. Dinner and overnight in Kusadasi."
      ],
      [
        "Day 4 – Kusadasi – Ephesus Tour – Turkish Village Sirince",
        "(Breakfast, Lunch and Dinner included) After breakfast between 08:30 am, departure from hotel fully guided tour of Ephesus, one of the best-preserved ancient sites in the world en – route, visiting the Temple of Artemis, Curetes street, famous Roman baths, Celsus Library and Grand theatre. Lunch break around 13:00 pm. After the lunch, we will visit a place, which continues to perform one of the oldest arts of Turkey; a carpet-weaving centre. After lunch, we will do a Turkish Village Tour. Sirince’s construction style today belongs to Anatolian Greeks. The houses on the slope are all Orginal with their white paints. Sirince Village also has a fantastic reputation for making some of the best wines in Turkey – especially fruit wines. We will see the vineyards and it is time to learn how to make fruit wine. In the evening, you will be tested about your knowledge of making fruit wine. On the way, we will visit one of the famous leather production centers of the region, where you will have the opportunity to get a good factory rate. On this guided tour, you will avoid the constant nagging and sometimes bullying that is well known in the markets of Turkey. Enabling you to enjoy the shopping experience whilst gaining the knowledge of the ancient craftsmen. Dinner and Overnight in Kusadasi."
      ],
      [
        "Day 5 – Kusadasi – Pamukkale Tour",
        "(Breakfast, Lunch and Dinner included) We depart for Pamukkale at 08:00 am. Upon arrival to Pamukkale we have a lunch break until 13:30 pm. Afterwards we shall visit the calcium terraces of Pamukkale (cotton castle) and the ruins of Hierapolis, then walk around this natural phenomenon and have the option of lying in the waters of the natural springs. Denizli/Pamukkale means seaside in Turkish and is located on the Buyuk Menderes River. It is a growing industrial town, known for its textile industry and outlet shopping. You will visit one of the famous textile factories of Pamukkale. This tour will end approximately 18.30 and you will be back to your hotel. Dinner and Overnight in Kusadasi."
      ],
      [
        "Day 6 – Kusadasi – Izmir to Nevsehir / Kayseri Airport and Cappadocia",
        "(Breakfast and Dinner included) After breakfast, we depart for İzmir Airport for our domestic flight to Cappadocia. Transfer from Kayseri airport to your hotel. The rest of the day is yours to explore Cappadocia. Dinner and Overnight in Cappadocia. Please Note: If you wish to join our optional activity of Cappadocia Hor Air Ballooning for tomorrow, please contact with your guide and register because it will take place early the next morning."
      ],
      [
        "Day 7 – Cappadocia Underground City & Goreme Open Air Museum",
        "(Breakfast, Lunch and Dinner included) After breakfast at 09:30 depart for Cappadocia Tour. We will drive you to Ozkonak Underground City, one of the best preserved Underground cities in Cappadocia. After Underground City tour, you visit Goreme Open Air Museum, the Heart of Cappadocia. Goreme Open Air Museum is famous for frescoes dating to 10th century describing the life of Jesus Christ and monks. Next stop is Cavusin, which is an abandoned village with old cave Greek houses. After Cavusin you go to the restaurant in Avanos to have lunch. After lunch, you visit a pottery work shop, to see how to make potteries. Then you go to Love Valley. Love Valley Cappadocia is a hidden valley with scenic formations to say the least. Despite the resemblance to man hood, these amazing rock formations are far from man-made. Next stop is Devrent Valley, which is also called Imagination Valley, where you can see natural rock formations looking like animals. Last stop is Three Beauties, three beautiful fairy chimneys with their hats, which is the symbol of Cappadocia. This tour will end approximately at 18.00 and you will be returned back to your hotel. Dinner and Overnight in Cappadocia."
      ],
      [
        "Day 8 – Cappadocia to Istanbul – End of Tour",
        "(Breakfast included) After breakfast you will have free time in Cappadocia. Today we depart to Kayseri Airport for our domestic flight to Istanbul and then back to home. We hope your tour was a memorable one and we would like to see you in the future in one of our tours again."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "vibrant-spain-tour",
    "title": "Vibrant Spain Tour",
    "location": "Vibrant Spain",
    "duration": "8 Days / 7 Nights",
    "price": "₹1,06,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.7,
    "reviews": 704,
    "image": "/assets/international/vibrant-spain-tour.jpeg",
    "tags": [
      "Heritage & Nature",
      "8 Days",
      "International Tour"
    ],
    "description": "Arrival in Madrid Arrive in Madrid. Transfer to hotel from airport. Check-in to the hotel and relax Relax in the hotel and overnight stay in Madrid, the capital city of Spain....",
    "itinerary": [
      [
        "Day 1",
        "Arrival in Madrid Arrive in Madrid. Transfer to hotel from airport. Check-in to the hotel and relax Relax in the hotel and overnight stay in Madrid, the capital city of Spain."
      ],
      [
        "Day 2",
        "Explore Madrid Start your day early to take a city tour Sightseeing: We will start the day by 8am with the excursion to Toledo with cathedral entrance. Meet your private guide and begin exploring this historic city, known for its rich cultural heritage and stunning architecture. Toledo Cathedral: Visit the magnificent Gothic cathedral, renowned for its impressive interiors, including the stunning altarpiece and artwork by El Greco. Return to Madrid Guided Tour of Madrid Highlights: Royal Palace of Madrid: Visit Spain’s official royal residence, where you can explore the stunning rooms and learn about the monarchy’s history. And other highlights. Overnight stay in Madrid."
      ],
      [
        "Day 3",
        "Madrid to Seville After breakfast transfer to the train station in Madrid Travel to Seville by train. Arrival in Seville, transfer to hotel Check in to the designated hotel. Relaxing night in Seville"
      ],
      [
        "Day 4",
        "Seville After breakfast start your day with a city tour Sightseeing: Enjoy your 4 hours Panoramic Tour Begin your tour with a panoramic view of Seville’s iconic landmarks Visit the Alcázar of Seville, a magnificent palace known for its intricate Moorish architecture and beautiful gardens. Explore the Seville Cathedral, the largest Gothic cathedral in the world, and climb the Giralda Tower for panoramic views. Evening: Flamenco Show: Arrive at a traditional flamenco venue, known for its authentic performances. Enjoy an evening filled with passionate music and dance, showcasing the rich cultural heritage of Andalusia. The performance typically features skilled dancers, live musicians, and singers. Overnight stay in Seville."
      ],
      [
        "Day 5",
        "Seville to Barcelona Start your day with your breakfast. Transfer from hotel to train station in Seville Travel to Barcelona from Seville. Transfer from train station to hotel in Barcelona Check in to the hotel and relax Overnight stay in Barcelona"
      ],
      [
        "Day 6",
        "Barcelona After the breakfast take a tour Sightseeing: Enjoy breathtaking views as you approach Montserrat Mountain, known for its unique rock formations and stunning scenery. Your guide will take you to the Montserrat Monastery, a Benedictine abbey set high in the mountains. Barcelona Highlights Tour: Begin your private guided tour of Barcelona, covering the city’s most iconic sites, including: Park Güell: Designed by Antoni Gaudí, this colorful park is filled with artistic structures and offers panoramic views of the city. Gothic Quarter: Stroll through the charming narrow streets and admire the medieval architecture, including the Barcelona Cathedral. Sagrada Família: Your tour will include access to the Sagrada Família, Gaudí’s masterpiece and one of Barcelona’s most famous landmarks. Marvel at the intricate facades and stunning interior, while your guide explains the symbolism and history behind this UNESCO World Heritage site. Overnight stay in Barcelona"
      ],
      [
        "Day 7",
        "Day Trip to Montserrat After breakfast take a day trip to Excursion: 10 hours excursion to Costa Brava Scenic Drive to Costa Brava: Enjoy the beautiful Catalan countryside as you travel toward Costa Brava, a stunning coastal region known for its rugged cliffs, charming villages, and crystal-clear waters. Your guide will provide commentary about the region’s history, culture, and natural beauty during the drive. Enjoy the excursion to the fullest visiting the medieval castle and beautiful beaches, Old town, cobblestone streets, visit local shops, or relax on the beach. Return to Barcelona in the evening and be relaxed."
      ],
      [
        "Day 8",
        "Barcelona to Home Depending on your flight time, visit few places before heading to the airport. Have your breakfast early. Check out from hotel. You can leave your bags at the hotel while you explore. Return to your hotel to pick up your luggage and transfer to airport."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "dubai-christmas-holiday",
    "title": "Dubai Christmas Holiday",
    "location": "Dubai Christmas Holiday",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 747,
    "image": "/assets/international/dubai-abu-dhabi-fusion.jpeg",
    "tags": [
      "Heritage & Nature",
      "5 Days",
      "International Tour"
    ],
    "description": "Arrival in Dubai and Dhow Cruise Dinner Morning/Afternoon: Arrive at Dubai International Airport (DXB). A representative will greet you and transfer you to your hotel. Evening: Enj...",
    "itinerary": [
      [
        "Day 1",
        "Arrival in Dubai and Dhow Cruise Dinner Morning/Afternoon: Arrive at Dubai International Airport (DXB). A representative will greet you and transfer you to your hotel. Evening: Enjoy a traditional Dhow Cruise with a buffet dinner. This is a relaxing and scenic way to start your holiday, gliding along Dubai Creek or Dubai Marina, admiring the city’s illuminated skyline."
      ],
      [
        "Day 2",
        "Old and New Dubai City Tour Morning: Embark on a half-day city tour. This usually includes a mix of historical and modern landmarks. Old Dubai: Explore the historic Al Fahidi District, visit the Dubai Museum, and take an abra (traditional boat) across Dubai Creek to the Gold and Spice Souks. New Dubai: See modern marvels like the Jumeirah Mosque, the Burj Al Arab, and The Palm Jumeirah. You’ll likely have photo stops at iconic locations. Afternoon: Visit the Dubai Mall, one of the world’s largest shopping and entertainment destinations. You can explore the shops, the Dubai Aquarium & Underwater Zoo, or the Dubai Ice Rink. Evening: Experience the highlight of the day with a visit to the Burj Khalifa. Take the high-speed elevator to the “At the Top” observation deck on the 124th and 125th floors for breathtaking panoramic views of the city. Afterwards, witness the spectacular Dubai Fountain Show, a choreographed water performance set to music, right outside the mall."
      ],
      [
        "Day 3",
        "Desert Safari with BBQ Dinner Morning: The morning is free for leisure. You can relax at the hotel, visit a local beach, or do some last-minute Christmas shopping. Dubai has numerous festive markets and events during December. Afternoon: Get ready for a thrilling desert safari experience. Dune Bashing: An exhilarating ride over the sand dunes in a 4×4 vehicle. Activities: Enjoy activities like sandboarding, camel riding, and getting a henna design. Evening: Settle into a traditional Bedouin-style camp for a BBQ dinner under the stars, accompanied by live entertainment such as belly dancing, fire shows, and Tanoura dancing."
      ],
      [
        "Day 4",
        "Abu Dhabi City Tour with Grand Mosque Full Day: Take a day trip to Abu Dhabi, the capital of the UAE. Grand Mosque: Visit the stunning Sheikh Zayed Grand Mosque, a magnificent architectural masterpiece and one of the world’s largest mosques. Other Attractions: The tour may also include a visit to the Emirates Palace, the Heritage Village, and a drive along the Corniche. Some packages also offer an optional stop at Ferrari World or the Louvre Abu Dhabi. Christmas Activities: During the Christmas season, both Abu Dhabi and Dubai have numerous festive events, so you might get to see some of these. You could also choose to skip the Abu Dhabi tour and spend the day at other Dubai attractions like Dubai Miracle Garden and Global Village, which are particularly festive and well-decorated during this time."
      ],
      [
        "Day 5",
        "Departure Morning: Enjoy breakfast at the hotel. Depending on your flight schedule, you may have some free time for last-minute souvenir shopping or a final walk around the area. Afternoon: Transfer from your hotel to Dubai International Airport for your departure, bringing your holiday to an end."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "dubai-discovery",
    "title": "dubai discovery",
    "location": "dubai discovery",
    "duration": "3 Days / 2 Nights",
    "price": "₹63,500 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 1928,
    "image": "/assets/international/dubai-abu-dhabi-fusion.jpeg",
    "tags": [
      "Heritage & Nature",
      "3 Days",
      "International Tour"
    ],
    "description": "Every Dubai holiday package is a curated collection of experiences put together by the travel experts at HolidayMonk, who are themselves, seasoned travellers, having taken a Dubai ...",
    "itinerary": [
      [
        "Day 1: Arrival & Sightseeing",
        "Every Dubai holiday package is a curated collection of experiences put together by the travel experts at HolidayMonk, who are themselves, seasoned travellers, having taken a Dubai holiday many times. This means that no one else can take you on a Dubai tour like HolidayMonk can. Furthermore, HolidayM"
      ],
      [
        "Day 2: Full Day City Tour",
        "Guided tour of major landmarks, temples, and cultural sites."
      ],
      [
        "Day 3: Return Departure",
        "Check out and transfer to airport/station."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "dubai-luxury-tour",
    "title": "Dubai Luxury tour",
    "location": "Dubai Luxury",
    "duration": "5 Days / 4 Nights",
    "price": "₹80,500 / person",
    "type": "International Tour",
    "category": "Honeymoon & Luxury",
    "rating": 4.8,
    "reviews": 1145,
    "image": "/assets/international/dubai-christmas-holiday.jpeg",
    "tags": [
      "Honeymoon & Luxury",
      "5 Days",
      "International Tour"
    ],
    "description": "On arrival in Dubai, you will be met and transferred to your hotel by hotel shuttle service. The day is at leisure or enjoy a Visit to Burj Khalifa. Burj Khalifa is not only the ta...",
    "itinerary": [
      [
        "DAY 1 Arrive Dubai – Burj Khalifa – Dhow Cruise(D)",
        "On arrival in Dubai, you will be met and transferred to your hotel by hotel shuttle service. The day is at leisure or enjoy a Visit to Burj Khalifa. Burj Khalifa is not only the tallest building in the World; it was also the venue for the filming of Mission Impossible 4 starring Tom Cruise. From the observation platform, you have a view far into the desert of Dubai, as well as the Palm Island and the Burj al Arab. In the evening we proceed for Dhow Cruise excursion with buffet dinner. Overnight in Dubai."
      ],
      [
        "DAY 2 Dubai – City tour – Desert Safari (B,D)",
        "This morning, enjoy city tour of Dubai (on seat in coach basis). View the most magnificent Jumeirah Mosque The Jumeirah Public Beach, passing by Jumeirah Beach Hotel, Burj Al Arab, Dubai Museum and stop at the gold souk. We recommend you to visit the Dubai Mall one of the largest Mall in Bur Dubai or visit the Mall of Emirates for some great shopping. Later in evening, the enjoy excursion of Desert Safari, enjoy roller coaster ride on the sand dunes. Enjoy various activities like camel ride, henna painting and belly dance performance followed by BBQ dinner. Overnight in Dubai."
      ],
      [
        "DAY 3 DUBAI – ABU DHABI TOUR-FERRARI WORLD",
        "This morning proceed for Abu Dhabi Tour – Abu Dhabi, the capital of United Arab Emirates is an enchanting city bustling with activity. Abu Dhabi is the abode of the Ruling Emirates Family and a hub of oil business. The city entertains visitors with its spectacular landmarks, modern architecture, alluring Shopping malls, the Old Souk, traditional crafts, carpets and much more. Start the tour with a visit to the Sheikh Zayed Grand Mosque, a stunning masterpiece to the late Sheikh Zayed that houses the largest Iranian carpet and chandelier in the world. A visit to the Mina Zayed Port markets to include fish, dates and vegetable markets. Head towards the Heritage Village, a man made project that beautifully reflects and showcases traditional crafts and the reality of the lifestyle of a Bedouin Village. To end up the tour, drive past the iconic Emirates Palace (Outside view only). Overnight in Dubai."
      ],
      [
        "DAY 4 DUBAI – DOLPHIN SHOW – GLOBAL VILLAGE",
        "Today after breakfast visit Dubai Dolphinarium– Dubai Dolphinarium is an amazing place, where you are guaranteed to meet some of the most beautiful animals that inhabit our oceans and have lots of fun with them. There are plenty of program and exciting interaction with the mammals happening at Dubai Dolphinarium. A great way to educate, entertain and learn for the young and the old. An unforgettable experience with the world’s most loved animals. Later proceed to Global Village. Overnight in Dubai."
      ],
      [
        "DAY 5 Dubai (B)",
        "Today check out by 12:00 hrs and rest of the day is at leisure. Later you will be transferred to the airport for your flight back home. ****END OF SERVICES****"
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  },
  {
    "slug": "dubai-abu-dhabi-fusion",
    "title": "Dubai – Abu Dhabi Fusion",
    "location": "Dubai – Abu Dhabi Fusion",
    "duration": "6 Days / 5 Nights",
    "price": "₹89,000 / person",
    "type": "International Tour",
    "category": "Heritage & Nature",
    "rating": 4.9,
    "reviews": 624,
    "image": "/assets/international/dubai-christmas-holiday.jpeg",
    "tags": [
      "Heritage & Nature",
      "6 Days",
      "International Tour"
    ],
    "description": "Upon arrival at Dubai Airport, transfer to the hotel. Check-in and relax. Dubai as a city which was formerly a desert has now become a Paradise for tourists. Dubai is now crowned a...",
    "itinerary": [
      [
        "DAY 01 | Arrival at Dubai International Airport",
        "Upon arrival at Dubai Airport, transfer to the hotel. Check-in and relax. Dubai as a city which was formerly a desert has now become a Paradise for tourists. Dubai is now crowned as the city of the future and once predicted to be the most luxurious city in the world. Dubai has become one of the world tourist destinations. The most populous city in the United Arab Emirates has many tourist attractions most visited by tourist. In the evening proceed Dhow cruise. While cruising down the Creek the guests will have the opportunity to enjoy the view of the old and new Dubai with the tall glass and chrome buildings housed in the business district on one side and the old architectural beauty of the wind towers and the traditional styled buildings of the old city on the other side. Soft lilting background music provides the perfect ambience to enjoy the city skyline by the evening light. A sumptuous buffet dinner will be served on board while cruising. Beverage will be charged as per consumption. Overnight: 03 star hotel in Dubai (Panorama Grand Hotel or similar) Meals: Dinner"
      ],
      [
        "DAY 02 | City Tour and Desert Safari with Dinner",
        "After breakfast proceed for a City tour. The tour begins with a panoramic shoot of Burj Al Arab Hotel, the world tallest hotel set on a manmade island. There after visit some of the city’s most prominent landmarks like the famous Jumeirah Mosque, World Trade Centre , pass by the impressive palaces of the ruling family of Dubai and visit the Dubai Museum-housed in the 18th century Al Fahidi Fort which is faithfully restored to its former glory. Experience the ancient Arabia meticulously recreated in the Bastakia-the oldest part of the city. Then enjoy a ride across famed Dubai Creek in a local water taxi called “abra“ to visit the aromatic Spice ‘Souq’ a treasure trove of spices, and the glittering Gold Souq where the best in gold jewellery is a valuable at unbelievable prices. In the afternoon enjoy the thrill and excitement of driving over sand dunes of varying colours and heights. Stop to view the magic and full glory of an Arabian Desert sunset and enjoy the serenity and the eternal beauty of the desert. Ultimately on reaching the unique camp in a traditional Arabian ambience, relax in the tranquillity and silence of desert, surrounded by majestic sand dunes which seem to glow by the light of the setting sun. Have an opportunity to ride a camel, smoke some aromatic Shisha (water pipe), sand surf or have a traditional henna painting done. Or simply watch the evening moonlit feast (Arabic BBQ dinner buffet, salads and fruits) being prepared as the starts light up the desert sky and the tempo of the music increases culminating with the arrival of a Belly Dancer."
      ],
      [
        "DAY 03 | Day Free",
        "Rest of the day will be at leisure. You can spend the rest of day catching up with all the things that you have missed during your stay in Dubai or chose from the optional tours that we have to offer. Also take out time for shopping. Overnight: 03 star hotel in Dubai (Panorama Grand Hotel or similar) Meals: Breakfast"
      ],
      [
        "DAY 04 | Abu Dhabi City Tour",
        "Today after breakfast, enjoy a comfortable drive to your hotel at Abu Dhabi enroute you will enjoy Abu Dhabi city tour. In which you cover Sheikh Zayed Grand Mosque a stunning masterpiece to the late Sheikh Zayed that houses the largest Iranian carpet and chandelier in the world. Mina Zayed Port markets include fish, dates and vegetable markets, Heritage Village, a man made project that beautifully reflects and showcases traditional crafts and the reality of the lifestyle of a Bedouin Village. To end up the tour, drive past the iconic Emirates Palace (Outside view only). After city tour check in and relax. Overnight: 03 star hotel in Abu Dhabi (Centro Capital or similar) Meals: Breakfast"
      ],
      [
        "DAY 05 | Day Free",
        "After breakfast, the day is at leisure. Overnight: 03 star hotel in Abu Dhabi (Centro Capital or similar) Meals: Breakfast"
      ],
      [
        "DAY 06 | Depart Abu Dhabi",
        "Post breakfast you will be transferred to the airport for your onward flight home. Meals: Breakfast The above itinerary is tentative and subjected to change without prior notice. This is a budget package and the clients have the option to upgrade the hotel/services."
      ]
    ],
    "inclusions": [
      "Private AC Car / Transport",
      "Daily Breakfast & Meals",
      "3-Star / 4-Star Verified Stay",
      "Driver Allowance & Tolls"
    ],
    "exclusions": [
      "Airfare / Train Tickets",
      "Personal Laundry & Drinks",
      "Monument Entry Fees"
    ]
  }
];

export const destinations = [
  { name: "Kerala", country: "India", category: "Beach & Backwaters", rating: 5.0, reviews: 2450, icon: Palmtree, gradient: "from-teal-900 via-cyan-800 to-slate-900", accent: "text-cyan-300" },
  { name: "Dubai", country: "United Arab Emirates", category: "International", rating: 4.9, reviews: 3410, icon: Building2, gradient: "from-amber-950 via-slate-900 to-slate-950", accent: "text-amber-400" },
  { name: "Santorini & Greece", country: "Greece", category: "Honeymoon & Luxury", rating: 4.9, reviews: 2190, icon: Sun, gradient: "from-blue-950 via-sky-900 to-slate-900", accent: "text-amber-300" },
  { name: "Japan", country: "East Asia", category: "Heritage & Culture", rating: 4.9, reviews: 1840, icon: Gem, gradient: "from-slate-950 via-indigo-950 to-blue-900", accent: "text-sky-300" },
  { name: "Coorg & Mysore", country: "Karnataka, India", category: "Heritage & Nature", rating: 4.9, reviews: 1280, icon: TreePalm, gradient: "from-emerald-950 via-teal-900 to-slate-900", accent: "text-emerald-400" },
  { name: "Kedarnath & Himalayas", country: "Uttarakhand, India", category: "Pilgrimage & Spiritual", rating: 5.0, reviews: 3100, icon: Mountain, gradient: "from-slate-900 via-blue-950 to-cyan-950", accent: "text-sky-300" },
  { name: "Rajasthan", country: "India", category: "Heritage & Culture", rating: 4.9, reviews: 1950, icon: Crown, gradient: "from-amber-950 via-orange-950 to-slate-900", accent: "text-amber-400" },
  { name: "Bali", country: "Indonesia", category: "Honeymoon & Luxury", rating: 4.9, reviews: 3890, icon: Palmtree, gradient: "from-cyan-950 via-teal-900 to-slate-950", accent: "text-cyan-300" }
];

export const galleryItems = [
  { title: "Kerala Backwater Houseboat", location: "Alleppey, India", icon: ShipWheel, category: "Indian Tour", image: "/assets/images/kerala-houseboat.jpeg" },
  { title: "At the Top Burj Khalifa", location: "Dubai, UAE", icon: Building2, category: "International Tour", image: "/assets/international/dubai-luxury-tour.jpeg" },
  { title: "European Alps & Paris", location: "Switzerland & France", icon: Mountain, category: "International Tour", image: "/assets/international/europe-tour-swiss-paris-brussels-amsterdam.jpeg" },
  { title: "Oia Caldera Blue Domes", location: "Santorini, Greece", icon: Sun, category: "International Tour", image: "/assets/international/athens-mykonos-santorini-crete-greece.jpeg" },
  { title: "Coorg Coffee Hills", location: "Karnataka, India", icon: TreePalm, category: "Indian Tour", image: "/assets/images/coorg.jpeg" },
  { title: "Kedarnath Divine Temple", location: "Uttarakhand, India", icon: Compass, category: "Indian Tour", image: "/assets/images/kedarnath-uttarkhand.jpeg" },
  { title: "Sakura Cherry Blossom", location: "Tokyo, Japan", icon: Gem, category: "International Tour", image: "/assets/international/blooming-japan-cherry-blossom.jpg" },
  { title: "Royal Rajasthan Palace", location: "Jaipur, India", icon: Crown, category: "Indian Tour", image: "/assets/images/majestic-tour-rajasthan.jpg" }
];

export const services = [
  { title: "International Tours", icon: Plane, text: "Bespoke global holiday packages across 42+ countries with full concierge support." },
  { title: "Domestic Tours (India)", icon: Map, text: "Curated Indian holiday packages spanning South, North, North-East, and Heritage circuits." },
  { title: "Visa Assistance", icon: BadgeCheck, text: "Complete documentation, appointment scheduling, and fast-track tourist visa tracking." },
  { title: "Flight Booking", icon: TicketsPlane, text: "Competitive airline fares for domestic, international, first-class, and flexible itineraries." },
  { title: "Hotel & Resort Reservations", icon: Hotel, text: "Handpicked 4-star & 5-star luxury resorts, heritage palaces, and private pool villas." },
  { title: "Corporate Travel & MICE", icon: BriefcaseBusiness, text: "Executive corporate retreats, incentive travel, and conference event logistics." },
  { title: "Honeymoon Packages", icon: HeartHandshake, text: "Romantic private pacing, luxury villa stays, and candlelit experiences." },
  { title: "Pilgrimage & Spiritual Tours", icon: Mountain, text: "Dedicated Char Dham, Kedarnath, Kashi, Tirupati, and Ramayana heritage trails." }
];

export const trustItems = [
  { label: "100% Certified Agency", icon: ShieldCheck },
  { label: "Handcrafted Packages", icon: Crown },
  { label: "24/7 Live Support", icon: Sparkles },
  { label: "Verified Local Guides", icon: Users }
];

export const experiences = [
  { title: "Kerala Houseboats", icon: Sailboat, text: "Private backwater cruise through coconut lagoons & tranquil rivers", image: "/assets/images/kerala-houseboat.jpeg" },
  { title: "Desert Safaris", icon: Camera, text: "Red dune 4x4 bashing & Arabian starlit BBQ dinners in Dubai", image: "/assets/international/dubai-luxury-tour.jpeg" },
  { title: "Himalayan Pilgrimages", icon: Mountain, text: "Divine Kedarnath & Badrinath Yatra with priority assistance", image: "/assets/images/kedarnath-uttarkhand.jpeg" },
  { title: "Greek Island Cruises", icon: Sun, text: "Sunset caldera catamaran sailing in Santorini & Mykonos", image: "/assets/international/athens-mykonos-santorini-crete-greece.jpeg" }
];

export const timeline = [
  ["2025", "Established HappyFlying Tours & Travels LLP in Koramangala, Bangalore as a dedicated travel agency."],
  ["2026", "Serving thousands of happy travelers with personalized concierge support and verified hotel stays."]
];

export const team = [
  { name: "HappyFlying Concierge", role: "Custom Package Specialists", detail: "Expert trip planners based in Bangalore", icon: Crown },
  { name: "Domestic Tour Team", role: "India Regional Experts", detail: "Specialists in South, North & North-East India", icon: Map },
  { name: "International Division", role: "Global Destination Advisors", detail: "Specialists in Europe, UAE, Asia & USA tours", icon: Globe2 }
];

export const amenityIcons = [Gem, Building2, TreePalm, Sparkles];


