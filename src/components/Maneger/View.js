import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { managerData, millCheck } from "../../services/actions/ManegerAction";



function View(props) {

  const [type, setType] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    props.managerData()
  }, [])
  function hendelChange(e) {
    setType(e.target.value)
    setErr(false)
  }
  function hendelTextarea(e) {
    setData(e.target.value)
  }
  function hendelSubmit(e, id) {
    e.preventDefault();

    if (type === '') {
      setErr(true)
    } else if (pp(type) === true && data === '') {
      setError(true)
    } else {
      const obj = {
        type, data, id
      }
      props.millCheck(obj)
    }
  }
  function pp(kk) {
    switch (kk) {
      case 'ALLOFF':
        return true
        break;
      case 'ONLYMORNING':
        return true
        break;
      case 'ONLYNOON':
        return true
        break;
      case 'ONLYNIGHT':
        return true
        break;
      default:
        return false
        break;
    }
  }



  return (
    <div key='fffff'>
      <h1 key='sdsdfsd'>Becarefull About This Section</h1>
      {props.inputList.map((obj, i) => {
        return <>

          <p key={i}>
            {obj.d}-{obj.m}-{obj.y} target :  {obj.target_amt}, bazar: {obj.bazar_amt}, status : {obj.status}
          </p>
          <select key={`ss`+i} required='required' onChange={hendelChange} >
            <option key='2' value='' >Need a Action </option>
            <option key='22' value='ALLRUN' >Mill Sob Cholce</option>
            <option key='2321' value='ALLOFF' >Mill Sob Bondho</option>
            <option key='213' value='ONLYMORNING' >Only Sokal Bondho</option>
            <option key='21' value='ONLYNOON' >Only Dupur Bondho</option>
            <option key='21213' value='ONLYNIGHT' >Only Rat Bondho</option>
          </select> <button key={`sds`+i} onClick={(e) => hendelSubmit(e, obj.id)}>Submit</button>
          {err === true && <p key={`ssd`+i}>This Field Must be change </p>}

        </>
      })}

      {pp(type) &&
        <>
          <textarea key='sd' required='required' onChange={hendelTextarea} ></textarea>
          {error === true && <p key='dsfd'>This Field Is Required</p>}
        </>
      }
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    inputList: state.maneger.input
  }
}
const mapDispatchToProps = dispatch => ({
  managerData: () => dispatch(managerData()),
  millCheck: (data) => dispatch(millCheck(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(View);