import ContactButton from "./NavButtonContacts"
import LibraryButton from "./NavButtonLibrary"
import TestButton from "./NavButtonTest"
import AboutButton from "./NavButtonAbout"
import "./navButtons.scss"

const NavButtons = () => {
  return (
    <>
        <div className="nav__buttons top__left">
          <ContactButton />
        </div>
        <div className="nav__buttons top__right">
          <TestButton />
        </div>
        <div className="nav__buttons bot__left">
          <AboutButton />
        </div>
        <div className="nav__buttons bot__right">
          <LibraryButton />
        </div>
    </>
  )
}

export default NavButtons