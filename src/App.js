import React from 'react'
import classes from './App.module.scss'
import { Header } from './contain/header/header'
import { Content } from './contain/content/content'
import { Footer } from './contain/footer/footer'
import { Container } from './hoc/container/container'
import { GlobalContext } from './store/globalContext'

const App = () => {

  const {store, autoLogin, autoLoginFalse} = React.useContext(GlobalContext)

  React.useEffect(() => {
    if (store.autoLogin === true) {
      if (localStorage.length !== 0) {
        autoLogin(localStorage)
      } else if (sessionStorage.length !== 0) {
        autoLogin(sessionStorage)
      }
      autoLoginFalse()
    }
  })

  return (
    <div className={classes.App}>
      <Container>
        <Header />
        <Content />
      </Container>
      <Footer />
    </div>
  )
}

export default App