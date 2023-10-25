import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//Admin Registration
import AdminList from "./EmployeeList/reducer"
//Admin Member List
import MemberList from "./member-list/reducer"

//E-commerce
import ecommerce from "./e-commerce/reducer"

//Calendar
import calendar from "./calendar/reducer"

//chat
import chat from "./chat/reducer"

//crypto
import crypto from "./crypto/reducer"

//invoices
import invoices from "./invoices/reducer"

//jobs
import JobReducer from "./jobs/reducer"

//projects
import projects from "./projects/reducer"

//tasks
import tasks from "./tasks/reducer"

//contacts
import contacts from "./contacts/reducer"

//mails
import mails from "./mails/reducer"

//Dashboard
import Dashboard from "./dashboard/reducer"

//Dasboard saas
import DashboardSaas from "./dashboard-saas/reducer"

//Dasboard crypto
import DashboardCrypto from "./dashboard-crypto/reducer"

//Dasboard blog
import DashboardBlog from "./dashboard-blog/reducer"

//Dasboard job
import DashboardJob from "./dashboard-jobs/reducer"

import { latestTransReducer } from "./LatestTransaction/latestTrans.reducer"

import { approvedTransReducer } from "./ApprovedTransactions/approvedTrans.reducer"

import { disputedTransReducer } from "./DisputedTransactions/disputedTrans.reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  AdminList,
  MemberList,
  Login,
  Account,
  ForgetPassword,
  Profile,
  ecommerce,
  calendar,
  chat,
  mails,
  crypto,
  invoices,
  JobReducer,
  projects,
  tasks,
  contacts,
  Dashboard,
  DashboardSaas,
  DashboardCrypto,
  DashboardBlog,
  DashboardJob,
  latestTransReducer,
  approvedTransReducer,
  disputedTransReducer,
})

export default rootReducer
