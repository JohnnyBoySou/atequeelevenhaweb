import localFont from 'next/font/local'
import StyledComponentsRegistry from './theme/registry'
import './reset.css'

/*
const AmandineFont = localFont({
  name: "Amandine",
  src: [
    {
      path: '@assets/fonts/Amandine Bold.otf',
      weight: '800',
      style: 'bold'
    },
    {
      path: '@assets/fonts/Amandine Bold Italic.otf',
      weight: '800',
      style: 'italic'
    },
    {
      path: '@assets/fonts/Amandine Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '@assets/fonts/Amandine Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '@assets/fonts/Amandine Light Italic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '@assets/fonts/Amandine Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '@assets/fonts/Amandine Medium Italic.otf',
      weight: '500',
      style: 'italic'
    },
   
    
  ],
  variable: '--font-amandine',
  subsets: ['latin'],
});

const MundialFont = localFont({
  name: "Mundial",
  src: [
    {
      path: '@assets/fonts/Mundial Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '@assets/fonts/Mundial Bold.otf',
      weight: '800',
      style: 'bold'
    },
    {
      path: '@assets/fonts/Mundial Bold Italic.otf',
      weight: '800',
      style: 'italic'
    },
    {
      path: '@assets/fonts/Mundial Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '@assets/fonts/Mundial Light Italic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '@assets/fonts/Mundial Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '@assets/fonts/Mundial Medium Italic.otf',
      weight: '500',
      style: 'italic'
    }
  ],
  variable: '--font-mundial',
  subsets: ['latin'],
});
*/

export const metadata = {
  title: "Até que Ele venha",
  description: "Estaremos aqui, esperando por Ele.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" >
      <body >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
//className={`${AmandineFont.variable} font-mono ${MundialFont.variable} font-sans`}