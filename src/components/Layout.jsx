import React from 'react';

const Layout = ({ children, Navbar, Header, Sidebar, isSidebarOpen, onToggleSidebar, onBackClick, onAddClick, onCreateNewClick }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {Navbar && <Navbar onBackClick={onBackClick} onMenuClick={onToggleSidebar} />}
      {Header && <Header onBackClick={onBackClick} onAddClick={onAddClick} onCreateNewClick={onCreateNewClick} />}
      <div className="flex relative">
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block absolute md:relative z-20 bg-white`}>
          {Sidebar && <Sidebar />}
        </div>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => onToggleSidebar()}
          />
        )}
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
