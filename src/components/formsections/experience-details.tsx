"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Select } from "@/components/ui/select";

const ExperienceDetails = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Experience Details" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="totalExpYear" className="text-sm">
            Total Exp. In Year <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Years</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6+</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="totalExpMonth" className="text-sm">
            Total Exp. In Month <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Months</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bpoExpYear" className="text-sm">
            BPO Exp. In Year <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Years</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6+</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bpoExpMonth" className="text-sm">
            BPO Exp. In Month <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Months</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;