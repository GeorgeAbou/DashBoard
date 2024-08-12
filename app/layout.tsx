import '@/app/ui/global.css';

import { inter } from '@/app/ui/fuentes';// se importa la fuente

//este componente te ayuda a gestionar la estructura HTML y el estilo global de tu aplicación en Next.js.
//RootLayout es un componente funcional de React que recibe children como prop. children representa el contenido o los componentes que se mostrarán dentro de este diseño.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}</body> {/*// se añade el tipo de fuente */}
    </html>
  );
}
