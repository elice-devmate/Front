import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import Yunha from './pages/Yunha';
import Sihun from './pages/Sihun';
import Header from './components/common/Header/Header';
import Main from './components/layout/Main/Main';
import Detail from 'pages/Group/Detail';
import Footer from 'components/common/Footer/Footer';
import Create from 'pages/Create/Create';

function App() {
  return (
    <>
      <Header isLoggedIn={false} />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/test" element={<Test />} />
          <Route path="/yunha" element={<Yunha />} />
          <Route path="/sihun" element={<Sihun />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
