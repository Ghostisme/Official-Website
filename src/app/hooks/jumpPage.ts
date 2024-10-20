import { useState } from "react"
const useJumpPage = () => {
    const [] = useState()
    const handleClick = () => {
        window.open("http://116.62.226.8:8190/", "_blank")
    }
    return {
        handleClick
    }
}

export default useJumpPage