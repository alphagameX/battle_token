import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  GlobalLogin: () => import('../../components/Global/GlobalLogin.vue' /* webpackChunkName: "components/global-login" */).then(c => wrapFunctional(c.default || c)),
  GlobalLogo: () => import('../../components/Global/GlobalLogo.vue' /* webpackChunkName: "components/global-logo" */).then(c => wrapFunctional(c.default || c)),
  Card: () => import('../../components/Card/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c)),
  CardGroup: () => import('../../components/Card/CardGroup.vue' /* webpackChunkName: "components/card-group" */).then(c => wrapFunctional(c.default || c)),
  DashboardMenu: () => import('../../components/Dashboard/DashboardMenu/DashboardMenu.vue' /* webpackChunkName: "components/dashboard-menu" */).then(c => wrapFunctional(c.default || c)),
  DashboardMenuConfrontation: () => import('../../components/Dashboard/DashboardMenu/DashboardMenuConfrontation.vue' /* webpackChunkName: "components/dashboard-menu-confrontation" */).then(c => wrapFunctional(c.default || c)),
  DashboardPageMyClub: () => import('../../components/Dashboard/DashboardPage/DashboardPageMyClub.vue' /* webpackChunkName: "components/dashboard-page-my-club" */).then(c => wrapFunctional(c.default || c)),
  DashboardPanelData: () => import('../../components/Dashboard/DashboardPanel/DashboardPanelData.vue' /* webpackChunkName: "components/dashboard-panel-data" */).then(c => wrapFunctional(c.default || c)),
  DashboardPanelMatch: () => import('../../components/Dashboard/DashboardPanel/DashboardPanelMatch.vue' /* webpackChunkName: "components/dashboard-panel-match" */).then(c => wrapFunctional(c.default || c)),
  DashboardPanelUser: () => import('../../components/Dashboard/DashboardPanel/DashboardPanelUser.vue' /* webpackChunkName: "components/dashboard-panel-user" */).then(c => wrapFunctional(c.default || c)),
  HomeFeature: () => import('../../components/Home/HomeFeature.vue' /* webpackChunkName: "components/home-feature" */).then(c => wrapFunctional(c.default || c)),
  MatchSwiper: () => import('../../components/Match/MatchSwiper.vue' /* webpackChunkName: "components/match-swiper" */).then(c => wrapFunctional(c.default || c)),
  PopupLogout: () => import('../../components/Popup/PopupLogout.vue' /* webpackChunkName: "components/popup-logout" */).then(c => wrapFunctional(c.default || c)),
  PopupTutorial: () => import('../../components/Popup/PopupTutorial.vue' /* webpackChunkName: "components/popup-tutorial" */).then(c => wrapFunctional(c.default || c)),
  SwiperContainer: () => import('../../components/Swiper/SwiperContainer.vue' /* webpackChunkName: "components/swiper-container" */).then(c => wrapFunctional(c.default || c)),
  SwiperSlide: () => import('../../components/Swiper/SwiperSlide.vue' /* webpackChunkName: "components/swiper-slide" */).then(c => wrapFunctional(c.default || c)),
  TutorialModel: () => import('../../components/Tutorial/TutorialModel.vue' /* webpackChunkName: "components/tutorial-model" */).then(c => wrapFunctional(c.default || c)),
  TutorialSlide1: () => import('../../components/Tutorial/TutorialSlide1.vue' /* webpackChunkName: "components/tutorial-slide1" */).then(c => wrapFunctional(c.default || c)),
  TutorialSlide2: () => import('../../components/Tutorial/TutorialSlide2.vue' /* webpackChunkName: "components/tutorial-slide2" */).then(c => wrapFunctional(c.default || c)),
  TutorialSlide3: () => import('../../components/Tutorial/TutorialSlide3.vue' /* webpackChunkName: "components/tutorial-slide3" */).then(c => wrapFunctional(c.default || c)),
  TutorialSubmit: () => import('../../components/Tutorial/TutorialSubmit.vue' /* webpackChunkName: "components/tutorial-submit" */).then(c => wrapFunctional(c.default || c)),
  TemplateTheNavbar: () => import('../../components/Template/TheNavbar.vue' /* webpackChunkName: "components/template-the-navbar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
