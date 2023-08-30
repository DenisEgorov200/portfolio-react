import diamond from '/diamond.svg';

export const Header = () => {
  return (
    <header className="flex py-3 px-2 border-b-2 border-primary-brd">
      <a href="#" className="flex items-center">
        <img src={diamond} alt="diamond" className="mr-4" />
        <h1 className="text-gray">denis-egorov</h1>
      </a>
    </header>
  );
};
