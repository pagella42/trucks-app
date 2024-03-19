import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import {
    BASIC_EMPTY,
  BasicCategories,
  BasicCategoryType,
} from "@/constants/tableFilters";

type DropdownFilterProps = {
  setBasicFilter: (value: BasicCategoryType | undefined) => void;
  basicFilter?: BasicCategoryType;
};

//KNOWN BUGS: Z-index is not working properly when theres only a few results
export default function DropdownFilter({
  setBasicFilter,
  basicFilter,
}: DropdownFilterProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {basicFilter ?? BASIC_EMPTY}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {BasicCategories.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    type="button"
                    className={clsx(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                    onClick={() =>
                      setBasicFilter(item === BASIC_EMPTY ? undefined : item)
                    }
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
