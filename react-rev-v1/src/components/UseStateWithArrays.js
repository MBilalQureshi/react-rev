import React,{useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3,4,5])

    // Don't use push pop
    const addNums = () => {
        // Always use spread operator to update state
        setNums([...nums, nums.length + 1])
    }

    const removeItems = () => {
        // Always use filter to remove items from array
        setNums(
            nums.filter((num, idx) => {
                console.log(num)
                console.log(idx)
                console.log(nums.length - 1)
                return idx !== nums.length - 1;
            })
        );
    }
  return (
    <div>
        <button onClick={addNums}>
            Add Items
        </button>
        <button onClick={removeItems}>
            Remove Items
        </button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays