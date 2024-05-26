import { CiEdit } from "react-icons/ci";
import { Input, Textarea } from "../../components/shared/FormControls";
import { useState } from "react";
import { Button } from "../../components/shared/Buttons";
import Heading from "../../components/Heading";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const auth = useAuth();
  const [edit, setEdit] = useState<boolean>(false);
  const handleEdit = () => setEdit(!edit);
  return (
    <>
      <div className="h-full px-2 space-y-4 overflow-y-auto overflow-x-hidden">
        <Heading title="Profile" />
        <div className="mt-8 flex flex-col items-center space-y-5 py-3">
          <img
            src="/src/assets/Aina-Asif.webp"
            alt="profile image"
            className="min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] rounded-full"
          />
          <p>{auth.state.username || ""}</p>
          <hr className="w-full  border-top border-gray-200" />
          {!edit ? (
            <div className="w-full relative bg-white py-4 px-4 space-y-4">
              <div className="absolute right-2 cursor-pointer">
                <CiEdit
                  size={20}
                  onClick={handleEdit}
                  data-tooltip-target="tooltip-edit"
                />
                <div
                  id="tooltip-edit"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Tooltip content
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
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
                <label className="opacity-55">Username</label>
                <p>ainaasif</p>
              </div>
              <div>
                <label className="opacity-55">Email</label>
                <p>ainaasif@gmail.com</p>
              </div>
              <div>
                <label className="opacity-55">location</label>
                <p>Pune, Maharastra, India</p>
              </div>
            </div>
          ) : (
            <form className="w-full relative bg-white py-4 px-4 space-y-4">
              <div className="flex w-full">
                <Textarea label="Bio" name="bio" />
              </div>
              <Input label="Name" name="name" type="text" />
              <Input label="Username" name="username" type="text" />
              <Input label="Email" name="email" type="text" />
              <Input label="Location" name="location" type="text" />
              <div className="space-x-2 float-end">
                <Button type="button" title="cancel" onClick={handleEdit} />
                <Button type="submit" title="update" />
              </div>
            </form>
          )}
        </div>
      </div>
      {/* <div className="wrapper w-full h-full flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/3 h-full overflow-y-auto overflow-x-hidden border bg-white px-4 space-y-4">
          <Heading title="Profile" />
          <div className="mt-8 flex flex-col items-center space-y-5 py-3 px-4">
            <img
              src="/src/assets/Aina-Asif.webp"
              alt="profile image"
              className="min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] rounded-full"
            />
            <p>Aina Asif</p>
            <hr className="w-full  border-top border-gray-200" />
            {!edit ? (
              <div className="w-full relative bg-white py-4 px-2 space-y-4">
                <div className="absolute right-2 cursor-pointer">
                  <CiEdit
                    size={20}
                    onClick={handleEdit}
                    data-tooltip-target="tooltip-edit"
                  />
                  <div
                    id="tooltip-edit"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip content
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
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
                  <label className="opacity-55">Email</label>
                  <p>ainaasif@gmail.com</p>
                </div>
                <div>
                  <label className="opacity-55">location</label>
                  <p>Pune, Maharastra, India</p>
                </div>
              </div>
            ) : (
              <form className="w-full relative bg-white py-4 px-2 space-y-4">
                <div className="flex w-full">
                  <Textarea label="Bio" name="bio" />
                </div>
                <Input label="Name" name="name" type="text" />
                <Input label="Email" name="email" type="text" />
                <Input label="Location" name="location" type="text" />
                <div className="space-x-2 float-end">
                  <Button type="button" title="cancel" onClick={handleEdit} />
                  <Button type="submit" title="update" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Profile;
