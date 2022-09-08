const reporter = require('cucumber-html-reporter');


var options = {
	theme: 'bootstrap',
	jsonFile: 'report/cucumber_report.json',
	output: 'report/cucumber_report.html',
	reportSuiteAsScenarios: true,
	scenarioTimestamp: true,
	launchReport: true,
	metadata: {
		"App Version":"unknown",
		"Test Environment": "STAGING",
		"Platform": "MAC",
		"API Test": "Scenarios",
		"Executed": "Remote"
	}
};

reporter.generate(options);

