var contador = {
    cont: 0,
    // TODO:
    sig() {
        return this.cont++;
    }
};
console.log(contador.sig()) // → 0
console.log(contador.sig()) // → 1
console.log(contador.sig()) // → 2