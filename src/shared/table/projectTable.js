import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import React,{ useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Avatar, Divider, Tooltip,Tag, Progress } from 'antd';
import { Table,Button,Space,Input } from 'antd';
import { faker } from '@faker-js/faker';
import {DeleteFilled,EditOutlined,SearchOutlined} from '@ant-design/icons';






let columns = [
  {
    title: 'Project Name',
    dataIndex: 'project',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.project.length - b.project.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Client Name',
    dataIndex: 'client',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.client - b.client,
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.deadline.indexOf(value) === 0,
  },
  {
    title: 'Team Members',
    dataIndex: 'team',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.team.indexOf(value) === 0,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      {
        text: 'Active',
        value: 'Active',
      },
      {
        text: 'Pending',
        value: 'Pending',
      },
      {
        text: 'Closed',
        value: 'Closed',
      },
    ],
    onFilter: (value, record) => record.status.props.children.indexOf(value) === 0,
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.progress.indexOf(value) === 0,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => console.log(value, record),
  },
];
const color=['#EF3A13','#136AEF','#6613EF','#D8EF13','#13A6','#E12313','#493011']
const status=['Active','Inactive','Pending','Suspended']
const data = [
  {
    key: '1',
    project: 'EB bill app',
    client: 'John Doe',
    deadline: '22-06-2023',
    team:     <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=1" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=2" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=3" />

    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />

    <Tooltip title="Ant User" placement="top">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Tooltip>
    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
  </Avatar.Group>,
  status:   <Tag color="success">Active</Tag>,
  progress: <Progress percent={faker.number.int({ min: 20, max: 100 })} showInfo={false} strokeColor={color[Math.floor(Math.random()*color.length)]} />
  ,
  action: [
    <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />,
    <EditOutlined style={{ color: '#0069ff', marginLeft: "20%", cursor: 'pointer' }} />
  ],

  },
  {
    key: '2',
    project: 'E-Commerce site',
    client: faker.person.firstName(),
    deadline: '16-11-2023',
    team:     <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=4" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=5" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=4" />

    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />

    <Tooltip title="Ant User" placement="top">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Tooltip>
    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
  </Avatar.Group>,
  status:   <Tag color="success">Active</Tag>,
  progress: <Progress percent={faker.number.int({ min: 20, max: 100 })} showInfo={false} strokeColor={color[Math.floor(Math.random()*color.length)]} />
  ,
  action: [
    <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />,
    <EditOutlined style={{ color: '#0069ff', marginLeft: "20%", cursor: 'pointer' }} />
  ],

  },
  {
    key: '3',
    project: 'Mobile Banking App',
    client: faker.person.firstName(),
    deadline: '06-08-2023',
    team:     <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=7" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=4" />

    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=5" />

    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />

    <Tooltip title="Ant User" placement="top">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Tooltip>
    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
  </Avatar.Group>,
  status:   <Tag color="warning">Pending</Tag>,
  progress: <Progress percent={faker.number.int({ min: 20, max: 100 })} showInfo={false} strokeColor={color[Math.floor(Math.random()*color.length)]} />
  ,
  action: [
    <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />,
    <EditOutlined style={{ color: '#0069ff', marginLeft: "20%", cursor: 'pointer' }} />
  ],

  },
  {
    key: '4',
    project: 'Healthcare App',
    client: faker.person.firstName(),
    deadline: '12-02-2023',
    team:     <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=433" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=5" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=4" />

    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=2" />

    <Tooltip title="Ant User" placement="top">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Tooltip>
    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
  </Avatar.Group>,
  status:   <Tag color="success">Active</Tag>,
  progress: <Progress percent={faker.number.int({ min: 20, max: 100 })} showInfo={false} strokeColor={color[Math.floor(Math.random()*color.length)]} />
  ,
  action: [
    <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />,
    <EditOutlined style={{ color: '#0069ff', marginLeft: "20%", cursor: 'pointer' }} />
  ],

  },
  {
    key: '5',
    project: 'Social media platform',
    client: faker.person.firstName(),
    deadline: '21-04-2023',
    team:     <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=9" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=12" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=19" />

    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=23" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=23" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=23" />

    <Tooltip title="Ant User" placement="top">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Tooltip>
    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
  </Avatar.Group>,
  status:   <Tag color="error">Closed</Tag>,
  progress: <Progress percent={faker.number.int({ min: 20, max: 100 })} showInfo={false} strokeColor={color[Math.floor(Math.random()*color.length)]} />
  ,
  action: [
    <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />,
    <EditOutlined style={{ color: '#0069ff', marginLeft: "20%", cursor: 'pointer' }} />
  ],

  },
  {
    key: '6',
    project: 'Revops platform',
    client: faker.person.firstName(),
    deadline: '11-09-2023',
    team:     <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=43" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=female&key=29" />
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=39" />

    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=23" />
   
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=male&key=23" />

    <Tooltip title="Ant User" placement="top">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Tooltip>
    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
  </Avatar.Group>,
  status:   <Tag color="warning">Pending</Tag>,
  progress: <Progress percent={faker.number.int({ min: 20, max: 100 })} showInfo={false} strokeColor={color[Math.floor(Math.random()*color.length)]} />
  ,
  action: [
    <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />,
    <EditOutlined style={{ color: '#0069ff', marginLeft: "20%", cursor: 'pointer' }} />
  ],

  },
  
];


const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const ProjectTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  let columns = [
    {
      title: 'Project Name',
      dataIndex: 'project',
      ...getColumnSearchProps('project'),
    
      // specify the condition of filtering result
      // here is that finding the name started with `value`
     
    },
    {
      title: 'Client Name',
      dataIndex: 'client',
      defaultSortOrder: 'descend',
      ...getColumnSearchProps('client'),
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      sorter: (a, b) => parseInt(a.deadline.replace(/-/g, '')) - parseInt(b.deadline.replace(/-/g, '')),
    },
    {
      title: 'Team Members',
      dataIndex: 'team',
   
      
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        {
          text: 'Active',
          value: 'Active',
        },
        {
          text: 'Pending',
          value: 'Pending',
        },
        {
          text: 'Closed',
          value: 'Closed',
        },
      ],
      onFilter: (value, record) => record.status.props.children.indexOf(value) === 0,
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.progress.props.percent - b.progress.props.percent,
      
    },
    {
      title: 'Action',
      dataIndex: 'action',
  
      onFilter: (value, record) => console.log(value, record),
    },
  ];







return (<Table columns={columns} dataSource={data} onChange={onChange} />);}
export default ProjectTable;