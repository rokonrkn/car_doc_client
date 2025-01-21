import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import banner from '../../../public/images/checkout/checkout.png'
import BookingsTable from "./BookingsTable";

const Bookings = () => {

    const [bookings, setBookings] = useState([])
    console.log(bookings)
    const { user } = useContext(AuthContext)
    const url = `http://localhost:4000/orders?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [])

    return (
        <div className="lg:mx-20 mt-5">
            <div className="relative">
                <img className="h-full w-full object-cover" src={banner} alt="Car Banner" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-gray-400/70 flex items-center justify-start pl-10 rounded-md">
                    <h3 className="text-white text-lg font-bold">Car Details</h3>
                </div>
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <BookingsTable
                                    key={booking._id}
                                    booking={booking}
                                >
                                </BookingsTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;