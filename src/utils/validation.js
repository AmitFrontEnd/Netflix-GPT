import { normalizeModuleId } from "vite/module-runner"

export const formValidation = (email, password, name) => {
  const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  const passwordTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)


  if (name !== null && name.trim() === '') return 'Name is invalid'
  if (!emailTest) return 'Email is invalid'
  if (!passwordTest) return 'Password is invalid'
  return null
}