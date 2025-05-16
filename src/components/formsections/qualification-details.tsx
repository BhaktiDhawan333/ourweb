"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Select } from "@/components/ui/select";

const QualificationDetails = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Qualification Details" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="qualificationType" className="text-sm">
            Qualification Type <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Choose qualification Type</option>
            <option value="graduate">Graduate</option>
            <option value="postgraduate">Post Graduate</option>
            <option value="diploma">Diploma</option>
            <option value="12th">12th</option>
            <option value="10th">10th</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="qualification" className="text-sm">
            Qualification <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Choose qualification</option>
            <option value="btech">B.Tech</option>
            <option value="be">BE</option>
            <option value="bsc">BSc</option>
            <option value="bca">BCA</option>
            <option value="mca">MCA</option>
            <option value="msc">MSc</option>
            <option value="mba">MBA</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="examInThreeMonths" className="text-sm">
            Exam If Any Within 3 Months
          </Label>
          <Select>
            <option value="">No</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default QualificationDetails;