import React from 'react'

const Hero = ({ handleSignOut }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleSignOut}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero
