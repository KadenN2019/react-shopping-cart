// import
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Axios from 'axios'

// action def
const DATA = 'DATA'
const SHOWCART = 'SHOWCART'

// reducer
const initialState = {
    data: [],
    cart: []
}
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case DATA:
            return {...state, data: action.payload}
        case SHOWCART:
            return {...state, cart: action.payload}
        default:
            return state
    }
}
// action creaters

function getSku() {
  return dispatch => {
    Axios.get('./products').then(resp => {
        dispatch({
            type: DATA,
            payload: resp.data
        })
    })
  }
}

// 
function addToCart(item){
    return dispatch => {
        Axios.post('./cart',{item}).then(resp =>{
            dispatch(showCart(resp.data))
        })
    }
}


function removeCart(id){
    return dispatch => {
        Axios.delete(`./cart/${id}`).then(resp=>{
            dispatch(showCart(resp.data))
        })
    }
}


function showCart(){
    return dispatch => {
        Axios.get('./cart').then(resp=>{
            dispatch({
                type: SHOWCART,
                payload: resp.data
            })
        })
    }
}
//custom hooks
export function useCart() {
    const dispatch = useDispatch()

    const data = useSelector(appState => appState.cartReducer.data)
    const cart = useSelector(appState => appState.cartReducer.cart)
    const add = datas => dispatch(addToCart(datas))
    const remove = data => dispatch(removeCart(data))
    const showIt = () => dispatch(showCart())

    const fetch = () => dispatch(getSku())

    useEffect(()=>{
        showIt()
        fetch()
    }, [])

    return { data, cart, add, remove }
}










// // action def
// const DATA = 'DATA'

// // reducer
// const initialState = {
//     data: []
// }
  
// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case DATA:
//             return {...state, data: action.payload}
//         default:
//             return state
//     }
// }
// // action creaters

// function getSku() {
//     return dispatch => {
//       Axios.get('./products').then(resp => {
//           dispatch({
//               type: DATA,
//               payload: resp.data
//           })
//       })
//     }
//   }

//custom hooks
// export function useData() {
//     const dispatch = useDispatch()

//     const getData = useSelector(appState => appState.mainReducer.data)
//     const fetch = () => dispatch(getSku())

//     useEffect(()=>{
//         fetch()
//     }, [])

//     return { fetch, getData }
// }