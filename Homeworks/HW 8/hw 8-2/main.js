function cloner(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone
        }
        console.log(cloneObj);
        return cloneObj
    }
    throw new Error('!!!');
}
let clone = cloner({id: 123, name: 'kokos', greeting() {console.log('hello')}, foo() {console.log('bar')}});
clone.foo();