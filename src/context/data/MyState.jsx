import React, { useState } from "react";
import MyContext from "./MyContext";

const MyState = (props) => {
    const[theme,setTheme]=useState("light")
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.style.backgroundColor = '#B0A695';
        }
        else {
            setTheme('light');
            document.body.style.backgroundColor = '#F3EEEA';

        }
    }
    
    return (
        <MyContext.Provider value={{theme,toggleTheme}}>{
            props.children
        }</MyContext.Provider>
    )
}

export default MyState