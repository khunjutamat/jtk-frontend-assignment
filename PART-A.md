## PART A: Code Reading & Debugging

## 1. Code Reading
**Question a:** What will be logged to the console, and why?

**Answer:**
`1 0` will be logged to the console because it follows the Vue lifecycle and reactive flow. 

In this case: setup() > mounted() > watch > console.log
- When the component initialises, then the `setup()` function runs first and set `count = 0`
- After that, the `mounted()` hook is triggered and then execute `this.count++`
- `count` is returned from `setup()`, it is reactive.
- `watch` is also triggered because `count` was changed from `mounted()` (0 to 1) (The watcher tracks reactive dependencies.)
- When `count` increases from 0 to 1 then the `watch` function executes immediately. So the log will be `1 (newVal)` `0 (oldVal)`

#

**Question b:** When will `double` be re-computed?

**Answer:**
The `double` property will be re-computed whenever its reactive dependency `count` changes. 

In Vue, it automatically tracks `count` as a dependency. Whenever `count` changes (from 0 to 1 or 1 to 2), Vue detects the change, and it causes `double` to be re-computed and return the latest value.



## 2. Code Debugging
**Question a:** Does this code contain a bug?

**Answer:**
ํYes, the code contains a bug in the `upperTitle()` computed property. This is because the code calls `.toUpperCase()` directly on `this.title` and the `title` property is passed from the parent component (use props for setting the parent's value in the child component). If the parent component does not pass or forget to pass the title prop,`this.title` will be `undefined`. This will cause the website or application to crash.

#

**Question b:** If there is any bug, how would you fix it to make it safe?

**Answer:**
I would fix it by always checking the value to make it safe and ensure the website or application does not crash.

e.g. `return this.title ? this.title.toUpperCase() : 'No Title';`

// Check if `this.title` exists. Otherwise, return a string

or `return this.title?.toUpperCase() ?? 'No Title';`

