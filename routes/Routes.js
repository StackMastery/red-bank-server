import express from "express";
import VerifyToken from "../middlewares/verifyToken.js";
import CreateBloodDonation from "../controllers/BloodDonatin/CreateBloodDonation.js";
import {
  DeleteDonationReq,
  GetBloodDonationForDonor,
  GetBLoodDonationReqDetails,
  PaginatedBloodDonation,
  UpdateDonationRequest,
} from "../controllers/BloodDonatin/BloodDonation.js";
import CreateNewUser from "../controllers/Auth/createNewUser.js";
import {
  UpdateUserRole,
  UpdateUserStatus,
  UserDetails,
  UserUpdate,
} from "../controllers/Auth/userCrud.js";
import CreateAccesToken from "../controllers/Auth/createAccesToken.js";
import {
  DashboardOverview,
  GetAllDonationReqPaginated,
  GetAllUserPaginated,
} from "../controllers/Admin/admin.controller.js";
import ClearCookie from "../controllers/Auth/clearCookie.js";
import VerifyPermalLink from "../controllers/Blog/verifyPermalLink.js";
import CreateBlog from "../controllers/Blog/CreateBlog.js";
import GetPostDetails from "../controllers/Blog/GetPostDetails.js";
import UpdateBlog from "../controllers/Blog/UpdateBlog.js";
import GetAllPostPaginated from "../controllers/Blog/GetAllPostPaginated.js";
import DeletePost from "../controllers/Blog/DeletePost.js";
import { GetAllStatus } from "../controllers/frontend/AllStatus.js";
import GetBlogPostFrontend from "../controllers/frontend/GetBlogPostFrontend.js";
import GetBloodDonation from "../controllers/BloodDonatin/GetBloodDonation.js";
import GetAllDonors from "../controllers/frontend/GetAllDonors.js";
import SubscribeController from "../controllers/frontend/subscribe.controller.js";
import {
  ConfirmAndSaveFund,
  CreateStripePayment,
} from "../controllers/Payment/Stripe.js";

const Routes = express.Router();

//-------- Donation Crud
// Create Donation
Routes.post(`/donation/create`, VerifyToken, CreateBloodDonation);
// Get Blood donation Request with limit
Routes.get(`/donation`, VerifyToken, GetBloodDonationForDonor);
// Get Donation Details By Id
Routes.get(`/donation/details`, VerifyToken, GetBLoodDonationReqDetails);
// Delete Blood donation request
Routes.delete(`/donation/delete`, VerifyToken, DeleteDonationReq);
// Update Donation Request
Routes.patch(`/donation/update`, VerifyToken, UpdateDonationRequest);
// Donation Paginated
Routes.get("/donation/paginated", VerifyToken, PaginatedBloodDonation);
// Create new user
Routes.post("/auth/create-user", CreateNewUser);
// Create Acces Token
Routes.post("/auth/create-token", CreateAccesToken);
// Get user details
Routes.get("/auth/user", VerifyToken, UserDetails);
// Update user
Routes.patch("/auth/user/update", VerifyToken, UserUpdate);
// Get Dashboard Overview
Routes.get("/dashboard/overview/admin", VerifyToken, DashboardOverview);
// Get all users for admin
Routes.get("/dashboard/users/all", VerifyToken, GetAllUserPaginated);
// Get all donation for admin
Routes.get("/dashboard/donations/all", GetAllDonationReqPaginated);
// Logout
Routes.post(`/auth/logout`, ClearCookie);
// update user role by admin
Routes.patch("/auth/user/update/role", VerifyToken, UpdateUserRole);
// update user status by admin
Routes.patch("/auth/user/update/status", VerifyToken, UpdateUserStatus);
// Veify Blog permal Link
Routes.get("/auth/verify/permallink", VerifyPermalLink);
// Create blog
Routes.post("/blog/create", VerifyToken, CreateBlog);
// Get Single Blog post Data
Routes.get("/blog/post/details", GetPostDetails);
// Update Blog
Routes.patch("/blog/post/update", VerifyToken, UpdateBlog);
// Get all blogs for admin and voluenteer in paginated
Routes.get("/blogs/all/paginated", VerifyToken, GetAllPostPaginated);
// Delete blog post by admin
Routes.delete("/blog/delete", VerifyToken, DeletePost);
// Get Status
Routes.get("/status/all", GetAllStatus);
// get blog post for home
Routes.get("/blog/post/all", GetBlogPostFrontend);
// Get Post details for user
Routes.get("/donation/details/single", VerifyToken, GetBloodDonation);
// Get all donors data
Routes.post("/all/donors", GetAllDonors);
// Email subscribe
Routes.post("/subscribe/email", SubscribeController);
// Create Stripe Payment
Routes.post("/funding/create/stripe", VerifyToken, CreateStripePayment);
Routes.post("/funding/save/stripe", VerifyToken, ConfirmAndSaveFund);

export { Routes };
