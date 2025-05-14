import Link from "next/link";

interface LinkCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
}

export default function LinkCard({ url, ...props }: LinkCardProps) {
  return (
    <Link
      {...props}
      className={`flex flex-col items-start border-2 border-slate-700 shadow-sm p-4 ${props.className}`}
      href={url}
    >
      <h2 className="text-2xl mb-4 border-b-2 border-slate-700 pb-1 font-heading w-full">
        <span className="font-bold"></span>
      </h2>
    </Link>
  );
}
