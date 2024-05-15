import { FaRegCircleDot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ProfileLayout = ({ handleDrawer }: { handleDrawer: () => void }) => {
  const CloseBtn = () => {
    return (
      <div
        className="w-fit h-fit mt-2 mr-2 p-2 border border-gray-400 rounded-full cursor-pointer hover:bg-gray-200"
        onClick={handleDrawer}
      >
        <IoClose size={25} />
      </div>
    );
  };
  return (
    <div className="transition-all w-full h-full flex absolute z-50 backdrop-blur-sm overflow-y-hidden">
      <div className="w-full lg:w-3/5 h-full flex absolute z-50 right-0 ">
        <div className="hidden lg:block">
          <CloseBtn />
        </div>
        <div className="w-full flex flex-col items-center p-3 space-y-5 bg-white border-l">
          <div className="w-full lg:hidden flex justify-end mr-6 absolute">
            <CloseBtn />
          </div>
          <img
            src="/src/assets/Aina-Asif.webp"
            alt="profile image"
            className="min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] rounded-full"
          />
          <div className="flex flex-col items-center">
            <p>Aina Asif</p>
            <p className="opacity-55 flex items-center gap-2">
              <FaRegCircleDot color="green" /> Active
            </p>
          </div>
          <hr className="w-full  border-top border-gray-200" />
          <div className="w-full bg-white py-4 px-2 border space-y-4">
            <div>
              <label className="opacity-55">Bio</label>
              <p className="flex flex-col">
                <span>Ania Asif</span>
                <span>Actor</span>
                <span>22 sep</span>
              </p>
            </div>
            <div>
              <label className="opacity-55">Name</label>
              <p>Aina Asif</p>
            </div>
            <div>
              <label className="opacity-55">location</label>
              <p>Pune, Maharastra, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
