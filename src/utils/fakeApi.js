import { delay } from "./delay";

export async function fetchTokens(userId) {
  // userId, для того, чтобы подтягивать данные твоего юзера
  await delay(50); //потом удалишь
  // data = await fetch('api'); Запрос на твой api  за данными
  const data = tokens;
  return data;
}

export async function fetchUser(userId) {
  // data = await fetch('api'); Запрос на твой api  за данными
  const data = users.find((user) => user.id === userId);
  return data;
}
export async function fetchHistory(userId) {
  // userId, для того, чтобы подтягивать данные твоего юзера
  await delay(50); //потом удалишь
  // data = await fetch('api'); Запрос на твой api  за данными
  const data = history;
  return data;
}
export async function fetchWePools(userId) {
  // userId, для того, чтобы подтягивать данные твоего юзера
  await delay(50); //потом удалишь
  // data = await fetch('api'); Запрос на твой api  за данными
  const data = wePools;
  return data;
}
export async function fetchMyPools(userId) {
  // userId, для того, чтобы подтягивать данные твоего юзера
  await delay(50); //потом удалишь
  // data = await fetch('api'); Запрос на твой api  за данными
  const data = myPools;
  return data;
}
export async function fetchDailyUpgrades(userId) {
  // data = await fetch('api'); Запрос на твой api  за данными
  await delay(50); //потом удалишь
  const data = dailyUpgrade.find((user) => user.id === userId);
  return data.arr;
}

export async function fetchDailyTasks(userId) {
  // data = await fetch('api'); Запрос на твой api  за данными
  await delay(50); //потом удалишь
  const data = dailyTasks;
  return data;
}

export async function fetchFriendList() {
  // data = await fetch('api'); Запрос на твой api  за данными
  await delay(50); //потом удалишь
  const data = friendList;
  return data;
}
export async function fetchTaskList() {
  // data = await fetch('api'); Запрос на твой api  за данными
  await delay(50); //потом удалишь

  const data = taskList;
  return data;
}

const tokens = [
  {
    id: 1,
    name: "Toncoin",
    symbolName: "tonkoin.png",
    haveCoins: "3,47",
    price: "5,74",
    change: "3,65",
    total: "19,98",
  },
  {
    id: 2,
    name: "USD₮",
    symbolName: "usdt.png",
    haveCoins: "5,47",
    price: "1",
    change: "-5,3",
    total: "29.37",
  },
  {
    id: 3,
    name: "DOGS",
    symbolName: "dogs.png",
    haveCoins: "6,47",
    price: "0,0011",
    change: "10,55",
    total: "13.52",
  },
  {
    id: 4,
    name: "Toncoin",
    symbolName: "tonkoin.png",
    haveCoins: "3,47",
    price: "5,74",
    change: "3,65",
    total: "19,98",
  },
  {
    id: 5,
    name: "USD₮",
    symbolName: "usdt.png",
    haveCoins: "5,47",
    price: "1",
    change: "-5,3",
    total: "29.37",
  },
  {
    id: 6,
    name: "DOGS",
    symbolName: "dogs.png",
    haveCoins: "6,47",
    price: "0,0011",
    change: "10,55",
    total: "13.52",
  },
];

const users = [
  {
    id: 23456,
    name: "John Doe",
    email: "john.doe@example.com",
    balance: "23567",
    weBalance: "55000",
    tonBalance: "55000",
    photoUrl: "img/user-photo.png",
    coins: [
      { code: "near", value: "4.25" },
      { code: "ton", value: "2.37" },
    ],
  },
  {
    id: 22326,
    name: "Sydney Swenney",
    email: "sydney.swe@example.com",
    balance: "12567",
    weBalance: "155000",
    tonBalance: "55000",
    photoUrl: "img/user-photo.png",
    coins: [
      { code: "near", value: "4.25" },
      { code: "ton", value: "2.37" },
    ],
  },
];

