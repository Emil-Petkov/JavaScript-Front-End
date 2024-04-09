















function solve(array) {
    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numbersOfSongs = array.shift();
    let typeSong = array.pop();

    for (let i = 0; i < numbersOfSongs; i++) {
        let [type, name, time] = array[i].split('_');
        let song = new Songs(type, name, time);
        songs.push(song);

    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));

    } else {
        let filtred = songs.filter((i) => i.type === typeSong);
        filtred.forEach((i) => console.log(i.name));
    }

}

solve(
    [3,
        'favourite_DownTown_3:14',
        'favourite_Kiss_4:16',
        'favourite_Smooth Criminal_4:01',
        'favourite'
    ]
)
