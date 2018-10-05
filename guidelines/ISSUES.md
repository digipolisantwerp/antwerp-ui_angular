# Issue Handling Guidelines

Dear maintainer,

To ensure issues are handled correctly and timely, it is paramount to review the issues list at regular intervals. These guidelines are for your convenience to help assess and resolve issues. All maintainers are kindly asked to pitch in and help keep a clean issues list.

- [Issue Handling Guidelines](#issue-handling-guidelines)
    - [Issue labels](#issue-labels)
    - [Scanning the issues list](#scanning-the-issues-list)
    - [Assigning and resolving issues](#assigning-and-resolving-issues)

## Issue labels

The various issue labels are:

- `bug`, `feature` and `policy` to classify the type of issue. Every issue should fall into one of these categories.
- `verified` for a valid bug report
- `help wanted` for an issue that is valid but is not on anyone's roadmap for resolving
- `missing info` for an issue that is blocked on additional info by the submitter or a third party
- `good first issue` for issues that are ideal for first-time contributors looking for something to do
- `duplicate` for an issue that duplicates another issue (a comment should link back to the original issue)
- `invalid` for an issue that is not a real issue (e.g. a bug report about expected behavior) or was improperly reported (e.g. insufficient information and the submitter does not provide more info when asked)
- `wontfix` for an issue that will never be resolved for a good reason (a comment should explain the reason)

## Scanning the issues list

At regular intervals review the open issues list and **verify for every issue**:

- Issues have received a `bug`, `feature` or `policy` label to clarify the type of issue
    - When an issue combines multiple types, work with the submitter to split it into multiple issues. If the submitter proves unwilling to help, either split it yourself or close it with a label `invalid` and add a comment explaining why it was closed.
    - When splitting an issue link back to the original issue from which the new issues are split off
- Bug reports are marked as `verified` or `missing info`.
    - The label `verified` is applied when a maintainer has reproduced it or verified it is reproduceable.
    - Feel free to try reproducing yourself.
- Features and verified bug reports are on some team's roadmap, assigned to a developer, or marked as `help wanted`. (See the guidelines below for assigning.)
    - And issues with label `help wanted` that are good for first-time contributors have the label `good first issue`.
- Issues that are blocked on additional information have a `missing info` label and a comment asking the appropriate person for the information.
    - If the submitter does not respond in a few weeks, you can ping them or close the issue as `invalid`.
- Issues of type `policy` are assigned to someone for resolving.

Doing this regularly ensures that the issues list remains clean and manageable.

## Assigning and resolving issues

For types `bug` and `feature`:

- If a specific contributor will fix it, the issue is assigned to them.
- If a particular team will do it, a comment should clarify this (a JIRA issue id may be added as a link.)

For type `policy`:

- Look for an appropriate maintainer to help resolve this question and assign to them.
- Link to the issue in the [#acpaas-ui-dev](https://dgpls.slack.com/messages/C4S2D7KTK) slack channel if it needs broader discussion.

Contributors are expected to keep an eye on their assigned issues and work towards resolving them. If this is not possible, the maintainers should help find someone else to assign the issue to.

You can close an issue:

- If a commit is needed, when the PR is merged to master (the PR should reference the issue id).
- For issues of type `policy`, when they were fully answered or corresponding commits have been merged into master.
- For issues of type `bug` or `feature`, when the PR is merged that solves them, or when they are determined to be `wontfix` or `invalid` (a comment should explain why).
- When the issue duplicates an earlier one. Mark it as `duplicate` and link back to the original issue.
- When the issue will never be done for technical or policy reasons. Mark it as `wontfix` and add a comment explaining why.
