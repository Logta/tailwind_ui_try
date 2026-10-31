"use client";
import { Popover } from "@headlessui/react";

function Button({ children }: any) {
  if (!children) return <Popover.Button>Solutions</Popover.Button>;
  return <Popover.Overlay>{children}</Popover.Overlay>;
}

export function Popup({ children }: any) {
  return (
    <Popover className="relative">
      <Button>{children}</Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
}
