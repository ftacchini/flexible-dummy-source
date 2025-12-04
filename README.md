# flexible-dummy-source

## ⚠️ DEPRECATED

**This package has been deprecated and merged into `flexible-core`.**

The `DummyEventSource` class is now available directly from `flexible-core`:

```typescript
// Old (deprecated)
import { DummyEventSource } from "flexible-dummy-source";

// New
import { DummyEventSource } from "flexible-core";
```

### Migration Guide

1. Remove `flexible-dummy-source` from your `package.json` dependencies
2. Update your imports to use `flexible-core` instead
3. Run `npm install` to update dependencies

### Why was this deprecated?

This package was merged into `flexible-core` to:
- Eliminate circular dependencies between test packages
- Simplify the dependency tree
- Provide test utilities in a single, centralized location
- Reduce the number of packages to maintain

### Location in flexible-core

The `DummyEventSource` class is now located at:
- Source: `flexible-core/src/event/dummy-event-source.ts`
- Export: Available from `flexible-core` main export

For more information, see the [flexible-core documentation](https://github.com/ftacchini/flexible-core).