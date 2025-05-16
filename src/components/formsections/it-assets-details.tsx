"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Select } from "@/components/ui/select";

const ITAssetsDetails = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="IT Assets Details" />
      
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="haveLaptop" className="text-sm">
            Do You Have Laptop/Desktop <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ITAssetsDetails;