const history = [
  {
    id: 1,
    date: "Mar 12 2024 10:00:00 AM",
    coinName: "USD₮",
    coinCode: "USDT",
    symbolName: "usdt.png",
    operation: "buy",
    amount: "3,53",
  },
  {
    id: 2,
    date: "Mar 13 2024 11:00:00 AM",
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    operation: "sold",
    amount: "5,27",
  },
  {
    id: 3,
    date: "Mar 12 2024 09:00:00 AM",
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    operation: "buy",
    amount: "5,65",
  },
  {
    id: 4,
    date: "Mar 14 2024 10:00:00 AM",
    coinName: "USD₮",
    coinCode: "USDT",
    symbolName: "usdt.png",
    operation: "buy",
    amount: "7,35",
  },
  {
    id: 5,
    date: "Mar 13 2024 11:00:00 AM",
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    operation: "buy",
    amount: "2,03",
  },
  {
    id: 6,
    date: "Mar 15 2024 09:00:00 AM",
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    operation: "buy",
    amount: "2,65",
  },
  {
    id: 7,
    date: "Mar 13 2024 10:00:00 AM",
    coinName: "USD₮",
    coinCode: "USDT",
    symbolName: "usdt.png",
    operation: "sold",
    amount: "3,65",
  },
  {
    id: 8,
    date: "Mar 15 2024 08:00:00 AM",
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    operation: "sold",
    amount: "3,25",
  },
  {
    id: 9,
    date: "Mar 14 2024 09:00:00 AM",
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    operation: "buy",
    amount: "9,65",
  },
];

const myPools = [
  {
    id: 1,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    aprValue: "10",
    status: "approve",
    days: "14",
    amount: "0.005",
    claimableAmount: "0.001470",
    dailyInc: "0.00005",
    expDate: "24.12.2024",
  },
  {
    id: 2,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    aprValue: "12",
    status: "approve",
    days: "30",
    amount: "0.1",
    claimableAmount: "0.002",
    dailyInc: "0.0001",
    expDate: "15.01.2025",
  },
  {
    id: 3,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "8",
    status: "disapprove",
    days: "14",
    amount: "0.03",
    claimableAmount: "0.0008",
    dailyInc: "0.00002",
    expDate: "10.11.2024",
  },
  {
    id: 4,
    coinName: "USD₮",
    coinCode: "USDT",
    symbolName: "usdt.png",
    aprValue: "5",
    status: "approve",
    days: "30",
    amount: "0.5",
    claimableAmount: "0.01",
    dailyInc: "0.0001",
    expDate: "01.12.2025",
  },
  {
    id: 5,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "9",
    status: "approve",
    days: "30",
    amount: "0.02",
    claimableAmount: "0.0005",
    dailyInc: "0.00003",
    expDate: "20.12.2024",
  },
  {
    id: 6,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    aprValue: "11",
    status: "approve",
    days: "14",
    amount: "0.07",
    claimableAmount: "0.0012",
    dailyInc: "0.00004",
    expDate: "30.11.2024",
  },
  {
    id: 7,
    coinName: "Toncoin",
    coinCode: "TON",
    symbolName: "tonkoin.png",
    aprValue: "13",
    status: "approve",
    days: "30",
    amount: "0.2",
    claimableAmount: "0.003",
    dailyInc: "0.00015",
    expDate: "05.01.2025",
  },
  {
    id: 8,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "disapprove",
    days: "14",
    amount: "0.01",
    claimableAmount: "0.0003",
    dailyInc: "0.00001",
    expDate: "15.11.2024",
  },
];

