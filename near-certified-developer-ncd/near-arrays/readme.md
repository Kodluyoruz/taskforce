# Arrays
Arrays are similar to Arrays in other languages. One key difference is in how they are initialized, and what that means for your app.

```
// The Array constructor implicitly sets `.length = 10`, leading to an array of
// ten times `null` not matching the value type `string`. So, this will error:
var arr = new Array<string>(10);
// arr.length == 10 -> ERROR

// To account for this, the .create method has been introduced that initializes
// the backing capacity normally but leaves `.length = 0`. So, this will work:
var arr = Array.create<string>(10);
// arr.length == 0 -> OK

// When pushing to the latter array or subsequently inserting elements into it,
// .length will automatically grow just like one would expect, with the backing
// buffer already properly sized (no resize will occur). So, this is fine:
for (let i = 0; i < 10; ++i) arr[i] = "notnull";
// arr.length == 10 -> OK
```
