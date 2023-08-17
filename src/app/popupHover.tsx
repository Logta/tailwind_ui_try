"use client";
import { Popover, Transition } from "@headlessui/react";
import { useRef, Fragment } from "react";

const timeoutDuration = 120;
export const PopoverMenu = ({ className, labelText, content }: any) => {
  const triggerRef = useRef<any>(undefined);
  const timeOutRef = useRef<any>(undefined);

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={() => handleLeave(open)}
        >
          <Popover.Button ref={triggerRef}>{labelText}</Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-50 mt-3 -translate-x-1/2 transform px-4">
              {content}
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
};
