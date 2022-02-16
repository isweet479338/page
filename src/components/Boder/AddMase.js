import React from 'react';
import { connect } from 'react-redux';
import Header from "../Auth/Header";
import Footer from "../Auth/Footer";
import { withRouter } from 'react-router-dom';
import { checkMass, addMase } from '../../services/actions/BoderAction'



class AddMase extends React.Component {
  state = {
    code: '',
    form: true
  }

  onChangemorning = (e) => {
    this.setState({ code: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      code: this.state.code,
    }
    this.props.addMase(obj)
  }

  componentDidMount() {
    this.props.checkMass(JSON.parse(localStorage.getItem('user')).id)
  }

  render() {

    if (this.props.loader == true) {
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

                    {this.props.sucMsg}

                    {this.props.form == true &&
                      <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">Mase Code</label>
                          <input
                            type='text'
                            className="form-control"
                            onChange={this.onChangemorning}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">Request </button>
                      </form>
                    }


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
    loader: state.boder.loading,
    errMsg: state.boder.errMsg,
    sucMsg: state.boder.sucMsg,
    form: state.boder.form,


  }
}


export default withRouter(connect(mapStateToProps, { checkMass, addMase })(AddMase));