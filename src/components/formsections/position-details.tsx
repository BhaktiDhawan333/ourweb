"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Select } from "@/components/ui/select";

const PositionDetails = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Position Applied For" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="department" className="text-sm">
            Department <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Operations</option>
            <option value="operations">Operations</option>
            <option value="hr">HR</option>
            <option value="finance">Finance</option>
            <option value="it">IT</option>
            <option value="marketing">Marketing</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="appliedFor" className="text-sm">
            Applied For <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Customer Support Associate</option>
            <option value="csa">Customer Support Associate</option>
            <option value="tl">Team Leader</option>
            <option value="manager">Manager</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="employmentType" className="text-sm">
            Employment Type <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Choose Employment type</option>
            <option value="fullTime">Full Time</option>
            <option value="partTime">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PositionDetails;