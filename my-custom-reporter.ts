import  type {FullConfig,FullResult,Reporter, Suite,TestCase,JSONReportTestResult, TestResult} from "@playwright/test/reporter";

class MyReporter implements Reporter{
    onBegin(config: FullConfig, suite: Suite) {
        console.log(`Starting the run with ${suite.allTests().length} tests`);
        
    }

    onTestBegin(test: TestCase, result: TestResult): void {
        console.log(` Starting test ${test.title}`);
        
    }

    onTestEnd(test: TestCase, result: TestResult): void {
        console.log(`Finished test $(test.title):${result.status}`);
        
    }
    onEnd(result: FullResult) {
        
        console.log(`Finished the run : ${result.status}`);
        
    }
}

export default MyReporter;