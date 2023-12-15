import React from 'react'
import section1 from './img/section1.png'
import style from './Section1.module.css'

function Section1() {
  return (
    <div className={style.section}>
      <div className={style.section1}>
        <h1>Making time a good time <br />
          by making food the good <br />
          food.
        </h1>
        <h6>There are many things are needed to start the Fast Food Business. You need <br />
          not only Just Food Stalls with Persons but also specialized equipment,
        </h6>
        <button className={style.btn1}>Order Now</button>
        <button className={style.btn2}>Food Details</button>
      </div>
      <img src={section1} alt="" />
    </div>
  )
}

export default Section1