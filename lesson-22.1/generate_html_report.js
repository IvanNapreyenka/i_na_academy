const reporter = require('cucumber-html-reporter');
const options = {
        theme: 'bootstrap',
        jsonFile: 'test_report/',
        output: 'test_report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Browser": "Chrome",
            "Platform": "Windows 10"
        },
        failedSummaryReport: true,
    };

    reporter.generate(options);