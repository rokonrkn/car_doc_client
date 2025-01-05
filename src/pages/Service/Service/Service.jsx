import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {

    const [services, setService] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="lg:mx-20">
            <div className="text-center mt-16 space-y-2 ">
                <h4 className="text-[#FF3811] font-bold text-xl">Service</h4>
                <h1 className="text-[45px] font-bold">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mt-10">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className="mt-10 text-center">
                <button className="btn btn-outline btn-secondary">More Service</button>
            </div>
        </div>
    );
};

export default Service;