// stolen from SlayerUtilities by Antonio32A & Marti157
function prettyNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { prettyNumber }