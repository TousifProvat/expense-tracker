import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid'


export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext);

    var date = new Date();

    // time

    // var h = String(date.getHours())
    // var m = String(date.getMinutes())
    // var s = String(date.getSeconds())

    var time = new Date().toLocaleTimeString();

    // Date
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear(); 
    date = ' | ' + mm + '/' + dd + '/' + yyyy ;



    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: uuidv4(),
        text,
        amount: +amount,
        date,
        time
      }

      addTransaction(newTransaction);
    }

    


    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
         <div className="form-control">
          <label htmlFor="text">Title</label>
          <input type="text" value={text}  onChange={(e) => setText(e.target.value)} onFocus={(e) => setText('')} placeholder="Enter text..."  required/>
         </div>
         <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number"  value={amount} onChange={(e) => setAmount(e.target.value)} onFocus={(e) => setAmount('')} placeholder="Enter amount..." />
         </div>
         <button className="btn">Add transaction</button>
        </form>
        </>
    )
}
