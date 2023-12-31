import { Router } from "express";
import authRouter from "./auth.routes.js";
import trendingRouter from "./trendings.routes.js";
import timelineRouter from "./timeline.routes.js"
import likesRouter from "./likes.routes.js";
import followRouter from "./follow.routes.js";
import repostRouter from "./repost.routes.js";
import commentRouter from "./comment.routes.js";


const indexRouter = Router();

indexRouter.use(authRouter);
indexRouter.use(trendingRouter);
indexRouter.use(timelineRouter);
indexRouter.use(likesRouter);
indexRouter.use(followRouter);
indexRouter.use(repostRouter);
indexRouter.use(commentRouter);

export default indexRouter;