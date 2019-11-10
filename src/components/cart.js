import React from 'react'
import { useCart } from '../redux/ducks/carts'


export default function Cart (props) {
    const {cart, remove} = useCart()

    function handleClick(data){
        remove(data)
    }

    var prices = cart.map(data =>(
        data.item.prices
        ))

    function sum(num1,num2){
        return num1 + num2
    }

    var total = prices.reduce(sum,0)
console.log(cart)
    return (
        <div>
            <div id="slidecart" >
                <div className="cartgrid">
                    {cart.map((data,i) =>(
                    <div key={"cart" + i} className="dataincart">
                        <span> <img alt="" src={`/assets/${data.item.sku}_2.jpg`} /></span>
                        <p>{data.item.title}</p>
                        <div>{data.item.price.toFixed(2)}</div>
                        <button className="xbutton" onClick={(e) =>(handleClick(data.id))}>X</button>
                    </div>
                    ))}
                </div>
                <div>
                    <p className="subtotal">SubTotal:</p>
                    <h3 className="subtotal">$ {total.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    )
}