import { object, string } from 'yup'

export const signupFormValidation = object({
  username: string().required("Username is Required").min(3, "Username must be at least 3 character").max(20, "username must be lower 20 character"),
  email: string().email("Email is Invalid").required("Email is Required"),
  password: string().min(8, "Password must be at least 8 character").max(20, "Password must be lower 20 character").required("Password is Required"),
  role: string().required("Role is Required"),
})
export const signinFormValidation = object({
  email: string().email("Email is Invalid").required("Email is Required"),
  password: string().min(8, "Password must be at least 8 character").max(20, "Password must be lower 20 character").required("Password is Required"),
})
export const forgetPasswordValidation = object({
  email: string().email("Email is Invalid").required("Email is Required"),
})
export const UpdateforgetPasswordValidation = object({
  newpassword: string().required("Password is Required").min(8, "Password must be at least 8 character").max(20, "Password must be lower 20 character").required("Password is Required")
})
export const CatagoryValidation = object({
  catagory : string().required("Skill is Required"),
})
export const ProfileBasicInfoValidation = object({
  firstname: string().required("FirstName is Required").min(3, "Must be at least 3 character").max(10, "Must be lower 10 character"),
  lastname: string().required("LastName is Required").min(3, "Must be at least 3 character").max(10, "Must be lower 10 character"),
  sex: string().required("Gender is Required"),
  dob: string().required("DateofBirth is Required"),
  city: string().required("City is Required").min(3, "Must be at least 3 character").max(20, "Must be lower 20 character"),
  address: string().required("Address is Required").min(3, "Must be at least 3 character").max(50, "Must be lower 50 character"),
  title: string().required("Title is Required").min(20, "Title must be at least 20 character").max(150, "Title must be lower 150 character"),
  primaryskill: string().required("Skill is Required"),
  aboutyourself : string().required("About YourSelf is Required").min(250, "Must be at least 250 character").max(1200, "Must be lower 1200 character"),
})
export const ProfileWorkExperienceValidation = object({
  position: string().required("Position is Required").min(10, "Must be at least 10 character").max(50, "Must be lower 50 character"),
  company: string().required("Company is Required").min(20, "Must be at least 20 character").max(120, "Must be lower 120 character"),
  startdata: string().required("StartDate is Required"),
  enddata: string().required("EndDate is Required"),
  summary : string().required("Summary is Required").min(250, "Must be at least 250 character").max(1200, "Must be lower 1200 character"),
})
export const ProfileEducationValidation = object({
  country: string().required("Country is Required").min(10, "Must be at least 10 character").max(50, "Must be lower 50 character"),
  collage: string().required("Collage is Required").min(20, "Must be at least 20 character").max(120, "Must be lower 120 character"),
  startdata: string().required("StartDate is Required"),
  enddata: string().required("EndDate is Required"),
  degree : string().required("Degree is Required").min(20, "Must be at least 20 character").max(50, "Must be lower 50 character"),
})
export const ProfileQualificationValidation = object({
  certificate: string().required("Certificate is Required").min(10, "Must be at least 10 character").max(50, "Must be lower 50 character"),
  organization: string().required("Organization is Required").min(20, "Must be at least 20 character").max(120, "Must be lower 120 character"),
  startdata: string().required("StartDate is Required"),
  summary : string().required("Summary is Required").min(250, "Must be at least 250 character").max(1200, "Must be lower 1200 character"),
  
})
