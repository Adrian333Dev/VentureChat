# Usages

## Redux Toolkit

### Add provider in `main.tsx`

```ts
import { Provider } from 'react-redux'
import { setupStore } from '@store'

const store = setupStore();

ReactDOM.render(
  <Provider store={store}> // 👈 Add provider
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Usage in component

```tsx
import { useDispatch } from 'react-redux'

import { userSlice } from '@store/reducers'
import { useAppDispatch, useAppSelector } from '@store/hooks'

const App = () => {
  const { getUsersStart, getUsersSuccess, getUsersFailure } = userSlice.actions;
  const { users, loading, error } = useAppSelector(state => state.user);
  const dispatch = useDispatch();

  return 
    <div>
      <button onClick={() => dispatch(getUsersStart())}>Get Users</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users && users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
};
```
