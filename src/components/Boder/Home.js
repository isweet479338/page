import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Header from "../Auth/Header";
import Footer from "../Auth/Footer";
import { boder } from "../../services/actions/BoderAction";
import { rediretfalse } from "../../services/actions/AuthAction";


class Home extends Component {

  componentDidMount() {
    this.props.boder()
  }

  
  render() {
    const pp = this.props.boderr.total + this.props.boderr.gtotal - this.props.boderr.ltotal - this.props.boderr.n_total - this.props.boderr.n_gtotal;
    const rate = this.props.boderr.mill_rate / 2.5
    const kk = pp * rate



    return (
      <>
        <Header />

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="p-5">
                  <div className="text-center">
                 
                    <table className='table table-success'>
                      <tbody>

                        <tr>
                          <td>Mill</td>
                          <td>Morning  {this.props.boderr.morning} + noon  {this.props.boderr.noon} + night  {this.props.boderr.night}</td>
                          <td> (+) Total  {this.props.boderr.total} </td>
                          <td>Details</td>
                        </tr>

                        <tr>
                          <td>Guest</td>
                          <td> Noon  {this.props.boderr.gnoon} + Night  {this.props.boderr.gnight}</td>
                          <td>(+) Total  {this.props.boderr.gtotal} </td>
                          <td>Details</td>
                        </tr>

                        <tr>
                          <td>Lost</td>
                          <td>Morning  {this.props.boderr.lmorning} + Noon  {this.props.boderr.lnoon} + Night  {this.props.boderr.lnight}</td>
                          <td> (-) Total  {this.props.boderr.ltotal} </td>
                          <td>Details</td>
                        </tr>

                        <tr>
                          <td>Mill Not Run</td>
                          <td>Morning  {this.props.boderr.n_morning} + Noon  {this.props.boderr.n_noon} + Night  {this.props.boderr.n_night}</td>
                          <td> (-) Total  {this.props.boderr.n_total} </td>
                          <td></td>
                        </tr>

                        <tr>
                          <td>Guest Not Run</td>
                          <td>Noon  {this.props.boderr.n_gnoon} + Night  {this.props.boderr.n_gnight}</td>
                          <td> (-) Total  {this.props.boderr.n_gtotal} </td>
                          <td></td>
                        </tr>



                        <tr><td colSpan='4' >-</td></tr>

                        <tr>
                          <td>Mill Total </td>
                          <td> (+)Personal Mill  {this.props.boderr.total} (+) Guest  {this.props.boderr.gtotal} (-) Lost  {this.props.boderr.ltotal}</td>
                          <td> = {pp} </td>
                          <td>-</td>
                        </tr>



                        <tr>
                          <td>Mill Rate </td>
                          <td> {this.props.boderr.mill_rate } / 2.5 = { rate }  </td>
                          <td>  {pp} * {rate }  </td>
                          <td> </td>
                        </tr>
                        <tr><td colSpan='4' >-</td></tr>


                        <tr>
                          <td>Mill Cost </td>
                          <td> {pp} * { rate } </td>
                          <td>  {kk}  </td>
                          <td></td>
                        </tr>

                        <tr>
                          <td>Tk Joma </td>
                          <td> </td>
                          <td>{this.props.boderr.tk} </td>
                          <td> details </td>
                        </tr>

                        <tr>
                          <td>Last </td>
                          <td> Mill Cost - Tk Joma </td>
                          <td>{kk - this.props.boderr.tk} </td>
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
        <Footer />
      </>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    boderr: state.boder.boder,
  }
}
const mapDispatchToProps = dispatch => ({
  boder: () => dispatch(boder()),
  rediretfalse: () => dispatch(rediretfalse()),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));