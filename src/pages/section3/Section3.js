import React from 'react'
import style from './Section3.module.css'
import section3 from './img/section3.png'

function Section3() {
  return (
    <div className={style.section}>
      <img src={section3} alt="img" />
      <div className={style.section3}>
        <h6>About Us</h6>
        <h4>Food Stalls with Persons but  to <br />
          Product marketing plane <br />
          catlogues etc to.
        </h4>
        <h5>There are many things are needed to start the Fast Food Business. <br />
          You need not only Just Food Stalls with Persons but also <br />
          equipment  make your marketing plane Effective.
        </h5>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Section3