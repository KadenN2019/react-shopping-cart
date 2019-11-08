// import
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Axios from 'axios'

// action def
const DATA = 'DATA'

// reducer
const initialState = {
    data: []
}
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case DATA:
            return {...state, data: action.payload}
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

//custom hooks
export function useData() {
    const dispatch = useDispatch()

    const getData = useSelector(appState => appState.mainReducer.data)
    const fetch = () => dispatch(getSku())

    useEffect(()=>{
        fetch()
    }, [])

    return { fetch, getData }
}