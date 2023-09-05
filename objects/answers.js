import users from "./users.js"

// 1

function groupByCountry() {

    let result = {};

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const country = user.country;

        if (!result[country]) {
            result[country] = []
        }
        result[country].push(user);
    }
    return result;
}

// 2

function groupByGender() {

    let result = {};

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const gender = user.gender;

        if (!result[gender]) {
            result[gender] = []
        }
        result[gender].push(user);
    }
    return result;
}

// 3

function groupBy(keyName) {

    let result = {};

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const keyNameValue = user[keyName];

        if (!result[keyNameValue]) {
            result[keyNameValue] = []
        }
        result[keyNameValue].push(user);
    }
    return result;
}

// 4

function groupByWithKeyGenerator(keyGenerator) {

    let result = {};

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const keyNameValue = keyGenerator(user);

        if (!result[keyNameValue]) {
            result[keyNameValue] = []
        }
        result[keyNameValue].push(user);
    }
    return result;
}

// 5

function objectMap(inputObj, mapperFunction) {

    let result = {};

    const entries = Object.entries(inputObj);

    entries.forEach(([key, value]) => {
        result[key] = mapperFunction(key, value)
    })

    return result;
}

// 6

function objectFilter(inputObj, filterFunction) {

    let result = {};

    const keys = Object.keys(inputObj);

    keys.forEach((key) => {
        const value = inputObj[key];

        if (filterFunction(key, value)) {
            result[key] = value;
        }
    })

    return result;
}

// 7

function objectReduce(inputObj, reduceFunction, initialValue) {

    let result = initialValue;

    const keys = Object.keys(inputObj);

    keys.forEach((key) => {
        const value = inputObj[key];

        result = reduceFunction(result, key, value);
    })

    return result;
}