import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

type BreadCrumbsProps = {
  id: string;
};
export default function BreadCrumbs({ id }: BreadCrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4 py-3">
        <li>
          <div>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <span
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-default"
              aria-current={"page"}
            >
              Inspection #{id}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
