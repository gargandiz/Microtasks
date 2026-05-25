import React from "react";

type NewComponentType = {
    // students:Array<StudentType>
    students:StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

type CarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <ul>
                {props.students.map((objFromStudents, index) => {
                    return (
                        <li key={objFromStudents.id}>
                            <span>{objFromStudents.name}</span>
                            <span>age: {objFromStudents.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    <th>Number</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {topCars.map((objFromTopCars, index) => {
                    index +=1;
                    return (
                    <tr>
                        <th>{index}</th>
                        <th>{objFromTopCars.manufacturer}</th>
                        <th>{objFromTopCars.model}</th>
                    </tr>
                    )
                })}
            </table>
        </>
    )
}