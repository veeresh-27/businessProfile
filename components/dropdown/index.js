import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { ChevronDownIcon } from "@heroicons/react/solid";

export function Dropdown({ title, options }) {
    return (
        <div className="text-right ">
            <Menu as="div" className="relative inline-block text-left hover:text-white ">
                <div className="flex items-center justify-center">
                    <Menu.Button className="inline-flex justify-center w-full px-20 py-8 text-black text-md rounded-xl hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75 ">
                        {title}
                        {/*<ChevronDownIcon*/}
                        {/*    className={*/}
                        {/*        downIcon*/}
                        {/*            ? mode*/}
                        {/*                ? "ml-2 -mr-1 h-5 w-5 text-gray-800 self-center z-10"*/}
                        {/*                : "ml-2 -mr-1 h-5 w-5 text-black self-center"*/}
                        {/*            : "hidden"*/}
                        {/*    }*/}
                        {/*    aria-hidden="true"*/}
                        {/*/>*/}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100  transform opacity-0"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-white-100 rounded-[12px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div className="px-1 py-1  ">
                            {options?.map(({ name, method }, index) => (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <button
                                            className={`${
                                                active
                                                    ? "bg-primary text-white  rounded-xl"
                                                    : " text-gray-900  "
                                            } group flex w-full items-center px-2 py-2 text-sm`}
                                            onClick={method ? method : ""}
                                        >
                                            {name}
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
            );
}

Dropdown.defaultProps = {
    title: "",
    options: [
        {
            name: "Option1",
        },
        {
            name: "Option2",
        },
    ],
    mode: false,
    downIcon: true,
};

