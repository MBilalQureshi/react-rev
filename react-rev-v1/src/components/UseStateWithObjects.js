import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState(
        { 
        firstName: "",
        lastName: "" 
    }
);

    return (
        <div>
            <form>
                {/* IMP NOTE: When working with objects always spread the object you are replacing into new one just like with an array , Byu doing this the whole object will
                be replaced and then follow it with the properties you like to change
                
                - an object passed to the setter function overwrites the old one , so we need to spread the old object and then update the property we want to update(techanlly
                same think I mentioned above in the note)
                */}
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                        // Always use spread operator to spread the current value of the name property to object we are pushing into the state to update state
                        ...name,
                        firstName: e.target.value
                    })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                        // Always use spread operator to spread the current value of the name property to object we are pushing into the state to update state
                        ...name,
                        lastName: e.target.value
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form> 
        </div>
    )
}

export default UseStateWithObjects