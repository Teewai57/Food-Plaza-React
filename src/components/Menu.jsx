import React from 'react'
import "./Menu.css"
import BlackHeart from "../assets/blackheart.png"
import RedHeart from "../assets/redheart.png"
import Burger from "../assets/menuburger.png"

const Menu = () => {

    const data = [
        {
            heart: { BlackHeart },
            burgerImage: "",
            burgerType: "Beef Burger",
            burgerText: "Making a reservation at delicious",
            burgerPrice: "$10.54"
        },
        {
            heartImage: { RedHeart },
            burgerImage: "",
            burgerType: "Chicken Burger",
            burgerText: "Making a reservation at delicious",
            burgerPrice: "$12.00"
        },
        {
            heartImage: { RedHeart },
            burgerImage: "",
            burgerType: "Cheese Burger",
            burgerText: "Making a reservation at delicious",
            burgerPrice: "$8.50"
        },
        {
            heartImage: { BlackHeart },
            burgerImage: "",
            burgerType: "Sausage Burger",
            burgerText: "Making a reservation at delicious",
            burgerPrice: "$9.54"
        },
    ]

    const listItems = data.map(
        (element) => {
            return(
                <div className="text-center items-center bg-[#f0eded] rounded-md">
            <a
                class="relative block rounded-xl p-8 hover:shadow-xl"
                href=""
            >
                <span
                    class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                >
                    <img src={RedHeart} alt="" />
                </span>

                <div class="mt-4 text-gray-500 sm:pr-8">

                    <div className="flex justify-center">
                    <img src={Burger} alt="" />
                    </div>

                    <h3 class="mt-4 text-xl font-semibold text-gray-900">{element.burgerType}</h3>

                    <p class="mt-2 hidden font-medium text-sm sm:block">
                      {element.burgerPrice}
                    </p>
                </div>
            </a>

        </div>
            )
        }
    )


    return (
        <section id="menu">
        <div className="text-md md:text-2xl py-2 font-semibold mt-4" > 
        <h3>Pick From Our Special Burger Menu</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-4">
            {listItems}
        </div>
        </section>
    )
}

export default Menu
