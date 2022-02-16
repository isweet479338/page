import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCarttttttttttttttttttttt, removeToCart } from '../services/actions/action'

const mapStateToProps = state => ({
    data : state.cardItems
})
 
const mapDispatchToProps = dispatch => ({
    
    addToCartHandlerpppppppppppppp: data => dispatch( addToCarttttttttttttttttttttt(data)),
    removeToCartHandler: data => dispatch( removeToCart( data ) )
})


export default connect( mapStateToProps, mapDispatchToProps )(Home);