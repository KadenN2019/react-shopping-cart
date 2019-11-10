import React from 'react'
import { useCart } from '../redux/ducks/carts'

export default function (props) {
  const {add, data} = useCart()
  
  function handleClick(datas){
	  add(datas)
  }

  return (
    <div className="cont2">
			<div className='middle'>
        <div className="header">
          <div>
            16 Product(s) found
          </div>
          <div>
            Order by
						<select>    
							<option>Select</option>
							<option>Lowest to Highest</option>
							<option>Highest to Lowest</option>
						</select>
        	</div>
        </div>
        <div className="cont3">
					{data.map(data => {
						return(
							<div>
								<div className='product'>
									<div className={data.isFreeShipping === true ? 'show' : 'hide'}>
											Free Shipping
									</div>
									<div>
										<img className='productPic' src={`./assets/${data.sku}_1.jpg`}/>
									</div>
									<div>
										{data.title}
									</div>
									<div className="price">
										<div className="dollarSign">
											{data.currencyFormat}
										</div>
										<div className="amount">
											{data.price.toFixed(2)}
										</div>
									</div>
									{/* <div>
											or {data.installments}
									</div> */}
									<button onClick={(e) => handleClick(data)} className="addCart">
										Add to cart
									</button>
								</div>
							</div>
						)
					}) }
					</div>
					</div>
			</div>
    )
}