const wePools = [
  {
    id: 1,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "disapprove",
    days: "14",
    deposit: {
      min: "0.01",
      max: "10",
    },
    estIncome: "0.0",
    balance: "0.16",
  },
  {
    id: 2,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "approve",
    days: "30",
    deposit: {
      min: "0.05",
      max: "15",
    },
    estIncome: "0.1",
    balance: "0.25",
  },
  {
    id: 3,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "pending",
    days: "7",
    deposit: {
      min: "0.02",
      max: "20",
    },
    estIncome: "0.05",
    balance: "0.50",
  },
  {
    id: 4,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "approve",
    days: "14",
    deposit: {
      min: "0.01",
      max: "10",
    },
    estIncome: "0.0",
    balance: "0.30",
  },
  {
    id: 5,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "disapprove",
    days: "21",
    deposit: {
      min: "0.03",
      max: "12",
    },
    estIncome: "0.08",
    balance: "0.40",
  },
  {
    id: 6,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "approve",
    days: "10",
    deposit: {
      min: "0.01",
      max: "8",
    },
    estIncome: "0.02",
    balance: "0.20",
  },
  {
    id: 7,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "pending",
    days: "14",
    deposit: {
      min: "0.01",
      max: "10",
    },
    estIncome: "0.0",
    balance: "0.15",
  },
  {
    id: 8,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "approve",
    days: "28",
    deposit: {
      min: "0.02",
      max: "18",
    },
    estIncome: "0.12",
    balance: "0.60",
  },
  {
    id: 9,
    coinName: "DOGS",
    coinCode: "DOGS",
    symbolName: "dogs.png",
    aprValue: "7",
    status: "disapprove",
    days: "14",
    deposit: {
      min: "0.01",
      max: "10",
    },
    estIncome: "0.0",
    balance: "0.10",
  },
];

const dailyUpgrade = [
  {
    id: 23456,
    arr: [
      {
        id: 1,
        nameUp: "Daily Check",
        value: "6000",
        lvl: "3",
      },
      {
        id: 2,
        nameUp: "Week Check",
        value: "4450",
        lvl: "2",
      },
      {
        id: 3,
        nameUp: "Bonus plus",
        value: "8300",
        lvl: "3",
      },
      {
        id: 4,
        nameUp: "Daily Check",
        value: "3230",
        lvl: "2",
      },
      {
        id: 5,
        nameUp: "Daily Check",
        value: "7200",
        lvl: "4",
      },
      {
        id: 6,
        nameUp: "Daily Check",
        value: "6000",
        lvl: "3",
      },
      {
        id: 7,
        nameUp: "Daily Check",
        value: "6000",
        lvl: "3",
      },
      {
        id: 8,
        nameUp: "Daily Check",
        value: "6000",
        lvl: "3",
      },
    ],
  },
];

const dailyTasks = [
  {
    id: 1,
    nameTask: "Daily Check",
    buttonName: "Claim",
    buttonStatus: true,
    value: "3230",
  },
  {
    id: 2,
    nameTask: "Daily Transaction",
    buttonName: "Send",
    buttonStatus: true,
    value: "4870",
  },
  {
    id: 3,
    nameTask: "Daily Friends",
    buttonName: "Claim",
    buttonStatus: false,
    value: "5350",
  },
  {
    id: 4,
    nameTask: "Week Transaction",
    buttonName: "Send",
    buttonStatus: true,
    value: "2430",
  },
  {
    id: 5,
    nameTask: "Week Friends",
    buttonName: "Claim",
    buttonStatus: false,
    value: "1230",
  },
  {
    id: 6,
    nameTask: "Daily Check",
    buttonName: "Claim",
    buttonStatus: true,
    value: "3230",
  },
];

const friendList = [
  {
    id: 11245,
    name: "Sydney Sweeney",
    coins: [
      { code: "near", value: "4.25" },
      { code: "ton", value: "2.37" },
    ],
    photoUrl: "",
  },
  {
    id: 34987,
    name: "John Wick",
    coins: [
      { code: "near", value: "2.35" },
      { code: "ton", value: "2.49" },
    ],
    photoUrl: "../img/user-photo.png",
  },
  {
    id: 34509,
    name: "John Wick",
    coins: [
      { code: "near", value: "6.35" },
      { code: "ton", value: "1.47" },
    ],
    photoUrl: "",
  },
  {
    id: 12340,
    name: "John Wick",
    coins: [
      { code: "near", value: "5.45" },
      { code: "ton", value: "7.33" },
    ],
    photoUrl: "../img/user-photo.png",
  },
  {
    id: 11335,
    name: "John Wick",
    coins: [
      { code: "near", value: "2.75" },
      { code: "ton", value: "5.59" },
    ],
    photoUrl: "../img/user-photo.png",
  },
];

