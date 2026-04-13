import { HeaderDesktop } from "./header-desktop"
import { HeaderMobile } from "./header-mobile"

export function Header() {
    return (
        <>
            <div className="hidden lg:block">
                <HeaderDesktop />
            </div>
            <div className="block lg:hidden">
                <HeaderMobile />
            </div>
        </>
    )
}
