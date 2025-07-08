interface HeaderProps {
  currentTime: string;
}

const Header: React.FC<HeaderProps> = ({ currentTime }) => {
  return (
    <header className="bg-teal-600 text-white p-4 flex justify-end items-center">
      <span className="text-sm">{currentTime}</span>
    </header>
  );
};

export default Header;
