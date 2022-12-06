
try {
    if (typeof optimizely !== 'undefined') {
        var state = optimizely.get("state");
        let tests = state.getExperimentStates();

        for (const [key, value] of Object.entries(tests)) {
            console.log(`Experiment: ${key}:  VariantID: ${JSON.stringify(value.variation.id)}`);
        }
    }
} catch (e) {}


try {
    if (typeof __qubit !== 'undefined') {
        qubit.uv.events.forEach(u => {
            if (Object.hasOwn(u, 'experienceId') && !Object.hasOwn(u, 'type')) {
                console.log('Experiment: ' + u.experienceId + ': VariantID: ' + u.variationMasterId);
            }
        });
    }
} catch (e) {}


try {
    if (ABTasty !== 'undefined') {
        let abTests = window.ABTasty.getTestsOnPage();
        for (const [key, value] of Object.entries(abTests)) {
            console.log(`Experiment: ${key}:  VariantID: ${JSON.stringify(value.variationName)}`);
        }
    }
} catch (e) {}

try {
    if (typeof google_optimize !== 'undefined') {
        function gtag() { dataLayer.push(arguments) }
        gtag('event', 'optimize.callback', {
            callback: (value, name) => console.log('Experiment: ' + name + ' VariantID: ' + value)
        });
    }

} catch (e) {}