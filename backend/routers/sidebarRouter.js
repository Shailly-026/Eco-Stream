const SidebarItem = ({ Icon, text, path, isOpen }) => {
    const router = useRouter();
    return (
      <div
        className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
        onClick={() => router.push(path)}
      >
        <Icon size={20} />
        {isOpen && <span>{text}</span>}
      </div>
    );
  };
  
  export default Sidebar;