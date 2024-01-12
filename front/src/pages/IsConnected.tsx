import { Outlet } from "react-router-dom";
import { useUserDataContext } from "../scripts/Context";

const IsConnected = () => {
    const { id } = useUserDataContext();
    return <>{id && <Outlet />}</>;
};

export default IsConnected;
