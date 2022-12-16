import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, getValues, formState: { errors } }= useForm();
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // email, password, confirm password,fillname, birthday;

    const onSub = (_bodyData) =>{
        console.log(_bodyData);
    }


  return (

    <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit(onSub)} className='col-lg-3 col-md-9 col-8 mt-5 shadow p-3 rounded-5'>

            <h1>sign UP</h1>

            <label className='mt-2' >Email</label>
            <input {...register('email', {required:true, pattern:emailReg})} className="form-control" type="email" />
            {errors.email && <span className='d-block text-danger'>Invalid email.... </span>}

            <label className='mt-2'>Password</label>
            <input {...register('password', {required:true, minLength:2, maxLength:15})} className="form-control" type="password" />
            {errors.password && <span className='d-block text-danger'>Invalid password....</span>}




            <label className='mt-2'>confirm password</label>
            <input {...register('confirmPassword', {required:true, validate:(item) => getValues('password')===item})} type="password"  className='form-control'/>

            <button className='btn btn-primary mt-3 px-4 py-2'>sign up</button>
        </form>

    </div>
  )
}

export default Login