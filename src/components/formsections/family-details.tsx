"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Select } from "@/components/ui/select";

const FamilyDetails = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Family Details" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="familyName" className="text-sm">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="familyName" 
            placeholder="Name" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="familyMobile" className="text-sm">
            Mobile Number <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="familyMobile" 
            placeholder="Mobile Number" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="familyRelation" className="text-sm">
            Relation <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Select Relation</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="spouse">Spouse</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="son">Son</option>
            <option value="daughter">Daughter</option>
            <option value="other">Other</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="familyIncome" className="text-sm">
            Family Income(Yearly)
          </Label>
          <Input 
            id="familyIncome" 
            placeholder="Family Income" 
          />
        </div>

        <div className="space-y-2 lg:col-span-4">
          <Label htmlFor="occupation" className="text-sm">
            Occupation
          </Label>
          <Select>
            <option value="">Choose Occupation</option>
            <option value="business">Business</option>
            <option value="service">Service</option>
            <option value="professional">Professional</option>
            <option value="retired">Retired</option>
            <option value="homemaker">Homemaker</option>
            <option value="student">Student</option>
            <option value="unemployed">Unemployed</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;