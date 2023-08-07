import React from 'react'

import { Space, Table, Tag } from 'antd';
export default function Tables() {


    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
     
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="large">
              <a>Invite</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          tags: ['Java', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          tags: ['Tester'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          tags: ['React', 'Lead'],
        },
        {
            key: '4',
            name: 'Joe Black',
            age: 32,
            tags: ['Manager'],
          },
      
      ];
      
  return (
    <div>
      <Table columns={columns} dataSource={data} size='large' style={{ width: '150%',backgroundColor:'#594a4a1c' ,    boxShadow:' rgb(0 0 0 / 75%) 33px 29px 111px -57px'
}} />
    </div>
  )
}
