// import { Box, Heading } from '@chakra-ui/react'
// import { ETokenKey, PLATFORM } from 'API/constants'
// import Icon from 'components/Icon'
// import { NextRouter, useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
// import { useMediaQuery } from 'react-responsive'
// import routes from 'routes'
// import { getAuthenticateStorageKey } from 'utils/common'
// import ForgotPassword from './components/ForgotPassword'
// import LoginForm from './components/LoginForm'
// import ResetPassword from './components/ResetPassword'
// import SignUpForm from './components/SignupForm'
// import { AuthenticatePageName, AuthenticatePageTitle, AuthenticatePageType } from './constant'
// const loginBackground: string = '/assets/images/login-background.png'

// export interface ILoginProps {
//   type?: AuthenticatePageType
//   setNamePage: (name: AuthenticatePageName) => void
// }

// const AuthenticatePage = (props: ILoginProps) => {
//   const { type, setNamePage } = props
//   const [pageType, setPageType] = useState<AuthenticatePageType | undefined>(type)
//   const router: NextRouter = useRouter()
//   const { route } = router
//   const isOverflow: boolean = useMediaQuery({ maxHeight: 810 })
//   const platform: PLATFORM = route.includes('cms') ? PLATFORM.CMS : PLATFORM.WEBSITE
//   function getTitle(): string {
//     switch (pageType) {
//       case AuthenticatePageType.LOGIN:
//         setNamePage(AuthenticatePageName.LOGIN)
//         return AuthenticatePageTitle.LOGIN
//       case AuthenticatePageType.FORGOT_PASSWORD:
//         setNamePage(AuthenticatePageName.FORGOT_PASSWORD)
//         return AuthenticatePageTitle.FORGOT_PASSWORD
//       case AuthenticatePageType.RESET_PASSWORD:
//         setNamePage(AuthenticatePageName.RESET_PASSWORD)
//         return AuthenticatePageTitle.RESET_PASSWORD
//       case AuthenticatePageType.SIGN_UP:
//         setNamePage(AuthenticatePageName.SIGN_UP)
//         return AuthenticatePageTitle.SIGN_UP
//       default:
//         setNamePage(AuthenticatePageName.LOGIN)
//         return AuthenticatePageTitle.LOGIN
//     }
//   }

//   useEffect(() => {
//     const token: ETokenKey = getAuthenticateStorageKey(platform)
//     const userToken: string = localStorage.getItem(token) ?? sessionStorage.getItem(token) ?? ''
//     if (userToken) {
//       token && platform === PLATFORM.CMS && router.replace(routes.cms.bookManagement.value)
//       token && platform === PLATFORM.WEBSITE && router.replace(routes.home.value)
//     }
//   }, [])

//   return (
//     <Box minHeight={isOverflow ? '810px' : '100vh'} background={`url(${loginBackground})`} backgroundSize="cover">
//       <Box width="full" maxWidth="xl" marginX="auto" paddingY={platform === PLATFORM.CMS ? 40 : 20} marginY="auto">
//         <Box
//           background="white"
//           rounded="2xl"
//           marginX={{ base: 8, md: 'auto' }}
//           padding="10"
//           borderWidth="1px"
//           borderColor="gray.200"
//           shadow={{ md: 'md' }}
//         >
//           <Box marginBottom={8} textAlign={{ base: 'center', md: 'center' }}>
//             <Icon iconName="bookshare_logo_dark.svg" width={170} height={26} className="homeroom-logo" />
//             <Heading size="md" marginBottom={2} marginTop={10} fontWeight="extrabold">
//               {getTitle()}
//             </Heading>
//           </Box>
//           {pageType === AuthenticatePageType.LOGIN && <LoginForm setPageType={setPageType} />}
//           {pageType === AuthenticatePageType.FORGOT_PASSWORD && <ForgotPassword />}
//           {pageType === AuthenticatePageType.RESET_PASSWORD && <ResetPassword />}
//           {pageType === AuthenticatePageType.SIGN_UP && <SignUpForm setPageType={setPageType} />}
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default AuthenticatePage
