import React from 'react'
import "./Header.css"
import Burger from "../assets/burger.png"

const Header = () => {
    return (
        <section id="home">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center p-2">
                <div className="mb-3 self-center space-y-3 md:space-y-7 mt-[1.5rem] md:mt-[4rem]">
                    <p className="text-md md:text-md font-medium md:font-bold">Expensive But The Best</p>
                    <h2 className="text-2xl md:text-5xl font-bold">Enjoy Your Money</h2>
                    <p className="text-md font-medium">The classic burger is an all time BBQ favourite! This super
                        easy homemade beef burger recipe gives you delicious
                        patties, packed with onions and herbs and extra flower.
                    </p>
                    <div className="md:space-x-3 space-x-1">
                        <button className="bg-green transition hover:bg-white hover:text-green hover:border-green hover:border rounded-md text-white font-medium px-4 py-1 md:px-8 md:py-2">Get Started</button>
                        <button className="bg-white transition hover:bg-green hover:text-white hover:border-none rounded-md border font-medium border-green px-4 py-1 md:px-6 md:py-2">Explore Our Menu</button>
                    </div>
                </div>
                <div className="self-center w-[100%] ">
                    <img src={Burger} alt="Burger-image" />
                </div>
            </div>
        </section>
    )
}

export default Header
