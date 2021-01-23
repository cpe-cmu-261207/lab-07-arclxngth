import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";

const baseURL = 'https://dummyapi.io/data/api'

const Home = () => {
  return (
    <>
    <div>
      <div className="header">
        <h1 className="header-txt">HOME PAGE</h1>
      </div>
      <div className="MainPageTemplate">
        <Link href={`./portfolio`}>
          <h1 className="MainPageLink">PORTFOLIO</h1>
          </Link>
        <Link href={`./post`}>
          <h1 className="MainPageLink">DUMMY API</h1>
          </Link>
        {/* <Link href={`./GPAcalculator`}> */}
          {/* <h1 className="MainPageLink">GPA CALCULATOR</h1> */}
          {/* </Link> */}
      </div>
    </div>
    </>
  )
}

export default Home
