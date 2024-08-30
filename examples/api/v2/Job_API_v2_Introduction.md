# API Versioning Update: Transition from v1 to v2

## Introduction

To better support job dispatching requirements and provide enhanced features, we are introducing a new version of the Job API. The new API version, `/api/v2/job`, will be available alongside the existing `/api/v1/job` endpoint. This transition aims to offer improved functionality and more flexible options for managing job dispatching.

## Key Differences Between v1 and v2

### Endpoint URL

- **v1:** `/api/v1/job`
- **v2:** `/api/v2/job`

### New Parameters

- **v1:** The v1 API does not include a parameter for specifying the IDS version.
- **v2:** The v2 API introduces a new optional parameter, `ids`, which specifies the IDS version to target. The parameter can be included in the request. Example: `/api/v2/job?async=true&ids=2024`.

### Purpose of the `ids` Parameter

- **v1:** Job dispatching is handled without specific version targeting. The API determines which queue to use based on internal logic.
- **v2:** The `ids` parameter maps to a specific blinkenlights queue name according to a defined scheme (e.g., `run-script-2024`). This allows for more granular control over job dispatching by explicitly targeting queues associated with particular IDS versions. If the specified queue does not exist, the API will respond with an "invalid ids parameter" error. If the `ids` parameter is not specified it will use the latest IDS version.

### Deprecation and Transition

- **v1:** The v1 API will continue to be supported during a transition period to allow existing integrations time to migrate to the new version.
- **v2:** The v2 API introduces improved flexibility and specificity in job dispatching. Over time, we plan to phase out the v1 endpoint, so users are encouraged to transition to v2 to utilize the new features.

## Purpose of Introducing v2

The introduction of the v2 version of the API serves the following purposes:

- **Enhance Control:** By specifying the `ids` parameter, users can directly control which version of the IDS their jobs are associated with, improving job management and routing based on versioning.
- **Improve Flexibility:** The new version allows for precise targeting of job queues, supporting better organization and management of job execution.
- **Prepare for Future Updates:** As new IDS versions are introduced, the v2 API provides a framework for incorporating these updates and managing their impact on job dispatching.

## Transition Plan

We will maintain the `/api/v1/job` endpoint during the transition period to ensure current users have ample time to update their integrations. Notifications and support will be provided throughout this period to assist with the migration to the `/api/v2/job` endpoint. After a sufficient transition period, `/api/v1/job` will be deprecated.

## Summary

The introduction of `/api/v2/job` marks a significant enhancement in our job dispatching capabilities. By incorporating the `ids` parameter, users gain better control and flexibility, ensuring jobs are routed to the appropriate queues based on IDS versions. We encourage all users to transition to the new API version to leverage these benefits.

For further details and assistance with the transition, please refer to our documentation or contact our support team.

