import React from 'react'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Button({ type, address }) {
    if (type === 'mail') {
        const href = `mailto:${address}`
        const icon = faEnvelope
    } else if (type === 'linkedin') {
        const href = address
        const icon = faLinkedin
    }
    if (type === 'mail') {
        return (
            <button type="button" className="Button btn btn-light">
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                    href="mailto:benedicte.roksvag@gmail.com"
                    className="email-link"
                    target="_blank"
                    noreferer="true"
                >
                    Email
                </a>
            </button>
        )
    } else if (type === 'linkedin') {
        return (
            <button type="button" className="Button btn btn-primary">
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                    href={address}
                    className="linkedin-link"
                    target="_blank"
                    noreferer="true"
                >
                    LinkedIn
                </a>
            </button>
        )
    }
}

export default Button
