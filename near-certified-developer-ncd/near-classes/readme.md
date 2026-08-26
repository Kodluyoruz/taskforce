# Classes

You will generally want to define your classes in a different file and then import them:

```
// 1. define the class in the `assembly/model.ts` file
export class PostedMessage {
  sender: string;
  text: string;
}
```

```
// 2. Import the class to your `assembly/main.ts` file
import { PostedMessage } from "./model";
```

