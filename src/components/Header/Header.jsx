import styles from "./Header.module.scss";
// import avatar from "icons/avatar.svg";
// import cart from "icons/Vector.svg";
// import favorit from "icons/favorite.svg";
// import search from "icons/search.svg";
import Menu from "./Menu";
import React from 'react';
import { Link } from "react-router-dom";

const Header = ({
   setActivemenu,
   activemenu,
}) => {





   const sortRef = React.useRef()

   React.useEffect(() => {

      const handleClickOutside = (event) => {
         if (!event.path.includes(sortRef.current)) {
            setActivemenu(false)
         }
      }

      document.body.addEventListener('click', handleClickOutside)
      return () => {
         document.body.removeEventListener('click', handleClickOutside)
      }
   }, []);

   return (
      <div className={styles.header}>
         <div ref={sortRef} className={styles.position}>
            <div onClick={() => setActivemenu(!activemenu)} className={activemenu ? styles.close : styles.burger}>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <Menu
               open={activemenu}

            />
         </div>
         <div className={styles.navbar}>
            <div className={styles.search}>
               <img src="icons/search.svg" alt="" />
               <div className={styles.form__group}>
                  <input
                     type="text"
                     className={styles.form__input}
                     placeholder=" "
                  />
                  <label className={styles.form__lable}>Логин</label>
               </div>
            </div>
            <div className={styles.icons}>
               <Link to="/"><img src="icons/avatar.svg" alt="" /></Link>
               <Link to="/"><img src="icons/Vector.svg" alt="" /></Link>
               <Link to="/Card"><img src="icons/favorite.svg" alt="" /></Link>
            </div>
         </div>
      </div>
   )
}

export default Header