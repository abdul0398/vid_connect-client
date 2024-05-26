import Link from "next/link";

export default function LinkBtn({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`w-24 border text-sm hover:bg-black hover:text-white hover:border-none hover:scale-105 hover:cursor-pointer ease-in-out shadow-md rounded-md flex py-1 px-3 justify-center items-center ${className}`}
    >
      {children}
    </Link>
  );
}
