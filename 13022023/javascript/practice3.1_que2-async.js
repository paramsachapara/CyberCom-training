async function func1() {
    setTimeout(() => {
        console.log("Output from one");
    }, 5000);
}

async function func2() {
    setTimeout(() => {
        console.log("Output from two");
    }, 10000);
}

async function func3() {
    setTimeout(() => {
        console.log("Output from three");
    }, 15000);
}

async function main() {
    await func1();
    await func2();
    await func3();
}

main();