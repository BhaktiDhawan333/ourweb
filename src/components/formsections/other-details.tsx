"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Select } from "@/components/ui/select";

const OtherDetails = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Other Details" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="accommodation" className="text-sm">
            Accommodation <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Select</option>
            <option value="owned">Owned</option>
            <option value="rented">Rented</option>
            <option value="paying_guest">Paying Guest</option>
            <option value="hostel">Hostel</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="modeOfTransport" className="text-sm">
            Mode Of Transport <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Choose transports</option>
            <option value="public">Public Transport</option>
            <option value="own_two_wheeler">Own Two Wheeler</option>
            <option value="own_car">Own Car</option>
            <option value="cab">Cab</option>
            <option value="walk">Walk</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="languages" className="text-sm">
            Languages <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="languages" 
            placeholder="Ex. Hindi, English" 
          />
        </div>

        <div className="space-y-2 lg:col-span-3 xl:col-span-2">
          <Label htmlFor="skillIndiaTraining" className="text-sm">
            Have you ever gone through skill India training program <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Please Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="knowAnyoneInOraltask" className="text-sm">
            Do You Know Anyone in Oraltask <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Do You know Anyone in Oraltask</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;