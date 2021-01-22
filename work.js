import { barista, customer, workingState} from "./dummy.js"

let cnt = customer.length

//손님 생성
const addCustomer = ()=>
{
    cnt++
    customer.push({ waitingNum : cnt, orderMenu: ""})
    appendCustomer(cnt)
}
//html에 손님 추가
const appendCustomer = (num)=>
{
    const newLi = document.createElement("li")
    newLi.className = "customerLi"
    newLi.innerHTML = customerHtml(num)
    document.querySelector("#customerUl").appendChild(newLi)
}


//고객을 화면에 표시해줄 html 문자열을 생성해서 반환
const customerHtml = (num) => 
    `<div class="customer">` + num + `</div>`

//주문 버튼을 누를때
const orderMenu = ()=>
{
    const cus = noneOrderCustomer()
    const bar = findRestingBarista()
    const num = cus.waitingNum
    const menu = checkOrderMenu()

    if(bar === undefined)
    {
        alert("주문을 받을 수 있는 바리스타가 없습니다, 잠시후 주문해주세요")
        return
    }

    updateCustomer(cus, menu)
    updateBarista(bar, workingState["Work"], num)
    makingCoffee(bar,cus, finishMake)
}

//줄 선 손님중 주문을 하지 않은 첫번째 손님 반환
const noneOrderCustomer = ()=> customer.find((c)=> c.orderMenu==="")

//일을 할 수 있는 바리스타 반환
const findRestingBarista = ()=> barista.find((item)=>item.state === workingState["Rest"])

//회원 상태 변경
const updateCustomer = (cus, menu)=> cus.orderMenu = menu

const updateBarista = (bar, state, num)=>
{
    bar.state = state
    bar.waitingNum = num
}

//바리스타에게 일 줌
const makingCoffee = (bar, cus, callback)=>
{   
    alert(`${bar.name} 바리스타가 ${cus.orderMenu}를 만들기 시작합니다!`)
    if(typeof callback !=="function") return
    updateBarista(bar,workingState["Work"], cus.waitingNum)
    setTimeout(callback, bar.makingTime,bar,cus)
}

//음료수를 다 만들면 일어나는일
const finishMake = (bar, cus)=>
{
    alert(`${cus.waitingNum}번 손님 ${cus.orderMenu} 나왔습니다!`)
    deleteCustomerHtml(cus.waitingNum)
    deleteCustomer(cus)
    updateBarista(bar, workingState["Rest"], 0)
}

const deleteCustomer = (cus)=>
{
    const idx = customer.findIndex((c)=> c === cus)
    customer.splice(idx, 1)
}

const deleteCustomerHtml = (num)=>
{
    const idx = customer.findIndex((c)=> c.waitingNum ===num)
    const cus = document.querySelectorAll(".customerLi")[idx]
    cus.parentNode.removeChild(cus)
}



const checkOrderMenu = ()=>
{
    const radio = document.querySelectorAll(".menuRadio")
    for(let i=0;i<radio.length;i++)
    {
        if(radio[i].checked) return radio[i].value
    }
}

// const printBaristaWorking = (bar)=>
// {

// }

// const printBaristaDone = ()=>
// {

// }

const changeBarist = (name,num,menu)=>
{
    const bar = barista.filter((b) => b.name === name)
    bar.waitingNum = num
    bar.makingMenu = menu
}

export {addCustomer, customerHtml, orderMenu}