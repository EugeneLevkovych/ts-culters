import adminImg from "../assets/admin.jpg";

const Admin = () => {
  return (
    <div className="flex gap-2">
      <img src={adminImg} alt="admin" />
      <div>
        <p className="font-bold leading-[1.1] text-gray9 whitespace-nowrap">
          Guy Hawkins
        </p>
        <p className="text-xs tracking-[1.1] text-gray16 ">Admin</p>
      </div>
    </div>
  );
};
export default Admin;
