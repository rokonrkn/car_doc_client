import { Link } from 'react-router';
import reg_img from '../../public/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Registration = () => {

    const {createUser} = useContext(AuthContext)

    const handleSubmitButton = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.meessage)
        })

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex gap-10">
                        <div className="text-center lg:text-left">
                            <img src={reg_img} alt="" />
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <h2 className='text-center mt-8 text-2xl font-bold text-[#444444]'>Register</h2>
                            <form onSubmit={handleSubmitButton} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811] text-white">Register</button>
                                </div>
                            </form>
                            <span className='mb-10 text-center'>Already have an account? <Link to={`/login`} className='text-[#FF3811]'>Login</Link></span>    
                        </div>
                    </div>
                </div>
    );
};

export default Registration;