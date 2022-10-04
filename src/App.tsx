import './App.css';
import { Tab } from '@headlessui/react'
import React, { Fragment, useState } from 'react';

interface ITab {
  key: number;
  title: string;
  tabListStyles: string;
  tabPanelsStyles: string;
  content: string;
}

const tabs: ITab[] = [
  {
    key: 1,
    title: 'Tab 1',
    tabListStyles: 'text-white px-4 py-2 outline-none transition delay-75 hover:bg-hover rounded-tl-lg rounded-bl-lg font-medium',
    tabPanelsStyles: 'bg-transparent px-4 py-2 h-screen',
    content: 'Content 1'
  },
  {
    key: 2,
    title: 'Tab 2',
    tabListStyles: 'text-white px-4 py-2 outline-none transition delay-75 hover:bg-hover font-medium',
    tabPanelsStyles: 'bg-transparent px-4 py-2 h-screen',
    content: 'Content 2'
  },
  {
    key: 3,
    title: 'Tab 3',
    tabListStyles: 'text-white px-4 py-2 outline-none transition delay-75 hover:bg-hover rounded-tr-lg rounded-br-lg font-medium',
    tabPanelsStyles: 'bg-transparent px-4 py-2 h-screen',
    content: 'Content 3'
  }
];

export const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <div className="p-3 mx-auto bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List>
          <span className="flex mx-auto w-max rounded-xl p-1 bg-disable/25">
            {tabs.map((tab) => (
              <Tab key={tab.key} as={Fragment}>
                {({ selected }) => (
                  <button className={`${tab.tabListStyles} ${selected ? 'bg-white text-primary' : 'bg-secondary'}`}>
                    {tab.content}
                  </button>
                )}
              </Tab>
            ))}
          </span>
        </Tab.List>
        <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.key} className={tab.tabPanelsStyles}>
            <div className="bg-white rounded-lg min-h-fit p-3 max-w-3xl mx-auto">{tab.content}</div>
          </Tab.Panel>
        ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
