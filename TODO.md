Thoughts:

Rename AsyncActionRunner ==> AsyncValue.
Rename useAsyncValue ==> useValue.
Make useAsyncValue for AsyncValue only.
Keep useAsyncStatus for AsyncValues.

We should rename useAsyncValue ==> useValue and only take ObservableValues
We should rename keep useAsyncValue for all

useValue(v: ObservableValue);
useAsyncValue(v: AsyncValue);
useValueEffect(()=>{}, v);
useAsyncValueEffect(()=>{}, v);
useAsyncError(v: AsyncValue);
useAsyncErrorEffect(v: AsyncValue);
useAsyncState(v: AsyncValue);
useAsyncStateEffect(v: AsyncValue);
useAsyncStatus(v: AsyncValue);
useAsyncStatusEffect(v: AsyncValue);

const value = new AsyncValue([]);
value.execute(()=>{return WeakPromise.resolve([])});

# Field Presenter Thoughts

```ts
new StringFieldDomain("First Name", "Value");
// or
new StringFieldDomain("First Name", () => new WeakPromise("Value"));

// With options
new StringFieldDomain("First Name", "Value", {
  isRequired: true,
  shouldValidateOnChange: true,
  shouldValidateOnBlur: true,
  shouldValidateOnLoad: true,
  onChange: (value: string) => {},
  onBlur: (value: string) => {},
  validate: (value: string) => {
    if (value.length === 0) {
      throw new Error("Cannot be empty.");
    }
  },
});

new SelectFieldDomain(
  "Organization",
  {
    id: 1,
    label: "Organization 1",
    value: "Org1",
  },
  [
    {
      id: 1,
      label: "Organization 1",
      value: "Org1",
    },
    {
      id: 2,
      label: "Organization 2",
      value: "Org2",
    },
  ]
);

// or
// getValue returns a WeakPromise<Option<T>> and getOptions returns WeakPromise<Option<T>[]>
new SelectFieldDomain(
  "Organization",
  () => getValue(),
  () => getOptions()
);
```

# Scroll Presenter Thoughts

# Rendering Custom Items

Whenever you need to allow developer to render portions within your component,
do not go through the presenter, have that be a render function passed into the
component.

```tsx
function Component() {
  return (
    <List
      presenter={listPresenter}
      renderItem={(item) => {
        return <Item item={item} />;
      }}
    />
  );
}
```

Keep the presenter about data and the component how to render that data.
