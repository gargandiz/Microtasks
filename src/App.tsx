import './App.css';
import React, {useState} from "react";
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponents/NewComponent";
import {Button} from "./Components/Button";


function App() {
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
//=========================================================================================================
  // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //     console.log("Hello, I'm Vasiliy")
  // }
  // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //     console.log("Hello, I'm Ivan")
//=========================================================================================================
  // const onClickHandler = (name: string) => {
  //     console.log(name);
  // }
//=========================================================================================================
  // const massage_1 = () => {
  //     //ничего не передавать, но в консоли должно быть +100500
  //     console.log("+100500");
  // }
  // const massage_2 = (message: string) => {
  //     //передать +100500
  //     console.log(message);
  // }
//=========================================================================================================
  const Button_1_Foo = (subscriber: string, age: number, address: string) => {
    console.log(subscriber, age, address)
  }
  const Button_2_Foo = (subscriber: string) => {
    console.log(subscriber)
  }
  const Button_3_Foo = () => {
    console.log("I'm stupid button")
  }
  return (
      <>
        {/*<div>*/}
        {/*=========================================================================================================*/}
        {/*<button onClick={(event) => {myFirstSubscriber()}}>My YouTube Channel-1</button>*/}
        {/*<button onClick={(event) => {mySecondSubscriber()}}>My YouTube Channel-2</button>*/}
        {/*=========================================================================================================*/}
        {/*<button onClick={(event) => {console.log("Hello")}}>My YouTube Channel-2</button>*/}
        {/*=========================================================================================================*/}
        {/*<button onClick={(event) => {onClickHandler("Vasiliy")}}>My YouTube Channel-1</button>*/}
        {/*<button onClick={(event) => {onClickHandler("Ivan")}}>My YouTube Channel-1</button>*/}
        {/*=========================================================================================================*/}
        {/*<button onClick={massage_1}>1</button>*/}
        {/*<button onClick={() => {massage_2("+100500")}}>2</button>*/}
        {/*=========================================================================================================*/}
        {/*                <button>My YouTube Channel-1</button>*/}
        {/*                <button>My YouTube Channel-2</button>*/}
        {/*            </div>*/}
        {/*            <Header title={'New Header'}/>*/}
        {/*            <Body title={'New Body'}/>*/}
        {/*            <Footer title={'new Footer'}/>*/}
        {/*            <NewComponent students={students}/>*/}
        <Button name="My YouTube Channel_1" callBack={() =>Button_1_Foo("I'm Vasia", 21, "A'm from Kharkiv")}/>
        <Button name="My YouTube Channel_2" callBack={() => Button_2_Foo("I'm Ivan")}/>
        <Button name="Button_3" callBack={Button_3_Foo}/>
      </>
  )
}

export default App;
