const fnAsync = () => {
    return new promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        :reject(new Error('Error!'));
    });
}

const anotherFn = async () =>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');