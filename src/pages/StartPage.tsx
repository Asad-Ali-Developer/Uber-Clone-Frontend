import { Link } from "react-router-dom"
import { UberLogoImage } from "../assets"
import { FaArrowRightLong } from "react-icons/fa6"

const StartPage = () => (
    <div>
        <div className="bg-[url('https://images.unsplash.com/photo-1610187966294-0d2491a3cb1c?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD')] bg-cover bg-center flex flex-col justify-between items-start h-screen w-full">
            {/* Uber Logo */}
            <img className="w-16 mt-10 ml-10" src={UberLogoImage} alt="Uber" />

            {/* Bottom Section */}
            <div className="bg-white w-full px-5 py-4 pb-7 flex flex-col gap-4">
                <h4 className="text-2xl font-bold">Get started with Uber</h4>
                <Link
                    to="/user/login"
                    className="bg-black text-white w-full px-4 py-3 rounded-md font-semibold flex justify-between items-center"
                >
                    Continue
                    <FaArrowRightLong className="ml-2" />
                </Link>
            </div>
        </div>
    </div>
)

export default StartPage