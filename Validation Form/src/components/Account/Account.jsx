import React from 'react'
import "./Account.css"
import { useForm } from "react-hook-form";

const Account = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='main'>
                <h1>Create account</h1>
                <p>Get started with an account.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name'  {...register("name", { required:{value:true,message:"This field is required"},minLength:{value:3,message:"name must have letters between 3 and 25"},maxLength:{value:25,message:"name must have letters between 3 and 25"} })} />
                    {errors.name && <span className='red'>{errors.name.message}</span>}

                    <label htmlFor="label">Email address</label>
                    <input type="email" name='email' {...register("email", { required:{value:true,message:"This field is required"}})}/>
                    {errors.email && <span className='red'>{errors.email.message}</span>}


                    <label htmlFor="label">Create password</label>
                    <input type="password" name='password' {...register("password", { required:{value:true,message:"This field is required"},minLength:{value:8,message:"Min. 8 characters, 1 lowercase, 1 uppercase and 1 number"},pattern:{value:/^[A-Za-z]+$/i , message:"Min. 8 characters, 1 lowercase, 1 uppercase and 1 number"} })}/>
                    {errors.password && <span className='red'>{errors.password.message}</span>}



                    <label className='confirmpass' 
                    htmlFor="label">Comfirm password</label>
                    <input type="password" name='password' />

                    <div className="check">
                        <input type="checkbox" />
                        <p>I agree to the <span><a href="">terms and conditions</a></span></p>
                    </div>
                    <button>Create account</button>
                    <p>Already have a account! <a href="">Login</a></p>

                </form>

            </div>
        </>
    )
}

export default Account