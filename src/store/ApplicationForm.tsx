import React from "react";

export var ApplicationForm = {
          NextOfKin: {
            firstname: "",
            middlename: "",
            secondName: "",
            idNumber: "",
            email: "",
            contact1: "",
            contact2: "" },
          Learner: {
            gender: "",
            firstName: "",
            middleName: "",
            secondname: "",
            idNumber: "",
            passport: "",
            populationGroup: "",
            homeLanguage: "",
            languageOfInstructions: "",
            boardingLearner: "",
            boardingAddress: "",
            preferedLanguageOfInstructions: "",
            modeOfTransportToSchool: "",
            numberOfChildrenInFamily: "",
            positionInMotherSide: "",
            positionInFatherSide: "",
            emailAddress: "",
            contactNumber1: "",
            contactNumber2: "",
            homeAddress: "",
            deceasedParent: "",
            religion: "",
            sport: "",
            provincialHonours: "",
            previousSchool: "",
            province: "",
            previouslyEnrolledInTheProvince: ""
          },
          MedicalRecord: {
            medicalAidNumber: "",
            telephoneNumber: "",
            primaryBeneficiary: ""
          },
          CurrentSubjects: {},
          ProposedSubjects: {},
          Documents:{
            id: "",
            report: "",
            tranfer: "",
            nextOfKinID: "",
            

          }
};

export const updateNextOfKin: any =(value: any, input :string) => {
  
  switch (input) {
    case 'firstname':
      return ApplicationForm.NextOfKin.firstname = value;
    case 'middlename':
      return ApplicationForm.NextOfKin.firstname = value;
    case 'secondname':
      return ApplicationForm.NextOfKin.firstname = value;
    case 'idnumber':
      return ApplicationForm.NextOfKin.firstname = value;
    case 'emailaddress':
      return ApplicationForm.NextOfKin.firstname = value;
    case 'contact1':
      return ApplicationForm.NextOfKin.firstname = value;
    case 'contact2':
      return ApplicationForm.NextOfKin.firstname = value;
    default:
      return "";
  }
}