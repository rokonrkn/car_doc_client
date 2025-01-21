import { Link, useLoaderData } from "react-router";
import banner from '../../../public/images/checkout/checkout.png'
import { Input } from 'antd';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const CheckOut = () => {

    const { TextArea } = Input;
    const {user} = useContext(AuthContext)
    const { title, service_id, price, img } = useLoaderData()

    const handleOrderConfirm = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.number.value;

        const orderInfo = {
            name: name,
            date: date,
            phone: phone,
            email: user?.email,
            title: title,
            service_id: service_id,
            price: price,
            img: img

        }
        // console.log(orderInfo)

            fetch(`http://localhost:4000/order`,{
                method: 'post',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div className="lg:mx-20">
            <div className=" mt-5 relative">
                <img className="" src={banner} alt="" />
                <div className="bg-[#FF3811] w-32 text-center left-1/2 py-2 rounded-t-xl text-white absolute bottom-0 m-auto "> <Link to={`/`} >Home/</Link>Chckout
                </div>
            </div>
            <div className="bg-[#F3F3F3] mt-10 xl:py-20 py-8 xl:px-32 px-20 rounded-md">
                <form onSubmit={handleOrderConfirm}>
                    <div className="space-y-5">
                        <div className="grid xl:grid-cols-2 xl:gap-10 gap-5">
                            <div className="">
                                <Input type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div className="">
                                <Input type="date" name="date" placeholder="" />
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-2 xl:gap-10 gap-5 ">
                            <div className="">
                                <Input name="number" type="number" placeholder="Your Phone" />
                            </div>
                            <div className="">
                                <Input name="mail" type="email" defaultValue={user?.email} placeholder="Your Mail" />
                            </div>
                        </div>
                        <div className="">
                            <TextArea rows={4} placeholder="Your Message" maxLength={200} />
                        </div>
                    </div>
                    <div className="mt-5">
                        <button type="submit" name="submit" className="btn btn-block bg-[#FF3811] text-white ">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;