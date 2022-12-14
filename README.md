# variantChecker
Chrome extension for checking the experiment and variant ID's

## Installation
1. Clone the variantChecker repo
   ```
   git clone git@github.com:ClickValue/variantChecker.git
   ```
2. Navigate to Chrome's Extension page: <chrome://extensions/>
3. Click the "Load unpacked" button in the upper left corner.
4. Navigate to the variantChecker folder you've cloned.
5. Press the "Details" button in the Variant Checker extension.
6. Set the 'Allow in Incognito' switch to on. 

## Usage
After installing the Variant Checker, the extension will execute a content script after every page load. You can see if it is running by the console log "injecting content script". If there is an experiment running, the extension will log the experiment name or ID and the variant ID.

Make sure to double check all the variants in the A/B testtool.

These include: Google Optimize, Optimizely, AB Tasty and Qubit.

Example:

If you have an experiment running with four total variants in Google Optimize: Control, Variant 1, Variant 2 and the Copy Control. The Variant IDs will be Control=0, Variant 1=1, Variant 2=2 and the Copy (!) Control=3.

To disable the extension, turn off the extension inside Chrome's extension menu.
