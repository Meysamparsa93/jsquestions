// foreach

function likeForEach(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i], i, arr);
    }
}

// filter

function likeFilter(arr, callBack) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// map

function likeMap(arr, callBack) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callBack(arr[i], i, arr));
    }
    return result;
}

// some

function likeSome(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

// every

function likeEvery(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        if (!callBack(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

// find

function likeFind(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            return arr[i];
        }
    }
}

// findIndex 

function likeFindIndex(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

// join

function joinArray(arr, seprator = ",") {
    let result = "";
    if (arr.length === 0) {
        return result;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            result += arr[i];
        } else {
            result += arr[i] + seprator;
        }
    }
    return result;
}

// reduce

function myReduce(arr, func, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

// Users

import users from "./Users.js"

// 1

function getEmails(data) {
    return data.map(item => item.email);
}
getEmails();

// 2

function getIranianUsers(users) {
    const iranianUsers = users.filter(user => user.country === "Iran");
    const result = iranianUsers.map(user => ({ name: user.firstName, lastName: user.lastName }));
    return result;
}
getIranianUsers();

// 3

function getNonBinaryUsers(users) {
    const nonBinaryUsers = users.filter(user => user.gender === "Non-binary");
    const result = nonBinaryUsers.map(user => ({ name: user.firstName, bankBalance: user.balance }));
    return result;
}
getNonBinaryUsers();

// 4

function getAmericanEmails(users) {
    const richAmericans = users.filter(user => user.country === "United States" && user.balance > 500000);
    const result = richAmericans.map(user => user.email);
    return result;
}
getAmericanEmails();

// 5

function getSortedBalance(users) {
    const iranians = users.filter(user => user.country === "Iran");
    const sortedIranians = iranians.sort((a, b) => b.balance - a.balance);
    const result = sortedIranians.map(user => user.firstName + " " + user.lastName);
    return result;
}
getSortedBalance();

// 6

function getEmailsLong(users) {
    const filteredUsers = users.filter(user => user.email.length > 30);
    const result = filteredUsers.map(user => user.firstName + " " + user.lastName);
    return result;
}
getEmailsLong();

// 7

function getEduEmails(users) {
    const filteredUsers = users.filter(user => user.email.endsWith(".edu"));
    const result = filteredUsers.map(user => user.balance);
    return result;
}
getEduEmails();

// 8

// with reduce
function getFemaleCount(users) {

    const count = users.reduce((acc, user) => {
        if (user.gender === "Female") {
            return acc + 1;
        }
        return acc;
    }, 0);
    return count;
}
getFemaleCount();

// without reduce
function getFemalesCount(users) {
    const filteredUsers = users.filter(user => user.gender === "Female");
    const count = filteredUsers.length;
    return count;
}
getFemalesCount();

//   9

// with reduce
function sumMaleBalance(users) {

    const maleUsers = users.filter(user => user.gender === "Male");
    const totalBalance = maleUsers.reduce((acc, user) => acc + user.balance, 0);
    return totalBalance;
}
sumMaleBalance();

// without reduce
function maleBalance(users) {

    const maleUsers = users.filter(user => user.gender === "Male");
    let totalBalance = 0;
    for (let i = 0; i < maleUsers.length; i++) {
        totalBalance += maleUsers[i].balance;
    }
    return totalBalance;
}
maleBalance();

// 10

function getFranceAverageBalance(users) {
    const frenchUsers = users.filter(user => user.country === "France");
    const totalBalance = frenchUsers.reduce((acc, user) => acc + user.balance, 0);
    const averageBalance = totalBalance / frenchUsers.length;
    return averageBalance;
}
getFranceAverageBalance();

// 11

// 12

function wealthiestUnder21(users) {
    const under21 = users.filter(user => (new Date() - new Date(user.birthDate)) < 21 * 365 * 24 * 60 * 60 * 1000);
    const wealthiest = under21.reduce((acc, user) => {
        if (user.balance > acc.wealth) {
            acc.name = `${user.firstName} ${user.lastName}`;
            acc.country = user.country;
            acc.wealth = user.balance;
        }
        return acc;
    }, { name: '', country: '', wealth: 0 });
    return wealthiest;
}
wealthiestUnder21();

// 13

function iranianDetails(users) {
    const iranians = users.filter(user => user.country === 'Iran');
    const emailsAndAges = iranians.map(user => ({ email: user.email, age: Math.floor((new Date() - new Date(user.birthDate)) / (365 * 24 * 60 * 60 * 1000)) }));
    return emailsAndAges;
}
iranianDetails();

// 14

function ageDifference(users) {
    const richestMaleAmerican = users.filter(user => user.gender === 'Male' && user.country === 'United States')
        .reduce((acc, user) => user.balance > acc.balance ? user : acc);
    const richestFemaleFrench = users.filter(user => user.gender === 'Female' && user.country === 'France')
        .reduce((acc, user) => user.balance > acc.balance ? user : acc);
    const ageDifference = Math.abs(Math.floor((new Date(richestMaleAmerican.birthDate) - new Date(richestFemaleFrench.birthDate)) / (365 * 24 * 60 * 60 * 1000)));
    return ageDifference;
}
ageDifference();

// 15

function averageAges(users) {
    const countries = [...new Set(users.map(user => user.country))];
    const averageAges = countries.map(country => {
        const countryUsers = users.filter(user => user.country === country);
        const totalAge = countryUsers.reduce((acc, user) => acc + Math.floor((new Date() - new Date(user.birthDate)) / (365 * 24 * 60 * 60 * 1000)), 0);
        const averageAge = totalAge / countryUsers.length;
        return { country: country, averageAge: averageAge };
    });
    return averageAges;
}
averageAges();

// 16

function iranianAverageBalance(users) {
    const iranians = users.filter(user => user.country === 'Iran' && new Date(user.birthDate).getDate() >= 16);
    const totalBalance = iranians.reduce((acc, user) => acc + user.balance, 0);
    const averageBalance = totalBalance / iranians.length;
    return averageBalance;
}
iranianAverageBalance();

// 17

function namesWithAb(users) {
    const namesWithAb = users.filter(user => (user.firstName.toLowerCase().includes('ab') || user.lastName.toLowerCase().includes('ab')));
    const formattedNames = namesWithAb.map(user => `${user.firstName} ${user.lastName}`);
    return formattedNames;
}
namesWithAb();

// 18

function wealthiestPeople(users) {
    const wealthiest = users.reduce((acc, user) => {
        if (user.balance > acc.wealth) {
            acc.names = [`${user.firstName} ${user.lastName}`];
            acc.wealth = user.balance;
        } else if (user.balance === acc.wealth) {
            acc.names.push(`${user.firstName} ${user.lastName}`);
        }
        return acc;
    }, { names: [], wealth: 0 });
    return wealthiest.names;
}
wealthiestPeople();

// 19

function removeWealthiest(users) {
    const countries = [...new Set(users.map(user => user.country))];
    const filteredUsers = [];
    countries.forEach(country => {
        const countryUsers = users.filter(user => user.country === country);
        const wealthiest = countryUsers.reduce((acc, user) => user.balance > acc.balance ? user : acc);
        const filteredCountryUsers = countryUsers.filter(user => user !== wealthiest);
        filteredUsers.push(...filteredCountryUsers);
    });
    return filteredUsers;
}
removeWealthiest();

// 20

function removeUnderage(users) {
    const filteredUsers = users.filter(user => !(user.country === 'Iran' && new Date(user.birthDate) >= new Date('1993-09-23'))
        && !(user.country === 'United States' && (new Date() - new Date(user.birthDate)) < 26 * 365 * 24 * 60 * 60 * 1000));
    return filteredUsers;
}
removeUnderage();