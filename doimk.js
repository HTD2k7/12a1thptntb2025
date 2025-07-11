document.getElementById('password').addEventListener('input', function () {
  const password = this.value;
  checkRules(password);
});

function checkRules(password) {
  let passwordField = document.getElementById('password');
  passwordField.type = 'text';
  const rule1 = document.getElementById('rule1');
  const rule2 = document.getElementById('rule2');
  const rule3 = document.getElementById('rule3');
  const rule4 = document.getElementById('rule4');
  const rule5 = document.getElementById('rule5');
  const rule6 = document.getElementById('rule6');
  const rule7 = document.getElementById('rule7');
  const rule8 = document.getElementById('rule8');
  const rule9 = document.getElementById('rule9');
  const rule10 = document.getElementById('rule10');
  const rule11 = document.getElementById('rule11');
  const rule12 = document.getElementById('rule12');
  const rule13 = document.getElementById('rule13');
  const rule14 = document.getElementById('rule14');
  const rule15 = document.getElementById('rule15');
  const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
  const Romannumer = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ];
  const sumnumber = sumOfNumbersInPassword(password);
  const yearsnhuan = [
    '1004',
    '1008',
    '1012',
    '1016',
    '1020',
    '1024',
    '1028',
    '1032',
    '1036',
    '1040',
    '1044',
    '1048',
    '1052',
    '1056',
    '1060',
    '1064',
    '1068',
    '1072',
    '1076',
    '1080',
    '1084',
    '1088',
    '1092',
    '1096',
    '1104',
    '1108',
    '1112',
    '1116',
    '1120',
    '1124',
    '1128',
    '1132',
    '1136',
    '1140',
    '1144',
    '1148',
    '1152',
    '1156',
    '1160',
    '1164',
    '1168',
    '1172',
    '1176',
    '1180',
    '1184',
    '1188',
    '1192',
    '1196',
    '1200',
    '1204',
    '1208',
    '1212',
    '1216',
    '1220',
    '1224',
    '1228',
    '1232',
    '1236',
    '1240',
    '1244',
    '1248',
    '1252',
    '1256',
    '1260',
    '1264',
    '1268',
    '1272',
    '1276',
    '1280',
    '1284',
    '1288',
    '1292',
    '1296',
    '1304',
    '1308',
    '1312',
    '1316',
    '1320',
    '1324',
    '1328',
    '1332',
    '1336',
    '1340',
    '1344',
    '1348',
    '1352',
    '1356',
    '1360',
    '1364',
    '1368',
    '1372',
    '1376',
    '1380',
    '1384',
    '1388',
    '1392',
    '1396',
    '1404',
    '1408',
    '1412',
    '1416',
    '1420',
    '1424',
    '1428',
    '1432',
    '1436',
    '1440',
    '1444',
    '1448',
    '1452',
    '1456',
    '1460',
    '1464',
    '1468',
    '1472',
    '1476',
    '1480',
    '1484',
    '1488',
    '1492',
    '1496',
    '1504',
    '1508',
    '1512',
    '1516',
    '1520',
    '1524',
    '1528',
    '1532',
    '1536',
    '1540',
    '1544',
    '1548',
    '1552',
    '1556',
    '1560',
    '1564',
    '1568',
    '1572',
    '1576',
    '1580',
    '1584',
    '1588',
    '1592',
    '1596',
    '1600',
    '1604',
    '1608',
    '1612',
    '1616',
    '1620',
    '1624',
    '1628',
    '1632',
    '1636',
    '1640',
    '1644',
    '1648',
    '1652',
    '1656',
    '1660',
    '1664',
    '1668',
    '1672',
    '1676',
    '1680',
    '1684',
    '1688',
    '1692',
    '1696',
    '1704',
    '1708',
    '1712',
    '1716',
    '1720',
    '1724',
    '1728',
    '1732',
    '1736',
    '1740',
    '1744',
    '1748',
    '1752',
    '1756',
    '1760',
    '1764',
    '1768',
    '1772',
    '1776',
    '1780',
    '1784',
    '1788',
    '1792',
    '1796',
    '1804',
    '1808',
    '1812',
    '1816',
    '1820',
    '1824',
    '1828',
    '1832',
    '1836',
    '1840',
    '1844',
    '1848',
    '1852',
    '1856',
    '1860',
    '1864',
    '1868',
    '1872',
    '1876',
    '1880',
    '1884',
    '1888',
    '1892',
    '1896',
    '1904',
    '1908',
    '1912',
    '1916',
    '1920',
    '1924',
    '1928',
    '1932',
    '1936',
    '1940',
    '1944',
    '1948',
    '1952',
    '1956',
    '1960',
    '1964',
    '1968',
    '1972',
    '1976',
    '1980',
    '1984',
    '1988',
    '1992',
    '1996',
    '2000',
    '2004',
    '2008',
    '2012',
    '2016',
    '2020',
    '2024',
  ];
  const BTHkihieu = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
    'Sc',
    'Ti',
    'V',
    'Cr',
    'Mn',
    'Fe',
    'Co',
    'Ni',
    'Cu',
    'Zn',
    'Ga',
    'Ge',
    'As',
    'Se',
    'Br',
    'Kr',
    'Rb',
    'Sr',
    'Y',
    'Zr',
    'Nb',
    'Mo',
    'Tc',
    'Ru',
    'Rh',
    'Pd',
    'Ag',
    'Cd',
    'In',
    'Sn',
    'Sb',
    'Te',
    'I',
    'Xe',
    'Cs',
    'Ba',
    'La',
    'Ce',
    'Pr',
    'Nd',
    'Pm',
    'Sm',
    'Eu',
    'Gd',
    'Tb',
    'Dy',
    'Ho',
    'Er',
    'Tm',
    'Yb',
    'Lu',
    'Hf',
    'Ta',
    'W',
    'Re',
    'Os',
    'Ir',
    'Pt',
    'Au',
    'Hg',
    'Tl',
    'Pb',
    'Bi',
    'Po',
    'At',
    'Rn',
    'Fr',
    'Ra',
    'Ac',
    'Th',
    'Pa',
    'U',
    'Np',
    'Pu',
    'Am',
    'Cm',
    'Bk',
    'Cf',
    'Es',
    'Fm',
    'Md',
    'No',
    'Lr',
    'Rf',
    'Db',
    'Sg',
    'Bh',
    'Hs',
    'Mt',
    'Ds',
    'Rg',
    'Cn',
    'Nh',
    'Fl',
    'Mc',
    'Lv',
    'Ts',
    'Og',
  ];
  const BTHten = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron',
    'Carbon',
    'Nitrogen',
    'Oxygen',
    'Fluorine',
    'Neon',
    'Sodium',
    'Magnesium',
    'Aluminum',
    'Silicon',
    'Phosphorus',
    'Sulfur',
    'Chlorine',
    'Argon',
    'Potassium',
    'Calcium',
    'Scandium',
    'Titanium',
    'Vanadium',
    'Chromium',
    'Manganese',
    'Iron',
    'Cobalt',
    'Nickel',
    'Copper',
    'Zinc',
    'Gallium',
    'Germanium',
    'Arsenic',
    'Selenium',
    'Bromine',
    'Krypton',
    'Rubidium',
    'Strontium',
    'Yttrium',
    'Zirconium',
    'Niobium',
    'Molybdenum',
    'Technetium',
    'Ruthenium',
    'Rhodium',
    'Palladium',
    'Silver',
    'Cadmium',
    'Indium',
    'Tin',
    'Antimony',
    'Tellurium',
    'Iodine',
    'Xenon',
    'Cesium',
    'Barium',
    'Lanthanum',
    'Cerium',
    'Praseodymium',
    'Neodymium',
    'Promethium',
    'Samarium',
    'Europium',
    'Gadolinium',
    'Terbium',
    'Dysprosium',
    'Holmium',
    'Erbium',
    'Thulium',
    'Ytterbium',
    'Lutetium',
    'Hafnium',
    'Tantalum',
    'Tungsten',
    'Rhenium',
    'Osmium',
    'Iridium',
    'Platinum',
    'Gold',
    'Mercury',
    'Thallium',
    'Lead',
    'Bismuth',
    'Polonium',
    'Astatine',
    'Radon',
    'Francium',
    'Radium',
    'Actinium',
    'Thorium',
    'Protactinium',
    'Uranium',
    'Neptunium',
    'Plutonium',
    'Americium',
    'Curium',
    'Berkelium',
    'Californium',
    'Einsteinium',
    'Fermium',
    'Mendelevium',
    'Nobelium',
    'Lawrencium',
    'Rutherfordium',
    'Dubnium',
    'Seaborgium',
    'Bohrium',
    'Hassium',
    'Meitnerium',
    'Darmstadtium',
    'Roentgenium',
    'Copernicium',
    'Nihonium',
    'Flerovium',
    'Moscovium',
    'Livermorium',
    'Tennessine',
    'Oganesson',
  ];
  const countries = [
    'Vietnam',
    'Thailand',
    'Laos',
    'Cambodia',
    'Myanmar',
    'Malaysia',
    'Singapore',
    'Indonesia',
    'Brunei',
    'Philippines',
    'East Timor',
    'Timor-Leste',
  ];

  if (password.length >= 5) {
    rule1.style.textDecoration = 'line-through';
    rule1.classList.add('met');
    rule2.style.display = 'block';
    rule2.style.opacity = '0';
    setTimeout(() => {
      rule2.style.opacity = 1;
    }, 10);
  } else {
    rule1.classList.remove('met');
    rule1.style.textDecoration = 'none';
    rule2.style.display = 'none';
    rule3.style.display = 'none';
    rule4.style.display = 'none';
    rule5.style.display = 'none';
    rule6.style.display = 'none';
  }

  if (/\d/.test(password) && password.length >= 5) {
    rule2.style.textDecoration = 'line-through';
    rule2.classList.add('met');
    rule3.style.display = 'block';
    rule3.style.opacity = '0';
    setTimeout(() => {
      rule3.style.opacity = 1;
    }, 10);
  } else {
    rule2.classList.remove('met');
    rule2.style.textDecoration = 'none';
    rule3.style.display = 'none';
    rule4.style.display = 'none';
    rule5.style.display = 'none';
    rule6.style.display = 'none';
  }

  if (/[A-Z]/.test(password) && /\d/.test(password) && password.length >= 5) {
    rule3.style.textDecoration = 'line-through';
    rule3.classList.add('met');
    rule4.style.display = 'block';
    rule4.style.opacity = '0';
    setTimeout(() => {
      rule4.style.opacity = 1;
    }, 10);
  } else {
    rule3.style.textDecoration = 'none';
    rule3.classList.remove('met');
    rule4.style.display = 'none';
    rule5.style.display = 'none';
    rule6.style.display = 'none';
  }

  if (
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule4.style.textDecoration = 'line-through';
    rule4.classList.add('met');
    rule5.style.display = 'block';
    rule5.style.opacity = '0';
    setTimeout(() => {
      rule5.style.opacity = 1;
    }, 10);
  } else {
    rule4.style.textDecoration = 'none';
    rule4.classList.remove('met');
    rule5.style.display = 'none';
    rule6.style.display = 'none';
  }

  if (
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule5.style.textDecoration = 'line-through';
    rule5.classList.add('met');
    rule6.style.display = 'block';
    rule6.style.opacity = '0';
    setTimeout(() => {
      rule6.style.opacity = 1;
    }, 10);
  } else {
    rule5.style.textDecoration = 'none';
    rule5.classList.remove('met');
    rule6.style.display = 'none';
  }

  if (
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule6.style.textDecoration = 'line-through';
    rule6.classList.add('met');
    rule7.style.display = 'block';
    rule7.style.opacity = '0';
    setTimeout(() => {
      rule7.style.opacity = 1;
    }, 10);
  } else {
    rule6.style.textDecoration = 'none';
    rule6.classList.remove('met');
    rule7.style.display = 'none';
  }

  if (
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule7.style.textDecoration = 'line-through';
    rule7.classList.add('met');
    rule8.style.display = 'block';
    rule8.style.opacity = '0';
    setTimeout(() => {
      rule8.style.opacity = 1;
    }, 10);
  } else {
    rule7.style.textDecoration = 'none';
    rule7.classList.remove('met');
    rule8.style.display = 'none';
  }
  if (
    BTHkihieu.some((element) => password.includes(element)) &&
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule8.style.textDecoration = 'line-through';
    rule8.classList.add('met');
    rule9.style.display = 'block';
    rule9.style.opacity = '0';
    setTimeout(() => {
      rule9.style.opacity = 1;
    }, 10);
  } else {
    rule8.style.textDecoration = 'none';
    rule8.classList.remove('met');
    rule9.style.display = 'none';
  }
  if (
    BTHten.some((element) => password.includes(element)) &&
    BTHkihieu.some((element) => password.includes(element)) &&
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule9.style.textDecoration = 'line-through';
    rule9.classList.add('met');
    rule10.style.display = 'block';
    rule10.style.opacity = '0';
    setTimeout(() => {
      rule10.style.opacity = 1;
    }, 10);
  } else {
    rule9.style.textDecoration = 'none';
    rule9.classList.remove('met');
    rule10.style.display = 'none';
  }
  if (
    password.includes('❄️') &&
    BTHten.some((element) => password.includes(element)) &&
    BTHkihieu.some((element) => password.includes(element)) &&
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule10.style.textDecoration = 'line-through';
    rule10.classList.add('met');
    rule11.style.display = 'block';
    rule11.style.opacity = '0';
    setTimeout(() => {
      rule11.style.opacity = 1;
    }, 10);
  } else {
    rule10.style.textDecoration = 'none';
    rule10.classList.remove('met');
    rule11.style.display = 'none';
  }
  if (
    password.includes('34') &&
    password.includes('❄️') &&
    BTHten.some((element) => password.includes(element)) &&
    BTHkihieu.some((element) => password.includes(element)) &&
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule11.style.textDecoration = 'line-through';
    rule11.classList.add('met');
    rule12.style.display = 'block';
    rule12.style.opacity = '0';
    setTimeout(() => {
      rule12.style.opacity = 1;
    }, 10);
  } else {
    rule11.style.textDecoration = 'none';
    rule11.classList.remove('met');
    rule12.style.display = 'none';
  }
  if (
    countries.some((element) => password.includes(element)) &&
    password.includes('34') &&
    password.includes('❄️') &&
    BTHten.some((element) => password.includes(element)) &&
    BTHkihieu.some((element) => password.includes(element)) &&
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule12.style.textDecoration = 'line-through';
    rule12.classList.add('met');
    rule13.style.display = 'block';
    rule13.style.opacity = '0';
    setTimeout(() => {
      rule13.style.opacity = 1;
    }, 10);
  } else {
    rule12.style.textDecoration = 'none';
    rule12.classList.remove('met');
    rule13.style.display = 'none';
  }
  if (
    password.includes('Langbiang') &&
    countries.some((element) => password.includes(element)) &&
    password.includes('34') &&
    password.includes('❄️') &&
    BTHten.some((element) => password.includes(element)) &&
    BTHkihieu.some((element) => password.includes(element)) &&
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule13.style.textDecoration = 'line-through';
    rule13.classList.add('met');
    rule14.style.display = 'block';
    rule14.style.opacity = '0';
    setTimeout(() => {
      rule14.style.opacity = 1;
    }, 10);
  } else {
    rule13.style.textDecoration = 'none';
    rule13.classList.remove('met');
    rule14.style.display = 'none';
  }
  if (
    password.includes('101011') &&
    password.includes('Langbiang') &&
    countries.some((element) => password.includes(element)) &&
    password.includes('34') &&
    password.includes('❄️') &&
    BTHten.some((element) => password.includes(element)) &&
    BTHkihieu.some((element) => password.includes(element)) &&
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule14.style.textDecoration = 'line-through';
    rule14.classList.add('met');
    rule15.style.display = 'block';
    rule15.style.opacity = '0';
    setTimeout(() => {
      rule15.style.opacity = 1;
    }, 10);
  } else {
    rule14.style.textDecoration = 'none';
    rule14.classList.remove('met');
    rule15.style.display = 'none';
  }
  if (
    (password.includes('Spain') || password.includes('spain')) &&
    password.includes('101011') &&
    password.includes('Langbiang') &&
    countries.some((element) => password.includes(element)) &&
    password.includes('34') &&
    password.includes('❄️') &&
    BTHten.some((element) => password.includes(element)) &&
    BTHkihieu.some((element) => password.includes(element)) &&
    yearsnhuan.some((element) => password.includes(element)) &&
    sumnumber == 25 &&
    Romannumer.some((element) => password.includes(element)) &&
    specialCharacter.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 5
  ) {
    rule15.style.textDecoration = 'line-through';
    rule15.classList.add('met');
    rule16.style.display = 'block';
    rule16.style.opacity = '0';
    setTimeout(() => {
      rule16.style.opacity = 1;
      alert(
        'HEHEHE troll troll VN :)) Hãy liên hệ với quản trị viên để đổi mật khẩu nhé cảm ơn bạn đã dành thời gian quý báu cho trò chơi này!!!'
      );
    }, 10);
  } else {
    rule15.style.textDecoration = 'none';
    rule15.classList.remove('met');
    rule16.style.display = 'none';
  }
}

function sumOfNumbersInPassword(password) {
  let numbers = password.match(/\d/g);
  if (numbers) {
    let sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
    return sum;
  } else {
    return 0;
  }
}

document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = 'indexdn.html';
});
