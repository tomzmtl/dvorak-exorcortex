import React from 'react';
import { Link } from 'fans-router';

import './styles.scss';


const renderTab = (label, to) => <Link to={to}>{label}</Link>;

const Tabs = () => (
  <div className="Tabs">
    {renderTab('Dashboard', '/')}
    {renderTab('Combat', '/combat')}
    {renderTab('Skills', '/skills')}
    {renderTab('Inventory', '/inventory')}
  </div>
);

export default Tabs;
