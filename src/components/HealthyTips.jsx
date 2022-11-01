import React from 'react'
import "./HealthyTips"
import Burger from "../assets/burgertip.png"
import Healthy from "../assets/healthy.png"

const HealthyTips = () => {


    return (
        <div>
            <div className="py-4 mt-4">
                <p className="text-md font-medium">Healthy Tips</p>
                <h3 className="text-md md:text-2xl font-semibold">Eat Healthy</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-4">
                <div className="text-center items-center bg-[#f0eded] rounded-md">
                    <a
                        class=" block rounded-xl p-8 shadow hover:shadow-xl"
                        href=""
                    >
                        <div className="flex justify-center">
                            <img src={Burger} alt="" />
                        </div>

                        <div class="mt-4 text-gray-500 sm:pr-8">

                            <h3 class="mt-4 text-xl md:text-2xl text-center font-semibold text-[#067235]">Healthy Meal</h3>

                            <p class="mt-2 hidden font-medium text-sm sm:block">
                                Making a reservation at
                                Délicious restaurant is easy and
                                takes just a couple of minutes.
                            </p>
                        </div>
                    </a>

                </div>
                <div className="text-center items-center bg-[#f0eded] rounded-md">
                    <a
                        class=" block rounded-xl p-8 shadow hover:shadow-xl"
                        href=""
                    >
                        <div className="flex justify-center">
                            <img src={Healthy} alt="" />
                        </div>

                        <div class="mt-4 text-gray-500 sm:pr-8">

                            <h3 class="mt-4 text-xl md:text-2xl text-center font-semibold text-[#067235]">Fast Food</h3>

                            <p class="mt-2 hidden font-medium text-sm sm:block">
                                Making a reservation at
                                Délicious restaurant is easy and
                                takes just a couple of minutes.
                            </p>
                        </div>
                    </a>

                </div>
                <div className="text-center items-center bg-[#f0eded] rounded-md">
                    <a
                        class=" block rounded-xl p-8 shadow hover:shadow-xl"
                        href=""
                    >
                        <div className="flex justify-center">
                            <img src={Healthy} alt="" />
                        </div>

                        <div class="mt-4 text-gray-500 sm:pr-8">

                            <h3 class="mt-4 text-xl md:text-2xl text-center font-semibold text-[#067235]">Fast Food</h3>

                            <p class="mt-2 hidden font-medium text-sm sm:block">
                                Making a reservation at
                                Délicious restaurant is easy and
                                takes just a couple of minutes.
                            </p>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default HealthyTips
