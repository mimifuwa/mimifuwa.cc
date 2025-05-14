interface FrameProps extends React.HTMLAttributes<HTMLDivElement> {
  emoji?: string;
  title: string;
  children?: React.ReactNode;
}

export default function Frame({ emoji, title, children, ...props }: FrameProps) {
  return (
    <div
      {...props}
      className={`flex flex-col items-start border-2 border-slate-700 shadow-sm p-4 ${props.className}`}
    >
      <h2 className="text-2xl mb-4 border-b-2 border-slate-700 pb-1 font-heading w-full">
        {emoji && <span className="mr-2">{emoji}</span>}
        <span className="font-bold">{title}</span>
      </h2>
      {children}
    </div>
  );
}
