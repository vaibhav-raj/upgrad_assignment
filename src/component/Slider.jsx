import React, { useState, useEffect } from 'react'
import "./Slider.css"

const Slider = () => {

    const [index, setIndex] = useState(0)
    const [isCycle, setIsCycle] = useState(false)

    const images = [
        "https://www.gardeningknowhow.com/wp-content/uploads/2020/11/yellow-sunflower-field-400x300.jpg",
        "https://onthebrook.co.uk/wp-content/uploads/2017/03/Wood-image-03-400x300-images.jpg",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
    ];

    useEffect(() => {
        let timer;
        if (!isCycle) {
            timer = setInterval(() => {
                if (index === images.length - 1) return setIsCycle(true)
                setIndex((index) => index + 1)
            }, 3000)
        }
        if (isCycle) {
            timer = setInterval(() => {
                if (index === 0) return setIsCycle(false)
                setIndex((index) => index - 1)
            }, 3000)
        }
        return () => {
            clearInterval(timer)
        }
    }, [index, images.length, isCycle])

    return (
        <div>
            <img className="poster" src={images[index]} alt="" />
            <div className="btn_div">
                <div className={index === 0 ? "active" : "dot"}></div>
                <div className={index === 1 ? "active" : "dot"}></div>
                <div className={index === 2 ? "active" : "dot"}></div>
            </div>
        </div>
    )
}

export default Slider
