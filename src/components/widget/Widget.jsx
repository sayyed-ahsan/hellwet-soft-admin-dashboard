import Card from "components/card";

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px] glass">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-secounderyLight shadow-lg shadow-indigo-500/50    bg-secounderyLight p-3 dark:bg-secounderyDark">
          <span className="flex items-center text-brandLight dark:text-darkText">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-teal-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
