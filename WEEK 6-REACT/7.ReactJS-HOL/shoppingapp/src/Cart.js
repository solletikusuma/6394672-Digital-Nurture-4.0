import React from 'react';

class Cart extends React.Component {
    render() {
        return (
            <table
                style={{
                border: '2px solid #ccc',
                borderCollapse: 'collapse',
                margin: 'auto',
                fontFamily: 'Arial',
                width: '300px',
                boxShadow: '0 0 5px lightgray'
                }}>
                <thead>
                <tr style={{ color: 'lightgreen' }}>
                <th
                style={{
                padding: '10px',
                border: '1px solid #ccc',
                textAlign: 'center'
                }}>
                    Name
                    </th>
                    <th
                    style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    textAlign: 'center'
                }}>
                    Price
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.item.map((item, index) => (
                        <tr key={index} style={{ color: 'lightgreen', textAlign: 'center' }}>
                        <td
                        style={{
                        padding: '10px',
                        border: '1px solid #ccc'
                        }}>
                        {item.itemname}
                        </td>
                        <td
                        style={{
                        padding: '10px',
                        border: '1px solid #ccc'
                        }}>
                        {item.price}
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Cart;
