import Image from "next/image";
import {
  ChartBarIcon,
  ChipIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
  MicrophoneIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <section className="fixed left-0 top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit={"contain"}
      />
      <div className="flex flex-col space-y-8">
        <HomeIcon className="sidebarIcon opcatity-[0.85]" />
        <ChipIcon className="sidebarIcon text-2xl" />
        <MicrophoneIcon className="sidebarIcon ml-1" />
        <ChartBarIcon className="sidebarIcon" />
        <ClockIcon className="sidebarIcon" />
        <DotsHorizontalIcon className="sidebarIcon" />
      </div>
    </section>
  );
};

export default Sidebar;
