export const HeaderSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="max-w-[988px] flex-1 w-full lg:pr-48 flex flex-col mx-auto">
      <h3 className="font-medium uppercase text-lg lg:text-xl">{title}</h3>
      <h2 className="font-semibold text-2xl lg:text-3xl">{subtitle}</h2>
    </div>
  );
};
