export default function bindMethods(instance) {
    Object
        .getOwnPropertyNames(Object.getPrototypeOf(instance))
        .forEach(key => {
            if (typeof instance[key] === 'function') {
                instance[key] = instance[key].bind(instance);
            }
        });
}
