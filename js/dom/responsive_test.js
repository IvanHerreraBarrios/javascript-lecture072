const d = document 

export default function responsive_tester(form) {
    const $form = d.getElementById(form)
    let tester 

    d.addEventListener("submit", e=> {
        //e.target.maches()
        if(e.target === $form){
            e.preventDefault()
            //alert("Submitted form")
            tester = window.open($form.adress.value, "tester", `innerWidth=${$form.width.value}, innerHeigth =  ${$form.clientHeight.value}`)
        }
    })

    d.addEventListener("click", e=> {
        if (e.target === $form.close())tester.close()
    })
}