import React from 'react';

function ExtraItem(props) {
    return (
        <table className='table table-secondary ' >
            <thead>
                <tr>
                    <td>SL.</td>
                    <td>Item</td>
                    <td>Amount </td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
            
               
        { props.extra.map( (obj , i) => {
            return (
                <tr key={i} >
                    <td>{ i } </td>
                    <td>{ obj.ename } </td>
                    <td>{ obj.eamount } </td>
                    <td>{ obj.eprice } </td>
                </tr>
            )
        } ) }


            </tbody>

        </table>
    );
}

export default ExtraItem;