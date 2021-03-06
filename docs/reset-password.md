# Reset password, one-time login

When I have forgotten my password, I can recover it by having a link sent to my e-mail address with which I can login once and set my password to one that I will remember.

## Acceptance tests

- In the login area I see a 'forgot password?' link.
- After having supplied my username or e-mail, and pressing this link, I receive an e-mail on the e-mail address of my account.
  - If I haven't entered a valid username or e-mail, then I can see a message letting me know what went wrong and how I can correct it.
  - When I've clicked the link and an e-mail was sent, then I can see a message letting me know that I can check my e-mail for further instructions.
- When I open the e-mail..
  - I can see clear instruction about how to proceed for loggin in.
  - I see a link that I can use only once. Clicking this link will log me in automatically, meaning I can set my password to one that I will remember.
  - The link only works for X amount of hours (discuss an appropriate timespan).
  - If I try to open the link more than once, then I am taken to a page where the situation is explained to me.
  - After clicking a used/invalid or expired one-time-login link, I see information about that this link is invalid and that I will have to request another one-time-login link.
  - After clicking a used/invalid or expired one-time-login link, I can see the login form so that I can easily supply my username/e-mail and click the 'forgot password' link again.
