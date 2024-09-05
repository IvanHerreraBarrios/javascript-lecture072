const d = document,
w = window,
n = navigator

export default function networkStatus(){
    const isOnline = () => {
        const $div = d.createElement("div")
        if(n.onLine) {
            $div.textContent = "Connection restored"
            $div.classList.add("online")
            $div.classList.remove("ofline")
        } else {
            $div.textContent = "Connection losted"
            $div.classList.add("ofline")
            $div.classList.remove("online")
        }
        d.body.insertAdjacentElement("afterbegin", $div)
        setTimeout(() => {
            d.body.removeChild($div)
        }, 2000);
    }
    w.addEventListener("online", e=> isOnline)
    w.addEventListener("offline", e=> isOnline)
}