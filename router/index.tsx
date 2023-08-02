// 使用路由懒加载
import { lazy } from "react";
// 引入组件

const About = lazy(() => import("../src/Layout/About/about"));
const Home = lazy(() => import("../src/Layout/Home/home"));
const Event = lazy(() => import("../src/Layout/Event/event"));
const Join = lazy(() => import("../src/Layout/Join/join"));
const Personnel = lazy(() => import("../src/Layout/Personnel/personnel"));
const Teams = lazy(() => import("../src/Layout/Teams/teams"));

const routes = [

    // home
    {
        path: "/hanzhan/",
        component: Home, // 首页
    },
    {
        path: "hanzhan/about",
        component: About, // 关于
    },
    {
        path: "hanzhan/event",
        component: Event, // 赛事
    },
    {
        path: "hanzhan/teams",
        component: Teams, // 战队
    },
    {
        path: "hanzhan/personnel",
        component: Personnel, // 工作人员
    },
    {
        path: "hanzhan/join",
        component: Join, // 诚邀令
    },
    
];


export default routes;