import {addCustomer, customerHtml, orderMenu} from "./work.js"
import {barista, customer, menu} from "./dummy.js"

//화면에 메뉴 출력
const createMenu = ()=> 
{
    const text =`<ul id = "menuUl">메뉴판`
                    + createMenuLi() +
                `</ul>`
    document.querySelector("#menuDiv").innerHTML = text                     
}

const createMenuLi = ()=>
{
    let text = ``
    menu.forEach((i)=> text += `<li class="menuLi">`
                                    + `<input type="radio" name ="menu" class="menuRadio" value = ${i.name}>` 
                                    + i.name +
                                `</li>`)
    return text
}

//화면에 손님 출력
const createCustomer = ()=>
{
    const text = `<ul id="customerUl">`
                    + createCustomerLi() +
                 `</ul>`
    document.querySelector("#customerDiv").innerHTML = text
}

const createCustomerLi = ()=>
{
    let text = ``                       //class에 waitingNum도 같이 추가됨..?
    customer.forEach((i)=> text += `<li class ="customerLi">` 
                                        + customerHtml(i.waitingNum) + 
                                    `</li>`)
    return text
}

//화면에 바리스타 출력
const createBarista = ()=>
{
    document.querySelector("#baristaPosition").innerHTML = createBaristaDiv()
}

const createBaristaDiv = ()=>
{
    let text = ``
    barista.forEach((i)=> text +=`<div class = baristaDiv>`+i.name+`</div>`)
    return text
}



window.addEventListener('load', ()=>
{
    document.querySelector("#addCustomerBtn").addEventListener("click", addCustomer)
    document.querySelector("#addOrerBtn").addEventListener("click", orderMenu)
    createMenu()
    createCustomer()
    createBarista()
})