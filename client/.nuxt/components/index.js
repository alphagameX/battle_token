import { wrapFunctional } from './utils'

export { default as GlobalLogin } from '../../components/Global/GlobalLogin.vue'
export { default as GlobalLogo } from '../../components/Global/GlobalLogo.vue'
export { default as Card } from '../../components/Card/Card.vue'
export { default as CardGroup } from '../../components/Card/CardGroup.vue'
export { default as DashboardMenu } from '../../components/Dashboard/DashboardMenu/DashboardMenu.vue'
export { default as DashboardMenuConfrontation } from '../../components/Dashboard/DashboardMenu/DashboardMenuConfrontation.vue'
export { default as DashboardPageMyClub } from '../../components/Dashboard/DashboardPage/DashboardPageMyClub.vue'
export { default as DashboardPanelData } from '../../components/Dashboard/DashboardPanel/DashboardPanelData.vue'
export { default as DashboardPanelMatch } from '../../components/Dashboard/DashboardPanel/DashboardPanelMatch.vue'
export { default as DashboardPanelUser } from '../../components/Dashboard/DashboardPanel/DashboardPanelUser.vue'
export { default as HomeFeature } from '../../components/Home/HomeFeature.vue'
export { default as MatchSwiper } from '../../components/Match/MatchSwiper.vue'
export { default as PopupLogout } from '../../components/Popup/PopupLogout.vue'
export { default as PopupTutorial } from '../../components/Popup/PopupTutorial.vue'
export { default as SwiperContainer } from '../../components/Swiper/SwiperContainer.vue'
export { default as SwiperSlide } from '../../components/Swiper/SwiperSlide.vue'
export { default as TutorialModel } from '../../components/Tutorial/TutorialModel.vue'
export { default as TutorialSlide1 } from '../../components/Tutorial/TutorialSlide1.vue'
export { default as TutorialSlide2 } from '../../components/Tutorial/TutorialSlide2.vue'
export { default as TutorialSlide3 } from '../../components/Tutorial/TutorialSlide3.vue'
export { default as TutorialSubmit } from '../../components/Tutorial/TutorialSubmit.vue'
export { default as TemplateTheNavbar } from '../../components/Template/TheNavbar.vue'

export const LazyGlobalLogin = import('../../components/Global/GlobalLogin.vue' /* webpackChunkName: "components/global-login" */).then(c => wrapFunctional(c.default || c))
export const LazyGlobalLogo = import('../../components/Global/GlobalLogo.vue' /* webpackChunkName: "components/global-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCard = import('../../components/Card/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyCardGroup = import('../../components/Card/CardGroup.vue' /* webpackChunkName: "components/card-group" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardMenu = import('../../components/Dashboard/DashboardMenu/DashboardMenu.vue' /* webpackChunkName: "components/dashboard-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardMenuConfrontation = import('../../components/Dashboard/DashboardMenu/DashboardMenuConfrontation.vue' /* webpackChunkName: "components/dashboard-menu-confrontation" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardPageMyClub = import('../../components/Dashboard/DashboardPage/DashboardPageMyClub.vue' /* webpackChunkName: "components/dashboard-page-my-club" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardPanelData = import('../../components/Dashboard/DashboardPanel/DashboardPanelData.vue' /* webpackChunkName: "components/dashboard-panel-data" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardPanelMatch = import('../../components/Dashboard/DashboardPanel/DashboardPanelMatch.vue' /* webpackChunkName: "components/dashboard-panel-match" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardPanelUser = import('../../components/Dashboard/DashboardPanel/DashboardPanelUser.vue' /* webpackChunkName: "components/dashboard-panel-user" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeFeature = import('../../components/Home/HomeFeature.vue' /* webpackChunkName: "components/home-feature" */).then(c => wrapFunctional(c.default || c))
export const LazyMatchSwiper = import('../../components/Match/MatchSwiper.vue' /* webpackChunkName: "components/match-swiper" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupLogout = import('../../components/Popup/PopupLogout.vue' /* webpackChunkName: "components/popup-logout" */).then(c => wrapFunctional(c.default || c))
export const LazyPopupTutorial = import('../../components/Popup/PopupTutorial.vue' /* webpackChunkName: "components/popup-tutorial" */).then(c => wrapFunctional(c.default || c))
export const LazySwiperContainer = import('../../components/Swiper/SwiperContainer.vue' /* webpackChunkName: "components/swiper-container" */).then(c => wrapFunctional(c.default || c))
export const LazySwiperSlide = import('../../components/Swiper/SwiperSlide.vue' /* webpackChunkName: "components/swiper-slide" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorialModel = import('../../components/Tutorial/TutorialModel.vue' /* webpackChunkName: "components/tutorial-model" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorialSlide1 = import('../../components/Tutorial/TutorialSlide1.vue' /* webpackChunkName: "components/tutorial-slide1" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorialSlide2 = import('../../components/Tutorial/TutorialSlide2.vue' /* webpackChunkName: "components/tutorial-slide2" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorialSlide3 = import('../../components/Tutorial/TutorialSlide3.vue' /* webpackChunkName: "components/tutorial-slide3" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorialSubmit = import('../../components/Tutorial/TutorialSubmit.vue' /* webpackChunkName: "components/tutorial-submit" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplateTheNavbar = import('../../components/Template/TheNavbar.vue' /* webpackChunkName: "components/template-the-navbar" */).then(c => wrapFunctional(c.default || c))
