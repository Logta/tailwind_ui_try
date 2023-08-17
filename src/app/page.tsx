import { List } from "./list";
import { Dropdown } from "./dropdown";
import { Modal } from "./modal";
import { Disclosure } from "./disclosure";
import style from "./test.module.css";
import { Popup } from "./popup";
import { PopoverMenu } from "./popupHover";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <List />
        <Dropdown />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Disclosure />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Popup>test</Popup>
      </div>
      <div className={style.test}>
        <Disclosure />
        <PopoverMenu labelText="test" content={<>表示</>} />
      </div>
      <Modal />
    </main>
  );
}
