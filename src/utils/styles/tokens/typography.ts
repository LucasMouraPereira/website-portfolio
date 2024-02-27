import { Roboto_Mono, Source_Code_Pro } from 'next/font/google'

const fallback =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-mono',
})

export const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-code-pro',
})

export const typography = {
  family: {
    primary: `var(--font-roboto-mono), ${fallback}`,
    second: `var(--font-source-code-pro), ${fallback}`,
  },
}
