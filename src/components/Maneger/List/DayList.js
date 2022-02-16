import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dayInput } from '../../../services/actions/ManegerAction';



class DayList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            bal: [],
            singel: '',
        }
    }
    onFieldChangeName(e) {
        let data = this.state.data;
        let find = data.indexOf(e)
        if (find > -1) {
            data.splice(find, 1)
            let ball = this.state.bal
            let findd = ball.findIndex(item => item.id === e)
            if (findd > -1) {
                let balll = ball.filter(i => i.id !== e)
                this.setState({ bal: balll })
            }
        } else {
            data.push(e)
        }
        this.setState({ data })
        // console.log( this.state.data )
        // console.log( this.state.bal )

        //    let data = this.state.data;
        //    let find = data.findIndex( item => item.bId === e )
        //    if (find > -1) {
        //         data.splice(find, 1)
        //     } else {
        //         data.push( this.props.data.find( item => item.bId === e ) ) 
        //    }
        //    this.setState({ data })
        //    console.log( this.state.data )
    }
    millChange(id, w) {
        let arr = this.state.bal;
        if (this.state.data.includes(id)) {
            let cc = this.state.bal.findIndex(item => item.id === id)
            let pp = {
                id: id,
                mill: w.target.value
            }
            if (cc > -1) {
                this.state.bal.splice(cc, 1)
                arr.push(pp)
            } else {
                arr.push(pp)
            }
        }
        // console.log(this.state.bal)
        // console.log(this.state.data)
    }

    buttonSubmit = () => {
        const obj = {
            type: 'month',
            target: this.props.target,
            bal: this.state.bal,
            data: this.state.data
        }
        this.props.dayInput(obj)
        //   console.log( obj )
        // console.log( this.state.data )

    }

    render() {

        return (
            <>

                <table className='table'>
                    <thead>
                        <tr>
                            <th> No </th>
                            <th> Name </th>
                            <th> Last Day</th>
                            <th> Will Change ( Requested ) </th>
                            <th> Change If Needed </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((object, i) => {
                            return <tr key={object.bId} >
                                <td> {i + 1} </td>

                                <td> <label htmlFor={`data` + object.bId} >{object.name}</label></td>
                                <td> {object.pp} </td>
                                 <td>
                                {this.props.requ.map((r, ki) => {
                                    return ( r.bId === object.bId ?  r.morning + '+' + r.noon + '+' + r.night + " -( " + r.status + " ) "  : '' )
                                })}
                                </td>
                                <td>
                                    {/* <input onChange={() => this.onFieldChangeName(object.bId)}  selected={this.state.data.includes(object.bId)} id={`data` + object.bId} type="checkbox" />  */}


                                    <input onChange={() => this.onFieldChangeName(object.bId)} selected={this.state.data.includes(object.bId)} id={`data` + object.bId} type="checkbox" />
                                    <br />

                                    {this.state.data.includes(object.bId) &&
                                        <>
                                            <div style={{ display: 'inline-flex' }} className='btn bg-danger' >
                                                <label htmlFor={`off` + object.bId} > Off </label>
                                                <input id={`off` + object.bId}
                                                    value="0"
                                                    onChange={(e) => this.millChange(object.bId, e)}
                                                    // onChange={ this.millChange }

                                                    type="radio" name={`mill` + object.bId} />
                                            </div>
                                            <div style={{ display: 'inline-flex' }} className='btn bg-warning' >
                                                <label htmlFor={`all` + object.bId} > all </label>
                                                <input id={`all` + object.bId}
                                                    value="0.5+1+1"
                                                    onChange={(e) => this.millChange(object.bId, e)}
                                                    // onChange={ this.millChange }

                                                    type="radio" name={`mill` + object.bId} />
                                            </div>
                                            <div style={{ display: 'inline-flex' }} className='btn bg-info' >
                                                <label htmlFor={`sokaldupur` + object.bId} > sokal dupur </label>
                                                <input id={`sokaldupur` + object.bId}
                                                    value="0.5+1+0"
                                                    onChange={(e) => this.millChange(object.bId, e)}
                                                    // onChange={ this.millChange }

                                                    type="radio" name={`mill` + object.bId} />
                                            </div>
                                            <div style={{ display: 'inline-flex' }} className='btn bg-success' >
                                                <label htmlFor={`sokalrat` + object.bId} > sokal rat </label>
                                                <input id={`sokalrat` + object.bId}
                                                    value="0.5+0+1"
                                                    onChange={(e) => this.millChange(object.bId, e)}
                                                    // onChange={ this.millChange }

                                                    type="radio" name={`mill` + object.bId} />
                                            </div>
                                            <div style={{ display: 'inline-flex' }} className='btn bg-primary' >
                                                <label htmlFor={`dupurrat` + object.bId} > dupur rat </label>
                                                <input id={`dupurrat` + object.bId}
                                                    value="0+1+1"
                                                    onChange={(e) => this.millChange(object.bId, e)}
                                                    // onChange={ this.millChange }

                                                    type="radio" name={`mill` + object.bId} />
                                            </div>
                                        </>
                                    }


                                </td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>

                <button onClick={this.buttonSubmit} className='btn btn-danger' >Submit for Tomorrow</button>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sucMsg: state.maneger.sucMsg,
        loader: state.maneger.loading,
        target: state.maneger.target
    }
}

const mapDispatchToProps = dispatch => ({
    dayInput: data => dispatch(dayInput(data)),
    // acceptRequest: data => dispatch( acceptRequest(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(DayList);