"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Select } from "@/components/ui/select";

const PersonalDetails = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Personal Detail" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="centers" className="text-sm">
            Centers <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Interview Centers</option>
            <option value="center1">Center 1</option>
            <option value="center2">Center 2</option>
            <option value="center3">Center 3</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm">
            Candidate First Name <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="firstName" 
            placeholder="First Name" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm">
            Candidate Last Name <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="lastName" 
            placeholder="Last Name" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm">
            Date <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="date" 
            type="date" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Email" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-sm">
            Mobile <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="mobile" 
            placeholder="Mobile Number" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="altMobile" className="text-sm">
            Alt. Mobile
          </Label>
          <Input 
            id="altMobile" 
            placeholder="Alternate Mobile Number" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="religion" className="text-sm">
            Religion <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Christian</option>
            <option value="sikh">Sikh</option>
            <option value="jain">Jain</option>
            <option value="buddhist">Buddhist</option>
            <option value="other">Other</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender" className="text-sm">
            Gender <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob" className="text-sm">
            DOB <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="dob" 
            type="date" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maritalStatus" className="text-sm">
            Marital Status <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Choose Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm">
            Category <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Choose Category</option>
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bloodGroup" className="text-sm">
            Blood Group
          </Label>
          <Select>
            <option value="">---select---</option>
            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="ab+">AB+</option>
            <option value="ab-">AB-</option>
            <option value="o+">O+</option>
            <option value="o-">O-</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="virtualIdType" className="text-sm">
            Virtual Id(Type) <span className="text-red-500">*</span>
          </Label>
          <Select>
            <option value="">Aadhar Card</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="pan">PAN Card</option>
            <option value="voter">Voter ID</option>
            <option value="driving">Driving License</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="aadharNumber" className="text-sm">
            Aadhar Number <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="aadharNumber" 
            placeholder="Virtual ID" 
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;