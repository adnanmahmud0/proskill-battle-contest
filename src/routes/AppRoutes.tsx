import { Route, Routes } from "react-router-dom";
import appRoutes from "./routes";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {appRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
