import { IoStopwatchSharp } from "react-icons/io5";

const FlightPolicies = () => {
  return (
    <div className="mt-12 lg:mb-12 mb-4 p-4 bg-[#b9e3d5] rounded-xl">
      <h1 className="text-xl lg:text-left text-center lg:text-2xl font-semibold">Emirates Airlines Policies</h1>
      <div className="flex lg:flex-row flex-col gap-8 mt-2">
        <div className="flex lg:items-center items-start ">
        <IoStopwatchSharp/>
        <p>Pre-flight cleaning, installation of cabin HEPA filters.</p>
        </div>
        <div className="flex items-center">
        <IoStopwatchSharp/>
        <p>Pre-flight health screening questions.</p>
        </div>
      </div>
    </div>
  )
}

export default FlightPolicies
