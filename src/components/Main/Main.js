import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <main>
      <Promo>
        <NavTab/>
      </Promo>
      <AboutProject/>
      <Techs/>
      <Portfolio/>
    </main>
  );
}

export default Main;
