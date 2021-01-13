import React, {useState, useContext} from 'react'

import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const textChange = (e) => {
        setText(e.target.value)
        e.preventDefault()
    }

    const amountChange = (e) => {
        setAmount(e.target.value)
        e.preventDefault()
    }

    const onSubmit = (e) => {
        e.preventDefault()

        
        const newTransaction = {
            text,
            amount: +amount
        }
        
        setText('')
        setAmount(0)
        

        addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>

                <div className="form-control">
                    <label htmlFor="text">Transaction title</label>
                    <input name = 'title' type="text" value = {text} placeholder="Enter text..." onChange = {textChange}/>
                </div>

                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input name = 'number' type="number" value = {amount} placeholder="Enter amount..." onChange = {amountChange}/>
                </div>

                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
