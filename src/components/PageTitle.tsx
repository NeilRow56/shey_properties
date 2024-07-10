type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl mb-5 font-extrabold text-[#1B4242]">
          {" "}
          {title}
        </h1>
      </div>
    </div>
  );
};
