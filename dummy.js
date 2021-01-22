const workingState = 
{
    "Work" : "working",
    "Rest" : "Resting"
}
const barista = 
[
    { name : "창민", makingTime : 5000, state : "Resting", waitingNum : 0},        //waitingNum : 만들고 있는 손님의 대기번호, makingMenu : 만들고 있는 메뉴
    { name : "재희", makingTime : 8000, state : "Resting", waitingNum : 0}
]

const customer = 
[
    {
        waitingNum : 1, orderMenu :""
    }
]

const menu = 
[
    { name : "아메리카노"},
    { name : "카페라떼" },
    { name : "얼그레이 밀크티" },
    { name : "민트초코프라푸치노"},
    { name : "페퍼민트티" },
    { name : "카라멜 마끼아또" },
    { name : "망고스무디"}
]

export {barista, customer, menu, workingState}