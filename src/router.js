import { createRouter, createWebHistory } from "vue-router";

export const views = {
  path: "/",
  component: () => import("@/views/Layout.vue"),
  children: [
    {
      name: "Home",
      path: "",
      component: () => import("@/views/Home.vue"),
      meta: {
        title: "首页",
        keepAlive: false
      }
    },
    {
      name: "About",
      path: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        title: "关于",
        keepAlive: true
      }
    },
    {
      path: "",
      component: () => import("@/views/NestRouterView.vue"),
      children: [
        {
          name: "Theme1",
          path: "theme/1",
          component: () => import("@/views/Theme1.vue"),
          meta: {
            title: "主题1",
            keepAlive: true
          }
        },
        {
          name: "Theme3",
          path: "theme/3",
          component: () => import("@/views/Theme3.vue"),
          meta: {
            title: "主题3",
            keepAlive: false
          }
        },
        {
          path: "",
          component: () => import("@/views/NestRouterView.vue"),
          props: () => ({ showBackBtn: false }),
          children: [
            {
              name: "Theme2-1",
              path: "theme/2/1",
              component: () => import("@/views/Theme2-1.vue"),
              meta: {
                title: "主题2-1",
                keepAlive: true
              }
            }
          ]
        }
      ]
    }
  ]
};

const router = createRouter({
  history: createWebHistory(),
  routes: []
});

const formatRouter = (routes, newRoutes = []) => {
  routes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      formatRouter(item.children, newRoutes);
    } else {
      newRoutes.push(item);
    }
  });
  return newRoutes;
};

views.children = formatRouter(views.children);

router.addRoute(views);

export default router;
