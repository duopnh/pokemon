import './App.css';
import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react';

const tabs = [
  {
    key: 1,
    title: 'Tab 1',
    tabListStyles: 'bg-blue-500 px-4 py-2',
    tabPanelsStyles: 'bg-transparent px-4 py-2 h-screen',
    content: 'Content 1'
  },
  {
    key: 2,
    title: 'Tab 2',
    tabListStyles: 'bg-yellow-500 px-4 py-2',
    tabPanelsStyles: 'bg-transparent px-4 py-2 h-screen',
    content: 'Content 2'
  },
  {
    key: 3,
    title: 'Tab 3',
    tabListStyles: 'bg-pink-500 px-4 py-2',
    tabPanelsStyles: 'bg-transparent px-4 py-2 h-screen',
    content: 'Content 3'
  }
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <div className="p-3 mx-auto bg-white">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List>
          {tabs.map((tab) => (<Tab key={tab.key} as={Fragment} className={tab.tabListStyles}><button>{tab.content}</button></Tab>))}
        </Tab.List>
        <Tab.Panels>
        {tabs.map((tab) => (<Tab.Panel key={tab.key} className={tab.tabPanelsStyles}>{tab.content}</Tab.Panel>))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default App;
