import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <>
            <div className="rounded-md p-4 bg-base-100 border-gray-200 border-2">
                <figure>
                    <img className="rounded-md lg:h-52"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="mt-3">
                    <div className="">
                        <h2 className="card-title text-[25px] font-bold">{title}</h2>
                    </div>
                    <div className="card-actions flex items-center mt-2 justify-between">
                        <p className="text-[#FF3811] text-[20px] font-semibold">Price: ${price}</p>
                        <Link to={``}>
                            <span className="text-[#FF3811]"><FaArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;