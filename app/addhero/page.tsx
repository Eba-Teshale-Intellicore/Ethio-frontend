"use client";

import { useState } from "react";

import StepBasicInfo from "@/components/admin/hero/StepBasicInfo";
import StepDescr from "@/components/admin/hero/StepDescription";
import StepCatego from "@/components/admin/hero/StepCategories";
import StepImage from "@/components/admin/hero/StepImages";
import StepAchievements from "@/components/admin/hero/StepAchievements";
import StepSources from "@/components/admin/hero/StepSources";
import StepReview from "@/components/admin/hero/StepReview";

export default function AddHeroPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<any>({});

  const next = () => setStep(prev => prev + 1);
  const prev = () => setStep(prev => prev - 1);

  return (
    <>
      {step === 1 && (
        <StepBasicInfo
          next={next}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 2 && (
        <StepDescr
          next={next}
          prev={prev}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 3 && (
        <StepCatego
          next={next}
          prev={prev}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 4 && (
        <StepImage
          next={next}
          prev={prev}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 5 && (
        <StepAchievements
          next={next}
          prev={prev}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step == 6 && (
        <StepSources
        next={next}
        prev={prev}
        formData={formData}
        setFormData={setFormData}
        />
      )}

      {step === 7 && (
        <StepReview 
        prev={prev}
        formDta={formData}
        setFormData={setFormData}        
        />
      )}
    </>
  );
}