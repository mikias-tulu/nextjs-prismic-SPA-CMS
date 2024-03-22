import { Providers } from './providers';
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <NavBar />
          {children}
          <PrismicPreview repositoryName={repositoryName} />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}