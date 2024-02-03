import './css/globals.css'

import type { Metadata } from 'next'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

export const metadata: Metadata = {
    title: 'Haris Lagrosa II | Software Developer',
    description: 'Created by Haris Lagrosa II',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" >
            <body className='bg-black'>

                <Navigation />

                {children}

                <Footer />

            </body>

        </html>
    )
}
