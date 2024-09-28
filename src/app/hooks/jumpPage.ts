import { useState } from "react"
const useJumpPage = () => {
    const [] = useState()
    const handleClick = () => {
        window.open("http://47.116.163.237:8190/", "_blank")
    }
    return {
        handleClick
    }
}

export default useJumpPage