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
- When `count` increases from 0 to 1 then the `watch` function executes immediately. So the log will be 1 0 (newVal, oldVal)



**Question b:** When will `double` be re-computed?

**Answer:**
The `double` property will be re-computed whenever its reactive dependency `count` changes. 

In Vue, it automatically tracks `count` as a dependency. Whenever `count` changes (from 0 to 1 or 1 to 2), Vue detects the change, and it causes `double` to be re-computed and return the latest value.




