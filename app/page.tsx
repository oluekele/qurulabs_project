
import Account from './create_account/page'

import Dashboard from '../pages/Dashboard'
import DashboardPage from '../pages/dashboard/DashboardPage'
import Notification from '@/pages/Notification'

import CheckBox from '../pages/CheckBox'
import EmailVerified from '../pages/EmailVerified'
import EmailFail from '../pages/EmailFail'
import KYCVerification from '../pages/KYCVerification'

export default function Home() {
  return (
    <div>
      {/* <Account /> */}
      
      {/* <Dashboard /> */}
      
      <DashboardPage />

      {/* <Notification /> */}

      {/* <CheckBox /> */}

      {/* <EmailVerified /> */}

      {/* <EmailFail /> */}
      <KYCVerification />
    </div>
  );
}
