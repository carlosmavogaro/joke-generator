const jokes = [
    {
        partOne: 'Man, I saw a squirrel today. That little guy was living his best life.',
        partTwo: 'He\'s probably out there right now, planning his retirement, thinking,',
        partThree: "'One more nut, and I'm outta here!'",
    },
    {
        partOne: 'You know what\'s more elusive than Bigfoot?',
        partTwo: 'A good Wi-Fi signal in a coffee shop. It\'s like they\'re hiding it behind the barista\'s secret menu.',
        partThree: "'Can I get a Venti Mocha Latte with extra bars of Wi-Fi, please?'",
    },
    {
        partOne: 'I saw a pigeon the other day,',
        partTwo: 'just strutting its stuff like it owns the city. I thought,',
        partThree: "'Man, that bird's got more confidence than I do at a family reunion.'",
    },
    {
        partOne: 'I tried to fold a fitted sheet the other day.',
        partTwo: 'It\'s like trying to fold a mattress into a fortune cookie.',
        partThree: 'I ended up just rolling it into a ball and stuffing it in the closet. Sheet-folding: 0, Me: 1.',
    },
    {
        partOne: 'I tried to cook a fancy meal the other night,',
        partTwo: 'but it turned into a fire hazard faster than you can say \'gourmet.\'',
        partThree: 'Let\'s just say my smoke alarm thinks I\'m a Michelin-star chef now.',
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
    return `${partOne} ${partTwo} ${partThree}`;
}

console.log(createRamdonJoke(randomizeThreeNums()));

