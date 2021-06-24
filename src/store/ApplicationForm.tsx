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
            nextOfKinID: ""

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

export const updateLearner: any =(value: any, input :string) => {
  
  switch (input) {
    case 'gender':
      return ApplicationForm.Learner.gender = value;
    case 'firstName':
      return ApplicationForm.Learner.firstName = value;
    case  'middleName':
      return ApplicationForm.Learner.middleName = value;
    case 'secondname':
      return ApplicationForm.Learner.secondname = value;
    case 'idNumber':
      return ApplicationForm.Learner.idNumber = value;
    case 'passport':
      return ApplicationForm.Learner.passport = value;
    case 'populationGroup':
      return ApplicationForm.Learner.populationGroup = value;
    case 'homeLanguage':
      return ApplicationForm.Learner.homeLanguage = value;
    case 'languageOfInstructions':
      return ApplicationForm.Learner.languageOfInstructions = value;
    case 'boardingLearner':
      return ApplicationForm.Learner.boardingLearner = value;
    case 'boardingAddress':
      return ApplicationForm.Learner.boardingAddress = value;
    case 'preferedLanguageOfInstructions':
      return ApplicationForm.Learner.preferedLanguageOfInstructions = value;
    case 'modeOfTransportToSchool':
      return ApplicationForm.Learner.modeOfTransportToSchool = value;
    case 'numberOfChildrenInFamily':
      return ApplicationForm.Learner.numberOfChildrenInFamily = value;
    case 'positionInMotherSide':
      return ApplicationForm.Learner.positionInMotherSide = value;
    case 'positionInFatherSide':
      return ApplicationForm.Learner.positionInFatherSide = value;
    case 'emailAddress':
      return ApplicationForm.Learner.emailAddress = value;
    case 'contactNumber1':
      return ApplicationForm.Learner.contactNumber1 = value;
    case 'contactNumber2':
    return ApplicationForm.Learner.contactNumber2 = value;
    case 'homeAddress':
      return ApplicationForm.Learner.homeAddress = value;
    case 'deceasedParent':
      return ApplicationForm.Learner.deceasedParent = value;
    case 'religion':
      return ApplicationForm.Learner.religion = value;
    case 'sport':
      return ApplicationForm.Learner.sport = value;
    case 'provincialHonours':
      return ApplicationForm.Learner.provincialHonours = value;
    case 'previousSchool':
      return ApplicationForm.Learner.previousSchool = value;
    case 'province':
      return ApplicationForm.Learner.province = value;
    case 'provipreviouslyEnrolledInTheProvincence':
      return ApplicationForm.Learner.province = value;
    default:
      return "";
  }
}