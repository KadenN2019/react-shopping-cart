import React from 'react'

export default function (props) {
    return (
        <div>
            <div>
            <div className="titleSize">Sizes:</div>
            <button className="sizesButton">
                XS
            </button>
            <button className="sizesButton">
                S
            </button>
            <button className="sizesButton">
                M
            </button>
            <button className="sizesButton">
                ML
            </button>
            </div>
            <div>
            <button className="sizesButton">
                L
            </button>
            <button className="sizesButton">
                XL
            </button>
            <button className="sizesButton">
                XXL
            </button>
            </div>
        </div>
    )
}