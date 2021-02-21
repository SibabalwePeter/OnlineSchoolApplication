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
          Learner: {},
          MedicalRecord: {},
          CurrentSubjects: {},
          ProposedSubjects: {}
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