import { Menu } from 'antd';
import React, { useState } from 'react';

const NavItems = (props) => {
    function getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }
      const items = [
        getItem('Profile', 'profile'),
        getItem('Employees', 'employees',null, [
          getItem('Employee List', 'employeeList'),
          getItem('Add Employee', 'addEmployee'),
        ]),
        getItem('Leave Management', 'leaves',null, [
          getItem('All Leave Request', 'allLeaveRequest'),
          getItem('Leave Balance', 'leaveBalance'),
          getItem('New Leave Request', 'newLeaveRequest'),
          getItem('Edit Leave Request', 'editLeaveRequest'),
          getItem('Leave Types', 'leaveTypes'),
        ]),
        getItem('Logout', 'logout'),
      ];

  const rootSubmenuKeys = ['profile', 'employees', 'logout'];
  const [openKeys, setOpenKeys] = useState(['profile']);
  const onOpenChange = (keys) => {
    console.log(keys,"---keys")
    console.log(openKeys)
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  function printSelected(items){
    props.changeSelectedNav(items['key'])
  }
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onSelect={printSelected}
      style={{
        width: "100%",
        borderRadius:'0.7rem'

      }}
      items={items}
    />
  );
};
export default NavItems;
