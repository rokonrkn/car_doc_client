import person from '../../../public/images/About_us/person.jpg'
import parts from '../../../public/images/About_us/parts.jpg'
import 'animate.css';

const AboutUs = () => {
    return (
        <div>
            <div className="lg:mx-20 sm:mx-10 mt-20">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                    <div className="">
                        <div className=" absolute ">
                            <img className='w-[460px] h-[470px] rounded-lg' src={person} alt="" />
                        </div>
                        <div className="relative rounded-lg mt-[40%] ml-[40%] border-4 border-white	">
                            <img className='w-[327px] h-[332px] rounded-lg ' src={parts} alt="" />
                        </div>
                    </div>
                    <div className="space-y-4 ">
                        <h3 className='font text-[#FF3811]'>About Us</h3>
                        <h1 className='text-3xl font-bold w-[400px] '>We are qualified & of experience in this field</h1>
                        <p className='text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-active btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;