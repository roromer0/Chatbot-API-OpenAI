import { Router } from "express";
import { getAllUSers } from "../controllers/user-controllers.js";
const userRoutes = Router();
userRoutes.get("/", getAllUSers);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map