// optimizely -> Key = , variation =
try {
    if (typeof optimizely !== 'undefined') {
        var state = optimizely.get("state");
        let tests = state.getExperimentStates();

        for (const [key, value] of Object.entries(tests)) {
            console.log(`Experiment: ${key}:  ExperimentID: ${JSON.stringify(value.variation.id)}`);
        }
    }
} catch (e) {}

// qubit -> experienceId = experimentId, variationMasterId = variant Id
try {
    if (typeof __qubit !== 'undefined') {
        qubit.uv.events.forEach(u => {
            if (Object.hasOwn(u, 'experienceId') && !Object.hasOwn(u, 'type')) {
                console.log('Experiment: ' + u.experienceId + ': ExperimentID: ' + u.variationMasterId);
            }
        });
    }
} catch (e) {}

try {
    // abtasty => variationName = experiment name + variant
    if (ABTasty !== 'undefined') {
        let abTests = window.ABTasty.getTestsOnPage();
        for (const [key, value] of Object.entries(abTests)) {
            console.log(`Experiment: ${key}:  ExperimentID: ${JSON.stringify(value.variationName)}`);
        }
    }
} catch (e) {}

try {
    if (typeof google_optimize !== 'undefined') {
        function gtag() { dataLayer.push(arguments) }
        // optimize -> name = experimentID, value = variant number (0 = control etc.)
        gtag('event', 'optimize.callback', {
            callback: (value, name) => console.log('Experiment: ' + name + ' ExperimentID: ' + value)
        });
    }

} catch (e) {}