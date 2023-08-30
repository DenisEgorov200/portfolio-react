export const Sidebar = () => {
  return (
    <aside className="flex border-r-2 border-blue">
      <ul className="h-full w-[64px] flex flex-col items-center border-r-2 border-blue">
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
        <div className="px-[12px] mb-2 flex items-center justify-between cursor-pointer">
          <h2 className="font-semibold">personal-info</h2>
          <img src="/arrow.svg" alt="arrow" />
        </div>
        <ul className="text-dark-gray">
          <li className="py-[4px] px-[12px]">_hello</li>
          <li className="py-[4px] px-[12px]">_about-me</li>
          <li className="py-[4px] px-[12px]">_projects</li>
        </ul>
      </div>
    </aside>
  );
};
