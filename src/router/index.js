import Vue from "vue";
import VueRouter from "vue-router";
//布局组件
import Layout from "@/components/Layout.vue";
//首页
import CHTHome from "@/views/CHT/home";
//关于我们
import CHTAboutUs from "@/views/CHT/aboutUs";
//联系我们
import CHTContactUs from "@/views/CHT/aboutUs/contact";
//服务范畴
import CHTRange from "@/views/CHT/range";
//服务内容与流程
import CHTService from "@/views/CHT/service";
//愿景
import CHTVision from "@/views/CHT/vision";
//行业
import CHTTrade from "@/views/CHT/trade";
//客户
import CHTCustom from "@/views/CHT/custom";
//评价
import CHTEvaluate from "@/views/CHT/custom/evaluate";
/****************英文 ***********/
//首页
import ENHome from "@/views/EN/home";
//关于我们
import ENAboutUs from "@/views/EN/aboutUs";
//联系我们
import ENContactUs from "@/views/EN/aboutUs/contact";
//服务范畴
import ENRange from "@/views/EN/range";
//服务内容与流程
import ENService from "@/views/EN/service";
//愿景
import ENVision from "@/views/EN/vision";
//行业
import ENTrade from "@/views/EN/trade";
//客户
import ENCustom from "@/views/EN/custom";
//评价
import ENEvaluate from "@/views/EN/custom/evaluate";
/******* 法文 *********/

//首页
import FRHome from "@/views/FR/home";
//关于我们
import FRAboutUs from "@/views/FR/aboutUs";
//联系我们
import FRContactUs from "@/views/FR/aboutUs/contact";
//服务范畴
import FRRange from "@/views/FR/range";
//服务内容与流程
import FRService from "@/views/FR/service";
//愿景
import FRVision from "@/views/FR/vision";
//行业
import FRTrade from "@/views/FR/trade";
//客户
import FRCustom from "@/views/FR/custom";
//评价
import FREvaluate from "@/views/FR/custom/evaluate";
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "CHT/home",
    children: [
      {
        path: "CHT/home",
        component: CHTHome,
        name: "CHT/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "CHT/aboutUs",
        component: CHTAboutUs,
        name: "CHT/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "CHT/aboutUs/contactUs",
        component: CHTContactUs,
        name: "CHT/contactUs",
        meta: { title: "联系我们", parent: "" }
      },
      {
        path: "CHT/range",
        component: CHTRange,
        name: "CHT/range",
        meta: { title: "服务范畴", parent: "" }
      },
      {
        path: "CHT/service",
        component: CHTService,
        name: "CHT/service",
        meta: { title: "服务内容与流程", parent: "" }
      },
      {
        path: "CHT/vision",
        component: CHTVision,
        name: "CHT/vision",
        meta: { title: "愿景、使命与优势", parent: "" }
      },
      {
        path: "CHT/trade",
        component: CHTTrade,
        name: "CHT/trade",
        meta: { title: "专注行业及领域", parent: "" }
      },
      {
        path: "CHT/custom",
        component: CHTCustom,
        name: "CHT/custom",
        meta: { title: "我们的客户", parent: "" }
      },
      {
        path: "CHT/custom/evaluate",
        component: CHTEvaluate,
        name: "CHT/custom/evaluate",
        meta: { title: "客户评价", parent: "" }
      },
      // 英文
      {
        path: "EN/home",
        component: ENHome,
        name: "EN/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "EN/aboutUs",
        component: ENAboutUs,
        name: "EN/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "EN/aboutUs/contactUs",
        component: ENContactUs,
        name: "EN/contactUs",
        meta: { title: "联系我们", parent: "" }
      },
      {
        path: "EN/range",
        component: ENRange,
        name: "EN/range",
        meta: { title: "服务范畴", parent: "" }
      },
      {
        path: "EN/service",
        component: ENService,
        name: "EN/service",
        meta: { title: "服务内容与流程", parent: "" }
      },
      {
        path: "EN/vision",
        component: ENVision,
        name: "EN/vision",
        meta: { title: "愿景、使命与优势", parent: "" }
      },
      {
        path: "EN/trade",
        component: ENTrade,
        name: "EN/trade",
        meta: { title: "专注行业及领域", parent: "" }
      },
      {
        path: "EN/custom",
        component: ENCustom,
        name: "EN/custom",
        meta: { title: "我们的客户", parent: "" }
      },
      {
        path: "EN/custom/evaluate",
        component: ENEvaluate,
        name: "EN/custom/evaluate",
        meta: { title: "客户评价", parent: "" }
      },
      //法语
      {
        path: "FR/home",
        component: FRHome,
        name: "FR/home",
        meta: { title: "首页", parent: "" }
      },
      {
        path: "FR/aboutUs",
        component: FRAboutUs,
        name: "FR/aboutUs",
        meta: { title: "关于我们", parent: "" }
      },
      {
        path: "FR/aboutUs/contactUs",
        component: FRContactUs,
        name: "FR/contactUs",
        meta: { title: "联系我们", parent: "" }
      },
      {
        path: "FR/range",
        component: FRRange,
        name: "FR/range",
        meta: { title: "服务范畴", parent: "" }
      },
      {
        path: "FR/service",
        component: FRService,
        name: "FR/service",
        meta: { title: "服务内容与流程", parent: "" }
      },
      {
        path: "FR/vision",
        component: FRVision,
        name: "FR/vision",
        meta: { title: "愿景、使命与优势", parent: "" }
      },
      {
        path: "FR/trade",
        component: FRTrade,
        name: "FR/trade",
        meta: { title: "专注行业及领域", parent: "" }
      },
      {
        path: "FR/custom",
        component: FRCustom,
        name: "FR/custom",
        meta: { title: "我们的客户", parent: "" }
      },
      {
        path: "FR/custom/evaluate",
        component: FREvaluate,
        name: "FR/custom/evaluate",
        meta: { title: "客户评价", parent: "" }
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "cur"
});

export default router;
