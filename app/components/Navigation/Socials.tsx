import React from 'react'

import sideNavStyles from './Socials.module.css'
import iconStyles from '../../styles/Icon.module.css'
import Link from 'next/link'

const Socials = () => {
    return (
        <header className={sideNavStyles.sideNav}>

            <nav className={sideNavStyles.navMenu}>
                <ul>
                    <li>
                        <Link href="https://www.facebook.com/risslagrosa" target="_blank" className={`${sideNavStyles.navLink}`}>
                            <i className={`${iconStyles.icon} ${iconStyles.iconFacebook}`}></i>
                            <span>Facebook</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/haris-lagrosa-641419210" target="_blank" className={sideNavStyles.navLink}>
                            <i className={`${iconStyles.icon} ${iconStyles.iconLinkedIn}`}></i>
                            <span>LinkedIn</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/harislagrosa" target="_blank" className={sideNavStyles.navLink}>
                            <i className={`${iconStyles.icon} ${iconStyles.iconGithub}`}></i>
                            <span>Github</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Socials
