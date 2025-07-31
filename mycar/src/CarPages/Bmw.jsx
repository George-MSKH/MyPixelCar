import React from 'react'
import './CarPage.css'
import './CarModels.css'

export default function Bmw() {
  return (
    <div className='BmwCars'>
        <BmwCar />
        <BmwCar />
        <BmwCar />
        <BmwCar />
        <BmwCar />
        <BmwCar />
    </div>
  )
}

function BmwCar() {
  return (
    <div className='carCardDiv'>
        <div class="modelCard" id="card">
            <div class="content">
                <img className='covercar' src="/public/image/carcover.png" alt="" />
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
            </div>
        </div>
    </div>
  )
}