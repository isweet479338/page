// import React from 'react';
// import axios from 'axios';


// function checkRoute(){
    
//     axios.get(`http://127.0.0.1:8000/api/checkRoute/` , { 
//         headers: {
//           'Authorization' : localStorage.getItem("token")
//         } 
//       })
//     .then( res => {
//        if(res.data == 1){ 
//          console.log( 'true')
//          return res.data;
//         }else{
//            console.log('false if')
//            return 0;
//        }
//     })
//     .catch(err => {
//       console.log('error')
//     })

//     return 'yes';


// }


// export default checkRoute;