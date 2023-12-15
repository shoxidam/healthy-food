import React from 'react'
import card1 from '../img/card1.png'
import section1 from '../img/section1.png'


export function Section1({ text, text, button, img }) {
    return (
        <div className='section'>
            <div className="section1">
                <h1>Making time a good time <br />
                    by making food the good <br />
                    food.
                </h1>
                <h6>There are many things are needed to start the Fast Food Business. You need <br />
                    not only Just Food Stalls with Persons but also specialized equipment,

                </h6>
                <button></button>
            </div>
            <img src={section1} alt="" />
        </div>
    )
}   


export function Card({ text1, img1, text2, text3 }) {
    return (
        <div className='card'>
            <h5>FeaturesFood with a New Passion</h5>
            <div className="card1">
                <img src={card1} alt="" />
                <h3>Quality Food</h3>
                <h5>It can be a very secure path to earn good <br />
                    money and make you very successful <br />
                    creative entrepreneur.
                </h5>
            </div>
        </div>

    )
}


