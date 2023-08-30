export const Sidebar = () => {
  return (
    <aside className="flex border-r-2 border-primary-brd">
      <ul className="h-full w-[64px] flex flex-col items-center border-r-2 border-primary-brd">
        <li className="flex items-center p-[18px] cursor-pointer">
          <img src="/folder.svg" alt="folder" />
        </li>
        <li className="p-[18px] cursor-pointer">
          <img src="/search.svg" alt="search" />
        </li>
        <li className="p-[18px] cursor-pointer">
          <img src="/category.svg" alt="category" />
        </li>
      </ul>
      <div className="w-[300px] p-[14px]">
        <div className="mb-8">
          <div className="px-[12px] mb-2 flex items-center justify-between cursor-pointer">
            <h2 className="font-semibold">personal-info</h2>
            <img src="/arrow.svg" alt="arrow" />
          </div>
          <ul className="text-secondary">
            <li className="py-[4px] px-[12px] cursor-pointer rounded-md hover:bg-active hover:text-primary ease-in duration-300">
              _hello
            </li>
            <li className="py-[4px] px-[12px] cursor-pointer rounded-md hover:bg-active hover:text-primary ease-in duration-300">
              _about-me
            </li>
            <li className="py-[4px] px-[12px] cursor-pointer rounded-md hover:bg-active hover:text-primary ease-in duration-300">
              _projects
            </li>
          </ul>
        </div>
        <div>
          <div className="px-[12px] mb-2 flex items-center justify-between cursor-pointer">
            <h2 className="font-semibold">contacts</h2>
            <img src="/arrow.svg" alt="arrow" />
          </div>
          <ul className="text-secondary">
            <li className="py-[4px] px-[12px] cursor-pointer rounded-md hover:bg-active hover:text-primary ease-in duration-300">
              <a href="mailto:egorov.denis.evg@gmail.com">egorov.denis.evg@gmail.com</a>
            </li>
            <li className="py-[4px] px-[12px] cursor-pointer rounded-md hover:bg-active hover:text-primary ease-in duration-300">
              <a href="tel:+79081539127">+7 (908) 153-91-27</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
