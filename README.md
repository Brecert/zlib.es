# zlib.es

ECMAScript/Deno compliant lightweight zlib implementation

## Usage

### compression

```
import { deflate } from 'zlib.es';

const compressedData = deflate(rawData); // Input type is Uint8Array
```

### decompression

```
import { inflate } from 'zlib.es';

const rawData = inflate(compressedData);
```
