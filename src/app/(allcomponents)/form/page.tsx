import Image from "../../../../node_modules/next/image";
import CandidateForm from "../candidate-form/page";

export default function Form() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-orange-300 to-blue-400 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 flex flex-col items-center gap-2">
            <Image
              src="/imgs/logo11.png"
              alt="Example"
              className="ml-2 h-6 w-8 md:h-15 md:w-16 object-cover"
              width={500}
              height={300}
            />
            <div className="bg-[#a35dc1] px-4 py-1 rounded-full">
              <h1 className="text-white font-semibold">ORALTASK</h1>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Candidate Form
            </h2>
            <CandidateForm />
          </div>
        </div>
      </div>
    </div>
  );
}
