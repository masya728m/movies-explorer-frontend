import {Route} from 'react-router-dom';

function CombinedComponents(props) {
  const mapComponents = () => {
    let components = [];
    for (const componentName in props.components)
      components.push(props.components[componentName]);
    return components;
  }
  return (
    <>
      {mapComponents()}
    </>
  )
}

function RouteWrapper(props) {
  return (
    <Route exact path={props.path} element={<CombinedComponents components={props.components}/>}/>
  )
}

export default RouteWrapper;
