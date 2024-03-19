"use client";

import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useUrl } from "nextjs-current-url";
import { useState } from "react";
import Link from "next/link";

type DetailsHeaderProps = {
  id: string;
};

export default function DetailsHeader({ id }: DetailsHeaderProps) {
  const [copied, setCopied] = useState(false);
  const { href: currentUrl } = useUrl() ?? {};

  const onCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <header className="relative isolate bg-[#111827]">
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            <Link href="/">
              <Image
                src="https://media.licdn.com/dms/image/C560BAQHeCnENEYe_fg/company-logo_200_200/0/1660836521526/haulwith_logo?e=2147483647&v=beta&t=v4ec6a6JoDQFE0DxbdSY4HTWIZ01P0T_xhiedDA_hCE"
                alt=""
                width={100}
                height={100}
                className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
              />
            </Link>
            <h1>
              <div className="text-sm leading-6 text-white">
                Report <strong className="text-white">#{id}</strong>
              </div>
            </h1>
          </div>
          <div className="flex items-center gap-x-4 sm:gap-x-6">
            {copied ? (
              <div className="rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
                Copied
              </div>
            ) : (
              <CopyToClipboard onCopy={onCopied} text={currentUrl ?? ""}>
                <div className="rounded-md bg-[#E5F867] px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-[#aabf0d] cursor-pointer">
                  Copy url
                </div>
              </CopyToClipboard>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
