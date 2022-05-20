import { SidebarDashboard } from './styles';
import BrandDashboard from '../../../../assets/BrandDashboard.svg';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import { MdInbox, MdFormatListBulleted } from 'react-icons/md';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <SidebarDashboard>
      <div>
        <Link to="/">
          <img src={BrandDashboard} alt="logo" />
        </Link>
        <BiMenu />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <MdInbox />
              <span>Tarefas</span>
            </Link>
            <span></span>
          </li>

          <li>
            <Link to="/lists">
              <MdFormatListBulleted />
              <span>Listas</span>
            </Link>
          </li>

          <li>
            <div>
              <span>
                <h4>Gabriel Cleiton</h4>
                <p>Usuário</p>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </SidebarDashboard>
  );
}
