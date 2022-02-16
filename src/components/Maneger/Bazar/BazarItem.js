import React from 'react';

function BazarItem(props) {
    return (
        <table className='table table-primary' >
            <thead>
                <tr>
                    <td>SL.</td>
                    <td>Item</td>
                    <td>Amount ( Man fixd Amt ) </td>
                    <td>Price ( Man fixd Amt )</td>
                </tr>
            </thead>
            <tbody>
            
               
        { props.item.map( (obj , i) => {
            return (
                <tr key={i} >
                    <td>{ i } </td>
                    <td>{ obj.name } </td>
                    <td>{ obj.buy_qty } ({ obj.qty })</td>
                    <td>{ obj.buy_price } ({ obj.price })</td>
                </tr>
            )
        } ) }


            </tbody>

        </table>
    );
}

export default BazarItem;