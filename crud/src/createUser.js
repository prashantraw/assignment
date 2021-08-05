// import React, { useState } from 'react';


// export default function App() {
//   const InitialData = {
//     Name: null,
//     UserName: null,
//     Password: null,
//     ConfirmPassword: null,
//     Zip_Code: null,
//     errors: {
//       Name: "",
//       UserName: "",
//       Password: "",
//       ConfirmPassword: "",
//       Zip_Code: "",

//     }

//   }
//   const[initialdata,setInitialdata]=useState(InitialData)
//   const[formvalid,setformvalid]=useState(false)

//   const handleChange=(e)=>{
//     e.preventDefault();
//     const{name, value}=e.target;
//     let errors= initialdata.errors
//     console.log(initialdata)

//     switch(name){
//       case 'Name':
//         errors.Name= value.length<=0? 'please enter your name':'';
//         break;
//       case 'UserName':
//         errors.UserName= value.length<=0? 'please enter your name':'';
//         break;
//       case 'Password':
//         errors.Password= value.length<8 ?'Password must 8 characters':'';
//         break;
//       case 'ConfirmPassword':
//         errors.ConfirmPassword= (value !== initialdata.Password)?'Password not matching':'';
//         break;
//       case 'Zipcode':
//         errors.Zip_Code= value.length<6?'Invalid zip code':'';
//         break;
//     }
//     setInitialdata({errors,[name]:value},()=>{
//       console.log('errors')
//     })
//     setInitialdata({...initialdata,[name]:value})

//   }
//   const validateForm=(errors)=>{
//     let str=Object.values(errors).forEach(
//       (value)=>value.length>0
//     )
//     if(str){
//       return false
//     }
//     return true;
//   }
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     setformvalid(validateForm(initialdata.errors))
//     // if(validateForm(initialdata.errors)){
//     //   console.log('Valid form')
//     // }else{
//     //   console.log('invalid form')
//     // }
//   }
//   return(
//     <div>
//       <h3>REGISTRATION FORM</h3>
      
//       <form onSubmit={handleSubmit} noValidate>
//         <div>
//           <label>Name: 
//             <input type="text" name='Name' onChange={handleChange} noValidate/>
//           {initialdata.errors.Name.length<0 ? <span>{initialdata.errors.Name}</span>:''}
//           </label>
//         </div>
//         <div>
//           <label>UserName
//           <input type="text" name='UserName' onChange={handleChange}/>
//           </label>
//           {initialdata.errors.UserName.length>0 ? <span>{initialdata.errors.UserName}</span>:''}
//         </div>
//         <div>
//           <label>Password
//           <input type="password" name='Password' onChange={handleChange}/>
//           </label>
//           {initialdata.errors.Password.length>0 ? <span>{initialdata.errors.Password}</span>:''}
//         </div>
//         <div>
//           <label>Confirm Password
//           <input type="password" name='ConfirmPassword' onChange={handleChange}/>
//           </label>
//           {initialdata.errors.ConfirmPassword.length>0 ? <span>{initialdata.errors.ConfirmPassword}</span>:''}
//         </div>
//         <div>
//           <label>Zip Code:
//             <input type="number" name='Zipcode' onChange={handleChange}/>
//           </label>
//           {initialdata.errors.Zip_Code.length>0 ? <span>{initialdata.errors.Zip_Code}</span>:''}
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//         Form is {formvalid?'valid. Submitted':'invalid. Form not submitted'}
//       </form>
//     </div>
//   )
// }