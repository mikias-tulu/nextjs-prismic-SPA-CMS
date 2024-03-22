import { Providers } from './providers';
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
          <Footer />
          </Providers>
      </body>
    </html>
  )
}