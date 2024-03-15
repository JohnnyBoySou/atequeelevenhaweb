import "./globals.css";
import localFont from 'next/font/local'

const AmandineFont = localFont({
  name: "Amandine Bold",
  src: [
    {
      path: '../public/fonts/Amandine Bold.otf',
      weight: '800',
      style: 'bold'
    },
    {
      path: '../public/fonts/Amandine Bold Italic.otf',
      weight: '800',
      style: 'italic'
    },
    {
      path: '../public/fonts/Amandine Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Amandine Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/Amandine Light Italic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../public/fonts/Amandine Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Amandine Medium Italic.otf',
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
      path: '../public/fonts/Mundial Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Mundial Bold.otf',
      weight: '800',
      style: 'bold'
    },
    {
      path: '../public/fonts/Mundial Bold Italic.otf',
      weight: '800',
      style: 'italic'
    },
    {
      path: '../public/fonts/Mundial Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/Mundial Light Italic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../public/fonts/Mundial Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Mundial Medium Italic.otf',
      weight: '500',
      style: 'italic'
    }
  ],
  variable: '--font-mundial',
  subsets: ['latin'],
});


export const metadata = {
  title: "Até que Ele venha",
  description: "Estaremos aqui, esperando por Ele.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${AmandineFont.variable} font-mono ${MundialFont.variable} font-sans`}>
      <body >{children}</body>
    </html>
  );
}
