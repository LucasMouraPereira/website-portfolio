export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_BASE_URL

export enum endpoints {
  sendEmail = '/api/contact',
}
