'use client';
const { useRouter } = require("next/navigation");
const { createContext, useState, useContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user")
  );


  const [currentArtist, setCurrentArtist] = useState(
    localStorage.getItem("artist")
  );

  const [loggedIn, setLoggedIn] = useState(currentUser !== null || currentArtist !== null);
  const [artistLoggedIn, setArtistLoggedIn] = useState(currentArtist !== null);
  // console.log(loggedIn);


  const logout = () => {
    const artist = localStorage.getItem("artist");
    if (artist) {
      localStorage.removeItem("artist");
      setArtistLoggedIn(false);
      router.push("/artist-login");
    } else {
      localStorage.removeItem("user");
      setLoggedIn(false);
      router.push("/user-login");
    }
    // setCurrentUser(null);
    // sessionStorage.removeItem("user");
    // setLoggedIn(false);
    // router.push("/user-login");
  };

  const artistLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("artist");
    setLoggedIn(false);
    router.push("/");
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
        logout,
      }}

      artistValue={{
        currentArtist,
        setCurrentArtist,
        artistLoggedIn,
        setArtistLoggedIn,
        artistLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


const useAppContext = () => useContext(AppContext);
export default useAppContext;