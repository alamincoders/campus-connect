import { ImSpinner3 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-60 w-full">
      <div className="animate-spin">
        <ImSpinner3 size={30} className="text-primary_main" />
      </div>
    </div>
  );
};

export default Spinner;
