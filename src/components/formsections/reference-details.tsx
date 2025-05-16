"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";

const ReferenceDetails = () => {
  return (
    <div className="mb-8">
      <SectionHeader title="Reference" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <Label htmlFor="name1" className="text-sm">
            Name 1
          </Label>
          <Input 
            id="name1" 
            placeholder="Name" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile1" className="text-sm">
            Mobile 1
          </Label>
          <Input 
            id="mobile1" 
            placeholder="Mobile Number" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name2" className="text-sm">
            Name 2
          </Label>
          <Input 
            id="name2" 
            placeholder="Name" 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile2" className="text-sm">
            Mobile 2
          </Label>
          <Input 
            id="mobile2" 
            placeholder="Mobile Number" 
          />
        </div>
      </div>
    </div>
  );
};

export default ReferenceDetails;