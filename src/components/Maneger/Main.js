import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import ManHead from "../Auth/ManHead";
import ManFoot from "../Auth/ManFoot";
import { managerInfo } from "../../services/actions/ManegerAction";
import View from "./View";



function Home(props) {

  // if (localStorage.getItem('mane') === false) {
  //   <Redirect to='/home' />
  // }

  useEffect(() => {
    props.managerInfo()
  }, [])
  
  const pp = props.boderr.total + props.boderr.gtotal - props.boderr.ltotal - props.boderr.n_total - props.boderr.n_gtotal;
  const qq = pp * props.boderr.mill_rate;
  const rate = props.boderr.mill_rate / 2.5
  const kk = pp * rate
  const aa = props.boderr.tk - props.boderr.bazar_amt - props.boderr.cost;
  const cost = parseFloat( props.boderr.bazar_amt ) + parseFloat(props.boderr.cost)
  const ll = cost / pp ;

  
  return (
    <>
      <ManHead />

      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-5">
                <div className="text-center">

                  <View />
                  <hr />


                  <table className='table table-success'>
                      <tbody>

                        <tr>
                          <td>Mill</td>
                          <td>Morning  {props.boderr.morning} + noon  {props.boderr.noon} + night  {props.boderr.night}</td>
                          <td> (+) Total  {props.boderr.total} </td>
                          <td>Details</td>
                        </tr>

                        <tr>
                          <td>Guest</td>
                          <td> Noon  {props.boderr.gnoon} + Night  {props.boderr.gnight}</td>
                          <td>(+) Total  {props.boderr.gtotal} </td>
                          <td>Details</td>
                        </tr>

                        <tr>
                          <td>Lost</td>
                          <td>Morning  {props.boderr.lmorning} + Noon  {props.boderr.lnoon} + Night  {props.boderr.lnight}</td>
                          <td> (-) Total  {props.boderr.ltotal} </td>
                          <td>Details</td>
                        </tr>

                        <tr>
                          <td>Mill Not Run</td>
                          <td>Morning  {props.boderr.n_morning} + Noon  {props.boderr.n_noon} + Night  {props.boderr.n_night}</td>
                          <td> (-) Total  {props.boderr.n_total} </td>
                          <td></td>
                        </tr>

                        <tr>
                          <td>Guest Not Run</td>
                          <td>Noon  {props.boderr.n_gnoon} + Night  {props.boderr.n_gnight}</td>
                          <td> (-) Total  {props.boderr.n_gtotal} </td>
                          <td></td>
                        </tr>



                        <tr><td colSpan='4' >-</td></tr>

                        <tr>
                          <td>Mill Total </td>
                          <td> (+)Personal Mill  {props.boderr.total} (+) Guest  {props.boderr.gtotal} (-) Lost  {props.boderr.ltotal}</td>
                          <td> = {pp} </td>
                          <td>-</td>
                        </tr>



                        <tr>
                          <td>Mill Rate </td>
                          <td> {props.boderr.mill_rate} </td>
                          <td>  {pp} * {props.boderr.mill_rate}  </td>
                          <td> </td>
                        </tr>
                        <tr><td colSpan='4' >-</td></tr>


                        <tr>
                          <td>Mill Cost </td>
                          <td> Appreciate {pp} * {props.boderr.mill_rate} </td>
                          <td>  {kk}  </td>
                          <td>Maybe</td>
                        </tr>

                        <tr><td colSpan='4' >-</td></tr>
                        <tr><td colSpan='4' >-</td></tr>

                        <tr>
                          <td>Tk Joma </td>
                          <td> Total </td>
                          <td>{props.boderr.tk} </td>
                          <td> details </td>
                        </tr>

                        <tr>
                          <td>Mill Expense</td>
                          <td> Total </td>
                          <td>(-) {props.boderr.bazar_amt} </td>
                          <td> details </td>
                        </tr>

                        <tr>
                          <td>Extra Expense</td>
                          <td> Total </td>
                          <td>(-) {props.boderr.cost} </td>
                          <td> details </td>
                        </tr>



                        <tr>
                          <td>Last </td>
                          <td> Total tk - mill expense - cost </td>
                          <td>(=){ aa  } </td>
                          <td>  </td>
                        </tr>
                        <tr><td colSpan='4' >-</td></tr>

                        <tr>
                          <td>Mill Total </td>
                          <td> (+)Personal Mill  {props.boderr.total} (+) Guest  {props.boderr.gtotal} (-) Lost  {props.boderr.ltotal}</td>
                          <td> = {pp} </td>
                          <td>-</td>
                        </tr>

                        <tr>
                          <td>Total Cost</td>
                          <td> Bazar Tk {props.boderr.bazar_amt} (+) Extra Cost  {props.boderr.cost}</td>
                          <td> = { cost } </td>
                          <td>-</td>
                        </tr>






                        <tr>
                          <td>Current Mill Rate </td>
                          <td> Total Cost / Total Mill </td>
                          <td>{ ll.toFixed(2) } </td>
                          <td>  </td>
                        </tr>




                      </tbody>
                    </table>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ManFoot />
    </>

  );
}

const mapStateToProps = (state) => {
  return {
    boderr : state.maneger.manager
  }
}
const mapDispatchToProps = dispatch => ({
  managerInfo: () => dispatch( managerInfo ())

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));