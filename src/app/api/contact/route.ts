import { EmailData, sendEmail } from '@/utils/nodemailer'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  from: Yup.string().email('Please enter a valid email address.').required('Email is required.'),
  subject: Yup.string().required('Title is required.'),
  message: Yup.string().required('Message is required.'),
})

export async function POST(req: Request) {
  const body = await req.json()

  // 유효성 검사
  if (!schema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: '올바른 형식의 이메일을 입력해주세요.' }), { status: 400 })
  }

  // Nodemailer 이메일 전송 로직
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일을 성공적으로 전송했습니다.' }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error)

      return new Response(JSON.stringify({ message: '메일 전송에 실패했습니다.' }), {
        status: 500,
      })
    })
}
