import React from 'react'
import './Card.css'
import ProfilePic from './components/ProfilePic/ProfilePic'
import About from './components/Info/About'
import Footer from './components/Info/Footer'

function Card() {
    const name = 'Benedicte Roksvåg'
    const role = 'IT Student'
    const website = 'https://www.bendiz.no'

    return (
        <div className="Card container-fluid">
            <ProfilePic />
            <About name={name} role={role} website={website} />
            <Footer />
        </div>
    )
}

export default Card
