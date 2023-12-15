import React from 'react'
import style from './Section2.module.css'
import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'

function Section2() {
  return (
    <div className={style.card}>
      <h6>Features</h6>
      <h5>FeaturesFood with a New Passion</h5>
      <div className={style.cards}>
        <div className={style.card1}>
          <img src={card1} alt="" />
          <h3>Quality Food</h3>
          <h4>It can be a very secure path to earn good <br />
            money and make you very successful <br />
            creative entrepreneur.
          </h4>
        </div>
        <div className={style.card1}>
          <img src={card2} alt="" />
          <h3>Food Delivery</h3>
          <h4>It can be a very secure path to earn good <br />
            money and make you very successful <br />
            creative entrepreneur.
          </h4>
        </div>
        <div className={style.card1}>
          <img src={card3} alt="" />
          <h3>Super Taste</h3>
          <h4>It can be a very secure path to earn good <br />
            money and make you very successful <br />
            creative entrepreneur.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Section2