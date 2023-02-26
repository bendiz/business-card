import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="Footer">
            <ul className="icons">
                <li>
                    <a
                        href="https://instagram.com/techbendiz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                </li>
                <li>
                    <a
                        href="http://twitter.com/bendizxo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                </li>
                <li>
                    <a
                        href="http://https://discordapp.com/users/243372395430281216"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/bendiz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
