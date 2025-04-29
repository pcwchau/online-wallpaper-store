interface GeneralPageProps {
  title: string;
  children?: React.ReactNode;
}

export default function GeneralPage(props: GeneralPageProps) {
  return (
    <div className="space-y-12 w-5/6 lg:w-2/3 mx-auto">
      <div className="text-center text-3xl">{props.title}</div>
      {props.children}
    </div>
  );
}
