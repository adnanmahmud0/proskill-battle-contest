import Sidebar from "./SideNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <main className="sm:ml-64">
        {children}
      </main>
    </div>
  );
}
