const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs');
const menu = Object({ADD:'1', CHANGE:'2', DELETE:'3', PRINT:'4', EXIT:'5'});
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

function showMenu(){
    console.log("1. Todo 추가, 2. 상태 변경, 3. 일정 삭제, 4. 전체 출력, 5. 종료");
}

function selectMenu(line){
    switch(line){
        case menu.ADD:
            addTask();
            break;
        case menu.CHANGE:
            changeTask();
            break;
        case menu.DELETE:
            deleteTask();
            break;
        case menu.PRINT:
            printTask();
            break;
        case menu.EXIT:
            writeTask();
            process.exit();
            break;
        default :
            console.log("다시 입력해주세요.");
    }
}



function addTask(){
    const date = new Date();

    r.question('내용을 입력해주세요. : ', (str) => {
        data.splice(0, 0, {name: `${str}`, date: `${date.toLocaleString()}`, state: "Todo" });
    });
}

function changeTask(){
    printTask();
    r.question('index를 선택해주세요', (idx) => {
        r.question('1. Todo, 2. Doing, 3. Done', (state) => {
            if (state === '1')
                data[idx - 1].state = "Todo";
            else if(state === '2')
                data[idx - 1].state = "Doing";
            else if(state === '3')
                data[idx - 1].state = "Done";
        })
    });
}

function deleteTask(){
    printTask();
    r.question('index를 선택해주세요 : ', (idx) => {
       data.splice(idx - 1, 1);
    });
}

function printTask(){
    sortTask();
    for(let i = 0; i < data.length; i++){
        console.log(`${i + 1} : ${data[i].name} | ${data[i].date} | ${data[i].state}`);
    }
}

function sortTask(){
    data.sort((a,b) => {
        if(a.state === "Todo"){
            if(b.state === "Doing" || b.state === "Done"){
                return -1;
            }
            return 0;
        }
        else if(a.state === "Doing"){
            return b.state === "Todo" ? 1 : b.state === "Done" ? -1 : 0;
        }
        else if(a.state === "Done"){
            if(b.state === "Todo" || b.state === "Doing"){
                return 1;
            }
            return 0;
        }
    });
}

function writeTask(){
    fs.writeFileSync('./data.json', JSON.stringify(data));
}

showMenu();

r.on('line', function (line) {
    selectMenu(line);
})
  .on('close', function () {
    process.exit();
});