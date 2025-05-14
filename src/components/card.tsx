import Link from "next/link";

interface CardProps extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  image?: string;
  title: string;
  href?: string;
  children?: React.ReactNode;
}

export default function Frame({ image, title, href, children, ...props }: CardProps) {
  const rootClassName = `border-2 border-slate-700 shadow-sm p-4 ${props.className}`;

  const content = (
    <>
      {image && (
        <div className="mb-4">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      )}
      <h2 className="text-2xl mb-4 border-b-2 border-slate-700 pb-1 font-heading">{title}</h2>
      {children}
    </>
  );

  return href ? (
    <Link href={href} className={rootClassName} {...props}>
      {content}
    </Link>
  ) : (
    <div className={rootClassName} {...props}>
      {content}
    </div>
  );
}
