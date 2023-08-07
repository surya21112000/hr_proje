import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
const BreadCrumb = () => (
    <Breadcrumb

    style={{
      margin: '5%',
    }}
    items={[
      {
        href: 'home',
        title: <HomeOutlined />,
      },
      {
        href: 'employees',
        title: (
          <>
            <UserOutlined />
            <span>All Employee</span>
          </>
        ),
      },
      {
        title: 'Application',
      },
    ]}

  />
);
export default BreadCrumb;