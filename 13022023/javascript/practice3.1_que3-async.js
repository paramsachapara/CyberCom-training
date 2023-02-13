async function func1() {
    setTimeout(async () => {
        console.log("Output from one");
        await func2();
    }, 10000);
}

async function func2() {
    setTimeout(async() => {
        console.log("Output from two");
        await func3();
    }, 10000);
}

async function func3() {
    setTimeout(() => {
        console.log("Output from three");
    }, 8000);
}

func1();