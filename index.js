const jokes = [
    {
        partOne: 'a',
        partTwo: 'b',
        partThree: 'c',
    },
    {
        partOne: 'd',
        partTwo: 'e',
        partThree: 'f',
    },
    {
        partOne: 'g',
        partTwo: 'h',
        partThree: 'i',
    },
    {
        partOne: 'j',
        partTwo: 'k',
        partThree: 'l',
    },
    {
        partOne: 'm',
        partTwo: 'n',
        partThree: 'o',
    },
];

const randomizeThreeNums = () => {
    const numArr = [];
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 5);
        numArr.push(num);
    }
    return numArr;
}

const createRamdonJoke = arr => {
    const partOne = jokes[arr[0]].partOne;
    const partTwo = jokes[arr[1]].partTwo;
    const partThree = jokes[arr[2]].partThree;
    return partOne + partTwo + partThree;
}

console.log(createRamdonJoke(randomizeThreeNums()));

