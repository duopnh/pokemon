import React, { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

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

export const Content = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const promises = [];

        for (let i = 1; i <= 50; i++) {
            promises.push(axios.get('https://pokeapi.co/api/v2/pokemon/' + i).then(res => res.data));
        }

        Promise.all(promises).then(res => {
            const results = res.map((result) => {

                return {
                    name: result.name,
                    image: result.sprites['front_default'],
                    type: result.types.map((type) => type.type.name).join(', '),
                    id: result.id
                }
            });

            setData(results);
        });

       
    },[]);
    
    return (
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
                <div className="hide-scrollbar max-w-3xl mx-auto max-h-96 overflow-y-auto grid grid-cols-2 gap-4">
                    {data.map((item) => (
                        <div className="bg-white rounded-lg min-h-fit p-3 mt-2 flex items-center flex-col">
                            <img src={item.image} width="100" alt={item.name}/>
                            <div className="text-primary">{item.name}</div>
                        </div>
                    ))}
                </div>
              </Tab.Panel>
            ))}
            </Tab.Panels>
        </Tab.Group>
    );
}
