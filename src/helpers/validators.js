const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value && value.trim().length ? undefined : "Required");
const minLength = min => value => value && value.trim().length >= min ? undefined : `Must be at least ${min} characters`;
const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const simpleMemoize = fn => {
    let lastArg;
    let lastResult;
    return arg => {
        if (arg !== lastArg) {
            lastArg = arg;
            lastResult = fn(arg);
        }
        return lastResult;
    };
};

const usernameAvailable = simpleMemoize(async value => {
    if (!value) {
        return "Required";
    }
    await sleep(400);
    if (
        ~["john", "paul", "george", "ringo"].indexOf(value && value.toLowerCase())
    ) {
        return "Username taken!";
    }
});

export {
    sleep,
    required,
    minLength,
    mustBeNumber,
    minValue,
    composeValidators
}