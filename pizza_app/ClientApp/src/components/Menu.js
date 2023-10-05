import React, { useState, useEffect } from 'react';


const Menu = () => {

    // const[ToppingItems, SetToppingItems] = useState([])

    // useEffect(()=>{
    //    create 
    // }
    // )

    // items naudosim kad retrievint server side items collection data, o setItems naudosim react compononte kad pakeisti state of the items variable
     const [items, setItems] = useState([]);
     const dataType = 1;

    //const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 /* {
                (items.length > 0) ? items.map((item) => <input type="checkbox" id="topping" name="topping" value="Paneer" />) : <div>Loading...</div>
            }*/
     useEffect(() => {

         fetch(`item/${dataType}`)
             .then((results) => {
                 return results.json();
             })
             .then(data => {
                 setItems(data);
             })
     }, []);

    return (
        <main>

            {
                (items.length > 0) ? items.map((item) => <h3>{item.title}</h3>) : <div>Loading...</div>
            }
          


        </main>
    )
}
export default Menu;