import React from 'react'

import footerStyles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <h3>Haris Lagrosa II</h3>
            <div className="copyright">
                Copyright &copy; 2023 Haris Lagrosa II. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
