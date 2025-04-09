interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  emoji?: string;
  title: string;
  children?: React.ReactNode;
}

export default function Card({ emoji, title, children, ...props }: CardProps) {
  return (
    <div {...props} className={`border-2 border-slate-700 shadow-sm p-4 ${props.className}`}>
      <h2 className="text-2xl mb-4 border-b-2 border-slate-700 pb-1 font-heading">
        {emoji && <span className="mr-2">{emoji}</span>}
        <span className="font-bold">{title}</span>
      </h2>
      {children}
    </div>
  );
}
