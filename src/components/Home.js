import React from 'react';

function Home(props) {
 
    return (
        <div>
            <h1>I phone</h1>
           
            <button
            onClick = { () => 
            props.addToCartHandlerpppppppppppppp(
                { price: 100, name:'sweet' }
                )
            }
            >Add to Cart</button>

<button onClick = { () =>  props.removeToCartHandler()}
            >Remove to Cart</button>


        </div>
    )
}

export default Home;