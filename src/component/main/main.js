
import React, { useState } from 'react'
import './main.css'
import aa from '../../assests/images/classic-carousel.jpg'
import bb from '../../assests/images/loom-carousel.jpg'
import cc from '../../assests/images/zen-carousel.jpg'
import data from '../../mattresses.json'
import SimpleRating from '.././rating/ProductRating'
const Main = (props) => {
    const [classic, setclassiccarousel] = useState(true);
    const [loom, setloom] = useState(false);
    const [zen, setzen] = useState(false);
    const setclassic = () => {
        setclassiccarousel(true)
        setloom(false)
        setzen(false)
    }
    const setlooms = () => {
        setclassiccarousel(false)
        setloom(true)
        setzen(false)
    }
    const setzens = () => {
        setclassiccarousel(false)
        setloom(false)
        setzen(true)
    }

    return (
        <main>
            <div className='container'>
                <div className='main-sec'>
                    <div className='img-sec'>
                        <div className={classic ? 'show' : "hide"}>
                            <img src={aa} alt='aa' />
                        </div>
                        <div className={loom ? 'show' : "hide"}>
                            <img src={bb} alt='aa' />
                        </div>
                        <div className={zen ? 'show' : "hide"}>
                            <img src={cc} alt='aa' />
                        </div>
                    </div>
                    <div className='main-content'>
                        <p className="choose-mattress">Choose Your Mattress</p>
                        <p>SELECT MATTRESS TYPE</p>
                        <div className="actionBtn">
                            <button onClick={setclassic} className={classic ? 'active' : ''}> Saatva Classic</button>
                            <button onClick={setlooms} className={loom ? 'active' : ''}> Loom & leaf</button>
                            <button onClick={setzens} className={zen ? 'active' : ''}> Zenhaven</button>
                        </div>
                        <div className='matt-data'>
                            <div className={classic ? 'show' : "hide"}>
                                <span>{data.mattresses.classic.name}</span>
                                <span>{data.mattresses.classic.price}</span>
                                <SimpleRating x={data.mattresses.classic.reviewRating} />
                            </div>
                            <div className={loom ? 'show' : "hide"}>
                                <span>{data.mattresses.loom.name}</span>
                                <span>{data.mattresses.loom.price}</span>
                                <SimpleRating x={data.mattresses.loom.reviewRating} />
                            </div>
                            <div className={zen ? 'show' : "hide"}>0
                                <span>{data.mattresses.zen.name}</span>
                                <span>{data.mattresses.zen.price}</span>
                                <SimpleRating x={data.mattresses.zen.reviewRating} />
                            </div>
                        </div>
                        <button className='cart' onClick={props.addToCount}>add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main