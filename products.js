const PRODUCTS = [
  {
    "id": 1,
    "category": "Диваны",
    "name": "Диван Бест",
    "price": 651000,
    "image": "images/divan/d-best1.jpg",
    "tag": "Хит сезона",
    "rating": 5,
     desc: `
      <ul>
      <li> <strong>Регулиремые подголовники</strong></li>
      <li><strong>Механизм раскладывания-дельфин</strong></li>
      <li><strong>Каркас-деревянный брус+металл</strong></li>
      <li><strong>Наполнения-Многослойный пенополиуретан</strong></li>
      <li><strong>Пружина-ЗМЕЙКА</strong></li>
        <li>Длина:2410мм</li> 
        <li>Ширина:950мм</li>
        <li>Материал:Шенил</li>
        <li>Цвет:Пиано 16</li>
        <li>Гарантия: 18 месяцев</li>
      </ul>
    `,
  },
  {
    "id": 2,
    "category": "Диваны",
    "name": "Диван Гольф",
    "price": 1050000,
    "image": "images/divan/d-golf1.jpg",
    "tag": "Новинка",
    "rating": 5
  },
  {
    "id": 3,
    "category": "Диваны",
    "name": "Диван Нортон",
    "price": 880000,
    "image": "images/divan/d-norton11.jpg",
    "tag": "Новинка",
    "rating": 5
  },
  {
    "id": 4,
    "category": "Диваны",
    "name": "Диваны Нортон",
    "price": 1243000,
    "image": "images/divan/d-nortonatamanka1.jpg",
    "tag": "СКИДКА до 1 060 000",
    "rating": 5
  },
  {
    "id": 5,
    "category": "Диваны",
    "name": "Диван Кватро",
    "price": 1080000,
    "image": "images/divan/d-quatro a.jpg",
    "tag": "СКИДКА ДО 950 000",
    "rating": 5
  },
  {
    "id": 6,
    "category": "Диваны",
    "name": "Диван Кватро",
    "price": 96600,
    "image": "images/divan/d-quatro11.jpg",
    "tag": "Новинка",
    "rating": 5
  },
  {
    "id": 7,
    "category": "Диваны",
    "name": "Кресло Софт",
    "price": 256200,
    "image": "images/divan/kreslosoft.jpg",
    "tag": "Новинка",
    "rating": 5
  },
  {
    "id": 8,
    "category": "Диваны",
    "name": "Диван Гранд",
    "price": 1395000,
    "image": "images/divan/grand.jpg",
    "tag": "Новое поступление",
    "rating": 5
  },
  {
    "id": 9,
    "category": "Диваны",
    "name": "Диван Сохо",
    "price": 1279000,
    "image": "images/divan/d-soho.jpg",
    "tag": "Новинка",
    "rating": 5
  },
  {
    "id": 10,
    "category": "Диваны",
    "name": "Диван Карат",
    "price": 900000,
    "image": "images/divan/d-carat.jpg",
    "tag": "Новинка",
    "rating": 5
  },
  {
    "id": 11,
    "category": "Диваны",
    "name": "Диван Кредо",
    "price": 1105000,
    "image": "images/divan/d-credo3.jpg",
    "tag": "Хит",
    "rating": 5
  },
  {
    "id": 12,
    "category": "Диваны",
    "name": "Диван Гольф",
    "price": 1063000,
    "image": "images/divan/d-golf3.jpg",
    "tag": "Новинка",
    "rating": 5
  },
  {
    "id": 13,
    "category": "Диваны",
    "name": "Диваны 13",
    "price": 203825,
    "image": "images/divan2.jpg",
    "tag": "Скидка",
    "rating": 4.8
  },
  {
    "id": 14,
    "category": "Диваны",
    "name": "Диваны 14",
    "price": 1281691,
    "image": "images/divan3.jpg",
    "tag": "Новинка",
    "rating": 4.0
  },
  {
    "id": 15,
    "category": "Диваны",
    "name": "Диваны 15",
    "price": 753603,
    "image": "images/divan4.jpg",
    "tag": "Скидка",
    "rating": 4.0
  },
  {
    "id": 16,
    "category": "Диваны",
    "name": "Диваны 16",
    "price": 907048,
    "image": "images/divan5.jpg",
    "tag": "Скидка",
    "rating": 3.6
  },
  {
    "id": 17,
    "category": "Диваны",
    "name": "Диваны 17",
    "price": 1560718,
    "image": "images/divan6.jpg",
    "tag": "Скидка",
    "rating": 3.6
  },
  {
    "id": 18,
    "category": "Диваны",
    "name": "Диваны 18",
    "price": 550661,
    "image": "images/divan1.jpg",
    "tag": "",
    "rating": 4.8
  },
  {
    "id": 19,
    "category": "Диваны",
    "name": "Диваны 19",
    "price": 856384,
    "image": "images/divan2.jpg",
    "tag": "",
    "rating": 4.0
  },
  {
    "id": 20,
    "category": "Диваны",
    "name": "Диваны 20",
    "price": 1134770,
    "image": "images/divan3.jpg",
    "tag": "",
    "rating": 3.5
  },
  {
    "id": 21,
    "category": "Диваны",
    "name": "Диваны 21",
    "price": 908676,
    "image": "images/divan4.jpg",
    "tag": "Хит",
    "rating": 4.4
  },
  {
    "id": 22,
    "category": "Диваны",
    "name": "Диваны 22",
    "price": 1878882,
    "image": "images/divan5.jpg",
    "tag": "Хит",
    "rating": 4.9
  },
  {
    "id": 23,
    "category": "Диваны",
    "name": "Диваны 23",
    "price": 1194863,
    "image": "images/divan6.jpg",
    "tag": "",
    "rating": 4.3
  },
  {
    "id": 24,
    "category": "Диваны",
    "name": "Диваны 24",
    "price": 1608998,
    "image": "images/divan1.jpg",
    "tag": "Новинка",
    "rating": 3.9
  },
  {
    "id": 25,
    "category": "Диваны",
    "name": "Диваны 25",
    "price": 101461,
    "image": "images/divan2.jpg",
    "tag": "",
    "rating": 4.1
  },
  {
    "id": 26,
    "category": "Диваны",
    "name": "Диваны 26",
    "price": 688397,
    "image": "images/divan3.jpg",
    "tag": "Новинка",
    "rating": 4.9
  },
  {
    "id": 27,
    "category": "Диваны",
    "name": "Диваны 27",
    "price": 234017,
    "image": "images/divan4.jpg",
    "tag": "Скидка",
    "rating": 4.0
  },
  {
    "id": 28,
    "category": "Диваны",
    "name": "Диваны 28",
    "price": 1522057,
    "image": "images/divan5.jpg",
    "tag": "",
    "rating": 3.6
  },
  {
    "id": 29,
    "category": "Диваны",
    "name": "Диваны 29",
    "price": 1296849,
    "image": "images/divan6.jpg",
    "tag": "Новинка",
    "rating": 3.9
  },
  {
    "id": 30,
    "category": "Диваны",
    "name": "Диваны 30",
    "price": 720443,
    "image": "images/divan1.jpg",
    "tag": "Новинка",
    "rating": 4.8
  },
  {
    "id": 31,
    "category": "Столы",
    "name": "Столы 1",
    "price": 1794426,
    "image": "images/stol2.jpg",
    "tag": "Новинка",
    "rating": 4.7
  },
  {
    "id": 32,
    "category": "Столы",
    "name": "Столы 2",
    "price": 331601,
    "image": "images/stol3.jpg",
    "tag": "Хит",
    "rating": 4.6
  },
  {
    "id": 33,
    "category": "Столы",
    "name": "Столы 3",
    "price": 1915954,
    "image": "images/stol4.jpg",
    "tag": "",
    "rating": 3.5
  },
  {
    "id": 34,
    "category": "Столы",
    "name": "Столы 4",
    "price": 165654,
    "image": "images/stol5.jpg",
    "tag": "Хит",
    "rating": 4.2
  },
  {
    "id": 35,
    "category": "Столы",
    "name": "Столы 5",
    "price": 508801,
    "image": "images/stol6.jpg",
    "tag": "",
    "rating": 4.3
  },
  {
    "id": 36,
    "category": "Столы",
    "name": "Столы 6",
    "price": 1828116,
    "image": "images/stol1.jpg",
    "tag": "Хит",
    "rating": 3.9
  },
  {
    "id": 37,
    "category": "Столы",
    "name": "Столы 7",
    "price": 1023432,
    "image": "images/stol2.jpg",
    "tag": "Новинка",
    "rating": 4.6
  },
  {
    "id": 38,
    "category": "Столы",
    "name": "Столы 8",
    "price": 1412172,
    "image": "images/stol3.jpg",
    "tag": "",
    "rating": 3.8
  },
  {
    "id": 39,
    "category": "Столы",
    "name": "Столы 9",
    "price": 760715,
    "image": "images/stol4.jpg",
    "tag": "Хит",
    "rating": 4.3
  },
  {
    "id": 40,
    "category": "Столы",
    "name": "Столы 10",
    "price": 609706,
    "image": "images/stol5.jpg",
    "tag": "",
    "rating": 4.7
  },
  {
    "id": 41,
    "category": "Столы",
    "name": "Столы 11",
    "price": 571781,
    "image": "images/stol6.jpg",
    "tag": "",
    "rating": 3.8
  },
  {
    "id": 42,
    "category": "Столы",
    "name": "Столы 12",
    "price": 63513,
    "image": "images/stol1.jpg",
    "tag": "Новинка",
    "rating": 5.0
  },
  {
    "id": 43,
    "category": "Столы",
    "name": "Столы 13",
    "price": 166823,
    "image": "images/stol2.jpg",
    "tag": "Скидка",
    "rating": 4.1
  },
  {
    "id": 44,
    "category": "Столы",
    "name": "Столы 14",
    "price": 1468912,
    "image": "images/stol3.jpg",
    "tag": "Новинка",
    "rating": 4.0
  },
  {
    "id": 45,
    "category": "Столы",
    "name": "Столы 15",
    "price": 1477012,
    "image": "images/stol4.jpg",
    "tag": "Скидка",
    "rating": 4.7
  },
  {
    "id": 46,
    "category": "Столы",
    "name": "Столы 16",
    "price": 399864,
    "image": "images/stol5.jpg",
    "tag": "Скидка",
    "rating": 4.3
  },
  {
    "id": 47,
    "category": "Столы",
    "name": "Столы 17",
    "price": 882482,
    "image": "images/stol6.jpg",
    "tag": "Новинка",
    "rating": 4.9
  },
  {
    "id": 48,
    "category": "Столы",
    "name": "Столы 18",
    "price": 1398566,
    "image": "images/stol1.jpg",
    "tag": "Скидка",
    "rating": 3.6
  },
  {
    "id": 49,
    "category": "Столы",
    "name": "Столы 19",
    "price": 820490,
    "image": "images/stol2.jpg",
    "tag": "Скидка",
    "rating": 3.6
  },
  {
    "id": 50,
    "category": "Столы",
    "name": "Столы 20",
    "price": 1615830,
    "image": "images/stol3.jpg",
    "tag": "Новинка",
    "rating": 3.7
  },
  {
    "id": 51,
    "category": "Столы",
    "name": "Столы 21",
    "price": 429400,
    "image": "images/stol4.jpg",
    "tag": "Новинка",
    "rating": 4.9
  },
  {
    "id": 52,
    "category": "Столы",
    "name": "Столы 22",
    "price": 1937666,
    "image": "images/stol5.jpg",
    "tag": "Новинка",
    "rating": 4.8
  },
  {
    "id": 53,
    "category": "Столы",
    "name": "Столы 23",
    "price": 74180,
    "image": "images/stol6.jpg",
    "tag": "Новинка",
    "rating": 3.7
  },
  {
    "id": 54,
    "category": "Столы",
    "name": "Столы 24",
    "price": 792283,
    "image": "images/stol1.jpg",
    "tag": "",
    "rating": 4.4
  },
  {
    "id": 55,
    "category": "Столы",
    "name": "Столы 25",
    "price": 906453,
    "image": "images/stol2.jpg",
    "tag": "Скидка",
    "rating": 4.7
  },
  {
    "id": 56,
    "category": "Столы",
    "name": "Столы 26",
    "price": 171615,
    "image": "images/stol3.jpg",
    "tag": "Новинка",
    "rating": 3.7
  },
  {
    "id": 57,
    "category": "Столы",
    "name": "Столы 27",
    "price": 658063,
    "image": "images/stol4.jpg",
    "tag": "Хит",
    "rating": 3.5
  },
  {
    "id": 58,
    "category": "Столы",
    "name": "Столы 28",
    "price": 1423536,
    "image": "images/stol5.jpg",
    "tag": "",
    "rating": 4.5
  },
  {
    "id": 59,
    "category": "Столы",
    "name": "Столы 29",
    "price": 1286814,
    "image": "images/stol6.jpg",
    "tag": "Новинка",
    "rating": 3.9
  },
  {
    "id": 60,
    "category": "Столы",
    "name": "Столы 30",
    "price": 744553,
    "image": "images/stol1.jpg",
    "tag": "Новинка",
    "rating": 4.4
  },
  {
    "id": 61,
    "category": "Стулья",
    "name": "Стулья 1",
    "price": 132347,
    "image": "images/stul2.jpg",
    "tag": "Новинка",
    "rating": 4.5
  },
  {
    "id": 62,
    "category": "Стулья",
    "name": "Стулья 2",
    "price": 1670676,
    "image": "images/stul3.jpg",
    "tag": "Хит",
    "rating": 4.6
  },
  {
    "id": 63,
    "category": "Стулья",
    "name": "Стулья 3",
    "price": 807142,
    "image": "images/stul4.jpg",
    "tag": "Скидка",
    "rating": 4.6
  },
  {
    "id": 64,
    "category": "Стулья",
    "name": "Стулья 4",
    "price": 996866,
    "image": "images/stul5.jpg",
    "tag": "Хит",
    "rating": 4.4
  },
  {
    "id": 65,
    "category": "Стулья",
    "name": "Стулья 5",
    "price": 18332,
    "image": "images/stul6.jpg",
    "tag": "Хит",
    "rating": 4.6
  },
  {
    "id": 66,
    "category": "Стулья",
    "name": "Стулья 6",
    "price": 48075,
    "image": "images/stul1.jpg",
    "tag": "",
    "rating": 4.2
  },
  {
    "id": 67,
    "category": "Стулья",
    "name": "Стулья 7",
    "price": 27669,
    "image": "images/stul2.jpg",
    "tag": "Хит",
    "rating": 4.1
  },
  {
    "id": 68,
    "category": "Стулья",
    "name": "Стулья 8",
    "price": 1495573,
    "image": "images/stul3.jpg",
    "tag": "Хит",
    "rating": 5.0
  },
  {
    "id": 69,
    "category": "Стулья",
    "name": "Стулья 9",
    "price": 1139102,
    "image": "images/stul4.jpg",
    "tag": "",
    "rating": 3.7
  },
  {
    "id": 70,
    "category": "Стулья",
    "name": "Стулья 10",
    "price": 207631,
    "image": "images/stul5.jpg",
    "tag": "",
    "rating": 3.6
  },
  {
    "id": 71,
    "category": "Стулья",
    "name": "Стулья 11",
    "price": 930131,
    "image": "images/stul6.jpg",
    "tag": "Новинка",
    "rating": 4.1
  },
  {
    "id": 72,
    "category": "Стулья",
    "name": "Стулья 12",
    "price": 1974755,
    "image": "images/stul1.jpg",
    "tag": "Новинка",
    "rating": 4.5
  },
  {
    "id": 73,
    "category": "Стулья",
    "name": "Стулья 13",
    "price": 403330,
    "image": "images/stul2.jpg",
    "tag": "Новинка",
    "rating": 3.5
  },
  {
    "id": 74,
    "category": "Стулья",
    "name": "Стулья 14",
    "price": 1938549,
    "image": "images/stul3.jpg",
    "tag": "Новинка",
    "rating": 3.8
  },
  {
    "id": 75,
    "category": "Стулья",
    "name": "Стулья 15",
    "price": 1240931,
    "image": "images/stul4.jpg",
    "tag": "Скидка",
    "rating": 3.5
  },
  {
    "id": 76,
    "category": "Стулья",
    "name": "Стулья 16",
    "price": 363416,
    "image": "images/stul5.jpg",
    "tag": "Хит",
    "rating": 4.5
  },
  {
    "id": 77,
    "category": "Стулья",
    "name": "Стулья 17",
    "price": 1026656,
    "image": "images/stul6.jpg",
    "tag": "Хит",
    "rating": 4.5
  },
  {
    "id": 78,
    "category": "Стулья",
    "name": "Стулья 18",
    "price": 1780097,
    "image": "images/stul1.jpg",
    "tag": "Скидка",
    "rating": 4.4
  },
  {
    "id": 79,
    "category": "Стулья",
    "name": "Стулья 19",
    "price": 1162029,
    "image": "images/stul2.jpg",
    "tag": "Новинка",
    "rating": 4.6
  },
  {
    "id": 80,
    "category": "Стулья",
    "name": "Стулья 20",
    "price": 1118189,
    "image": "images/stul3.jpg",
    "tag": "Скидка",
    "rating": 4.4
  },
  {
    "id": 81,
    "category": "Стулья",
    "name": "Стулья 21",
    "price": 311268,
    "image": "images/stul4.jpg",
    "tag": "",
    "rating": 4.2
  },
  {
    "id": 82,
    "category": "Стулья",
    "name": "Стулья 22",
    "price": 549748,
    "image": "images/stul5.jpg",
    "tag": "Хит",
    "rating": 4.6
  },
  {
    "id": 83,
    "category": "Стулья",
    "name": "Стулья 23",
    "price": 1822434,
    "image": "images/stul6.jpg",
    "tag": "Хит",
    "rating": 3.8
  },
  {
    "id": 84,
    "category": "Стулья",
    "name": "Стулья 24",
    "price": 1092241,
    "image": "images/stul1.jpg",
    "tag": "",
    "rating": 3.8
  },
  {
    "id": 85,
    "category": "Стулья",
    "name": "Стулья 25",
    "price": 767421,
    "image": "images/stul2.jpg",
    "tag": "",
    "rating": 4.2
  },
  {
    "id": 86,
    "category": "Стулья",
    "name": "Стулья 26",
    "price": 1288261,
    "image": "images/stul3.jpg",
    "tag": "",
    "rating": 4.6
  },
  {
    "id": 87,
    "category": "Стулья",
    "name": "Стулья 27",
    "price": 1346817,
    "image": "images/stul4.jpg",
    "tag": "Скидка",
    "rating": 4.8
  },
  {
    "id": 88,
    "category": "Стулья",
    "name": "Стулья 28",
    "price": 1517047,
    "image": "images/stul5.jpg",
    "tag": "",
    "rating": 4.8
  },
  {
    "id": 89,
    "category": "Стулья",
    "name": "Стулья 29",
    "price": 396469,
    "image": "images/stul6.jpg",
    "tag": "Новинка",
    "rating": 4.6
  },
  {
    "id": 90,
    "category": "Стулья",
    "name": "Стулья 30",
    "price": 436273,
    "image": "images/stul1.jpg",
    "tag": "Скидка",
    "rating": 4.3
  }
];
