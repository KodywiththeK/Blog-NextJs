import * as Yup from 'yup'
import { EmailData } from './nodemailer'

const schema = Yup.object().shape({
  from: Yup.string().email('Please enter a valid email address.').required('Email is required.'),
  subject: Yup.string().required('Title is required.'),
  message: Yup.string().required('Message is required.'),
})

// 유효성 검사 함수
export const validateData = async (data: EmailData) => {
  try {
    await schema.validate(data, { abortEarly: false })
    // 유효성 검사 통과
    console.log('유효성 검사 통과')
    return true
  } catch (errors) {
    // 유효성 검사 실패
    console.error(errors)
    return String(errors)
  }
}
