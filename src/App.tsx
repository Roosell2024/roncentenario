import { Route } from 'wouter';
import { routes } from './config/routes';
import { Container } from './components';

const App = () => {
  return (
    <>
      {routes.map(({ Component, ...rest }) => (
        <Route
          path={rest.path}
          component={() => <Container bgImage={rest.bgImage}>{Component}</Container>}
          key={rest.name}
        />
      ))}
    </>
  );
};

export default App;
