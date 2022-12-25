import SplashScreen from '../screen/Splash';
import HomeScreen from '../screen/Home';
import Signup from '../screen/SignUp/';
import Login from '../screen/Login/';
import Selection from '../screen/Selection';
import OnBorading from '../screen/Onboarding';
import Interest from '../screen/Interest';
import Notification from '../screen/TurnNotification';
import Setting from '../screen/Setting';
import Profile from '../screen/Profile';
import ListedArticle from '../screen/Listed Article';
import BootOnboarding from '../screen/BootOnboarding';
import InsertArticle from '../screen/InsertArticle';
import BottomTab from '../navigation/BotttomTab';
import Report from '../screen/Report';
import AppDiscription from '../screen/AppDiscription';
import forgetPassword from '../screen/ForgetPassword';
import Term from '../screen/Term';
import DataProtection from '../screen/DataProtection';
// import DataProtection from '../screen/DataProtection';
import resetPassword from '../screen/ResetPassword';
import Chat from '../screen/Chat';
import ChatMenu from '../screen/ChatMenu';
import Deal from '../screen/Deal'
import ArticleInformation from '../screen/ArticleInformation';
import VerificationCode from '../screen/Varification'
import EmailVerification from '../screen/EmailVerfication';

export const stackNavigationList = [
  {name: 'splash', component: SplashScreen},
  {name: 'Deal', component: Deal},
  {name: 'home', component: HomeScreen},
  {name: 'signup', component: Signup},
  {name: 'Login', component: Login},
  {name: 'Selection', component: Selection},
  {name: 'OnBorading', component: OnBorading},
  {name: 'Interest', component: Interest},
  {name: 'Notification', component: Notification},
  {name: 'Setting', component: Setting},
  {name: 'Profile', component: Profile},
  {name: 'BootOnboarding', component: BootOnboarding},
  {name: 'ListedArticle', component: ListedArticle},
  {name: 'InsertArticle', component: InsertArticle},
  {name: 'Report', component: Report},
  {name: 'AppDiscription', component: AppDiscription},
  {name: 'Term', component: Term},
  {name: 'DataProtection', component: DataProtection},
  {name: 'forgetPassword', component: forgetPassword},
  {name: 'VerificationCode', component: VerificationCode},
  {name: 'resetPassword', component: resetPassword},
  {name: 'Chat', component: Chat},
  {name: 'ArticleInformation', component: ArticleInformation},
  {name: 'ChatMenu', component: ChatMenu},
  {name: 'BottomTab', component: BottomTab},
  {name: 'emailverification', component: EmailVerification},
];
