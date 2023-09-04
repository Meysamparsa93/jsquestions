function calculate(f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c)
            }
        }
    }
}

function cal(a, b, c) {
    if (c == "+") {
        return a + b
    } else if (c == "-") {
        return a - b
    } else if (c == "*") {
        return a * b
    } else if (c == "/") {
        return a / b
    }
}

let calResult = calculate(cal);
calResult(1)(2)("*");




function sum(a, b) {
    if (a > b) {
        return 0
    } else {
        return b + sum(a, b - 1)
    }
}

sum(1, 5);




function limitCallForEveryDuration(callBack, second) {
    let lastRun = null;
    return function () {
        if (lastRun == null || Date.now() >= (lastRun + (second * 1000))) {
            callBack();
            lastRun = Date.now();
        }
    }
}

let limitedLogName = limitCallForEveryDuration(log, 2)
for (let i = 0; i < 100; i++) {
    limitedLogName();
}




let oldTasks;

function slowSum(a, b) {
    oldTasks = JSON.parse(localStorage.getItem('task'));
    if (oldTasks != null) {
        for (let i = 0; i < oldTasks.length; i++) {
            if (oldTasks != null && oldTasks[i].firstNum == a && oldTasks[i].secondNum == b) {
                return oldTasks[i].result
            } else {
                if (!oldTasks) {
                    oldTasks = [];
                    oldTasks.length = 0;
                }
                let newobj = {};
                newobj.firstNum = a;
                newobj.secondNum = b;
                newobj.result = a + b;
                oldTasks.push(newobj);
                localStorage.setItem('task', JSON.stringify(oldTasks));
                return a + b
            }
        }
    } else {
        if (!oldTasks) {
            oldTasks = [];
            oldTasks.length = 0;
        }
        let newobj = {};
        newobj.firstNum = a;
        newobj.secondNum = b;
        newobj.result = a + b;
        oldTasks.push(newobj);
        localStorage.setItem('task', JSON.stringify(oldTasks));

        return a + b
    }
}


slowSum(50, 8)
