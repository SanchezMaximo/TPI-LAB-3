import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Loader = () => {
  const { isDarkMode} = useContext(ThemeContext);
  return (
    <div>
        <h1 className={isDarkMode ? "dark" : "light"} >Loading...</h1>
    </div>
  )
}

export default Loader