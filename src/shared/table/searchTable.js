import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import {DeleteFilled,EditOutlined} from '@ant-design/icons';
import {faker} from '@faker-js/faker';
import {useNavigate} from 'react-router-dom';
const data = [
  {
    key: '1',
    name: faker.person.firstName(),
    age: 32,
    designation: faker.person.jobType(),
    mobile: faker.datatype.number({ min: 7000000000, max: 9999999999 }),
    joining_date: '2023-06-03',
    address: 'New York No. 1 Lake Park',
    action: [
      <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />,
      <EditOutlined style={{ color: '#0069ff', marginLeft: "20%", cursor: 'pointer' }} />
    ],
    gender: faker.person.sex(),
    image: 'https://xsgames.co/randomusers/avatar.php?g=male'
  },

  // Add more objects with key-value pairs
];

// Add more objects to the array with incremented index
for (let i = 2; i <= 14; i++) {
  data.push({
    key: i.toString(),
    name: faker.person.firstName(),
    age: 42,
    designation: faker.person.jobType(),
    mobile: faker.datatype.number({ min: 7000000000, max: 9999999999 }),
    joining_date: '2023-0' + i + '-01',
    address: 'Sydney No. 1 Lake Park',
    action: [
      <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />,
      <EditOutlined style={{ color: '#0069ff', marginLeft: "20%", cursor: 'pointer' }} />
    ],
    gender: 'Male',
    image: `https://xsgames.co/randomusers/avatar.php?g=male`
  });
}

console.log(data);
const SearchTable = () => {
  const navigate=useNavigate()
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 7,
      
    },

  });

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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      ...getColumnSearchProps('name'),
      sorter: (a,b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '10%',
      ...getColumnSearchProps('age'),
      sorter: (a, b) => a.age.length - b.age.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
      width: '15%',
      ...getColumnSearchProps('designation'),
      sorter: (a, b) => a.designation.length - b.designation.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
      width: '15%',
      ...getColumnSearchProps('mobile'),
      sorter: (a, b) => a.mobile.length - b.mobile.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Joining Date',
      dataIndex: 'joining_date',
      key: 'joining_date',
      width: '15%',
      ...getColumnSearchProps('joining_date'),
      sorter: (a, b) => a.joining_date.length - b.joining_date.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width:'20%',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width:'10%',
      render: (_, record) => (
        <Space>
          <DeleteFilled style={{ color: 'red', cursor: 'pointer' }} />
          <EditOutlined
            style={{ color: '#0069ff', marginLeft: '20%', cursor: 'pointer' }}
            onClick={() => {
           navigate('/employees/edit',{state:{record:{key:record?.key,name:record?.name,age:record?.age,designation:record?.designation,joining_date:record?.joining_date,address:record?.address,Image:record?.image,gender:record?.gender,mobile:record?.mobile}}})
          console.log(record)
          } }
          />
        </Space>
      ),
    
     
    },
  ];
  return <Table xs={20} columns={columns} dataSource={data} size={'middle'} style={{ width: '95%' }} pagination={tableParams.pagination} numberOfRows={3} expandable={true} onChange={(tableParams) => setTableParams(tableParams)}  />;
}; 
export default SearchTable;