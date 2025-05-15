interface GeneralPageProps {
  title: string;
  children?: React.ReactNode;
}

export default function GeneralPage(props: GeneralPageProps) {
  return (
    <div className="space-y-12 md:w-5/6 lg:w-3/4 mx-auto">
      <div className="text-center text-3xl font-semibold">{props.title}</div>
      {props.children}
    </div>
  );
}
