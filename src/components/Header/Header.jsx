import diamond from '/diamond.svg';

export const Header = () => {
  return (
    <header className="flex py-3 px-2 border-b-2 border-blue">
      <a href="#" className="flex items-center">
        <img src={diamond} alt="diamond" className="mr-4" />
        <h1 className="text-gray">Denis Egorov</h1>
      </a>
    </header>
  );
};
