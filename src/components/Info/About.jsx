import { React, useState, useEffect } from 'react'
import './Info.css'
import Button from '../Buttons/Button'

function About({ name, role, website }) {
    const [cleanURL, setCleanURL] = useState('')

    useEffect(() => {
        if (website.includes('https://www.')) {
            setCleanURL(website.split('https://www.')[1])
        } else if (website.includes('http://www.')) {
            setCleanURL(website.split('http://www.')[1])
        }
    }, [website])

    return (
        <div className="About">
            <h1 className="name">{name}</h1>
            <h2 className="role">{role}</h2>
            <a href={website} className="website-url">
                {cleanURL}
            </a>
            <div className="contact-me">
                <Button type="mail" address="benedicte.roksvag@gmail.com" />
                <Button
                    type="linkedin"
                    address="https://www.linkedin.com/in/benedicte-waagan-roksvaag/"
                />
            </div>
            <div className="about-me-text">
                <h2 className="about-heading">About</h2>
                <p>
                    From Norway. First-year IT student and a junior frontend
                    developer currently learning React and doing 100 days of
                    code for the second time. I am eager to learn and wish to
                    become a proficient developer.
                </p>
                <h2 className="interests-heading">Interests</h2>
                <p>
                    My interests include self-development, programming,
                    problem-solving, gaming, and health/fitness. I live with my
                    boyfriend, our three-year-old daughter, and our cat and dog.
                </p>
            </div>
        </div>
    )
}

export default About
