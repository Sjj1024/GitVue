export const imagerror = {
    inserted(dom, options) {
        //如果src是null，那么就将value（也就是默认值）给src
        dom.src = dom.src || options.value

        dom.onerror = function () {
            dom.src = options.value
        }
    },
    componentUpdated(dom, options) {
        dom.src = dom.src || options.value
    }
}