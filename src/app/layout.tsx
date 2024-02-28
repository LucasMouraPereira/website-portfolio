import { Providers } from 'src/Providers'
import { StyledComponentsRegistry } from 'src/app/registry'

import type { ChildrenProps } from 'src/utils/types/global.types'

import 'react-toastify/dist/ReactToastify.css'

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="pt-br">
      <head>
        <title>Portfolio - Lucas Moura Pereira</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
