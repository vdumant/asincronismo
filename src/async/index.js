const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => resolve('Do something'), 3000)
            : reject(new Error('error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('before');
doSomething();
console.log('after');


const anotheFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('before2');
anotheFunction();
console.log('after2');