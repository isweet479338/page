import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../Auth/Footer';
import Header from '../Auth/Header';
import { myAllGustMill, GustMillStart } from '../../services/actions/BoderAction'
import '../../style/loader.css'
import GustMillList from './GustMillList';

class GustMill extends Component {
    constructor() {
        super();
        this.onChangemorning = this.onChangemorning.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
		this.state = {
  
            noon: false,
            night: false,
            date: '',
            msg:'',
            local: '',
            gust : [],
            noonData : '',
            nightData : ''
           
        }
    }

    onChangemorning(e) {
        const { name, checked, value, type } = e.target
        type === 'checkbox' ? this.setState({ [name] : checked, [name + 'Data'] : true }) : this.setState({ [name] : value })
          
    }

    onSubmit(e){
        e.preventDefault();

            const obj = {
              
                noon : this.state.noon,
                noonData : this.state.noonData,

                night : this.state.night,
                nightData : this.state.nightData,

                date : this.state.date,
                local : JSON.parse( localStorage.getItem('user')).id
            };
            this.props.GustMillStart(obj)


    }


    componentDidMount(){
     this.props.myAllGustMill( JSON.parse(localStorage.getItem('user')).id )
    }

    GustMillListf(gustMillList){
     
        return gustMillList.map( (object, i)  => { 
            return (
                <GustMillList  obj={object} key={i}  /> 
            );
            
        });
    }


    render() {
        
        if(this.props.loader == true){
            return <div className="loader"></div>;
        }

        return (
            <>
                <Header />
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="p-5">
                            <div className="text-center">

                            <div className="card-header"  >
                            <h2>Gust Mill</h2>
                            <p>{ this.props.sucMsg }</p>
                        </div>

                            <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select day (Current Month)</label>
                            
                                <select value={this.state.date} required='required'  onChange={this.onChangemorning} name="date" className='form-control' >
                                    <option >-- Select a Day --</option>
                                    <option value='01'>Date 01</option>
                                    <option value='02'>Date 02</option>
                                    <option value='03'>Date 03</option>
                                    <option value='04'>Date 04</option>
                                    <option value='05'>Date 05</option>
                                    <option value='06'>Date 06</option>
                                    <option value='07'>Date 07</option>
                                    <option value='21'>Date 21</option>
                                    <option value='25'>Date 25</option>
                                    <option value='28'>Date 28</option>
                                    <option value='25'>Date 25</option>
                                </select>

                            </div>
                           
                            <div className="form-group">
                                <label className='btn btn-warning' htmlFor='noon' style={ { display: 'inline-block' } } >
                                <input  
                                    id='noon'
                                    type='checkbox' 
                                    className="form-control" 
                                    name='noon' 
                                    
                                    onClick={this.onChangemorning}
                                    style={ { marginTop: '-5px' } }
                                />&nbsp; &nbsp;Noon &nbsp; &nbsp; <br /> 

                             { this.state.noon === true && 
                                <input 
                                name = 'noonData'
                                style={ { marginTop: '0', width:60, height:30 } } 
                                type='text'
                                
                                value={ this.state.noonData === true ? 1 : this.state.noonData }
                                onChange={this.onChangemorning}
                                />
                             }
                                </label>

                            </div>
                            <div className="form-group">
                                <label className='btn btn-dark' htmlFor='night' style={ { display: 'inline-block' } } >
                                <input  
                                    id='night'
                                    type='checkbox' 
                                    className="form-control" 
                                    name='night' 
                                   
                                    onClick={this.onChangemorning}
                                    style={ { marginTop: '-5px' } }
                                />&nbsp; &nbsp; Night &nbsp; &nbsp; <br /> 

                                  { this.state.night === true && 
                                <input 
                                style={ { marginTop: '0', width:60, height:30 } } 
                                type='text'
                                value={ this.state.nightData === true ? 1 : this.state.nightData }
                                name="nightData"
                                onChange={this.onChangemorning}
                                />
                                  }

                                </label>    
                            </div>
                           
                            <button className="btn btn-primary">Start Gust Mill </button>
                            </form>


                            <div>
                            <h3>Your Gust Mill List</h3>
                         
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Noon</th>
                                            <th>Night</th>
                                            <th>Status</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.GustMillListf(this.props.gustMillList) }
                                    </tbody>
                                </table>

                          </div>



                            </div></div></div> </div></div></div>

                <Footer />
            </> 

            
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loader : state.boder.loading, 
        errMsg : state.boder.errMsg,
        sucMsg : state.boder.sucMsg,
        
        gustMillList : state.boder.gustMill
    }
}

const mapDispatchToProps = dispatch => ({
    myAllGustMill: data => dispatch( myAllGustMill(data)),
    GustMillStart : data => dispatch( GustMillStart(data) )
})


export default connect( mapStateToProps,  mapDispatchToProps )(GustMill);