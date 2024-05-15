import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Heading = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <div className="sticky top-0 sm:static bg-white sm:bg-inherit z-50">
      <div className="flex items-center space-x-2 py-3">
        <IoMdArrowBack size={22} className=" sm:hidden" onClick={handleBack} />
        <h1 className="text-2xl font-medium">{title}</h1>
      </div>
    </div>
  );
};

export default Heading;
