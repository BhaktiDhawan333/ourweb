// pages/candidate-form.tsx

import Image from "../../../../node_modules/next/image";

export default function CandidateForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 p-4 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 md:p-10">
        <div className="mb-8">
          <Image src="/imgs/logo11.png" alt="Logo" width={120} height={60} />
          <h1 className="text-4xl font-bold text-center mb-6 absolute left-[43%] top-[12%]">
            Candidate Form
          </h1>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600">
          {/* Personal Details */}
          <h2 className="col-span-full font-semibold text-base text-black">
            Personal Detail
          </h2>
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Candidate First Name"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Candidate Last Name"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Date"
            type="date"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Email"
            type="email"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Mobile"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Alt. Mobile"
          />
          <select className="border border-gray-300 rounded p-2">
            <option>Interview Centers</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Religion</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Choose Gender</option>
          </select>
          <input
            className="border border-gray-300 rounded p-2"
            type="date"
            placeholder="DOB"
          />
          <select className="border border-gray-300 rounded p-2">
            <option>Choose Marital Status</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Choose Category</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>---select---</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>aadhar Card</option>
          </select>
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Virtual Id"
          />

          {/* Position Applied For */}
          <h2 className="col-span-full font-semibold text-base text-black mt-4">
            Position Applied For
          </h2>
          <select className="border border-gray-300 rounded p-2">
            <option>Operations</option>
          </select>
          <input
            className="border border-gray-300 rounded p-2"
            value="Customer Support Associate"
            readOnly
          />
          <select className="border border-gray-300 rounded p-2">
            <option>Choose Employment type</option>
          </select>

          {/* Qualification Details */}
          <h2 className="col-span-full font-semibold text-base text-black mt-4">
            Qualification Details
          </h2>
          <select className="border border-gray-300 rounded p-2">
            <option>choose qualification Type</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>choose qualification</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>No</option>
          </select>

          {/* Experience Details */}
          <h2 className="col-span-full font-semibold text-base text-black mt-4">
            Experience Details
          </h2>
          <select className="border border-gray-300 rounded p-2">
            <option>Years</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Months</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Years</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Months</option>
          </select>

          {/* Address Details */}
          <h2 className="col-span-full font-semibold text-base text-black mt-4">
            Address Details
          </h2>
          <textarea
            className="border border-gray-300 rounded p-2 col-span-2"
            placeholder="Present"
          />
          <textarea
            className="border border-gray-300 rounded p-2"
            placeholder="Permanent"
          />
          <select className="border border-gray-300 rounded p-2">
            <option>Please Select Distance</option>
          </select>
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Current Area"
          />

          {/* Family Details */}
          <h2 className="col-span-full font-semibold text-base text-black mt-4">
            Family Details
          </h2>
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Name"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Mobile Number"
          />
          <select className="border border-gray-300 rounded p-2">
            <option>Select Relation</option>
          </select>
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Family Income (Yearly)"
          />
          <select className="border border-gray-300 rounded p-2">
            <option>Choose Occupation</option>
          </select>

          {/* IT Assets Details */}
          <h2 className="col-span-full font-semibold text-base text-black mt-4">
            IT Assets Details
          </h2>
          <select className="border border-gray-300 rounded p-2">
            <option>Select</option>
          </select>

          {/* Other Details */}
          <h2 className="col-span-full font-semibold text-base text-black mt-4">
            Other Details
          </h2>
          <select className="border border-gray-300 rounded p-2">
            <option>Select</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>choose transports</option>
          </select>
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Ex. Hindi, English"
          />
          <select className="border border-gray-300 rounded p-2">
            <option>Please Select</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Do You Know Anyone in Oraltask</option>
          </select>

          {/* Reference */}
          <h2 className="col-span-full font-semibold text-base text-black mt-4">
            Reference
          </h2>
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Name 1"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Mobile 1"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Name 2"
          />
          <input
            className="border border-gray-300 rounded p-2"
            placeholder="Mobile 2"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-full mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
