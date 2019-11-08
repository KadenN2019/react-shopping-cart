import React from 'react'
import { useData } from '../redux/ducks/main'

export default function (props) {
  const {fetch, getData} = useData()

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
					{getData.map(data => {
						return(
							<div>
								<div>
									Free Shipping
								</div>
								<div className='product'>
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
											{data.price}
										</div>
									</div>
									{/* <div>
											or {data.installments}
									</div> */}
									<button className="addCart">
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