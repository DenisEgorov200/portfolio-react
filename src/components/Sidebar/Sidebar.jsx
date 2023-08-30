export const Sidebar = () => {
  return (
    <aside className="w-[364px] border-r-2 border-blue">
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
    </aside>
  );
};
