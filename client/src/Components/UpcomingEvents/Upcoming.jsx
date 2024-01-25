import React from 'react'
import "./Upcoming.scss"
import {Helmet} from "react-helmet";
const Upcoming = () => {
  return (

    <div className='upcoming'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <h1>Upcoming Events</h1>
    </div>
  )
}

export default Upcoming