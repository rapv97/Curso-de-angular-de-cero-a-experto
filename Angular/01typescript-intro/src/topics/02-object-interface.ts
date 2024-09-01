

let skills : string[] = ['bash','counter','healing'];


interface Character{
    name    : string;
    hp      : number;
    skills  : string[];
    hometown?: string; //opcional con el signo ?
}

const strider: Character = {
    name    : 'strider',
    hp      :100,
    skills  :['Bash','counter']
    
};


strider.hometown = 'Riverdell';

console.table(strider);












export{};



