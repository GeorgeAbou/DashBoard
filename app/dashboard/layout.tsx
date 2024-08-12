import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
    // el layout es el que se permanece y no se vuelve a renderizar
    // en este caso es la barra lateral y se mantiene y se ancla a la raiz de la carpeta dashborar
    //Una ventaja de usar layouts en Next.js es que, durante la navegación, solo se actualizan los componentes de la página, mientras que el layout no se vuelve a renderizar. 
    //Esto se denomina renderizado parcial 
    //sirve Para compartir la interfaz de usuario en varias páginas
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}