const taskList = [
  {
    id: 88,
    category: "New",
    tasks: [
      {
        id: 2345,
        title: "Navigating Crypto",
        value: "250",
        buttonName: "Start",
        status: "active",
      },
      {
        id: 3456,
        title: "Secure your Crypto!",
        value: "250",
        buttonName: "Verify",
        status: "active",
      },
      {
        id: 4567,
        title: "The Open League Quest",
        value: "450",
        buttonName: "Start",
        status: "rejected",
      },
      {
        id: 8769,
        title: "Backing from Binance Labs",
        value: "111",
        buttonName: "Start",
        status: "done",
      },
      {
        id: 5467,
        title: "The Open League Quest",
        value: "450",
        buttonName: "Start",
        status: "rejected",
      },
      {
        id: 7869,
        title: "Backing from Binance Labs",
        value: "111",
        buttonName: "Start",
        status: "done",
      },
      {
        id: 1267,
        title: "The Open League Quest",
        value: "450",
        buttonName: "Start",
        status: "rejected",
      },
      {
        id: 7362,
        title: "Backing from Binance Labs",
        value: "111",
        buttonName: "Start",
        status: "done",
      },
    ],
  },
  {
    id: 77,
    category: "Partners",
    tasks: [
      {
        id: 1345,
        title: "Add Crypto Parner",
        value: "450",
        buttonName: "Start",
        status: "active",
      },
      {
        id: 4056,
        title: "Connect to partner",
        value: "350",
        buttonName: "Check",
        status: "active",
      },
      {
        id: 4067,
        title: "Add more partners",
        value: "550",
        buttonName: "Start",
        status: "done",
      },
      {
        id: 8069,
        title: "Connect bigApple",
        value: "111",
        buttonName: "Check",
        status: "active",
      },
    ],
  },
  {
    id: 66,
    category: "Onchain",
    tasks: [
      {
        id: 3445,
        title: "Navigating Crypto",
        value: "250",
        buttonName: "Start",
        status: "active",
      },
      {
        id: 3786,
        title: "Secure your Crypto!",
        value: "250",
        buttonName: "Verify",
        status: "active",
      },
      {
        id: 4907,
        title: "The Open League Quest",
        value: "450",
        buttonName: "Start",
        status: "rejected",
      },
      {
        id: 2169,
        title: "Backing from Binance Labs",
        value: "111",
        buttonName: "Start",
        status: "done",
      },
    ],
  },
  {
    id: 55,
    category: "Socials",
    tasks: [
      {
        id: 1345,
        title: "Navigating Crypto",
        value: "250",
        buttonName: "Start",
        status: "active",
      },
      {
        id: 1456,
        title: "Secure your Crypto!",
        value: "250",
        buttonName: "Verify",
        status: "active",
      },
      {
        id: 1567,
        title: "The Open League Quest",
        value: "450",
        buttonName: "Start",
        status: "rejected",
      },
      {
        id: 1769,
        title: "Backing from Binance Labs",
        value: "111",
        buttonName: "Start",
        status: "done",
      },
    ],
  },
  {
    id: 33,
    category: "Academic",
    tasks: [
      {
        id: 4345,
        title: "Navigating Crypto",
        value: "250",
        buttonName: "Start",
        status: "active",
      },
      {
        id: 4456,
        title: "Secure your Crypto!",
        value: "250",
        buttonName: "Verify",
        status: "active",
      },
      {
        id: 5567,
        title: "The Open League Quest",
        value: "450",
        buttonName: "Start",
        status: "rejected",
      },
      {
        id: 7769,
        title: "Backing from Binance Labs",
        value: "111",
        buttonName: "Start",
        status: "done",
      },
    ],
  },
  {
    id: 22,
    category: "Academic",
    tasks: [
      {
        id: 7345,
        title: "Navigating Crypto",
        value: "250",
        buttonName: "Start",
        status: "active",
      },
      {
        id: 7456,
        title: "Secure your Crypto!",
        value: "250",
        buttonName: "Verify",
        status: "active",
      },
      {
        id: 8567,
        title: "The Open League Quest",
        value: "450",
        buttonName: "Start",
        status: "rejected",
      },
      {
        id: 9769,
        title: "Backing from Binance Labs",
        value: "111",
        buttonName: "Start",
        status: "done",
      },
    ],
  },
];
