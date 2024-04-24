'use client'
import React, { useState } from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarShortcut,
} from '@/components/ui/menubar';

const MenuBar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Overview');

  const handleItemClick = (itemName:string) => {
    setActiveMenuItem(itemName);

  };

  return (
    <div className="flex justify-between  md:w-[50%]">
      <Menubar className="bg-gray-600 mx-10 md:gap-5 ">
        <MenubarMenu>
          <MenubarShortcut
            className={`p-2 rounded-lg cursor-pointer ${
              activeMenuItem === 'Overview' ? 'bg-black text-white' : 'text-gray-300'
            }`}
            onClick={() => handleItemClick('Overview')}
          >
            Overview
          </MenubarShortcut>
          <MenubarShortcut
            className={`p-2 rounded-lg cursor-pointer ${
              activeMenuItem === 'Analitics' ? 'bg-black text-white' : 'text-gray-300'
            }`}
            onClick={() => handleItemClick('Analitics')}
          >
            Analitics
          </MenubarShortcut>
          <MenubarShortcut
            className={`p-2 rounded-lg cursor-pointer ${
              activeMenuItem === 'Reports' ? 'bg-black text-white' : 'text-gray-300'
            }`}
            onClick={() => handleItemClick('Reports')}
          >
            Reports
          </MenubarShortcut>
          <MenubarShortcut
            className={`p-2 rounded-lg cursor-pointer ${
              activeMenuItem === 'Notifications' ? 'bg-black text-white' : 'text-gray-300'
            }`}
            onClick={() => handleItemClick('Notifications')}
          >
            Notifications
          </MenubarShortcut>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MenuBar;
