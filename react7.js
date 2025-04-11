"use client";
import React from 'react';
type GreetingProps={
name:string;
age:number;
occupation:string;
};
function Greeting(Props:GreetingProps){
    return(
        <p>
            Hello!{Props.name},a{Props.age}-year-old 
            {Props.occupation}
            pleased to meet you!
        </p>
    );
}
export default function Home()
{
    return<Greeting name="Bharat" age={15}
    occupation="software Developer"/>
}
