import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../login/UserReducer';
import AccountMenu from '../menu';

const AppLayout = () => {
    const [user] = useContext(UserContext);

    return (
        <div style={{ width: "100%", height: '100%' }}>
            <div style={{ backgroundColor: '#FFC300', position: 'sticky', top: '0', zIndex: 1000, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                <nav style={{ marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
                    <Link to="/" style={{ margin: '0 10px' }}>Home Page</Link>
                    <Link to="/ShowRecipe" style={{ margin: '0 10px' }}>Show Recipe</Link>
                    {user.id != 0 && <Link to='/RecipeForm'>Add recipe </Link>}
                </nav>
                <AccountMenu />
            </div>
            <div >
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;