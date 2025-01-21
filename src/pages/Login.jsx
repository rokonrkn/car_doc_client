import { useContext } from 'react';
import login_img from '../../public/images/login/login.svg'
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLoginButton = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result =>{
            console.log(result.user.email)
        })
        .catch(error =>{
            alert(error.message)
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex gap-10">
                <div className="text-center lg:text-left">
                    <img src={login_img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-center mt-8 text-2xl font-bold text-[#444444]'>Login</h2>
                    <form className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;