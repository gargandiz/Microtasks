import './App.css';
import React, {useState} from "react";
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponents/NewComponent";
import {Button} from "./Components/Button";

type FilterType = "all" | "dollar" | "ruble"

function App() {

//=====================================================Lesson_2=========================================================
  // const [students, setStudents] = useState([
  //         {id: 1, name: "James", age: 8},
  //         {id: 2, name: "Robert", age: 18},
  //         {id: 3, name: "John", age: 28},
  //         {id: 4, name: "Michael", age: 38},
  //         {id: 5, name: "William", age: 48},
  //         {id: 6, name: "David", age: 58},
  //         {id: 7, name: "Richard", age: 68},
  //         {id: 8, name: "Joseph", age: 78},
  //         {id: 9, name: "Thomas", age: 88},
  //         {id: 10, name: "Charles", age: 98},
  //         {id: 11, name: "Christopher", age: 100},
  //     ]
  // )
//=====================================================Lesson_3=========================================================
  // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //     console.log("Hello, I'm Vasiliy")
  // }
  // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //     console.log("Hello, I'm Ivan")
  // }
//======================================================================================================================
  // const onClickHandler = (name: string) => {
  //     console.log(name);
  // }
//======================================================================================================================
  // const massage_1 = () => {
  //     //ничего не передавать, но в консоли должно быть +100500
  //     console.log("+100500");
  // }
  // const massage_2 = (message: string) => {
  //     //передать +100500
  //     console.log(message);
  // }
//======================================================================================================================
//   const Button_1_Foo = (subscriber: string, age: number, address: string) => {
//     console.log(subscriber, age, address)
//   }
//   const Button_2_Foo = (subscriber: string) => {
//     console.log(subscriber)
//   }
//   const Button_3_Foo = () => {
//     console.log("I'm stupid button")
//   }
//=====================================================Lesson_4=========================================================
    // let a = 1;
    // let [a, setA] = useState(0)
    // const onClickHandlerPlus = () => {
    //     setA(++a);
    //     console.log(a);
    // }
    // const onClickHandlerZero = () => {
    //     setA(a = 0);
    //     console.log(a);
    // }
//=====================================================Lesson_5=========================================================
    const [money, setMoney] = useState([
        { banknote: 'dollar', nominal: 100, number: ' a1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' z1234567890' },
        { banknote: 'ruble', nominal: 100, number: ' w1234567890' },
        { banknote: 'dollar', nominal: 100, number: ' e1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' c1234567890' },
        { banknote: 'ruble', nominal: 100, number: ' r1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' x1234567890' },
        { banknote: 'ruble', nominal: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money;
    if (filter === "dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar");
    }
    if (filter === "ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble");
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }
//=====================================================Lesson_5=========================================================
  return (
      // <>
        <div className="App">

{/* =====================================================Lesson_1====================================================*/}
        {/*<Header title={'New Header'}/>*/}
        {/*<Body title={'New Body'}/>*/}
        {/*<Footer title={'new Footer'}/>*/}
{/* =====================================================Lesson_2====================================================*/}
        {/*<NewComponent students={students}/>*/}
{/* =====================================================Lesson_3====================================================*/}
        {/*<button onClick={(event) => {myFirstSubscriber()}}>My YouTube Channel-1</button>*/}
        {/*<button onClick={(event) => {mySecondSubscriber()}}>My YouTube Channel-2</button>*/}
        {/*==========================================================================================================*/}
        {/*<button onClick={(event) => {console.log("Hello")}}>My YouTube Channel-2</button>*/}
        {/*==========================================================================================================*/}
        {/*<button onClick={(event) => {onClickHandler("Vasiliy")}}>My YouTube Channel-1</button>*/}
        {/*<button onClick={(event) => {onClickHandler("Ivan")}}>My YouTube Channel-1</button>*/}
        {/*==========================================================================================================*/}
        {/*<button onClick={massage_1}>1</button>*/}
        {/*<button onClick={() => {massage_2("+100500")}}>2</button>*/}
        {/*==========================================================================================================*/}
        {/*<button>My YouTube Channel-1</button>*/}
        {/*<button>My YouTube Channel-2</button>*/}
        {/*==========================================================================================================*/}
        {/*==========================================================================================================*/}
        {/*<Button name="My YouTube Channel_1" callBack={() =>Button_1_Foo("I'm Vasia", 21, "A'm from Kharkiv")}/>*/}
        {/*<Button name="My YouTube Channel_2" callBack={() => Button_2_Foo("I'm Ivan")}/>*/}
        {/*<Button name="Button_3" callBack={Button_3_Foo}/>*/}
{/*//====================================================Lesson_4====================================================*/}
        {/*<h1>{a}</h1>*/}
        {/*<button onClick={onClickHandlerPlus}>plus</button>*/}
        {/*<button onClick={onClickHandlerZero}>zero</button>*/}
{/*//====================================================Lesson_5====================================================*/}
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:"45px"}}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler("dollar")}>dollars</button>
                <button onClick={() => onClickFilterHandler("ruble")}>rubles</button>
            </div>

        </div>
      // </>
  )
}

export default App;
