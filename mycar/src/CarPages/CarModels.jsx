import React from 'react'
import './CarPage.css'
import './CarModels.css'

export default function BmwCar() {
  return (
    <div class="modelCard" id="card">
        <div class="content">
            <img className='covercar' src="/image/carcover.png" alt="" />
            <h1>BMW</h1>
            <div className="model-description">

                <div className="cardescflex">
                    <h1>Model:</h1>
                    <p>E46</p>
                </div>

                <div className="cardescflex">
                    <h1>Category:</h1>
                    <p>Coupe</p>
                </div>

                <div className="cardescflex">
                    <h1>Year:</h1>
                    <p>1998-2006</p>
                </div>

            </div>
            
            <button className='buyCarBtn'>
                <span className="text">BUY</span>
            </button>
        </div>
    </div>
  )
}
