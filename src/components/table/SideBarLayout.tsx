/* eslint-disable @next/next/no-img-element */
import { SERVER_REPO, WEB_APP_REPO } from "@/constants/urls";
import { HomeIcon, LinkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

const navigation = [
  { name: "Inspections", icon: HomeIcon, current: true, margin: true },
  {
    name: "WebApp Repo",
    icon: LinkIcon,
    current: false,
    href: WEB_APP_REPO,
  },
  {
    name: "Server Repo",
    icon: LinkIcon,
    current: false,
    href: SERVER_REPO,
  },
];

type SideBarLayoutProps = {
  children: React.ReactNode;
};

export default function SideBarLayout({ children }: SideBarLayoutProps) {
  return (
    <>
      <div>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://media.licdn.com/dms/image/C560BAQHeCnENEYe_fg/company-logo_200_200/0/1660836521526/haulwith_logo?e=2147483647&v=beta&t=v4ec6a6JoDQFE0DxbdSY4HTWIZ01P0T_xhiedDA_hCE"
                alt="Haul"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href || "#"}
                        target="_blank"
                      >
                        <li>
                          <div
                            className={clsx(
                              item.current
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white cursor-pointer",
                              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                              item.margin ? "mb-5" : ""
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Haul Dashboard
          </div>
        </div>

        {children}
      </div>
    </>
  );
}
