"use client";
import { Button } from "@/components/ui/button";
import PersonalDetails from "@/components/formsections/personal-details";
import PositionDetails from "@/components/formsections/position-details";
import QualificationDetails from "@/components/formsections/qualification-details";
import ExperienceDetails from "@/components/formsections/experience-details";
import AddressDetails from "@/components/formsections/address-details";
import FamilyDetails from "@/components/formsections/family-details";
import ITAssetsDetails from "@/components/formsections/it-assets-details";
import OtherDetails from "@/components/formsections/other-details";
import ReferenceDetails from "@/components/formsections/reference-details";

const CandidateForm = () => {
  // const [formData, setFormData] = useState({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:");
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <PersonalDetails />
      <PositionDetails />
      <QualificationDetails />
      <ExperienceDetails />
      <AddressDetails />
      <FamilyDetails />
      <ITAssetsDetails />
      <OtherDetails />
      <ReferenceDetails />

      <div className="flex justify-center mt-8">
        <Button
          type="submit"
          className="px-8 py-2 bg-[#a35dc1] hover:bg-[#8f4db0] text-white rounded-full transition-all duration-300 font-medium"
        >
          Submit
        </Button>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        2023 - 2025 © Oraltask Business Solutions
      </div>
    </form>
  );
};

export default CandidateForm;
