interface GeneralPageProps {
  title: string;
  isFullWidth?: boolean;
  children?: React.ReactNode;
}

export default function GeneralPage(props: GeneralPageProps) {
  return (
    <div
      className={`space-y-12 ${
        !props.isFullWidth && "md:w-5/6 lg:w-3/4 mx-auto"
      }`}
    >
      <div className="text-6xl font-medium text-center">{props.title}</div>
      {props.children}
    </div>
  );
}
