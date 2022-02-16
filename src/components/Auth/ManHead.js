import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function ManHead() {
    
    if (JSON.parse( localStorage.getItem('mane') === false)) {
        <Redirect to='/home' />
      }

    return (

        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <h1 className="h4 text-gray-900 m-4 text-center">Rajtechteam Mill System Maneger</h1>
                <Link className='btn btn-info' to="/home">Home</Link>
{JSON.parse(localStorage.getItem('mane')) === true && 
<>
                <Link className='btn btn-info'  to={ "/boder-request" } > Boder Request </Link>

                <Link className='btn btn-info'  to={ "/lost-mill-confirm" } > Lost Mill Confirm </Link>
                {/* <Link className='btn btn-info'  to={ "/today-total-mill" } > Today Total Mill </Link> */}

                <Link className='btn btn-info'  to={ "/tk-joma" } > Tk Joma </Link>
                <Link className='btn btn-info'  to={ "/total-tk" } >Total Tk By Date</Link>

                <Link className='btn btn-info'  to={ "/bazarkari" } >BazarKari</Link>
                <Link className='btn btn-info'  to={ "/bazar-tk" } >Bazar Tk</Link>
                <Link className='btn btn-info'  to={ "/bazar-tk-history" } >Bazar Tk History</Link>
                <Link className='btn btn-info'  to={ "/boder-gust-mill-start" } >Boder Guest Mill Start</Link>
                <Link className='btn btn-info'  to={ "/guest-mill-list" } >Boder Guest Mill List</Link>
                <Link className='btn btn-info'  to={ "/boder-lost-mill" } >Boder lost Mill List</Link>
                {/* <Link className='btn btn-info'  to={ "/mill-amount-input" } >Mill Amount Input</Link> */}
                <Link className='btn btn-info'  to={ "/mill-count" } >Mill Count / Input</Link>
                <Link className='btn btn-info'  to={ "/make-bazar-list" } >Make a Bazar List</Link>
                <Link className='btn btn-info'  to={ "/took-bazar" } >Take Bazar From Boder</Link>

                <Link className='btn btn-info'  to={ "/extra" } >Extra</Link>
                <Link className='btn btn-info'  to={ "/make-maneger" } >Make Maneger</Link>
                <Link className='btn btn-info'  to={ "/all-cost" } >Cost List</Link>

</>
}



            </div>
        </div>



    );
}

export default ManHead;