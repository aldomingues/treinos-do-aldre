import { useRouter } from "next/router"
import { StyledMenu, MenuItem, ListMenu } from "./style"
import Link from "next/link"
import { GiBilledCap } from "react-icons/gi";
import { MenuItemProps } from "./interface";
import { GlobalContext, GlobalProvider } from "context/GlobalContext";
import { useContext } from "react";

const Menu = (props: { data: MenuItemProps[] }) => {
  const router = useRouter();
  const {theme} = useContext(GlobalContext)
  console.log(theme)
  return (
      <StyledMenu theme={theme}>
        <div className="list_menu">
          {props.data.map((menuItem) => (
            <div className="menu_item" key={menuItem.route} onClick={() => router.push(menuItem.route)}>
              <>
                <GiBilledCap />
                {menuItem.label}
              </>
            </div>
          ))}
        </div>
      </StyledMenu>
  )
}

export default Menu
