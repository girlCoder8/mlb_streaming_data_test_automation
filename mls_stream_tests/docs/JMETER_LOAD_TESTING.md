# How to Perform Load Testing with JMeter

### Steps on How to Create a JMeter test plan to simulate multiple users streaming content. 

1. Create a New Test Plan:
   Open JMeter and create a new Test Plan.

2. Add Thread Group:
   Right-click on the Test Plan > Add > Threads (Users) > Thread Group.

Set the number of threads (virtual users), ramp-up period, and loop count according to your testing requirements.

3. Add HTTP Request Sampler:
   Right-click on the Thread Group > Add > Sampler > HTTP Request.

Configure the HTTP Request sampler with the following details:

- [x] Server Name or IP: URL of the MLB streaming server or endpoint.
- [x] Path: Path to the streaming data.
4. Add Listeners:
   Add listeners to view and analyze the test results. Common listeners include:

- [x] View Results Tree: To view individual sample results.
- [x] Summary Report: To view summary statistics.
- [x] Aggregate Report: To view aggregated results.

Right-click on the Thread Group > Add > Listener and choose the appropriate listener(s).

5. Add Assertions:
   To validate responses, you can add assertions. Right-click on the HTTP Request sampler > Add > Assertions and choose the appropriate assertion.

For example, you can add a Response Assertion to check if certain text or patterns exist in the response.

6. Configure Timers:
   If you need to simulate realistic user behavior, you can add timers to introduce delays between requests. Right-click on the HTTP Request sampler > Add > Timer and choose the appropriate timer.

7. Save and Run the Test:
   Save the Test Plan and run the test.

Click the "Run" menu, then click "Start" to initiate the test.
8. Analyze Results:
   Review the results in the listeners you added. Look for response times, error rates, and other relevant metrics.

9. Parameterization:
   If you want to test different scenarios or data, you can parameterize your requests. This can be done using CSV Data Set Config or other parameterization methods.

10. Scaling:
    For large-scale testing, as a best practice you need to distribute your test across multiple machines. JMeter supports distributed testing, and you can configure it accordingly.
