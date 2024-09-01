

interface AudioPLayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {

    author: string;
    year: number;
}

const audioPlayer: AudioPLayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
const { song, songDuration:duration, 
            audioVolume:volume, // details:{author:author2}
            details } =audioPlayer;

const {author } = details;

// console.log('Song: ', song);
// console.log('Duration: ', duration);
// console.log('Volumen: ', volume);
// console.log('Author: ', author);


//desestructuracion de arreglos

const dbz: string[] = ['goku', 'vegeta', 'trunks'];

const [, , trunk = 'Not found'] = dbz;

console.log(trunk);
