const max = Math.floor(26);
const min = Math.ceil(1);
const rowMax = 5;
const cellMax = 5;
const used = [] ;

function CreateTable(){
    doc = document.getElementById('js');
    table = document.createElement("TABLE");

    for (i = 0; i < rowMax; i++){
        let row = table.insertRow(i);
        for (c = 0; c < cellMax; c++){
            cell = row.insertCell(c);
            cell.innerHTML = AddNum(getRandomInt());

        }
    }

    doc.appendChild(table);
}

function getRandomInt() {
    return Math.floor(Math.random() * (max - min) + min);
}

function IsUsed(num){
    return used.includes(num);
}

function AddNum(num){
    //Check if Number is already used
    while (IsUsed(num)){
        num = getRandomInt();
    }

    //Add to array
    used.push(num);
    return num;
}