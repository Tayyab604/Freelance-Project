import { object, string } from 'yup'

export const signupFormValidation = object({
  username: string().required("Username is Required").min(3, "Username must be at least 3 character").max(20, "username must be lower 20 character"),
  email: string().email("Email is Invalid").required("Email is Required"),
  password: string().min(8, "Password must be at least 8 character").max(20, "Password must be lower 20 character").required("Password is Required"),
})
export const signinFormValidation = object({
  email: string().email("Email is Invalid").required("Email is Required"),
  password: string().min(8, "Password must be at least 8 character").max(20, "Password must be lower 20 character").required("Password is Required"),
})
export const CatagoryValidation = object({
  catagory : string().required("Skill is Required"),
  
})