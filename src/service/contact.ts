import { EmailData } from '../utils/nodemailer'

export async function sendContactEmail(emailForm: EmailData) {
  // Nextjs app 폴더 내 api로 post 요청
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(emailForm),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함')
  }

  return data
}
