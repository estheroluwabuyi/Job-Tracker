function DashboardLayout({ children }) {
  return (
    <div>
      <aside>Sidebar</aside>
      <div>Navbar</div>

      {children}
    </div>
  );
}

export default DashboardLayout;
